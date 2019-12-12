// 探索作用域this,箭头函数域普通函数的区别
// 箭头函数的定义是保证函数里的this是是定义域的this,
// 如果调用他的对象用美柚改函数，依旧会报undefined is not a Function

function scopeOfFuns(){
    console.log("out fun:",this);
    function scopeOfFunIn(){
        console.log("in funs:",this)
    }
    scopeOfFunIn();
}

const scopeOfArrowFuns = () => {
    console.log("arrow fun out:",this);
    const scopeOfArrowFunsIn = () => {
        console.log("arrow fun in",this);
    }
    scopeOfArrowFunsIn();
}

const scopeOfArrowFuns1 = () => {
    console.log("arrow fun out:",this);
    function scopeOfArrowFunsIn(){
        console.log("arrow fun in",this);
    }
    scopeOfArrowFunsIn();
}

function scopeOfFuns1(){
    console.log("out fun:",this);
    const scopeOfFunIn = () => {
        console.log("in funs:",this)
    }
    scopeOfFunIn();
}

function funTest() {
    const scopeOfFunIn = () => {
        console.log("in funs:",this)
    }
    let obj = {name:'tabqq'}
    function scopeOfFuns1(){
        console.log("out fun:",this);
        this.scopeOfFunIn();
    }
    scopeOfFuns1.call(obj);
}

let arr = {
    'hello':'so'
}

this.scopeOfFuns.apply(arr);
this.scopeOfArrowFuns.appy(arr)