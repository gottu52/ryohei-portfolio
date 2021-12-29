import styled from "styled-components";

import bgImg from "../../images/background/profile-background.jpg";
import icon from "../../images/icon.png";

export const Profile = () => {
    return(
        <SProfile>
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
`;
const STitle = styled.h2`
    font-size: 4rem;
    font-family: 'Vujahday Script', cursive;
    text-align: center;
    margin: 0;
`;
const SFlex = styled.div`
    display: flex;
    flex-direction: column;
`;
const SIcon = styled.img`
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
`;
const SUl = styled.ul`
    padding: 10px 35px;
`;
const SLi = styled.li`
    font-size: .8rem;
    color: gray;
`;
