import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../css/product.css';
import Filter from '../../icons/filter.svg';
import ColorPlaceholder from '../../icons/colorPlaceholder.svg';
import RightArr from '../../icons/rightArrow.svg';
import ImgContainer from '../../icons/imgContainer.svg';
import Heart from '../../icons/heart.svg';
import Search from '../../icons/search.svg';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions';
import usePagination from '../../lib/pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '29ch'
  },
  '& > *': {
    marginTop: theme.spacing(2)
  }
}));
function valuetext(value: any) {
  return `${value}°C`;
}
const Products = () => {
  const classes = useStyles();
  const [value, setValue] = useState([20, 37]);
  const [age, setAge] = useState('');
  const handleChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.productData.isLoading)
  const products = useSelector((state: any) => state.productData.products)

  console.log("products", products);
  console.log("isLoading", isLoading);

  useEffect(() => {
    dispatch(getProducts());
  }, [])
  

  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);


  const handleChangePagination = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  console.log("_DATA", _DATA);
  

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={'containerClass'}>
        <Grid item xs={3}>
          <Grid container spacing={3}>
            <Grid item xs={6} className={'titleClass'}>
              Price
            </Grid>
            <Grid item xs={6} className={'alignRight'}>
              <img src={Filter} alt="" />
            </Grid>
          </Grid>
          <Grid className={'rangeSliderClass'}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                Range
              </Grid>
              <Grid item xs={6} className={'alignRight'}>
                $5-$20
              </Grid>
            </Grid>
          </Grid>
          <Grid className={'colorSection'}>
            <Grid item xs={12} className={'titleClass'}>
              Color
            </Grid>
            <Grid className={'colorPlaceholder'}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <img src={ColorPlaceholder} alt="" />
                </Grid>
                <Grid item xs={3}>
                  <img src={ColorPlaceholder} alt="" />
                </Grid>
                <Grid item xs={3}>
                  <img src={ColorPlaceholder} alt="" />
                </Grid>
                <Grid item xs={3}>
                  <img src={ColorPlaceholder} alt="" />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <img src={ColorPlaceholder} alt="" />
                </Grid>
                <Grid item xs={3}>
                  <img src={ColorPlaceholder} alt="" />
                </Grid>
                <Grid item xs={3}>
                  <img src={ColorPlaceholder} alt="" />
                </Grid>
                <Grid item xs={3}>
                  <img src={ColorPlaceholder} alt="" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={'categarySection'}>
            <Grid item xs={12} className={'titleClass'}>
              Categories
            </Grid>
            <Grid className={'categarySectionContent'}>
              <Grid container spacing={3} className={'categaryD'}>
                <Grid item xs={10}>
                  Dresses
                </Grid>
                <Grid item xs={2} className={'alignRight'}>
                  <img src={RightArr} alt="" />
                </Grid>
              </Grid>
              <Grid container spacing={3} className={'categaryD'}>
                <Grid item xs={10}>
                  Shirt and Top
                </Grid>
                <Grid item xs={2} className={'alignRight'}>
                  <img src={RightArr} alt="" />
                </Grid>
              </Grid>
              <Grid container spacing={3} className={'categaryD'}>
                <Grid item xs={10}>
                  Sweater & Cardigans
                </Grid>
                <Grid item xs={2} className={'alignRight'}>
                  <img src={RightArr} alt="" />
                </Grid>
              </Grid>
              <Grid container spacing={3} className={'categaryD'}>
                <Grid item xs={10}>
                  Outwears
                </Grid>
                <Grid item xs={2} className={'alignRight'}>
                  <img src={RightArr} alt="" />
                </Grid>
              </Grid>
              <Grid container spacing={3} className={'categaryD'}>
                <Grid item xs={10}>
                  Bags
                </Grid>
                <Grid item xs={2} className={'alignRight'}>
                  <img src={RightArr} alt="" />
                </Grid>
              </Grid>
              <Grid container spacing={3} className={'categaryD'}>
                <Grid item xs={10}>
                  Shoes
                </Grid>
                <Grid item xs={2} className={'alignRight'}>
                  <img src={RightArr} alt="" />
                </Grid>
              </Grid>
              <Grid container spacing={3} className={'categaryD'}>
                <Grid item xs={10}>
                  Accesories
                </Grid>
                <Grid item xs={2} className={'alignRight'}>
                  <img src={RightArr} alt="" />
                </Grid>
              </Grid>
              <Grid className={'loadMore'}>Load More</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid>
            <form className={classes.root} noValidate autoComplete="off">
              <div className="searchInput">
                <TextField
                  id="outlined-search"
                  placeholder="Search Products"
                  type="search"
                  variant="outlined"
                />
                <Grid className="searchInputIcon">
                  <img src={Search} alt="" />
                </Grid>
              </div>
            </form>
          </Grid>
          <Grid className={'pagignationShowDetails'}>
            <Grid container spacing={3}>
              <Grid item xs={6} className={'showItem'}>
                Showing 1-9 Results
              </Grid>
              <Grid item xs={6} className={'alignRight'}>
                <Grid className={'sortTxt'}>Sort By</Grid>
                <Grid className={'sortTxtFilter'}>
                  <FormControl>
                    {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
                    <NativeSelect value={age} onChange={handleChange1}>
                      {/* <option aria-label="None" value="" /> */}
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid className={'IconBtn'}>
                  <FormatListBulletedIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="imagListSection">
            <Grid container spacing={3} className={'ImgListContent'}>
              {_DATA.currentData().map((product: any, i: number) => 
                (<Grid item xs={4} key={i}>
                  <Grid className={'ImgContainer'}>
                    <Grid className={'ContainerImg'}>
                      <img height={296} src={product.image} alt="" />
                      <Grid className={'HeartImgSection'}>
                        <img className={'HeartImg'} src={Heart} alt="" />
                      </Grid>
                    </Grid>
                    <Grid className={'ImgListContentDetails'}>
                      <Typography className={'title'}>Bags</Typography>
                      <Typography variant="h5" className={'subTitle'}>
                        {product.title}
                      </Typography>
                      <Typography className={'productType'}>{product.category}</Typography>
                      <Typography variant="h5" className={'prize'}>
                        {product.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>)
              )}
            </Grid>
          </Grid>
          <Grid className={'pagignationSection'}>
            <Pagination
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChangePagination}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Products;
