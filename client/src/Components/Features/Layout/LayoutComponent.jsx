import { useSelector } from "react-redux";
import Login from "../../Pages/Login/LoginComponent";
import Footer from "../Footer/FooterComponent";
import Header from "../Header/HeaderComponent";


const Layout = ({children})=> {
const user = useSelector((state) => state.user);

const logout = () => {
  localStorage.removeItem("jwtToken");
  window.location.href = "./";
}
    return (
      <div>
        <button className='btn' onClick={() => logout()}>logout</button>
        <Header />
        {user.isConnected ? children : <Login errors={user.errors} />}
        <Footer />
      </div>
    );
}
export default Layout;
