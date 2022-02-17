import { DockRounded } from "@material-ui/icons"
import "./pediment.css"

export default function pediment() {
  return (
    <div className="pediment">
        <div className="pedimentTitleContainer">
            <h1 className="pedimentTitle">Pediment Details</h1>
            <button className="pedimentAddButton">Create</button>
        </div>    
        <div className="pedimentContainer">
            <div className="pedimentShow">
                <div className="pedimentShowTop">
                    <div className="pedimentShowTopTitle">
                        <span className="pedimentShowReference">1WIE0001</span>
                        <span className="pedimentShowRegime">A1</span>
                    </div>
                </div>
                <div className="pedimentShowBottom">
                    <span className="pedimentShowRegime">Pedimento Details</span>
                    <div className="pedimentShowInfo">
                        <DockRounded className="pedimentShowIcon" />
                        <span className="pedimentShowInfoRegime">A1 - Simple Pedimento</span>
                    </div>
                </div>
            </div>
            <div className="pedimentUpdate">b</div>
        </div>
    </div>
  )
}
