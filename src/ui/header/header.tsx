import { observer } from "mobx-react";
import { HeaderConfig } from "./header_config"

export const Header = observer(
  ({
    headerConfig
  }: {
    headerConfig: HeaderConfig
  }) => {

    const { title } = headerConfig;

    return (
      <h1>
        { title }
      </h1>
    )
  }
)

export default Header
