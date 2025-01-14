import { Button,TextField} from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div><br>
      </br><br>
          </br>
          <h1>Signup page</h1> <br></br>
          <TextField label="Email ID" variant="outlined" /> <br></br><br></br>
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"/><br></br><br></br>
          
          <Button variant="contained" >signup</Button>
        
    </div>
  )
}

export default Signup
