/*es6语法*/
/*1变量声明*/
//var 声明 跟 let 声明的区别
//一：let,不允许重复声明 没有变量提声
/*console.log(a); //会报错
 let a =0;
 let a = 4; //重复声明报错*/
//二：const 定义静态变量
const b=3;//一旦声明必须赋值 赋值之后不许修改

/*2.块级作用域*/
//块级作用域一般指 for(){},if(){},{}
//如果{}想表示一个对象,千万不要将它放在行首
//console.log(eval("({a:1})"));
//块级作用域的变量外面无法访问
/*{
 let e = 0;
 }
 console.log(e);//报错
 {
 let aa=1;
 {
 let a=2;
 console.log(aa);//块级作用域可以访问外边的变量
 }
 }*/
/*3.全局属性*/
/*var a=1;
 //window.a=1
 console.log(window.a);
 console.log("a" in window);
 console.log(self == window);

 //let 声明的变量不会给全局当做属性
 let b=1;
 console.log(window.b);//报错*/
/*4.赋值*/
/*一：数组赋值*/
 { let [x,y,z]=[1,2];
 //console.log(x, y, z);
 let arr=[[1],[[[[2]]]]];
 let sd = [1,2]
 //let [[m],[[[[n]]]]]=;
 //console.log(sd.toString());
 //console.log(arr.join(","));
 //console.log(arr+"");
 }
 { let [,,Z]=[1,2,3]; //可以将不赋值的为空
 //console.log(Z);
 let [X=5,,s]=[,2,3];
 //console.log(X);//没有附上值得才会走默认值,能赋值就不会走默认值
 let [[q],[[[f]]]]=[[1],[[[23]]]];
 //console.log(q, f); //数组赋值的时候结构要一样

 let a= 1,b=2;
 [a,b]=[b,a];//实现互换
 //console.log(a, b);


 let [a1,...b1]=[1,2,3,4,5];
 //console.log(a1, b1);//...就是将后面归于新的数组
 let [a2,b2,...c2]="123456789";
 //console.log(a1, b2, c2);//效果跟上面一样

 //Array(),将传进来的值变成数组返回
    //注意:只传一个参数n,代表返回数组的长度
    //console.log(Array(1, 2, 3, 4));
    //console.log(Array(4));

    //Array.of(),跟Array一样,只有一点区别就是传一个参数时候返回就是当前参数组成的数组
    //console.log(Array.of(4));

     //Array.from()
     //参数是:数组或者类数组
     //返回值是一个新的数组
     //将类数组变成数组
     let ary=[1,2,3,4];
     let ary1="56262";
     let newAry=Array.from(ary1);
     //console.log(newAry);
     function toArray() {
         return Array.from(arguments)
     }
     // console.log(toArray(1, 2, 3, 4));

     //copyWithin(target,start,end)
     //target:必填,从该位置开始替换数据
     //start:选填,默认值0,从该位置开始读取数据
     //end:选填,默认值是数组的长度,到该位置前停止读取数据
     let ary2 = [1, 2, 3, 4, 5, 6, 7, 8];
     //console.log(ary2.copyWithin(2, 0, 6))

     //find 先遍历数组,一项一项的执行,一旦函数返回值是true,停止查找,返回当前项,一直到最后一项还没有返回true,最终结果就是undefined
     console.log(ary2.find(function (item, index, input) {
         //item:当前项,index:索引,input:原数组

         return item == 2;
     }));
     //findIndex返回值是当前项的索引,一直到最后都没有返回true的最终结果就是undefined

     //fill(value,start,end):填充数组的
     //value:必填的,填充的值
     //start:开始填充的位置,默认值0,可选的
     //end:停止填空的位置,可选的,不包括的
     let arr = [1, 2, 3, 4, 5];
     arr.fill("haha", 3, 4);
     //console.log(arr);
     //console.log(arr.fill(5))

     //includes:判断数组中有没有某一项,返回值是true/false
     //console.log(arr.includes(5))

     /*数组遍历*/
     // for....in
     let arr4=[2,2,32,52];
     for(var key in arr4){
         //console.log("索引"+key+"值"+arr3[key]);
     }

     //for...of
     for (let index of arr4){
         //console.log("当前项"+index);//index直接表示当前项的值(从第二项开始)
     }
     for(let index of arr4.keys()){
         //console.log(index);获取当前索引
     }
     for(let [i,e] of arr4.entries()){
         //console.log(i,e);//获取索引跟值
     }

     let sd = [8,7,3,4,5];
     //console.log(sd.sort());//排序
     //console.log(...sd);//将数组变成字符串
     let se = 'kvkfmvkf';
     //console.log([...se]);
     //console.log(Math.max(...sd));//获取数组最大值
     //console.log(Math.max.apply(null, sd));//获取最大值
     let sa1=[1,2,3],sa2=[4,5,6];
     //console.log(sa1.concat(sa2));//拼接数组
     //console.log([...sa1, ...sa2]);//拼接数组

 }
