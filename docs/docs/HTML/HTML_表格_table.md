---
title: HTML_表格_table
---
## 基本知识 

表格标题 `<caption>`，表格头部 `<thead>`，表格主体 `<tbody>` ，表格脚注 `<tfoot>`

表格头部每一行用 `<tr>` ，每个单元格用 `<th>`

表格主体每一行用 `<tr>` ，每个单元格用 `td` (data)

表格脚注每一行用 `<tr>` ，每个单元格用 `td` (data)

## 常用属性 

### 表格属性 

表格边框 

```
<table border="1"></table>
```

>如果 border 的值大于1，则只能控制表格外边框的粗细，内边框还是 1 px(单元格的粗细)

表格宽度和高度 

```
<table width="xx" height="xx"></table>
```

> 调整表格的高度，表头和脚注部分的高度不会变化 
> 这里的表格高度是表格的最小高度 

单元格间距 

```
<table cellspacing="0"></table>
```


![[Pasted image 20230321100648.png|300]]

### 表头属性 

`align` 为水平对其方式，默认为 center 

`valign` 为垂直对齐方式，默认为 middle

```
<thead height="50" align="center" valign="middle"></thead>
```

### 表格主体属性 

和表头属性一致，但是 height 属性的高度如果想要有效果，其高度值加上表头和脚注的高度需要大于整个表格的高度 

## 脚注属性 

脚注属性和表头属性一致 

### tr 属性 

每一行的属性和表头属性一致 

## 跨行和跨列 

span也有跨度的意思，colspan 就是跨列 

