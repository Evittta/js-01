const a = Number(prompt('Enter a = '));
checkZero(a);
const b = Number(prompt('Enter b = '));
const c = Number(prompt('Enter c = '));

function solveQuadr(a, b, c) {
    let x1, x2;
    const d = disc(a, b, c);
    if (d > 0 ) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'x1 = ' + x1 + ', x2 = ' + x2;
    } else if (d < 0) {
        return 'There are no real roots';
    } else {
        x1 = -b / (2 * a);
        return 'x1 = ' + x1;
    }
}

function disc(a, b, c) {
    return b * b - 4 * a * c;
}

function prn(val) {
    document.write(val);
}

function checkZero(a) {
    if(a === 0) confirm('Error, a can not equal to 0');
}

const result = 'Solution of the equation : '+ solveQuadr(a, b, c);
prn(result);








