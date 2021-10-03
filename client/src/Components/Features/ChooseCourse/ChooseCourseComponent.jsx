import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse, deleteCourse } from "../../../Redux/actions/courseActions";
import { getCourses } from "../../../Redux/actions/coursesActions";
import './ChooseCourseComponent.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreatCourse from '../../Pages/CreatCourse/CreatCourseComponent';

const ChooseCourse = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (user.role === "Staff") dispatch(getCourses());
  }, [dispatch, user]);

  const [course, setcourse] = useState([]);
  const [model, setmodel] = useState(false);
  const getData = (id, name) => {
    let tempdata = [id, name]
    setcourse(item => [1, ...tempdata])
    return setmodel(true)
  }
  const DeleteModel = (props) => {
    let styleModel = { width: "200px", heigh: "140px", backgroundColor: "white", color: "black", display: "block", border: "1px solid black" }
    return (
      <div style={styleModel}>
        <h3>אתה בטוח שאתה רוצה למחוק את  הקורס {props.courseName} </h3>
        <Button style={{ "backgroundColor": "red", "color": "white" }} onClick={() => { return setmodel(false) }}>חזור </Button>
        <Button style={{ "backgroundColor": "red", "color": "white", "margin": "10px" }} onClick={() => { window.location.reload(); return dispatch(deleteCourse(props._id)) }}>מחק</Button>
      </div>
    )
  }

  //   {
  //     user.role === "Staff" ? <Tab style={{fontSize:"16px"}} eventKey="Creat-course" title={hebrewVariables.createCourse} >
  //         <CreatCourse />
  //     </Tab> : ""
  // }
  const [creatCourse, setCreatCourse] = useState(false)
  return (
    <div id="container">
     {creatCourse === false ?  "" : <CreatCourse />  }
      {creatCourse === true ?  "" : <Button style={{ "backgroundColor": "red", "color": "white","height":"30px" }} size="xxlarg" onClick={()=>{setCreatCourse(true)}}>יצ ירת קורס </Button>  }
      {creatCourse === false ?  "" : <Button style={{ "backgroundColor": "red", "color": "white","height":"30px" }} size="xxlarg" onClick={()=>{setCreatCourse(false)}}> סגור</Button>  }
      {courses?.map((course) => (
        <div id="courseCard" key={course._id}
          style={{ "marginTop": "10px" }} >
          <Card sx={{ minWidth: 265 }} >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {course.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => { getData(course._id, course.name) }} style={{ "backgroundColor": "red", "color": "white" }} size="xxlarg">מחק קורס</Button>
              ,<br />
              <Button style={{ "backgroundColor": "red", "color": "white" }} size="xxlarg" onClick={() => dispatch(getCourse(course._id))}>פתח קורס</Button>
            </CardActions>
          </Card>
        </div>
      ))}
      {
        model === true ? <DeleteModel courseName={course[2]} _id={course[1]} /> : ""
      }

    </div>
  );
};
export default ChooseCourse;
