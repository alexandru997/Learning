import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass').trim()).toBe('someClass'.trim());
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']).trim())
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        const received = classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ).replace(/,/g, ' ');

        expect(received).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    // test('with mods undefined', () => {
    //     const expected = 'someClass class1 class2 hovered';
    //     const mods = { hovered: true, scrollable: undefined };
    //     const filteredMods = {};
    //     for (const [key, value] of Object.entries(mods)) {
    //         if (value !== undefined) {
    //             filteredMods[key] = value;
    //         }
    //     }
    //     expect(classNames(
    //         'someClass',
    //         filteredMods,
    //         ['class1', 'class2'],
    //     )).toBe(expected);
    // });
});
