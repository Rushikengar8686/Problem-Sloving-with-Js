console.log("*******************Print Right-Angled Star Triangle********************")
const row = 5
for(let i = 1; i <=row; i++) {
    let str = ''

    for(let j = 1; j <= i; j++) {
        str = str + ' * '
    }
    console.log(str);
}
console.log("**************** Inverted Right-Angled Triangle ***********************")
for(let i = row; i >=1; i--) {
    let str = ''

    for(let j = i; j >= 1; j--) {
        str = str + ' * '
    }

    console.log(str);
}
console.log("*******************  Pyramid Pattern *************************")
for(let i = 1; i <= 2*row - 1; i+=2) {
    let str = ''
    const currentRow = (i + 1) / 2

    for(let j = 1; j <= row + currentRow - 1; j++) {
        if(j <= row - currentRow) {
            str += ' '
        } else  {
            str += '*'
        }
    }

    console.log(str);
}
console.log("******************* Inverted Pyramid Pattern **********************")
for(let i = 2*row - 1; i >= 1; i-=2) {
    let str = ''
    const currentRow = (i + 1) / 2

    for(let j = 1; j <= row + currentRow - 1; j++) {
        if(j <= row - currentRow) {
            str += ' '
        } else  {
            str += '*'
        }
    }

    console.log(str);
}