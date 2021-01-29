import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import endpoints from 'express-list-endpoints'
import dotenv from 'dotenv'
import cloudinaryFramework from 'cloudinary'
import multer from 'multer'
import cloudinaryStorage from 'multer-storage-cloudinary'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/foodForTravels'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())

//CLOUDINARY 
//A great service for storing images in the cloud and accessing them in your database. 
//You get an image-url which you can use, and can also specify the size of the image
const cloudinary = cloudinaryFramework.v2
cloudinary.config({
  cloud_name: 'dpdjckwwc',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = cloudinaryStorage({
  cloudinary,
  params: {
    folder: 'foodForTravels',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
})

const parser = multer({ storage })

//SCHEMAS
const userSchema = mongoose.Schema({
  username: {
    type: String,
    minlength: 2,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  profileImage: {
    imageName: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
    unique: true,
  },
})

const blogpostSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    text: {
      type: String,
      required: true,
      minlength: 20,
    },
    tags: [
      {
        text: { type: String },
      },
    ],
    image: { //Perhaps change this to an array
      imageName: {
        type: String,
      },
      imageUrl: {
        type: String,
      },
    },
    comment: [
      {
        text: {
          type: String,
        },
        createdAt: {
          type: Date,
          default: () => new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

userSchema.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }

  const salt = bcrypt.genSaltSync()
  user.password = bcrypt.hashSync(user.password, salt)
  next()
})

//MODELS
const User = mongoose.model('User', userSchema)

const BlogPost = mongoose.model('BlogPost', blogpostSchema)

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.header('Authorization') })
  if (user) {
    req.user = user
    next()
  } else {
    res.status(401).json({ userLoggedOut: true })
  }
}

//ROUTES
app.get('/', (req, res) => {
  res.send(endpoints(app))
})

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    res.status(503).send({ error: SERVICE_UNAVAILABLE })
  }
})

//CREATE A NEW USER
app.post('/users', async (req, res) => {
  try {
    const { username, password, email } = req.body
    const user = await new User({
      username,
      password,
      email,
    }).save()
    console.log('UserID:', user._id)
    console.log('Accesstoken:', user.accessToken)
    res.status(201).json({ userId: user._id, accessToken: user.accessToken })
  } catch (err) {
    res.status(400).json({
      message: 'Create was unsuccessful',
      error_message: err.message,
      error: err,
    })
  }
})

//LOGIN IN AS USER
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    console.log('User:', user)
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({ userID: user._id, accessToken: user.accessToken })
    } else {
      res.status(404).json({
        message:
          'Oops, something went wrong. Check your username and/or password!'
      })
    }
  } catch (err) {
    res.status(404).json({
      message: 'No user found',
      error_message: err.message,
      error: err,
    })
  }
})

//ADD PROFILE IMAGE TO USER 
//This needs to be a patch since we're modifyin an already existing user
app.patch('/users/:id', parser.single('image'), async(req, res) => {
  const { id } = req.params
  try {
    const userProfile = await User.findOneAndUpdate(
      { _id: id }, //Check why imageName is null in response
      { profileImage: { imageName: req.file.filename , imageUrl: req.file.path }},
      { new: true })
      res.status(200).json(userProfile)
  } catch(err) {
    res.status(400).json({ message: 'Sorry, could not post you profileimage. Check your format, only png or jpg is allowed.', error_message: err.message, error: err })
  }
})

//ADD BLOGPOST AS USER
//One cannot combine sending both formdata and a json-body
//which is why we can't add an image here directly.
app.post('/users/:id/blogposts', authenticateUser)
app.post('/users/:id/blogposts', async (req, res) => {
  try {
    const { author, text, tags } = req.body
    const post = await new BlogPost({
      author,
      text,
      tags,
    }).save()
    res.status(200).send(post)
  } catch (err) {
    res.status(400).json({
      message: 'Create was unsuccessful',
      error_message: err.message,
      error: err,
    })
  }
})

//ADD IMAGE TO BLOGPOST
//This also needs to be a patch since we're modifying an already existing blogpost
app.patch('/users/:id/blogposts/:id', authenticateUser)
app.patch('/users/:id/blogposts/:id', parser.single('image'), async (req, res) => {
  const { id } = req.params
  try {
    const blogPostImage = await BlogPost.findOneAndUpdate(
      { _id: id },
      { image: { imageName: req.file.filename, imageUrl: req.file.path }},
      { new: true })
      res.status(200).json(blogPostImage)
  } catch(err) {
    res.status(400).json({ message: 'Could not update your post. Check your imageformat, only jpg and png allowed', error_message: err.message, error: err })
  }
})

//GET BLOGPOSTS
app.get('/blogposts', async (req, res) => {
  try {
    //const { page = 1, limit = 10 } = req.query
    //const count = BlogPost.countDocuments()
    const tags = req.query.tags

    const blogpostQuery = BlogPost.find()
    if (tags) {
      const tagArray = tags.split(',')
      blogpostQuery.where('tags.text').in(tagArray)
    }
    blogpostQuery
      .sort({ createdAt: 'desc' })
      .limit(10/* limit * 1 */)
      /* .skip((page - 1) * limit) */
    const result = await blogpostQuery.exec()
    res.status(200).json(
      /* {
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      }, */
      result
    )
  } catch (err) {
    res.status(404).json({
      message: 'No posts found',
      error_message: err.message,
      error: err,
    })
  }
})

app.get('/blogposts/:id', async (req, res) => {
  try {
    const blogpost = await BlogPost.findOne(req.params._id)
    res.status(200).json(blogpost)
  } catch (err) {
    res.status(404).status({
      message: 'No posts found with that id',
      error_message: err.message,
      error: err,
    })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
