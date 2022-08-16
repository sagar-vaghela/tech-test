import "../../css/footer.css";
import FooterIcon from "../Icons/Footerlogo.svg";
import { Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="left">
        <div className="LogoContainer">
          <img src={FooterIcon} alt="" className="Logo" />
        </div>
        <div className="desccontainer">
          <Typography className="desc">
            OurStudio is a digital agency UI / UX Design and Website Development
            located in Ohio, United States of America
          </Typography>
        </div>
        <div className="copyrightContainer">
          <Typography className="copyright">
            Copyright Tanah Air Studio
          </Typography>
        </div>
      </div>
      <div className="footercenter">
        <Typography
          variant="h5"
          style={{ color: "white", paddingBottom: "30px" }}
        >
          Our Social Media
        </Typography>
        <div className="media">
          <Typography
            variant="h6"
            style={{ color: "white", paddingBottom: "10px" }}
          >
            Facebook
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", paddingBottom: "10px" }}
          >
            Twitter
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", paddingBottom: "10px" }}
          >
            Instagram
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", paddingBottom: "10px" }}
          >
            Youtube
          </Typography>
        </div>
      </div>
      <div className="footerright">
        <Typography
          variant="h5"
          style={{ color: "white", paddingBottom: "25px" }}
        >
          Contact
        </Typography>
        <div className="medialist">
          <div className="contactItem">
            {" "}
            <LocationOnIcon style={{ marginRight: "10px" }} />
            <Typography variant="h6">
              8819 Ohio St. South Gate, California 90280
            </Typography>
          </div>
          <div className="contactItem">
            {" "}
            <MailOutlineIcon style={{ marginRight: "10px" }} />
            <Typography variant="h6">ourstudio@hello.com</Typography>
          </div>
          <div className="contactItem">
            {" "}
            <PhoneIcon style={{ marginRight: "10px" }} />{" "}
            <Typography variant="h6">+271 386-647-3637</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
