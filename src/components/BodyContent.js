import { styled } from "styled-components";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";

function BodyContent() {
  return (
    <>
      <MainBodyContainer>
        <ContentContainer>
          <ImgContainer src={image1} alt="" className="dark-shadow" />
          <MainContent>
            <ContentTitle>$4 Off Your First App Order</ContentTitle>
            <ContentParagraph>
              Download the app and get $4 off your first $4 or more* mobile
              order. Every $1 you spend earns 100 points, redeemable for free
              food—the math is mathing.
            </ContentParagraph>
            <ContentSpan>
              *Offer valid 1x thru the last day of the month for first time app
              users at participating McDonald's. May take up to 48 hours to
              appear in your deals. Must opt in to Rewards. Excludes tax.
            </ContentSpan>
            <ContentButton>
              <button>Get $4 Off in the App</button>
            </ContentButton>
          </MainContent>
        </ContentContainer>

        <ContentContainer>
          <ImgContainer src={image2} alt="" className="dark-shadow" />
          <MainContent>
            <ContentTitle>Can i get uhhh... $0 Delivery Fee</ContentTitle>
            <ContentParagraph>
              Even if you’re not watching the games, this deal’s a good excuse
              to get your faves delivered with a $15+ McDelivery® order—only in
              the app.* Plus, you earn points on every order for free food and
              can get them delivered, too. Check out how easy ordering delivery
              is in the app.*
            </ContentParagraph>
            <ContentSpan>
              *Offer valid 1x 3/25/24 - 4/21/24 at participating McDonald’s.
              Minimum purchase excludes tax/service fees. Delivery prices may be
              higher than at restaurants. Other fees may apply. Not valid with
              any other offer, discount or coupon. Must opt in to Rewards.
            </ContentSpan>
            <ContentButton>
              <button>Get $0 Delivery Fee</button>
            </ContentButton>
          </MainContent>
        </ContentContainer>

        <ContentContainer>
          <ImgContainer src={image3} alt="" className="dark-shadow" />
          <MainContent>
            <ContentTitle>“McD’s Best Burgers Ever.” - Hamburglar</ContentTitle>
            <ContentParagraph>
              You’re gonna love the hotter, juicier, tastier upgrades we’ve made
              to burgers like our Cheeseburger and Double Cheeseburger.* From
              patties grilled with onions and perfectly melted cheese to new
              soft, pillowy buns—these are our best burgers yet. Ask the
              Hamburglar, he can’t keep his hands off of ‘em. Robble, robble.
            </ContentParagraph>
            <ContentSpan>
              *Comparison of McDonald’s classic burgers to prior burgers. ^At
              participating McDonald’s. McDelivery prices may be higher than at
              restaurants. Delivery/other fees may apply.
            </ContentSpan>
            <ContentButton>
              <button>Order in the App</button>
            </ContentButton>
          </MainContent>
        </ContentContainer>
      </MainBodyContainer>
    </>
  );
}

export default BodyContent;

const MainBodyContainer = styled.div`
  width: 70%;
  margin: auto;
`;

const ContentContainer = styled.div`
  margin-top: 100px;
  display: flex;
`;

const ImgContainer = styled.img`
  height: 295px;
  width: 661px;
  margin-right: 10px;
`;

const MainContent = styled.div`
  margin-left: 10px;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.h2`
  color: #292929;
`;

const ContentParagraph = styled.p`
  font-size: 16px;
`;

const ContentSpan = styled.span`
  font-size: 10px;
`;

const ContentButton = styled.div`
  button {
    padding: 13px 25px;
    background-color: #ffbc0d;
    border: none;
    border-radius: 10px;
  }
`;
