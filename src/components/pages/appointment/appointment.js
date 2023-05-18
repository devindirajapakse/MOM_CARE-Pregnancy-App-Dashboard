import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
import './appointment.css'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useState, useEffect } from "react";



function Appointment() {

    const [appointments, setAppointments] = useState([]);
    const appointmentCollectioRef = collection(db, 'appointments');

    const getAppointments = async () => {

        const data = await getDocs(appointmentCollectioRef);

        const formattedAppointments = data.docs.map((doc) => {
            const appointmentData = doc.data();
            const timestamp = appointmentData.selectedDate;
            const milliseconds = (timestamp.seconds * 1000) + (timestamp.nanoseconds / 1000000);
            const date = new Date(milliseconds);

            return {
                ...appointmentData,
                id: doc.id,
                selectedDate: date.toLocaleDateString()
            };
        });

        setAppointments(formattedAppointments);
    };

    useEffect(() => {
        getAppointments()
    }, []);

    return (
        <div className="appoint-container">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Appointments</h1>
                    <div className="table-container">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Patient Name</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                        <TableCell align="right">Time</TableCell>
                                        <TableCell align="right">Place</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {appointments.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.selectedDate}</TableCell>
                                            <TableCell align="right">{row.selectedTime}</TableCell>
                                            <TableCell align="right">{row.place}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Appointment;