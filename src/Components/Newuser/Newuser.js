import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './Newuser.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasModal({setMail}) {
const [text,setText]=useState()
const [open, setOpen] = React.useState(false);
const handleOpen = () => {
    setOpen(true)};
const handleClose = () => setOpen(false);
  function handleSave(){
    handleClose()
    setMail([text,...text])

  };
    console.log(text)

return (
    <div style={{zIndex:'-1'}}>
      <button className='Add_user' onClick={handleOpen}>Add User</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
        <Box
            component="form"
            sx={style}
            noValidate
            autoComplete="off"
        > 
        <Box className='box1'>
          <h4>Type an Email</h4>
        <TextField onChange={(event) => setText(event.target.value)} 

          required
          id="outlined-required"
          label="Email"
          placeholder="Type an email" 
          />
        {/* <button  className='cancel'>Cancel</button> */}
        <button className='cancel'onClick={handleSave} >Save</button>
            </Box> 
        </Box>
      </Modal>
    </div>
  );
}
