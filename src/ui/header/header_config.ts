import { makeAutoObservable, observable } from "mobx";

export class HeaderConfig {
  @observable.ref
  title?: string

  constructor () { makeAutoObservable(this); }
}