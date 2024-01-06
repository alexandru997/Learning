import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageNotFound.module.scss';

interface PageNotFoundPros {
    className?: string;
}

export const PageNotFound = (props: PageNotFoundPros) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageNotFound, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};
