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
import { hebrewVariables } from '../../../utils/hebrewVariables';


const AddStaffComponent = ({ open, handleClose }) => {
    const [staffUser, setStaffUser] = useState({ registeredAs: "Staff" })
    const [isRegister, setIsRegister] = useState(false);

    const dispatch = useDispatch();
    const { errors } = useSelector((state) => state.staff);
    const staff = useSelector((state) => state.staff.staff);

    const createStaff = (e) => {
        setStaffUser({
            ...staffUser,
            [e.target.name]: e.target.value
        })
    }
    
    const handleRegisterWindow = () => {

        setIsRegister(!isRegister)

    }

    const addStaff = () => {

        dispatch(addStuff(staffUser));
        if (checkErrors()) {

            handleRegisterWindow()
        }
    }

    const checkErrors = () => {
        return (Object.keys(errors).length === 0);
    }



    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" open={open}  >
                <DialogTitle id="form-dialog-title">{hebrewVariables.createStaff}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {hebrewVariables.fillDetails}

                        {
                            isRegister ? <div aria-labelledby="form-dialog-title" style={{border:"1px solid"}}   >
                                <h5 id="form-dialog-title">משתמש נרשם</h5>
                                <h1>{`${staff[staff.length - 1]?.firstName} ${staff[staff.length - 1]?.lastName} ${hebrewVariables.registerd}`}</h1>
                                <Button color="primary" onClick={() => handleRegisterWindow()}>
                                    סגור
                                </Button>
                            </div> : ""
                        }



                    </DialogContentText>
                    <TextField
                        name="firstName"
                        autoFocus
                        margin="dense"
                        id="name"
                        label={hebrewVariables.firstName}
                        type="text"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.firstName}

                    />
                    <strong className="errors">{errors?.firstName ? errors.firstName : ""}</strong>
                    <TextField
                        name="lastName"
                        margin="dense"
                        id="name"
                        label={hebrewVariables.lastName}
                        type="text"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.lastName}

                    />
                    <strong className="errors">{errors?.lastName ? errors.lastName : ""}</strong>
                    <TextField
                        name="email"
                        margin="dense"
                        id="name"
                        label={hebrewVariables.email}
                        type="email"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.email}

                    />
                    <strong className="errors">{errors?.email ? errors.email : ""}</strong>
                    <TextField
                        name="password"
                        margin="dense"
                        id="name"
                        label={hebrewVariables.password}
                        type="password"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.password}

                    />
                    <strong className="errors">{errors?.password ? errors.password : ""}</strong>
                    <TextField
                        name="phone"
                        margin="dense"
                        id="name"
                        label={hebrewVariables.phone}
                        type="phone"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.phone}

                    />
                    <strong className="errors">{errors?.phone ? errors.phone : ""}</strong>
                    <TextField
                        name="age"
                        margin="dense"
                        id="name"
                        label={hebrewVariables.age}
                        type="number"
                        fullWidth
                        onChange={(e) => createStaff(e)}
                        value={staffUser.age}

                    />
                    <strong className="errors">{errors?.age ? errors.age : ""}</strong>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={(e) => addStaff(e)}>
                        {hebrewVariables.createStuffBtn}
                    </Button>
                    <Button onClick={() => handleClose()}>
                        {hebrewVariables.closeBtn}
                    </Button>
                </DialogActions>
            </Dialog>


        </div>
    )
}

export default AddStaffComponent
