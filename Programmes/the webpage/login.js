const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
		
		document.getElementById("button1").style.display = "none";
		document.querySelector('.bg-modal').style.display = "none";
		document.getElementById("logout_butt").style.display = "flex";
		document.getElementById("sidebar_btn").style.display = "inline";
		document.getElementById("report").style.display = "inline";
		
        

        var user = firebase.auth().currentUser;

        if (user != null) {
           
            let email_id = user.email;
           // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
		   window.alert("Welcome User : " + email_id);
        }

    } else {
		sidebar_btn
        
		document.getElementById("logout_butt").style.display = "none";
		document.getElementById("sidebar_btn").style.display = "none";
		document.getElementById("button1").style.display = "inline";
		document.getElementById("report").style.display = "none";
        //
      //  document.getElementById("body1").style.display = "inline";

    }
});


//sign up function


function signUp() {

    var user2Email = document.getElementById("email2_field").value;
    var user2Pass = document.getElementById("password2_field").value;

    firebase.auth().createUserWithEmailAndPassword(user2Email, user2Pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

	window.alert("hello" );

}



//sign up function


function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
	});
	
	window.alert("hello" );
}






//sign up function


function logout() {

    
            var user = firebase.auth().currentUser;
            if (user != null) {
               
                let email_id = user.email;
                alert("goodbye User : " + email_id);
            }
    
    
   
    
    
    firebase.auth().signOut();
   
}