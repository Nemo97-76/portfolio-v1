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
import { Link } from 'react-router-dom';
export default function MenuButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <IconButton className='iconBTN me-5' onClick={() => setOpen(true)}>
        <Menu className='menu' />
      </IconButton>
      <Drawer size="sm" open={open} onClose={() => setOpen(false)}>
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
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <Nav.Link href='#home'>
            <ListItemButton onClick={() => setOpen(false)}>Home</ListItemButton>
          </Nav.Link>
          <Nav.Link href="#AboutMe">
            <ListItemButton onClick={() => setOpen(false)}>About Me</ListItemButton>
          </Nav.Link>

          <Nav.Link href="#Resume">
            <ListItemButton onClick={() => setOpen(false)}>Resume</ListItemButton>
          </Nav.Link>

          <Nav.Link href="#portfolio">
            <ListItemButton onClick={() => setOpen(false)}>portfolio</ListItemButton>
          </Nav.Link>

          <Nav.Link href="#clientSpeak">
            <ListItemButton onClick={() => setOpen(false)}>Client speak</ListItemButton>
          </Nav.Link>

          <Nav.Link href="#contactMe">
            <ListItemButton onClick={() => setOpen(false)}>Contact Me</ListItemButton>
          </Nav.Link>
          <div className='mt-3 iconsRow'>
            <Link>
              <BsFacebook className='menuIcon' />
            </Link>


            <Link>
              <BsInstagram className='menuIcon' />
            </Link>


            <Link>
              <SiLinkedin className='menuIcon' />
            </Link>


            <Link>
              <BsGithub className='menuIcon' />
            </Link>





          </div>

        </List>
        <div id='MenuName'>
          Tasneem Youssef
        </div>
      </Drawer>
    </>
  );
}
