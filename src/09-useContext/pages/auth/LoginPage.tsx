import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState('');
  const navigation = useNavigate();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ userId });
    const result = login(+userId);

    if (!result) {
      toast.error('Usuario no encontrado');
      return;
    }

    navigation('/professional/profile');
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setUserId(event.target.value);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="ID del usuario"
          value={userId}
          onChange={handleOnChange}
        />
        <Button type="submit">Login</Button>
      </form>

      <Link to="/professional">
        <Button variant="ghost">Volver a la página principal</Button>
      </Link>
    </div>
  );
};
