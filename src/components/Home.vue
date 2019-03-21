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
          <el-submenu index="1">
            <template slot="title">
              <span>首页</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">首页</template>
              <el-menu-item index="1-1-1">列表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>用户管理</span>
            </template>
            <el-submenu index="1-4">
              <template slot="title">列表</template>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>列表管理</span>
            </template>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span>房间管理</span>
            </template>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main
      <router-link to="./user/UserList">列表</router-link>
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
    background: #f00;

  }

  .el-col {
    width: 100%;
    border: 0;
  }
</style>
