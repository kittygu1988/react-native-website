---
id: height-and-width
title: 高度与宽度
---

组件的高度和宽度决定了其在屏幕上显示的尺寸。

## 指定宽高

最简单的给组件设定尺寸的方式就是在样式中指定固定的`width`和`height`。React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。

```SnackPlayer name=Height%20and%20Width
import React from 'react';
import { View } from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
    </View>
  );
};

export default FixedDimensionsBasics;
```

这样给组件设置尺寸也是一种常见的模式，比如要求在不同尺寸的屏幕上都显示成一样的大小。

## 弹性（Flex）宽高

在组件样式中使用`flex`可以使其在可利用的空间中动态地扩张或收缩。一般而言我们会使用`flex:1`来指定某个组件扩张以撑满所有剩余的空间。如果有多个并列的子组件使用了`flex:1`，则这些子组件会平分父容器中剩余的空间。如果这些并列的子组件的`flex`值不一样，则谁的值更大，谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间`flex`值的比）。

> 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的`width`和`height`，也没有设定`flex`，则父容器的尺寸为零。其子组件如果使用了`flex`，也是无法显示的。

```SnackPlayer name=Flex%20Dimensions
import React from 'react';
import { View } from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    // 试试去掉父View中的`flex: 1`。
    // 则父View不再具有尺寸，因此子组件也无法再撑开。
    // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    </View>
  );
};

export default FlexDimensionsBasics;
```

## 百分比宽高

如果你想要按比例填充屏幕上某一部分，又不想使用 `flex` 布局，那么可以在组件的`style`中使用**百分比**。与弹性宽高相似，百分比宽高要求父容器有一个明确的尺寸。

```SnackPlayer name=Percentage%20Dimensions
import React from 'react';
import { View } from 'react-native';
const PercentageDimensionsBasics = () => {
  // Try removing the `height: '100%'` on the parent View.
  // The parent will not have dimensions, so the children can't expand.
  return (
    <View style={{ height: '100%' }}>
      <View style={{
        height: '15%', backgroundColor: 'powderblue'
      }} />
      <View style={{
        width: '66%', height: '35%', backgroundColor: 'skyblue'
      }} />
      <View style={{
        width: '33%', height: '50%', backgroundColor: 'steelblue'
      }} />
    </View>
  );
};
export default PercentageDimensionsBasics;
```

当你熟练掌握了如何控制组件的尺寸后，下一步可以[学习如何在屏幕上排列组件了](flexbox.md)。

---

##### 本文档贡献者：[sunnylqm](https://github.com/search?q=sunnylqm&type=Users)(67.86%), [sunnylqm](https://github.com/search?q=sunnylqm&type=Users)(32.14%)
