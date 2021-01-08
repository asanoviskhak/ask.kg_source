import React, {useState} from 'react'

export default function Misc() {
  const [state, setState] = useState({ name: '', email: '', phone: '', universityRadio:'', otherRadio:'', langRadio:'' });
    const handleChange = event => {
      const { name, value } = event.target;
      setState({
        ...state,
        [name]: value
      });
    }
    const handlePress = () => {
      if (state.name && state.phone){
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: state.name, email: state.email, phone: state.phone, category: state.universityRadio || state.otherRadio || state.langRadio })
        }).then((e)=>{
          console.log(e);
          if (e && e.status===200){
            const notvalm = document.getElementById("notvalid-email");
            if (!notvalm.classList.contains("hidden")) notvalm.classList.add("hidden");
            const successm = document.getElementById("success-email");
            successm.classList.remove("hidden");
            setTimeout(()=>{
              window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
              });
              document.location.reload();
            }, 4000);
          }
          else{
            document.getElementById("servernot-email").classList.remove("hidden");
            setTimeout(()=>{
              document.getElementById("servernot-email").classList.add("hidden");
            }, 4000);
          }
        });
      }
      else{
        document.getElementById("notvalid-email").classList.remove("hidden");
        setTimeout(()=>{
          document.getElementById("notvalid-email").classList.add("hidden");
        }, 4000);
      }
    }
    return (
        <>

        {/* start of preloader */}
        <div />
              {/* end of preloader */}
              {/* signup-modal */}
              <div
                className="modal fade rounded"
                id="signup-modal"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title text-secondary font-weight-600">
                        Reach us now
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body p-3 p-sm-4">
                      <div className="row">
                        <div className="form-group mb-20 col-12">
                          <label
                            className="text-secondary h6 mb-2"
                            htmlFor="fname"
                          >
                            Your Name*
                          </label>
                          <input
                            className="form-control shadow-none rounded-sm"
                            type="text"
                            placeholder="Aibek Bekov"
                            id="fname"
                            name="name"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group mb-20 col-12">
                          <label
                            className="text-secondary h6 mb-2"
                            htmlFor="pnumber"
                          >
                            Phone Number*
                          </label>
                          <input
                            className="form-control shadow-none rounded-sm"
                            onChange={handleChange}
                            type="text"
                            placeholder="0550123456"
                            id="pnumber"
                            name="phone"
                            required
                          />
                        </div>
                        <div className="form-group mb-20 col-12">
                          <label
                            className="text-secondary h6 mb-2"
                            htmlFor="email2"
                          >
                            Email Address
                          </label>
                          <input
                            className="form-control shadow-none rounded-sm"
                            type="email"
                            placeholder="aibek-bekov@ask.kg"
                            id="email2"
                            name="email"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-20 col-12">
                          <label className="text-secondary h6 mb-2 d-block">
                            Category
                          </label>
                          <div className="d-flex custom-radio-group rounded-sm">
                            <div className="custom-control custom-radio">
                              <input
                                type="checkbox"
                                id="langRadio"
                                name="langRadio"
                                className="custom-control-input"
                                value="Language courses"
                                onChange={handleChange}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="langRadio"
                              >
                                Courses
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input
                                type="checkbox"
                                id="universityRadio"
                                name="universityRadio"
                                value="University"
                                className="custom-control-input"
                                onChange={handleChange}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="universityRadio"
                              >
                                University
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input
                                type="checkbox"
                                id="otherRadio"
                                name="otherRadio"
                                value="Others"
                                onChange={handleChange}
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="otherRadio"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-12">
                          <button
                            className="btn btn-primary w-100 rounded-sm"
                            onClick={handlePress}
                          >
                            Send
                          </button>
                        </div>
                        <div className="form-group col-12 align-items-center text-center">
                            <h4 id="success-email" className="mt-4 mb-4 alert alert-primary hidden" role="alert">Thank you for contacting us! We will reply very soon.</h4>
                            <h4 id="notvalid-email" className="mt-4 mb-4 alert alert-warning hidden" role="alert">Please fill out your Name and Phone number!</h4>
                            <h4 id="servernot-email" className="mt-4 mb-4 alert alert-warning hidden" role="alert">Something went wrong :( Please send direct mail to info@ask.kg or try later. Thank you!</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* signup-modal */}
              {/* signin-modal */}
              {/* <div
                className="modal fade rounded"
                id="signin-modal"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered mx-auto"
                  style={{ maxWidth: 400 }}
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title text-secondary font-weight-600">
                        Welcome back
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body p-3 p-sm-4">
                      <ul
                        className="nav nav-pills nav-justified tab-nav"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link active"
                            id="guardian-tab"
                            data-toggle="tab"
                            href="#guardian"
                            role="tab"
                            aria-controls="guardian"
                            aria-selected="true"
                          >
                            <img
                              src="assets/images/guardian.png"
                              className="mr-2"
                              alt="guard"
                              style={{ height: 45 }}
                            />{" "}
                            Login as
                            <br />
                            Guardian
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="tutor-tab"
                            data-toggle="tab"
                            href="#tutor"
                            role="tab"
                            aria-controls="tutor"
                            aria-selected="false"
                          >
                            <img
                              src="assets/images/tutor.png"
                              className="mr-2"
                              alt="tutor"
                              style={{ height: 45 }}
                            />{" "}
                            Login as
                            <br />
                            Tutor
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="guardian"
                          role="tabpanel"
                          aria-labelledby="guardian-tab"
                        >
                          <form method="POST" className="row">
                            <div className="form-group mb-20 col-12">
                              <label
                                className="text-secondary h6 font-weight-600 mb-2"
                                htmlFor="email"
                              >
                                Email Address*
                              </label>
                              <input
                                className="form-control shadow-none rounded-sm"
                                type="email"
                                id="email"
                                required
                              />
                            </div>
                            <div className="form-group mb-20 col-12">
                              <label
                                className="text-secondary h6 font-weight-600 mb-2"
                                htmlFor="passwordSignIn"
                              >
                                Password*
                              </label>
                              <input
                                className="form-control shadow-none rounded-sm"
                                type="password"
                                id="passwordSignIn"
                                required
                              />
                            </div>
                            <div className="form-group col-12">
                              <button
                                className="btn btn-primary w-100 rounded-sm"
                                type="submit"
                              >
                                Sign In
                              </button>
                            </div>
                          </form>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tutor"
                          role="tabpanel"
                          aria-labelledby="tutor-tab"
                        >
                          <form method="POST" className="row">
                            <div className="form-group mb-20 col-12">
                              <label
                                className="text-secondary h6 font-weight-600 mb-2"
                                htmlFor="email"
                              >
                                Email Address*
                              </label>
                              <input
                                className="form-control shadow-none rounded-sm"
                                type="email"
                                id="email"
                                required
                              />
                            </div>
                            <div className="form-group mb-20 col-12">
                              <label
                                className="text-secondary h6 font-weight-600 mb-2"
                                htmlFor="passwordSignIn"
                              >
                                Password*
                              </label>
                              <input
                                className="form-control shadow-none rounded-sm"
                                type="password"
                                id="passwordSignIn"
                                required
                              />
                            </div>
                            <div className="form-group col-12">
                              <button
                                className="btn btn-primary w-100 rounded-sm"
                                type="submit"
                              >
                                Sign In
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* signin-modal */}
              <a href="#top" className="scroll-to-top">
                <span className="fas fa-chevron-up" />
              </a>
        </>
    )
}
