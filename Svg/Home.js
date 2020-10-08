import * as React from "react";

function SvgComponent(props) {
  return (
    <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 1200 1200" {...props}>
      <defs>
        <style>{".cls-1{fill:#5883f0}"}</style>
      </defs>
      <path
        className="cls-1"
        d="M1011.54 1147.37L195.08 1147.37 191.84 568.52 230.07 568.3 233.1 1109.13 973.05 1109.13 969.46 576.98 1007.69 576.72 1011.54 1147.37z"
      />
      <path
        className="cls-1"
        d="M1143 594.44H44.06L601 52.44zM138.16 556.21h912.53L600.62 106.14z"
      />
    </svg>
  );
}

export default SvgComponent;