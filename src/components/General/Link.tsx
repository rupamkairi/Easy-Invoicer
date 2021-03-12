import React from "react";

interface Props {
  value: string;
  href: string;
}

const Link: React.FC<Props> = ({ value, href }) => {
  return <a href={href}>{value}</a>;
};

export default Link;
