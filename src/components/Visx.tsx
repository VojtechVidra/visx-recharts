import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

interface Props {
  title: string;
  value: number;
  metric: string;
}

export const Visx = ({ metric, title, value }: Props) => {
  const width = 200;
  const center = width / 2;
  const degrees = (value / 100) * 360;
  const endAngle = degrees * (Math.PI / 180);
  const text = `${value} (${value.toFixed(1)}%) ${metric}`;
  return (
    <svg width={width} height={width}>
      <Group top={center} left={center}>
        <Pie
          pieSort={() => 0}
          data={[{ value: 1 }]}
          pieValue={(x) => x.value}
          outerRadius={100}
          innerRadius={88}
          cornerRadius={10}
          endAngle={endAngle}
        >
          {(pie) => {
            return pie.arcs.map((arc, i) => {
              return (
                <path fill="#FFB403" key={i} d={pie.path({ ...arc }) || ""} />
              );
            });
          }}
        </Pie>
        <Pie
          data={[{ value: 1 }]}
          outerRadius={100}
          innerRadius={88}
          pieValue={(x) => x.value}
        >
          {(pie) =>
            pie.arcs.map((arc, i) => (
              <path fill="#FFB40316" key={i} d={pie.path({ ...arc }) || ""} />
            ))
          }
        </Pie>
        <Text
          textAnchor="middle"
          fontWeight={500}
          lineHeight={20}
          width={130}
          dy={-10}
        >
          {title}
        </Text>
        <Text textAnchor="middle" width={100} lineHeight={20} dy={40}>
          {text}
        </Text>
      </Group>
    </svg>
  );
};
