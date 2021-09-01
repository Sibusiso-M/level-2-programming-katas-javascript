function square(num, char = '#') {
    var hashOut = '';

    if (num < 0) {
        num *= -1;
    }

    for (var row = 0; row < num; row++) {
        for (var column = 0; column < num; column++) {
            hashOut += char;
        }
        console.log(hashOut);
        hashOut = '';
    }
    console.log();
}
square(2, '$');
square(4, '4');
square(-2, '-2');
square(-2);