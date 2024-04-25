import * as React from "react";
import ButtonComponents from "../Button";

const  Card = (props) => {
  const { children } = props;
  return (
    <div className="max-w-sm p-4  w-full mx-auto  rounded-lg border text-white border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
}

const Header = () => {
  return (
    <div>
       <img src=" burger.jpg" alt=""  />
    </div>
  )
}

const Body = () => {
  return (
    <div>
      <h1 className="font-bold mb-3 mt-3">haha</h1>
      <p className="mb-4 text-xs">
        Lorem ipsum dolor sit, amet consectetur
      </p>
    </div>
  )
}

const Footer = () => {

  return (
    <div className="flex justify-between items-center">
    <ButtonComponents  variant="contained" name="Buy" />
    <h1 className="font-bold  text-sm "> Rp. 20.000 </h1>
  </div>
  )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer


export default Card