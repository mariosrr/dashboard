import "./widgetLg.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetLg() {
  const Button = ({type}) => {
    return <button className={"widgetLgButton " +  type}>{type}</button>
  }
  return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
              <tr className="widgetLgTr">
                <th className="widgetLgTh">Reference</th>
                <th className="widgetLgTh">Pedimento</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Trailer</th>
                <th className="widgetLgTh">Status</th>
                
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                  {
                    //<img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  }
                  <span className="widgetLgName">HSS-0001</span>
                 
                </td>
                <td className="widgetLgPedimento">345345</td>
                <td className="widgetLgDate">06 Apr 2022</td>
                <td className="widgetLgAmount">MJ456</td>
                <td className="widgetLgStatus">
                  <Button type="Documenting" />

                  </td>
              </tr>
              
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                {
                    //<img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  }
                  <span className="widgetLgName">HSS-0002</span>
                </td>
                <td className="widgetLgPedimento">345345</td>
                <td className="widgetLgDate">06 Apr 2022</td>
                <td className="widgetLgAmount">TR385</td>
                <td className="widgetLgStatus">
                  <Button type="Documenting" />

                  </td>

              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                {
                    //<img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  }
                  <span className="widgetLgName">HSS-0003</span>
                </td>
                <td className="widgetLgPedimento">345345</td>
                <td className="widgetLgDate">06 Apr 2022</td>
                <td className="widgetLgAmount">BD8494</td>
                <td className="widgetLgStatus">
                  <Button type="Inbound" />

                  </td>
                 
              </tr>
              
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                {
                    //<img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  }
                  <span className="widgetLgName">HSS-0004</span>
                </td>
                <td className="widgetLgPedimento">345345</td>
                <td className="widgetLgDate">06 Apr 2022</td>
                <td className="widgetLgAmount">BD4747</td>
                <td className="widgetLgStatus">
                  <Button type="Inbound" />

                  </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                {
                    //<img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  }
                  <span className="widgetLgName">HSS-0005</span>
                </td>
                <td className="widgetLgPedimento">345345</td>
                <td className="widgetLgDate">05 April 2022</td>
                <td className="widgetLgAmount">MJ3244</td>
                <td className="widgetLgStatus">
                  <Button type="Inbound" />

                  </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                {
                    //<img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  }
                  <span className="widgetLgName">HSS-0005</span>
                </td>
                <td className="widgetLgPedimento">345345</td>
                <td className="widgetLgDate">05 April 2022</td>
                <td className="widgetLgAmount">MJ3244</td>
                <td className="widgetLgStatus">
                  <Button type="Transfer" />

                  </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                {
                    //<img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  }
                  <span className="widgetLgName">HSS-0005</span>
                </td>
                <td className="widgetLgPedimento">345345</td>
                <td className="widgetLgDate">05 April 2022</td>
                <td className="widgetLgAmount">MJ3244</td>
                <td className="widgetLgStatus">
                  <Button type="Transfer" />

                  </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                {
                    //<img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  }
                  <span className="widgetLgName">HSS-0005</span>
                </td>
                <td className="widgetLgPedimento">345345</td>
                <td className="widgetLgDate">05 April 2022</td>
                <td className="widgetLgAmount">MJ3244</td>
                <td className="widgetLgStatus">
                  <Button type="Crossed" />

                  </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                {
                    //<img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  }
                  <span className="widgetLgName">HSS-0005</span>
                </td>
                <td className="widgetLgPedimento">345345</td>
                <td className="widgetLgDate">07 March 2022</td>
                <td className="widgetLgAmount">MJ3244</td>
                <td className="widgetLgStatus">
                  <Button type="Crossed" />

                  </td>
              </tr>
            </table>
        </div>

  ) 
}
