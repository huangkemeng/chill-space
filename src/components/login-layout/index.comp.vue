<script lang="ts" setup>
</script>

<template>
  <div class="login-bg w-screen h-screen flex flex-col justify-start items-center">
    <div class=" w-1/3">
     <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-bg {
  background-image: url("@/assets/images/login-bg.jpg");
  background-size: cover;
}
</style>