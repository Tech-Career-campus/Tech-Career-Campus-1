import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStaff } from '../../../Redux/actions/staffAction';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddStaffComponent from '../../Features/AddStaffForm/AddStaffComponent';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteStaff } from '../../../Redux/actions/staffAction';
import { hebrewVariables } from '../../../utils/hebrewVariables';
import StaffCard from '../../Features/StaffCard/StaffCard';
import staffImg from '../../../images/1632247546163.jpg'






const StaffComponents = () => {

    const [open, setOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const dispatch = useDispatch();
    const staff = useSelector((state) => state.staff.staff);

    useEffect(() => dispatch(getStaff()), [dispatch]);

    return (
        <div >
            <h1>הצוות שלנו</h1>
            <div style={{backgroundColor:"#E5E9F0"}}>
                {
                    open ? <AddStaffComponent open={open} handleClose={() => setOpen(!open)} /> : ""
                }

                <button className='btn' onClick={() => setOpen(!open)}>
                    {hebrewVariables.addStuff}
                </button>
                <div className='staff-card-container' >
                {staff?.map((staffItem) => (
                    <div className='staff-card-container' key={staffItem._id}>
                        <StaffCard staffItem={staffItem} isEdit={isEdit} setIsEdit={()=>setIsEdit(!isEdit)} />
                    </div>
                ))}
                 </div>
            </div>
        </div >
    )
}

export default StaffComponents
