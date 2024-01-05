import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherPros {
    className?: string;
}

export const LangSwitcher = (props: LangSwitcherPros) => {
    const {className} = props
    const {t, i18n} = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ro' ? 'en' : 'ro')
    }
    return (

        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('Language')}
        </Button>

    );
};

