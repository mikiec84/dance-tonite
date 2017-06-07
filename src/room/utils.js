import {
  tempVector,
} from '../utils/three';
import audio from '../audio';
import { avgPosition, avgQuaternion } from '../utils/serializer';

export const secondsToFrames = (seconds) => Math.floor((seconds % (audio.loopDuration * 2)) * 90);

export const transformMesh = (
  instancedMesh,
  lower,
  higher,
  ratio,
  index,
  performanceIndex,
  limbIndex,
  scale,
  color,
  offset,
  hidden,
) => {
  instancedMesh.setPositionAt(
    index,
    avgPosition(
      lower,
      higher,
      ratio,
      performanceIndex,
      limbIndex,
      offset,
      hidden
    )
  );
  instancedMesh.setQuaternionAt(
    index,
    avgQuaternion(
      lower,
      higher,
      ratio,
      performanceIndex,
      limbIndex,
      hidden
    )
  );
  instancedMesh.setScaleAt(
    index,
    tempVector(scale, scale, scale)
  );
  instancedMesh.setColorAt(
    index,
    color,
  );
  instancedMesh.needsUpdate();
};
