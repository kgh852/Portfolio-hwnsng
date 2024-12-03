import react from 'react';
import styled from 'styled-components'

const Foot = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #232323;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;
function Footer(){

  return (
    <>
      <Foot>
        Copyright 2024. Web Front-end developer portfolio by HwanSeong Kim
      </Foot>
    </>
  )
}

export default Footer;