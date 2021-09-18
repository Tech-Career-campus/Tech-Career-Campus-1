import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentTest } from "../../../Redux/actions/studentActions";
import PageHeader from "../../Features/PageHeader/PageHeaderComponent";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const StudentGradesComponent = () => {
  // const [student, setStudent] = useState();
  //   const token = localStorage.getItem("jwtToken");
  //   const defaultHeaders = {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   };

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/student", {
  //     headers: defaultHeaders,
  //   })
  //     .then((response) => response.json())
  //     .then((response) => setStudent(response.data[4]))
  //     .catch((err) => console.log(err));
  // }, []);
  const dispatch = useDispatch()

  const {user} = useSelector(state => state.user);
  useEffect(() => dispatch(getStudentTest(user.id)), [dispatch, user.id]);
  const student = useSelector((state) => state.student);
  return (
    <>
      <PageHeader title={hebrewVariables.myGrades} />
      {student?.tests?.map((test) => {
        return (
          <div key={test._id}>
            <h3>{test.name}</h3>
            <p>{test.grade}</p>
          </div>
        );
      })}
    </>
  );
};
export default StudentGradesComponent;
