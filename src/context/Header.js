import React, { useContext } from "react";
import Cart from "./Cart";
import { afroz}  from "./Home";
function Header() {
    const {names , setNames , data } = useContext(afroz) ;
    setNames("ritik")

  return (
    <>
      <div><p> {names}</p>
      <p>{data}</p>
      </div>
      <Cart />
     
    </>
  );
}

export default Header;