/*二：对象赋值*/
 {
 let {x2,y2,ss} = {x:2,y:45,sd:25}; //赋值的时候键值要一样不然赋不上值
 //console.log(x2, y2,ss);
 let  {x:x1,y:y1,s3} = {x:2,y:45,sd:25};
 //console.log(x1, y1,s3);//这样就可以自定义的变量赋值
 let {m:[m1],n}={m:[1],n:1};
// console.log(m1, n);//赋值的时候结构要一样

    let a1="aa",b1="bb";
    let obj={a1,b1};
    //console.log(obj);
}
/*字符串*/
{
    let str1 = "jhljkk"
    let [x,y]=str1;
    //console.log(x, y);//自动将字符串转换成数组
    let {length}=str1;
   // console.log(Object(str1));
   // console.log(length);
    function fn([x1,y1=1]) {
       // console.log(x1, y1);
    }
    fn([1])//可以作为函数的参数

    let sd = new String("dfsadf");
    //console.log(sd);//变成数组
    /*startsWith(a,b) 以某某开头 第二个参数是位置*/
    /*endsWith(a,b) 以某某结尾 第二个参数是位置*/
    let str2 = "hgydchjc"
    console.log(str2.startsWith("hg"));
    console.log(str2.repeat(2));//将原先的字符串重复n遍
    console.log(str2.includes("hj"));//是否包含
    let sd2 = 'qqq';
    let sd1 = 'ppp';
    let as = `I am ${sd2}${sd1}`;
    //console.log(as);//使用模板

}
/*函数*/
{
    let sd =(X)=>{
        "use strict";
        console.log(X - 0 + 2);
    }
    //console.log(sd(20));

    let sd1 = X=>X;
    console.log(sd1(25));


    function fn2({x=0,y=0}={}) {
        return{x,y}
    }
    //console.log(fn2({x: 1}));

    function fn3({x:x1,y:y1}={x:0,y:0}) {
        return{x1,y1}
    }

   // console.log(fn3({x: 1}));

    /*参数作用域*/
    let n=10,m=20;
    function fn1(x=n,y=m) {
        let n=1,m=2;
        console.log(x, y);//如果没有传参 以作用域外面为准
    }
    //fn1();
    //fn1(2,5);

    let sfn=function () {
        console.log(this);
    };

   // console.log(sfn.name);//获取函数名字

   // console.log((function () {}).name);

    let obj={};
    var sfn1=sfn.bind(obj);//可以改变函数的名字
    sfn1();
    console.log(sfn1.name);//bound sfn

    //箭头函数中this问题;
//箭头函数没有this指向,它里面的this是谁,看他的上一级作用域中的this(保证上一级作用域不是箭头函数)
    let obj2={
        fn:function () {
            console.log(this);
            let f=()=>{
                console.log(this);
            };
            f();
        },
        fn1:()=>{
            console.log(this);
        }
    };
    obj2.fn();//this==obj
    obj2.fn1();
}
/*set用法*/
{  //1.使用构造函数方式创建一个Set的实例
     //2.传进来一个数组,得到有个去重后的类数组(Set实例)
    let set1 = new Set([1, 2, 12, 121, 21, 1, "珠峰", "珠峰", NaN, NaN, true, true]);
    //console.log(set1);//set 对数组去重

   //将set变成数组
    //console.log([...set1]);
    //console.log(Array.from(set1));


    //1.add(),增加,之前没有才可以加,(加在后面)
    //console.log(set1.add(2));//重复的加不上
    //console.log(set1.add('哈哈').add("hehe"));//可以实现链式写法

    //2.has(),判断当前实例中有没有某一项
    //返回值true/false
    //console.log(set1.has(1));
    //console.log(set1.has(10));

    //3.delete(),删除实例中的某一项  返回值true:删除成功,false:删除失败
    //console.log(set1.delete(121));
    //console.log(set1);

    //4.clear(),清空
    //没有返回值,undefined
    //set1.clear();
    //console.log(set1);

    //5.并集
    var arr1=[1,2,3,4,5,6];
    var arr2=[2,4,6,8,10];

    //合并,[...ary1,...ary2]
    //去重 new Set([...ary1,...ary2])
    //变成数组 [...new Set([...ary1,...ary2])];
    //console.log([...new Set([...ary1, ...ary2])]);


    //交集(相同的部分)
    function jj(ary1,ary2) {
        return ary1.filter((item)=>{
            return ary2.includes(item);
        })
    }

    //console.log(jj(arr1, arr2));

    //差集() 去除并集中交集部分
    function cj(ary1,ary2) {
        return bj(ary1,ary2).filter((item)=>{
            return !jj(ary1,ary2).includes(item);
        })
    }

    //console.log(cj(arr1, arr2));

    //遍历set里面的值
    var set2=new Set(["zcd","hweded","ueef","fwd","eqd","n","g"]);
    //console.log(set2);
    //遍历set数据的实例只能遍历value值
    set2.forEach((item,index)=>{
        //item当前项
        //console.log(item, index);
    });

    for(var key of set2.keys()){
        //console.log(key);
    }
    for(var val of set2.values()){
        //console.log(val);
    }
    for(var en of set2.entries()){
        //console.log(en);
    }
}
//map用法
{
    //1.使用构造函数方式创建一个实例
    //2.参数是个数组,数组的每一项都是一个数组,这个数组有两项,第一项作为键key,第二项作为值value
    //3.这里的key键可以是任意数据类型的
    var map1=new Map([[1,"a"],["a","A"],[{name:"珠峰"},"珠峰"],[/\d+/,"正则"]]);
    //console.log(map1);

    //方法
    //get(key)
    //console.log(map1.get("a"));//获取map里面的值

    //set(key,value);
    map1.set(2,"JS");
    //console.log(map1); //添加map里面的值
    //delete,has,clear 删除 是否含有 清除的操作都有

    let ary=[1,2,3,4,5,6];
    //将数组变成Map
    //1,[1]
    //2,[1,2]
    //3,[1,2,3]
    //....
    var map=new Map();
    ary.forEach((item,index)=>{
        map.set(index+1,ary.slice(0,index+1))
    });
    console.log(map);

    //forEach(),keys(),values(),entries();

    map.forEach((val,key,map)=>{
        //val:值,
        //key:键
        //map:原Map实例
    })
    for(var key of map.keys()){
        //key:键
    }
    for(var val of map.values()){
        //val:值,
    }
    for (var [key,val] of map.entries()){
        //val:值,
        //key:键
    }

}
//Symbol 的用法  值是独一无二
//我们不用非要去给变量赋一个字符串的值，去区分它和别的变量的值不同，因为去给每个变量取个语义化而又不同的值是一件伤脑子的事，当我们只需要知道每个变量的值都是百分百不同的即可，这时候我们就可以用Symbol。
{
 let a1 = Symbol.for('s2');
 let a2 = Symbol.for('s2');
  //console.log(a1===a2);//true

  let a3 = Symbol('s2');
  let a4 = Symbol('s2');
  //console.log(a3===a4);//false

 let arr = {
 [a1]:123,
 a1:234,
 a2:345
 };
for(let [i,e] of Object.entries(arr)){
 //console.log(i, e);//直接遍历对象是看不到symbol里面的内容的
 }

 //console.log(Object.getOwnPropertySymbols(arr));//获取对象里面的Symbol内容

 //console.log(Reflect.ownKeys(arr));

    let ss = [1,2,3,12];
    let sd = ss[Symbol.iterator]();
    //console.log(sd.next());
    //console.log(sd.next());
    //console.log(sd.next());
    //console.log(sd.next());
    //console.log(sd.next());
    console.log(sd);

    let s3 = {
        s2:[1,5,6],
        s3:[2,5,8],
        [Symbol.iterator](){
            "use strict";
            let that = this;
            let i = 0;
            let arr = that.s2.concat(that.s3);
            let length = arr.length;
            return{
                next(){
                    if(i<length){
                        return{
                            value:arr[i++],
                            dong:false
                        }
                    }else{
                        return{
                            value:arr[i++],
                            dong:true
                        }
                    }
                }
            }
        }
    }
    //console.log(s3);
    /* for(let key of s3){
     console.log(key);
     }*/

 }
