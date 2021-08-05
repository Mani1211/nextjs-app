import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineUserAdd, AiOutlineWhatsApp } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { GiPerson, GiCalendar } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { RiCalendar2Line } from "react-icons/ri";
import { BiDuplicate } from "react-icons/bi";
// import Modals from "./../Tour Categories/Modal";
import moment from "moment";
import parse from "html-react-parser";
import Styles from "../../../styles/BlogInner.module.css";
import { useRouter } from "next/router";

const BlogInner = ({ blogDetails }) => {
  // const router = useRouter();
  console.log(`blogDetails`, blogDetails);

  // const { blogId } = router.query;

  // //   const { blogid, countryName } = useParams();
  // const [blogDetails, setBlogDetails] = useState({});
  const [contentLoaded, setContentLoaded] = useState(false);
  // console.log(`blogId`, blogId);
  //   const [blogs, setBlogs] = useState([]);
  //   const { addToast } = useToasts();
  //   const [tour, setTour] = useState([]);
  //   const [dateModel, setDateModel] = useState(false);
  //   const [destination, setDestination] = useState("");
  //   const [personsModel, setPersonsModel] = useState(false);
  //   const [adult, setAdult] = useState(0);
  //   const [children, setChildren] = useState(0);
  //   const [toggleInfo, setToggleInfo] = useState("Flexible");
  //   const [tourCategories, setTourCategories] = useState("");
  //   const [name, setName] = useState("");
  //   const [number, setNumber] = useState("");
  //   const [departure, setDeparture] = useState("");
  //   const { user } = isAuthenticated();

  //   const [startDate, setStartDate] = useState(new Date().toDateString());
  //   const [modalIsOpen, setIsOpen] = useState(false);
  //   function openModal() {
  //     setIsOpen(true);
  //   }
  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  //   useEffect(() => {
  //     const getTours = async () => {
  //       try {
  //         const tourResponse = await axios.get(
  //           `${API}/tour/countryname/${countryName}`
  //         );
  //         setTour(tourResponse.data);
  //       } catch (err) {
  //         console.log(err, "err");
  //       }
  //     };
  //     getTours();
  //   }, [countryName]);

  //   useEffect(() => {
  //     const getBlogs = async () => {
  //       setContentLoaded(true);
  //       const blogResponse = await axios.get(`${API}/blog?page=2&pageSize=5`);
  //       setBlogs(blogResponse.data);
  //       setContentLoaded(false);
  //     };
  //     getBlogs();
  //   }, []);

  // useEffect(() => {
  //   const getBlogDetails = async () => {
  //     setContentLoaded(true);
  //     try {
  //       const blogResponse = await axios.get(
  //         `https://touron-backend.herokuapp.com/blog/edit/${blogId}`
  //       );
  //       console.log(`blogResponse.data`, blogResponse.data);
  //       setBlogDetails(blogResponse.data);
  //       setContentLoaded(false);
  //     } catch (err) {
  //       console.log(err, "err");
  //     }
  //   };
  //   getBlogDetails();
  // }, []);

  if (!blogDetails) {
    return (
      <div className={Styles.blogloader}>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <>
      <div className={Styles.blogdetailscontainer}>
        {/* <Modals modalIsOpen={modalIsOpen} closeModal={closeModal} /> */}
        <div className={Styles.blog_container}>
          <div className={Styles.bloginnerdetails}>
            <div className={Styles.bloginnercontent}>
              {Object.keys(blogDetails).includes("imageSrc") &&
              blogDetails.imageSrc.length < 10 ? null : (
                <div className={Styles.blog__imagee}>
                  <img src={blogDetails.imageSrc} alt="blog ima" />
                  {!blogDetails.imageCredit ? null : (
                    <div className={Styles.imgCredit}>
                      <h6>Credit:</h6>
                      <h6>{blogDetails.imageCredit}</h6>
                    </div>
                  )}
                </div>
              )}
              <div className={Styles.resblog}>
                <h1>{blogDetails.blogTitle}</h1>
                {Object.keys(blogDetails).length === 0 ? null : (
                  <>
                    {blogDetails.content === null || undefined ? null : (
                      <p>{parse(blogDetails.content)}</p>
                    )}
                  </>
                )}

                <div className={Styles.authordetails}>
                  <div>
                    {blogDetails.writtenBy ? (
                      <h6>By {blogDetails.writtenBy}</h6>
                    ) : (
                      <h6>By tour On team</h6>
                    )}
                    {blogDetails.updatedAt ? (
                      <>
                        {blogDetails.updatedAt === "" ? null : (
                          <h6>
                            <span>Published </span>
                            {moment(
                              blogDetails.updatedAt,
                              "YYYYMMDD"
                            ).fromNow()}
                          </h6>
                        )}
                      </>
                    ) : (
                      <>
                        {blogDetails.createdAt === "" ? null : (
                          <h6>
                            <span>Published </span>
                            {moment(
                              blogDetails.createdAt,
                              "YYYYMMDD"
                            ).fromNow()}
                          </h6>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className={Styles.blogdetails}>
                  {blogDetails.subHeading3 === "" ? null : (
                    <h5>{blogDetails.subHeading1}</h5>
                  )}
                  {Object.keys(blogDetails).includes("imageSrc1") &&
                  blogDetails.imageSrc1.length < 10 ? null : (
                    <div className={Styles.blogimagee}>
                      <img src={blogDetails.imageSrc1} alt="blog ima" />
                      {!blogDetails.imageCredit1 ? null : (
                        <div className={Styles.imgCredit}>
                          <h6>Credit:</h6>
                          <h6>{blogDetails.imageCredit1}</h6>
                        </div>
                      )}
                    </div>
                  )}
                  {Object.keys(blogDetails).length === 0 ? null : (
                    <>
                      {blogDetails.content1 === null || undefined ? null : (
                        <p>{parse(blogDetails.content1)}</p>
                      )}
                    </>
                  )}

                  {blogDetails.subHeading2 === "" ? null : (
                    <h5>{blogDetails.subHeading2}</h5>
                  )}
                  {Object.keys(blogDetails).includes("imageSrc2") &&
                  blogDetails.imageSrc2.length < 10 ? null : (
                    <div className={Styles.blog__imagee}>
                      <img src={blogDetails.imageSrc2} alt="blog ima" />
                      {!blogDetails.imageCredit2 ? null : (
                        <div className={Styles.imgCredit}>
                          <h6>Credit:</h6>
                          <h6>{blogDetails.imageCredit2}</h6>
                        </div>
                      )}
                    </div>
                  )}
                  {Object.keys(blogDetails).length === 0 ? null : (
                    <>
                      {blogDetails.content2 === null || undefined ? null : (
                        <p>{parse(blogDetails.content2)}</p>
                      )}
                    </>
                  )}

                  {blogDetails.subHeading3 === "" ? null : (
                    <h5>{blogDetails.subHeading3}</h5>
                  )}
                  {Object.keys(blogDetails).includes("imageSrc3") &&
                  blogDetails.imageSrc3.length < 10 ? null : (
                    <div className={Styles.blog__imagee}>
                      <img src={blogDetails.imageSrc3} alt="blog ima" />
                      {!blogDetails.imageCredit3 ? null : (
                        <div className={Styles.imgCredit}>
                          <h6>Credit:</h6>
                          <h6>{blogDetails.imageCredit3}</h6>
                        </div>
                      )}
                    </div>
                  )}
                  {Object.keys(blogDetails).length === 0 ? null : (
                    <>
                      {blogDetails.content3 === null || undefined ? null : (
                        <p>{parse(blogDetails.content3)}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>Blog inner</h1>
      </div>
    </>
  );
};

export default BlogInner;

export async function getStaticProps(context) {
  const { params } = context;
  const { blogId } = params;

  const blogResponse = await axios.get(
    `https://touron-backend.herokuapp.com/blog/edit/${blogId}`
  );

  if (Object.keys(blogResponse.data).length < 1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogDetails: blogResponse.data,
    },
  };
}

export async function getStaticPaths() {
  const blogResponse = await axios.get(
    `https://touron-backend.herokuapp.com/blog/search?page=1&pageSize=150`
  );

  const mappedIds = [];

  blogResponse.data.map((b, i) => {
    if (i < 50) {
      mappedIds.push({
        params: {
          blogId: b._id,
        },
      });
    }
  });

  console.log(`mappedIds`, mappedIds);
  return {
    paths: mappedIds,
    fallback: true,
  };
}
{
  /* <div className="recent-blogs">
  <div className="rt">
    <div className="latest_tour-titlee">Recent Blogs</div>
    <div className="latest_tour-list">
      {blogs.map((b, index) => {
        return (
          <Link
            key={index}
            className="plink"
            to={{
              pathname: `/blogdetails/${b.blogTitle}/${b._id}/${b.countryName}`,
            }}
          >
            <div className="latest_tour-item">
              <div>
                <img
                  className="latest_tour-image"
                  src={b.imageSrc}
                  alt=""
                />
              </div>
              <div>
                <div className="latest_title">{b.blogTitle}</div>
                <div className="recentauthor-details">
                  <img src={Logo} alt="blog imag" />
                  <div style={{ color: "black" }}>
                    {b.writtenBy ? (
                      <h6>By {b.writtenBy}</h6>
                    ) : (
                      <h6>By tour On team</h6>
                    )}
                    {b.updatedAt ? (
                      <>
                        {b.updatedAt === "" ? null : (
                          <h6>
                            <span>Published </span>
                            {moment(
                              b.updatedAt,
                              "YYYYMMDD"
                            ).fromNow()}
                          </h6>
                        )}
                      </>
                    ) : (
                      <>
                        {b.createdAt === "" ? null : (
                          <h6>
                            <span>Published </span>
                            {moment(
                              b.createdAt,
                              "YYYYMMDD"
                            ).fromNow()}
                          </h6>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
  <div className="lt">
    <div className="latest_tour-titlee">Latest Tours</div>
    <div className="latest_tour-list">
      {tour.map((t, index) => {
        if (index < 5)
          return (
            <Link
              target="_blank"
              key={index}
              className="plink"
              to={{
                pathname: `/tourdetails/${t.countryName}/${t.cityName}/${t.tourName}/${t._id}`,
              }}
            >
              <div className="latest_tour-item">
                <div>
                  <img
                    className="latest_tour-image"
                    src={t.imageUrl}
                    alt=""
                  />
                </div>
                <div>
                  <div className="latest_title">{t.tourName}</div>
                  <div className="latest_cost">{t.cityName}</div>
                  <div className="latest_days">
                    <span>
                      <i className="far fa-clock"></i>
                    </span>
                    <span className="latest_plan">
                      {t.tourDuration}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
      })}
    </div>
  </div>

  <div className="queryform">
    <div className="countryInner_aboutRightt">
      <Form>
        <div className="countryInner_tit">
          <b className="tit1">Customise your tour </b>
        </div>
        <div className="countryInner_form">
          <div className="countryInner_names">
            <AiOutlineUserAdd className="countryInner_i" />
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => {
                if (isAuthenticated()) {
                  setName(e.target.value);
                } else {
                  return openModal();
                }
              }}
              value={name}
            />
          </div>
          <div className="countryInner_no">
            <AiOutlineWhatsApp className="countryInner_i" />
            <input
              type="number"
              placeholder="Whatsapp no."
              required
              onChange={(e) => {
                if (isAuthenticated()) {
                  setNumber(e.target.value);
                } else {
                  return openModal();
                }
              }}
              value={number}
            />
          </div>
          <div className="countryInner_mail">
            <FiMail className="countryInner_i" />
            <input
              type="text"
              placeholder="Departure City"
              required
              onChange={(e) => {
                if (isAuthenticated()) {
                  setDeparture(e.target.value);
                } else {
                  return openModal();
                }
              }}
              value={departure}
            />
          </div>
          <div className="countryInner_mail">
            <FiMail className="countryInner_i" />
            <input
              type="text"
              placeholder="Destination"
              required
              onChange={(e) => {
                if (isAuthenticated()) {
                  setDestination(e.target.value);
                } else {
                  return openModal();
                }
              }}
              value={destination}
            />
          </div>
          <div className="countryInner_persons">
            <div
              className="countryInner_persons-flex"
              onClick={openPersonsModel}
            >
              <div className="countryInner_ii">
                <GiPerson />
              </div>
              <div className="countryInner_inputp">
                {adult === 0 && children === 0 ? (
                  "No. of travellers"
                ) : (
                  <h6>
                    {adult} adults, {children} childrens
                  </h6>
                )}
              </div>
            </div>
            <div
              className={
                personsModel
                  ? "countryInner_persons-model"
                  : "countryInner_persons-model-none"
              }
            >
              <div className="adult-main-flex">
                <div className="adult">Adults</div>
                <div className="adult-flex">
                  <div
                    className="adult-sub"
                    onClick={() => {
                      if (adult !== 0) setAdult(adult - 1);
                    }}
                  >
                    -
                  </div>
                  <div className="adult-no">{adult}</div>
                  <div
                    className="adult-add"
                    onClick={() => {
                      setAdult(adult + 1);
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="child-main-flex">
                <div className="child">Children</div>
                <div className="child-flex">
                  <div
                    className="child-sub"
                    onClick={() => {
                      if (children !== 0) setChildren(children - 1);
                    }}
                  >
                    -
                  </div>
                  <div className="child-no">{children}</div>
                  <div
                    className="child-add"
                    onClick={() => {
                      setChildren(children + 1);
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="countryInner_date">
            <div
              className="countryInner_date-flex"
              onClick={openDateModel}
            >
              <div className="countryInner_ii">
                <MdDateRange />
              </div>
              <div className="countryInner_inputd">
                {startDate === "" ? (
                  "Dates of travel"
                ) : (
                  <h6>Travel Date:{startDate}</h6>
                )}
              </div>
            </div>
            <div
              className={
                dateModel
                  ? "countryInner_date-model"
                  : "countryInner_date-model-none"
              }
            >
              <div className="countryInner_date-model-type">
                <HiOutlineCalendar />
                <div className="countryInner-d">
                  Travel dates are?
                </div>
              </div>
              <div className="countryInner-date-model-cat">
                <div
                  onClick={() => {
                    setToggleInfo("Flexible");
                  }}
                  className={
                    toggleInfo === "Flexible"
                      ? "date-flexible"
                      : "date-none"
                  }
                >
                  Flexible
                </div>
                <div
                  onClick={() => {
                    setToggleInfo("Fixed");
                  }}
                  className={
                    toggleInfo === "Fixed"
                      ? "date-fixed"
                      : "date-none"
                  }
                >
                  Fixed
                </div>
              </div>
              {toggleInfo === "Flexible" ? (
                <>
                  <div className="countryInner_month">
                    <HiOutlineCalendar />
                    <div className="countryInner-d">
                      Select the month of travel
                    </div>
                  </div>
                  <div className="countryInner_month-cat">
                    {months.map((months, i) => (
                      <div
                        key={i}
                        onClick={() => setStartDate(months)}
                        style={{
                          backgroundColor: startDate.includes(months)
                            ? "red"
                            : "",
                        }}
                        className={
                          "month-cat"
                          // startDate.includes(months)
                          //   ? "month-cat-true"
                          //   : "month-cat"
                        }
                      >
                        {months}
                      </div>
                    ))}
                  </div>
                  <div className="countryInner_week">
                    <RiCalendar2Line />
                    <div className="countryInner-d">
                      Select the week of travel
                    </div>
                  </div>
                  <div className="countryInner_week-cat">
                    {weeks.map((weeks, i) => (
                      <div
                        key={i}
                        className="week-cat"
                        style={{
                          backgroundColor: startDate.includes(weeks)
                            ? "red"
                            : "",
                        }}
                        onClick={() =>
                          setStartDate(`${startDate},${weeks}`)
                        }
                      >
                        {weeks}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="countryInner_calender">
                    <GiCalendar />
                    <div className="countryInner-d">
                      Select the start date of travel
                    </div>
                  </div>
                  <div className="datePicker">
                    <DatePicker
                      onChange={(date) => {
                        const d = date.toDateString();
                        setStartDate(d);
                      }}
                      inline
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="countryInner_category">
            <BiDuplicate className="countryInner_i" />
            <select
              required
              onChange={(e) => {
                setTourCategories(e.target.value);
              }}
            >
              <option value="" disabled selected hidden>
                Tour category
              </option>
              <option value="Planned Tour">Planned Tour</option>
              <option value="Honeymoon Tour">Honeymoon Tour</option>
              <option value="Surprise Tour">Surprise Tour</option>
              <option value="Luxury Tour">Luxury Tour</option>
            </select>
          </div>
        </div>
        <div className="countryInner_btn">
          <button
            className="countryInner_button"
            onClick={(e) => {
              if (isAuthenticated()) {
                submitData(e);
              }
            }}
          >
            PLAN NOW
          </button>
        </div>
      </Form>
    </div>
  </div>
</div> */
}
