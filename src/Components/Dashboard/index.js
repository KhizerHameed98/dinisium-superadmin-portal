import React from "react";
import ShortReport from "./shortReport";
import UserChart from "./Charts/userChart";
import InvestmentChart from "./Charts/investmentChart";
import ExchangeChart from "./Charts/ExchangeCharts/exchangeChart";
// import ITOSeriesChart from "./Charts/itoSeriesChart";
// import TokenChart from "./Charts/tokenChart";

const Dashboard = () => {
  return (
    <div className="col-12 col-md-10 offset-md-1">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          {/* shortReport compo */}
          <ShortReport />
        </div>
        <div className="col-12 col-md-6">
          <UserChart />
        </div>
        <div className="col-12 col-md-6">
          <InvestmentChart />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-12">
          <ExchangeChart />
        </div>
        {/* <div className="col-12 col-md-6">
          <ITOSeriesChart />
        </div> */}
        {/* <div className="col-12 col-md-6">
          <TokenChart />
        </div> */}
      </div>

      {/* <div className="row mt-5">
        <div className="col-12 col-md-12">
          <TokenChart />
        </div>
      </div> */}
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default Dashboard;
