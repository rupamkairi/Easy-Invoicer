import React from "react";

interface Props {
  id?: string;
  label?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textbox: React.FC<Props> = ({ id, label, onChange, error }) => {
  return (
    <div className={" px-2 "}>
      <label htmlFor={id}>
        <p className=" px-3 font-semibold text-indigo-600 ">{label}</p>
      </label>
      <input
        id={id}
        className={
          " container bg-gray-100 focus:bg-gray-50 border-0 focus:ouline-none focus:ring-2 focus:ring-indigo-300 rounded shadow-inner focus:outline-none focus:shadow-lg " +
          "  "
        }
        type="text"
        onChange={onChange}
      />
      <p className=" px-3 text-sm font-semibold text-red-500 ">{error}</p>
    </div>
  );
};

export default Textbox;
