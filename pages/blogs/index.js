import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
// import { Facebook } from "react-spinners-css";
import parse from "html-react-parser";
import { AiOutlineSearch } from "react-icons/ai";
import moment from "moment";
import Styles from "../../styles/Blogs.module.css";

const Blog = (props) => {
  //   const [blogs, setBlogs] = useState([]);
  const [country, setCountries] = useState([]);
  const [pageSize, setPageSize] = useState(24);
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { blogs } = props;

  //   const getCountries = async () => {
  //     try {
  //       const countryResponse = await axios.get(`${API}/country`);
  //       setCountries([{ countryName: "India" }, ...countryResponse.data]);
  //     } catch (err) {
  //       console.log(err, "err");
  //     }
  //   };

  //   useEffect(() => {
  //     getCountries();
  //   }, []);

  const search = () => {
    if (searchText === "") return blogs;
    const d = blogs.filter((b) => {
      return (
        b.blogTitle
          ?.trim()
          .toUpperCase()
          .includes(searchText.trim().toUpperCase()) ||
        b.countryName
          ?.trim()
          .toUpperCase()
          .includes(searchText.trim().toUpperCase())
      );
    });

    return d;
  };

  return (
    <div className={Styles.blogcontainer}>
      <div className={Styles.blogheader}>
        <h1>Latest Blogs</h1>
        <p>
          Read about your favourite destinations, and get to know about the
          latest trends in tourism from our Blog.. New articles everyday!
        </p>
      </div>
      <div className={Styles.blogcontainer__filter}>
        <div className={Styles.blogcontainer__filter2}>
          <div className={Styles.sicon}>
            <AiOutlineSearch size={30} />
          </div>
          <input
            type="text"
            placeholder="Search by Title or country Name"
            className={Styles.blogcontainer__filter2input}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {blogLoaded ? (
        <div className={Styles.blogloader}>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div style={{ minHeight: "50vh" }}>
          <div className={Styles.blogs}>
            {search().length === 0 ? (
              <div className={Styles.nof}>
                <h6>No results found</h6>
              </div>
            ) : (
              <>
                {search().map((b, index) => {
                  if (index < pageSize)
                    return (
                      <div className={Styles.blogcontent}>
                        <img src={b.imageSrc} alt="" />
                        <div className={Styles.blogdetails}>
                          {b.updated ? (
                            <>
                              {b.updatedAt === "" ? null : (
                                <h6>
                                  {moment(b.updatedAt, "YYYYMMDD").fromNow()}
                                </h6>
                              )}
                            </>
                          ) : (
                            <>
                              {b.createdAt === "" ? null : (
                                <h6>
                                  {moment(b.createdAt, "YYYYMMDD").fromNow()}
                                </h6>
                              )}
                            </>
                          )}
                          {/* <h6>{getDays(b.createdAt)}</h6> */}
                          <h1>{b.blogTitle}</h1>
                          {Object.keys(b).length === 0 ? null : (
                            <>
                              {b.content === null || undefined ? null : (
                                <p>{parse(b.content.slice(0, 140))}</p>
                              )}
                            </>
                          )}
                          {/* <p>{parse(b.content.slice(0, 140))}...</p> */}
                          {/* <Link
                              key={index}
                              className={Styles.plink}
                              to={{
                                pathname: `/blogdetails/${b.blogTitle}/${b._id}/${b.countryName}`,
                              }}
                            >
                              <button>Read More</button>
                            </Link> */}
                          <Link href={`/blogs/${b._id}`}>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </div>
                    );
                })}
              </>
            )}
          </div>
          {searchText === "" && (
            <div className={Styles.blogbuttons}>
              <button onClick={() => setPageSize(pageSize + 12)}>
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const blogResponse = await axios.get(
    `https://touron-backend.herokuapp.com/blog/search?page=1&pageSize=150`
  );

  return {
    props: {
      blogs: blogResponse.data,
    },
    revalidate: 10,
  };
}

export default Blog;
