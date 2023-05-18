import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Button, Grid } from "@mui/material";
import './mothers.css'

import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useState, useEffect } from "react";

function Mothers() {

    const [newName, setName] = useState("")
    const [newEmail, setEmail] = useState("")
    const [newPhone, setPhone] = useState("")
    const [newNic, setNic] = useState("")

    const [mothers, setMothers] = useState([]);
    const mothersCollectioRef = collection(db, 'mother')

    //Add mother
    const createMother = async () => {
        await addDoc(mothersCollectioRef, {
            name: newName,
            email: newEmail,
            mobile: newPhone,
            nic: newNic
        });

        window.location.reload()
    }

    //Delete Mother
    const deleteMother = async (id) => {
        const docref = doc(db, 'mother', id)
        await deleteDoc(docref)

        window.location.reload();
    }

    //Get Mothers
    const getMothers = async () => {

        const data = await getDocs(mothersCollectioRef)

        setMothers(data.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })))
    }

    useEffect(() => {
        getMothers()
        console.log(mothers)
    }, [])

    //Update Midwife
    const updateMother = async (id) => {
        const docref = doc(db, 'mother', id)
        await updateDoc(docref, { mobile: newPhone })

        window.location.reload();
    }

    return (
        <div className="mom-container">
            <h1>Mothers</h1>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="card-div">
                        <Card sx={{ maxWidth: 500 }}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                                {mothers.map((mother) => {
                                    return <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={mother.name}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {mother.mobile}

                                                        <input style={{ marginLeft: "5px" }} required placeholder="Phone no" onChange={(e) => { setPhone(e.target.value) }} />

                                                        <button
                                                            style={{ marginTop: "5px" }}
                                                            onClick={() => { updateMother(mother.id) }}
                                                        >
                                                            Update
                                                        </button>

                                                        <button
                                                            style={{ marginTop: "5px", marginLeft: "5px" }}
                                                            onClick={() => { deleteMother(mother.id) }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                })}

                            </List>
                        </Card>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className="card-div">
                        <Card sx={{ maxWidth: 500 }}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '30ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <form className="add" >
                                    <input required placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                                    <input required placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                                    <input required placeholder="Phone no" onChange={(e) => { setPhone(e.target.value) }} />
                                    <input required placeholder="NIC" onChange={(e) => { setNic(e.target.value) }} />

                                    <Button onClick={createMother} className="btn" color="secondary" variant="contained">Add new</Button>
                                </form>
                            </Box>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Mothers;