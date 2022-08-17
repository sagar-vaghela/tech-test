import React from 'react';
import { useEffect, useState } from "react";
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
import { getProductsLimit, getAllProducts } from '../../services/api';

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
interface Data {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
}
interface ProductsProps {
  data: Array<Data>;
}

const Products: React.FC<ProductsProps> = () => {

  const classes = useStyles();
  const [value, setValue]: any = useState({
    keyword: "",
    price: "5",
    color: "",
    category: null,
    sort: "asc",
  });

  const [allProducts, setAllProducts]: any = useState([]);
  const [age, setAge] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await getAllProducts();
      const getAllData = await response;
      setAllProducts(getAllData);
      setLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getDataLimit = async () => {
      const response = await getProductsLimit(page);
      const getDataLimit = await response;
      setAllProducts(getDataLimit);
      setLoading(false);
    };

    getDataLimit();
  }, [page]);

  const handleChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };

  const paginate = (
    array_to_paginate: Array<Data>,
    page_size: number,
    page_number: number
  ) => {
    return array_to_paginate.slice(
      page_number * page_size,
      page_number * page_size + page_size
    );
  }

  const changePage = (page: number) => {
    setPage(page);
  }

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
            {/* <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            /> */}
            <div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                id="customRange3"
                name="price"
                defaultValue={value.price}
                onChange={handleChange}
              ></input>
              <label htmlFor="customRange3" className="form-label">
                Range: $0 - ${value.price}
              </label>
            </div>
            {/* <Grid container spacing={3}>
              <Grid item xs={6}>
                Range
              </Grid>
              <Grid item xs={6} className={'alignRight'}>
              ${value.price}
              </Grid>
            </Grid> */}

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

          {/* { allProducts?.map((item:any) => ( 
          
          <Grid className="imagListSection" key={item.id}>
            <Grid container spacing={3} className={'ImgListContent'}>
              <Grid item xs={4}>

                <Grid className={'ImgContainer'}>
                  <Grid className={'ContainerImg'}>

                    <img src={item.image} alt="" />
                    <Grid className={'HeartImgSection'}>
                      <img className={'HeartImg'} src={Heart} alt="" />
                    </Grid>
                  </Grid>

                  <Grid className={'ImgListContentDetails'}>
                    <Typography className={'title'}>Bags</Typography>
                    <Typography variant="h5" className={'subTitle'}>
                    {item.category}
                    </Typography>

                    <Typography className={'productType'}>{item.title}</Typography>
                    <Typography variant="h5" className={'prize'}>
                    ${item.price}
                    </Typography>

                  </Grid>
                </Grid>
              </Grid>
  
            </Grid>
          </Grid>
          ))
        } */}
          <Grid className="imagListSection" >
            {allProducts.length && !isLoading ? (
              <div className="grid-products-cols mt-4" style={{ display: "grid" }}>
                {paginate(allProducts, itemsPerPage, page)?.map((item) => (

                  <Grid container spacing={3} className={'ImgListContent'} key={item.id}>
                    <Grid item xs={4}>

                      <Grid className={'ImgContainer'}>
                        <Grid className={'ContainerImg'}>

                          <img src={item.image} alt="" />
                          <Grid className={'HeartImgSection'}>
                            <img className={'HeartImg'} src={Heart} alt="" />
                          </Grid>
                        </Grid>

                        <Grid className={'ImgListContentDetails'}>
                          <Typography className={'title'}>Bags</Typography>
                          <Typography variant="h5" className={'subTitle'}>
                            {item.category}
                          </Typography>

                          <Typography className={'productType'}>{item.title}</Typography>
                          <Typography variant="h5" className={'prize'}>
                            ${item.price}
                          </Typography>

                        </Grid>
                      </Grid>
                    </Grid>

                  </Grid>

                ))}
              </div>
            ) : isLoading ? (
              <div className="d-flex justify-content-center my-5">
                <div
                  className="spinner-border"
                  role="status"
                  style={{
                    color: "#f86338",
                  }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="text-center my-5">No item matched your query.</div>
            )}
          </Grid>
          <Grid className={'pagignationSection'}>
            <Pagination count={10} showFirstButton showLastButton onChange={(event, page) => changePage(page)} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Products;
