/////////////////////////////begin script.js////////////////////////////////////////////////

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var chartT = new Highcharts.Chart({
	chart:{ renderTo : 'chart-temperature' },
	title: { text: 'BME280 Temperature' },
	series: [{
	  showInLegend: false,
	  data: []
	}],
	plotOptions: {
	  line: { animation: false,
		dataLabels: { enabled: true }
	  },
	  series: { color: '#059e8a' }
	},
	xAxis: { type: 'datetime',
	  dateTimeLabelFormats: { second: '%H:%M:%S' }
	},
	yAxis: {
	  title: { text: 'Temperature (Celsius)' }
	  //title: { text: 'Temperature (Fahrenheit)' }
	},
	credits: { enabled: false }
  });
  setInterval(function ( ) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		var x = (new Date()).getTime(),
			y = parseFloat(this.responseText);
		//console.log(this.responseText);
		if(chartT.series[0].data.length > 40) {
		  chartT.series[0].addPoint([x, y], true, true, true);
		} else {
		  chartT.series[0].addPoint([x, y], true, false, true);
		}
	  }
	};
	xhttp.open("GET", "/temperature", true);
	xhttp.send();
  }, 30000 ) ;
  
  var chartH = new Highcharts.Chart({
	chart:{ renderTo:'chart-humidity' },
	title: { text: 'BME280 Humidity' },
	series: [{
	  showInLegend: false,
	  data: []
	}],
	plotOptions: {
	  line: { animation: false,
		dataLabels: { enabled: true }
	  }
	},
	xAxis: {
	  type: 'datetime',
	  dateTimeLabelFormats: { second: '%H:%M:%S' }
	},
	yAxis: {
	  title: { text: 'Humidity (%)' }
	},
	credits: { enabled: false }
  });
  setInterval(function ( ) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		var x = (new Date()).getTime(),
			y = parseFloat(this.responseText);
		//console.log(this.responseText);
		if(chartH.series[0].data.length > 40) {
		  chartH.series[0].addPoint([x, y], true, true, true);
		} else {
		  chartH.series[0].addPoint([x, y], true, false, true);
		}
	  }
	};
	xhttp.open("GET", "/humidity", true);
	xhttp.send();
  }, 30000 ) ;
  
  var chartP = new Highcharts.Chart({
	chart:{ renderTo:'chart-pressure' },
	title: { text: 'BME280 Pressure' },
	series: [{
	  showInLegend: false,
	  data: []
	}],
	plotOptions: {
	  line: { animation: false,
		dataLabels: { enabled: true }
	  },
	  series: { color: '#18009c' }
	},
	xAxis: {
	  type: 'datetime',
	  dateTimeLabelFormats: { second: '%H:%M:%S' }
	},
	yAxis: {
	  title: { text: 'Pressure (hPa)' }
	},
	credits: { enabled: false }
  });
  setInterval(function ( ) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		var x = (new Date()).getTime(),
			y = parseFloat(this.responseText);
		//console.log(this.responseText);
		if(chartP.series[0].data.length > 40) {
		  chartP.series[0].addPoint([x, y], true, true, true);
		} else {
		  chartP.series[0].addPoint([x, y], true, false, true);
		}
	  }
	};
	xhttp.open("GET", "/pressure", true);
	xhttp.send();
  }, 30000 ) ;
  

  /////////////////////////////end script.js////////////////////////////////////////////////
/*
  /////////////////////////////begin side.js////////////////////////////////////////////////

  const tabBtn = document.querySelectorAll(".tab");
  const tab = document.querySelectorAll(".tabShow");
  
  function tabs(panelIndex) {
	tab.forEach(function (node) {
	  node.style.display = "none";
	});
	tab[panelIndex].style.display = "block";
  }
  
  tabs(0);
  
  $(".tab").click(function () {
	$(this).addClass("active").siblings().removeClass("active");
  });
  
  /////////////////////////////end side.js////////////////////////////////////////////////

  /////////////////////////////begin login.js////////////////////////////////////////////////
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


        document.getElementById("logout_butt").style.display = "inline";
        document.getElementById("body1").style.display = "none";

        var user = firebase.auth().currentUser;

        if (user != null) {
           
            let email_id = user.email;
           // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
		   window.alert("Welcome User : " + email_id);
        }

    } else {

        
        document.getElementById("logout_butt").style.display = "none";
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
  /////////////////////////////end login.js////////////////////////////////////////////////
  */



  

