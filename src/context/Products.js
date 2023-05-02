import React, { useContext} from "react";
import { afroz } from "./Home";

function Products() {
    const {names , setNames } = useContext(afroz)
    setNames("dhfjlk")
  return (
    <>
      <div>Products</div>
      <div>{names}</div>
    </>
  );
}

export default Products;
