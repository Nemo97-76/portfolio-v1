import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';
import { Sheet, Tooltip } from '@mui/joy';
export default function MenuButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <IconButton className='iconBTN me-5' onClick={() => setOpen(true)}>
        <Menu className='menu' />
      </IconButton>
      <Drawer  size="sm" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <List
        className='drawerlist'
          size="sm"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <Nav.Link href='#home'>
            <ListItemButton  className="menuBTN" onClick={() => setOpen(false)}>Home</ListItemButton>
          </Nav.Link>
          <Nav.Link href="#AboutMe">
            <ListItemButton  className="menuBTN" onClick={() => setOpen(false)}>About Me</ListItemButton>
          </Nav.Link>

          <Nav.Link href="#Resume">
            <ListItemButton  className="menuBTN" onClick={() => setOpen(false)}>Resume</ListItemButton>
          </Nav.Link>

          <Nav.Link href="#portfolio">
            <ListItemButton  className="menuBTN" onClick={() => setOpen(false)}>portfolio</ListItemButton>
          </Nav.Link>

          <Nav.Link href="#clientSpeak">
            <ListItemButton  className="menuBTN" onClick={() => setOpen(false)}>Client speak</ListItemButton>
          </Nav.Link>

          <Nav.Link href="#contactMe">
            <ListItemButton  className="menuBTN" onClick={() => setOpen(false)}>Contact Me</ListItemButton>
          </Nav.Link>
          <div className="icons">

            <Sheet className="sheet" >
              <Tooltip title="facebook" arrow placement="bottom">
                <a href="https://www.facebook.com/tasn13eem/">
                  <BsFacebook id="ICON" />
                </a>
              </Tooltip>
            </Sheet>

            <Sheet className="sheet">
              <Tooltip title="instagram" arrow placement="bottom">
                <div>
                  <BsInstagram id="ICON" />
                </div>
              </Tooltip>
            </Sheet>

            <Sheet className="sheet">
              <Tooltip title="LinkedIn" arrow placement="bottom">
                <a href='https://www.linkedin.com/in/tasneem-youssef-770708278/'>
                  <SiLinkedin id="ICON" />
                </a>
              </Tooltip>
            </Sheet>

            <Sheet className="sheet">
              <Tooltip title="gitHub" arrow placement="bottom">
                <a href="https://github.com/Nemo97-76">
                  <BsGithub id="ICON" />
                </a>
              </Tooltip>
            </Sheet>
          </div>
        </List>
        <div id='MenuName'>
          Tasneem Youssef
        </div>
      </Drawer>
    </>
  );
}
