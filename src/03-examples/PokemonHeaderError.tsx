interface Props {
  errorMessage: string;
}

export const PokemonHeaderError = ({ errorMessage }: Props) => {
  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">{errorMessage}</h3>
    </div>
  );
};
