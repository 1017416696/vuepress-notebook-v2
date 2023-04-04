---
title: HTML_a标签
---
a 标签中不能再嵌套 a 标签 

## 跳转页面 

target

在新的页签中打开 `_blank`

在当前页签中打开 `_self` ，为默认值 

## 跳转文件 

a 标签可以跳转到网络地址，也可以跳转到本地网页 ，也可以跳转到本地文件(图片、pdf、音频、视频)，因为浏览器本身就支持查看这些文件 

对于浏览器不支持的文件格式，预览文件时会直接触发浏览器的下载功能

如果想跳转到本地图片并强制触发浏览器的下载操作，可以为 a 标签添加 download 属性 ，download 属性的值就是下载文件的默认名

```
<a href="/favicon.ico" download="页签图片">icon图片</a>
```

## 跳转锚点

锚点是页面内跳转的一种技术 

锚点名称区分大小写，且不能包含空格和特殊字符

推荐使用 id 定义锚点 

```html
<a href="#section1">跳转到 Section 1</a>
<a href="#link">跳转到 Link</a>

<!-- 定义的锚点 -->
<h2 id="section1">Section 1</h2>
<a name="link"></a>
```

锚点的特殊用法

```html
<a href="#">回到顶部</a>

<a href="">刷新页面</a>
```

还可以跨页面跳转锚点 (直接跳转到另一个页面定义的锚点)

```html
<a href="./xx.html#atm">回到顶部</a>
```

还可以执行 js 脚本 

```html
<a href="javascript:alert(666);">点我弹窗</a>

<a href="javascript:;">什么都不干</a>
```

## 打开指定应用 

这里是使用特定的 URI scheme 

```html
<a href="tel:123456789">拨打电话</a>

<a href="mailto:example@example.com">发送邮件</a>

<a href="sms:123456789">发送短信</a>
```

:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::

