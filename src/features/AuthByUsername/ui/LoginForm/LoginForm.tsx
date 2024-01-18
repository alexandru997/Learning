import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginModalPros {
    className?: string;
}

export const LoginForm = (props: LoginModalPros) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={t('Login')} type="text" className={cls.input} />
            <Input placeholder={t('Password')} type="text" className={cls.input} />
            <Button className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};
