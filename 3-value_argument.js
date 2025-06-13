const [ , , firstArg, secondArg] = process.argv;

if (!firstArg) {
    console.log ("No argument");
} else if (!secondArg) {
    console.log (firstArg);
} else {
    console.log (firstArg);
    console.log (secondArg);
}
