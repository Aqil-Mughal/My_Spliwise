import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/material/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import './Modal.css'
import { format } from 'date-fns';
import List from '../List/List';
import BasicList from '../List/List';
import User from  '../User/User';
import BasModal from '../Newuser/Newuser';

function BasicModal() {
  // function AddImage() {
    const [toggle, setToggle] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [mail,setMail ] = useState();
  const onChange = (mail) => {
    setMail()};


    const [picture,setPicture ]=useState({ name:'Entertainment',
    image:'https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png'})
    const newhandleClick = () => {
    setPicture('Picture has been changed!')};

  const date=format(new Date(), 'yyyy/MM/dd kk:mm:ss')
    
  
    function handleClick() {
      const input = document.createElement('input');
      input.type = 'file';
      input.onchange = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (event) => {
        }
      }
      input.click();
    }
  return (
    <React.Fragment>
      <Button style={{fontSize:'25px'}} variant="outlined" color='neutral'  onClick={() => setOpen(true)}>
      Add Expense
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
      <>
      
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: '50%',
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            bgcolor: '#5BC5A7',
            height:'50%'
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '1%',
              position:'absolute',
              justifyContent:'center',
              bgcolor: '#5BC5A7',
              
            }}      
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit" 
            color='#5BC5A7'
            fontWeight="lg"
            mb={1}
          >
          <a className='Expense'> Add an Expense </a>
            
          </Typography>
            
            <div className='with_1'>
              <label className='with_2' htmlFor="email">With You and :</label>
             <input className='with_2' id="email" type="text" value={mail}/>
            </div>
        <div>
          <BasModal setMail={setMail} />
            <div className='Home'> 
                <button  onClick={() => setToggle(!toggle)} >
                    <img src ={picture?.image}></img>  
                </button>
                    <div className='description'>
                        <label htmlFor="email"></label>
                        <input  className='des_1'id="email" placeholder='Enter a description' />
                        <label htmlFor="email"></label>
                        <input  className='des_1' id="email" placeholder='0.00' />
                  </div>
              
            </div>
        </div>
        <div>
            {/* <h2>paid by <button> you </button> and split <button>Equally</button>
            </h2> */}
        </div>
        <div>
          <button className='Button1' onClick={handleClick}>Add Image/Notes </button>
          <button className='Button2'> {date}</button>
        </div>
        </Sheet>
{toggle ? 
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            marginLeft:'20px',
            width:'200px',
            height:'30%'
          }}
        >
        <div >
          <BasicList onClick={newhandleClick} setPicture={setPicture}/>
          </div>
        </Sheet>
        :null}
          </>
      </Modal>
    </React.Fragment>
  );
}
export default BasicModal;
