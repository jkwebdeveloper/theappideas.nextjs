import axios from "axios";
import { React, useEffect, useState } from "react";
import { BiMinusCircle } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";


const FAQ = () => {
  // const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [faqId, setFaqId] = useState(null);

  const handleGetFaqs = () => {
    setLoading(true);
    axios
      .get("https://the-app-ideas.onrender.com/api/faqs", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setFaqs(res.data.faqs);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetFaqs();
  }, []);

  const toggle = (i) => {
    if (faqId === i) {
      return setFaqId(null);
    }
    setFaqId(i);
  };

  return (
    <section className="accordion_section py-5">
      <div className="container">
        <div className="Title">
          <h3>Frequently Asked Questions</h3>
        </div>

        {loading ? (
          <div
            className="loading"
            style={{ textAlign: "center", paddingTop: "50px" }}
          >
            Loading...
          </div>
        ) : faqs.length > 0 ? (
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((item) => (
                <div className="accordion" key={item.question}>
                  <div className="item">
                    <h2
                      className="title"
                      onClick={() => {
                        toggle(item.question);
                      }}
                    >
                      {item.question}
                      <span style={{ margin: "10px" }}>
                        {faqId === item.question ? (
                          <BiMinusCircle size={30} />
                        ) : (
                          <BiPlusCircle size={30} />
                        )}
                      </span>
                    </h2>
                  </div>
                  <div
                    className={
                      faqId === item.question
                        ? "accordion_content show"
                        : "accordion_content"
                    }
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
              {faqs
                .slice(Math.ceil(faqs.length / 2), faqs.length)
                .map((item) => (
                  <div className="accordion" key={item.question}>
                    <div className="item">
                      <h2
                        className="title"
                        onClick={() => {
                          toggle(item.question);
                        }}
                      >
                        {item.question}
                        <span style={{ margin: "10px" }}>
                          {faqId === item.question ? (
                            <BiMinusCircle size={30} />
                          ) : (
                            <BiPlusCircle size={30} />
                          )}
                        </span>
                      </h2>
                    </div>
                    <div
                      className={
                        faqId === item.question
                          ? "accordion_content show"
                          : "accordion_content"
                      }
                    >
                      {item.answer}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="text-center" style={{ textAlign: "center" }}>
            No data
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
