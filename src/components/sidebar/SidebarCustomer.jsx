import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, MailOutline, DataUsage, 
    GroupSharp, GroupOutlined, FiberManualRecord, WorkOutline, 
    LocalHospitalOutlined, Dashboard, Settings, AddCircle, ThumbDown } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function SidebarCustomer() {
    return (

        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarSection">
                        <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <Settings className="sidebarIcon" />
                                <Link to="/opsNortek">My Operation</Link>
                            </li>
                            <li className="sidebarListItem">
                                <Dashboard className="sidebarIcon" />
                                My Dashboards
                            </li>
                        </ul>
                    </div>

                    <div className="sidebarSection">
                        <h3 className="sidebarTitle">Operations</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <ThumbDown className="sidebarIcon" />
                                <Link to="/nonConformitiesList">Non Conformities</Link>
                            </li>

                        </ul>
                    </div>
                </div>


            </div>
        </div>

    )
}