import { Visibility } from "@material-ui/icons"
import "./widgetSm.css"

export default function WidgetSm() {
  return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Transactions</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" alt="" className="widgetSmImg"></img>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Pedimento 1</span>
                        <span className="widgetSmUserTitle">Pedimento 2</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" alt="" className="widgetSmImg"></img>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Pedimento 1</span>
                        <span className="widgetSmUserTitle">Pedimento 2</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility  className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" alt="" className="widgetSmImg"></img>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Pedimento 1</span>
                        <span className="widgetSmUserTitle">Pedimento 2</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility  className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" alt="" className="widgetSmImg"></img>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Pedimento 1</span>
                        <span className="widgetSmUserTitle">Pedimento 2</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility  className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" alt="" className="widgetSmImg"></img>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Pedimento 1</span>
                        <span className="widgetSmUserTitle">Pedimento 2</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility  className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>

  ) 
}
