import Link from 'next/link'

export default function Header() {
  
    return (
      <header className="bg-blue shadow">
        <div className="container-lg">
          <nav className="navbar navbar-expand-xl navbar-dark px-0">
            <a className="navbar-brand" href="/">
              <img
                src="assets/images/logo-11.svg"
                alt="logo"
                type="svg"
                style={{ height: 55 }}
              />
            </a>

            <div className="collapse navbar-collapse mr-xl-5" id="navbarNavAlt">
              <ul className="navbar-nav mt-4 mt-xl-0 ml-auto">
                <li className="nav-item dropdown">
                  <Link href="/" >
                  <a className="nav-link" id="head-home" >
                  <span className="fas fa-home" /> Home</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link href="/about">
                  <a className="nav-link" id="head-about" >
                  <span className="fas fa-user" /> About us
                  </a>
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    id="head-courses"
                    
                  >
                    <span className="fas fa-book"/> Courses{" "}
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Course category 01
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Course category 02
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Course category 03
                      </a>
                    </li>
                  </ul>
                </li>
                 */}
                <li className="nav-item">
                  <Link href="/contacts">
                  <a className="nav-link " id="head-contacts">
                  <span className="fas fa-envelope"/> Contact Us
                  </a>
                  </Link>
                </li>
              </ul>
              <div className="d-xl-none ml-0 ml-xl-4 mt-3 mt-xl-0 mb-3 mb-xl-0 text-center text-xl-right">
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

            <div className="d-xl-flex align-items-center ml-auto">
              <ul className="social-icons text-white list-unstyled mr-4">
                <li>
                  <a href="https://www.facebook.com/Ask.consulting.kg" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ask_consulting.kg/" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/996755989963" target="_blank">
                    <i className="fab fa-whatsapp" />
                  </a>
                </li>
              </ul>
              <a
                href="#!"
                className="d-none d-xl-flex btn btn-sm btn-primary rounded-pill"
                data-toggle="modal"
                data-target="#signup-modal"
              >
                Get consultation!
              </a>
            </div>
            <button
              className="navbar-toggler ml-3"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAlt"
              aria-controls="navbarNavAlt"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fas fa-bars" />
            </button>
          </nav>
        </div>
      </header>
    );
}
