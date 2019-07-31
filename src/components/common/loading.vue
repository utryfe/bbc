<template>
  <div class="loadingWrp">
    <span class="fa fa-spinner fa-pulse"></span>
  </div>
</template>

<style scoped>
.loadingWrp {
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
}
.loadingWrp span {
  margin: -2.5rem 0 0 -2.5rem;
  font-size: 5rem;
  color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
