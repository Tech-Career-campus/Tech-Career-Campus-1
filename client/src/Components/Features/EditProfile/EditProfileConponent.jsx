import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../Redux/actions/userActions";
import handleChange from "../../../utils/handleChange";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const EditProfile = ({ user , setEditProfile}) => {
  const [changePassword, setChangePassword] = useState(false);
  //   const [updateUser, setUpdateUser] = useState({...user, password:"", newPassword:"", confirmPassword:"" })
  const [userUpdate, setUserUpdate] = useState({ ...user });
  const dispatch = useDispatch();

  useEffect(() => setUserUpdate({ ...user}), [user]);
  

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
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
        <button
          onClick={() => setChangePassword(changePassword ? false : true)}
        >
          {hebrewVariables.updatePassword}
        </button>
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
        <button onClick={() => dispatch(updateUser(userUpdate))}>
          {hebrewVariables.update}
        </button>
      </form>
      <button onClick={() => setEditProfile(false)}>
        {hebrewVariables.closeBtn}
      </button>
    </div>
  );
};
export default EditProfile;
