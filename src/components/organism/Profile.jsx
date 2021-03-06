import styled from "styled-components";

import bgImg from "../../images/background/profile-background.jpg";
import icon from "../../images/icon/icon.png";

export const Profile = () => {
    return(
        <SProfile id="profile">
            <SContainer>
                <STitle>Profile</STitle>
                <SFlex>
                    <SIcon src={icon}/>
                    <SUl>
                        <SLi>氏名 : 飯田諒平</SLi>
                        <SLi>生年月日 : 1月28日</SLi>
                        <SLi>趣味 : ジョギング、筋トレ</SLi>
                        <SLi>法政大学スポーツ健康科学部卒業</SLi>
                        <br />
                        <SLi>
                            卒業後、現場監督業に従事するも、
                            プログラミングに興味を持ち、
                            プログラマーとして生きていくことを決意。
                            現在、フロントエンジニアを目指して就職活動中
                        </SLi>
                    </SUl>
                </SFlex>
            </SContainer>
        </SProfile>
    )
}

const SProfile = styled.section`
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
    @media (min-width: 700px) {
     height: 60vh;   
     width: 50vw;
    }
`;
const STitle = styled.h2`
    font-size: 4rem;
    font-family: 'Vujahday Script', cursive;
    text-align: center;
    margin: 0;
    @media (min-width: 700px) {
        font-size: 4rem;
    }
`;
const SFlex = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 700px) {
        flex-direction: row;
        padding: 10px 50px;
    }
`;
const SIcon = styled.img`
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    @media (min-width: 700px) {
        width: 15rem;
        height: 15rem;   
        padding: 30px 30px 0 30px;
    }
`;
const SUl = styled.ul`
    padding: 0 35px 10px 35px;
`;
const SLi = styled.li`
    font-size: .8rem;
    color: gray;
    @media (min-width: 700px) {
        font-size: 18px;
    }
`;
