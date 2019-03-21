<template>
  <div class="home">
    <ChartList chart-id="myChart"/>
  </div>
</template>

<script>
import ChartList from './common/ChareList'

export default {
  name: 'HomeView',
  components: {
    ChartList
  }
}
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }
</style>
