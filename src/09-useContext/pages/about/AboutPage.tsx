import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import { use } from 'react';
import { Link } from 'react-router';

export const AboutPage = () => {
  const { authStatus, logout } = use(UserContext);
  const isAuthenticated = authStatus === 'authenticated';
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Página sobre mi</h1>
      <hr />
      {isAuthenticated && (
        <Link className="hover:text-blue-500 underline text-2xl" to="/profile">
          Perfil
        </Link>
      )}
      <div className="flex flex-col gap-2">
        {isAuthenticated ? (
          <Button variant="destructive" onClick={logout}>
            Salir
          </Button>
        ) : (
          <Link className="hover:text-blue-500 underline text-2xl" to="/login">
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  );
};
