import styled from "styled-components";

const FooterStyle = styled.footer`
  background: black;
  height: 146px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  div {
    width: 60%;
    margin: 1%;
    diplay: flex;
    flex-flow: row nowrap;
    align-items: space-around;
    justify-content: space-between;
  }
  a {
    color: white;
    margin: 0 3%;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <a href="foxtrot.com"><img src="images/Shape-link.png"/></a>
        <a href="foxtrot.com"><img src="images/Shape-insta.png"/></a>
        <a href="foxtrot.com"><img src="images/Shape-twitter.png"/></a>
        <a href="foxtrot.com"><img src="images/Shape-fb.png"/></a>
        <a href="foxtrot.com"><img src="images/Shape-mail.png"/></a>
      </div>
      <div><a href="#">Terms of Service</a> <a href="#">Privacy</a></div>
    </FooterStyle>
  )
}

export default Footer;
