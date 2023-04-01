import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = (props) => {
    var[input,setinput]=useState(props.data);
    console.log(props.data)
    const inputhandler1 = (e) =>{
        const {name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readvalues=()=>{
    console.log("clicked")
    if(props.method==="post"){
    axios.post(" http://localhost:3005/students",input)
    .then(response=>{
        alert("add success")
      })
    } else if(props.method==="put"){
      axios.put(" http://localhost:3005/students/"+input.id,input)
      .then(response=>{
        alert("updated successfully")
        window.location.reload(false)
      })
     .catch(err=>console.log(err))
  }
  }
  return (
    <div>
   
      <TextField   variant="filled" onChange={inputhandler1} label='name'
      name='name' value={input.name}> </TextField>  <br/>
       <Typography>{input.name}</Typography>
      <TextField  id="filled-basic" label="grade" variant="filled" onChange={inputhandler1} 
      name='grade' value={input.grade} /><br/><br/>
       <Typography>{input.grade}</Typography>
      <Button variant="contained" onClick={readvalues}>save</Button><br/>
    </div>
  )
}

export default Add
