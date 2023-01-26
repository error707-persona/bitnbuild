import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import DoughnutChart from "../components/charts/DoughnutChart";
import LineChart from "../components/charts/LineChart";
import PolarAreaChart from "../components/charts/PolarAreaChart";
import RadarChart from "../components/charts/RadarChart";
import BarChart from "../components/charts/BarChart";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <br />
      <Header />
      <div className="container">
        <div className="grid-item">
          <div className="grid-item__number">3432</div>
          <div className="grid-item__title">New Orders</div>
        </div>

        <div className="grid-item">
          <div className="grid-item__number">$ 34522</div>
          <div className="grid-item__title">Sales</div>
        </div>

        <div className="grid-item">
          <div className="grid-item__number">1942</div>
          <div className="grid-item__title">Total Order</div>
        </div>

        <div className="grid-item">
          <div className="grid-item__number">2453</div>
          <div className="grid-item__title">Unit Solds</div>
        </div>

        <div className="grid-item">
          <div className="grid-item__number">343</div>
          <div className="grid-item__title">Low Stocks</div>
        </div>
      </div>

      <div className="main-container">
        <div className="main-container__title">Stocks Available</div>
       
       {/* <LineChart/> */}
       {/* <BarChart/> */}
       
      </div>

      <div className="bottom-container">
        <div className="bottom-container__item">
          <DoughnutChart/>
        </div>
        <div className="bottom-container__item">
          <LineChart/>
        </div>
        <div className="bottom-container__item">
          <PolarAreaChart/>
        </div>
      </div>
      <div className="recent-logs">
        <div className="recent-logs__item">
          <span className="recent-logs__title"></span>
          <RadarChart/>
        </div>
        <div className="recent-logs__item">
          <br />
          <span className="recent-logs__title">Recent logs</span>
          <div className="outer-wrapper">
          <div className="table-wrapper">
          <table className="recent-logs__table">
            <thead>
              <th>Sr no.</th>
              <th>Activity</th>
              <th>Date</th>
              <th>time</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Added mushrooms</td>
                <td>12-09-20</td>
                <td>20:10</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Discarded expired mushrooms</td>
                <td>12-09-20</td>
                <td>20:10</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Added new type of mushrooms</td>
                <td>12-09-20</td>
                <td>20:10</td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
