<template>
  <div class="admin">
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
      prop="password"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="permission"
      label="权限"
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
	name:'admin', 
	data() {
		return {
			tableData: [{
				id: 2,
				name: '王小虎',
				password: '123',
				permission: 200333
			},{
				id: 3,
				name: '王小虎',
				password: '123',
				permission: 200333
			},{
				id: 4,
				name: '王小虎',
				password: '123',
				permission: 200333
			},{
				id: 5,
				name: '王小虎',
				password: '123',
				permission: 200333
			}]
		}
	},
	created () {
 //  	var params = "name=" + this.ruleForm.name + "&password=" + this.ruleForm.password
	// axios.post("api/LoginServlet", params).then(res => {
	// 	console.log('res');
	// 	console.log(res);
	// }).catch(error => {
	// 	onsole.log("error", error.message);
	// })
    
 	},
	mounted () {
	},
	methods : {
		handleClick(row) {
			console.log(row);
		}
	}
}
</script>

<style>
	h1 {
		text-align: center;
		padding-top: 30px;
	}
</style>
