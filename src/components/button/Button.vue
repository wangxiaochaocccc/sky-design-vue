<template>
    <button
      class="sky-button"
      :class="{
        [`sky-button--${type}`]:type,
        [`sky-button--${size}`]:size,
        'is-circle':circle,
        'is-plain':plain,
        'is-rounded':rounded,
        'is-disabled':disabled
      }"
      :disabled="disabled"
      :type="nativeType"
      :autofocus="autofocus"
    >
      <span>
        <slot/>
      </span>
    </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types'

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})
</script>
<style scoped>

</style>