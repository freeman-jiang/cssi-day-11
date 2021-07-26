let googleUser = null

window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('logged in as ', user.displayName)
            googleUser = user
            const userGreeting = document.querySelector('#userGreeting')
            const userInfo = document.querySelector('#userInfo')
            userGreeting.innerHTML = `Hello ${user.displayName}`
            userInfo.innerHTML = `Write what should not be forgotten`
            
            
        } else {
            console.log('not logged in')
        }
    })
}

const createNote = async () => {
    // GET INPUTS
    const title = document.querySelector('#noteTitle').value
    const text = document.querySelector('#noteText').value
    const date = new Date()
    const label = document.querySelector('#label').value

    console.log(date)

    // WRITE TO DATABASE
    try {
        firebase.database().ref(`users/${googleUser.uid}`).push({
            created: date.toString(),
            title,
            text,
            label
            
        })
        console.log('database write successful')
        document.querySelector('#noteTitle').value = ""
        document.querySelector('#noteText').value = ""
       

    }
    catch (err) {
        console.error('error! ', err);
    }


}