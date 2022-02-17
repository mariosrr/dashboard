import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredInfo.css"

export default function FeaturedInfo() {

    return (

        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Paid Tax</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,450.00</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compare to Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Pedimento Number</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,450.00</span>
                    <span className="featuredMoneyRate">
                        -$2,450.00 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compare to Last Month</span>
            </div> <div className="featuredItem">
                <span className="featuredTitle">Paid DTA</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,450.00</span>
                    <span className="featuredMoneyRate">
                        $2,450.00 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compare to Last Month</span>
            </div>
        </div>


    )

}