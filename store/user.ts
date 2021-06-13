import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
 
export interface User {
  name?: string
  description?: string
}

@Module({ stateFactory: true, namespaced: true, name: 'user' })
export default class UserStore extends VuexModule {
  user: User = {}
 
  /**
   * ユーザー情報を作成
   * @param name 名前
   * @param description 説明
   */
  @Mutation
  create(user: User) {
    this.user.name = user.name
    this.user.description = user.description
  }
}