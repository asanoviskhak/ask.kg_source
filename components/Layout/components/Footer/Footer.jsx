import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="footer-newsletter-overlap bg-blue">
      <div className="container">
        <div className="pt-80 pb-80 text-white">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-5 col-sm-8">
              <h3 className="font-weight-bold mb-30">Latest Courses</h3>
              <div className="row">
                <div className="col-xl-5 col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#!" className="text-muted">
                        <i className="fas fa-chevron-right small mr-2"/> TOEFL
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#!" className="text-muted">
                        <i className="fas fa-chevron-right small mr-2" /> IELTS
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#!" className="text-muted">
                        <i className="fas fa-chevron-right small mr-2" />{" "}
                        Intermediate
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#!" className="text-muted">
                        <i className="fas fa-chevron-right small mr-2" /> For
                        kids
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl col-lg-3 col-sm-4 col-6 mt-5 mt-sm-0">
              <h3 className="font-weight-bold mb-30">Navigation</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/" >
                    <a className="text-light"><i className="fas fa-chevron-right small mr-2" /> Home</a>
                  </Link>
                </li>
                <li className="mb-2">
                    <Link href="/about" >
                        <a className="text-light"><i className="fas fa-chevron-right small mr-2" /> About us</a>
                    </Link>
                </li>
                {/* <li className="mb-2">
                  <a className="text-light">
                    <i className="fas fa-chevron-right small mr-2" /> Courses
                    <ul className="ml-3">
                      <li>
                        <a href="#">Course category 01</a>
                      </li>
                      <li>
                        <a href="#">Course category 02</a>
                      </li>
                      <li>
                        <a href="#">Course category 03</a>
                      </li>
                    </ul>
                  </a>
                </li> */}
                <li className="mb-2">
                    <Link href="/contacts" >
                        <a className="text-light"><i className="fas fa-chevron-right small mr-2" /> Contact us</a>
                    </Link>
                </li>
              </ul>
            </div>
            {/* <div className="col-xl col-lg-3 col-sm-6 col-6 mt-5 mt-lg-0">
                    <h3 className="font-weight-bold mb-30">
                        Valuable Links
                    </h3>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                        <a href="#!" className="text-light">
                            <i className="fas fa-chevron-right small mr-2" />{" "}
                            Pricing
                        </a>
                        </li>
                        <li className="mb-2">
                        <a href="#!" className="text-light">
                            <i className="fas fa-chevron-right small mr-2" />{" "}
                            Privacy
                        </a>
                        </li>
                        <li className="mb-2">
                        <a href="#!" className="text-light">
                            <i className="fas fa-chevron-right small mr-2" />{" "}
                            Conditions
                        </a>
                        </li>
                        <li className="mb-2">
                        <a href="#!" className="text-light">
                            <i className="fas fa-chevron-right small mr-2" />{" "}
                            Refund Policy
                        </a>
                        </li>
                        <li className="mb-2">
                        <a href="#!" className="text-light">
                            <i className="fas fa-chevron-right small mr-2" />{" "}
                            Our Product
                        </a>
                        </li>
                    </ul>
                    </div> */}
            <div className="col-xl-3 col-lg-4 col-sm-6 mt-5 mt-xl-0">
              <img src="assets/images/logo-11.svg" alt="ask" type="svg" style={{ height: 69 }} />
              <p className="mt-15">
              Our mission is to prepare educated, entrepreneurial 
              and competitive members of society, contributing to 
              the realization of their dreams.
              </p>
              <div className="mt-30">
                <a href="https://www.facebook.com/Ask.consulting.kg" target="_blank" className="pr-3 text-light">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.instagram.com/ask_consulting.kg/" target="_blank" className="p-3 text-light">
                  <i className="fab fa-instagram" />
                </a>
                <a  href="https://wa.me/996755989963" target="_blank" className="p-3 text-light">
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-light py-3 border-dark border-top">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-3 text-center text-lg-left">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="https://bulut.services" target="_blank" className="p-2 d-block">
                    <img className="bulut-logo" src="assets/images/bulut-logo.svg" type="svg" style={{ height: 49 }} alt="Bulut Services">
                    
                    </img>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 text-center text-lg-right mb-3 mb-lg-0">
              © Copyright All Review. Ask Consulting
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
