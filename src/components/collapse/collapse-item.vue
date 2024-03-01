<template>
    <div 
      class='collapse-item' 
      :class="{
        'is-disabled':disabled
      }"
    >
      <div class="collapse-item__title" :id="`collapse-title-${name}`">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="collapse-item__content" :id="`collapse-content-${name}`">
        <slot></slot>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from './types'

defineProps<CollapseItemProps>()
</script>
<style>

</style>