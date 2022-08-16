// import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const Hero = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="left-wrapper">
          
          <Typography variant="h2">
            Sort out Your <br /> Spring Look
          </Typography>
          <Typography variant="subtitle1">
            We will help to develop every smallest thing into a <br />
            big one for your company.
          </Typography>
          <div style={{marginTop: '25px'}}>
          {/* <Link to={`/categories`}> 
           <Button> Shop </Button>
          </Link> */}
          </div>
        </div>
      </div>

      {/* <Right>
        <RightContainer>
          <Image src="https://i.ibb.co/gTYrRfZ/shop-image2.jpg" />
          <Image src="https://i.ibb.co/gTYrRfZ/shop-image2.jpg" />
        </RightContainer>
      </Right> */}
    </div>
  );
};

export default Hero;
