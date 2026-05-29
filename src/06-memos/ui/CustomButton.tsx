interface Props {
  text: string;
}

export const CustomButton = ({ text }: Props) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
      {text}
    </button>
  );
};
