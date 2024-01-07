import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps{
    className?:string
}

export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('something went wrong')}</p>
            <button type="button" onClick={reloadPage}>
                {
                    t('reload page')
                }
            </button>
        </div>
    );
};
