import react from "react";
import "./Sidebar.css";

const options = [
  { title: "Welcome", link: "Welcome" },
  { title: "Getting Started", link: "GettingStarted" },
  { title: "Logged In Component", link: "Loggedin" },
  { title: "No Comments Components", link: "NoComments" },
  { title: "Class Implementation", link: "ClassImplementation" },
  { title: "Custom Styling", link: "CustomStyling" },
  { title: "Custom Functions", link: "CustomFunctions" },
  { title: "Props", link: "Props" },
];

const Sidebar = () => {
  return (
    <div className="side-div">
      {options.map((i) => {
        return (
          <a
            style={{ textDecoration: "none", color: "black" }}
            href={`#${i.link}`}
          >
            <li className="side-links">{i.title}</li>
          </a>
        );
      })}
    </div>
  );
};

export default Sidebar;
