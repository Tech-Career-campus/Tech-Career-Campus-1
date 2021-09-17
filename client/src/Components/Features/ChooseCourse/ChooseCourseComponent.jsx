import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../../Redux/actions/courseActions";
import { getCourses } from "../../../Redux/actions/coursesActions";

const ChooseCourse = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
   const { user } = useSelector((state) => state.user);
   console.log(courses)
   useEffect(() => {
     if (user.role === "Staff") dispatch(getCourses());
   }, [dispatch, user]);
   
  return (
    <div>
      {courses.map((course) => (
        <button
          key={course._id}
          onClick={() => dispatch(getCourse(course._id))}
        >
          {course.name}
        </button>
      ))}
    </div>
  );
};
export default ChooseCourse;
