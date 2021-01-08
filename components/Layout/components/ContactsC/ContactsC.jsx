import React,{useState} from 'react'

export default function ContactsC() {
  const [state, setState] = useState({ name: '', email: '', message:"", subject:"" });
    const handleChange = event => {
      const { name, value } = event.target;
      setState({
        ...state,
        [name]: value
      });
    }
    const handlePress = () => {
      if (state.name && state.email){
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({  name: state.name, 
                                  email: state.email, 
                                  message: state.message, 
                                  subject: state.subject
                                })
        }).then((e)=>{
            console.log(e);
            if (e && e.status===200){
              const notvalm = document.getElementById("notvalid-mail");
              if (!notvalm.classList.contains("hidden")) notvalm.classList.add("hidden");
              const successm = document.getElementById("success-mail");
              successm.classList.remove("hidden");
              setTimeout(()=>{
                window.scroll({
                  top: 0, 
                  left: 0, 
                  behavior: 'smooth'
                });
                document.location.href="/contacts";
              }, 4000);
            }
            else{
              document.getElementById("servernot-mail").classList.remove("hidden");
              setTimeout(()=>{
                document.getElementById("servernot-mail").classList.add("hidden");
              }, 4000);
            }
        });
      }
      else{
        document.getElementById("notvalid-mail").classList.remove("hidden");
        setTimeout(()=>{
          document.getElementById("notvalid-mail").classList.add("hidden");
        }, 4000);
      }
    }
    return (
        <>
          <section
                className="page-header bg-cover has-overlay"
                style={{
                  backgroundImage: "url(assets/images/page-header-02.jpg)",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center">
                      <h2 className="section-title text-white font-weight-bold mb-20">
                        Contact Us
                      </h2>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent justify-content-center p-0 font-weight-600 mb-0">
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            <a href="/">Home</a>
                          </li>
                          <li className="breadcrumb-item">Contact Us</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </section>
              {/* end of page-header */}
              {/* start of contact section */}
              <section className="section-padding bg-gray">
                <div className="container">
                  <div className="row justify-content-between">
                    <div className="col-lg-7 order-1 order-lg-0">
                      <div className="mb-5">
                        <h2 className="text-secondary font-weight-bold mb-2">
                          Send a Message
                        </h2>
                        <p>
                          Your email address will not be published. <br />{" "}
                          Required fields are marked.
                        </p>
                      </div>
                      <div >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-30">
                              <label htmlFor="name">Name*</label>
                              <input
                                type="text"
                                className="form-control rounded-sm"
                                id="name"
                                placeholder="Aibek Bekov"
                                name="name"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-30">
                              <label htmlFor="email">Email*</label>
                              <input
                                type="email"
                                className="form-control rounded-sm"
                                id="email"
                                name="email"
                                placeholder="aibek-bekov@ask.kg"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-30">
                              <label htmlFor="sub">Subject</label>
                              <input
                                type="text"
                                className="form-control rounded-sm"
                                id="sub"
                                placeholder="I want to know about ..."
                                name="subject"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-30">
                              <label htmlFor="message">Message</label>
                              <textarea
                                className="form-control rounded-sm"
                                id="message"
                                rows={5}
                                name="message"
                                defaultValue={""}
                                onChange={handleChange}
                              />
                            </div>
                            <h4 id="success-mail" className="mt-4 mb-4 alert alert-primary hidden" role="alert">Thank you for contacting us! We will reply very soon.</h4>
                            <h4 id="notvalid-mail" className="mt-4 mb-4 alert alert-warning hidden" role="alert">Please fill out your Name and Email address!</h4>
                            <h4 id="servernot-mail" className="mt-4 mb-4 alert alert-warning hidden" role="alert">Something went wrong :( Please send direct mail to info@ask.kg or try later. Thank you!</h4>
                          </div>
                          <div className="col-md-12">
                            <button
                              className="btn btn-primary rounded-sm"
                              onClick={handlePress}
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 mb-5 mb-lg-0 order-0 order-lg-1">
                      <div className="mb-5">
                        <h2 className="text-secondary font-weight-bold mb-2">
                          Contact Info
                        </h2>
                        <p>
                          Welcome to our Website. <br /> We are glad to have you
                          around.
                        </p>
                      </div>
                      <div className="shadow-sm p-20 mt-4 rounded-sm bg-white d-block d-sm-flex align-items-center">
                        <i className="fas fa-phone fa-2x text-primary" />
                        <div className="ml-sm-4 mt-3 mt-sm-0">
                          <h4 className="text-secondary font-weight-600 mb-1">
                            Contact Details
                          </h4>
                          <p>
                            Phone:{" "}
                            <a href="tel:+996755989963" className="text-dark">
                              (+996) 755 989 963 
                            </a>
                          </p>
                          <p>
                            Mail:{" "}
                            <a
                              href="mailto:info@ask.kg"
                              className="text-dark"
                            >
                              info@ask.kg
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="shadow-sm p-20 mt-4 rounded-sm bg-white d-block d-sm-flex align-items-center">
                        <i className="fas fa-map-marked-alt fa-2x text-primary" />
                        <div className="ml-sm-4 mt-3 mt-sm-0">
                          <h4 className="text-secondary font-weight-600 mb-1">
                            Location
                          </h4>
                          <p>
                            Kyrgyz Republic, Bishkek, Panfilova 188/2
                          </p>
                        </div>
                      </div>
                      <div className="shadow-sm p-20 mt-4 rounded-sm bg-white d-block d-sm-flex align-items-center">
                        <i className="fas fa-user-clock fa-2x text-primary" />
                        <div className="ml-sm-4 mt-3 mt-sm-0">
                          <h4 className="text-secondary font-weight-600 mb-1">
                            Opening Hours
                          </h4>
                          <p>Monday-Friday</p>
                          <p>10:30a.m-7:00p.m</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* end of contact section */}
              {/* start of our map section */}
              <section className="section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <h2 className="section-title">
                        You are Always <br /> Welcome to{" "}
                        <span className="has-line">Our Place</span>
                      </h2>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <a href="https://go.2gis.com/ifq620" className="map-image" target="_blank">
                        <img src="assets/images/map-img.jpg" alt />
                        <span className="map-text h4">
                          <i className="fas fa-external-link-alt mr-2" /> View
                          us on Map
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>  
        </>
    )
}
