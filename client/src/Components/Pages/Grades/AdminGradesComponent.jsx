import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../../Redux/actions/studentsActions";
import { getStudent } from "../../../Redux/actions/studentActions";
import EditGradesComponent from "../../Features/Grade/EditGradeComponent";
import "./admin.css";
import PageHeader from "../../Features/PageHeader/PageHeaderComponent";
const AdminGradesComponent = () => {
  const dispatch = useDispatch();
const { students } = useSelector((state) => state.students);
  const [openTests, setOpenTests] = useState(false);
  useEffect(() => dispatch(getStudents()), [dispatch, openTests]);

  return (
    <div className="admin-grade-contaniner">
      <div>
        <PageHeader title={"ציוני סטודנטים"} />
        <div className="wrap">
          <div className="search">
            <input className="search-term" type="text" />
            <button className="search-button">
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
              <th scope="col">שם פרטי</th>
              <th scope="col">שם משפחה</th>
              <th scope="col">קורס</th>
              <th scope="col">ערוך</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminGradesComponent;
