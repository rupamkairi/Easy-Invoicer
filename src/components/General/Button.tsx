import React from "react";

interface Props {
  value: string;
  onClick?: () => void;
  small?: boolean;
  large?: boolean;
  outline?: boolean;
}

const Button: React.FC<Props> = ({
  value,
  onClick,
  small = false,
  large = false,
  outline = false,
}) => {
  return (
    <button
      className={
        " mx-2 px-4 py-2 text font-semibold shadow hover:shadow-lg rounded border-2 border-indigo-300 hover:border-indigo-600 focus:outline-none text-indigo-600 hover:text-indigo-100 " +
        (small && " text-sm ") +
        (large && " text-lg ") +
        (outline === true
          ? " bg-indigo-100 hover:bg-indigo-600 "
          : " bg-indigo-300 hover:bg-indigo-600 ")
      }
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
