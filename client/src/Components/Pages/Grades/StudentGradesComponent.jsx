import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentTest } from "../../../Redux/actions/studentActions";
import PageHeader from "../../Features/PageHeader/PageHeaderComponent";

const StudentGradesComponent = () => {
  const dispatch = useDispatch()

  const {user} = useSelector(state => state.user);
  useEffect(() => dispatch(getStudentTest(user.id)), [dispatch, user.id]);
  const student = useSelector((state) => state.student);
  return (
    <>
      <PageHeader title={"הציונים שלי"} />
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
