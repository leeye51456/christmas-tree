import React from "react"

/**
 * -`children: React.ReactNode`
 *   - SVG Elements
 * - `top: number`
 *   - `0`: top of the tree
 *   - `100`: bottom of the tree
 * - `r: number`
 *   - `0`: center of the tree
 *   - `50`: right of the tree
 *   - `-50`: left of the tree
 * - `size: number`
 *   - `0`: 0
 *   - `100`: same as the tree
 */
function Ornament({ children, top, r, size, style }: {
  children: React.ReactNode,
  top: number,
  r: number,
  size: number,
  style?: React.CSSProperties,
}) {
  return (
    <text
      x={500 + r * 10}
      y={200 + top * 10}
      dominantBaseline="central"
      textAnchor="middle"
      style={{
        lineHeight: 1,
        ...style,
        fontSize: `${size * 10}px`,
      }}
    >
      {children}
    </text>
  )
}

export default Ornament
