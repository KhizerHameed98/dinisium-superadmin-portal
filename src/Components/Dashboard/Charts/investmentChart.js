import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import { getOrdersCount } from "../../../Services/dashboardServices";
import { useDispatch, useSelector } from "react-redux";

const InvestmentChart = () => {
  const [text, setText] = useState("Month");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersCount("Month"));
  }, []);
  const handleClick = (e, obj) => {
    e.preventDefault();
    dispatch(getOrdersCount(obj.name));
  };
  const chartData = useSelector((state) => state?.dashboard?.ordersCount?.data);
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
    <div className="card">
      <div className="card-header">
        <h3>INVESTMENT</h3>
      </div>
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
      <div className="card-block">
        <ResponsiveContainer
          minWidth={315}
          width={"100%"}
          minHeight={300}
          height={"100%"}
        >
          <LineChart data={chartData}>
            <XAxis dataKey="registered_at" tickFormatter={formatXAxis} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="total_investment"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InvestmentChart;
