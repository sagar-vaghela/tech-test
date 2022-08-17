import { Avatar, Grid, Typography, Link as Anchor } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import HeaderIcon from '../Icons/Headerlogo.svg';
import '../../css/header.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Link } from 'react-router-dom';

const avtarname = ['Fb', 'Tw', 'Ig', 'Yt'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = (props: any) => {
  const { renderlocation } = props;

  return (
    <div>
      <Grid container spacing={3} xs={12}>
        <Grid item sm={3} >
          <Typography className="mobilephone">
            <CallIcon style={{ paddingTop: '10px' }} />
            +022 319 821 967
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <div className="headerlogo">
            <img src={HeaderIcon} alt="" />
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="avtar">
            {avtarname.map((name, i) => (
              <Avatar key={i} className="avtarlogo">
                {name}
              </Avatar>
            ))}
          </div>
        </Grid>
      </Grid>
      <div style={{ paddingLeft: '90px', paddingTop: '10px' }}>{renderlocation()}</div>
      <Grid container xs={12}>
        <Grid item sm={9}>
          <div className="details">
            <Anchor href="" className="homepage" color="textPrimary">
              Home
            </Anchor>
            <Anchor href="" className="homepage" color="textPrimary">
              About
            </Anchor>
            <Anchor href="" className="homepage" color="textPrimary">
              FAQ
            </Anchor>
            <Anchor href="" className="homepage" color="textPrimary">
              Blog
            </Anchor>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="iconsection">
            <Link to="/products" className="homepage" color="textPrimary">
              <FavoriteBorderIcon style={{ marginRight: '33px' }} fontSize="medium" />
            </Link>
            <Link to="/cart" className="homepage" color="textPrimary">
              <ShoppingCartIcon style={{ marginRight: '33px' }} fontSize="medium" />
            </Link>
            <PermIdentityIcon fontSize="medium" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Header;
