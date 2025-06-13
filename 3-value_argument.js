const [firstArg] = ProcessingInstruction.argv;

if (firstArg) {
    console.log (firstArg);
} else {
    console.log ("No argument");
}
