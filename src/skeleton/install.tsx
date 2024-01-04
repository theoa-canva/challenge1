import { Skeleton } from "./skeleton";
import { SkeletonConfig } from "./skeleton_config";

export function installSkeleton() {
  const skeletonConfig = new SkeletonConfig();
  const skeleton = <Skeleton skeletonConfig={skeletonConfig} />;
  return { skeleton, skeletonConfig };
}
