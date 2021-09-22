import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentTest } from "../../../Redux/actions/studentActions";
import PageHeader from "../../Features/PageHeader/PageHeaderComponent";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const StudentGradesComponent = () => {
  const dispatch = useDispatch()

  const {user} = useSelector(state => state.user);
  useEffect(() => dispatch(getStudentTest(user._id)), [dispatch, user._id]);
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
