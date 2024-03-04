---
title: Button | tj-button
description: 用的操作按钮常
---

# Button 按钮
常用的操作按钮。

## 基础用法
使用'type'、'plain'、'cilcle'和'round'来定义按钮样式。

<preview path="../demo/button/basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## 属性值
|Name|Description|Type|Default|
|:----|:----|:----|:----|
|size|button size|enum - 'large'\| 'small'|—|
|type|button type|enum - 'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'|—|
|plain|determine whether it's a plain button|boolean|false|
|round|determine whether it's a round button|boolean|false|
|circle|determine whether it's a circle button|boolean|false|
|loading|determine whether it's loading|boolean|false|
|disabled|disable the button|boolean|false|
|icon|icon component|string|—|
|autofocus|same as native button's autofocus|boolean|false|
|native-type|same as native button's type|enum - 'button'\| 'submit'\| 'reset'|button|
