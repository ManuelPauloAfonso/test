import styled from "styled-components";


export const Container = styled.main`

display: flex;
justify-content: center;
margin-top: 5rem;

div{
  h5{
    margin-top: 2rem;
  }
}
ul{
  margin-top: 2rem;
}
.btn{
  position: fixed;
  right: 15px; 
  bottom: 2rem;
  button{
    width: 5rem;
    height: 3rem;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
`