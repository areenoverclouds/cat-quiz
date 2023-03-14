import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const ResponsiveTooltip = ({ text }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);

  const handleTooltipOpen = () => {
    if (!isMobile) {
      setOpen(true);
    }
  };

  const handleTooltipClose = () => {
    if (!isMobile) {
      setOpen(false);
    }
  };

  const handleTooltipToggle = () => {
    if (isMobile) {
      setOpen((prevOpen) => !prevOpen);
    }
  };

  return (
    <span
      onMouseEnter={handleTooltipOpen}
      onMouseLeave={handleTooltipClose}
      onClick={handleTooltipToggle}
    >
      <Tooltip title={text} open={open}>
        <HelpOutlineIcon style={{ fontSize: 16 }} />
      </Tooltip>
    </span>
  );
};

export default ResponsiveTooltip;





/*import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useMediaQuery } from '@material-ui/core';

function QuestionMarkTooltip(props) {

    const isMobile = useMediaQuery('(max-width: 7600px)');
    const [open, setOpen] = React.useState(false);

    const handleTooltipOpen = () => {
        if (isMobile) {
          setOpen(true);
        }
    };
    
    const handleTooltipClose = () => {
        if (isMobile) {
          setOpen(false);
        }
    };
  
    return (
        <div onMouseEnter={handleTooltipOpen} onMouseLeave={handleTooltipClose}>
        <Tooltip title={props.text} open={open} disableHoverListener>
            <HelpOutlineIcon  title={props.text} style={{ fontSize: 16 }} />
        </Tooltip>
        </div>
    );
}

export default QuestionMarkTooltip;*/