import { FavoriteBorderOutlined } from "@material-ui/icons";
import SlideImage from '../image/image.svg';

const Product = () => {
  return (
    <div className="product-container">
      <div className="circle" />
      <img alt='' src={SlideImage} />

      <div className="info">
        <div className="icon">
          <FavoriteBorderOutlined style={{color: '#F86338'}}/>
        </div>
      </div>
    </div>
  )
}

export default Product