<template>
  <div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="MaxRank"
      label="MaxRank"
      width="180">
    </el-table-column>
    <el-table-column
      prop="MinRank"
      label="MinRank"
      width="180">
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
  name: 'QueueList',
  data () {
    return {
      tableData: [{
        MaxRank: 3,
        MinRank: 17
      }, {
        MaxRank: 13,
        MinRank: 14
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
