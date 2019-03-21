<template>
  <div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="昵称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="shell"
      label="shell">
    </el-table-column>
    <el-table-column
      prop="rank"
      label="rank">
    </el-table-column>
  </el-table>

  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400">
  </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '小白',
        shell: 100,
        rank: 3
      }, {
        date: '2016-05-04',
        name: '小黄',
        shell: 700,
        rank: 1
      }, {
        date: '2016-05-01',
        name: '小黑',
        shell: 600,
        rank: 2
      }, {
        date: '2016-05-03',
        name: '王花花',
        shell: 10,
        rank: 4
      }],
      currentPage: 10
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>
  .el-pagination{
    margin-top:20px;
  }
</style>
