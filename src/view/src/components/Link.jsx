import React from "react";
import {Link as RouterLink} from "react-router-dom";

export default function Link({href, children}) {
  if (href) {
    return <RouterLink to={href}>{children}</RouterLink>;
  }
  return children;
}
