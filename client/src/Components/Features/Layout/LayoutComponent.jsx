import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Redux/actions/userActions";
import Login from "../../Pages/Login/LoginComponent";
import Footer from "../Footer/FooterComponent";
import Header from "../Header/HeaderComponent";

const Layout = ({ children }) => {
  const token = localStorage.getItem("jwtToken");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
   if (token) dispatch(getUser());
  }, []);


  return (
    <div>
      <Header />
      {token ? children : <Login errors={user.errors} />}
      <Footer />
    </div>
  );
};
export default Layout;
