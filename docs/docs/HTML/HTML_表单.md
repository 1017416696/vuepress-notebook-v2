---
title: HTML_表单
---
## 基本结构 

可直接通过输入框去调用百度和京东的搜索接口 

```html
<!-- s 代表 search -->  
<form action="https://www.baidu.com/s" target="_blank">  
  <!-- name 属性的值是特定的，是百度后端工程师指定的 wd 代表 word-->  
<input type="text" name="wd" autocomplete="off" />  
  <button>搜索</button>  
</form>  
  
<form action="https://search.jd.com/Search">  
  <input type="text" name="keyword" />  
  <button>搜索</button>  
</form>
```

> 表单 action 如果为空，就提交给自己。提交后地址栏会在原来的基础上加上表单中的键值对作为查询字符串 

![[Pasted image 20230401100611.png]]

这样的结构最好用一个 form 表单包裹着

```html
<form action="#">  
  <input type="text" name="keyword" />  
  <button>搜索</button>  
</form>

```


## 输入框 

`value` 属性是输入框的默认值 

`maxlength` 属性是输入框能输入的最大长度 

```html
<input type="text" name="account" value="zhangsan" maxlength="10">
```


## 单选框 

单选框一定要有 name 和 value 属性 

name 属性是让所有的单选框为一组，value 属性的值是最终表单提交的值 

```
<input type="radio" name="gender" value="male" />

<input type="radio" name="gender" value="female" />
```

## 复选框 

```
<input type="checkbox" name="hobby" value="smoke" /> 抽烟

<input type="checkbox" name="hobby" value="drink" /> 喝酒

<input type="checkbox" name="hobby" value="perm" /> 烫头
```

表单携带复选框数据的格式 `hobby=smoke&hobby=drink&hobby=perm`

## 隐藏域 

通过隐藏域 ，可以隐藏一些需要传给服务器的参数 

在页面中看不到该元素 ，但是审查源代码可以看到该元素 

```
<input type="hidde" name="xxx" value="123">
```

## 确认按钮 

在表单中确认按钮有两种写法 

一种是直接在表单中写 button 标签，其默认类型就是 submit 

```
<button type="submit">确认</button>
```

第二种是下面这种 

```
<input type="submit" value="确认" />
```

> 注意 
> submit 类型的 input 不要写 name 属性 
> button 按钮也不需要加 name 属性 

## 重置按钮 

```
<input type="reset" value="重置" />

<button type="reset">重置</button>
```

## 普通按钮 

表单中定义普通按钮 

```
<button type="button">普通按钮</button>

<input type="button" value="普通按钮" />
```

## 文本域 

```
<textarea name="other" cols="30" rows="10"></textarea>
```

## 下拉框 

```
<select name="place">
	<option value="粤">广东</option>
</select>
```

表单中携带的数据为 `place=粤`

## label

for 和 id 对应 ，for 属性起到关联作用 

```html
<label for="username">用户名</label>

<input type="text" id="username" />

<!-- 两种方式都行 -->

<label>
	用户名 
	<input type="text" id="username" />
</label>
```

点击"用户名"标签，可以获取输入框的焦点  

## fieldset 和 legend

fieldset 可以为表单控件进行分组， legend 用于设置分组的标题
