import React, { useEffect, useState } from "react";
import YourInfo from "../components/YourInfo";
import Address from "../components/Address";
import BackgroundSidebar from "../assets/images/bg-sidebar-desktop.svg";
import BackgroundSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import Step from "../components/Step";
import { Link } from "react-router-dom";

const Form = () => {
  //------------------------------STATES------------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get('redirectUrl');
  const decodedRedirectUrl = decodeURIComponent(redirectUrl);
  const [stepNumber, setStepNumber] = useState(() => 1);
  const [goBackVisible, setGoBackVisible] = useState("invisible");
  const [steps, setSteps] = useState([
    { id: 1, title: "YOUR INFO", active: true },
    { id: 2, title: "YOUR ADDRESS", active: false },
  ]);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [address, setAddress] = useState({
    address: "",
    state: "",
    country: ""
  });
  const [isEmpty, setIsEmpty] = useState(false);

  //------------------------------SIDE EFFECTS------------------------------
  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }
  }, [stepNumber, address, info,]);

  //------------------------------FUNCTIONS------------------------------
  const nextStep = () => {
    if (stepNumber == 1) {
      if (
        info.name.length == 0 ||
        info.email.length == 0 ||
        info.phone.length == 0
      ) {
        setIsEmpty(true);
        return;
      } else {
        setIsEmpty(false);
      }
    }

    if (stepNumber == 2) {
      if (
        address.address.length == 0 ||
        address.country.length == 0 ||
        address.state.length == 0
      ) {
        setIsEmpty(true);
        return;
      } else {
        setIsEmpty(false);
      }
    }

    setStepNumber((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };

  const changeInfo = (event) => {
    setInfo((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value };
    });
  };

  const changeAddress = (event) => {
    setAddress((prevAddress) => {
      return { ...prevAddress, [event.target.name]: event.target.value };
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-slate-100 rounded-xl md:p-3 md:flex justify-center">
        <div className="relative">
          <img
            className="hidden md:block"
            src={BackgroundSidebar}
            alt="sidebar"
          />
          <img
            className="block md:hidden w-full"
            src={BackgroundSidebarMobile}
            alt="topbar"
          />

          <div className="flex justify-center mt-8 absolute inset-0 space-x-10 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
            {steps.map((step) => (
              <Step
                key={step.id}
                number={step.id}
                title={step.title}
                active={step.active}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
          <div>
            {(stepNumber === 1 && (
              <YourInfo
                onChangeInfo={changeInfo}
                info={info}
                currentStep={stepNumber}
                isEmpty={isEmpty}
              />
            )) ||
              (stepNumber === 2 && (
                <Address
                  onChangeAddress={changeAddress}
                  address={address}
                  currentStep={stepNumber}
                  isEmpty={isEmpty}
                />
              ))}
          </div>
          <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full p-5 md:static md:p-0 items-center w-[700px]]">
            <div
              onClick={prevStep}
              className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
            >
              Go back
            </div>
            {stepNumber === 2 ? (
              <Link to={decodedRedirectUrl} className="font-medium bg-[#473dff] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90">
                Confirm
              </Link>
            ) : (
              <div
                onClick={nextStep}
                className="font-medium bg-[#02295a] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
              >
                Next Step
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
