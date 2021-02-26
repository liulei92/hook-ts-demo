import { observable, action, autorun } from 'mobx';

class BaseStore {
  @observable title = 'hooks-ts-demo'

  @observable globalCount = 0

  @action.bound setGlobalCount (v: number): void {
    this.globalCount = v;
  }
}

const baseStore = new BaseStore();

autorun(() => {
  document.title = baseStore.title;
});

export default baseStore;
