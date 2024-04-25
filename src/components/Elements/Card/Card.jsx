import * as React from "react";
import ButtonComponents from "../Button";

export default function MediaCard(props) {
  const { harga } = props;
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg border text-white border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img src=" burger.jpg" alt=""  />
      <h1 className="font-bold mb-3 mt-3">haha</h1>
      <p className="mb-4 text-xs">
        Lorem ipsum dolor sit, amet consectetur
      </p>
      <div className="flex justify-between">
        <ButtonComponents  variant="contained" name="Buy" />
        <h1 className="font-bold  text-sm "> {harga} </h1>
      </div>
    </div>
  );
}
