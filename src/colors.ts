import { backgroundColors, effects, fontColors, Reset } from './model';
export type Color = keyof typeof backgroundColors | keyof typeof fontColors;
function addColor(text: string, color: Color, isBackground = false): string {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
type Effect = keyof typeof effects;
function getEffects(effectList: Effect[]): string {
    return effectList.map((effect: Effect) => effects[effect]).join('');
}
export type StylesOptions = {
    font?: Color;
    background?: Color;
    effects?: Effect[];
};
export function color(text: string, options: StylesOptions): string {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
