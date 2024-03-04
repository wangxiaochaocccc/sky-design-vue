<template>
  <div>
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
  </div>
 </template>
 <script setup lang="ts">
 import SkyButton from '../../../src/components/button/Button.vue'

 </script>
 
 <style>
 h1 {
   color:var(--sky-color-primary)
 }
 .button-div {
   margin-bottom: 20px;
 }
 </style>
 
 