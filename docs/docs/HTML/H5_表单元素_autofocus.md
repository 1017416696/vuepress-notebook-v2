---
title: H5_表单元素autofocus
---
当页面加载时应该自动将焦点放在哪个元素上

`autofocus`属性可以在以下HTML元素中使用：

-   `<button>`
-   `<input>` (除了`hidden`类型的)
-   `<select>`
-   `<textarea>`
-   `<keygen>`
-   `<command>`

>`autofocus`属性应该在页面中只出现一次，因为多个元素具有`autofocus`属性可能会导致不确定的行为 

---

在 js 中，使用 `focus()` 方法将焦点设置到特定的HTML元素上 

```js
const myInput = document.getElementById("myInput");
myInput.focus();
```

