import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {


    return (


        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey={dataKey} stroke="#5550BD" />
                    <Line type="monotone" dataKey="uv" stroke="#5550BD" />
                    <Line type="monotone" dataKey="pv" stroke="#bd6b00" />
                    <Line type="monotone" dataKey="amt" stroke="green" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> }
                </LineChart>
            </ResponsiveContainer>
        </div>
    )

}