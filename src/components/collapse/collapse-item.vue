<template>
    <div 
      class='collapse-item' 
      :class="{
        'is-disabled':disabled
      }"
    >
      <div 
        class="collapse-item__title" 
        :class="{
          'is-disabled':disabled,
          'is-active':isActive
        }"
        :id="`collapse-title-${name}`" 
        @click="handleClick">
        <slot name="title">{{ title }}</slot>
      </div>
      <Transition name="fade" v-on="TransitionEvents">
        <div class="collapse-item__wrapper" v-show="isActive">
          <div class="collapse-item__content" :id="`collapse-content-${name}`" >
            <slot></slot>
          </div>
        </div>
      </Transition>
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
// 动画
const TransitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) { 
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>
<style>

</style>