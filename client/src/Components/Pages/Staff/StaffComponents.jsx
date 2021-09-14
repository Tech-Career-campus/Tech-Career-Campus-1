import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStaff } from '../../../Redux/actions/staffAction';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddStaffComponent from '../../Features/AddStaffForm/AddStaffComponent';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteStaff } from '../../../Redux/actions/staffAction';





const StaffComponents = () => {

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const staff = useSelector((state) => state.staff);

    const deletestaffHandler = (_id) => {
        dispatch(deleteStaff(_id))
    }
    useEffect(() => dispatch(getStaff()), [dispatch]);

    return (
        <div>
            {
                open ? <AddStaffComponent open={open} handleClose={() => setOpen(!open)} /> : ""
            }
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Button variant="contained" onClick={() => setOpen(!open)}>
                                    הוסף איש צוות
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Courses</TableCell>
                            <TableCell align="right">Students</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {staff?.map((staffItem) => (

                            <TableRow key={staffItem._id} >
                                <TableCell>
                                    <DeleteIcon onClick={() => deletestaffHandler(staffItem._id)} />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {staffItem._id}
                                </TableCell>
                                <TableCell align="right">{staffItem.firstName}</TableCell>
                                <TableCell align="right">{staffItem.lastName}</TableCell>
                                <TableCell align="right">{staffItem.email}</TableCell>
                                <TableCell align="right">{staffItem.phone}</TableCell>
                                <TableCell align="right">{staffItem?.courses?.length}</TableCell>
                                <TableCell align="right">{staffItem?.students?.length}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default StaffComponents
