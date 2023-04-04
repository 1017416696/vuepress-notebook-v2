---
title: H5_表单元素autocomplete
---
autocomplete 是`<input>` 标签的属性 ，但不能写在密码上 

autocomplete 属性在 textarea 标签上不起作用

该属性表示是否自动填充表单字段 ，而且还可以指定填充字段的类型 

```html
<input type="text" autocomplete="on">
```


该属性默认值为 `on` ，如果想关闭自动填充功能，设为 `off` 即可

![[Pasted image 20230303152746.png]]

```
自动填充表单字段类型:

-   "name"：表示自动填充姓名或全名
-   "given-name"：表示自动填充名字或第一个名字
-   "family-name"：表示自动填充姓或姓氏
-   "email"：表示自动填充电子邮件地址
-   "tel"：表示自动填充电话号码
-   "address-line1"：表示自动填充地址的第一行
-   "address-line2"：表示自动填充地址的第二行
-   "address-level1"：表示自动填充地址的州或省份
-   "address-level2"：表示自动填充地址的城市或城镇
-   "postal-code"：表示自动填充邮政编码
-   "country"：表示自动填充国家或地区

不同的浏览器可能会以不同的方式支持这些类型
```

>如果想支持这一功能，需要开启浏览器的保存地址的功能 

![[Pasted image 20230402104032.png]]
