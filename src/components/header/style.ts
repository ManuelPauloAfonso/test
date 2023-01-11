import styled from "styled-components";



export const Container = styled.header`
display: flex;
justify-content: center;
gap: 2rem;
align-items: center;
height: 5.75rem;


position: fixed;
width: 100%;
overflow: hidden;
top: 3rem;

background: #FFFFFF;
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);


ul{
    display: flex;
    gap: 1rem;
    align-items: center;

    li{
      button{
        width: 7.563rem;
        height: 2.313rem;
        border: 2px solid #0156FF;
        border-radius: 50px;
        color: #0156FF;
        background-color: white;
      }
    }
}

`