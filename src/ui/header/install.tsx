import { runInAction } from "mobx"
import { SkeletonConfig } from "../../skeleton/skeleton_config"
import Header from "./header"
import { HeaderConfig } from "./header_config"
import { HeaderController } from "./header_controller"

export function installHeader({
  skeletonConfig
}: {
  skeletonConfig: SkeletonConfig
}) {

  const headerConfig = new HeaderConfig();
  const headerController = new HeaderController(headerConfig);
  const HeaderImpl = () => {
    return (
      <Header headerConfig={headerConfig} />
    )
  }

  runInAction(() => {
    skeletonConfig.Header = HeaderImpl;
  })

  return { headerController }
}