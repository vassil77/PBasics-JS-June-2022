function PasswordGuess(params) {

    let pass = params[0];

    if (pass === "s3cr3t!P@ssw0rd") {
        console.log(`Welcome`);
    } else {
        console.log(`Wrong password!`);

    }

}

PasswordGuess
    (["qwerty"]);
PasswordGuess
    (["s3cr3t!P@ssw0rd"]);
PasswordGuess
    (["s3cr3t!p@ss"]);