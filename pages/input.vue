<template>
    <div>
        <input type="text" v-model="newMessage" />
        <br /><br />
        <button @click="addMessage()">追加</button>
        <button @click="deleteMessage()">古い順に削除</button>
        <br /><br />
        <!-- :keyと{{}}の中は名前を合わせる必要がある。今回は、messageで合わせている。 -->
        <div v-for="message in messages" :key="message.index">
            {{message}}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data:() => ({
        newMessage:'',
        messages: [] as any,
    }),
    methods: {
        addMessage() {
            this.messages.push(this.newMessage) // テキストボックスから入力された文字を、push関数でmessagesに代入している。
            this.newMessage = '' // テキストボックスから入力された文字をクリアする。
        },
        deleteMessage() {
            if(this.messages.length > 0) {
                this.messages.splice(0, 1) // splice関数 = 指定した番号の要素から、何個分消す。この場合、0番目の要素を1つ消すという意味。
            }
        },
    }
})
</script>