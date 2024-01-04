import { makeAutoObservable, observable } from "mobx";

export class SkeletonConfig {
  @observable.ref
  Header?: React.ComponentType;

  @observable.ref
  Content?: React.ComponentType;

  constructor () { makeAutoObservable(this); }
}