function triangle(num, mode = 'left') {

    var hashOut = '';

    if (mode == 'left') {

        if (num > -1) {
            for (var row = 0; row < num; row++) {
                hashOut += '#';
                console.log(hashOut);
            }
        } else if (num < 0) {
            var positiveNum = num * -1;

            for (var row = positiveNum; row > 0; row--) {
                hashOut = '';
                for (var col = row; col > 0; col--) {
                    hashOut += '#';
                }
                console.log(hashOut);
            }
        }

    } else
    if (mode == 'right') {

        if (num > -1) {
            var spaces = num - 1;

            for (var row = 0; row < num; row++) {

                hashOut += '#';
                console.log(' '.repeat(spaces) + hashOut);
                spaces--;
            }
        } else if (num < 0) {
            var positiveNum = num * -1;

            for (var row = positiveNum; row > 0; row--) {
                hashOut = '';
                for (var col = row; col > 0; col--) {
                    hashOut += '#';
                }
                console.log(hashOut);
            }
        }

    } else if (mode == 'isosceles') {

        if (num > -1) {
            var spaces = num - 1;
            var oddHashCount = 1;

            for (var row = 0; row < num; row++) {
                hashOut = '#'.repeat(oddHashCount);
                console.log(' '.repeat(spaces) + hashOut);
                spaces--;
                oddHashCount += 2;
            }

        } else if (num < 0) {
            var positiveNum = num * -1;
            var oddHashCount;
            var spaces = 0;

            for (var row = positiveNum; row > 0; row--) {
                oddHashCount = row * 2 - 1;
                console.log(' '.repeat(spaces) + '#'.repeat(oddHashCount));
                spaces++;

            }
        }
    } else {
        console.log('Incorrect mode entered.');

    }
}

triangle(3);
console.log();
triangle(3, "left");
console.log();
triangle(3, "right")
console.log();
triangle(3, "isosceles");
console.log();
triangle(-3, "isosceles");
console.log();
triangle(5, 'iYoh! >__<');
triangle(-3, 'isosceles');
triangle(-2);
console.log();
triangle(-4);