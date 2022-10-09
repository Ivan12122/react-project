import { Theme, useTheme } from 'app/providers/ThemProvider';
import Light from 'shared/assets/icons/Light.svg';
import Moon from 'shared/assets/icons/Moon.svg';
import { classNames } from 'shared/lib/classNemes/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './TheamSwither.module.scss';

interface TheamSwitherProps {
    className?: string
}

export const TheamSwither = ({ className }: TheamSwitherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.TheamSwither, {}, [className])}
      onClick={toggleTheme}
    >
      { theme === Theme.DARK ? <Moon /> : <Light />}
    </Button>
  );
};
