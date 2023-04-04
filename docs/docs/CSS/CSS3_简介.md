---
title: CSS3_简介
---
## Vendor prefix

私有前缀或者供应商前缀

供应商前缀（vendor prefix）是指CSS属性名称前缀，用于指示不同浏览器厂商对CSS属性的支持情况

Webkit内核浏览器使用"-webkit-"，如 Chrome、Safari和 Edge

Mozilla Firefox浏览器使用"-moz-"

Opera浏览器使用"-o-"

有了供应商前缀，就可以在不同的浏览器中显示每个浏览器支持的属性 

`-webkit-border-radius: 20px;`、`-moz-box-shadow`、`-o-transition`

---

检查 c3 兼容性网站 

```
https://caniuse.com/
```

![[Pasted image 20230402170709.png]]

从 Chrome 的第4个版本一直到最新版 114 都支持 flex 属性 


---

这些私有前缀一般不手动写，构建工具可以帮助我们写 
