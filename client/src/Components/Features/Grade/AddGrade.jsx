import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTest } from "../../../Redux/actions/studentActions";

const AddGrade = ({ studentId }) => {
  const [newTest, setNewTest] = useState({
    grade: "",
    name: "",
  });
  const dispatch = useDispatch();

  const HandleChange = (e) => {
    setNewTest({
      ...newTest,
      [e.target.name]: e.target.value,
      studentId,
    });
  };

  return (
    <form className="grade-form">
      <label>Test name</label>
      <input
        type={"text"}
        placeholder={"Test name"}
        value={newTest.name}
        name={"name"}
        onChange={(e) => HandleChange(e)}
      />
      <label>Grade</label>
      <input
        value={newTest.grade}
        placeholder={"Grade"}
        name={"grade"}
        onChange={(e) => HandleChange(e)}
      />
      <button
        className="btn"
        onClick={(e) => {
          dispatch(addTest(newTest));
          setNewTest({
            grade: "",
            name: "",
          });
          e.preventDefault();
        }}
      >
        Add test
      </button>
    </form>
  );
};

export default AddGrade;
