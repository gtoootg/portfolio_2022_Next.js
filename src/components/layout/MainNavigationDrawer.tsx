/* eslint-disable @next/next/link-passhref */
import type { NextPage } from 'next'
import React from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';


type Anchor = 'top' | 'left' | 'bottom' | 'right';
type Props = {
  anchor:Anchor
  navigationItem:JSX.Element;
}

const MainNavigationDrawer = ({anchor,navigationItem}:Props) => {
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

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {navigationItem} */}
      </List>
    </Box>
  );

  return (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}> X </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
      {navigationItem}
      </Drawer>
    </React.Fragment>
  );
}

export default MainNavigationDrawer