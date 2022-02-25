import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import moment from "moment";
import { getUserCount } from "../../../Services/dashboardServices";
import { useDispatch, useSelector } from "react-redux";

const UserChart = () => {
  const [text, setText] = useState("Month");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCount("Month"));
  }, []);
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
  const handleClick = (e, obj) => {
    e.preventDefault();
    setText(obj.name);
    dispatch(getUserCount(obj.name));
  };
  const chartData = useSelector((state) => state?.dashboard?.userCount?.data);
  return (
    <div className="card">
      <div className="card-header">
        <h3>USERS</h3>
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
      <div className="card-block mt-3">
        <ResponsiveContainer
          minWidth={315}
          width={"100%"}
          minHeight={300}
          height={"100%"}
        >
          <BarChart data={chartData}>
            <Bar barSize={40} dataKey="count" fill="#006dc2" />
            <XAxis dataKey="registered_at" tickFormatter={formatXAxis} />
            <YAxis />
            <Tooltip cursor={false} />
            <Legend />
            <Tooltip cursor={{ fill: "none" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default UserChart;
