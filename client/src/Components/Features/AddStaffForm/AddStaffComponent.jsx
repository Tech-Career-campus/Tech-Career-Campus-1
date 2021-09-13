import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addStuff } from '../../../Redux/actions/staffAction';


const AddStaffComponent = ({ open, handleClose }) => {
    const [staffUser, setstaffUser] = useState({ registeredAs: "Staff" })
    const dispatch = useDispatch();

    const createStaff = (e) => {
        setstaffUser({
            ...staffUser,
            [e.target.name]: e.target.value
        })
    }
    const addStaff = () => {

        dispatch(addStuff(staffUser));
        setstaffUser({ registeredAs: "Staff" });
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
