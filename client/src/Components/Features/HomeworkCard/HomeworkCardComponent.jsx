import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteHomework } from "../../../Redux/actions/homeworkActions";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const HomeworkCard = ({
  work,
  setIsEditHomework,
  isEditHomework,
  setUpdateHomework,
}) => {
  
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{work.subject}</h3>
      <p>{work.description}</p>
      <p>{moment(work.createdAt).calendar()}</p>
      {user.role === "Staff" ? (
        <>
          <button
            onClick={() => {
              setIsEditHomework(isEditHomework ? false : true);
              setUpdateHomework({...work});
            }}
          >
            {hebrewVariables.edit}
          </button>
          <button onClick={() => dispatch(deleteHomework(work._id))}>
            {hebrewVariables.delete}
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeworkCard;
