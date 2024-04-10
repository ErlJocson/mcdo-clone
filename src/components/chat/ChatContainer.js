import { styled } from "styled-components";
import { useState } from "react";
import bubble from "../assets/bubble.png";

function ChatContainer() {
  const [buttons, setButtons] = useState();

  const [receipt, setReceipt] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [details, setDetails] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [mobileOrApp, setMobileOrApp] = useState("");
  const [feedbackTypeResponse, setFeedbackTypeResponse] = useState(false);
  const [firstResponse, setFirstReponse] = useState("");
  const [mcdoTypeLocationFeedback, setMcdoTypeLocationFeedback] = useState("");
  const [orderFeedbackType, setOrderFeedbackType] = useState("");
  const [restaurantFacilityFeedbackType, setRestaurantFacilityFeedbackType] =
    useState("");
  const [serviceStaffFeedbackStaff, setServiceStaffFeedbackStaff] =
    useState("");
  const [finalOrder, setFinalOrder] = useState(false);

  const [showPartners, setShowPartners] = useState(false);

  const [mobileAppClicked, setMobileAppClicked] = useState(false);
  const [orderID, setOrderID] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const setOrderIDFunc = (event) => {
    setOrderID(event.target.value);
  };

  const setCaseNumberFunc = (event) => {
    setCaseNumber(event.target.value);
  };

  const setDetailsFunc = (event) => {
    setDetails(event.target.value);
  };

  const setFirstNameFunc = (event) => {
    setFirstName(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  const setLastNameFunc = (event) => {
    setLastName(event.target.value);
  };

  const setPersonalEmailFunc = (event) => {
    setPersonalEmail(event.target.value);
  };

  const setPhoneFunc = (event) => {
    setPhone(event.target.value);
  };

  const setAppEmailFunc = (event) => {
    setAppEmail(event.target.value);
  };

  const setReceiptFunc = (event) => {
    setReceipt(event.target.value);
  };

  const showChatFunc = () => {
    setShowChat(!showChat);
    setFirstReponse("");
    setMcdoTypeLocationFeedback("");
    setOrderFeedbackType("");
    setServiceStaffFeedbackStaff("");
    setRestaurantFacilityFeedbackType("");
    setFinalOrder(false);
    setFeedbackTypeResponse(false);
    setMobileOrApp(false);
    setShowPartners(false);
  };

  return (
    <>
      <MainContainer className="dark-shadow jump">
        <TitleContainer onClick={showChatFunc}>
          <img src={bubble} alt="" width="30px" height="30px" />
          <h4>Customer Service</h4>
        </TitleContainer>
        {showChat && (
          <ChatContainerBox>
            <ChatContentContainer>
              <p>
                Your response to this question may require you to answer
                additional questions.
              </p>
            </ChatContentContainer>

            <ChatContentContainer className="slide-in-from-bottom-fast">
              <p>How did you initiate the order?</p>
              <ButtonContainer>
                <button
                  onClick={() => {
                    setMobileOrApp(!mobileOrApp);
                    setServiceStaffFeedbackStaff("");
                    setFirstReponse("");
                    setFeedbackTypeResponse(false);
                    setOrderFeedbackType("");
                    setMcdoTypeLocationFeedback("");
                    setRestaurantFacilityFeedbackType("");
                    setFinalOrder(false);
                    setShowPartners(false);
                    setMobileAppClicked(true);
                  }}
                >
                  Mobile App
                </button>
                <button
                  onClick={() => {
                    setMobileOrApp(!mobileOrApp);
                    setServiceStaffFeedbackStaff("");
                    setRestaurantFacilityFeedbackType("");
                    setFinalOrder(false);
                    setMcdoTypeLocationFeedback("");
                    setOrderFeedbackType("");
                    setFeedbackTypeResponse(false);
                    setFirstReponse("");
                    setMobileAppClicked(false);

                    setShowPartners(false);
                  }}
                >
                  Restaurant Visit
                </button>
                <button
                  onClick={() => {
                    setMobileAppClicked(false);
                    setShowPartners(true);
                    setMobileOrApp(false);
                    setServiceStaffFeedbackStaff("");
                    setRestaurantFacilityFeedbackType("");
                    setFinalOrder(false);
                    setMcdoTypeLocationFeedback("");
                    setOrderFeedbackType("");
                    setFeedbackTypeResponse(false);
                    setFirstReponse("");
                    setShowPartners(!showPartners);
                  }}
                >
                  Delivery Partner App
                </button>
              </ButtonContainer>
            </ChatContentContainer>

            {showPartners && (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Which delivery partner?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setFirstReponse("No");
                    }}
                  >
                    Uber Eats
                  </button>
                  <button
                    onClick={() => {
                      setFirstReponse("No");
                    }}
                  >
                    Doordash
                  </button>
                  <button
                    onClick={() => {
                      setFirstReponse("No");
                    }}
                  >
                    Grubhub
                  </button>
                  <button
                    onClick={() => {
                      setFirstReponse("No");
                    }}
                  >
                    Postmates
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            )}

            {mobileOrApp && (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Contacting about a previously reported case?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setServiceStaffFeedbackStaff("");
                      setFeedbackTypeResponse(false);
                      setMcdoTypeLocationFeedback("");
                      setRestaurantFacilityFeedbackType("");
                      setFinalOrder(false);
                      setOrderFeedbackType("");
                      if (firstResponse === "Yes") {
                        setFirstReponse("");
                      } else {
                        setFirstReponse("Yes");
                      }
                    }}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setServiceStaffFeedbackStaff("");
                      setFeedbackTypeResponse(false);
                      setFinalOrder(false);
                      setOrderFeedbackType("");
                      setMcdoTypeLocationFeedback("");
                      setRestaurantFacilityFeedbackType("");
                      if (firstResponse === "No") {
                        setFirstReponse("");
                      } else {
                        setFirstReponse("No");
                      }
                    }}
                  >
                    No
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            )}

            {firstResponse === "Yes" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Report Details: </p>
                <form>
                  <input
                    onChange={setCaseNumberFunc}
                    value={caseNumber}
                    placeholder="Case number..."
                  />
                  <textarea
                    onChange={setDetailsFunc}
                    value={details}
                    placeholder="Details..."
                  ></textarea>
                  <ButtonContainer>
                    <button
                      onClick={(e) => {
                        alert("Follow up sent!");
                        setCaseNumber("");
                        setDetails("");

                        setFirstReponse("");
                        setMcdoTypeLocationFeedback("");
                        setOrderFeedbackType("");
                        setServiceStaffFeedbackStaff("");
                        setRestaurantFacilityFeedbackType("");
                        setFinalOrder(false);
                        setFeedbackTypeResponse(false);
                        setMobileOrApp(false);
                        e.preventDefault();
                      }}
                    >
                      Submit
                    </button>
                  </ButtonContainer>
                </form>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {firstResponse === "No" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Please select a feedback type from the following: </p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setFeedbackTypeResponse(!feedbackTypeResponse);
                      setMcdoTypeLocationFeedback("");
                      setOrderFeedbackType("");
                      setServiceStaffFeedbackStaff("");
                      setRestaurantFacilityFeedbackType("");
                      setFinalOrder(false);
                    }}
                  >
                    Complaint
                  </button>
                  <button
                    onClick={() => {
                      setFeedbackTypeResponse(!feedbackTypeResponse);
                      setMcdoTypeLocationFeedback("");
                      setFinalOrder(false);
                      setServiceStaffFeedbackStaff("");
                      setRestaurantFacilityFeedbackType("");
                      setOrderFeedbackType("");
                    }}
                  >
                    Inquiry
                  </button>
                  <button
                    onClick={() => {
                      setFeedbackTypeResponse(!feedbackTypeResponse);
                      setMcdoTypeLocationFeedback("");
                      setFinalOrder(false);
                      setServiceStaffFeedbackStaff("");
                      setOrderFeedbackType("");
                      setRestaurantFacilityFeedbackType("");
                    }}
                  >
                    Suggestions
                  </button>
                  <button
                    onClick={() => {
                      setFeedbackTypeResponse(!feedbackTypeResponse);
                      setMcdoTypeLocationFeedback("");
                      setFinalOrder(false);
                      setOrderFeedbackType("");
                      setRestaurantFacilityFeedbackType("");
                      setServiceStaffFeedbackStaff("");
                    }}
                  >
                    Compliment
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {feedbackTypeResponse && (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Please select a feedback category from the following: </p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType("");
                      setServiceStaffFeedbackStaff("");
                      setFinalOrder(false);
                      if (mcdoTypeLocationFeedback === "My order") {
                        setMcdoTypeLocationFeedback("");
                      } else {
                        setMcdoTypeLocationFeedback("My order");
                      }
                    }}
                  >
                    My Order
                  </button>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("");
                      setServiceStaffFeedbackStaff("");

                      setFinalOrder(false);
                      if (mcdoTypeLocationFeedback === "Restaurant/Facility") {
                        setMcdoTypeLocationFeedback("");
                      } else {
                        setMcdoTypeLocationFeedback("Restaurant/Facility");
                      }
                    }}
                  >
                    Service
                  </button>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType("");
                      setServiceStaffFeedbackStaff("");
                      setOrderFeedbackType("");
                      setFinalOrder(false);
                      if (mcdoTypeLocationFeedback === "Service/staff") {
                        setMcdoTypeLocationFeedback("");
                      } else {
                        setMcdoTypeLocationFeedback("Service/staff");
                      }
                    }}
                  >
                    Facilities
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            )}

            {mcdoTypeLocationFeedback === "My order" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>What type of feedback do you have?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Charges or Payment");
                      setFinalOrder(false);
                    }}
                  >
                    Charges or Payment
                  </button>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Missing Item(s)");
                      setFinalOrder(false);
                    }}
                  >
                    Missing Item(s)
                  </button>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Portion Size");
                      setFinalOrder(false);
                    }}
                  >
                    Portion Size
                  </button>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Taste or Quality");
                      setFinalOrder(false);
                    }}
                  >
                    Taste or Quality
                  </button>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Wrong Item(s)");
                      setFinalOrder(false);
                    }}
                  >
                    Wrong Item(s)
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {orderFeedbackType === "Charges or Payment" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Additional Charges
                  </button>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Charged Incorrect Amount
                  </button>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Coupon / Gift Card / Currency Not Accepted
                  </button>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Incorrect Change Returned
                  </button>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Menu Pricing
                  </button>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Receipt Not Provided / Illegible
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {orderFeedbackType === "Missing Item(s)" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Item Unavailable For Purchase
                  </button>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Missing Condiment
                  </button>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Missing Happy Meal Toy
                  </button>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Missing Menu Item
                  </button>
                  <button
                    onClick={() => {
                      setFinalOrder(true);
                    }}
                  >
                    Missing Packaging and/or Cutlery
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {orderFeedbackType === "Portion Size" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Portion Size
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {orderFeedbackType === "Taste or Quality" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Condition / Texture / Appearance
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Overcooked
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Undercooked
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Taste / Flavor
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Temperature
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {orderFeedbackType === "Wrong Item(s)" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Received Wrong Condiment
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Received Wrong Ingredients
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Received Wrong Menu Item
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {mcdoTypeLocationFeedback === "Restaurant/Facility" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>What type of feedback do you have?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType("Cleanliness");
                      setFinalOrder(false);
                    }}
                  >
                    Cleanliness
                  </button>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType("Design / Ambience");
                      setFinalOrder(false);
                    }}
                  >
                    Design / Ambience
                  </button>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType(
                        "Facility / Equipment Status"
                      );
                      setFinalOrder(false);
                    }}
                  >
                    Facility / Equipment Status
                  </button>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType("Safety / Security");
                      setFinalOrder(false);
                    }}
                  >
                    Safety / Security
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {restaurantFacilityFeedbackType === "Cleanliness" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Employee Cleanliness
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Restaurant Cleanliness
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Restroom Cleanliness
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {restaurantFacilityFeedbackType === "Design / Ambience" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Restaurant - Design / Ambience
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {restaurantFacilityFeedbackType ===
            "Facility / Equipment Status" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    ADA Accessiblity
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Equipment Unavailable (Out of Order / Cleaning)
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    General Feedback
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Playplace Accessibility / Condition
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Restaurant Signage
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Wifi Availability / Performance
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {restaurantFacilityFeedbackType === "Safety / Security" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Reported Alleged Injury
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {mcdoTypeLocationFeedback === "Service/staff" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>What type of feedback do you have?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setServiceStaffFeedbackStaff("Interaction with Staff");
                      setFinalOrder(false);
                    }}
                  >
                    Interaction with Staff
                  </button>
                  <button
                    onClick={() => {
                      setServiceStaffFeedbackStaff("Restaurant Policies");
                      setFinalOrder(false);
                    }}
                  >
                    Restaurant Policies
                  </button>
                  <button
                    onClick={() => {
                      setServiceStaffFeedbackStaff("Speed of Service");
                      setFinalOrder(false);
                    }}
                  >
                    Speed of Service
                  </button>
                  <button
                    onClick={() => {
                      setServiceStaffFeedbackStaff("Unable To Contact Store");
                      setFinalOrder(false);
                    }}
                  >
                    Unable To Contact Store
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {serviceStaffFeedbackStaff === "Interaction with Staff" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Professionalism / Friendliness
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Staff Ability to Assist
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    No Follow Up
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Unsatisfied with Resolution
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {serviceStaffFeedbackStaff === "Restaurant Policies" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Discount Policy
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    General Restaurant Policies / Feedback
                  </button>
                  <button onClick={() => setFinalOrder(true)}>
                    Participation In Advertised Promotions
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {serviceStaffFeedbackStaff === "Speed of Service" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Speed of Service
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {serviceStaffFeedbackStaff === "Unable To Contact Store" ? (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setFinalOrder(true)}>
                    Phone Not Answered
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {finalOrder && (
              <ChatContentContainer className="slide-in-from-bottom-fast">
                <p>
                  Please tell us what restaurant you visited by entering the
                  store number on your receipt or by finding a location using
                  the restaurant locator.
                </p>
                <form>
                  <input
                    onChange={setReceiptFunc}
                    value={receipt}
                    placeholder="Enter store number from receipt..."
                  />
                  <input
                    onChange={setOrderIDFunc}
                    value={orderID}
                    placeholder="Order ID..."
                  />
                  <ButtonContainer>
                    <button type="button">Verify this number</button>
                    <button type="button">Use Restaurant Locator</button>
                  </ButtonContainer>
                  <p>Feedback Details</p>
                  <textarea
                    onChange={setDetailsFunc}
                    value={details}
                    placeholder="Details..."
                  ></textarea>

                  {mobileAppClicked ? (
                    <>
                      <p>Your Email Address: </p>
                      <input
                        onChange={setPersonalEmailFunc}
                        value={personalEmail}
                        placeholder="Email..."
                      />
                      <label>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        &nbsp; Is this the registered Email address?
                      </label>

                      {!isChecked ? (
                        <>
                          <p>Your info:</p>
                          <input
                            onChange={setFirstNameFunc}
                            value={firstName}
                            placeholder="First Name..."
                          />
                          <input
                            onChange={setLastNameFunc}
                            value={lastName}
                            placeholder="Last Name..."
                          />
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    <>
                      <p>Your Info</p>
                      <input
                        onChange={setFirstNameFunc}
                        value={firstName}
                        placeholder="First Name..."
                      />

                      <input
                        onChange={setLastNameFunc}
                        value={lastName}
                        placeholder="Last Name..."
                      />

                      <input
                        onChange={setPersonalEmailFunc}
                        value={personalEmail}
                        placeholder="Email..."
                      />
                      <input
                        onChange={setPhoneFunc}
                        value={phone}
                        placeholder="Phone..."
                      />
                      <input
                        onChange={setAppEmailFunc}
                        value={appEmail}
                        placeholder="Mc Donald's App Email..."
                      />
                    </>
                  )}

                  <ButtonContainer>
                    <button
                      type="submit"
                      onClick={(e) => {
                        setIsChecked(true);
                        e.preventDefault();
                        setReceipt("");
                        setCaseNumber("");
                        setDetails("");
                        setFirstName("");
                        setLastName("");
                        setPersonalEmail("");
                        setPhone("");
                        setAppEmail("");
                        alert("Your new case number: 123-123-123");

                        setFirstReponse("");
                        setMcdoTypeLocationFeedback("");
                        setOrderFeedbackType("");
                        setServiceStaffFeedbackStaff("");
                        setRestaurantFacilityFeedbackType("");
                        setFinalOrder(false);
                        setFeedbackTypeResponse(false);
                        setMobileOrApp(false);
                      }}
                    >
                      Submit
                    </button>
                  </ButtonContainer>
                </form>
              </ChatContentContainer>
            )}
          </ChatContainerBox>
        )}
      </MainContainer>
    </>
  );
}

export default ChatContainer;
const MainContainer = styled.div`
  border-radius: 15px;
  width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: white;
  bottom: 5px;
  margin-left: auto;
  margin-right: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin-bottom: 8px;
  * {
    margin: 0 5px;
  }
`;

const ChatContainerBox = styled.div`
  border-top: 2px solid #3d2c00;
  width: 100%;
  overflow: auto;
  height: 480px;
`;

const ChatContentContainer = styled.div`
  box-shadow: var(--light-shadow);
  font-size: 13px;
  margin: 10px 0;
  background-color: #ffd15c;
  padding: 8px;
  border-radius: 10px;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;

    * {
      margin: 4px 0;
      padding: 3px;
    }

    textarea {
      resize: none;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  button {
    padding: 3px 20px;
    margin: 5px;
    cursor: pointer;
    background-color: #a37500;
    color: white;
    border: none;
  }

  button:hover {
    background-color: #7a5800;
  }
`;
