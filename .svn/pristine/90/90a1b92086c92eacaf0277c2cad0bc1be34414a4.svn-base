<style lang="scss" scoped>
@import '~@/styles/mixins', '~@/styles/variables';
</style>

<template>
  <div class="container" ref="container"></div>
</template>

<script>
import AMap from 'amap'
export default {
  mounted () {
    const map = new AMap.Map(this.$refs.container, {
      zoom: 10,
      center: [116.39,39.9]
    })
  }
}
</script>
