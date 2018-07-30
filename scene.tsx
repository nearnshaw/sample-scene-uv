import * as DCL from "metaverse-api";

export default class SampleScene extends DCL.ScriptableScene {
  async render() {
    return (
      <scene position={{ x: 5, y: 1.5, z: 5 }}>
        <basic-material
          id="sprite001"
          texture="atlas.png"
          samplingMode={DCL.TextureSamplingMode.NEAREST}
        />
        <plane
          material="#sprite001"
          uvs={[
            0,
            0.75,
            0.25,
            0.75,
            0.25,
            1,
            0,
            1,
            0,
            0.75,
            0.25,
            0.75,
            0.25,
            1,
            0,
            1
          ]}
        />
      </scene>
    )
  }
}
