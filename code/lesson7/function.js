
function say(words) {
    console.log(words);
}

function execute(functions, params ) {
    functions(params);
}

execute(say,'hello world !');

execute(function ( ) {
    say('hello !');
})