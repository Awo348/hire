// import React, { useState } from "react";
import React from "react";
import "./register.css";
import RegisterForm from "../../components/register-form/registerForm";
import RegisterLayout from "../../utils/register-layout/registerLayout";
// import StepOne from "../../components/step-one/stepOne";
// import StepTwo from "../../components/step-two/stepTwo";
// import StepThree from "../../components/step-three/stepThree";
// import StepFour from "../../components/step-four/stepFour";
// import StepFive from "../../components/step-five/stepFive";
// import StepSix from "../../components/step-six/stepSix";
// import StepSeven from "../../components/step-seven/stepSeven";
// import StepEight from "../../components/step-eight/stepEight";

const Register = () => {
  // const [count, setCount] = useState(0);
  // const add = () => {
  //   setCount(count + 1);
  // };
  // const minus = () => {
  //   setCount(count - 1);
  // };
  // const loadMultiStep = () => {
  //   switch (count) {
  //     case 0:
  //       return <StepOne action={add} />;

  //     case 1:
  //       return <StepTwo add={add} minus={minus} />;

  //     case 2:
  //       return <StepThree add={add} minus={minus} />;

  //     case 3:
  //       return <StepFour add={add} minus={minus} />;

  //     case 4:
  //       return <StepFive add={add} minus={minus} />;

  //     case 5:
  //       return <StepSix add={add} minus={minus} />;

  //     case 6:
  //       return <StepSeven add={add} minus={minus} />;

  //     case 7:
  //       return <StepEight add={add} minus={minus} />;

  //     default:
  //       <StepOne />;
  //   }
  // };
  return (
    <>
      <RegisterLayout>
        <RegisterForm />
      </RegisterLayout>
    </>
  );
};

export default Register;
