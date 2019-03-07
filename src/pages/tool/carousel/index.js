import React from 'react';
import { Card, Carousel } from 'antd';
import carousel2 from '../../../assets/carousel/carousel-2.jpg';
import carousel3 from '../../../assets/carousel/carousel-3.jpg';
import './index.less';

export default class Carousels extends React.Component {

  render() {
    return (
      <div className="carousel-wrap">
        <Card title="文字背景轮播" className="card-wrap">
          <Carousel autoplay effect="fade">
            <div><h3>Ant Motion Banner - React</h3></div>
            <div><h3>Ant Motion Banner - Vue</h3></div>
            <div><h3>Ant Motion Banner - Angular</h3></div>
          </Carousel>
        </Card>
        <Card title="图片轮播" className="slider-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <img src={carousel2} alt="2"/>
            </div>
            <div>
              <img src={carousel3} alt="3"/>
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}
