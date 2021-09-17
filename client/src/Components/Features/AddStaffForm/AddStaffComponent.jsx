import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addStuff } from '../../../Redux/actions/staffAction';


const AddStaffComponent = ({ open, handleClose }) => {
    const [staffUser, setStaffUser] = useState({ registeredAs: "Staff" })
    const dispatch = useDispatch();
    const { errors } = useSelector((state) => state.staff);

    const createStaff = (e) => {
        setStaffUser({
            ...staffUser,
            [e.target.name]: e.target.value
        })
    }
    const addStaff = () => {

        dispatch(addStuff(staffUser));
        setStaffUser({ registeredAs: "Staff" });
    }


    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" open={open}  >
                <DialogTitle id="form-dialog-title">יצירת משתמש חדש</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        אנא מלא את הפרטים בבקשה
                    </DialogContentText>
                    <TextField
                        name="firstName"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="First Name"
                        type="text"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.firstName}

                    />
                    <strong className="errors">{errors?.firstName}</strong>
                    <TextField
                        name="lastName"
                        margin="dense"
                        id="name"
                        label="Last Name"
                        type="text"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.lastName}

                    />
                    <strong className="errors">{errors?.lastName}</strong>
                    <TextField
                        name="email"
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.email}

                    />
                    <strong className="errors">{errors?.email}</strong>
                    <TextField
                        name="password"
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.password}

                    />
                    <strong className="errors">{errors?.password}</strong>
                    <TextField
                        name="phone"
                        margin="dense"
                        id="name"
                        label="Phone Number"
                        type="phone"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.phone}

                    />
                    <strong className="errors">{errors?.phone}</strong>
                    <TextField
                        name="age"
                        margin="dense"
                        id="name"
                        label="Age"
                        type="number"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.age}

                    />
                    <strong className="errors">{errors?.age}</strong>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={(e) => addStaff(e)}>
                        צור משתמש
                    </Button>
                    <Button onClick={() => handleClose()}>
                        סגור
                    </Button>
                </DialogActions>
            </Dialog>


        </div>
    )
}

export default AddStaffComponent
