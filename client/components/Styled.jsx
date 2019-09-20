import styled from 'styled-components'

export const GridForm = styled.form`
  width: 50%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
  margin: 0 auto;
`

export const ColOne = styled.span`
  grid-column: 1;
  color: #ff3f98;
    font-size: 15px
`

export const ColTwo = styled.input`
  grid-column: 2;
  width: 100%;
  border: 1px solid #eda593;
  border-radius: 5px;
  display: inline-block;
  padding: 10px 10px;
`

export const Button = styled.button`
  grid-column: 2;
  width: 50%;
  background-color: #ff3f98;
  border-radius: 5px;
  color: #ffeecc;
  font-weight: 900;
  border: none;
  padding: 14px 20px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px
`
