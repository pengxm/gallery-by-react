require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let imageUrl = require('../images/yeoman.png');

// 获取图片数据
var imageDatas = require('../data/imgDatas.json');
// 将图片名信息转为图片的路径
imageDatas = (function genImageUrl(imageDatasArr) {
   for(var i = 0, j = imageDatasArr.length; i < j; i++){
     var singleImageData = imageDatasArr[i];
     singleImageData.imageUrl = require('../images/'+ singleImageData.fileName +'.png');
     imageDatasArr[i] = singleImageData;
   }
  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
        <section className="stage">
          <section className="image-sec">

          </section>
          <nav className="controller-nav">

          </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
