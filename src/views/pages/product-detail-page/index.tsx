import React from "react";
import Banner from "./components/banner.component";
import PickProduct from "./components/pick.product.component";
import PickPaymentMethod from "./components/pick.paymentmethod.component";
import FormUserData from "./components/form.userdata.component";

export default function ProductDetailPageView() {
  return (
    <div>
      <Banner />
      <PickProduct />
      <FormUserData />
      <PickPaymentMethod />
    </div>
  );
}
