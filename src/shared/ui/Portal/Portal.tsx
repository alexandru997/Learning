import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalPros {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalPros) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
