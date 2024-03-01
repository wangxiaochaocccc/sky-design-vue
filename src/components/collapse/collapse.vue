<template>
    <div class='collapse'>
      <slot/>
    </div>
</template>
<script lang="ts" setup>
import { ref,provide } from 'vue'
import type { nameTypes } from './types'
import {CollapseContextKey} from './types'

const activeName = ref<nameTypes[]>([])

const handleClickTitle = (item:nameTypes) => {
  const index = activeName.value.indexOf(item)
  if (index > -1) {
    // 删除item
    activeName.value.splice(index, 1)
  } else {
    // 添加到数组中
    activeName.value.push(item)
  }
}
// context传递属性
provide(CollapseContextKey, {
  activeName,
  handleClickTitle
})
</script>