interface Props {
  color: string;
}

export const TrafficLight = ({ color }: Props) => {
  return <div className={`w-32 h-32 ${color} rounded-full`}></div>;
};
