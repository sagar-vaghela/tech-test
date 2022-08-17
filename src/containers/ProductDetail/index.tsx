import { useParams } from 'react-router-dom';
import ProdDetail from '../../components/Details/ProdDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions';

const ProductDetail = () => {
  const { id } : any = useParams();
  const getSignleProduct = useSelector((state: any) => state.productData.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  return (
    <div>
      <ProdDetail productDetail={getSignleProduct} id={id} />
    </div>
  );
};
export default ProductDetail;
