import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// eslint-disable-next-line import/order
import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storyook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'TEXT',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'TEXT',
    theme: ThemeButton.CLEAR,

};

export const Outline = Template.bind({});
Outline.args = {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE,

};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE,

};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
