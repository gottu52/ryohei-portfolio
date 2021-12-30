import styled from "styled-components";

import bgImg from "../../images/background/contact-background.jpg";

export const Contact = () => {
    return(
        <SContact id="contact">
            <SContainer>
                <STitle>Contact</STitle>
                <SUl>
                    <SLi><SI className="fas fa-envelope"></SI>ryohei846@ezweb.ne.jp</SLi>
                    <SLi><SI className="fas fa-phone-alt"></SI>080-9386-2635</SLi>
                    <SLi><STwitter className="fab fa-twitter-square"></STwitter> @ryohei846</SLi>
                    <SLi><SI className="fab fa-github"></SI>https://github.com/gottu52</SLi>
                </SUl>
            </SContainer>
            <SFooter>
                <SP>&copy;2022 iida ryohei</SP>
            </SFooter>
        </SContact>
    )
}

const SContact = styled.section`
    background-image: url(${bgImg});
`;
const SContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    background-color: white;
    border-radius: 8px;
    padding-top: 30px;
    @media (min-width: 700px) {
        height: 60vh;   
    }
`;
const STitle = styled.h2`
    font-size: 3.5rem;
    font-family: 'Vujahday Script', curive;
    text-align: center;
    margin: 0;
    @media (min-width: 700px) {
        font-size: 5rem;   
    }
`;
const SUl = styled.ul`
    padding: 20px;
    margin: 0;
    @media (min-width: 700px) {
        width: 40vw;
        margin: 0 auto;   
    }
`;
const SLi = styled.li`
    padding: 10px 0;
    color: gray;
    @media (min-width: 700px) {
        font-size: 40px;   
    }
`;
const SI = styled.i`
    color: black;
    font-size: 1.5rem;
    padding-right: 10px;
    @media (min-width: 700px) {
        font-size: 2.5rem;
        padding-right: 80px;   
    }
`;
const STwitter = styled(SI)`
    color: #0055FF;
`;
const SFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: gray;
    color: white;
    text-align: center;
    font-size: .8rem;
    @media (min-width: 700px) {
        height: 80px;
        font-size: 1.5rem;   
        padding-top: 20px;
    }
`;
const SP = styled.p`
    line-height: 50px;
    margin: 0;
`;
