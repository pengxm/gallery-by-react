require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let imageUrl = require('../images/1.png');

// 获取图片数据
var imageDatas = require('../data/imgDatas.json');
// 将图片名信息转为图片的路径
imageDatas = (function genImageUrl(imageDatasArr) {
   for(var i = 0, j = imageDatasArr.length; i < j; i++){
     var singleImageData = imageDatasArr[i];
     singleImageData.imageUrl = require('../images/'+ singleImageData.fileName);
     imageDatasArr[i] = singleImageData;
   }
  return imageDatasArr;
})(imageDatas);

var ImgFigure = React.createClass({
  render : function(){
    return (
      <figure>
        <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
        <figcaption>
          <h2>
            {this.props.data.title}
          </h2>
        </figcaption>
      </figure>
    )
  }
});



class AppComponent extends React.Component {
  render() {

    var controllerUnits = [],
        imgFigures = [];
    imageDatas.forEach(function(value){
      imgFigures.push(<ImgFigure data={value} />)
    });
    return (
        <section className="stage">
          <section className="image-sec">
            {imgFigures}
          </section>
          <nav className="controller-nav">
            {controllerUnits}
          </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
