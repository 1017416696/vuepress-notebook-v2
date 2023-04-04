---
title: HTML_自定义属性
---
可以给任何标签添加自定义属性，用这些自定义属性存储额外的信息 

## 创建自定义属性 

在标签中添加以“data-”开头的属性

```html
<div data-color="red">This is a custom div element</div>
```

实例 [[22_完成三级联动路由跳转]]

## 访问自定义属性 

```js
var div = document.querySelector('div');

//访问属性时不需要加 'data-'
var color = div.dataset.color; //red
```
