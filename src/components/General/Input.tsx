import React from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ onChange }) => {
  return <input type="text" onChange={onChange} />;
};

export default Input;
