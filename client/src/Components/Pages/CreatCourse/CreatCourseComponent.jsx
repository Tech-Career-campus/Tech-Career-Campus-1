import PageHeader from "../../Features/PageHeader/PageHeaderComponent";

const CreatCourse = () => {

  // useEffect()
return (
  <div>
    <PageHeader title={"יצירת קורס"} />
    <form>
      <label>שם הקורס</label>
      <input type={"text"} />
    </form>
  </div>
);
};
export default CreatCourse;