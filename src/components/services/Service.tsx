import { FaArrowRightLong } from "react-icons/fa6";
import "./Service.css";
import Services_Data from "./Services-Data";

const Service = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src="./images/underline-8.png" alt="Under line" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h2>{service.s_no}</h2>
              <h3>{service.s_name}</h3>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <FaArrowRightLong />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
