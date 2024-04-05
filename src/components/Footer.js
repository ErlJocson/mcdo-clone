import { styled } from "styled-components";
import FooterLogo from "./FooterLogo";
import FinalFooterContents from "./FinalFooterContents";

function Footer() {
  return (
    <>
      <MainFooterContainer>
        <MainContentContainer>
          <ContentsContainer>
            <ContentTitle>About Us</ContentTitle>
            <div>
              <p>About Us Overview</p>
              <p>Leadership Team</p>
              <p>Values In Action</p>
              <p>Franchising info</p>
              <p>Recalls & Alerts</p>
              <p>Real Estate</p>
              <p>Accessibility</p>
              <p>Investor Relations</p>
              <p>News & Notifications</p>
            </div>
          </ContentsContainer>

          <ContentsContainer>
            <ContentTitle>Services</ContentTitle>
            <div>
              <p>Services Overview</p>
              <p>Wi-Fi</p>
              <p>PlayPlaces & Parties</p>
              <p>McDelivery®</p>
              <p>Mobile Order & Pay</p>
              <p>Trending Now</p>
              <p>McDonald's Merchandise</p>
              <p>Family Fun Hub</p>
              <p>MyMcDonald's Rewards</p>
              <p>McCafé®</p>
            </div>
          </ContentsContainer>

          <ContentsContainer>
            <ContentTitle>Community</ContentTitle>
            <div>
              <p>Community Overview</p>
              <p>Now Serving</p>
              <p>HACER® Scholarship for Hispanic Students</p>
              <p>Ronald McDonald house Charities®</p>
              <p>McDonald's Asian Pacific American</p>
              <p>McDonald's International</p>
              <p>Black and Positively Golden</p>
              <p>McDonald's LGBTQ+</p>
            </div>
          </ContentsContainer>

          <ContentsContainer>
            <ContentTitle>Contact Us</ContentTitle>
            <div>
              <p>Contact Us Overview</p>
              <p>Gift Card FAQs</p>
              <p>Donations</p>
              <p>Employment</p>
              <p>Customer Feedback</p>
              <p>Frequently Asked Questions</p>
            </div>
          </ContentsContainer>
        </MainContentContainer>
      </MainFooterContainer>
      <FooterLogo />
      <FinalFooterContents />
    </>
  );
}

export default Footer;

const MainFooterContainer = styled.div`
  width: 70%;
  margin: auto;
  p {
    margin: 10px 0;
  }
`;

const MainContentContainer = styled.div`
  display: flex;
  margin-top: 100px;
`;

const ContentsContainer = styled.div`
  margin-right: auto;
`;

const ContentTitle = styled.h4`
  margin-bottom: 20px;
`;
