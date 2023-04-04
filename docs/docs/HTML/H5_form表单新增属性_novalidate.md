---
title: H5_form表单新增属性novalidate
date: 2023-04-04 15:44
---

不让 form 表单进行校验，表单中的所有校验控件都失效


```html
<form action="/contact" method="post" novalidate>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <br>
  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>
  <br>
  <button type="submit">Send</button>
</form>

```
