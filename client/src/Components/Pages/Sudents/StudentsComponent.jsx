import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageHeader from "../../Features/PageHeader/PageHeaderComponent";
import RegisterForm from "../../Features/RegisterForm/RegisterFormComponent";
import StudentCard from "../../Features/StudentCard/StudentCardComponent";

const Students = () => {
const {students} = useSelector((state) => state.students);
  const [isRegister, SetIsRegister] = useState(false);
  return (
    <div>
      <PageHeader title={"סטודנטים"} />
      <button onClick={() => SetIsRegister(isRegister ? false : true)}>
        הוספת סטודנט
      </button>
      {isRegister ? <RegisterForm SetIsRegister={() => SetIsRegister(false)} /> : ""}
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
};
export default Students;
