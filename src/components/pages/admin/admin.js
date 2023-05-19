import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid, CardActionArea, CardActions } from "@mui/material";
import './admin.css'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useState, useEffect } from "react";

function createData(name, email, mobile) {
    return { name, email, mobile};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
];

function Admin() {

    const [admins, setAdmins] = useState([]);
    const adminCollectioRef = collection(db, 'admin');

    const getAdmins = async () => {
        const data = await getDocs(adminCollectioRef);

        setAdmins(data.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })));
    };

    useEffect(() => {
        getAdmins();
    }, []);

    return (
        <div className="admin-containe">
            <h1>Admin Dashboard</h1>

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Admin Name</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Mobile No</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {admins.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.email}</TableCell>
                                            <TableCell align="right">{row.mobile}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Grid xs={12}>
                        <div className="card-div">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Midwives
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Add or Delete a midwife to the system
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button className="btn" color="secondary" component="a" href="/midwives" variant="contained">Go to page</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <div className="card-div">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        Mothers
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Add or Delete a mother to the system
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button className="btn" color="secondary" component="a" href="/mothers" variant="contained">Go to page</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;