//Rroxy 用法    代管理(可以控制让某些东西能改，某些不让改)
{
 var obj = {
 time:'2018-9-19',
 number:123,
 _r:25
 }
 let rr = new Proxy(obj, {
 //外面在读取对象的时候拦截 后面跟要操作的方法
 get(e, i){
 "use strict";
 return e[i].replace('2018', '2017')
 },
 //外面在设置对象的时候拦截 后面跟要操作的方法
 set(e, i, value){
 "use strict";
 //只让修改number的值
 if (i === 'number') {
 return e[i] = value;
 } else {
 return false;
 }


 },
 //外面在判断对象是否有某属性的时候拦截 后面跟要操作的方法
 has(e, i){
 "use strict";
 //让外边知道有number属性 别的没有
 if (i === 'number') {
 return e[i];
 } else {
 return false;
 }
 },
 //外面在删除对象某属性的时候拦截 后面跟要操作的方法
 deleteProperty(e, i){
 "use strict";
 //带有下划线的可以删除
 if (i.includes('_')) {
 delete e[i];
 } else {
 return e[i]
 }
 }
 });
 rr.time='2020';
 rr.number=3636;
 //console.log(rr);//上面设置了只让修改number的值
 //console.log(rr.time);//上面设置了读取时间的时候把2018换成2017
 //console.log('number' in rr);//上面设置在查看是否有某某属性的时候  就让知道有number
 //console.log('time' in rr);
 delete rr._r;//删除操作   上面也有限制
 //console.log(rr);
 };
