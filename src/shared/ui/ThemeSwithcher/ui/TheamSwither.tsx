import {classNames} from "shared/lib/classNemes/classNames";
import cls from "./TheamSwither.module.scss"
import {Theme, useTheme} from "app/providers/ThemProvider";
import Moon from "shared/assets/icons/Moon.svg"
import Light from "shared/assets/icons/Light.svg"
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface TheamSwitherProps {
    className?: string
}

export const TheamSwither = ({className}: TheamSwitherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.TheamSwither, {}, [className])}
            onClick={toggleTheme}
        >
            { theme === Theme.DARK ? <Moon /> : <Light/>}
        </Button>
    );
};