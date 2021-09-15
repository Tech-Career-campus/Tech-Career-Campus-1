import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStudent } from "../../../Redux/actions/studentsActions";
import handleChange from "../../../utils/handleChange";
import "./registerForm.css";
let generator = require("generate-password");

let password = generator.generate({
  length: 8,
  numbers: true,
});
const RegisterForm = ({ SetIsRegister }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.students);
  const course = useSelector((state) => state.course);

  const [newStudent, setNewStudent] = useState({
    registeredAs: "Student",
    id: user.id,
    courseId: course._id,
    courseName: course.name,
    password: password,
  });

  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (!errors) {
      setIsSend(true);
    }
  }, [dispatch]);
  return (
    <>
      {!isSend ? (
        <form
          className="register-form-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>שם פרטי</label>
          <input
            name="firstName"
            onChange={(e) => handleChange(e, newStudent, setNewStudent)}
            type={"text"}
          />
          <p> {errors?.firstName ? errors.firstName : ""} </p>

          <label>שם משפחה</label>
          <input
            name="lastName"
            onChange={(e) => handleChange(e, newStudent, setNewStudent)}
            type={"text"}
          />
          <p> {errors?.lastName ? errors.lastName : ""} </p>

          <label>אימייל</label>
          <input
            name="email"
            onChange={(e) => handleChange(e, newStudent, setNewStudent)}
            type={"email"}
          />
          <p> {errors?.email ? errors.email : ""} </p>
          <label>מס טלפון</label>
          <input
            name="phone"
            onChange={(e) => handleChange(e, newStudent, setNewStudent)}
            type={"text"}
          />
          <p> {errors?.phone ? errors.phone : ""} </p>

          <label>גיל</label>
          <input
            name="age"
            onChange={(e) => handleChange(e, newStudent, setNewStudent)}
            type={"number"}
          />
          <p> {errors?.age ? errors.age : ""} </p>

          <label>סיסמא</label>
          <input
            name="password"
            onChange={(e) => handleChange(e, newStudent, setNewStudent)}
            type={"text"}
            value={newStudent.password}
          />
          <button onClick={() => dispatch(createStudent(newStudent))}>
            הוסף
          </button>
        </form>
      ) : (
        <div>
          <h3>
            {newStudent.firstName} {newStudent.lastName} נרשם במערכת
          </h3>
          <p> נשלח מייל עם פרטי התחברות לכתובת {newStudent.email}</p>
          <button onClick={() => {
            SetIsRegister();
            setIsSend(false)
          }}>סגור</button>
        </div>
      )}
    </>
  );
};
export default RegisterForm;
