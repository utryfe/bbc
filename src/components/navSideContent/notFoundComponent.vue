<template>
  <div class="nsc-commonWrp">
    <div class="notFoundBody">
      <img src="../../assets/img/404.png" />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // enter some data
    };
  },
  methods: {
    // put some function here
  }
};
</script>

<style scoped>
.notFoundBody {
  width: 100%;
  height: 100%;
}
.notFoundBody img {
  width: 240px;
  height: 260px;
  position: absolute;
  margin-left: -120px;
  margin-top: -150px;
  left: 50%;
  top: 50%;
  user-select: none;
}
.notFoundBody h1 {
  margin-top: 120px;
  margin-left: -80px;
  position: absolute;
  left: 50%;
  top: 50%;
  font-family: "幼圆", serif;
  user-select: none;
}
</style>
