import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import DevLog from '../img/developLog.png';
import Pofo from '../img/Portfolio.png';
import Footer from '../components/Footer';

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 98vw;
  height: 100vh;
  border-bottom: 2px dashed black;
  justify-content: center;
  align-items: end;
  scroll-snap-align: start;
`;

const PjTitle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  font-size: 50px;
  font-weight: 700;
  align-items: center;
  margin-top: 50px;
  color: white;
  justify-content: center;
  background-color: #232323;
`;

const MainBox = styled.div`
  display: flex;
  width: 65vw;
  height: 65vh;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 50px;

  &:hover .overlay {
    transform: translateY(0);
  }
`;

const BackG = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
`;

const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const OverlayButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: red;
  background-color: white;
  border: 2px solid red;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    background-color: red;
    border: none;
  }
`;

const ArrowBox = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  background-color: #232323;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: gray;
  }
`;

function Project() {
  const sections = useRef([]);

  const scrollToSection = (index) => {
    sections.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();

  const NoResult = () => {
    alert("아직 배포가 되지 않은 컨텐츠입니다.");
  }

  return (
    <>
      <Header />
      <ArrowBox>
        <ArrowButton onClick={() => scrollToSection(0)}>↑</ArrowButton>
        <ArrowButton onClick={() => scrollToSection(1)}>↓</ArrowButton>
      </ArrowBox>
      <div ref={(el) => (sections.current[0] = el)}>
        <Body>
          <PjTitle>Frontend PortFolio</PjTitle>
          <MainBox>
            <BackG src={Pofo} />
            <Overlay className="overlay">
              <OverlayContent>
                <h1 style={{ fontSize: '50px', margin: '0' }}>
                  Frontend PortFolio
                </h1>
                <h1
                  style={{
                    fontSize: '35px',
                    fontWeight: '500',
                    marginTop: '30px',
                    marginBottom: '0',
                  }}
                >
                  Stack
                </h1>
                <p>React js / styled-component</p>
                <OverlayButton onClick={NoResult}>LEARN MORE</OverlayButton>
              </OverlayContent>
            </Overlay>
          </MainBox>
        </Body>
      </div>
      <div ref={(el) => (sections.current[1] = el)}>
        <Body style={{border:'none'}}>
          <PjTitle>Develop Log</PjTitle>
          <MainBox>
            <BackG src={DevLog} />
            <Overlay className="overlay">
              <OverlayContent>
                <h1 style={{ fontSize: '50px', margin: '0' }}>Develop Log</h1>
                <h1
                  style={{
                    fontSize: '35px',
                    fontWeight: '500',
                    marginTop: '30px',
                    marginBottom: '0',
                  }}
                >
                  Stack
                </h1>
                <p>SpringBoot / HTML / CSS / JavaScript / MySQL</p>
                <OverlayButton onClick={NoResult}>LEARN MORE</OverlayButton>
              </OverlayContent>
            </Overlay>
          </MainBox>
        </Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Project;