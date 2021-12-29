import React, {useEffect, useState} from "react";
import {Button, Container, TextField} from "@mui/material";
import DataComponent from "../Components/dataComponent";
import axios from "axios";



const getUsers = async () => {
    return await axios.get('https://61c7a49f903185001754748c.mockapi.io/users')
}

const TodoApp = () => {
    const [addData, setAddData] = useState({name: ''})
    const [data, setData] = useState([])

    const handleChange = async ()=>{
        if (addData.name.length <3) return alert('en az 3 haneli veri giriniz')
        await axios.post('https://61c7a49f903185001754748c.mockapi.io/users', addData)
        getUsers().then(r=>setData(r.data))
    }


    useEffect(async () => {
        getUsers().then(r=>setData(r.data))
    }, [])


    return (

        <Container maxWidth="xs">
            <br/>
            <span>{localStorage.getItem('name')}</span>
            <br/>
            <br/>
            <TextField type='text' style={{marginRight: '15px'}}
                       onChange={(event) => setAddData({name: event.target.value})}/>
            <Button variant="contained" style={{marginTop: '6px'}} onClick={handleChange}>Add</Button>
            <DataComponent data={data} />
        </Container>
    )
}

export default TodoApp