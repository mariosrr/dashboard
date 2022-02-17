import "./widgetLg.css"

export default function WidgetLg() {
  const Button = ({type}) => {
    return <button className={"widgetLgButton " +  type}>{type}</button>
  }
  return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
              <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                  <img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  <span className="widgetLgName">WIE-0001</span>
                </td>
                <td className="widgetLgDate">10 Jan 2022</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                  <Button type="Approved" />

                  </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                  <img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  <span className="widgetLgName">WIE-0001</span>
                </td>
                <td className="widgetLgDate">10 Jan 2022</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                  <Button type="Declined" />

                  </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                  <img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  <span className="widgetLgName">WIE-0001</span>
                </td>
                <td className="widgetLgDate">10 Jan 2022</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                  <Button type="Pending" />

                  </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                  <img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  <span className="widgetLgName">WIE-0001</span>
                </td>
                <td className="widgetLgDate">10 Jan 2022</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                  <Button type="Approved" />

                  </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLguser">
                  <img className="widgetLgImg" src="https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?cs=srgb&dl=pexels-alina-kurson-8957086.jpg&fm=jpg" />
                  <span className="widgetLgName">WIE-0001</span>
                </td>
                <td className="widgetLgDate">10 Jan 2022</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                  <Button type="Approved" />

                  </td>
              </tr>
            </table>
        </div>

  ) 
}
