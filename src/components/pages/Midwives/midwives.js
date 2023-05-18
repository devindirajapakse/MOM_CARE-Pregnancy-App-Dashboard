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
import './midwives.css'

import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useState, useEffect } from "react";


function Midwives() {

    const [newName, setName] = useState("")
    const [newEmail, setEmail] = useState("")
    const [newPhone, setPhone] = useState("")
    const [newNic, setNic] = useState("")

    const [midwifes, setMidwifes] = useState([]);
    const midwifeCollectioRef = collection(db, 'midwife')


    //Add midwife
    const createMidwife = async () => {
        await addDoc(midwifeCollectioRef, {
            name: newName,
            email: newEmail,
            mobile: newPhone,
            nic: newNic
        });

        console.log(newEmail)
        window.location.reload()
    }

    //Delete midwife
    const deleteMidwife = async (id) => {
        const docref = doc(db, 'midwife', id)
        await deleteDoc(docref)

        window.location.reload();
    }

    //Get Midwifes
    const getMidwifes = async () => {

        const data = await getDocs(midwifeCollectioRef)

        setMidwifes(data.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })))
    }

    useEffect(() => {
        getMidwifes()
        console.log(midwifes)
    }, [])

    //Update Midwife
    const updateMidwife = async (id) => {
        const docref = doc(db, 'midwife', id)
        await updateDoc(docref, { mobile: newPhone })

        window.location.reload();
    }

    return (
        <div className="midwives-container">
            <h1>Midwives</h1>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="card-div">
                        <Card sx={{ maxWidth: 500 }}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                                {midwifes.map((midw) => {
                                    return <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={midw.name}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {midw.mobile}

                                                        <input style={{ marginLeft: "5px" }} required placeholder="Phone no" onChange={(e) => { setPhone(e.target.value) }} />

                                                        <button
                                                            style={{ marginTop: "5px" }}
                                                            onClick={() => { updateMidwife(midw.id) }}
                                                        >
                                                            Update
                                                        </button>

                                                        <button
                                                            style={{ marginTop: "5px", marginLeft: "5px" }}
                                                            onClick={() => { deleteMidwife(midw.id) }}
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

                                    <Button onClick={createMidwife} className="btn" color="secondary" variant="contained">Add new</Button>
                                </form>
                            </Box>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Midwives;