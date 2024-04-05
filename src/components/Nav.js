import { styled } from "styled-components";
import logo from "./assets/logo.jpg";

function Nav() {
  return (
    <NavTag className="light-shadow">
      <Header>
        <ImgContainer>
          <img src={logo} alt="" />
        </ImgContainer>

        <NavContainer>
          <TopNav>
            <div class="left">
              <a href="#" className="general-a small-a">
                Language
              </a>
              <a href="#" className="general-a small-a">
                Sign Up for Email
              </a>
              <a href="#" className="general-a small-a">
                Careers
              </a>
            </div>
            <div class="right">
              <a href="#" className="general-a">
                Search
              </a>
              <a href="#">Change you location</a>
              <button>Order Now</button>
            </div>
          </TopNav>

          <BottomNav>
            <a href="#" className="general-a">
              Our Menu
            </a>
            <a href="#" className="general-a">
              Download App
            </a>
            <a href="#" className="general-a">
              MyMcDonald's Rewards
            </a>
            <a href="#" className="general-a">
              Exclusive Deals
            </a>
            <a href="#" className="general-a">
              About Our Food
            </a>
            <a href="#" className="general-a">
              Locate
            </a>
            <a href="#" className="general-a">
              Gift Cards
            </a>
          </BottomNav>
        </NavContainer>
      </Header>
    </NavTag>
  );
}

export default Nav;

const NavTag = styled.div`
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  margin: 0 200px 0 200px;
  justify-content: center;
`;

const NavContainer = styled.div`
  height: 134px;
`;

const TopNav = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    a {
      margin: 15px;
    }
    button {
      background-color: #ffbc0d;
      padding: 0 20px;
      border: none;
      border-radius: 10px;
    }
  }
`;

const BottomNav = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    margin: 0 20px 0 20px;
  }
`;

const ImgContainer = styled.div`
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 35px;
  }
`;
