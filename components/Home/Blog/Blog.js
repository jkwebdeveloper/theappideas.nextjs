import React, { useEffect, useRef, useState } from "react";
import "./blog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetBlogs = () => {
    setLoading(true);
    axios
      .get("https://the-app-ideas.onrender.com/api/blog", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const blogs = res.data.data ? res.data.data.slice(0, 5) : [];
        setBlogs(blogs);
        // console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetBlogs();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="blog-section" style={{ paddingBottom: "50px" }}>
      <div className="container ">
        <div className="blog-heading">
          <h2>Our Latest Blogs</h2>
        </div>
        {loading ? (
          <div
            className="loading"
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            Loading...
          </div>
        ) : blogs.length > 0 ? (
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            direction={"horizontal"}
            pagination={{ clickable: true }}
            // navigation
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            style={{ padding: "2.5rem 0px 4.2rem" }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog._id}>
                <div className="card">
                  <div className="image-box">
                    <Image
                      src={"https://the-app-ideas.onrender.com".concat(
                        blog.image
                      )}
                      width={356}
                      height={200}
                      alt={blog.imageAlt}
                    />
                  </div>
                  <div className="profile-details">
                    <div className="name-job">
                      <h4 className="name">{blog.title}</h4>
                      <br />
                      {/* <h4>{blog.creator.name}</h4> */}
                      <br />
                      <h4 className="job">{blog.description}</h4>
                      {/* <div dangerouslySetInnerHTML={{__html:blog.content}} className="job"//> */}

                      <Link
                        href={`/blog/slug/${blog.slug}`}
                        state={{ id: blog._id }}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <button className="read-btn">READ MORE</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>no data</div>
        )}
      </div>
    </div>
  );
};

export default Blog;
