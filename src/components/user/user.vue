<template>
  <div class="user">
  	<h1>{{ message.a }}</h1>
  	<h1>{{ message.b }}</h1>
  	<h1 @click="showMsg">传值给父组件</h1>
  	<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="balance"
      label="余额"
      width="120">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话号码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="coupon"
      label="优惠券"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
	name:'user', 
	data() {
		return {
			tableData: [{
				id: 2,
				name: '王小虎',
				balance: 1.3,
				phone: 200333,
				coupon:3
			},{
				id: 2,
				name: '王小虎',
				balance: 1.3,
				phone: 200333,
				coupon:3
			},{
				id: 2,
				name: '王小虎',
				balance: 1.3,
				phone: 200333,
				coupon:3
			},{
				id: 2,
				name: '王小虎',
				balance: 1.3,
				phone: 200333,
				coupon:3
			}]
		}
	},
	props : [
		'message'
	],
	mounted () {
	},
	methods : {
		handleClick(row) {
			console.log(row);
		},
		showMsg() {
			this.$emit("readMsg","成功传值");
		}
	}
}
</script>

<style>
	
</style>
