import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { sellCount, buyCount } from "../../../../Services/dashboardServices";
export default function OrdersGraph() {
  const [text, setText] = useState("Month");
  const [maxNum, setMaxNum] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sellCount("Month"));
    dispatch(buyCount("Month"));
  }, []);
  const handleClick = (e, obj) => {
    e.preventDefault();
    dispatch(sellCount(obj.name));
    dispatch(buyCount(obj.name));
  };

  const sellData = useSelector((state) => state?.dashboard?.sellCount?.data);
  const buyData = useSelector((state) => state?.dashboard?.buyCount?.data);
  for (var i = 0; i < sellData?.length; i++) {
    if (parseInt(sellData[i].sell_count) > maxNum) {
      setMaxNum(parseInt(sellData[i].sell_count));
    }
  }
  function formatXAxis(tickItem) {
    // If using moment.js
    if (text === "Year") {
      return moment(tickItem).format("DD/MM/YY");
    } else if (text === "Month" || text === "Week") {
      return moment(tickItem).format("D/MM");
    } else {
      return moment(tickItem).format("HH:mm");
    }
  }
  return (
    <div className="card card-block">
      <ul class="nav nav-tabs flex mt-2 ml-4">
        <li class="nav-item mr-1">
          <button
            onClick={(e) =>
              handleClick(e, {
                name: "Year",
              })
            }
            className={`btn btn-primary ${
              text === "Year" ? "default-filter-select" : ""
            }`}
          >
            Year
          </button>
        </li>
        <li class="nav-item mr-1">
          <button
            onClick={(e) =>
              handleClick(e, {
                name: "Month",
              })
            }
            className={`btn btn-primary ${
              text === "Month" ? "default-filter-select" : ""
            }`}
          >
            Month
          </button>
        </li>
        <li class="nav-item mr-1">
          <button
            onClick={(e) =>
              handleClick(e, {
                name: "Week",
              })
            }
            className={`btn btn-primary ${
              text === "Week" ? "default-filter-select" : ""
            }`}
          >
            Week
          </button>
        </li>
        <li class="nav-item mr-1">
          <button
            onClick={(e) =>
              handleClick(e, {
                name: "Day",
              })
            }
            className={`btn btn-primary ${
              text === "Day" ? "default-filter-select" : ""
            }`}
          >
            Day
          </button>
        </li>
      </ul>
      <ResponsiveContainer
        minWidth={315}
        width={"100%"}
        minHeight={300}
        height={"100%"}
      >
        <LineChart data={sellData}>
          <XAxis dataKey="exchange_day" tickFormatter={formatXAxis} />
          <YAxis type="number" domain={[0, maxNum]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sell_count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
