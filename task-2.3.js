function columns(stringsParam) {
    var row = '';

    for (var i = 0; i < stringsParam.length; i++) {
        row = '';
        for (var j = 0; j < stringsParam.length; j++) {

            if (stringsParam[j][i] !== undefined) {
                row += stringsParam[j][i];
            } else {
                row += ' ';
            }
            row += ' ';
        }
        console.log(row);
    }
}


columns(["Write", "good", "code", "every", "day"]);
console.log();
columns(["Today", "was", "a", "good", "day"]);
console.log();
columns(["Hwftos", "eorhti", "lroehd", "llm ee", "od  r", "    "]);