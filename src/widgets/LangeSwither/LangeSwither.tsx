import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangeSwitherProps {
    className?: string
}

export const LangeSwither = ({}: LangeSwitherProps) => {
    const {t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <div>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t("РУ")}</Button>
        </div>
    )
};