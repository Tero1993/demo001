<template>
  <div class="header-container" ref="header">
    <div class="cell left-area">
      <div class="back-icon-area">
        <back-icon />
      </div>
    </div>
    <div class="cell title-area">
      <span>历史心情指数</span>
    </div>
    <div class="cell right-area"></div>
  </div>
</template>

<script>
import backIcon from './backIcon.vue'
export default {
  name: 'appHeader',
  components: {
    backIcon
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.header.style.opacity = '1'
      }, 0)
    })
  },
}
</script>

<style scoped>
.header-container {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0.56rem 0.185rem 0 0.185rem;
  align-items: center;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity ease-in 0.4s;
}
.cell {
  position: relative;
}
.left-area {
  flex: 1;
}
.back-icon-area {
  position: relative;
  width: 0.235rem;
}
.title-area {
  font-family: PingFang HK;
  font-style: normal;
  font-weight: 500;
  font-size: 0.2rem;
  color: #2d2f33;
  flex: 3;
  text-align: center;
}
.right-area {
  flex: 1;
}
</style>
