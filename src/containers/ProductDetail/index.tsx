import { useParams } from 'react-router-dom';
import ProdDetail from '../../components/Details/ProdDetails';
import { useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  console.log('id', id);

  // useEffect(() => {

  // }, [id]);

  return (
    <div>
      <ProdDetail />
    </div>
  );
};
export default ProductDetail;
