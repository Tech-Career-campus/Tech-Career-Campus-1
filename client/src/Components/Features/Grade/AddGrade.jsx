import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTest } from "../../../Redux/actions/studentActions";
import handleChange from "../../../utils/handleChange";

const AddGrade = ({ studentId }) => {
  const [newTest, setNewTest] = useState({
    grade: "",
    name: "",
    studentId,
  });

  const dispatch = useDispatch();

  return (
    <form className="grade-form" onSubmit={(e) => e.preventDefault()}>
      <label>Test name</label>
      <input
        type={"text"}
        placeholder={"Test name"}
        value={newTest.name}
        name={"name"}
        onChange={(e) => handleChange(e, newTest, setNewTest)}
        required
      />
      <label>Grade</label>
      <input
        type={"number"}
        value={newTest.grade}
        placeholder={"Grade"}
        name={"grade"}
        onChange={(e) => handleChange(e, newTest, setNewTest)}
        required
      />
      <button
        className="btn"
        onClick={(e) => {
          dispatch(addTest(newTest));
        }}
      >
        Add test
      </button>
    </form>
  );
};

export default AddGrade;
