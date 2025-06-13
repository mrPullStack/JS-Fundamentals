const [ , , firstArg] = process.argv;

if (!firstArg) {
    console.log ("No argument");
} else {
    console.log (firstArg);
}
