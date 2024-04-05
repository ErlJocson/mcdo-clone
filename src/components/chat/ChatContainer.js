import { styled } from "styled-components";
import { useState } from "react";
import bubble from "../assets/bubble.png";

function ChatContainer() {
  const [showChat, setShowChat] = useState(false);
  const [firstResponse, setFirstReponse] = useState("");

  const [caseNumber, setCaseNumber] = useState("");
  const [details, setDetails] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appEmail, setAppEmail] = useState("");

  const [feedbackCategory, setFeedbackCategory] = useState("");

  const [mcdoTypeLocationFeedback, setMcdoTypeLocationFeedback] = useState("");
  const [archCard, setArchCard] = useState("");
  const [somethingElseTypeCategory, setSomethingElseTypeCategory] =
    useState("");

  const [orderFeedbackType, setOrderFeedbackType] = useState("");

  const [restaurantFacilityFeedbackType, setRestaurantFacilityFeedbackType] =
    useState("");

  const [serviceStaffFeedbackStaff, setServiceStaffFeedbackStaff] =
    useState("");

  const [archCardFeedbackType, setArchCardFeedbackType] = useState("");

  const [corporateFeedbackType, setCorporateFeedbackType] = useState("");

  const [mcdoAppFeedbackType, setMcdoAppFeedbackType] = useState("");

  const [finalOrder, setFinalOrder] = useState(false);

  const [archCardDetails, setArchCardDetails] = useState(false);

  const [somethingElseDetails, setSomethingElseDetails] = useState(false);

  const setCaseNumberFunc = (event) => {
    setCaseNumber(event.target.value);
  };

  const setDetailsFunc = (event) => {
    setDetails(event.target.value);
  };

  const setFirstNameFunc = (event) => {
    setFirstName(event.target.value);
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

  const showChatFunc = () => {
    setShowChat(!showChat);
    setFirstReponse("");
    setFeedbackCategory("");
    setMcdoTypeLocationFeedback("");
    setOrderFeedbackType("");
    setRestaurantFacilityFeedbackType("");
    setServiceStaffFeedbackStaff("");
    setSomethingElseDetails(false);
    setArchCardFeedbackType("");
    setFeedbackCategory("");
    setSomethingElseTypeCategory("");
    setCorporateFeedbackType("");
    setFinalOrder(false);
    setArchCardDetails(false);
    setSomethingElseDetails(false);
    setMcdoAppFeedbackType("");
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
                additional questions. *Contacting McDonald's about a previously
                reported case
              </p>
            </ChatContentContainer>

            <ChatContentContainer>
              <p>Contacting about a previously reported case?</p>
              <ButtonContainer>
                <button
                  onClick={() => {
                    setFirstReponse("Yes");
                    setFeedbackCategory("");
                    setMcdoTypeLocationFeedback("");
                    setArchCard("");
                    setOrderFeedbackType("");
                    setArchCardFeedbackType("");
                    setSomethingElseTypeCategory("");
                    setSomethingElseDetails(false);
                    setCorporateFeedbackType("");
                    setFinalOrder(false);
                    setMcdoAppFeedbackType("");
                    setArchCardDetails(false);
                    setSomethingElseDetails(false);
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setFirstReponse("No");
                    setFeedbackCategory("");
                    setMcdoTypeLocationFeedback("");
                    setArchCard("");
                    setOrderFeedbackType("");
                    setCorporateFeedbackType("");
                    setArchCardFeedbackType("");
                    setSomethingElseDetails(false);
                    setSomethingElseTypeCategory("");
                    setFinalOrder(false);
                    setMcdoAppFeedbackType("");
                    setArchCardDetails(false);
                    setSomethingElseDetails(false);
                  }}
                >
                  No
                </button>
              </ButtonContainer>
            </ChatContentContainer>

            {firstResponse === "Yes" ? (
              <ChatContentContainer>
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
                  <ButtonContainer>
                    <button
                      onClick={(event) => {
                        setCaseNumber("");
                        setDetails("");
                        setFirstName("");
                        setLastName("");
                        setPersonalEmail("");
                        setPhone("");
                        setAppEmail("");
                        setFirstReponse("");
                        event.preventDefault();
                        alert("Message sent!");
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
              <ChatContentContainer>
                <p>Please select a feedback category</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setFeedbackCategory("McDonald's location");
                      setArchCard("");
                      setSomethingElseTypeCategory("");
                      setArchCardFeedbackType("");
                      setCorporateFeedbackType("");
                      setMcdoAppFeedbackType("");
                      setSomethingElseDetails(false);
                      setArchCardDetails(false);
                    }}
                  >
                    McDonald's location
                  </button>
                  <button
                    onClick={() => {
                      setFeedbackCategory("Arch Card");
                      setMcdoTypeLocationFeedback("");
                      setSomethingElseTypeCategory("");
                      setOrderFeedbackType("");
                      setRestaurantFacilityFeedbackType("");
                      setServiceStaffFeedbackStaff("");
                      setArchCardFeedbackType("");
                      setCorporateFeedbackType("");
                      setMcdoAppFeedbackType("");
                      setSomethingElseDetails(false);
                      setFinalOrder(false);
                    }}
                  >
                    Arch Card
                  </button>
                  <button
                    onClick={() => {
                      setFeedbackCategory("Something else");
                      setMcdoTypeLocationFeedback("");
                      setArchCard("");
                      setOrderFeedbackType("");
                      setRestaurantFacilityFeedbackType("");
                      setServiceStaffFeedbackStaff("");
                      setArchCardFeedbackType("");
                      setFinalOrder(false);
                      setArchCardDetails(false);
                    }}
                  >
                    Something else
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {feedbackCategory === "McDonald's location" ? (
              <ChatContentContainer>
                <p>What is your feedback about?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setMcdoTypeLocationFeedback("My order");
                      setRestaurantFacilityFeedbackType("");
                      setServiceStaffFeedbackStaff("");
                      setArchCardFeedbackType("");
                    }}
                  >
                    My order
                  </button>
                  <button
                    onClick={() => {
                      setMcdoTypeLocationFeedback("Restaurant/Facility");
                      setOrderFeedbackType("");
                      setServiceStaffFeedbackStaff("");
                    }}
                  >
                    Restaurant/Facility
                  </button>
                  <button
                    onClick={() => {
                      setMcdoTypeLocationFeedback("Service/staff");
                      setOrderFeedbackType("");
                      setRestaurantFacilityFeedbackType("");
                    }}
                  >
                    Service/staff
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {mcdoTypeLocationFeedback === "My order" ? (
              <ChatContentContainer>
                <p>What type of feedback do you have?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Charges or Payment");
                    }}
                  >
                    Charges or Payment
                  </button>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Missing Item(s)");
                    }}
                  >
                    Missing Item(s)
                  </button>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Portion Size");
                    }}
                  >
                    Portion Size
                  </button>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Taste or Quality");
                    }}
                  >
                    Taste or Quality
                  </button>
                  <button
                    onClick={() => {
                      setOrderFeedbackType("Wrong Item(s)");
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
              <ChatContentContainer>
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
              <ChatContentContainer>
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
              <ChatContentContainer>
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
              <ChatContentContainer>
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
              <ChatContentContainer>
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
              <ChatContentContainer>
                <p>What type of feedback do you have?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType("Cleanliness");
                    }}
                  >
                    Cleanliness
                  </button>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType("Design / Ambience");
                    }}
                  >
                    Design / Ambience
                  </button>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType(
                        "Facility / Equipment Status"
                      );
                    }}
                  >
                    Facility / Equipment Status
                  </button>
                  <button
                    onClick={() => {
                      setRestaurantFacilityFeedbackType("Safety / Security");
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
              <ChatContentContainer>
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
              <ChatContentContainer>
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
              <ChatContentContainer>
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
              <ChatContentContainer>
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
              <ChatContentContainer>
                <p>What type of feedback do you have?</p>
                <ButtonContainer>
                  <button
                    onClick={() =>
                      setServiceStaffFeedbackStaff("Interaction with Staff")
                    }
                  >
                    Interaction with Staff
                  </button>
                  <button
                    onClick={() =>
                      setServiceStaffFeedbackStaff("Restaurant Policies")
                    }
                  >
                    Restaurant Policies
                  </button>
                  <button
                    onClick={() =>
                      setServiceStaffFeedbackStaff("Speed of Service")
                    }
                  >
                    Speed of Service
                  </button>
                  <button
                    onClick={() =>
                      setServiceStaffFeedbackStaff("Unable To Contact Store")
                    }
                  >
                    Unable To Contact Store
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {serviceStaffFeedbackStaff === "Interaction with Staff" ? (
              <ChatContentContainer>
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
              <ChatContentContainer>
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
              <ChatContentContainer>
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
              <ChatContentContainer>
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

            {feedbackCategory === "Arch Card" ? (
              <ChatContentContainer>
                <p>What is your feedback about?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setArchCard("Arch Card (Gift Card)");
                    }}
                  >
                    Arch Card (Gift Card)
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {archCard === "Arch Card (Gift Card)" ? (
              <ChatContentContainer>
                <p>What type of feedback do you have?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setArchCardFeedbackType("Arch Card Replacement");
                    }}
                  >
                    Arch Card Replacement
                  </button>
                  <button
                    onClick={() => {
                      setArchCardFeedbackType("Arch Card Cash Out");
                    }}
                  >
                    Arch Card Cash Out
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {archCardFeedbackType === "Arch Card Replacement" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setArchCardDetails(true)}>
                    Lost / Stolen / Damaged Card Replacement
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {archCardFeedbackType === "Arch Card Cash Out" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setArchCardDetails(true)}>
                    Cash Out Request
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {feedbackCategory === "Something else" ? (
              <ChatContentContainer>
                <p>What is your feedback about?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setSomethingElseTypeCategory("Corporate");
                      setMcdoAppFeedbackType("");
                    }}
                  >
                    Corporate
                  </button>
                  <button
                    onClick={() => {
                      setSomethingElseTypeCategory("McDonald's App");
                      setCorporateFeedbackType("");
                    }}
                  >
                    McDonald's App
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {somethingElseTypeCategory === "Corporate" ? (
              <ChatContentContainer>
                <p>What type of feedback do you have?</p>
                <ButtonContainer>
                  <button onClick={() => setCorporateFeedbackType("Business")}>
                    Business
                  </button>
                  <button
                    onClick={() =>
                      setCorporateFeedbackType(
                        "Customer Data and Communications"
                      )
                    }
                  >
                    Customer Data and Communications
                  </button>
                  <button onClick={() => setCorporateFeedbackType("Marketing")}>
                    Marketing
                  </button>
                  <button onClick={() => setCorporateFeedbackType("Menu")}>
                    Menu
                  </button>
                  <button
                    onClick={() =>
                      setCorporateFeedbackType("Social Responsibility")
                    }
                  >
                    Social Responsibility
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {corporateFeedbackType === "Business" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Employment
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    General Inquiry / Feedback
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Ideas and Suggestions
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Packaging
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Payments
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Suppliers
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Trademark Permission
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {corporateFeedbackType === "Customer Data and Communications" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Communication Options
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {corporateFeedbackType === "Marketing" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Media / Ad / Signage Feedback
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Partnership
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Promotions
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {corporateFeedbackType === "Menu" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Current Menu Offerings
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Discontinued or Limited Time Menu offerings
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Happy Meals
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Ingredients / Nutrition
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {corporateFeedbackType === "Social Responsibility" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Community
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Environment / Sustainability
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {somethingElseTypeCategory === "McDonald's App" ? (
              <ChatContentContainer>
                <p>What type of feedback do you have?</p>
                <ButtonContainer>
                  <button
                    onClick={() => {
                      setMcdoAppFeedbackType("Account / Login");
                    }}
                  >
                    Account / Login
                  </button>
                  <button
                    onClick={() => {
                      setMcdoAppFeedbackType("General App Support");
                    }}
                  >
                    General App Support
                  </button>
                  <button
                    onClick={() => {
                      setMcdoAppFeedbackType("Loyalty / Rewards Program");
                    }}
                  >
                    Loyalty / Rewards Program
                  </button>
                  <button
                    onClick={() => {
                      setMcdoAppFeedbackType("Mobile Order and Pay");
                    }}
                  >
                    Mobile Order and Pay
                  </button>
                  <button
                    onClick={() => {
                      setMcdoAppFeedbackType("Rewards and Deals");
                    }}
                  >
                    Rewards and Deals
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {mcdoAppFeedbackType === "Account / Login" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    App Privacy
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    App Settings
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Unable to Login
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Registration
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {mcdoAppFeedbackType === "General App Support" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Features and Appearance / General Information
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Restaurant Support
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {mcdoAppFeedbackType === "Loyalty / Rewards Program" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Loyalty / Rewards Information
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Missing Loyalty Points
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Opt In / Opt Out
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {mcdoAppFeedbackType === "Mobile Order and Pay" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Charged - Store Closed
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Charged - Did Not Receive Order
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Charged - Incorrect Total
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Charged - Item Unavailable
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Delivery Charges
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    No Charge - Did Not Receive Order
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {mcdoAppFeedbackType === "Rewards and Deals" ? (
              <ChatContentContainer>
                <p>Specify Feedback</p>
                <ButtonContainer>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Deal / Offer Promotion
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Issue Using Deal or Offer
                  </button>
                  <button onClick={() => setSomethingElseDetails(true)}>
                    Redeeming / Applying Rewards and Deals
                  </button>
                </ButtonContainer>
              </ChatContentContainer>
            ) : (
              ""
            )}

            {finalOrder && (
              <ChatContentContainer>
                <p>
                  Please tell us what restaurant you visited by entering the
                  store number on your receipt or by finding a location using
                  the restaurant locator.
                </p>
                <form>
                  <input placeholder="Enter store number from receipt..." />
                  <ButtonContainer>
                    <button type="button">Verify this number</button>
                    <button type="button">Use Restaurant Locator</button>
                  </ButtonContainer>
                  <p>Please specify the date and time of your visit.</p>
                  <input placeholder="Visit Date..." />
                  <input placeholder="Visit Time..." />
                  <input placeholder="AM/PM..." />
                  <p>Feedback Details</p>
                  <textarea
                    onChange={setDetailsFunc}
                    value={details}
                    placeholder="Details..."
                  ></textarea>
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
                  <ButtonContainer>
                    <button
                      onClick={(event) => {
                        setCaseNumber("");
                        setDetails("");
                        setFirstName("");
                        setLastName("");
                        setPersonalEmail("");
                        setPhone("");
                        setAppEmail("");
                        setFirstReponse("");
                        event.preventDefault();
                        alert("Message sent!");
                      }}
                    >
                      Submit
                    </button>
                  </ButtonContainer>
                </form>
              </ChatContentContainer>
            )}

            {archCardDetails && (
              <ChatContentContainer>
                <form>
                  <p>Arch Card Details</p>
                  <input placeholder="Arch Card Number or Online Order Number..." />
                  <input placeholder="Date of Purchase..." />
                  <p>Shipping Address</p>
                  <input placeholder="Street..." />
                  <input placeholder="City..." />
                  <input placeholder="State..." />
                  <input placeholder="Zip..." />
                  <p>Supporting Attachments</p>
                  <input placeholder="Type Full Name..." />
                  <input placeholder="Today's Date..." />
                  <p>Feedback Details</p>
                  <textarea
                    onChange={setDetailsFunc}
                    value={details}
                    placeholder="Details..."
                  ></textarea>
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
                  <ButtonContainer>
                    <button
                      onClick={(event) => {
                        setCaseNumber("");
                        setDetails("");
                        setFirstName("");
                        setLastName("");
                        setPersonalEmail("");
                        setPhone("");
                        setAppEmail("");
                        setFirstReponse("");
                        event.preventDefault();
                        alert("Message sent!");
                      }}
                    >
                      Submit
                    </button>
                  </ButtonContainer>
                </form>
              </ChatContentContainer>
            )}

            {somethingElseDetails && (
              <ChatContentContainer>
                <form>
                  <p>Feedback Details</p>
                  <textarea
                    onChange={setDetailsFunc}
                    value={details}
                    placeholder="Details..."
                  ></textarea>
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
                  <ButtonContainer>
                    <button
                      onClick={(event) => {
                        setCaseNumber("");
                        setDetails("");
                        setFirstName("");
                        setLastName("");
                        setPersonalEmail("");
                        setPhone("");
                        setAppEmail("");
                        setFirstReponse("");
                        event.preventDefault();
                        alert("Message sent!");
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
  height: 600px;
`;

const ChatContentContainer = styled.div`
  box-shadow: var(--light-shadow);
  font-size: 13px;
  margin: 10px 0;
  /* width: 300px; */
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
