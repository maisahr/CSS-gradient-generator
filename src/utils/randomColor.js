export const generateRandomColor = () => {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    if(randomColor.length !== 7){
      const missing = 7 - randomColor.length;
      randomColor = randomColor + '0'.repeat(missing);
    }
    return randomColor;
}