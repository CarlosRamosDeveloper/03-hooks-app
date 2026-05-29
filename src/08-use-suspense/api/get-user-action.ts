export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number): Promise<User> => {
  await new Promise((res) => setTimeout(res, 2000));

  const user: User = {
    id: id,
    name: 'Fernando Herrera',
    location: 'Ottawa - Canadá',
    role: 'Instructor de desarrollo de Software',
  };

  return user;
};
