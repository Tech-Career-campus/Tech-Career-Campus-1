import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createHomework,
  editHomework,
} from "../../../Redux/actions/homeworkActions";
import handleChange from "../../../utils/handleChange";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import homeworkValidator from "./homeworkValidator";
import './homeworkForm.css'


const HomeworkFrom = ({
  state,
  setState,
  type,
  setIsCreateHomework,
  setIsEditHomework,
}) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (errors.isValid) {
      if (type === "edit") {
        dispatch(editHomework(state));
        setIsEditHomework(false);
      }
      if (type === "create") {
        dispatch(createHomework(state));
        setIsCreateHomework(false);
      }
      setState({
        ...state,
        subject: "",
        description: "",
      });
    }
  }, [errors]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>{hebrewVariables.subject}</label>
      <label>{errors.errors ? errors.errors?.subject : ""}</label>
      <input
        name={"subject"}
        value={state.subject}
        type="text"
        onChange={(e) => handleChange(e, state, setState)}
      />
      <label>{hebrewVariables.description}</label>
      <label>{errors.errors ? errors.errors?.description : ""}</label>
      <textarea
        name={"description"}
        value={state.description}
        type="text"
        onChange={(e) => handleChange(e, state, setState)}
      />
      <button
        onClick={() => {
          setErrors(homeworkValidator(state));
        }}
      >
        {type === "edit" ? hebrewVariables.update : hebrewVariables.addHomework}
      </button>
    </form>
  );
};

export default HomeworkFrom;
