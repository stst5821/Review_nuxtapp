<!-- 登録した情報を確認 -->

<template>
  <div>
    名前：{{user.name}}
    <br />
    自己紹介：{{user.description}} <br /><br />
    <nuxt-link to="/user/entry">
      <button>入力画面へ</button>
    </nuxt-link>
    <br /><br />
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import { userStore } from '~/store'

export default Vue.extend({
  data: () => ({
    user: {
      name: '',
      description: '',
    },
  }),
  created() {
    this.user.name = userStore.user.name!
    this.user.description = userStore.user.description!
  },
})
</script>
 
<style></style>