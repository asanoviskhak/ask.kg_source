import React from 'react'

const team = [
    {
        name: "Askat Kubanychbekov",
        image: "assets/images/team/askat-team.jpg",
        title: "Founder and CEO",
        contacts: [
            {
                name: "fab fa-instagram",
                url: "https://www.instagram.com/askatkubanychbekov/"
            },
            {
                name: "far fa-envelope",
                url: "mailto:askatk5@gmail.com"
                
            },
            {
                name: "fab fa-facebook-f",
                url: "https://www.facebook.com/askat.kubanychbekov.31"
            },
            {
                name: "fas fa-phone-alt",
                url: "tel:+996707147782"
            },
            
        ] ,
        more:[  "Bachelor’s of Business Administration at UNIST, South Korea", 
                "Entrepreneur(online store strawberry.kg, social project kettik.kg, etc.)",
                "Co Founder of UNISCA Consulting Organization in South Korea",
                "Consultant at ICON International Consulting Network in New York"
            ]
    },
    {
        name: "Akyl Chatkalbai Kyzy",
        image: "assets/images/team/akyl-team.jpg",
        title: "Managing Partner",
        contacts: [
            {
                name: "fab fa-instagram",
                url: "https://www.instagram.com/chatkalbaevna/"
            },
            {
                name: "far fa-envelope",
                url: "mailto:info@ask.kg"
                
            },
            {
                name: "fab fa-facebook-f",
                url: "https://www.facebook.com/akyl.chatkalbaikyzy"
            },
            
        ] ,
        more:[  "Bachelor’s of Business Administration at UNIST, South Korea", 
                "UN Student Model Delegate at Harvard, Massachusetts",
                "Consultant in the international consulting network ICON (New York) and GMCP (Chicago)",
                "Finalist of the LG Expeditionary Program (LG Global Challenger)",
                "Intern at Hyundai RB International in South Korea"
            ]
    },
    {
        name: "Almazbek Amanov",
        image: "assets/images/team/almaz-team.jpg",
        title: "General Representative in South Korea",
        contacts: [
            {
                name: "fab fa-instagram",
                url: "https://www.instagram.com/amanov_a_/"
            },
            
            {
                name: "fab fa-facebook-f",
                url: "https://www.facebook.com/almaz.amanov.9"
            },
            
        ] ,
        more:[  "Bachelor of Architecture, Design and Engineering, Busan National University, South Korea", 
                "Participant and Prize winner of the project (JIA) Japan International Architecture Workshop",
                "Stipendiate of Busan Foundation for international cooperation",
                "Completed an internship at the Korean construction company KDDH",
                "Worked at Hyundai Engineering & Construction"
            ]
    },
]


export default function Instructors() {
    return (
        <section className="section-padding">
            <div className="container">
              <div className="row align-items-center mb-50">
                <div className="col-lg-9 text-center text-lg-left">
                  <h2 className="section-title mb-0">
                    Our Skilled <span className="has-line">Team</span>
                  </h2>
                </div>
                <div className="col-lg-3 mt-4 mt-lg-0 text-center text-lg-right">
                  <div className="nav-arrows">
                    <span className="fas fa-chevron-left instructors-left" />
                    <span className="fas fa-chevron-right instructors-right" />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="owl-carousel instructors-carousel">
                      {team.map((person)=>(
                        <div className="card instructors-item border-0">
                          <div className="position-relative">
                            <img
                              src={person.image}
                              alt={person.name}
                              className="card-img-top"
                            />
                            <div className="instructor-social text-center">
                            {
                                person.contacts.map((info)=>(
                                    <a href={info.url} className="p-3 text-link">
                                        <i className={info.name} />
                                    </a>
                                ))
                            }
                              
                            </div>
                          </div>
                          <div className="card-body px-0 pb-0">
                            <h4 className="font-weight-600 text-blue mb-1">
                              {person.name}
                            </h4>
                            <p className="font-weight-600 mb-2">{person.title}</p>
                            <ul className="list-unstyled" style={{fontSize: "12px"}}>
                                {person.more.map((el)=>(
                                    <li className="mb-2">
                                    <i className="fas fa-star mr-2 text-primary" />
                                        {el}
                                    </li>
                                ))}
                                
                            </ul>
                          </div>
                        </div>
                       

                      ))}
                    </div>
                </div>
              </div>
            </div>
          </section>
    )
}
