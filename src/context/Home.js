import React, { createContext, useState } from "react";
import Header from "./Header";
import About from "./About";
import Products from "./Products";
export const afroz = createContext();
function Home() {
  const [names, setNames] = useState();

  let data = [1, 2, 3];
  return (
    <>
      <afroz.Provider value={{ names, setNames, data }}>
        <About />
        <Products />
        <Header />
      </afroz.Provider>
    </>
  );
}

export default Home;
