import { useState } from 'react';
import { MySubtitle, MyTitle } from './ui';
import { CustomButton } from './ui/CustomButton';

const titleInitialValue = 'Mi título';
const subtitleInitialValue = 'Mi subtítulo';

export const MemoHook = () => {
  const [title, setTitle] = useState(titleInitialValue);
  const [subtitle, setSubtitle] = useState(subtitleInitialValue);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Memo App</h1>

      <MyTitle title={title} />
      <MySubtitle subtitle={subtitle} />
      <CustomButton text="Cambiar Título" />
      <CustomButton text="Cambiar Subtítulo" />
    </div>
  );
};
