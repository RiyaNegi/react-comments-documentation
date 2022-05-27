import React from "react";
import Navbar from "./Navbar";
import "./Homepage.css";
import Sidebar from "./Sidebar";
import GettingStarted from "./Content/GettingStarted";
import Welcome from "./Content/Welcome";
import Loggedin from "./Content/Loggedin";
import NoComments from "./Content/NoComments";
import ClassImplementation from "./Content/ClassImplementation";
import CustomStyling from "./Content/CustomStyling";
import CustomFunctions from "./Content/CustomFunctions";
import Props from "./Content/Props";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-grid">
        <Sidebar />
        <div className="content">
          <div className="content-div" id="Welcome">
            {" "}
            <Welcome />
          </div>
          <div className="content-div" id="GettingStarted">
            {" "}
            <GettingStarted />
          </div>
          <div className="content-div" id="Loggedin">
            {" "}
            <Loggedin />
          </div>
          <div className="content-div" id="NoComments">
            {" "}
            <NoComments />
          </div>
          <div className="content-div" id="ClassImplementation">
            {" "}
            <ClassImplementation />
          </div>
          <div className="content-div" id="CustomStyling">
            {" "}
            <CustomStyling />
          </div>
          <div className="content-div" id="CustomFunctions">
            {" "}
            <CustomFunctions />
          </div>
          <div className="content-div" id="Props">
            {" "}
            <Props />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
