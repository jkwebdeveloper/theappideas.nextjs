import axios from "axios";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiSearch } from "react-icons/bi";
import ReactPaginate from "react-paginate";

import Loading from "../public/assets/images/loading.json";
import Link from 'next/link';
import Image from 'next/image';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import GetAQuoteModal from "../components/GetAQuoteModal";
const Blog = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activefilter, setActiveFilter] = useState("all");
  const [category, SetCategory] = useState([]);
  const [autoSearch, setAutoSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalBlogCount, setTotalBlogCount] = useState(0);
  const [keyForReset, setKeyForReset] = useState(0);
  const [searchResult, setSearchResult] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const blogsPerPage = 9;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGetBlogs = () => {
    setLoading(true);
    let url = `https://the-app-ideas.onrender.com/api/blog?page=${
      currentPage + 1
    }&limit=${blogsPerPage}`;
    if (activefilter !== "all") url = url + `&category=${activefilter}`;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setblogs(res.data.data);
        setTotalBlogCount(res.data.totalBlogCount);
        // console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetBlogs();
  }, [activefilter, currentPage]);

  const handleGetCategory = () => {
    setLoading(true);
    axios
      .get("https://the-app-ideas.onrender.com/api/category", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        SetCategory(res.data.category);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetCategory();
  }, []);

  const handleGetAutoSearch = () => {
    setLoading(true);
    axios
      .get(
        `https://the-app-ideas.onrender.com/api/autocomplete/title?title=${debouncedSearchTerm}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setSearchResult(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetAutoSearch();
  }, [debouncedSearchTerm]);

  const handleChange = (value) => {
    setAutoSearch(value);
    // Debouncing the search term
    const delay = 500; // Adjust the delay as needed
    if (timerId) clearTimeout(timerId);
    if (value.length > 2) {
      timerId = setTimeout(() => {
        setDebouncedSearchTerm(value);
      }, delay);
    } else {
      setSearchResult([]);
    }
  };
  let timerId;

  return (
    <>
      <Helmet title="BLOG - THE APP IDEAS" />
      <Header setOpenModal={setModalOpen}/>
      <section className="blog__section py-5">
        <div className="container">
          <h2 className="blog-title-heading">Our Blogs</h2>
          <form action="">
            <div className="blog__search">
              <input
                type="text"
                placeholder="Search..."
                value={autoSearch}
                onChange={(e) => handleChange(e.target.value)}
              />
              <button>
                <BiSearch style={{ fontSize: "20px" }} />
              </button>
            </div>
          </form>
          {autoSearch?.length > 2 && (
            <div className="suggtion">
              {searchResult.map((item) => {
                return (
                  <div className="suggtion_content" key={item._id}>
                    <Image
                      src={"https://theappideas.com".concat(item.image)}
                      alt=""
                      srcset=""
                      width={116} height={24}
                      className="img-fluid"
                    />
                    <div>
                      <Link
                        href="/blog"
                        state={{ id: item._id }}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <div>{item?.title}</div>
                      </Link>
                      {/* <hr className="line" /> */}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <section className="blog__tabing__section py-5">
        <div className="container">
          <div className="blog__tabing__box">
            <ul
              className="nav nav-pills mb-3 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activefilter === "all" && "active"} `}
                  id="ALL-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#ALL"
                  type="button"
                  role="tab"
                  aria-controls="All"
                  aria-selected="true"
                  onClick={() => {
                    // setFilterData(blogs);
                    setActiveFilter("all");
                    setCurrentPage(0);
                    setKeyForReset((prevKey) => prevKey + 1);
                  }}
                >
                  All
                </button>
              </li>
              {category.map((item) => (
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activefilter === item?._id && "active"
                    }`}
                    id="Application-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#Application"
                    type="button"
                    role="tab"
                    aria-controls="Application"
                    aria-selected="false"
                    onClick={() => {
                      // filterItem("application");
                      setActiveFilter(item?._id);
                      setCurrentPage(0);
                      setKeyForReset((prevKey) => prevKey + 1);
                    }}
                  >
                    {item?.name}
                  </button>
                </li>
              ))}
            </ul>
            {loading ? (
              <div className="loading" style={{ textAlign: "center" }}>
                <Lottie
                  animationData={Loading}
                  loop={true}
                  style={{
                    width: "200px",
                    margin: "0 auto",
                  }}
                />
              </div>
            ) : blogs.length > 0 ? (
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="ALL"
                  role="tabpanel"
                  aria-labelledby="ALL-tab"
                >
                  <div className="row">
                    {blogs.map((blog) => (
                      <div
                        className="col-sm-6 col-md-6 col-lg-4 col-xl-4"
                        key={blog._id}
                      >
                        <Link
                          href={`/blog/slug/${blog.slug}`}
                          state={{ id: blog._id }}
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="blog__box">
                            <div>
                              <div className="blog__box__img">
                                <Image
                                  src={"https://the-app-ideas.onrender.com".concat(
                                    blog.image
                                  )}
                                  alt={blog.imageAlt}
                                  className="img-fluid"
                                  width={348} height={24}
                                />
                              </div>
                              <div className="blog__box__content">
                                <h4>{blog.title}</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>No Data</div>
            )}
          </div>
          <div className="paginate_section" style={{ marginTop: "50px" }}>
            <ReactPaginate
              onPageChange={(selected) => handlePageChange(selected.selected)}
              key={keyForReset}
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={Math.ceil(totalBlogCount / blogsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              containerClassName="pagination justify-content-center"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              activeClassName="active"
              style={{ marginTop: "20px" }}
            />
          </div>
        </div>
      </section>
      <Whatsapp/>
      <GetAQuoteModal
      setOpenModal={setModalOpen}
      openModal={modalOpen}
      handleCloseModal={() => setModalOpen(false)}/>
      <Footer/>
    </>
  );
};

export default Blog;
