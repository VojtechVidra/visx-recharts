import { Cell, Pie, PieChart, Sector, Text } from "recharts";

interface Props {
  title: string;
  value: number;
  metric: string;
}

export const Recharts = ({ title, metric, value }: Props) => {
  const width = 200;
  const center = width / 2;
  const startAngle = 90;
  const endAngle = -(value / 100) * 360 + startAngle;
  const text = `${value} (${value.toFixed(1)}%) ${metric}`;
  return (
    <PieChart width={width} height={width}>
      <Pie
        data={[{ value: 1 }]}
        dataKey="value"
        outerRadius={100}
        innerRadius={88}
        fill="#FFB40316"
      >
        <Cell />
      </Pie>
      <Pie
        data={[{ value: 1 }]}
        dataKey="value"
        outerRadius={100}
        innerRadius={88}
        startAngle={startAngle}
        endAngle={endAngle}
        cornerRadius={10}
        activeIndex={0}
        fill="#FFB403"
        activeShape={(props) => (
          <g>
            <Sector {...props} />
            <Text
              x={center}
              y={center}
              fontWeight={500}
              lineHeight={20}
              textAnchor="middle"
              width={130}
              dy={-10}
            >
              {title}
            </Text>
            <Text
              x={center}
              y={center}
              textAnchor="middle"
              lineHeight={20}
              width={100}
              dy={40}
            >
              {text}
            </Text>
          </g>
        )}
      />
    </PieChart>
  );
};
