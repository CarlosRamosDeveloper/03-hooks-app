import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export const MainPage = () => {
  return (
    <div className="bg-gradient flex flex-col">
      <h1 className="text-2xl">Muestrario de Hooks</h1>
      <div className="grid grid-cols-3 my-4">
        <Link to="/traffic">
          <Button>Luces de tráfico</Button>
        </Link>
        <Link to="/pokemon">
          <Button>Pokémon</Button>
        </Link>
        <Link to="/focus">
          <Button>Focus</Button>
        </Link>
        <Link to="/tasks">
          <Button>Tareas</Button>
        </Link>
        <Link to="/words">
          <Button>Palabras</Button>
        </Link>
        <Link to="/memo">
          <Button>Memo</Button>
        </Link>
        <Link to="/instagrom">
          <Button>Instagrom</Button>
        </Link>
        <Link to="/client">
          <Button>Clientes</Button>
        </Link>
        <Link to="/">
          <Button>Template</Button>
        </Link>
        <Link to="/">
          <Button>Template</Button>
        </Link>
      </div>
    </div>
  );
};
