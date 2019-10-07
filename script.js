function logScope() {
    let localVar=2;
    if (localVar){
        let localVar = "I'm differernt!";
        console.log("nested localVar", localVar);
    }
    console.log("logScope localVar: ", localVar);
}

logScope();