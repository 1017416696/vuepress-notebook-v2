---
title: CSS_类选择器
---

```html
<h1 class="say">你好</h1>
```

```css
.say {
		color: red;
	}
```

---
class 属性的值可以有多个，需要用 空格 隔开

```html
<h1 class="say big">你好</h1>
```

---

类名不能为纯数字，不能使用中文 

类名要见名知意

---

```html
<div class="topbar">  
  <div class="contaienr">  
    <div class="welcome">  
      <span class="hello"></span>  
    </div>  
  </div>  
</div>
```


```css
.welcome .hello {
	
}
```

如果出现多层级的，最好配合 [[CSS_后代选择器]]  一起使用，这样比较保险 

