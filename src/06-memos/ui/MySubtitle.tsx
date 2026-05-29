interface Props {
  subtitle: string;
}

export const MySubtitle = ({ subtitle }: Props) => {
  console.log('Subtitle re-render');

  return (
    <>
      <h6 className="text-2xl font-thin">{subtitle}</h6>

      <button className="bg-indigo-500 text-white px-2 py-2 rounded-md cursor-pointer">
        Llamar a Función
      </button>
    </>
  );
};
