import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blogs from "./components/Pages/Blogs/Blogs";
import AddProduct from "./components/Pages/Dashboard/AddProduct";
import AddReview from "./components/Pages/Dashboard/AddReview";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MakeAdmin from "./components/Pages/Dashboard/MakeAdmin";
import ManageOrders from "./components/Pages/Dashboard/ManageOrders";
import MyOrder from "./components/Pages/Dashboard/MyOrder";
import MyProfile from "./components/Pages/Dashboard/MyProfile";
import Payment from "./components/Pages/Dashboard/Payment";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import MyPortfolio from "./components/Pages/MyPortfolio/MyPortfolio";
import Purchase from "./components/Pages/Purchase/Purchase";
import Signup from "./components/Pages/Signup/Signup";
// import Loading from "./components/Shared/Loading/Loading";

import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import RequireAdmin from "./components/Shared/RequireAdmin";
import RequireAuth from "./components/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Navbar />
      {/* <Loading /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/purchase/:itemId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="myorder" element={<MyOrder />} />
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path="manageorders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
          <Route path="payment/:id" element={<Payment/> }></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
