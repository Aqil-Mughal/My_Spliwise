import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {listItem} from '../constant'


export default function Basiclist({ setPicture }){
const [selectedItem, setSelectedItem] = useState('');
const data = [];
const handleListItemClick = (item) => {
  console.log(item)
}
  return (
    <Box sx={{ width: '15vw',height:'35vh'  , bgcolor: 'background.paper' }}>
      {/* <nav aria-label="main mailbox folders"> */}
        <List>
           {listItem.map((item,index)=>{
                return(    
          <ListItem disablePadding key={index}>
                  <ListItemButton onClick={() => setPicture (item )}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
            )})}
        </List>
    </Box>
);
;}
