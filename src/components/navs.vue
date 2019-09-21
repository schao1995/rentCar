<template>
  <div class="navs">
    <el-row class="tac">
      <el-col>
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="/user/user">user</el-menu-item>
              <el-menu-item index="/user/admin">admin</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-truck"></i>
              <span>车（车位）</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="/car/cars">车</el-menu-item>
              <el-menu-item index="/car/carSite">车位</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>记录</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="/record/usageLog">使用记录</el-menu-item>
              <el-menu-item index="/record/userRecord">个人详情记录</el-menu-item>
              <el-menu-item index="/record/faultRecord">故障记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name:'navs',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted () {
    }
  }
</script>


<style lang="scss">
.navs{
  position: absolute;
  height: 100%;
  width: 200px;
  background-color: #545c64;
  .el-menu {
    width: 100%;
  }
  .el-submenu .el-menu-item{
    padding-left: 70px !important;
  }
}

</style>
