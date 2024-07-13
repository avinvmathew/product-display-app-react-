import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';

const Add = () => {
  const[form,setForm]=useState(
    {
      productTitle:'',
      price:'',
      category:'',
      image:''
    }
  )
  // function valueCap(e)
  // {
  //   setForm({...form,[e.target.name]: e.target.value})
  // }
  function valueFetch(e)
  {
    setForm({...form,[e.target.name]: e.target.value})
  }
  let valueAdd=()=>
  {
    console.log(form)
  }
  let sendData=()=>
  {
    console.log(form)
    axios.post('http://localhost:8000/newproduct',form)
    .then((res)=>{
      alert('Data added')
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div style={{ width: '100%' }}>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Required-Product-Title"
          name="productTitle"
          value={form.productTitle}
          onChange={valueFetch}
          InputProps={{
            sx: {
              backgroundColor: 'white',
              width:'300%'
            },
          }}
        />
        <br/>

        <TextField
          required
          id="outlined-required"
          label="Required-Price"
          name="price"
          value={form.price}
          onChange={valueFetch}
          InputProps={{
            sx: {
              backgroundColor: 'white',
              width:'300%'
            },
          }}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Required-Category"
          name="category"
          value={form.category}
          onChange={valueFetch}
          InputProps={{
            sx: {
              backgroundColor: 'white',
              width:'300%'
            },
          }}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Required-Image-Link"
          name="image"
          value={form.image}
          onChange={valueFetch}
          InputProps={{
            sx: {
              backgroundColor: 'white',
              width:'300%',
            },
          }}
        />
        <br/>
        {/* <TextField
          required
          id="outlined-required"
          label="Last-Name"
          name="lastname"
          value={form.lastname}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
            },
          }}
        />
        <br/> */}
      </div>
      <Button variant='contained' color='success' onClick={sendData}>Submit</Button>
    </Box>
    </div>
  )
}

export default Add