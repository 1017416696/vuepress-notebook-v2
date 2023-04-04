---
title: CSS_表格独有属性
---


```css
table {
	/* 控制表格列宽，此时表示表格列宽相等，默认值为 auto */
	table-layout: fixed;
	/* 控制单元格间距 */
	border-spacing: 2px;
	/* 合并相邻单元格的边框(此时单元格间距属性就失效啦)，默认值为 seperate */
	border-collapse: collapse;

	/* 隐藏没有内容的单元格(生效的前提是不能合并边框) */
	empty-cells: hide;
}
```
