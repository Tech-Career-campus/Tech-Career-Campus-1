import PageHeader from "../../Features/PageHeader/PageHeaderComponent";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const CreatCourse = () => {
return (
  <div>
    <PageHeader title={"יצירת קורס"} />
    <form>
      <label>{hebrewVariables.course}</label>
      <input type={"text"} />
    </form>
  </div>
);
};
export default CreatCourse;