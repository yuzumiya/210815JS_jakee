// // // const,let 変数宣言
// // var val1 = "val変数";

// // console.log(val1);

// // //　var変数は上書き可能

// // var val1 = "上書きしました";

// // console.log(val1);
// let num1 = "izawa";

// console.log(num1);

// num1 = "fukura";

// console.log(num1);

// //let 再宣言はできない。上書きされる時は使う
// //var 再宣言もできてしまう。

// const var4 = {
//   name: "ふくら",
//   age: 28
// };

// console.log(var4);

// var4.name = "伊沢";
// var4.address = "tokyo";

// console.log(var4);

// //constで定義したオブジェクトはプロパティの変更が可能！

// const var5 = ["dog", "cat"];

// console.log(var5);

// var5[0] = "bird";

// var5.push("monkey");

//使用するのはほぼconstとなる！
// 動的に値が変わるものはstateが使われる

//template 文字列

// const name = "yuzu";
// const age = 33;

// const message = "私の名前は" + name + "です。年齢は" + age + "です";

// // console.log(message);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;

// console.log(message2);

// function hunc1(str) {
//   return str;
// }

// console.log(hunc1("1つ目です"));

// const func1 = function (str) {
//   return str;
// };

//アロー関数で書き換え
//引数が1つの時はカッコを省略可能

//中の処理が１行で終わるなら{}returnは省略可能

// const func2 = (str) => str;

// console.log(func2(444));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }

// const func3 = (num1,num2) => num1 +num2;

// console.log(func3(1,4));

//分割代入
// オブジェクトの場合

// const myProfile = {
//   name: "yuzu",
//   age: 33
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;

// const { name, age } = myProfile;

// const message1 = `名前は${name}です。年齢は${age}です。`;

// console.log(message1);

// // //配列にも使える
// const musics = ['cali≠gari','onmyoza','mucc']

// const [m0,m1,m2] = musics;
// const message = `私の好きな音楽は${m0}と${m1}、それから${m2}です。`;

// console.log(message);

//スプレッド構文...

// const arr1 = [1,2,3,4,5,6,7,8,9,10];

// const arr2 = [1,2,3,4]

// // console.log(arr1);

// // console.log(...arr1);

// const sumFunc4 = (num1,num2,num3,num4) => {
//   console.log(num1 + num2 +num3+ num4);
// }

// // sumFunc(arr1[0],arr1[1],arr1[2]);

// sumFunc4(...arr2);

// const arr2 = [1,2,3,4,5];
// // const [n1,n2,n3,n4,n5] = arr2;

// //スプレッド構文を使ってまとめて受け取る

// const [n1,n2,...arr3] = arr2

// console.log(`${n1}と${n2}と${arr3}が入っています`);

// const arr4 =[10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];

// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4,...arr5];

// console.log(arr7);

// const arr8 = arr4
// console.log(arr8);

// arr8[0] = 82;
// console.log(arr4);
// // console.log(arr6);

// const musics = ['cali≠gari','onmyoza','mucc'];

// // for (let n=1;n <= musics.length;n++) {
// //   console.log(`${n}番目は${musics[n-1]}です。`);
// // }

// // const message = (name) => {
// //   console.log(`${name}です`)
// // }

// const map1 = musics.map((music,n)=> {
//   return `${n+1}番目は${music}です;`
// });
// console.log(map1);

// musics.map((name)=> console.log(name));

// const nums = [1,2,3,4,5];

// const oddNums = nums.filter((num) => {
//   return num % 2 !== 0
// })
// console.log(oddNums);

const myname = "yuzu";
const namesArr = ["robin", "cook", "yuzu"];
const otherArr = namesArr.filter((name) => {
  return name !== "yuzu";
});

const myNameArr = namesArr.filter((name) => {
  return name === myname;
});

console.log(otherArr);

const mrArr = otherArr.map((name) => {
  return `Mr.${name}`;
});

console.log(mrArr);
console.log(myNameArr);

const allArr = [...mrArr, ...myNameArr];
console.log(allArr);
