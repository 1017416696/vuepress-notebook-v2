---
title: H5_input标签新增type
---
# input标签新增type

date：使用浏览器本地的日期选择器来选择日期；

```html
<form>
  <label for="date-input">选择日期：</label>
  <input type="date" name="date" value="2022-01-01"><br>

  <label for="month-input">选择月份：</label>
  <input type="month" id="month-input" name="month" value="2022-01"><br>

  <label for="week-input">选择周：</label>
  <input type="week" id="week-input" name="week" value="2022-W01"><br>

  <label for="time-input">选择时间：</label>
  <input type="time" id="time-input" name="time" value="12:00"><br>
  
  <label for="datetime-input">选择日期和时间：</label>
  <input type="datetime-local" id="datetime-input" name="datetime" value="2022-01-01T12:00"><br>

  <input type="submit" value="提交">
</form>

```

   ![[Pasted image 20230402113149.png]]
   
 email：用于输入电子邮件地址，浏览器会自动验证输入是否符合电子邮件地址的格式；表单提交时会验证格式
 
url：用于输入 URL，浏览器会自动验证输入是否符合 URL 的格式；表单提交时会验证格式

search：用于输入搜索关键字，输入关键词后有一个清空的按钮

```
<input type="search" />
```


![[Pasted image 20230402112036.png]]

number：输入数字，可以设置 `min` 和 `max` 属性来限制数值的最小值和最大值。另外，可以使用 `step` 属性设置每次增加或减少的数值。表单提交时会验证格式

```
<input type="number" id="quantity" name="quantity" min="1" max="100" step="2">
```


 `tel` 属性用于指定输入框应该包含电话号码，多用于手机端，在手机上只会弹出数字键盘，表单提交时不会验证格式

```html
<input type="tel" name="phone-number" required>
```

range 属性，指定了滑动条的允许值的范围，可以通过 `min` 和 `max` 属性来设置

```
<input type="range" min="0" max="100" step="1">
```

![[Pasted image 20230402113551.png]]

color 属性，可以在拾色器中选择颜色 

```html
<input type="color" value="#ff0000">
```

![[Pasted image 20230402113854.png]]
