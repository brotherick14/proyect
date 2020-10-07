import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
  return (
    <Svg data-name="Layer 1" viewBox="0 0 1200 1200" {...props}>
      <Path
        d="M847.72 348.39C797 348 618.24 347 612.41 347.05L612 194.49a148.4 148.4 0 00-148.4-148.4h-8.35a148.4 148.4 0 00-148.39 148.4v152.56h-210v810.64h571.53C566.13 1079.86 505 940.62 505 764.38c0-66.46 8.74-128.57 26-184.59a32.86 32.86 0 1162.8 19.34c-15.32 49.75-23.08 105.34-23.08 165.25 0 218.06 104.83 370.19 265.07 393.15.4 0 2.77.16 3.42.16h2.63c192.58 0 303.2-164 303.2-410-.04-247.92-106.63-397.81-297.32-399.3z"
        fill="#4874ea"
      />
    </Svg>
  )
}

export default SvgComponent

