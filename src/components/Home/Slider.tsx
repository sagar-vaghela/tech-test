
import React, { Children, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import SlideImage from '../image/image.svg';
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
]
const Slider = () => {
  return (
    <Carousel cols={4} rows={1} gap={0} loop >
      {test.map((test, index) => {
        return (
          <Carousel.Item>
            <Card className='card'>
              <CardMedia
                className='media'
                image={test.image}
              >
                <div className="icon">
                  <FavoriteBorderOutlined style={{ color: '#F86338' }} />
                </div>
              </CardMedia>
              <CardContent className='cardContent'>
                <Typography variant="subtitle2">
                  Bags
                </Typography>
                <Typography variant="h5">
                  Queen’s Summer
                </Typography>
                <Typography variant="subtitle2">
                  Medium Shoulder Bag
                </Typography>
                <Typography variant="subtitle1">
                  $1000
                </Typography>
              </CardContent>
            </Card>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
export default Slider;