import React, {useState} from 'react'
import {Button, Container} from "@mui/material";
import {FormControl, Input, InputLabel} from "@material-ui/core";
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [username,setUsername] = useState('')
    const navigate = useNavigate()
    const localUsername = () => {
        if (username.length<3) return alert('en az 3 haneli veri giriniz')
      localStorage.setItem('name',username)
        navigate('/todoapp')
    }
    return(
        <Container>
            <FormControl>
                <InputLabel htmlFor="my-input">username</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" onChange={event => setUsername(event.target.value)} />
                <br/>
                <Button variant="contained" onClick={localUsername}>login</Button>
            </FormControl>
        </Container>
    )
}

export default Login