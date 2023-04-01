import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
    var [students,setstudents]=useState([])
    var[update,setupdate]=useState(false)
    var[selected,setselected]=useState([])
    
    useEffect(()=>{
       axios.get('http://localhost:3005/students')
       .then(response=>{setstudents(students=response.data)
    console.log(students)})
       .catch(error=>console.log(error))
    
    },[])
    const deletevalue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/students/"+id)
        .then(response=>{
            alert('Succesfully deleted')
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
    const updatevalue=(value)=>{
        setselected(value)
        setupdate(true)
    }
    var finaljsx = <TableContainer  >
    <Table >
        <TableHead>
            <TableRow>
                <TableCell>
                    id
                </TableCell>
                <TableCell>
                    name
                </TableCell>
                <TableCell>
                    grade
                </TableCell>
                <TableCell>update</TableCell>
                <TableCell>delete</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value,index)=>{
                return <TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell>  <Button color="success" onClick={()=>updatevalue(value)}>update</Button></TableCell>
                    <TableCell> <Button  onClick={()=>deletevalue(value.id)} color='error'>Delete</Button></TableCell>
                
                  
                 </TableRow>
            })}
        </TableBody>
    </Table>
 </TableContainer>
 if(update)
 finaljsx= <Add data={selected}method='put'/>
  return (
finaljsx
  )
}

export default View
