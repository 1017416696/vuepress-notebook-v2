---
title: CSS_盒子模型
---
![[Pasted image 20230329095115.png|300]]

![[Pasted image 20230329095033.png|300]]

![[Pasted image 20230317165218.png]]
## content 

一般设置的宽度和高度都是给内容区设置的宽高

## padding 

内边距，也称补白

如果盒子有背景，内边框的区域也是可以填充的 

## border 

边框 

如果盒子有背景，边框的区域也是可以填充的 

---

盒子的大小= content + 2 X padding + 2 X border 

最终盒子的大小是使用开发者工具显示出的大小 

![[Pasted image 20230329165629.png]]

---

## margin 

外边距 

margin 只能影响盒子的位置，不能影响盒子的大小 

> margin 是否影响盒子的大小，需要知道盒子是否有宽度
> 如何盒子width 的宽度固定了，则 margin 不会影响盒子大小 
> 如何未给定盒子的 width，则 margin 会影响盒子的大小 

[[JavaScript_元素偏移量_offset]]


