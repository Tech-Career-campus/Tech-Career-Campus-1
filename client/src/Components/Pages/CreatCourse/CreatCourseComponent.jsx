import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../Features/PageHeader/PageHeaderComponent";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import SelectCourseSubjects from "../../Features/SelectCourseSubjects/SelectCourseSubjectsComponent";
import CreateNewSubject from "../../Features/CreateNewSubject/CreateNewSubjectComponent";
import { createCourse } from "../../../Redux/actions/coursesActions";
const CreatCourse = () => {
  const [corseType, setCourseType] = useState();
  const [newCourse, setNewCourse] = useState();
  const [newSubjectForm, setNewSubjectForm] = useState(false);
  const [courseInformation, setCourseInformation] = useState([]);
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user)
  console.log(user);

  useEffect(() => {
    debugger
    if (newCourse?.CourseInformation) dispatch(createCourse(newCourse));
  }, [newCourse]);
  return (
    <div>
      <PageHeader title={"יצירת קורס"} />
      <form>
        <label>שם הקורס</label>
        <input
          type={"text"}
          onChange={(e) =>
            setNewCourse({ ...newCourse, name: e.target.value, id: user.id })
          }
        />
        <label>סוג קורס</label>
        <select
          onChange={(e) => {
            setCourseType(e.target.value);
            setNewCourse({ ...newCourse, courseType: e.target.value });
          }}
        >
          <option></option>
          <option value="פיתוח">פיתוח</option>
          <option value="ניהול רשתות">ניהול רשתות</option>
          <option value="סייבר">סייבר</option>
        </select>
      </form>
      <button onClick={() => setNewSubjectForm(newSubjectForm ? false : true)}>
        צור נושא חדש
      </button>
      {newSubjectForm ? (
        <CreateNewSubject
          courseInformation={courseInformation}
          setCourseInformation={setCourseInformation}
          setNewSubjectForm={setNewSubjectForm}
        />
      ) : (
        ""
      )}

      <SelectCourseSubjects
        corseType={corseType}
        setCourseInformation={setCourseInformation}
        courseInformation={courseInformation}
      />
      <button
        onClick={() =>
          setNewCourse({ ...newCourse, CourseInformation: courseInformation })
        }
      >
        צור קורס
      </button>
    </div>
  );
};
export default CreatCourse;
