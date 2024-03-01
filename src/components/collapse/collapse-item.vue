<template>
    <div 
      class='collapse-item' 
      :class="{
        'is-disabled':disabled
      }"
    >
      <div class="collapse-item__title" :id="`collapse-title-${name}`" @click="handleClick">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="collapse-item__content" :id="`collapse-content-${name}`" v-show="isActive">
        <slot></slot>
      </div>
    </div>
</template>

<script setup lang="ts">
import {inject,computed} from 'vue'
import type { CollapseItemProps } from './types'
import {CollapseContextKey} from './types'
const props = defineProps<CollapseItemProps>()

const collapseContext = inject(CollapseContextKey)

const isActive = computed(() => collapseContext?.activeName.value.includes(props.name))
const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleClickTitle(props.name)
}
</script>
<style>

</style>