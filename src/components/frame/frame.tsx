import "./frame.css";
import React from "react";

type Props = { children?: React.ReactElement[] };

export function Frame({ children }: Props) {
  return <div className="frame">{children}</div>;
}
