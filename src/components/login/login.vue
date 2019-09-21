<template>
  <div class="hello">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
      </el-form-item>
      <el-form-item label="admin" prop="name">
        <el-input v-model.number="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item class="but">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'login',
  data () {
    var checkName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        name : "",
        password : ""
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    
  },
  mounted () {

  },
  methods : {
    submitForm(formName) {
      var _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var params = "name=" + this.ruleForm.name + "&password=" + this.ruleForm.password
          axios.post("api/LoginServlet", params).then(res => {
            console.log('res');
            console.log(res);
            _this.$cookies.set("ans", params, 10);
            console.log(_this.$cookies.get("ans"));
            console.log(document.cookie);
          }).catch(error => {
            console.log("error", error.message);
          })
        } else {
          this.$message({
            message: '用户名或密码为空',
            type: 'warning'
          });
          return false;
        }
      });
    },
    // getCookies(key) { // 取
    //   var arr = [];
    //   var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    //   arr = document.cookie.match(reg);
    //   if (arr) {
    //     return deCodeURIComponent(arr[2]);
    //   } else {
    //     return null;
    //   }
    // },
    // setCookies(key, value, expiredays) { // 存
    //   var exdate = new Date();
    //   exdate.setDate(exdate.getDate() + expiredays);
    //   document.cookie = key + "=" + encodeURIComponent(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    // },
    delCookies(key) { // 删
      var exdate = new Date();
      exdate.setTime(exdate.getTime() - 1);
      var cval = this.getCookie(key);
      if (cval != null) {
        document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  height: 100%;
  width: 100%;
  position: relative;
  background: #fff;
  
}
.demo-ruleForm{
  width: 300px;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
.but {
  button{
    padding: 12px 100px;
  }
}
</style>