const hexToRgb = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5), 16);

    const rgb = '(' + r + ', ' + g + ', ' + b + ')';
    return rgb;
}

export const hexGradient = (values) => {
    const hexCode = `background: ${values.color1};
    background: -webkit-${values.style}-gradient(${values.preposition + values.dir}, ${values.color1}, ${values.color2});
    background: -moz-${values.style}-gradient(${values.preposition + values.dir}, ${values.color1}, ${values.color2});
    background: ${values.style}-gradient(${values.preposition + values.dir}, ${values.color1}, ${values.color2});`

    navigator.clipboard.writeText(hexCode);

    return hexCode;
}

export const rgbGradient = (values) => {
    const rgbColorOne = hexToRgb(values.color1)
    const rgbColorTwo = hexToRgb(values.color2)

    const rgbCode = `background: ${rgbColorOne};
    background: -webkit-${values.style}-gradient(${values.preposition + values.dir}, rgb${rgbColorOne}, rgb${rgbColorTwo});
    background: -moz-${values.style}-gradient(${values.preposition + values.dir}, rgb${rgbColorOne}, rgb${rgbColorTwo});
    background: ${values.style}-gradient(${values.preposition + values.dir}, rgb${rgbColorOne}, rgb${rgbColorTwo});`

    navigator.clipboard.writeText(rgbCode);

    return rgbCode;

}