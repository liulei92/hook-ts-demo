import { observable, action, autorun } from 'mobx';

class AppStore {
  @observable collapsed: boolean = false;

  @observable year: number = 2020;

  @observable developer: string = 'Pingm';

  @action.bound toggleCollapsed (v: boolean):void {
    this.collapsed = v;
  }
}

const appStore = new AppStore();

autorun(() => {
  console.log(appStore.collapsed);
});

export default appStore;
