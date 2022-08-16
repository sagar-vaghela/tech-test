import { Avatar, Grid, Link, Typography } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import HeaderIcon from "../Icons/Headerlogo.svg";
import "../../css/header.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const avtarname = ["Fb", "Tw", "Ig", "Yt"];

const Header = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography className="mobilephone">
            <CallIcon style={{ paddingTop: "10px" }} />
            +022 319 821 967
          </Typography>
        </Grid>
        <Grid item xs>
          <div className="headerlogo">
            <img src={HeaderIcon} alt="" />
          </div>
        </Grid>
        <Grid item xs>
          <div className="avtar">
            {avtarname.map((name) => (
              <Avatar className="avtarlogo">{name}</Avatar>
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item sm={9}>
          <div className="details">
            <Link href="" className="homepage" color="textPrimary">
              Home
            </Link>
            <Link href="" className="homepage" color="textPrimary">
              About
            </Link>
            <Link href="" className="homepage" color="textPrimary">
              FAQ
            </Link>
            <Link href="" className="homepage" color="textPrimary">
              Blog
            </Link>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="iconsection">
            <FavoriteBorderIcon
              style={{ marginRight: "33px" }}
              fontSize="medium"
            />
            <ShoppingCartIcon
              style={{ marginRight: "33px" }}
              fontSize="medium"
            />
            <PermIdentityIcon fontSize="medium" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Header;
