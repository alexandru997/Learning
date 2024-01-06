import React from 'react';
import { useTranslation } from 'react-i18next';

const MainePage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Main Page')}
        </div>
    );
};

export default MainePage;
