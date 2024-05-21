<template>
  <i class="sky-icon" :class="{[`sky-icon--${type}`] : type }" :style="customStyles">
    <font-awesome-icon v-bind="filteredProps"/>
  </i>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import  { iconPorps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
  name: 'VkIcon',
  inheritAttrs: false
})
const props = defineProps<iconPorps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>