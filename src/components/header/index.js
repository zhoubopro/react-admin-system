import React from 'react';
import { Row, Col } from 'antd';
import axios from '../../utils/axios';
import Util from '../../utils/utils';
import { Link } from 'react-router-dom';
import './index.less';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '北方的🐺',
      systemTime: '',
      dayPictureUrl: '',
      weather: ''
    }
  }

  componentWillMount() {
    setInterval(() => {
      let systemTime = Util.formateDate(new Date().getTime());
      this.setState({
        systemTime
      })
    }, 1000);
    this.getWeatherAPIData();
  }

  getWeatherAPIData() {
    let city = '北京';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={6} className="logo">
            {/*<img src="/assets/logo-ant.svg" alt=""/>*/}
            {/*<span>IMooc 通用管理系统</span>*/}
          </Col>
          <Col span={18} className="weather">
            <span className="date">{this.state.systemTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt=""/>
            </span>
            <span className="weather-detail">
              {this.state.weather}
            </span>
            <span> 欢迎，{this.state.userName}</span>
            <Link to="/login">退出</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
