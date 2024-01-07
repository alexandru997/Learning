import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// It's component for testings ErrorBoundary
export const BugButtonError = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const throwClick = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <button type="button" onClick={throwClick}>
            {t('trigger error')}
        </button>
    );
};
