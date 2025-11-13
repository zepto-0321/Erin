# erin.js
## どこでもえーりんの助けが呼べる！！
その名の通りです。
とっても簡単に使えます。
`Erin`クラスには2つの関数が今のところ備わっています。
`Erin`クラスは`static`クラスです。

### 例
```html
<!DOCTYPE HTML>
<html>
  <head><meta charset="utf-8"></head>
  <body>
    <script src ="https://cdn.jsdelivr.net/gh/zepto-0321/Erin@v1.0.0/erin.js"></script>
    <script src ="hoge.js"></script>
  </body>
</html>
```
```js
//hoge.js
//20pxでえーりんを召喚
Erin.createErin(20);
```
### 例2
```html
<div class = "helpMe"></div>
```
```js
//helpMeの位置に20pxでえーりんを召喚
Erin.createAllErinsOnClass("helpMe",20);
```
