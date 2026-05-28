import { useCounter } from '@/hooks/useCounter';
import { usePokemon } from '@/hooks/usePokemon';
import { PokemonHeaderError } from './PokemonHeaderError';

export const PokemonPage = () => {
  const { counter, decrementValue, incrementValue } = useCounter();
  const { pokemon, isLoading, formattedId } = usePokemon({ id: counter });

  if (isLoading) {
    return (
      <>
        <PokemonHeaderError errorMessage="Cargando..." />
      </>
    );
  }

  if (!pokemon) {
    return (
      <>
        <PokemonHeaderError errorMessage="Pokémon no encontrado" />
      </>
    );
  }

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">
        #{formattedId} {pokemon.name}
      </h3>
      <img src={pokemon.imageUrl} alt={pokemon.name} />

      <div className="flex gap-2">
        <button
          onClick={decrementValue}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Anterior
        </button>

        <button
          onClick={incrementValue}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
