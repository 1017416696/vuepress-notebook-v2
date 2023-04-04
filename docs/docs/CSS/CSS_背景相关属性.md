---
title: CSS_背景相关属性
---

```css
/* 背景色默认为透明的 */
background-color: transparent;

/* 背景图片 */
background-img: url('./test.jpg');

/* 设置背景图片重复方式 */
background-repeat: repeat/no-repeat/repeat-x/repeat-y;

/* 控制背景图片离背景图片的显示原点的位置 */
background-position: left/center/right top/center/bottom;
/* x,y */
background-position: 10px 20px;

/* 复合属性，不区分顺序 */
background: skyblue url(./test.jpg) no-repeat 300px;
```

背景图片默认是从 padding 值开始铺的，不是从内容区域 ，详细的内容可查看 [[CSS3_背景属性_background-origin_背景图原点]]

