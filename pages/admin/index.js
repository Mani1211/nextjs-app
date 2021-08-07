import { useState, useEffect } from "react";
// import "./Admin.css";
import Styles from "../../styles/Dashboard.module.css";
// import { firedb } from "./../firebase";
import { GoGitPullRequest } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCity, FaGlobeAmericas, FaHiking } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import Sidebar from "./../../layout/Sidebar";
const Admin = () => {
  const [request, SetRequest] = useState([]);
  const [selfPlans, setSelfPlans] = useState([]);
  const [customer, SetCustomer] = useState([]);
  const [country, setCountries] = useState();
  const [city, setCities] = useState();
  const [tours, setTour] = useState();

  const admins = [
    {
      firstName: "Vikash",
      lastName: "Manoharan",
      email: "vikashmanoharan@touron.in",
      group: "admin",
      status: "acitve",
    },
    {
      firstName: "Vicky",
      lastName: "Shanmugam",
      email: "manivasagam.shanmugam@touron.in",
      group: "members",
      status: "acitve",
    },
    {
      firstName: "Dinesh",
      lastName: "Kumar",
      email: "dineshkumar.devadasan@touron.in",
      group: "members",
      status: "acitve",
    },
    {
      firstName: "Ganesh",
      lastName: "Ganesh",
      email: "ganesh.ashok@touron.in",
      group: "members",
      status: "acitve",
    },
    {
      firstName: "Kirthika",
      lastName: "Jayagopi",
      email: "krithika.jayagopi@touron.in",
      group: "members",
      status: "acitve",
    },
    {
      firstName: "Samyuktha",
      lastName: "V",
      email: "samyuktha.v@touron.in",
      group: "members",
      status: "acitve",
    },
  ];
  const admin = admins.length;

  const Plannedtour = request?.filter((p) => {
    return p?.tourCategory === "Planned Tour";
  });
  const Surprisetour = request?.filter((s) => {
    return s?.tourCategory === "Surprise Tour";
  });
  const Luxurytour = request?.filter((l) => {
    return l?.tourCategory === "Luxury Tour";
  });
  const Honeymoontour = request?.filter((h) => {
    return h?.tourCategory === "Honeymoon Trip";
  });
  const Roadtrip = request?.filter((r) => {
    return r?.tourCategory === "Road Trip";
  });
  const Wildlifetour = request?.filter((r) => {
    return r?.tourCategory === "Wildlife";
  });

  const state = {
    labels: [
      "Planned tour",
      "Surprise tour",
      "Luxuy tour",
      "Honeymoon tour",
      "Road trip",
      "Wildlife tour",
      "SelfPlan tour",
    ],
    datasets: [
      {
        backgroundColor: [
          "#383CC1",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
          "#B9345A",
          "#758283",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
          "#6A1B4D",
          "#242B2E",
        ],
        data: [
          10, 2, 5, 7, 9, 4, 5,
          // Plannedtour.length,
          // Surprisetour.length,
          // Luxurytour.length,
          // Honeymoontour.length,
          // Roadtrip.length,
          // Wildlifetour.length,
          // selfPlans.length,
        ],
      },
    ],
  };

  // const getAllRequest = () => {
  //   firedb.ref("requests").on("value", (data) => {
  //     if (data.val() !== null) {
  //       let req = [];
  //       data.forEach((r) => {
  //         req.push(r.val());
  //       });
  //       SetRequest(req);
  //     }
  //   });
  // };
  // const getSelfPlans = () => {
  //   firedb.ref("self-planned-tours").on("value", (data) => {
  //     if (data.val() !== null) {
  //       let req = [];
  //       data.forEach((r) => {
  //         req.push(r.val());
  //       });
  //       setSelfPlans(req);
  //     }
  //   });
  // };
  // const getAllCustomer = () => {
  //   firedb.ref("userGeneralInfo").on("value", (data) => {
  //     if (data.val() !== null) {
  //       let custm = [];
  //       data.forEach((c) => {
  //         custm.push(c.val());
  //       });
  //       SetCustomer(custm);
  //     }
  //   });
  // };

  const getCountries = async () => {
    try {
      const countryResponse = await axios.get(
        `https://touron-backend.herokuapp.com/country`
      );
      setCountries(countryResponse.data.length);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const getCities = async () => {
    try {
      const cityResponse = await axios.get(
        `https://touron-backend.herokuapp.com/city`
      );
      setCities(cityResponse.data.length);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const getTours = async () => {
    try {
      const tourResponse = await axios.get(
        `$https://touron-backend.herokuapp.com/tour`
      );
      setTour(tourResponse.data.length);
    } catch (err) {
      console.log(err, "err");
    }
  };

  // useEffect(() => {
  //   getAllRequest();
  // }, []);
  // useEffect(() => {
  //   getSelfPlans();
  // }, []);
  // useEffect(() => {
  //   getAllCustomer();
  // }, []);
  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
    getCities();
  }, []);
  useEffect(() => {
    getTours();
  }, []);

  return (
    <Sidebar>
      <div className={Styles.dashboard}>
        <h2>Dashboard</h2>
        <div className={Styles.dashboardcont}>
          <div className={Styles.dbreq}>
            <div className={Styles.reqq}>
              <GoGitPullRequest className={Styles.reqicon} />
            </div>
            <div className={Styles.dbreqcont}>
              <h6>REQUESTS</h6>
              <h6>{request.length}</h6>
            </div>
          </div>
          <div className={Styles.dbcustomers}>
            <div className={Styles.custm}>
              <RiCustomerService2Fill className={Styles.custicon} />
            </div>
            <div className={Styles.dbcustomerscont}>
              <h6>CUSTOMERS</h6>
              <h6>{customer.length}</h6>
            </div>
          </div>
          <div className={Styles.dbadmin}>
            <div className={Styles.adm}>
              <BsFillPeopleFill className={Styles.admicon} />
            </div>
            <div className={Styles.dbadmcont}>
              <h6>ADMINISTRATIVE</h6>
              <h6>{admin}</h6>
            </div>
          </div>
        </div>
        <div className={Styles.flexad}>
          <div className={Styles.chart}>
            <Doughnut
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Tours",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "left",
                },
              }}
            />
          </div>
          <div className={Styles.cct}>
            <div className={Styles.countryreq}>
              <div className={Styles.creqq}>
                <FaGlobeAmericas className={Styles.creqicon} />
              </div>
              <div className={Styles.creqcont}>
                <h6>COUNTRIES</h6>
                <h6>{country}</h6>
              </div>
            </div>
            <div className={Styles.cityreq}>
              <div className={Styles.cireqq}>
                <FaCity className={Styles.cireqicon} />
              </div>
              <div className={Styles.cireqcont}>
                <h6>CITIES</h6>
                <h6>{city}</h6>
              </div>
            </div>
            <div className={Styles.tourreq}>
              <div className={Styles.treqq}>
                <FaHiking className={Styles.treqicon} />
              </div>
              <div className={Styles.treqcont}>
                <h6>TOURS</h6>
                <h6>{tours}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Admin;
