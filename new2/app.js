function signup() {
    let users = JSON.parse(localStorage.getItem("user")) || [];
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let value = false;
    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email) {
            value = true;
            alert("email already register");
        }
    }
    if (value === false) {
        let data = [];
        data.push({ name, email, password })
        let alluser = [...data, ...users]
        localStorage.setItem('user', JSON.stringify(alluser));  
    }
}

function login() {
    let mail = document.getElementById("log_email").value;
    let pass = document.getElementById("log_password").value;


    let user = JSON.parse(localStorage.getItem("user"));
    let val = false;
    for (let i = 0; i < user.length; i++) {
        if (mail === user[i].email && pass === user[i].password) {
            val = true;
            window.location.href = "index.html"
        }
    }
    if (val === false) {
        alert("invalid email or password");
    }
}

// document.getElementById("create_team").style.display = "none";

function createteam() {
    document.getElementById("create_team").style.display = "block";
}

document.getElementById("child_container").style.display = "none";

function create() {
    let all_data = JSON.parse(localStorage.getItem("data")) || [];
    document.getElementById("child_container").style.display = "block";
    document.getElementById("create_team").style.display = "none";
    let create_team = document.getElementById("my_team");
    let member_name = document.getElementById("member_name").value;
    let team_name = document.getElementById("team_name").value;
    let person_email = document.getElementById("person_email").value;
    let div = document.createElement("div");
    div.classList.add("div-text");
    let team_Name = document.createTextNode(team_name);
    let space = document.createElement("br");
    let team_member = document.createTextNode(`member : ${member_name}`)
    div.appendChild(team_Name);
    div.appendChild(space);
    div.appendChild(team_member);
    create_team.appendChild(div);
    let all = document.getElementsByClassName("div-text");
    let data = [];
    data.push({all})
    localStorage.setItem('data', JSON.stringify(data));  

}

function cancel() {
    window.location.href = "index.html"
}