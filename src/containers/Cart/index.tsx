import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@material-ui/core';
import '../../css/cart.css';
import TableIcon from '../../components/Icons/tableicon.svg';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { getCarts } from '../../actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const rows = [
  {
    name: 'Classic Blouse IX',
    price: '$99',
    quantity: '2',
    total: '$198'
  },
  {
    name: 'Classic Blouse IX',
    price: '$99',
    quantity: '2',
    total: '$198'
  },
  {
    name: 'Classic Blouse IX',
    price: '$99',
    quantity: '2',
    total: '$198'
  }
];

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) return;
    dispatch(getCarts(cartId));
  }, []);

  return (
    <Grid className="heading" data-testid = "cart">
      <Grid className="carttitle">Cart</Grid>
      <TableContainer component={Paper} className="tablecontainer">
        <Table aria-label="simple table">
          <TableHead className="tablehead">
            <TableRow className="tablerow">
              <TableCell style={{ color: 'white', fontWeight: 700, fontSize: '24px' }}>
                Product Name
              </TableCell>
              <TableCell
                align="right"
                style={{ color: 'white', fontWeight: 700, fontSize: '24px' }}
              >
                Price
              </TableCell>
              <TableCell
                align="right"
                style={{ color: 'white', fontWeight: 700, fontSize: '24px' }}
              >
                Quantity
              </TableCell>
              <TableCell
                align="right"
                style={{ color: 'white', fontWeight: 700, fontSize: '24px' }}
              >
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tablebody">
            {rows.map((option) => (
              <TableRow key={option.name}>
                <TableCell component="th" scope="row" style={{ fontWeight: 700, fontSize: '24px' }}>
                  {' '}
                  <img src={TableIcon} alt="" /> {option.name}{' '}
                </TableCell>
                <TableCell align="right" style={{ fontWeight: 700, fontSize: '24px' }}>
                  {option.price}
                </TableCell>
                <TableCell align="right" style={{ fontWeight: 700, fontSize: '24px' }}>
                  {option.quantity}
                </TableCell>
                <TableCell align="right" style={{ fontWeight: 700, fontSize: '24px' }}>
                  {option.total} <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container spacing={3} xs={12} className="cartcontainer">
        <Grid item md={8}>
          <div className="boxsize">
            <Typography className="coupon"> Have a Coupon? </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="cartinput"
              inputProps={{ style: { border: '1 px #F86338 ! important' } }}
            />
            <div style={{ paddingTop: '20px' }}>
              <Button variant="contained" style={{ backgroundColor: '#F86338', color: 'white' }}>
                Apply Coupon
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item md={4}>
          <Typography className="cartTotals">Cart Totals</Typography>
          <Grid container spacing={3} style={{ marginBottom: '15px' }}>
            <Grid item md={3}>
              <Typography className="subtotal">Subtotal </Typography>
            </Grid>
            <Grid item sm={9}>
              <Typography className="cartsubtotal">$150</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginBottom: '15px' }}>
            <Grid item md={3}>
              <Typography className="subtotal"> Shipping </Typography>
            </Grid>
            <Grid item sm={9}>
              <Typography className="cartsubtotal">Free Shipping</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginBottom: '25px' }}>
            <Grid item md={3} />
            <Grid item sm={6}>
              <Typography className="cartsubtotal">Shipping to Sidney</Typography>
            </Grid>
            <Grid item sm={2}>
              <Typography className="changetext">Change</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginBottom: '15px' }}>
            <Grid item md={3}>
              <Typography className="subtotal"> Total </Typography>
            </Grid>
            <Grid item sm={9}>
              <Typography className="subtotal">$350</Typography>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: '#F86338', color: 'white', width: '488px' }}
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
