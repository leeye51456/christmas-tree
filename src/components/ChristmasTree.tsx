import Ornament from "./svg/Ornament"

function ChristmasTree() {
  return (
    <svg
      viewBox="0 0 1000 1300"
    >
      <text
        x="500"
        y="700"
        dominantBaseline="central"
        textAnchor="middle"
        style={{
          fontSize: '1000px',
          lineHeight: 1,
        }}
      >
        &#x1f332;
      </text>

      <Ornament top={0} r={0} size={15}>
        &#x1f31f;
      </Ornament>

      <Ornament top={17.5} r={0} size={7.5} style={{ fill: '#e9d496', letterSpacing: '-0.2em' }} >
        <tspan x="50%" dy="-0.8em">
          &#x1d4dc;&#x1d4ee;&#x1d4fb;&#x1d4fb;&#x1d502;
        </tspan>
        <tspan x="50%" dy="0.8em">
          &#x1d4d2;&#x1d4f1;&#x1d4fb;&#x1d4f2;&#x1d4fc;&#x1d4fd;&#x1d4f6;&#x1d4ea;&#x1d4fc;
        </tspan>
      </Ornament>
    </svg>
  )
}

export default ChristmasTree
