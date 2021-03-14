import React from "react";
import Textbox from "../General/Textbox";
import Textfield from "../General/Textfield";

export default function SenderForm() {
  return (
    <>
      <Textbox id="name" label="Name" error="" />
      <Textfield id="description" label="Description" error="" />
    </>
  );
}
