import { AppBar, Button, Toolbar} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <h4>My App</h4>
                  &nbsp;&nbsp;&nbsp;
                  <Link to='/login'>
                      <Button variant="contained" color="">Login</Button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to='/signup'>
                      <Button variant="contained" color="">Signup</Button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to='/State'>
                      <Button variant="contained" color="">State</Button>
                  </Link>
              </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
