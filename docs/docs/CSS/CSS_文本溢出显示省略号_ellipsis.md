---
title: CSS_文本溢出显示省略号_ellipsis
---
`text-overflow: ellipsis` is a CSS property that allows text to be truncated with an ellipsis ("...") when it overflows its container

It is often used in combination with the `white-space` and `overflow` properties to control how text is displayed.

当文本溢出容器时，该属性就能将被截断的文本用省略号代替

该属性经常和 `white-space` 与 `overflow` 结合使用去控制文本的显示 

```css
.container {
  width: 200px;
  white-space: nowrap; /* prevents text from wrapping */
  overflow: hidden; /* hides overflow text */
  text-overflow: ellipsis; /* adds ellipsis at end of truncated text */
}

```

[[单词_ellipsis_省略号]] 
