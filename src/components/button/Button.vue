<template>
    <button
      ref="_ref"
      class="sky-button"
      :class="{
        [`sky-button--${type}`]:type,
        [`sky-button--${size}`]:size,
        'is-circle':circle,
        'is-plain':plain,
        'is-round':rounded,
        'is-disabled':disabled
      }"
      :disabled="disabled || loading"
      :type="nativeType"
      :autofocus="autofocus"
    >
      <Icon icon="spinner" spin v-if="loading"></Icon>
      <Icon :icon="icon" v-if="icon"></Icon>
      <span>
        <slot/>
      </span>
    </button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { ButtonProps } from './types'
import Icon from '../icon/icon.vue'
import './style.css'

defineOptions({
  name: 'SkyButton'
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref
})
</script>
<style scoped>

</style>