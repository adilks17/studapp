import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = () => {
    var[input,setinput]=useState({
        name:'',
        grade:''
    });
    const inputhandler1 = (e) =>{
        const {name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readvalues=()=>{
    console.log("clicked")
    axios.post(" http://localhost:3005/students",input)
    .then(response=>{
        alert("success")
    })}
  return (
    <div>
   
      <TextField   variant="filled" onChange={inputhandler1} label='name'
      name='name' value={input.name}> </TextField>  <br/>
       <Typography>{input.name}</Typography>
      <TextField id="filled-basic" label="grade" variant="filled" onChange={inputhandler1} 
      name='grade' value={input.grade} /><br/><br/>
       <Typography>{input.grade}</Typography>
      <Button variant="contained" onClick={readvalues}>save</Button><br/>
    </div>
  )
}

export default Add
