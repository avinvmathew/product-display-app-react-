import * as React from 'react';
//if error import useState , useEffect from react
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

// function deleteMovie(p)
// {
//   axios.delete(''+p)
//   .then((res)=>{
//     alert('Data deleted');
//     window.location.reload()
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// }

const Records = () => {
  const [rows, setRows] = React.useState([]);
  
  React.useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then((res) => {
        setRows(res.data);
        console.log(rows);
      })
  }, []);
  return (
    <div>
      <TableContainer component={Paper} 
        sx={{'& td, & th':{border:2},
        maxHeight:'700px',
        overflow:'auto',
        background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
        backdropFilter: 'blur(20px)', // Blur effect
      }}
        >
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Product Title</b></TableCell>
            <TableCell align="right"><b>Price</b></TableCell>
            <TableCell align="right"><b>Category</b></TableCell>
            <TableCell align="right"><b>Image</b></TableCell>
            {/* <TableCell align="right"><b>Edit</b></TableCell> */}
            {/* <TableCell align="right"><b>Delete</b></TableCell> */}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.productTitle}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              {/* <TableCell align="right">{row.image}</TableCell> */}
              <TableCell align="right">
                <a href={row.image} target='_blank' rel="noopener noreferrer">
                  <img src=
                  {row.image} 
                  alt={row.productTitle} 
                  style={{width:'150px',height:'150px'}}/>
                </a>
              </TableCell>
              {/* <TableCell align="right"><Button variant='contained' color='success' >Edit</Button></TableCell> */}
              {/* <TableCell align="right"><Button variant='contained' color='success' onClick={deleteMovie(row._id)}>Delete</Button></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    
  );
}

export default Records