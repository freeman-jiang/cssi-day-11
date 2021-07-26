console.log('hello');

const signIn = async () => {
    
    try {
        console.log('clicked');
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await firebase.auth().signInWithPopup(provider);
        const user = res.user;
        console.log('login success', user);

        // firebase.auth.signInWithPopup(provider).then(result => {
        // const user = result.user
        // console.log('login success', user)
        // })

        // window.location = "writeNote.html"

    } catch (err) {
        console.error('login failed', err);
    }
};
