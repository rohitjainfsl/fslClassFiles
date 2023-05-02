import React from "react";
import Header from "./Header";
import Section from "./Section";

function Home() {
  return (
    <>
      <Header />
      {/* Component Composition */}
      <Section
        name="Model 3"
        tagline="Order Online for touchless delivery"
        leftBtn="Order Now"
        rightBtn="Existing Inventory"
        arrow={true}
        background = "model-3.jpg"
      />

      <Section
        name="Model Y"
        tagline="Order Online for touchless delivery"
        leftBtn="Order Now"
        rightBtn="Existing Inventory"
        background = "model-y.jpg"
      />

      <Section
        name="Model S"
        tagline="Order Online for touchless delivery"
        leftBtn="Order Now"
        rightBtn="Existing Inventory"
        background = "model-s.jpg"
      />

      <Section
        name="Model X"
        tagline="Order Online for touchless delivery"
        leftBtn="Order Now"
        rightBtn="Existing Inventory"
        background = "model-x.jpg"
      />

      <Section
        name="Solar Panels"
        tagline="Lower Cost Solar Panels in India"
        leftBtn="Order Now"
        rightBtn="Learn More"
        background = "solar-panel.jpg"
      />

      <Section
        name="Solar Roof"
        tagline="Produce Clean Energy from your roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
        background = "solar-roof.jpg"
      />

      <Section name="Accessories" leftBtn="Order Now" background = "accessories.jpg" />
    </>
  );
}

export default Home;
