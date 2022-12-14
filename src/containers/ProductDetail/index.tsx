import { Params, useParams } from 'react-router-dom';
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
import { addCart, getSingleProduct, updateCart } from '../../actions';
import { IProduct } from '../../interfaces';

const option = ['XS', 'S', 'ML', 'L', 'XL'];

const ProductDetail = () => {
  const { id } = useParams<Params<string>>();

  const product = useSelector((state: IProduct) => state.productData.product);

  const dispatch = useDispatch();
  const [countValue, setCountvalue] = useState(1);
  const [optionvalue, setOptionValue] = useState(option[0]);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  const handleAddToCart = () => {
    const payload = {
      userId: 5,
      date: new Date(),
      products: [{ productId: id, quantity: countValue }]
    };
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      dispatch(updateCart(cartId, payload)); // update
    } else {
      dispatch(addCart(payload));
    }
  };

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
            <Grid className="InputField" item md={4}>
              <TextField
                size="small"
                select
                style={{ width: '125px' }}
                variant="outlined"
                value={optionvalue}
                onChange={(event) => {
                  setOptionValue(event.target.value);
                }}
              >
                {option.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid className="plusminusCard" item sm={5}>
              <IconButton
                className="plusMinusbutton"
                size="small"
                onClick={() => {
                  if (countValue === 1) return;
                  setCountvalue(countValue - 1);
                }}
              >
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
                }}
              >
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
            <Grid className="addtocart" item md={5}>
              <Button
                variant="contained"
                className="button"
                onClick={handleAddToCart}
                style={{ backgroundColor: '#F86338', color: 'white' }}
              >
                Add to Cart
                <ShoppingCartIcon style={{ marginLeft: '23px' }} />
              </Button>
            </Grid>
            <Grid className="starbutton" item sm={5}>
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
            <p>{product.description}</p>
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
