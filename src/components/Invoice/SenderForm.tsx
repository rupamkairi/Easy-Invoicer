import React from "react";
import Datepicker from "../General/Datepicker";
import Textbox from "../General/Textbox";
import Textfield from "../General/Textfield";

export default function SenderForm() {
  return (
    <div>
      <Textbox id="name" label="Name" error="some" />
      <Textfield id="description" label="Description" error="some" />
      <Datepicker id="date" label="Chose Date" error="some" />
    </div>
  );
}
