import { Link } from 'react-router';
import { Button } from './ui/button';

export const BackToMainPageButton = () => {
  return (
    <Link to="/" className="my-4">
      <Button>Volver al menú principal</Button>
    </Link>
  );
};
