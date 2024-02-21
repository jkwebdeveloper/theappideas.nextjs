import React from "react";
import { AiOutlineClose } from "react-icons/ai";


const ApplicationModal = ({ setShowModal }) => {
  return (
    <div
      className="career___modal fade modal show"
      id="business"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              //       aria-label="Close"
              onClick={() => setShowModal(false)}
            >
              {/* <i classNam e="fa fa-times" /> */}
              <AiOutlineClose size={22}  color="black" />
            </button>
          </div>
          <div className="modal-body">
            <div className="Title">
              <h3 className="text-white mb-4">Submit Application Details</h3>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6 mb-3">
                <div className="career_mdl_lft">
                  <h2>Business Development Executive</h2>
                  <div className="career_mdl_lft_content mt-3">
                    <p>
                      <b>
                        5 days a week and we are allowing work from home for a
                        permanent basis.
                      </b>
                    </p>
                    <p>
                      <b>Salary:- </b> No bar for right candidate (Depends on
                      Skills and experience)
                    </p>
                    <p>
                      <b>Education Qualification:-</b> BCA, MCA, MSCIT, BSC IT,
                      BE(IT), ME(IT), Diploma in IT and others
                    </p>
                  </div>
                  <div className="career_mdl_lft_roles">
                    <h2>Roles &amp; Responsibilities</h2>
                    <ul>
                      <li>
                        Contacting potential clients to establish rapport and
                        arrange meetings.
                      </li>
                      <li>Research and identify new market opportunities.</li>
                      <li>
                        Build and maintain relationships with clients and
                        prospects.
                      </li>
                      <li>Research and analyze sales options.</li>
                      <li>
                        Set up meetings with potential clients and listen to
                        their wishes and concerns and work as a team member and
                        individual as well.
                      </li>
                      <li>
                        Planning and overseeing new marketing initiatives.
                      </li>
                      <li>
                        Researching organizations and individuals to find new
                        opportunities.
                      </li>
                      <li>
                        Increasing the value of current customers while
                        attracting new ones.
                      </li>
                      <li>
                        Finding and developing new markets and improving sales.
                      </li>
                      <li>Developing quotes and proposals for clients.</li>
                      <li>
                        Developing goals for the development team and business
                        growth and ensuring they are met.
                      </li>
                      <li>
                        Training personnel and helping team members develop
                        their skills.
                      </li>
                    </ul>
                  </div>
                  <div className="career_mdl_lft_content">
                    <p>
                      If you are interested for the above profile, you may send
                      your CV on mentioned email
                    </p>
                    <p>
                      If you do not find a suitable profile, you may kindly
                      share this information to your friends who are looking for
                      a change/good opportunity.
                    </p>
                  </div>
                  <div className="career_mdl_lft_com_info">
                    <h2 className="compant_text">
                      App Ideas Infotech PVT. LTD.
                    </h2>
                    <p>
                      {" "}
                      <i className="fa fa-map-marker" />{" "}
                      <span>
                        FO-6, Raspan Arcade, Near Rajhans Cinema, <br />{" "}
                        Nikol-Naroda, Ahmedabad-382350.
                      </span>
                    </p>
                  </div>
                  <div className="career_mdl_lft_contact">
                    <ul>
                      <li>
                        <i className="fa fa-phone" />
                        <span>7990138924</span>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o" />
                        <span>trusha@theappideas.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 mb-3">
                <div className="career_mdl_rht">
                  <form action="">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name*"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="mail"
                        className="form-control"
                        placeholder="Email* "
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone Number*"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Total Experience In Years*"
                      />
                    </div>
                    <div className="upload-btn-wrapper mb-3">
                      <button className="Upload_Btn">Upload Resume</button>
                      <input type="file" name="myfile" />
                    </div>
                    <div className="mb-3 text-end">
                      <button className="submit_btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
