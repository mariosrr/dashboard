import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, MailOutline, DataUsage, GroupSharp, GroupOutlined, FiberManualRecord, WorkOutline, LocalHospitalOutlined, Dashboard, Settings } from "@material-ui/icons";

export default function Sidebar() {
    return (
        
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Settings className="sidebarIcon" />
                            My Operation
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            My Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Dashboard className="sidebarIcon" />
                            My Dashboards
                        </li>
                        <li className="sidebarListItem">
                            <DataUsage className="sidebarIcon" />
                            My Datasets
                        </li>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Wisdom Connect</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon" />
                            My Documents
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            My Spaces
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            My Wisdom Connect
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            My Products
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <GroupOutlined className="sidebarIcon" />
                            Collaborate
                        </li>
                        <li className="sidebarListItem">
                            <FiberManualRecord className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            My Digital Concierge
                        </li>
                        <li className="sidebarListItem">
                            <LocalHospitalOutlined className="sidebarIcon" />
                            My Operation Health
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        )
}