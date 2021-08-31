import { useEffect, useState } from "react";

const StudentGradesComponent = () => {
  const [student, setStudent] = useState();
    const token = localStorage.getItem("jwtToken");
    const defaultHeaders = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

  useEffect(() => {
    fetch("http://localhost:8080/api/student", {
      headers: defaultHeaders,
    })
      .then((response) => response.json())
      .then((response) => setStudent(response.data[4]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>הציונים שלי</h2>
      {student?.tests.map((test, index) => {
        return (
          <div key={index}>
            <h3>{test.name}</h3>
            <p>{test.grade}</p>
          </div>
        );
      })}
    </>
  );
};
export default StudentGradesComponent;
