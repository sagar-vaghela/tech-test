import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../css/product.css';
import Filter from '../../icons/filter.svg';
import ColorPlaceholder from '../../icons/colorPlaceholder.svg';
import RightArr from '../../icons/rightArrow.svg';
import Heart from '../../icons/heart.svg';
import Search from '../../icons/search.svg';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormControl from '@material-ui/core/FormControl';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, getCategories, getSpecificProducts, getProductSortProduct } from '../../actions';
import usePagination from '../../lib/pagination';
import { Link } from 'react-router-dom';
import { IProduct, productType} from '../../interfaces';
import { Select, MenuItem } from '@material-ui/core';

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

const Products = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number | number[]>(0);
  const [sortOrder, setSortOrder] = useState('asc');
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const handleChangeSort = (event: React.ChangeEvent<unknown> ) => {
    const sortProuct = (event.target as HTMLInputElement).value;
    dispatch(getProductSortProduct(sortProuct));
    setSortOrder(sortProuct);
  };

  const handleChange = (newValue: number | number[]) => {
    setValue(newValue); 
  };

  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getProductsList = useSelector((state: any) => state.productData.products);
  const getCategoriesList = useSelector((state: IProduct) => state.productData.product);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []); 

  useEffect(() => {
    if (getProductsList.length > 0 || getCategoriesList.length > 0) {
      setProducts(getProductsList);
      setCategory(getCategoriesList);
    }
  }, [getProductsList || getCategoriesList]);

  useEffect(() => {
    sliderProducts();
  }, [value]);

  useEffect(() => {
    dispatch(getProductSortProduct(sortOrder));
  }, [sortOrder]);

  const sliderProducts = () => {
    const sliderProduct = getProductsList.filter((item: { price: number }) => item.price <= value);
    setProducts(sliderProduct);
  };

  const specificCategory = (selectCategory: string) => {
    dispatch(getSpecificProducts(selectCategory));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    const sliderProduct = getProductsList.filter((item: { title: string }) =>
      item.title.includes(searchValue)
    );

    setProducts(sliderProduct);
  };
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);

  const handleChangePagination = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

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
            <div>
              <Slider min={0} max={1000} onChange={(event, value) => handleChange(value)} />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  Range
                </Grid>
                <Grid item xs={6} className={'alignRight'}>
                  $0-${value}
                </Grid>
              </Grid>
            </div>
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

            {category.length > 0 &&
              category?.map((category: string, i: number) => (
                <Grid
                  className={'categarySectionContent'}
                  key={i}
                  onClick={() => specificCategory(category)}
                >
                  <Grid container spacing={3} className={'categaryD'}>
                    <Grid item xs={10}>
                      {category}
                    </Grid>
                    <Grid item xs={2} className={'alignRight'}>
                      <img src={RightArr} alt="" />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            <Grid className={'loadMore'}>Load More</Grid>
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
                  onChange={handleSearchChange}
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
                Showing {products.length} Results
              </Grid>
              <Grid item xs={6} className={'alignRight'}>
                <Grid className={'sortTxt'}>Sort By</Grid>
                <Grid className={'sortTxtFilter'}>

                  <FormControl>
                    {/* <NativeSelect value={age} onChange={handleChange1}>
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </NativeSelect> */}

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sortOrder}
                      onChange={handleChangeSort}
                    >
                      <MenuItem value={'asc'}>asc</MenuItem>
                      <MenuItem value={'desc'}>desc</MenuItem>
                    </Select>

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
              {_DATA.currentData().map((product: productType, i: number) => (
                <Grid item xs={4} key={i}>
                  <Link to={`/product/${product.id}`} className="Link-Decorate">
                    <Grid className={'ImgContainer'}>
                      <Grid className={'ContainerImg'}>
                        <img height={296} src={product.image} alt="" />
                        <Grid className={'HeartImgSection'}>
                          <img className={'HeartImg'} src={Heart} alt="" />
                        </Grid>
                      </Grid>

                      <Grid className={'ImgListContentDetails'}>
                        <Typography className={'title'}>{product.category}</Typography>
                        <Typography variant="h5" className={'subTitle'}>
                          {product.title}
                        </Typography>
                        <Typography variant="h5" className={'prize'}>
                          {product.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Link>
                </Grid>
              ))}
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
