import styled, { keyframes } from "styled-components";

import bgImg from "../../images/background/hero-background.jpg";
import morning from "../../images/clover/morning.jpg"
import noon from "../../images/clover/noon.jpg"
import evening from "../../images/clover/evening.jpg"
import night from "../../images/clover/night.jpg"

export const Hero = () => {
    return(
    <SHero id="hero">
        <STitle>RYOHEI PORTFOLIO</STitle>
        <SImgContainer id="heroImage-container">
          <SImgMorning src={morning} alt="morning" />
          <SImgNoon src={noon} alt="noon" />
          <SImgNight src={night} alt="night" />
          <SImgEvening src={evening} alt="evening" />
        </SImgContainer>
      </SHero>
    )
}

const SHero = styled.section`
    background-image: url(${bgImg});
    text-align: center;
`;
const STitle = styled.h1`
    padding-top: 150px;
    margin: 0 0 4rem 0;
    font-size: 3.5rem;
    font-family: 'Vujahday Script', cursive;
`;
const Windmill = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
const SImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 280px;
    margin: 0 auto;
    animation: ${Windmill} infinite 20s linear;
`;
const SImg = styled.img`
  margin: 5px;
  width: 120px; 
  height: 120px; 
  box-shadow: 0 0 3rem 0 rgba(0, 0, 0, .5);
`;
const SImgMorning = styled(SImg)`
    border-radius: 50% 50% 0 50%;
`;
const SImgNoon = styled(SImg)`
    border-radius: 50% 50% 50% 0;
`;
const SImgEvening = styled(SImg)`
    border-radius: 0 50% 50% 50%;
`;
const SImgNight = styled(SImg)`
    border-radius: 50% 0 50% 50%;
`;