type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods = {}, additional: (string | undefined)[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods).filter(([classNames, value]) => Boolean(value))
            .map(([classNames, value]) => classNames)
    ]
        .join(' ')
}