import { styled } from "styled-components";
import facebook from "./assets/facebook.png";
import x from "./assets/x.png";
import youtube from "./assets/youtube.png";
import instagram from "./assets/instagram.png";
import tumblr from "./assets/tumblr.png";
import spotify from "./assets/spotify.png";
import google_play_badge from "./assets/google_play_badge.png";
import app_store_badge from "./assets/app_store_badge.png";

function FooterLogo() {
  return (
    <>
      <FooterLogoContainer>
        <LogoContainer>
          <img src={facebook} alt="" />
          <img src={x} alt="" />
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
          <img src={tumblr} alt="" />
          <img src={spotify} alt="" />
        </LogoContainer>
        <ButtonsContainer>
          <img src={google_play_badge} />
          <img src={app_store_badge} />
        </ButtonsContainer>
      </FooterLogoContainer>
    </>
  );
}

export default FooterLogo;

const FooterLogoContainer = styled.div`
  width: 70%;
  padding-top: 70px;
  padding-bottom: 70px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  border-bottom: 1px solid gray;
`;

const LogoContainer = styled.div`
  margin-left: 20px;
  img {
    margin: 0px 15px;
  }
  img:hover {
    cursor: pointer;
  }
`;

const ButtonsContainer = styled.div`
  margin-right: 20px;
  img {
    margin: 0px 15px;
  }
  img:hover {
    cursor: pointer;
  }
`;
