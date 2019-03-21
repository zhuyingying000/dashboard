<template>
  <el-container>
    <el-aside width="200px">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <router-link to="/" tag="span">
            <el-menu-item>首页</el-menu-item>
          </router-link>

          <router-link to="/UserList" tag="span">
            <el-menu-item>列表</el-menu-item>
          </router-link>

          <router-link to="/QueueList" tag="span">
              <el-menu-item >队列管理</el-menu-item>
          </router-link>

          <router-link to="GameList" tag="span">
              <el-menu-item >游戏</el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .el-container {
    height: 100%;
  }

  .el-header {;
    background: pink;
  }

  .el-aside {
    background: #545c64;
    /*background: aqua;*/
  }

  .el-main {
    background: #979797;

  }

  .el-col {
    width: 100%;
    border: 0;
  }
</style>
