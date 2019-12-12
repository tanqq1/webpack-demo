import _ from 'lodash';
// import 'style-loader!css-loader!./style.css';
import './style.css';
import ImageUrl from './river.jpg';
import printMe from './print.js';

function component() {
  console.log("-------",process.env.NODE_ENV)
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    //添加图片处理loader
    let image = new Image();
    image.src=  ImageUrl;
    // element.appendChild(image);

    // 引入js文件
    let btn = document.createElement('button');
    btn.innerHTML = 'click me';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
  }

let element = component();
document.body.appendChild(element); 

if(module.hot) {
    module.hot.accept('./print.js', function() {
      console.log("Accepting the updated printMe module");
      document.body.removeChild(element);
      element = component();
      element = component();
      document.body.appendChild(element);
    })
}
