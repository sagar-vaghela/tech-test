import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {
  Grid,
  MenuItem,
  TextField,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import '../../css/productdetails.css';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TrueIcon from '../../components/Icons/trueicon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProduct } from '../../actions';

const option = ['XS', 'S', 'ML', 'L', 'XL'];

const ProductDetail = () => {
  const { id }: any = useParams();

  const product = useSelector((state: any) => state.productData.product);

  const dispatch = useDispatch();
  const [countValue, setCountvalue] = useState(0);
  const [optionvalue, setOptionValue] = useState(option[0]);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  return (
    <>
      <Grid className="wrapper">
        <Grid className={'imagecontainer'}>
          <Grid className={'image'}>
            <img src={product.image} alt="" />
          </Grid>
        </Grid>
        <Grid className={'infocontainer'}>
          <Typography variant="h4" className="titledetails">
            {product.title}
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={3}>
              <Typography className="avalibility"> Avaliability </Typography>
            </Grid>
            <Grid item sm={8}>
              <Typography className="availimeasure"> : 48 in stocks </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginBottom: '15px' }}>
            <Grid item md={4}>
              <Typography className="dollar"> {product.price} </Typography>
            </Grid>
            <Grid item sm={8}>
              <Typography className="canceldollar"> $1500 </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginBottom: '15px' }}>
            <Grid item md={1}>
              <Typography className="sku">SKU </Typography>
            </Grid>
            <Grid item sm={11}>
              <Typography className="skuresponse">: AA0031</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginBottom: '15px' }}>
            <Grid item md={2}>
              <Typography className="sku"> {product.category} </Typography>
            </Grid>
            <Grid item sm={8}>
              <Typography className="skuresponse">: Dresses</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginBottom: '25px' }}>
            <Grid item md={1}>
              <Typography className="sku"> Tags </Typography>
            </Grid>
            <Grid item sm={11}>
              <Typography className="skuresponse">: Fashion, Classic, Blouses, Dresses </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginBottom: '25px' }}>
            <Grid className="InputField" item md={3}>
              <TextField
                size="small"
                select
                style={{ width: '125px' }}
                variant="outlined"
                value={optionvalue}
                onChange={(event) => {
                  setOptionValue(event.target.value);
                }}>
                {option.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid className="plusminusCard" item sm={3}>
              <IconButton
                className="plusMinusbutton"
                size="small"
                onClick={() => {
                  setCountvalue(countValue - 1);
                }}>
                <Remove />
              </IconButton>
              <TextField
                className="textshow"
                variant="standard"
                type="number"
                value={countValue}
                style={{ width: '50px', marginLeft: '25px' }}
                InputProps={{
                  disableUnderline: true
                }}
              />
              <IconButton
                className="plusMinusbutton"
                size="small"
                onClick={() => {
                  setCountvalue(countValue + 1);
                }}>
                <Add />
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              {' '}
              <Typography style={{ color: '#F3692E', fontWeight: 700, fontSize: '16px' }}>
                Add note
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid className="addtocart" item md={3}>
              <Button
                variant="contained"
                className="button"
                style={{ backgroundColor: '#F86338', color: 'white' }}>
                Add to Cart
                <ShoppingCartIcon style={{ marginLeft: '23px' }} />
              </Button>
            </Grid>
            <Grid className="starbutton" item sm={9}>
              <Button variant="outlined" className="starbutton" style={{ color: '#F86338' }}>
                <StarBorderIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="descriptionWrapper">
        <hr />
        <Grid container spacing={3} style={{ marginTop: '15px' }}>
          <Grid item md={6}>
            <Typography className="descriptiontitle"> Description </Typography>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
              commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
              nulla pariatur
            </p>
          </Grid>
          <Grid item sm={6}>
            <Typography className="descriptiontitle"> Fabric Details </Typography>
            <Grid item xs={12} md={6} style={{ marginLeft: '40px' }}>
              <div>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <img src={TrueIcon} alt="" />
                    </ListItemIcon>
                    <ListItemText primary="100% Cotton" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img src={TrueIcon} alt="" />
                    </ListItemIcon>
                    <ListItemText primary="Quick Dry" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img src={TrueIcon} alt="" />
                    </ListItemIcon>
                    <ListItemText primary="Ties as Shoulder" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img src={TrueIcon} alt="" />
                    </ListItemIcon>
                    <ListItemText primary="Accusantium doloremque " />
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ProductDetail;
