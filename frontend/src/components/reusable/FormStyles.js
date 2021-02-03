import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 50%;
  min-height: 50%;
  background: #fff;
  padding: 10px;
`
export const Label = styled.label`
  margin: 10px;
`
export const Input = styled.input`
  margin-left: 10px;
  padding: 2px;
  border: none;
  background: #d7ecf3;
`
export const ImageLabel = styled.label`
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
`
export const PlusSign = styled.span`
  font-size: 2em;

  @media screen and (min-width: 768px) {
    font-size: 2.5em;
  }
`
export const ImageUploadDiv = styled.div`
  background: #d7ecf3;
  border-radius: 10px;
  width: 150px;
  padding: 5px;

  @media screen and (min-width: 768px) {
    width: 200px;
    padding: 15px;
  }
`
export const Filename = styled.p`
  font-size: 1em;
  font-weight: 600;
`