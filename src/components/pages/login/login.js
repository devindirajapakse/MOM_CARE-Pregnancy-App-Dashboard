import React from "react";
import "./login.css";
import { Button, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const [Email, setEmail] = useState("");
    const [Pass, setPass] = useState("");

    const navigate = useNavigate()
    const auth = getAuth();


    const login = async () => {
        signInWithEmailAndPassword(auth, Email, Pass)
            .then((cred) => {
                console.log('User Loged in')
                navigate('/admin')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const createUser = async (e) => {
        e.preventDefault()

        const email = "user@gmail.com"
        const password = "User,123"

        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                console.log('user created successfully : ', cred.user)
            })
    }


    return (
        <div className="back">
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <div className="login-container">
                            <div className="wrapper">

                                <div className="center box">
                                    <Grid container spacing={2}>
                                        <Grid xs={12}>
                                            <h1 className="center">Login</h1>
                                        </Grid>
                                        <Grid xs={12}>

                                            <form className="">
                                                <Grid container spacing={2}>
                                                    <Grid xs={12}>
                                                        <TextField id="standard-basic" label="Email" onChange={(e) => { setEmail(e.target.value) }} variant="standard" />
                                                    </Grid>

                                                    <Grid xs={12}>
                                                        <TextField id="standard-basic" label="Password" onChange={(e) => { setPass(e.target.value) }} type="password" variant="standard" />
                                                    </Grid>

                                                    <Grid xs={12}>
                                                        <Button className="btn" onClick={login} color="secondary" variant="contained">Login</Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6}></Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Login;
