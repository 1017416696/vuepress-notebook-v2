---
alias: drawer
title: CSS_栅格化布局
---

栅格化(grid)用于网页布局 ，会将网页分为很多==列==，多采用12栅格和 24 栅格，从而实现在不同尺寸下展示不同的布局内容

栅格的数据越多，页面布局就越灵活

[[Vue_Element-UI]] 采用的就是 24 分栏 

在电脑上浏览网页页面布局是一列，在手机上浏览网页页面布局是可能是两列

用行和列的概念布局页面 

栅格化选项

```
-   Extra small (xs) 
- `<768px` 响应式栅格数或者栅格属性对象
- 
-   Small (sm)
- `≥768px` 响应式栅格数或者栅格属性对象
- 
-   Medium (md)
- `≥992px` 响应式栅格数或者栅格属性对象
- 
-   Large (lg)
- `≥1200px` 响应式栅格数或者栅格属性对象
- 
-   Extra large (xl)
- `≥1920px` 响应式栅格数或者栅格属性对象
```


```vue
<template>
  <div>
    <el-row :gutter="15">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <!-- 这里放置一个组件 -->
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <!-- 这里放置一个组件 -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElRow, ElCol } from 'element-ui';

export default {
  components: {
    ElRow,
    ElCol,
  },
};
</script>
```

在极小尺寸屏幕上，一列占24栅格，也就是整个屏幕

在小尺寸屏幕上，一列占 12 栅格，也就是按个屏幕

---

如果使用了 ElementUI 中 drawer 组件，将抽屉占据整个页面的 50%，此时的栅格也是24 

```html
<!--    size 改变抽屉大小-->
<el-drawer  
  :visible.sync="drawer"  
  :show-close="false"  
  size="50%"  
>  
  <el-row>  
    <el-col :span="5">名称</el-col>  
    <el-col :span="16">{{skuDetailInfo.skuName }}</el-col>  
  </el-row>     
</el-drawer>
```
