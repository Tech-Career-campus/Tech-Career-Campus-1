import { useEffect, useState } from "react";
import EditGradeComponent from "../../Features/EditGrade/EditGradeComponent";
import './admin.css'
const AdminGradesComponent = () => {
  
  const [students, setStudents] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api/student")
      .then((response) => response.json())
      .then((response) => setStudents(response.data));
  }, []);

  const [studentInfo, setStudentInfo] = useState({
    isOpen: false,
    student: {},
  });

  return (
    <div className='admin-grade-contaniner'>
      <div>
        <h1>ציוני סטודנטים</h1>
        <div className='wrap'>
        <div className='search'>
        <input className='search-term' type="text" />
        <button className='search-button'>
        <i className="fa fa-search"></i>
        </button>
        </div>
      </div>
      </div>
      <div style={{ position: "relative" }}>
        {studentInfo.isOpen ? (
          <EditGradeComponent
            student={studentInfo.student}
            handleFnc={() => setStudentInfo(false)}
          />
        ) : (
          ""
        )}

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">שם פרטי</th>
              <th scope="col">שם משפחה</th>
              <th scope="col">קורס</th>
              <th scope="col">ערוך</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.courseName}</td>
                <td
                  onClick={() =>
                    setStudentInfo({ isOpen: true, student})
                  }
                >
                  <i className="fas fa-user-edit"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminGradesComponent;
