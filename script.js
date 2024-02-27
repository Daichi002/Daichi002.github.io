const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}
loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

// Sample user data
const userData = [
    {
        email: "brix@gmail.com",
        password: "Password1",
    },
    {
        email: "daichi@js.com",
        password: "Password2",
    },
];

document.querySelector('.login form').addEventListener('submit', function(e) {
    e.preventDefault();
    Login(e);
});

document.querySelector('.register form').addEventListener('submit', function(e) {
    e.preventDefault();
    Sign_up(e);
});

function showAlert(message, type) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '0';
	notification.style.margin = '50px';
    notification.style.width = '50%';
    notification.style.padding = '10px';
    notification.style.textAlign = 'center';
    notification.style.fontWeight = 'bold';

    if (type === 'success') {
        notification.style.backgroundColor = '#9BCF53';
        notification.style.color = '#fff';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
        notification.style.color = '#fff';
    } else if (type === 'info') {
        notification.style.backgroundColor = '#ecf0f1';
        notification.style.color = '#3498db';
    }

    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

async function Login(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

	console.log("mail",email)
	console.log("pass",password)

   
    const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	const passwordRegex = /^(?=.*[A-Z])(?=.*[\d!@#$%^&*_+=])[A-Z\d!@#$%^&*_+=][A-Za-z\d!@#$%^&*_+=]{7,}$/;


    if (!email || !password) {
        showAlert("All fields are required email: brix@gmail.com. password: Password1 ", "error");
        return;
    }

    if (!emailRegex.test(email)) {
		showAlert("Please input email: brix@gmail.com. password: Password1 ", "error");
        return;
    }


	if (password.length < 8 || !passwordRegex.test(password)) {
        showAlert("Password Incorrect", "error");
        return;
    }

    try {
     
        const user = userData.find(user => user.email === email && user.password === password);

        if (user) {
            console.log("Login successful");
            showAlert("char naka log in =w= ", "success");
            window.location.href = "home.html";
            
        } else {
            console.error("Login failed: Invalid credentials");
            showAlert("Login failed. Please check your credentials.", "error");
        }
    } catch (error) {
        console.error("An error occurred during login:", error);
        showAlert("An error occurred during login. Please try again later.", "error");
    }
}


async function Sign_up(e) {
    e.preventDefault();

	
    const username = document.getElementById('username').value;
    const emails = document.getElementById('emails').value;
    const passwords = document.getElementById('passwords').value;
    const repasswords = document.getElementById('repasswords').value;


	const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	const passwordRegex = /^(?=.*[A-Z])(?=.*[\d!@#$%^&*_+=])[A-Z\d!@#$%^&*_+=][A-Za-z\d!@#$%^&*_+=]{7,}$/;


console.log("user",username)
console.log("mail",emails)
console.log("pass",passwords)

if (!username || !emails || !passwords) {
    showAlert("All fields are required", "error");
    return;
}

if (!emailRegex.test(emails)) {
    showAlert("Email can only contain letters, numbers, '-', '_', '@', and '.'", "error");
    return;
}

if (passwords.length < 8 && !passwordRegex.test(passwords)) {
    showAlert("Password must start with an uppercase letter and contain numbers or symbols", "error");
    return;
}
if (repasswords != (passwords)) {
    showAlert("Password did not match", "error");
    return;
}

try {
    // Perform signup logic here (not implemented in the sample)
    showAlert("Signup successful! =w= ", "success");
} catch (error) {
    console.error('Error during signup:', error);
    showAlert("An error occurred during signup. Please try again later.", "error");
}

}
