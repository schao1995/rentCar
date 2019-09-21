<template>
  <div class="contents">
    <router-view name="navs" />
    <div class="right">
    	<router-view name="breadcrumb"/>
    	<router-view v-on:readMsg="readIt" v-bind:message="msg" />
    </div>
  </div>
</template>

<script>
export default {
  name:'contents',
  data () {
    return {
      msg : {
        'a' : 1,
        'b' : 2
      }
    }
  },
  methods : {
    readIt(data) {
      console.log("data");
      console.log(data);
    }
  }
}
</script>

<style scoped lang="scss">
.contents {
	height: 100%;
	position: relative;
	
}
.right {
	padding-left: 200px;
}
</style>
