import { useState } from "react";
import { useDispatch } from "react-redux";
import { editGrade } from "../../../Redux/actions/userActions";
import "./EditGradeComponent.css";

const EditGradeComponent = ({ student, handleFnc }) => {
  const [editTest, setEditTest] = useState({ isEdit: false, testId: "" });
  const [updateTest, setUpdateTest] = useState({
    studentId: student._id,
    gradeId: editTest.testId,
    name: "",
    grade: null,
  });
  const dispatch = useDispatch();
  
  const HandleChange = (e) =>{
    setUpdateTest(
      {
        ...updateTest,
        [e.target.name]: e.target.value
      }
    )
  }
  console.log(updateTest);
  console.log(editTest);
  return (
    <div className="student-info">
      <h3>
        {student.firstName} {student.lastName}
      </h3>
      {student.tests.map((test, index) => {
        return (
          <div key={index}>
            <h4>{test.name}</h4>
            {editTest.isEdit && editTest.testId === test._id ? (
              <>
                <input
                  type="number"
                  placeholder={test.grade}
                  name="grade"
                  onChange={(e) => HandleChange(e)}
                />
                <i
                  onClick={() => {
                    dispatch(editGrade("612004466a18a679004e2f03"));
                    setEditTest({
                      isEdit: false,
                    });
                  }}
                  className="fas fa-check-square"
                ></i>
              </>
            ) : (
              <p>
                {test.grade}
                <i
                  onClick={() => {
                    setEditTest({ isEdit: true, testId: test._id });
                    setUpdateTest({ ...updateTest, name: test.name });
                  }}
                  className="far fa-edit"
                ></i>
              </p>
            )}
          </div>
        );
      })}
      <form className="grade-form">
        <label>Test name</label>
        <input type={"text"} placeholder={"Test name"} />
        <label>Grade</label>
        <input type={"number"} placeholder={"Grade"} />
        <button className="btn"  onClick={(e) => e.preventDefault()}>Add test</button>
      </form>
      <button className="btn " onClick={() => handleFnc()}>סגור</button>
    </div>
  );
};

export default EditGradeComponent;
