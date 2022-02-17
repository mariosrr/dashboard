import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import "./app.css"
import Home from "./pages/home/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";
import UserList from "./pages/userList/UserList"
import Powerbi from "./components/powerbi/Powerbi"
import Pediment from "./pages/pediment/Pediment"
import SlamInventario from "./components/powerbi/SlamInventario"
import OperationsReport from "./components/powerbi/OperationsReport";
import PaginatedReport from "./components/powerbi/PaginatedReport";
import Login from "./pages/login/Login";
import { Fragment, useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import PrivateRoute from "./components/routing/PrivateRoute";
import OpsRep from "./components/powerbi/OpsRep";
import DailyOperations from "./pages/dailyOperations/DailyOperations";

function App() {
  const auth = false;
  const {user} = useContext(AuthContext);

  if (!user){
      return (
        <>
        
        <Router>
        
            <Fragment>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<Navigate to={user ? "/home" : "/login"}/>} /> 
                </Routes>
            </Fragment>
        </Router>
        </>
    );

  }
  else{

    return (
      <>
        <Router>
            <Fragment>
            <Topbar />
            <br />
            
            <div className="container">
                <Sidebar />
                <Routes>
                  <Route exact path="/" element={<PrivateRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/operationsMain" element={<DailyOperations />} />
                    <Route path="/powerbi" element={<Powerbi />} />
                    <Route path="/opsRep" element={<OpsRep />} />
                    <Route path="/slamInventario" element={<SlamInventario />} />
                    <Route path="/operationsReport" element={<OperationsReport />} />
                    <Route path="/paginatedReport" element={<PaginatedReport />} />
                    <Route path="/pediment/:reference" element={<Pediment />} />
                  </Route>
                  <Route path="/login" element={user ? Home() : Login() } />
                  <Route path="*" element={<Navigate to={user ? "/home" : "/login"}/>} /> 
                </Routes>
            </div>
            </Fragment>
        </Router>
        </>
    );
  }
}

export default App;
