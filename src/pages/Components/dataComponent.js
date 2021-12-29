import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import {IconButton} from "@mui/material";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";

const deleteUser = async (id) => {
 await axios.delete(`https://61c7a49f903185001754748c.mockapi.io/users/${id}`)
    window.location.reload()

}


const DataComponent: React.FunctionComponent = (props) => {
    const {data} = props
    const [dialog,setDialog]= useState({open:false,name:'',id:''})
    const editUser = async () => {
        if (dialog.name.length <3) return alert('en az 3 haneli veri giriniz')
        const name = dialog.name
        await axios.put(`https://61c7a49f903185001754748c.mockapi.io/users/${dialog.id}`,{name})
        setDialog({open: false})
        window.location.reload()

    }
    const handleClose = () => {
        setDialog({open: false})
    }

    const listItems = data.map((data, index) =>
        <li key={index}>
            {data.name}
            <IconButton style={{float: 'right'}} onClick={event => deleteUser(data.id)}>
            <DeleteIcon />
            </IconButton>
            <IconButton style={{float: 'right'}} onClick={event => setDialog((prevState => ({
                ...prevState,
                open: true,
                name:data.name,
                id: data.id
            })))}>
            <EditIcon />
            </IconButton>
        </li>
    );
    return (
        <div style={{textAlign: 'left'}}>
            <ul style={{display: 'flex', flexDirection: 'column'}}>
                {listItems}
            </ul>

            <Dialog open={dialog.open} onClose={handleClose}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={dialog.name}
                        onChange={event => setDialog((prevState => ({
                            ...prevState,
                            name: event.target.value
                        })))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={editUser}>Edit</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}
export default DataComponent