<!-- ユーザー情報を登録 -->

<template>
  <div>
    名前：<input type="text" v-model="user.name" />
    <br />
    自己紹介：<input type="text" v-model="user.description" /> <br /><br />
    <button @click="moveConfirmPage()">確認画面へ</button>
    <br /><br />
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import { userStore } from '~/store' // store/user.tsを使用するためインポート。アクセスはstore-accessor.tsを介して行われるのでimportするのは、そこに書いてある変数名になる。
 
export default Vue.extend({
  data: () => ({
    user: {
      name: '',
      description: '',
    },
  }),
  methods: {
    moveConfirmPage() {
      userStore.create(this.user) // store/user.tsのメソッドが呼び出されている。
      this.$router.push('/user/confirm') // 次の画面へ移動
    },
  },
})
</script>
 
<style></style>
