import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
  position: fixed;
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 3000;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 150px;
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 150px;
  font-weight: 500;
`;

const Title = styled.h1`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  font-family: "ONE-Mobile-Title";
`;

const Box = styled.div`
  cursor: pointer;
  font-size: 18px;
  padding: 0 10px;
  font-family: "ONE-Mobile-Title";
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 3px;
    background-color: black;
    width: 0;
    transform-origin: left;
    transition: width 0.4s ease-in-out;
  }

  ${(props) =>
    props.active &&
    `
    &::after {
      width: 100%;
    }
  `}
`;

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleLogoClick = () => {
    navigate('/');
    window.location.reload();
  };

  const goToPage = (path) => {
    if (path !== activePath) {
      setActivePath(path);
      navigate(path);
    }
  };

  return (
    <Main>
      <LeftBox>
        <Title onClick={handleLogoClick}>HwanSeong Kim</Title>
      </LeftBox>
      <RightBox>
        <Box
          onClick={() => goToPage('/')}
          active={activePath === '/'}
        >
          ABOUT ME
        </Box>
        <Box
          onClick={() => goToPage('/project')}
          active={activePath === '/project'}
        >
          PROJECT
        </Box>
      </RightBox>
    </Main>
  );
}

export default Header;
