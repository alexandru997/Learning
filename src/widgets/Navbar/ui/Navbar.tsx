import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarPros {
    className?: string;
}

export const Navbar = (props: NavbarPros) => {
    const {className} = props
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.link}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};




