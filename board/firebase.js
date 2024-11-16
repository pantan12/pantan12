var database = app.database();
var eventListener = app.database().ref('posts/');

function writeUserData(value){
    app.database().ref('users/').set(value);
}

writeUserData("Hello~~");

eventListener.on('value', (snaphot) => {
    const data = snaphot.val();
    console.log(data);
});