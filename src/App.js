import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blogs from "./components/Pages/Blogs/Blogs";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import MyPortfolio from "./components/Pages/MyPortfolio/MyPortfolio";
import Purchase from "./components/Pages/Purchase/Purchase";
import Loading from "./components/Shared/Loading/Loading";
import Dashboard from "./components/Shared/Navbar/Dashboard/Dashboard";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
// import RequireAuth from "./components/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Navbar />
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route
          path="/purchase"
          element={
            // <RequireAuth>
              <Purchase />
            // </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            // <RequireAuth>
              <Dashboard />
            // </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/myportfolio" element={<MyPortfolio/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
