import { observable, action, isAction } from "mobx";
export { observer } from "mobx-react-lite";

export type AppStatusData = {
  currentView: string;
};

let data: AppStatusData;
let observableData: AppStatusData;

export function initStore(initData: AppStatusData) {
  data = initData;
  observableData = observable(data);
}

export function useStore() {
  return observableData;
}

export function useRaw() {
  return data;
}

export function useAction(fn: () => void): () => void {
  if(isAction(fn)) return fn;
  return action(fn);
}
