---
title: CSS_长度单位
---
[[CSS_像素_px]]

[[CSS_百分比]]

## em 

相对于当前元素或者父元素或祖先元素的 font-size 的倍数

如果自身元素没有写 font-size，则会找其父亲的 font-size 

如果最后都没有找到，则就用浏览器默认的字体大小 

## rem

r 表示 root ，根元素就是 html 这个元素 

也就是相当于 html 这个根元素的 font-size 的倍数 

---

在 CSS 中必须写长度单位，因为有很多单位表示长度，如果不写，则浏览器就不知道应该加什么单位 

