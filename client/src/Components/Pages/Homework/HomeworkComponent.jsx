import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomework } from "../../../Redux/actions/homeworkActions";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import PageHeader from "../../Features/PageHeader/PageHeaderComponent";
import HomeworkFrom from "../../Features/HomeworkForm/HomeworkFormComponent";
import HomeworkCard from "../../Features/HomeworkCard/HomeworkCardComponent";

const Homework = () => {
  const { user } = useSelector((state) => state.user);
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const homework = useSelector((state) => state.homework);
console.log(homework)
  const [isCreateHomework, setIsCreateHomework] = useState(false);
  const [isEditHomework, setIsEditHomework] = useState(false);
  const [updateHomework, setUpdateHomework] = useState();

  const [newHomework, setNewHomework] = useState({
    id: "",
    subject: "", 
    description: "",
  });

  useEffect(() => {
    const courseId = user.role === "Student" ? user.courseId : course._id;
    dispatch(getHomework(courseId));
    setNewHomework({ ...newHomework, id: courseId });
  }, [user, course, dispatch]);

  return (
    <>
      <PageHeader title={hebrewVariables.homework} />
      <div>
        {user.role === "Staff" ? (
          <button
            onClick={() => setIsCreateHomework(isCreateHomework ? false : true)}
          >
            {hebrewVariables.createHomework}
          </button>
        ) : (
          ""
        )}
        {isCreateHomework ? (
          <HomeworkFrom
            setIsCreateHomework={setIsCreateHomework}
            setIsEditHomework={setIsEditHomework}
            state={newHomework}
            setState={setNewHomework}
            type="create"
          />
        ) : (
          ""
        )}
        {homework?.map((work) => (
          <div key={work._id}>
            {isEditHomework && updateHomework._id === work._id ? (
              <HomeworkFrom
                setIsEditHomework={setIsEditHomework}
                type="edit"
                state={updateHomework}
                setState={setUpdateHomework}
              />
            ) : (
              <HomeworkCard
                setIsCreateHomework={setIsCreateHomework}
                updateHomework={updateHomework}
                setUpdateHomework={setUpdateHomework}
                work={work}
                setIsEditHomework={setIsEditHomework}
                isEditHomework={isEditHomework}
              />
            )}
          </div>
        ))}
      </div>
      {/* {
        <div>
          {homework?.map((item)=>{
            return <div>
              <h3>{item.subject}</h3>
              <h3>{item.description}</h3>
            </div>
          })
      }
      </div>
     } */}
    </>
  );
};

export default Homework;
