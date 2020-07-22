let demo = document.querySelector("#demo");
let string = `
你好，我是一名前端新人
接下来我要加样式了
我要加的样式是
body{
    color:red;
}`;
let string2 = "";
console.log(string.length);
let n = 0;

let step = () => {
  setTimeout(() => {
    console.log(n);
    if (string[n] === "\n") {
      //如果是回车，就不照搬
      string2 += "<br>";
    } else {
      //如果不是回车就照搬
      string2 += string[n];
    }
    demo.innerHTML = string2;
    if (n < string.length - 1) {
      //不是最后一个,就继续
      n += 1;
      step();
    } else {
      //n是最后一个
    }
  }, 100);
};
step();
