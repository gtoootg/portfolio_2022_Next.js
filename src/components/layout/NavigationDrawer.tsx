/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
type Props = {
  anchor:Anchor
  navigationItem:JSX.Element;
  className:string;
}

export default function NavigationDrawer({anchor,navigationItem,className}:Props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor:Anchor,
    open:boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <Button onClick={toggleDrawer(anchor, true)}> X </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        classes={{ paper: className }}
      >
      {navigationItem}
      </Drawer>
    </>
  );
}