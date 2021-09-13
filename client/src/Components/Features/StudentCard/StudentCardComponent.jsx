import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteStudent,
  updateStudent,
} from "../../../Redux/actions/studentsActions";
import handleChange from "../../../utils/handleChange";
import "./studentCard.css";
const StudentCard = ({ student }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const [studentUpdate, setStudentUpdate] = useState({
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    age: student.age,
    phone: student.phone,
    _id: student._id,
  });

  return (
    <div className="student-card">
      <div className="student-card-img">
        <img
          src="https://img.lovepik.com/element/40170/3915.png_860.png"
          alt={"Student"}
        />
      </div>
      {!isEdit ? (
        <div className="student-card-body">
          <h3>
            שם: {student.firstName} {student.lastName}
          </h3>
          <p>קורס: {student.courseName}</p>
          <p>אימייל: {student.email}</p>
          <p>מס טלפון: {student.phone}</p>
          <p>גיל: {student.age}</p>
          <div className='student-card-body-btn'>
            <button
              className="btn"
              onClick={() => dispatch(deleteStudent(student._id))}
            >
              מחיקה
            </button>
            <button
              className="btn"
              onClick={() => {
                setIsEdit(true);
                setStudentUpdate({ ...studentUpdate, _id: student._id });
              }}
            >
              עריכה
            </button>
          </div>
        </div>
      ) : (
        <div className="student-card-body">
          <form className='student-card-body-form'>
            <label>שם פרטי</label>
            <input
              name="firstName"
              onChange={(e) => handleChange(e, studentUpdate, setStudentUpdate)}
              type={"text"}
              value={studentUpdate.firstName}
            />
            <label>שם משפחה</label>
            <input
              name="lastName"
              onChange={(e) => handleChange(e, studentUpdate, setStudentUpdate)}
              type={"text"}
              value={studentUpdate.lastName}
            />
            <label>אימייל</label>
            <input
              name="email"
              onChange={(e) => handleChange(e, studentUpdate, setStudentUpdate)}
              type={"email"}
              value={studentUpdate.email}
            />
            <label>מס טלפון</label>
            <input
              name="phone"
              onChange={(e) => handleChange(e, studentUpdate, setStudentUpdate)}
              type={"text"}
              value={studentUpdate.phone}
            />
            <label>גיל</label>
            <input
              name="age"
              onChange={(e) => handleChange(e, studentUpdate, setStudentUpdate)}
              type={"number"}
              value={studentUpdate.age}
            />
            <button
              className="btn"
              onClick={() => {
                setIsEdit(false);
                dispatch(updateStudent(studentUpdate));
              }}
            >
              אישור
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default StudentCard;
