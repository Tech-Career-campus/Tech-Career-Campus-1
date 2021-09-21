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
  const { user } = useSelector((state) => state.user);
  const { errors } = useSelector((state) => state.courses);
  const { courses } = useSelector((state) => state.courses);
  console.log(errors);
  const [createCourseErrors, setCreateCourseErrors] = useState(true);

  useEffect(() => {
    if (newCourse?.CourseInformation) {
      dispatch(createCourse(newCourse));
    }
  }, [newCourse]);

  useEffect(() => {
    if (newCourse?.CourseInformation) setCreateCourseErrors(false);
  }, [courses]);

  return (
    <div>
      <PageHeader title={"יצירת קורס"} />
      {createCourseErrors ? (
        <>
          <form>
            <label>שם הקורס</label>
            <input
              type={"text"}
              onChange={(e) =>
                setNewCourse({
                  ...newCourse,
                  name: e.target.value,
                  id: user.id,
                })
              }
            />
            {errors?.name ? "שם הקורס הינו שדה חובה" : ""}
            <label>סוג קורס</label>
            {errors?.courseType ? "סוג הקורס הינו שדה חובה" : ""}

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
          <button
            onClick={() => setNewSubjectForm(newSubjectForm ? false : true)}
          >
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
              setNewCourse({
                ...newCourse,
                CourseInformation: courseInformation,
              })
            }
          >
            צור קורס
          </button>
        </>
      ) : (
        <div>
          <p>נוצר בהצלחה. {newCourse.name}</p>
          <button
            onClick={() => {
              setCreateCourseErrors(true);
              setNewCourse();
              setCourseType();
            }}
          >
            צור קורס נוסף
          </button>
        </div>
      )}
    </div>
  );
};
export default CreatCourse;
