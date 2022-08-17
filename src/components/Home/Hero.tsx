import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import SlideImage from '../image/image.svg';
import { Link } from 'react-router-dom';

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
          <div style={{ marginTop: '25px' }}>
            <div style={{ marginTop: '25px' }}>
              <Link to={`/products`} style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  style={{ background: '#F86338', color: 'white', textTransform: 'none' }}
                >
                  {'Shop > '}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-container">
          <img alt="" src={SlideImage} />
          <img alt="" src={SlideImage} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
