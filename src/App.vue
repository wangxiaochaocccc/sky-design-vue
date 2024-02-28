<template>
 <div>
  <h1>button测试</h1>
  <sky-button disabled type="primary" ref="buttonRef">确定</sky-button>
  <h1>resetCss测试</h1>
  <h2>大家啊大家啊大家</h2>
  <h3>大家啊大家啊大家</h3>
  <a href="">大家啊大家啊大家</a>
 </div>
</template>
<script setup lang="ts">
import { ref,onMounted } from 'vue'
import SkyButton from './components/button/Button.vue'
import {ButtonInstance} from './components/button/types'
const buttonRef = ref<ButtonInstance | null>(null)

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref,1111111);
  }
})
</script>

<style>
h1 {
  color:var(--sky-color-primary)
}
</style>

