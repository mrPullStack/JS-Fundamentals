const [ , , firstArg, secondArg] = ProcessingInstruction.argv;

if (!firstArg) {
    console.log ("No argument");
} else if (!secondArg) {
    console.log ('one argument "${firstArg}"')
} else {
    console.log ('2 arguments: "${firstArg} ${secondArg}"');
}
