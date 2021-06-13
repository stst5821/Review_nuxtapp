// store/user.ts を使うために必要なファイル

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserStore from '~/store/user'
 
// eslint-disable-next-line import/no-mutable-exports
// entry.vueで↓これをimportしている。
let userStore: UserStore
 
function initialiseStores(store: Store<any>): void {
  userStore = getModule(UserStore, store)
}
 
export { initialiseStores, userStore }
