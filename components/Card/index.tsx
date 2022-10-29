import classnames from "classnames";
import React, { ReactNode } from "react";
import cardStyles from "./cardStyles.module.css";

type Props = {
  children: ReactNode;
  size: "large" | "small";
};

const Card: React.FC<Props> = ({ size, children }) => (
  <div
    className={classnames(cardStyles.card, {
      [cardStyles.large]: size === "large",
      [cardStyles.small]: size === "small",
    })}
  >
    {children}
  </div>
);

export default Card;
