let googleUser = null

window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('logged in as ', user.displayName)
            googleUser = user
        } else {
            console.log('not logged in')
        }
    })
}

const createNote = async () => {
    // GET INPUTS
    const title = document.querySelector('#noteTitle').value
    const text = document.querySelector('#noteText').value

    // WRITE TO DATABASE
    try {
        firebase.database().ref(`users/${googleUser.uid}`).push({
            title,
            text
        })
        console.log('database write successful')
        document.querySelector('#noteTitle').value = ""
        document.querySelector('#noteText').value = ""
       

    }
    catch (err) {
        console.error('error! ', err);

    }


}