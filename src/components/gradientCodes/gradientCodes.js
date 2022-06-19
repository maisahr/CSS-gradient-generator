const hexToRgb = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5), 16);

    const rgb = '(' + r + ', ' + g + ', ' + b + ')';
    return rgb;
}

export const hexGradient = (values) => {
    const hexCode = `background: ${values.colorOne};
    background: -webkit-${values.style}-gradient(${values.preposition + values.direction}, ${values.colorOne}, ${values.colorTwo});
    background: -moz-${values.style}-gradient(${values.preposition + values.direction}, ${values.colorOne}, ${values.colorTwo});
    background: ${values.style}-gradient(${values.preposition + values.direction}, ${values.colorOne}, ${values.colorTwo});`

    navigator.clipboard.writeText(hexCode);
}

export const rgbaGradient = (values) => {
    const rgbColorOne = hexToRgb(values.colorOne)
    const rgbColorTwo = hexToRgb(values.colorTwo)

    const rgbCode = `background: ${rgbColorOne};
    background: -webkit-${values.style}-gradient(${values.preposition + values.direction}, rgb${rgbColorOne}, rgb${rgbColorTwo});
    background: -moz-${values.style}-gradient(${values.preposition + values.direction}, rgb${rgbColorOne}, rgb${rgbColorTwo});
    background: ${values.style}-gradient(${values.preposition + values.direction}, rgb${rgbColorOne}, rgb${rgbColorTwo});`

    navigator.clipboard.writeText(rgbCode);

}