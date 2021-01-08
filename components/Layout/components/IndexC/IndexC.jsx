import Services from '../Services/Services'
import Instructors from '../Instructors/Instructors'
import Testimonials from '../Testimonials/Testimonials'

export default function IndexC() {
    return (
      <>
        <div>
          {/* start of banner */}
          <section
            className="banner-3 has-overlay bg-cover"
            style={{
              backgroundImage: "url(assets/images/banner-image-02.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="text-center text-white">
                    <h2 className="text-lg mb-20">
                      WE ADVISE ON <br /> STUDIES ABROAD
                    </h2>
                    <p className="h4">
                      Do you want to study abroad, but do not know what you need
                      to do? Do not worry, we will help you with finding a
                      suitable university, preparing documents and obtaining a
                      visa. Sign up for our free consultation ASAP.
                    </p>
                    <div className="ml-0 ml-xl-4 mt-3 mt-xl-4 mb-3 mb-xl-0 text-center text-xl-center">
                      <a
                        href="#!"
                        className="btn btn-sm btn-primary rounded-pill"
                        data-toggle="modal"
                        data-target="#signup-modal"
                      >
                        Get consultation!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end of banner */}
          <section className="section-padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="section-title">
                    How <span className="has-line">It Works?</span>
                  </h2>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="how-it-works-item text-center shadow">
                    <img src="assets/images/how-it-works/01.png" alt="image" />
                    <h3 className="mt-20 font-weight-600 text-secondary">
                      Find Out Which University <br /> You Want To Apply
                    </h3>
                    <p className="mt-20">
                      Create an appointment with a college advisor to get the
                      perfect acceptance plan to study abroad.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="how-it-works-item text-center shadow">
                    <img src="assets/images/how-it-works/02.png" alt="image" />
                    <h3 className="mt-20 font-weight-600 text-secondary">
                      Prepare All Needed <br /> Documents & Papers
                    </h3>
                    <p className="mt-20">
                      Get assisted by a professional who can lead you through
                      the entire process in writing application for Visa or
                      other documents.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mt-40">
                  <div className="how-it-works-item text-center shadow">
                    <img src="assets/images/how-it-works/03.png" alt="image" />
                    <h3 className="mt-20 font-weight-600 text-secondary">
                      Achieve Your Dreams & <br /> Study Abroad
                    </h3>
                    <p className="mt-20">
                      Plan your trip, pursue your dreams abroad, and get help
                      before you graduate!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Services/>

          {/* start of course-carousel */}
          <section className="section-padding pb-fix">
            <div className="container">
              <div className="row align-items-center mb-30">
                <div className="col-lg-9 text-center text-lg-left">
                  <h2 className="section-title mb-0">
                    Our <span className="has-line"> Programs</span>
                  </h2>
                </div>
                <div className="col-lg-3 mt-4 mt-lg-0 text-center text-lg-right">
                  <div className="nav-arrows">
                    <span className="fas fa-chevron-left course-left" />
                    <span className="fas fa-chevron-right course-right" />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center ">
                <div className="col-md-12 align-items-center">
                  <div className="owl-carousel course-carousel">
                    <a
                      className="h5 font-weight-600 text-blue text-center d-block mt-30 custom-hover"
                      href="#!"
                    >
                      <img
                        className="img-fluid mb-15"
                        src="assets/images/programs/language.png"
                        alt="image"
                      />
                      <span>Language courses</span>
                    </a>
                    <a
                      className="h5 font-weight-600 text-blue text-center d-block mt-30 custom-hover"
                      href="#!"
                    >
                      <img
                        className="img-fluid mb-15"
                        src="assets/images/programs/bachelors.png"
                        alt="image"
                      />
                      <span>Bachelor's/Master's</span>
                    </a>
                    <a
                      className="h5 font-weight-600 text-blue text-center d-block mt-30 custom-hover"
                      href="#!"
                    >
                      <img
                        className="img-fluid mb-15"
                        src="assets/images/programs/conferences.png"
                        alt="image"
                      />
                      <span>Conferences</span>
                    </a>
                    <a
                      className="h5 font-weight-600 text-blue text-center d-block mt-30 custom-hover"
                      href="#!"
                    >
                      <img
                        className="img-fluid mb-15"
                        src="assets/images/programs/olympiad.png"
                        alt="image"
                      />
                      <span>Olympiads</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end of course-carousel */}

          {/* start of video-section */}
          <section
            className="video-popup-section has-overlay bg-cover section-padding pb-0 mb-80"
            style={{ backgroundImage: "url(assets/images/video-bg.jpg)" }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="text-center text-white">
                    <h2 className="h1 font-weight-bold">
                      Talking with our graduates
                    </h2>
                    <a
                      href="assets/images/video/vid.mp4"
                      className="d-block has-overlay has-video-popup"
                    >
                      <img
                        className="img-fluid rounded"
                        src="assets/images/video/banner.png"
                        alt="image"
                      />
                      <img
                        className="play-btn"
                        src="assets/images/video-btn.png"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end of video-section */}
          {/* start of section */}
          <section className="section-padding">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4">
                  <h2 className="section-title mb-4">
                    Visit Our Office{" "}
                    <span className="has-line"> In Images</span>
                  </h2>
                  <p>
                    We have a cozy office located just in heart of city. We are
                    always glad to see you here!
                  </p>
                  <div className="nav-arrows mt-4 mt-lg-5">
                    <span className="fas fa-chevron-left gallery-left active" />
                    <span className="fas fa-chevron-right gallery-right" />
                  </div>
                </div>
                <div className="col-lg-7 mt-4 mt-lg-0">
                  <div className="owl-carousel image-gallery">
                    <img
                      className="img-fluid rounded"
                      src="assets/images/office/office1.jpg"
                      alt="image"
                    />
                    <img
                      className="img-fluid rounded"
                      src="assets/images/office/office2.jpg"
                      alt="image"
                    />
                    <img
                      className="img-fluid rounded"
                      src="assets/images/office/office3.jpg"
                      alt="image"
                    />
                    <img
                      className="img-fluid rounded"
                      src="assets/images/office/office4.jpg"
                      alt="image"
                    />
                    <img
                      className="img-fluid rounded"
                      src="assets/images/office/office5.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
            {/* <Testimonials/> */}
            <Instructors/>

        </div>
      </>
    );
}
