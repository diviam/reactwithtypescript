import styled, { keyframes } from "styled-components";

 export const Wrapper = styled.div`
 
 h1{
     color: green;
     font-family:sans-serif;
 }
 .flt{
     float:right;
 }
 .snon{
     display:none;
 }
 `;
 const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
  export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.7rem;
  color: red;
`;