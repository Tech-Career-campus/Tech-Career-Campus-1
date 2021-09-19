import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTest } from "../../../Redux/actions/studentActions";
import handleChange from "../../../utils/handleChange";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const AddGrade = ({ studentId }) => {
  const [newTest, setNewTest] = useState({
    grade: "",
    name: "",
    studentId,
  });

  const dispatch = useDispatch();

  return (
    <form className="grade-form" onSubmit={(e) => e.preventDefault()}>
      <label>{hebrewVariables.testName}</label>
      <input
        type={"text"}
        placeholder={hebrewVariables.testName}
        value={newTest.name}
        name={"name"}
        onChange={(e) => handleChange(e, newTest, setNewTest)}
        required
      />
      <label>{hebrewVariables.grade}</label>
      <input
        type={"number"}
        value={newTest.grade}
        placeholder={hebrewVariables.grade}
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
        {hebrewVariables.addTest}
      </button>
    </form>
  );
};

export default AddGrade;
