import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// eslint-disable-next-line import/order
import { Button, ButtonSize, ButtonTheme } from './Button';
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
    theme: ButtonTheme.CLEAR,

};
export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'TEXT',
    theme: ButtonTheme.CLEAR_INVERTED,

};

export const Outline = Template.bind({});
Outline.args = {
    children: 'TEXT',
    theme: ButtonTheme.OUTLINE,

};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'TEXT',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,

};
export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'TEXT',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,

};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'TEXT',
    theme: ButtonTheme.OUTLINE,

};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'TEXT',
    theme: ButtonTheme.BACKGROUND,

};
export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'TEXT',
    theme: ButtonTheme.BACKGROUND_Inverted,

};
export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_Inverted,
    square: true,

};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_Inverted,
    square: true,
    size: ButtonSize.L,

};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_Inverted,
    square: true,
    size: ButtonSize.M,

};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_Inverted,
    square: true,
    size: ButtonSize.XL,

};
export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true,

};
