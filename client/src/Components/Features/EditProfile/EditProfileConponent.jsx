import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../Redux/actions/userActions";
import handleChange from "../../../utils/handleChange";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './editProfile.css'

const EditProfile = ({ setOpen,open, user, setEditProfile}) => {
  const [changePassword, setChangePassword] = useState(false);
  //   const [updateUser, setUpdateUser] = useState({...user, password:"", newPassword:"", confirmPassword:"" })
  const [userUpdate, setUserUpdate] = useState({ ...user });
  const [file, setFile] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => setUserUpdate({ ...user}), [user]);

  const handleClose = () => setOpen(false);

  return (
    
    <div className="edit-profile">
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className="edit-profile-box">
      <form className='edit-profile-form' onSubmit={(e) => e.preventDefault()}>
        <label> {hebrewVariables.firstName}</label>
        <input
          value={userUpdate.firstName}
          type="text"
          name={"firstName"}
          onChange={(e) => handleChange(e, userUpdate, setUserUpdate)}
        />
        <label>{hebrewVariables.lastName}</label>
        <input
          value={userUpdate.lastName}
          type="text"
          name={"lastName"}
          onChange={(e) => handleChange(e, userUpdate, setUserUpdate)}
        />
        <label>{hebrewVariables.email} </label>
        <input
          value={userUpdate.email}
          type="email"
          name={"email"}
          onChange={(e) => handleChange(e, userUpdate, setUserUpdate)}
        />
        <label>{hebrewVariables.phone} </label>
        <input
          value={userUpdate.phone}
          type="tel"
          name={"phone"}
          onChange={(e) => handleChange(e, userUpdate, setUserUpdate)}
        />
            <input accept="image/*" name="profileImg" type="file"
              onChange={e => {
                const img=e.target.files[0]
                setFile(img)
              }} />
            <div className={`edit-profile-btn-container ${changePassword ? "edit-profile-form" : ""}`}>

        {changePassword ? (
          <>
            <label>{hebrewVariables.currentPassword}</label>
            <input type="password" />
            <label>{hebrewVariables.newPassword}</label>
            <input value={userUpdate.newPassword} type="password" />
            <label>{hebrewVariables.confirmPassword}</label>
            <input value={userUpdate.confirm} type="password" />
          </>
        ) : (
          ""
        )}
        <button
        className='btn'
          onClick={() => setChangePassword(changePassword ? false : true)}
        >
          {hebrewVariables.updatePassword}
        </button>
        <button className='btn' onClick={() => dispatch(updateUser(userUpdate,file))}>
          {hebrewVariables.update}
        </button>

        </div>
       
      </form>
      <button style={{width:"100%"}} className='btn' onClick={() => setEditProfile(false)}>
        {hebrewVariables.closeBtn}
      </button>
      </Box>
      </Modal>
    </div>
  );
};
export default EditProfile;
