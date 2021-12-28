import styled from "styled-components";

import bgImg from "../../images/background/contact-background.jpg";

export const Contact = () => {
    return(
        <SContact>
            <SContainer>
                <STitle>Contact</STitle>
                <SUl>
                    <SLi><SI className="fas fa-envelope"></SI>Email  :  ryohei846@ezweb.ne.jp</SLi>
                    <SLi><SI className="fas fa-phone-alt"></SI>Tell  :  080-9386-2635</SLi>
                    <SLi><STwitter className="fab fa-twitter-square"></STwitter>Twitter  :  @ryohei846</SLi>
                    <SLi><SI className="fab fa-github"></SI>Github : https://github.com/gottu52</SLi>
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
    padding: 30px 0;
`;
const STitle = styled.h2`
    font-size: 5rem;
    font-family: 'Vujahday Script', curive;
    text-align: center;
    margin: 0;
`;
const SUl = styled.ul`
    padding: 10px 35px;
`;
const SLi = styled.li`
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px;
    color: gray;
`;
const SI = styled.i`
    color: black;
    font-size: 1.5rem;
    padding-right: 2rem;
`;
const STwitter = styled(SI)`
 color: #0055FF;
`;
const SFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: gray;
    color: white;
    font-size: 1.5rem;
    text-align: center;
`;
const SP = styled.p`
    line-height: 100px;
    margin: 0;
`;
