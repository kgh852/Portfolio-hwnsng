import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Github from '../img/github.png';
import Velog from '../img/velog.png';
import Pf from '../img/profile.png';

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3000;
`;

const Body = styled.div`
  width: 100%;
  &.top-box {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transform: translateY(-100px);
    opacity: 0;
    border-bottom: 2px dashed black
    scroll-snap-align: start;
    transition: transform 0.8s ease, opacity 0.8s ease;
  }

  &.top-box.animate {
    transform: translateY(0);
    opacity: 1;
  }

  &.top2-box,
  &.top3-box {
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-bottom: 2px dashed black;
  }
`;

const TypingContainer = styled.div`
  font-size: 60px;
  font-family: "ONE-Mobile-Title";
  font-weight: 1000;
  white-space: pre-wrap;
  line-height: 1.5;
  text-align: center;
`;

const Text = styled.span`
  display: inline-block;
`;

const AbBox = styled.div`
  display: block;
  width: 800px;
  height: 450px;
  color: black;
  box-shadow: 1px 1px 8px 1px #000;

  &.top {
    display: flex;
    width: 100%;
    height: 100px;
    box-shadow: none;
    justify-content: center;
    align-items: center;
  }
  &.bottom {
    display: flex;
    width: 800px;
    height: 350px;
    box-shadow: none;
  }
  &.right-bottom {
    width: 400px;
    height: 350px;
    box-shadow: none;
  }
  &.left-bottom {
    display: flex;
    justify-content: center;
    width: 400px;
    height: 350px;
    box-shadow: none;
  }
`;

const AboutBox = styled.div`
  display: flex;
  width: 650px;
  height: 50px;
  color: black;
  padding-left: 30px;
  padding-top: 10px;
  font-size: 20px;
  font-family: "ONE-Mobile-Title";
  text-align: center;
  align-items: center;
`;

const Profile = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 200px;
  background-color: black;
`;

const SkillBox = styled.div`
  display: flexbox;
  width: 1000px;
  height: 80vh;
  justify-content: center;
  font-size: 23px;
  font-weight: 500;
`;

const SkillTopBox = styled.div`
  display: flex;
  width: 999px;
  height: 100px;
  justify-content: center;
  margin-top: 20px;
  font-size: 40px;
  font-weight: 500;
`;

const MainSkill = styled.div`
  display: flex;
  width: 800px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 25px;
  margin-left: 20px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.18);
`;

const SkillBar = styled(MainSkill)`
  background: linear-gradient(90deg, #e9ecef, #dee2e6, #ced4da, #adb5bd, #6c757d);
  margin: 0;
  border-radius: 10px 30px 30px 10px;
`;

const ArrowBox = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  z-index: 5000;
  align-items: center;
  gap: 20px;
`;

const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  background-color: #232323;
  color: white;
  font-size: 28px;
  font-weight: 1000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 5000;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: gray;
  }

  &::after{
    background-color: lightgray;
  }
`;

const Body2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

const AcBox = styled.div`
  display: block;
  width: 100%;
  height: 75%;
  justify-content: center;
`;

const AcTopBox = styled.h1`
  display: flex;
  width: 100%;
  height: 15%;
  font-size: 100px;
  font-weight: 500;
  margin: 15px 0px 20px 0px;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  font-family: "ONE-Mobile-Title";
`;

const ConBox = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  margin-top: 60px;
  justify-content: center;
  align-items: space-between;
`;

const ConMBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  height: 60%;
  background-color: white;
  border-radius: 60px;
  cursor: pointer;
  margin-top: 30px;
  transition: all 1s; 
  box-shadow: 2px 2px 8px 2px;
  align-itmes: end;
  &:hover{
    transform: scale(1.1);
  }
`;

const ConMTop = styled(ConMBox)`
  display: flex;
  width: 100%;
  height: 160px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  z-index: 1000;
  box-shadow: none;
  margin: 0;
  border-radius: 60px 60px 0px 0px;
  &:hover{
    transform: scale(1);
  }
`;

const ConMBody = styled(ConMBox)`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  font-size: 40px;
  font-weight: 500;
  transition: all 1s;
  box-shadow: none;
  margin: 0;
  z-index: 100;
  &:hover {
    transform: scale(1);
  }
`;

