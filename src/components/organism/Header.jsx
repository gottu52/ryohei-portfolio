import styled, { keyframes } from "styled-components";
import { Link } from 'react-scroll';

export const Header = () => {

    const onClickMenuOpen = () => {
        const ul = document.querySelector('.mobile-menu');
        ul.classList.toggle('open');
    }

    return(
        <SHeader>
            <SHeaderBody>
                <SLogo to="hero" smooth={true}>RYOHEI</SLogo>
                <SI className="fas fa-bars" onClick={onClickMenuOpen}></SI> 
                <SUl>
                    <SLi><SLink to="profile" smooth={true} style={{color: "white"}}>Profile</SLink></SLi>
                    <SLi><SLink to="skills" smooth={true} style={{color: "white"}}>Skills</SLink></SLi>
                    <SLi><SLink to="works" smooth={true} style={{color: "white"}}>Works</SLink></SLi>
                    <SLi><SLink to="contact" smooth={true} style={{color: "white"}}>Contact</SLink></SLi>
                </SUl>       
            </SHeaderBody>
            <SMobileUl className="mobile-menu">
                <SMobileLi><SLink to="profile" smooth={true} style={{color: "white"}}>Profile</SLink></SMobileLi>
                <SMobileLi><SLink to="skills" smooth={true} style={{color: "white"}}>Skills</SLink></SMobileLi>
                <SMobileLi><SLink to="works" smooth={true} style={{color: "white"}}>Works</SLink></SMobileLi>
                <SMobileLi><SLink to="contact" smooth={true} style={{color: "white"}}>Contact</SLink></SMobileLi>
            </SMobileUl>
        </SHeader>
    )
}

const SHeader = styled.section`
    width: 100vw;
    height: 60px;
    position: fixed;
    z-index: 2;
    @media (min-width: 600px) {
        height: 100px;
    }
`;
const SHeaderBody = styled.div`
    height: 100%;
    background-color: black;
    opacity: .5;
    display: flex;
`;
const SLogo = styled(Link)`
    font-size: 2rem;
    width: 200px;
    color: white;
    padding-left: 20px;
    font-family: 'Vujahday Script', cursive;
    display: block;
    position: relative;
    top: 10px;
    cursor: pointer;
    margin: auto auto auto 0;
    @media (min-width: 600px) {
        font-size: 3rem;
        margin-left: 50px;
    }
`;
const SUl = styled.ul`
    display: none;
    margin: auto 20px auto auto;
    @media (min-width: 600px) {
        display: flex;
        margin-right: 100px;
    }
`;
const SLi = styled.li`
    padding: 0 20px;
`;
const SI = styled.i`
    font-size: 30px;
    position: absolute;
    right: 30px;
    top: 20px;
    color: white;
    cursor: pointer;
    display: block;
    @media (min-width: 600px) {
        display: none;
    }
`;
const menuOpen = keyframes`
    from {
        transform: translateX(100vw);
    }
    to {
        transform: none;
    }
`;
const SMobileUl = styled.ul`
    width: 100vw;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: black;
    opacity: .8;
    transform: translateX(100vw);
    &.open {
        transform: none;
        animation: ${menuOpen} .5s ease;
    }
`;
const SMobileLi = styled.li`
    width: 100vw;
    padding: 10px;
`;
const SLink = styled(Link)`
    font-size: 30px;
    color: white;
    cursor: pointer;
`;
