import React from "react";
import "./pricing.css";
import Layout from "../../utils/layout/layout";
import Header from "../../components/header/header";
import PricingPlan from "../../components/pricing-plan/pricingPlan";
import Payment from "../../components/payment/payment";

const Pricing = () => {
  return (
    <Layout>
      <Header />
      <PricingPlan />
      <Payment />
    </Layout>
  );
};

export default Pricing;
