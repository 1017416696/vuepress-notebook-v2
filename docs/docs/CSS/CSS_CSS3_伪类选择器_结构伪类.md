---
title: CSS3_伪类选择器_结构伪类
---
## fisrt-child (最大的孩子)

所有兄弟元素的第一个元素 

```css
/* 选中 div 的第一个儿子 */
div>p:first-child {  
    color: red;  
}
```

```html
<div>  
    <p>1</p>  
    <p>2</p>  
</div>
```

---

```css
div>p:first-child {  
    color: red;  
}
```

```html
<div>  
    <span>span</span>  
    <p>1</p>  
    <p>2</p>  
</div>
```

此时谁都选不中，因为 div 的第一个儿子是 span 元素 

---

```css
div p:first-child {  
    color: red;  
}
```

```html
<div>  
    <p>test</p>  
    <span>  
        <p>p</p>  
    </span>  
    <p>1</p>  
    <p>2</p>  
</div>
```

![[Pasted image 20230326205138.png]]

---

```css
p:first-child {  
    color: red;  
}
```

选中的是 p 元素，不管 p 元素的父亲是谁，只要你是第一个子元素就行 

---

## nth-child

选中 div 的第三个儿子 p 元素 

```css
div>p:nth-child(3) {  
    color: red;  
}
```

```html
<div>  
    <p>test</p>  
    <p>1</p>  
    <p>2</p>  
    <p>3</p>  
</div>
```


![[Pasted image 20230326211518.png]]

---

```css
/* 选中所有偶数的p元素 */
div>p:nth-child(2n) {  
    color: red;  
}

div>p:nth-child(even) {  
    color: red;  
}

/* 选中所有奇数的p元素 */
div>p:nth-child(2n+1) {

}
```


```html
<div>  
    <p>1</p>  
    <p>2</p>  
    <p>3</p>  
    <p>4</p>  
</div>
```

---

![[Pasted image 20230401151010.png]]


```css
li:nth-child(2n+1) {
	float: left;
}
li:nth-child(2n) {
	float: right;
}
```


--- 

选中前五个 p 元素 

```
div>p:nth-child(-n+5) {  
    color: red;  
}
```

>nth-child 中的公式必须是 an+b 的形式 
>n 从 0 开始计算 

## first-of-type (最大的儿子/女儿)

选中同类型兄弟的第一个元素 

```css
div>p:first-of-type {  
    color: red;  
}
```

```css
<div>  
    <span>span</span>  
    <p>1</p>  
    <p>2</p>  
    <p>3</p>  
    <p>4</p>  
</div>
```

![[Pasted image 20230326212740.png]]

## nth-of-type

选中同类型兄弟的第n个元素 

```
div>p:nth-of-type(2) {  
    color: red;  
}
```

```
<div>  
    <span>span</span>  
    <p>1</p>  
    <p>2</p>  
    <p>3</p>  
    <p>4</p>  
</div>
```

![[Pasted image 20230326213014.png]]

## nth-last-child 

倒数第几个元素 

## nth-last-of-type 

倒数同类型的兄弟

## :root

```css
:root {
	background-color: gray
}
```

`:root` 等价于 `html`，选中的是 html 根元素

