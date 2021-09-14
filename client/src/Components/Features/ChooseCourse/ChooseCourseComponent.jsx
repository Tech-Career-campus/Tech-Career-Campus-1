import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../../Redux/actions/courseActions";
import { getCourses } from "../../../Redux/actions/coursesActions";

const ChooseCourse = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
   const { user } = useSelector((state) => state.user);
   useEffect(() => {
     console.log(courses);
     if (user.role === "Staff") dispatch(getCourses());
   }, []);
   
  return (
    <div>
      {courses.map((course) => (
        <button >{course.name}</button>
      ))}
    </div>
  );
};
// onClick={dispatch(getCourse(course.id))}
export default ChooseCourse;
