import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./assets/Signup";
import Login from "./assets/Login";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Adminfunction from "./adminfucntions//Adminfunction";
import UserFunction from "./userfunctions/UserFunction";
import AddProductForm from "./pages/AddProductForm";
import Products from "./pages/Products";
import MyNavbar from "./components/MyNavbar";
import SideNavbar from "./components/SideNavbar";
import Adminmenu from "./adminfucntions/Adminmenu";
import Profile from "./assets/Profile";
import Adminproductlist from "./adminfucntions/Adminproductlist";
import Adminproductupdate from "./adminfucntions/Adminproductupdate";
import Profileedit from "./userfunctions/profileedit";
import Success from "./pages/Success";
import Howto from "./pages/How_to";
import PurchaseHistory from "./userfunctions/purchasehistory";
import Imageupload from "./userfunctions/Imageupload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogViewer from "./pages/log";
import Ticket from "../src/userfunctions/ticket";
import ViewTicket from "../src/userfunctions/viewTicket";
import ViewTicketuser from "../src/userfunctions/viewTicketuser";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/admin" element={<Adminfunction />} />
          <Route path="/User" element={<UserFunction />} />
          <Route path="/addproduct" element={<AddProductForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sidenav" element={<SideNavbar />} />
          <Route path="/adminmenu" element={<Adminmenu />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/adminproductlist" element={<Adminproductlist />} />
          <Route path="/adminfunction" element={<Adminfunction />} />
          <Route path="/adminproductupdate" element={<Adminproductupdate />} />
          <Route path="/profileedit" element={<Profileedit />} />
          <Route path="/success" element={<Success />} />
          <Route path="/howto" element={<Howto />} />
          <Route path="/purchasehistory" element={<PurchaseHistory />} />
          <Route path="/uploadfile" element={<Imageupload />} />
          <Route path="/loggarum" element={<LogViewer />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/viewTicket" element={<ViewTicket />} />
          <Route path="/viewTicketuser" element={<ViewTicketuser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
