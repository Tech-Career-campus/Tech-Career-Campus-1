import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../../Redux/actions/studentsActions";
import { getStudent } from "../../../Redux/actions/studentActions";
import EditGradesComponent from "../../Features/Grade/EditGradeComponent";
import "./admin.css";
import PageHeader from "../../Features/PageHeader/PageHeaderComponent";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const AdminGradesComponent = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);
  const course = useSelector((state) => state.course);
  const [openTests, setOpenTests] = useState(false);
  const [studentSearch, setStudentSearch] = useState("");
  useEffect(
    () => dispatch(getStudents(course._id)),
    [dispatch, openTests, course]
  );

  const search = () => {
    console.log(studentSearch)
    return studentSearch
  }
  const change = (e) => {
    console.log(e.target.value)
    setStudentSearch(e.target.value)
  }


  return (
    <div className="admin-grade-contaniner">
      <div>
        <PageHeader title={hebrewVariables.studentsGrades} />
        <div className="wrap">
          <div className="search">
            <input onChange={change} className="search-term" type="text" placeholder="Search 🔍"/>
            <button onClick={search} className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {openTests ? (
          <EditGradesComponent handleFnc={() => setOpenTests(false)} />
        ) : (
          ""
        )}

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">{hebrewVariables.firstName}</th>
              <th scope="col">{hebrewVariables.lastName}</th>
              <th scope="col">{hebrewVariables.course}</th>
              <th scope="col">{hebrewVariables.edit}</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student) => (
               student.firstName === studentSearch ? (
                <tr key={student._id}>
                  <td>{student?.firstName}</td>
                  <td>{student?.lastName}</td>
                  <td>{student?.courseName}</td>
                  <td
                    onClick={() => {
                      setOpenTests(true);
                      dispatch(getStudent(student));
                    }}
                  >
                    <i className="fas fa-user-edit"></i>
                  </td>
                </tr>
              ) :
                (
                  <tr key={student._id}>
                    <td>{student?.firstName}</td>
                    <td>{student?.lastName}</td>
                    <td>{student?.courseName}</td>
                    <td
                      onClick={() => {
                        setOpenTests(true);
                        dispatch(getStudent(student));
                      }}
                    >
                      <i className="fas fa-user-edit"></i>
                    </td>
                  </tr>
                )

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminGradesComponent;