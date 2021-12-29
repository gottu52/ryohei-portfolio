import styled, { keyframes } from "styled-components";

export const Header = () => {

    const onClickMenuOpen = () => {
        const ul = document.querySelector('.menu');
        ul.classList.toggle('open');
    }

    return(
        <SHeader>
            <SHeaderBody>
                <SLogo href="#hero">RYOHEI</SLogo>
                <SI className="fas fa-bars" onClick={onClickMenuOpen}></SI>    
            </SHeaderBody>
            <SUl className="menu">
                <SLi><SA>Profile</SA></SLi>
                <SLi><SA>Skill</SA></SLi>
                <SLi><SA>Work</SA></SLi>
                <SLi><SA>Contact</SA></SLi>
            </SUl>
        </SHeader>
    )
}

const SHeader = styled.section`
    width: 100vw;
    height: 80px;
    position: fixed;
    z-index: 2;
`;
const SHeaderBody = styled.div`
    height: 100%;
    background-color: black;
    opacity: .5;
`;
const SLogo = styled.a`
    font-size: 3rem;
    width: 200px;
    color: white;
    padding-left: 20px;
    font-family: 'Vujahday Script', cursive;
    display: block;
    position: relative;
    top: 10px;
    cursor: pointer;
`;
const SI = styled.i`
    font-size: 30px;
    position: absolute;
    right: 30px;
    top: 25px;
    color: white;
    cursor: pointer;
`;
const menuOpen = keyframes`
    from {
        transform: translateX(100vw);
    }
    to {
        transform: none;
    }
`;
const SUl = styled.ul`
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
const SLi = styled.li`
    width: 100vw;
    padding: 10px;
`;
const SA = styled.a`
    font-size: 30px;
    color: white;
    cursor: pointer;
`;
