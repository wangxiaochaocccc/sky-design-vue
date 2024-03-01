<template>
    <div class='collapse'>
      <slot/>
    </div>
</template>
<script lang="ts" setup>
import { ref,provide,watch } from 'vue'
import type { nameTypes,CollapseEmits,CollapseProps } from './types'
import {CollapseContextKey} from './types'

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeName = ref<nameTypes[]>(props.modelValue)

// 监听传入的ref值变化，及时更新
watch(() => props.modelValue, () => {
  activeName.value =  props.modelValue
})
const handleClickTitle = (item: nameTypes) => {
  if (props.accrroding) {
    // accroding逻辑
    activeName.value = [item === activeName.value[0] ? '' : item]
  } else {
    // 正常模式
    const index = activeName.value.indexOf(item)
    if (index > -1) {
      // 删除item
      activeName.value.splice(index, 1)
    } else {
      // 添加到数组中
      activeName.value.push(item)
    }
  }
 
  emits('update:modelValue',activeName.value)
  emits('change',activeName.value)
}
// context传递属性
provide(CollapseContextKey, {
  activeName,
  handleClickTitle
})
</script>