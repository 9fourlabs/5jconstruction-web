import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            At 5.J. Construction, we offer a comprehensive range of concrete-related services in Covington, Georgia, and the surrounding areas. We are dedicated to providing affordable and high-quality solutions for all your concrete needs, from residential driveways and patios to commercial foundations and more. Our experienced team ensures durable and reliable results on every project.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4"> {/* Added Bootstrap grid classes */}
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col"> {/* Changed to col */}
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc h-100"> {/* Added h-100 */}
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};