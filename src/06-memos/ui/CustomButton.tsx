interface Props {
  text: string;
  onClick: () => void;
}

export const CustomButton = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
    >
      {text}
    </button>
  );
};
