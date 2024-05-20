<template>
 <div>
  <h1>button测试</h1>
  <div class="button-div">
    <sky-button disabled ref="buttonRef">确定</sky-button>
    <sky-button rounded ref="buttonRef">确定</sky-button>
    <sky-button circle ref="buttonRef">确定</sky-button>
    <sky-button plain ref="buttonRef">确定</sky-button>
  </div>
  <div class="button-div">
    <sky-button type="primary">确定</sky-button>
    <sky-button  type="info">确定</sky-button>
    <sky-button type="success">确定</sky-button>
    <sky-button  type="warning">确定</sky-button>
    <sky-button  type="danger">确定</sky-button>
  </div>
  <div class="button-div">
    <sky-button type="primary" size="small">确定</sky-button>
    <sky-button  type="info" size="large">确定</sky-button>
  </div>
  <h1>collapse测试</h1>
  <Collapse v-model="openValue" accrroding> 
    <item name="a">
      <template #title>
        <h1>我是标题</h1>
      </template>
      <div>我是内容</div>
    </item>
    <item name="b" title=">我是标题2">
      <div>我是内容2</div>
    </item>
    <item name="c" title=">我是标题3" disabled>
      <div>我是内容3</div>
    </item>
  </Collapse>
  {{ openValue }}
  <icon icon="comment"></icon>
 </div>
</template>
<script setup lang="ts">
import { ref,onMounted } from 'vue'
import SkyButton from '@/components/button/Button.vue'
import { ButtonInstance } from '@/components/button/types.ts'
import Collapse from '@/components/collapse/collapse.vue'
import Item from '@/components/collapse/collapse-item.vue'
import Icon from '@/components/icon/icon.vue'

const buttonRef = ref<ButtonInstance | null>(null)
const openValue = ref(['a'])
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
.button-div {
  margin-bottom: 20px;
}
</style>

