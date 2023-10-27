import React from "react";
import Tooltip from '@mui/material/Tooltip';

const Link = ({ href, text }: {
  href: string;
  text: string;
}) => {
  if (text?.length > 50) {
    return (
      <a href={href} target="_blank">
        <Tooltip title={text}>
          <span>{`${text.slice(0, 47)}...`}</span>
        </Tooltip>
      </a>
    )
  } else {
    return (
      <a href={href} target="_blank">
        {text}
      </a>
    )
  }
}

export default Link