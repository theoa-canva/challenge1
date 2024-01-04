import { action, makeAutoObservable } from "mobx";
import { HeaderConfig } from "./header_config";

export class HeaderController {
  constructor(private readonly headerConfig: HeaderConfig) { makeAutoObservable(this); }

  @action
  readonly setTitle = (title: string) => {
    this.headerConfig.title = title;
  }
}