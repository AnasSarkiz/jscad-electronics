import type { PCBPlatedHole, PCBSMTPad } from "@tscircuit/soup"
import { Colorize, Cuboid, Translate, Cylinder } from "jscad-fiber"

export const FootprintPlatedHole = ({ hole }: { hole: PCBPlatedHole }) => {
  if (hole.shape === "circle") {
    return (
      <Colorize color={[255, 0, 0]}>
        <Translate args={[hole.x, 0, hole.y]}>
          {/* <Rotate axis="z" angle={90}> */}
          <Cylinder radius={hole.outer_diameter} height={0.01} />
          {/* </Rotate> */}
        </Translate>
      </Colorize>
    )
  }
  throw new Error("Shape not supported: " + hole.shape)
}
