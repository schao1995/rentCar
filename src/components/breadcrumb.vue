<template>
  <div class="bread">
  	<div class="topBg"></div>
  	<el-breadcrumb separator-class="el-icon-arrow-right">
	  <el-breadcrumb-item :to="{ path: '/user/admin' }">首页</el-breadcrumb-item>
	  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
	  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
	  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
	</el-breadcrumb>
  </div>
</template>

<script>
export default {
  name:'bread'
}
</script>

<style lang="scss">
	.bread {
			padding: 30px 0 10px 10px;
			border-bottom: 1px solid #545c64;
		.topBg {
		}
	}
</style>
