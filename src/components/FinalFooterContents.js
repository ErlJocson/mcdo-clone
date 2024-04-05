import { styled } from "styled-components";
import logo from "./assets/logo.jpg";

function FinalFooterContents() {
  return (
    <>
      <FinalContainer>
        <FinalFooterContentsContainer>
          <Contents>
            <span>Privacy (Updated)</span>
            <span>California Privacy Notice</span>
            <span>Consumer Health Data</span>
            <span>Terms & Conditions</span>
            <span>Accessibility</span>
            <span>Do Not Sell or Share my Personal Information</span>
          </Contents>
          <Cookies>Cookies Settings</Cookies>
        </FinalFooterContentsContainer>

        <OtherFinalFOoterContentsContainer>
          <img src={logo} alt="" width="28px" height="28px" />
          <p>© 2017 - 2024 McDonald's. All Rights Reserved</p>
        </OtherFinalFOoterContentsContainer>
      </FinalContainer>
    </>
  );
}

export default FinalFooterContents;

const FinalContainer = styled.div`
  width: 70%;
  margin: 50px auto 100px;
  display: flex;
  justify-content: space-between;
`;

const FinalFooterContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  span {
    margin: 15px 15px 15px 0;
  }
`;

const Cookies = styled.p`
  color: blue;
`;

const OtherFinalFOoterContentsContainer = styled.div`
  * {
    margin-top: 15px;
    margin-right: 15px;
  }
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
`;
