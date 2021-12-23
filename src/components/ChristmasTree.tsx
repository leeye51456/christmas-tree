import Ornament from "./svg/Ornament"

const ornamentContentDomain: string[] = [
  '\u{1f534}', // Red circle
  '\u{1f7e0}', // Orange circle
  '\u{1f7e1}', // Yellow circle
  '\u{26aa}\u{fe0f}', // White Circle
  '\u{1f514}', // Bell
  '\u{1f381}', // Gift box
  '\u{1f56f}', // Candle
  '\u{2744}\u{fe0f}', // Showflake
  '\u{1f941}', // Snare drum
]

function ChristmasTree({ ornamentCount }: { ornamentCount: number }) {
  const ornaments: React.ReactNode[] = Array.from(
    { length: ornamentCount },
    (v, index) => {
      const yRandom = Math.random()
      const yPosition = 25 + yRandom * (360 * yRandom + 300) / 11
      const xDistance = yPosition * (16 * Math.random() - 8) / 17
      const size = 2.5 + 7.5 * Math.random()

      return (
        <Ornament
          key={index}
          top={yPosition}
          r={xDistance}
          size={size}
        >
          {ornamentContentDomain[Math.floor(ornamentContentDomain.length * Math.random())]}
        </Ornament>
      )
    }
  )

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

      {ornaments}
    </svg>
  )
}

export default ChristmasTree
