import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternalCustom: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      {/* <OpenNewIcon color="primary" ml="2px"/> */}
    </Link>
  );
};

export default LinkExternalCustom;
    // height: 13px;
    // margin-bottom: 10px;
    // margin-left: 0px;
