import { observable } from "mobx";

let data: AppStatusData;
let observableData: AppStatusData;

export type AppStatusData = {
  currentView: string;
};

export function setData(init: AppStatusData) {
  data = init;
  return data;
}

export function makeReaction(init?: AppStatusData) {
  if(init) {
    setData(init);
  }
  observableData = observable(data);
  return observableData;
}

export function useStore() {
  return observableData;
}

export function useStoreRaw() {
  return data;
}
