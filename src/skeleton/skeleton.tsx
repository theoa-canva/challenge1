import { SkeletonConfig } from './skeleton_config'
import styles from './skeleton.module.css'

export const Skeleton = ({
  skeletonConfig
}: {
  skeletonConfig: SkeletonConfig
}) => {

  const { Header, Content } = skeletonConfig;

  return (
    <div className={styles.container}>
      { Header && <Header /> }
      { Content && <Content /> }
    </div>
  )
}
