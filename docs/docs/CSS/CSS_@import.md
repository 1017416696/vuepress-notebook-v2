---
title: CSS_@import
---
## 用法 

@import 规则可以将样式表导入另一张样式表中

@import 必须放在文档的顶部

## 实例 

把 "navigation.css" 样式表导入当前样式表中：

```css
@import "navigation.css"; /* 使用字符串 */
```

```css
@import url("navigation.css"); /* 使用 url */
```

使用 url 还可以导入网络上的在线样式 

```css
@import url("https://at.alicdn.com/t/c/font_3165940_3ff8j13rmov.css"); /* 使用 url */
```

将样式文件导入到组件样式中

```vue
<template>
	...
</template>

<script>
import './styles.css';

export default {
  name: 'MyComponent',
  data() {
    return {

    };
  },
};
</script>

<style scoped>
@import './styles.css';
</style>

```

