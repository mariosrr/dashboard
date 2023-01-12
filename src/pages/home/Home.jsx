import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import Powerbi from "../../components/powerbi/Powerbi"
import Chart from "../../components/chart/Chart"
import { userData } from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="Customs Analytic" data={userData}  dataKey="name" grid/>
            <div className="homeWidgets">         
               {
               //<WidgetSm />
               }
                <WidgetLg />
            </div>
            
        </div>
    )
}