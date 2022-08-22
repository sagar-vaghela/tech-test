import React from 'react';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import SlideImage from '../../components/image/image.svg';
import Carousel from 'better-react-carousel';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const test = [
  {
    id: 1,
    image: SlideImage
  },
  {
    id: 2,
    image: SlideImage
  },
  {
    id: 3,
    image: SlideImage
  },
  {
    id: 4,
    image: SlideImage
  },
  {
    id: 5,
    image: SlideImage
  },
  {
    id: 6,
    image: SlideImage
  },
  {
    id: 7,
    image: SlideImage
  }
];
const Slider = () => {
  return (
    <div data-testid="slider">
    <Carousel cols={4} rows={1} gap={0} loop>
      {test.map((test, index) => {
        return (
          <Carousel.Item key={index}>
            <Card className="card">
              <CardMedia className="media" image={test.image}>
                <div className="icon">
                  <FavoriteBorderOutlined style={{ color: '#F86338' }} />
                </div>
              </CardMedia>
              <CardContent className="cardContent">
                <Typography variant="subtitle2" style={{ color: '#F3692E' }}>
                  Bags
                </Typography>
                <Typography variant="h5">Queen’s Summer</Typography>
                <Typography variant="subtitle2" style={{ color: '#515151' }}>
                  Medium Shoulder Bag
                </Typography>
                <Typography variant="subtitle1" style={{ color: '#F3692E' }}>
                  $1000
                </Typography>
              </CardContent>
            </Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
    </div>
  );
};
export default Slider;
