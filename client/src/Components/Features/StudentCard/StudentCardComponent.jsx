import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStudent, updateStudent } from "../../../Redux/actions/studentsActions";
import handleChange from "../../../utils/handleChange";

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
    <div>
      <img
        src="https://img.lovepik.com/element/40170/3915.png_860.png"
        alt={"Student"}
      />
      {!isEdit ? (
        <>
          <h3>
            {student.firstName} {student.lastName}
          </h3>
          <p>{student.courseName}</p>
          <p>אימייל: {student.email}</p>
          <p>מס טלפון: {student.phone}</p>
          <p>גיל: {student.age}</p>
          <button onClick={() => dispatch(deleteStudent(student._id))}>
            מחיקה
          </button>
          <button onClick={() => {setIsEdit(true); setStudentUpdate({...studentUpdate, _id:student._id})}}>עריכה</button>
        </>
      ) : (
        <form>
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
            onClick={() => {
              setIsEdit(false);
              dispatch(updateStudent(studentUpdate));
            }}
          >
            אישור
          </button>
        </form>
      )}
    </div>
  );
};
export default StudentCard;
