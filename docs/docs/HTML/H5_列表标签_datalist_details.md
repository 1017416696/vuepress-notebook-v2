---
title: H5_列表标签datalist和details
---
## datalist 

`<datalist>` 元素可以与 `<input>` 元素一起使用，可以提供一个下拉列表，以供用户选择输入框中的值

`<datalist>` 元素主要是识别关键字的，输入的内容在 value 中存在，就会提示完整的内容 

```
<form action="#">  
  <input type="text" list="mydata">  
  <button>搜索</button>  
</form>  
<datalist id="mydata">  
  <option value="周杰伦">周杰伦</option>  
  <option value="周冬雨">周冬雨</option>  
  <option value="马冬梅">马冬梅</option>  
  <option value="温兆伦">温兆伦</option>  
</datalist>
```

![[Pasted image 20230401163819.png]]

这种应用场景类似于搜索引擎给的搜索提示

![[Pasted image 20230401163747.png|300]]

## details 

用于创建一个可视/隐藏的详细信息区域

`<details>`内置了一个`<summary>`元素用于添加总结内容，而且它们都是可以通过 JavaScript 控制开启或关闭

```
<details>
  <summary>点击我查看更多</summary>
  <p>这是一个详细信息，可以包含各种形式的 HTML 元素，比如段落、图像、列表等等。</p>
</details>
```

![[Pasted image 20230401164237.png]]


