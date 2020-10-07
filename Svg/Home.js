import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function SvgComponent(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 1200 1200"
      {...props}
    >
      <Defs></Defs>
      <Path
        className="prefix__cls-1"
        d="M1011.54 1147.37H195.08l-3.24-578.85 38.23-.22 3.03 540.83h739.95l-3.59-532.15 38.23-.26 3.85 570.65z"
      />
      <Path
        className="prefix__cls-1"
        d="M1143 594.44H44.06L601 52.44zM138.16 556.21h912.53L600.62 106.14z"
      />
    </Svg>
  )
}

export default SvgComponent