import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { formatMuiErrorMessage } from '@mui/utils';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(`Form submitted ${title} ${price}`);   
    }
  return (
    <form onSubmit = {handleSubmit}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><TextField onChange = {(e) => setTitle(e.target.value)}  id="outlined-basic" label="Book Title" variant="outlined" /></Item>
        </Grid>
        <Grid item xs={12}>
          <Item><TextField onChange = {(e) => setPrice(e.target.value)}  id="outlined-basic" label="Price" variant="outlined" /></Item>
        </Grid>
        <Grid item xs={12}>
          <Item><Button type = 'submit' variant="outlined">Submit</Button></Item>
        </Grid>
        
      </Grid>
    </Box>
    </form>
  );
}
