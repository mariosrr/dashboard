import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import SidebarCustomer from "./components/sidebar/SidebarCustomer"
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
import OperacionesNortek from "./components/powerbi/OperacionesNortek";
import OperacionesGeneral from "./components/powerbi/OperacionesGeneral";
import OperacionesProds from "./components/powerbi/OperacionesProds";
import ReportePatios from "./components/powerbi/ReportePatios"
import NonConformities from "./pages/nonConformities/NonConformities"
import OperacionesNortekUs from "./components/powerbi/OperacionesNortekUs"
import NonConformitiesList from "./pages/nonConformities/NonConformitiesList"
import NonConformitiesUpdate from "./pages/nonConformities/NonConformitiesUpdate"
import OperacionesNortekUrgencias from "./components/powerbi/OperacionesNortekUrgencias"

function App() {
  const auth = false;
  const {user} = useContext(AuthContext);
  //user = "something";

  if (!user){
      return (
        <>
        
        <Router>
        
            <Fragment>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  {/*<Route path="/opsNortek" element={<OperacionesNortek />} />*/}
                  {
                    <Route path="*" element={<Navigate to={user ? "/opsNortek" : "/login"}/>} /> 
                    
                  }

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
                <SidebarCustomer />
                <div className="content">
                  <Routes>
                    <Route exact path="/" element={<PrivateRoute />}>
                      <Route path="/" element={<OperacionesNortek />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/users" element={<UserList />} />
                      <Route path="/operationsMain" element={<DailyOperations />} />
                      <Route path="/powerbi" element={<Powerbi />} />
                      <Route path="/opsRep" element={<OpsRep />} />
                      <Route path="/slamInventario" element={<SlamInventario />} />
                      <Route path="/operationsReport" element={<OperationsReport />} />
                      <Route path="/paginatedReport" element={<PaginatedReport />} />
                      <Route path="/opsNortek" element={<OperacionesNortek />} />
                      <Route path="/opsNortekUs" element={<OperacionesNortekUs />} />
                      <Route path="/reportePatios" element={<ReportePatios />} />
                      <Route path="/nonConformities" element={<NonConformities />} />
                      <Route path="/nonConformitiesList" element={<NonConformitiesList />} />
                      <Route path="/nonConformitiesUpdate" element={<NonConformitiesUpdate />} />
                      <Route path="/opsGeneral" element={<OperacionesGeneral  />} />
                      <Route path="/reporteProductividades" element={<OperacionesProds  />} />
                      <Route path="/opsNortekUrgencias" element={<OperacionesNortekUrgencias  />} />
                      <Route path="/pediment/:reference" element={<Pediment />} />
                      
                    </Route>
                    <Route path="/login" element={user ? OperacionesNortek() : Login() } />
                    
                    {
                      <Route path="*" element={<Navigate to={user ? "/opsNortek" : "/login"}/>} /> 
                      
                    }
                  </Routes>
                </div>
            </div>
            </Fragment>
        </Router>
        </>
    );
  }
}

export default App;
