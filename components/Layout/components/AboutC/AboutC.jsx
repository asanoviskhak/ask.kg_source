import Instructors from '../Instructors/Instructors'
import Services from '../Services/Services'

export default function AboutC() {
    return (
      <>
        <section
          className="page-header bg-cover has-overlay"
          style={{ backgroundImage: "url(assets/images/page-header-01.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title text-white font-weight-bold mb-20">
                  About Us
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-transparent justify-content-center p-0 font-weight-600 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">About Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* end of page-header */}
        {/* start of section */}

        <div>
          <section className="section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                  <img
                    className="img-fluid rounded pr-lg-3"
                    src="assets/images/tms.png"
                    alt
                  />
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0">
                  <h2 className="section-title mb-30">
                    About Us <br />
                    & Our Mission <br />
                    Statement
                  </h2>
                  <p className="mb-4">
                  Ask Consulting provides advisory services and facilitates admission to foreign 
                  educational institutions. In our work, we strive not only to send students to 
                  the desired university, but also help to orient ourselves, to know exactly the 
                  professions in demand after 5-10 years and to direct students based on an individual 
                  analysis of their abilities and talents to a successful professional future.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-star mr-2 text-primary" />
                      Our mission is to prepare educated, entrepreneurial and competitive members of society, contributing to the realization of their dreams.
                    </li>
                  </ul>
                  <div className="media has-outline-primary align-items-center mt-35">
                    <img
                      className="rounded-circle"
                      src="assets/images/team/askat-team.jpg"
                      style={{height:100}}
                      alt="Askat Kubanychbekov, CEO"
                    />
                    <div className="ml-3">
                      <h5 className="text-blue font-weight-600 mb-1">
                        Askat Kubanychbekov
                      </h5>
                      <p>CEO at Ask</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end of Tutor Management system section */}
          {/* start of counter */}
          <section className="overflow-hidden">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="pt-60 pb-30 counter-section text-white text-center">
                    <div className="row">
                      <div className="col-lg-3 col-md-4 col-sm-6 mb-30">
                        <h2 className="h1 font-weight-600 mb-2 text-primary jsCounter">
                          250
                        </h2>
                        <p className="h5 font-weight-600">Consulted</p>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 mb-30">
                        <h2 className="h1 font-weight-600 mb-2 text-primary jsCounter">
                          60
                        </h2>
                        <p className="h5 font-weight-600">In Process</p>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 mb-30">
                        <h2 className="h1 font-weight-600 mb-2 text-primary jsCounter">
                          80
                        </h2>
                        <p className="h5 font-weight-600">Succeeded</p>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 mb-30">
                        <h2 className="h1 font-weight-600 mb-2 text-primary jsCounter">
                          100
                        </h2>
                        <p className="h5 font-weight-600">In Language School</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Services/>

        {/* start of section */}
        <section className="bg-gray overflow-hidden">
          <div className="container">
            <div className="no-gutters d-block d-lg-flex align-items-center justify-content-end">
              <div className="col-lg-10 col-12 mb-5 mb-lg-0 text-center">
                <img
                  className="img-fluid"
                  src="assets/images/admission-open.jpg"
                  alt="aboutP"
                />
              </div>
              <div className="col-lg-6">
                <div className="pl-lg-5 pb-5 mb-5 mb-lg-0 pb-lg-0">
                  <h2 className="section-title mb-30">
                    Admissions Open <br /> For 2021-2022
                  </h2>
                  <p className="mb-4">
                    We will keep you updated about our programs by email or in office. Here the information will appear soon. 
                  </p>
                  {/* <p>
                    Terminated principles sentiments of no pianoforte if
                    projection impossible. Horses pulled nature favour number
                    yet highly his has old. Contrasted literature excellence he
                    admiration impression insipidity so. Scale ought who terms
                    after own quick since. Servants margaret husbands to
                    screened in throwing.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Instructors/>
        </>
    );
}
