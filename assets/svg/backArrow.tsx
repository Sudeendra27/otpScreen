import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BackArrow = (props: SvgProps) => (
  <Svg
   
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m9.704 19.546-6.75-6.75a1.127 1.127 0 0 1 0-1.594l6.75-6.75a1.127 1.127 0 0 1 1.594 1.594l-4.83 4.829H20.25a1.125 1.125 0 1 1 0 2.25H6.469l4.83 4.83a1.127 1.127 0 0 1-1.594 1.593v-.002Z"
    />
  </Svg>
)
export default BackArrow;