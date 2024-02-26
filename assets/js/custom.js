
// sample data
const userData = "Daichi";

    document.addEventListener("DOMContentLoaded", function() {       
        var isLoggedIn = true; 

      
        var userProfileLink = document.getElementById("userProfileLink");
        var logoutButton = document.getElementById("logoutButton");

        if (isLoggedIn) {
            var username = userData; // sudo username
            console.log(userData)

          
            userProfileLink.innerText = username;
            userProfileLink.title = username;
        } else {
           
            userProfileLink.innerText = "Profile";
            userProfileLink.title = "User Profile";
        }

      
        logoutButton.addEventListener("click", function() {
            // prompt logout actions here
            alert("Logging out...");
        });
    });

