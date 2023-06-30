import * as React from 'react';
import './App.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ScrollToTop from '../shared/scroll-top/scroll-top';
import { Outlet } from "react-router-dom";
import { Footer } from '../widgets/footer';
import { NavbarDropDown } from '../widgets/navbar-drop-down/navbar-drop-down';
import { NavbarHeader } from '../widgets/navbar-header/navbar-header';
import { Burger } from '../entities/burger';
import { Logo } from '../entities/logo';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './style/theme';
type Anchor = 'top';


function App() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
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
      <NavbarDropDown />
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <React.Fragment key={'top'}>
          <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
          >
            {list('top')}
          </Drawer>
          <div className='App'>
            <ScrollToTop />
            <div className='header'>
              <Logo />
              <NavbarHeader />
              <Burger onClick={toggleDrawer('top', true)} />
            </div>
            <div className='App_content'><Outlet /></div>
            <Footer />
          </div>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}
export default App

