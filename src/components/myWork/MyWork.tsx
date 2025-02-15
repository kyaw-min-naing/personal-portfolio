import { FaArrowRightLong } from "react-icons/fa6";
import myWork_data from "../../assets/MyWork";
import "./MyWork.css";

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src="./images/underline-8.png" alt="Under line" />
      </div>
      <div className="mywork-container">
        {myWork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <FaArrowRightLong />
      </div>
    </div>
  );
};

<div></div>;

export default MyWork;