const Link = styled.a`
  box-shadow: none;
  font-size: 20px;
  &:link {
  color : black;
  }
  &:visited {
    color : black;
  }
  &:hover {
    color : black;
    text-decoration-line: none;
  }
  &:active {
    color : black;
  }
`;

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const fullText = '안녕하세요\nFrontend 개발자 김환성입니다';
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseTime = 2000;

  const goToGitHub = () => {
    window.open("https://github.com/hwnsng", "_blank");
  };
  const goToVelog = () => {
    window.open("https://velog.io/@hwnsng/posts", "_blank");
  };

  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (direction) => {
    setScrollIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex >= 0 && newIndex < sections.current.length) {
        scrollToSection(newIndex);
        return newIndex;
      }
      return prevIndex;
    });
  };

  

  useEffect(() => {
    let timeout;
    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
          setDisplayText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
      }
    } else {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
          setDisplayText((prev) => prev + fullText[charIndex]);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }
  
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);
  

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const sections = useRef([]);

  const scrollToSection = (index) => {
    sections.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <StyledHeader />
      <ArrowBox>
        <ArrowButton onClick={() => handleScroll(-1)}>↑</ArrowButton>
        <ArrowButton onClick={() => handleScroll(1)}>↓</ArrowButton>
      </ArrowBox>
      <Body ref={(el) => (sections.current[0] = el)} className={`top-box ${animate ? 'animate' : ''}`}>
        <TypingContainer>
          <Text>{displayText}</Text>
        </TypingContainer>
      </Body>
      <Body ref={(el) => (sections.current[1] = el)} className="top2-box">
      <AbBox>
          <AbBox className="top">
            <h1 style={{ fontSize: '50px' }}>About</h1>
          </AbBox>
          <AbBox className="bottom">
            <AbBox className="left-bottom">
              <Profile src={Pf}/>
            </AbBox>
            <AbBox className="right-bottom">
            <AboutBox>
                <svg style={{display: 'block', width: '30px', height: '30px', paddingRight: "20px"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"></path>ddd---------------</svg>
                김환성
              </AboutBox>
              <AboutBox>
                <svg style={{display: 'block', width: '30px', height: '30px', paddingRight: "20px"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path></svg>
                2008. 10. 04
              </AboutBox>
              <AboutBox>
                <svg style={{display: 'block', width: '30px', height: '30px', paddingRight: "20px"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"></path></svg>
                경상남도 창원시
              </AboutBox>
              <AboutBox>
                <svg style={{display: 'block', width: '30px', height: '30px', paddingRight: "20px"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
                amc214677@gmail.com
              </AboutBox>
              <AboutBox>
                <svg style={{display: 'block', width: '30px', height: '30px', paddingRight: "20px"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.11 2.8a.34.34 0 0 0-.2 0L.27 5.18a.35.35 0 0 0 0 .67L2 6.4v1.77c-.3.17-.5.5-.5.86 0 .19.05.36.14.5-.08.14-.14.31-.14.5v2.58c0 .55 2 .55 2 0v-2.58c0-.19-.05-.36-.14-.5.08-.14.14-.31.14-.5 0-.38-.2-.69-.5-.86V6.72l4.89 1.53c.06.02.14.02.2 0l7.64-2.38a.35.35 0 0 0 0-.67L8.1 2.81l.01-.01zM4 8l3.83 1.19h-.02c.13.03.25.03.36 0L12 8v2.5c0 1-1.8 1.5-4 1.5s-4-.5-4-1.5V8zm3.02-2.5c0 .28.45.5 1 .5s1-.22 1-.5-.45-.5-1-.5-1 .22-1 .5z"></path></svg>
                경북소프트웨어고등학교<br></br>(소프트웨어개발과)
              </AboutBox>
            </AbBox>
          </AbBox>
        </AbBox>
      </Body>
      <Body ref={(el) => (sections.current[2] = el)} className="top3-box">
      <SkillBox>
          <SkillTopBox>Main Skills</SkillTopBox>
          <div style={{display: 'flex'}}>
            <div style={{width: '110px'}}>
              HTML5
            </div>
           <MainSkill><SkillBar style={{width: '80%'}}></SkillBar></MainSkill>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: '110px'}}>
              CSS3
            </div>
           <MainSkill><SkillBar style={{width: '80%'}}></SkillBar></MainSkill>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: '110px'}}>
              JavaScript
            </div>
           <MainSkill><SkillBar style={{width: '70%'}}></SkillBar></MainSkill>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: '110px'}}>
              React
            </div>
           <MainSkill><SkillBar style={{width: '65%'}}></SkillBar></MainSkill>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: '110px'}}>
              Java
            </div>
           <MainSkill><SkillBar style={{width: '40%'}}></SkillBar></MainSkill>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: '110px'}}>
              Figma
            </div>
           <MainSkill><SkillBar style={{width: '30%'}}></SkillBar></MainSkill>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: '110px'}}>
              MySQL
            </div>
           <MainSkill><SkillBar style={{width: '45%'}}></SkillBar></MainSkill>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: '110px'}}>
              GitHub
            </div>
           <MainSkill><SkillBar style={{width: '30%'}}></SkillBar></MainSkill>
          </div>
        </SkillBox>
      </Body>
      <Body2 ref={(el) => (sections.current[3] = el)}>
        <AcBox>
          <AcTopBox>
            Contact
          </AcTopBox>
          <ConBox>
            <ConMBox style={{marginRight: '50px'}} onClick={goToGitHub}>
              <ConMTop>
                <img src={Github} style={{height: '90px', marginTop: '50px',}}></img>
              </ConMTop>
              <ConMBody>
                <Link href="https://github.com/hwnsng">github.com/hwnsng</Link>
              </ConMBody>
            </ConMBox>  
            <ConMBox onClick={goToVelog}>
              <ConMTop>
                <img src={Velog} style={{height: '90px', marginTop: '50px'}}></img>
              </ConMTop>
              <ConMBody>
                <Link href="https://velog.io/@hwnsng/posts">velog.io/@hwnsng</Link>
              </ConMBody>
            </ConMBox>
          </ConBox>
        </AcBox>
      </Body2>
      <Footer/>
    </>
  );
}

export default Home;
