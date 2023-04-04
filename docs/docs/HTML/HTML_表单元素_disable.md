---
title: HTML_表单元素disable
---
表单元素才会有 `disable` 属性，如 `input` 和 `button` ，该属性用于禁用该元素的交互能力 

`a` 标签是没有 `disable` 属性的，如果想要禁用 `a` 标签的交互能力，可以使用 CSS 控制其样式 

```css
a.disabled {
  color: gray;
  cursor: default;
  text-decoration: none;
  pointer-events: none;
}

```

```html
<a href="#" class="disabled">这是一个禁用的链接</a>
```

