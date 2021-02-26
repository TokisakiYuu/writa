import { makeAutoObservable } from "mobx";

const store = makeAutoObservable({
  // observable
  currentView: "home",
  value: 1,

  // compute
  get double() {
    return this.value * 2;
  },

  // actions
  increment() {
    this.value++;
  },
  toView(name: string) {
    store.currentView = name;
  }
});

export default store;