//Promise 用法
{
 let aa = function(callback){
 "use strict";
 callback.call();
 }
 aa(function(){
 "use strict";
 console.log(2525);
 })


 let bb = function(){
 "use strict";
 return new Promise(function(as,sd){
 as();
 })
 }
 bb().then(function(){
 "use strict";
 console.log(2525);
 })
 let cc = function(sds){
 "use strict";
 return new Promise(function(as,sd){
 if(sds>6){
 as()
 }else{
 throw new Error('出错了')
 }
 })
 }
 cc(7).then(function(){
 "use strict";
 console.log("值大于6");
 }).catch(function(err){
 "use strict";
 console.log("值小于6出错了",err);
 })
 cc(3).then(function(){
 "use strict";
 console.log("值大于6");
 }).catch(function(err){
 "use strict";
 console.log("值小于6出错了",err);
 })


 }
 {
 /!*图片全部加载后显示*!/
 let sd = function(src){
 "use strict";
 return new Promise((as,sd)=>{
 let img = document.createElement('img');
 img.src=src;
 img.onload=function(){
 as(img);
 }
 img.onerror = function(err){
 sd(err);
 }
 })
 }
 function sf(imgs){
 "use strict";
 console.log(imgs);
 imgs.forEach((img)=>{
 document.body.appendChild(img)
 })

 }
 Promise.all([
 sd('http://img.zcool.cn/community/01f09e577b85450000012e7e182cf0.jpg@1280w_1l_2o_100sh.jpg'),
 sd('http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg'),
 sd('http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg')
 ]).then(sf)



 }
