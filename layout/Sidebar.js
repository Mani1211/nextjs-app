import { useState } from "react";
import Link from "next/link";
import Styles from "../styles/Profilepage.module.css";
import { GiCompactDisc } from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";

const AdminSidebarData = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <AiIcons.AiFillDashboard />,
  },
  {
    title: "Story",
    path: "/admin/story",
    icon: <AiIcons.AiFillDashboard />,
  },

  {
    title: "Customers",
    path: "/admin/customers",
    icon: <AiIcons.AiFillDashboard />,
  },
  {
    title: "City",
    path: "/admin/city",
    icon: <SiIcons.SiGoogletagmanager />,
  },
  {
    title: "Domestic Cities",
    path: "/admin/domesticcity",
    icon: <SiIcons.SiGoogletagmanager />,
  },
  {
    title: "Country",
    path: "/admin/country",
    icon: <VscIcons.VscPackage />,
  },
  {
    title: "Tours",
    path: "/admin/tours",
    icon: <VscIcons.VscPackage />,
  },
  {
    title: "State",
    path: "/admin/state",
    icon: <VscIcons.VscPackage />,
  },
  {
    title: "Blogs",
    path: "/admin/blogpage",
    icon: <FaIcons.FaBlogger />,
  },
  {
    title: "Testimonials",
    path: "/admin/testimonials",
    icon: <AiIcons.AiOutlineTag />,
  },
  {
    title: "Users",
    path: "/admin/adminusers",
    icon: <AiIcons.AiOutlineTag />,
  },
  {
    title: "Promotion",
    path: "/admin/promotion",
    icon: <AiIcons.AiOutlineTag />,
  },
  {
    title: "Gaia Suggestions",
    path: "/admin/gaia-suggestions",
    icon: <AiIcons.AiOutlineTag />,
  },
];

const Sidebar = ({ children }) => {
  const [clicked, setClicked] = useState("");

  return (
    <div className={Styles.maincontainer}>
      <div
        className={Styles.sidebarmenu}
        style={{
          width: "20%",
          color: "#fff",
          overflow: "scroll",
          height: "100vh",
          maxHeight: "100vh",
        }}
      >
        <div className={Styles.comname}>
          <div className={Styles.admindetails}>
            {/* <img src={userInfo.photoURL} alt="profile pic" /> */}
            <div>
              {/* <h5 style={{ color: "#000" }}>{userInfo.name} , Admin</h5> */}
            </div>
          </div>
        </div>

        <ul
          className={Styles.sidebarmenuitems}
          style={{
            borderBottom: "1px solid #9e9e9e",
            margin: " 0 10px 10px",
          }}
        >
          <li
            onClick={() => setClicked("/")}
            className={`${
              "/" === clicked ? Styles.sidebartext : Styles.sidebartex
            }`}
          >
            {/* <Link href="/" target="_blank">
              <GiCompactDisc color="#9e9e9e" />
              <span className={Styles.sidebartex} style={{ color: "#000" }}>
                Access to website
              </span>
            </Link> */}
          </li>
        </ul>

        <ul className={Styles.sidebarmenuitems}>
          {AdminSidebarData.map((item, index) => {
            return (
              <li
                key={index}
                // onClick={() => setClicked(item.path)}
                className={`${
                  item.path === clicked ? Styles.sidebartex : Styles.sidebartex
                }`}
              >
                <Link href={item.path}>
                  <a>
                    {item.icon}
                    <span
                      className={Styles.sidebartitle}
                      style={{ color: "#000" }}
                    >
                      {item.title}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div style={{ width: "100%", maxHeight: "80vh" }}>{children}</div>
    </div>
  );
};

export default Sidebar;
