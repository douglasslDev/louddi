'use client';

import * as Styled from "./styles";



const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    
    <Styled.container>
      <Styled.HeaderContainer>
        <Styled.NavContainer>
        <Styled.logoImage src="/images/WhoWeAre-removebg.png" alt="logoIgreja" />
        <Styled.NavList>
          <Styled.NavItem>
            <Styled.Links href="#Eventos"onClick={handleScroll}>Eventos</Styled.Links>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.Links href="#whoweare" onClick={handleScroll}>
              Quem Somos
            </Styled.Links>
          </Styled.NavItem>
         
          
         
          <Styled.NavItem>
            <Styled.Links href="#collaborate" onClick={handleScroll}>
              Colabore
            </Styled.Links>
          </Styled.NavItem>
        </Styled.NavList>
        
        </Styled.NavContainer>
        <Styled.WhereContainer href="#location" onClick={handleScroll}>
          <Styled.Where>
        Onde Estamos
        </Styled.Where>
          <Styled.IconWhere />
        
      </Styled.WhereContainer>
    
      </Styled.HeaderContainer>
    </Styled.container>
  );
};

export default Header;
