<template>
    <i class=''>
      <font-awesome-icon v-bind="$props"/>
    </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { iconPorps } from './types'

defineOptions({
  name: 'skyIcon',
})
defineProps<iconPorps>()
</script>