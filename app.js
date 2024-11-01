var arr = [];

function saveDetails(){
    var  obj = {
 name: document.getElementById('name').value,
 fname: document.getElementById('fname').value,
 id: document.getElementById('id').value,
 number: document.getElementById('number').value,
 email: document.getElementById('email').value,
    }
    arr.push(obj);
    console.log(obj)
    console.log(arr)

    localStorage.setItem("name", obj.name);
    localStorage.setItem("fname", obj.fname);
    localStorage.setItem("id", obj.id);
    localStorage.setItem("number", obj.number);
    localStorage.setItem("email", obj.email);

    // var name = localStorage.getItem("name");
    // var fname = localStorage.getItem("fname");
    // var id = localStorage.getItem("id");
    // var number = localStorage.getItem("number");
    // var email = localStorage.getItem("email");

    // console.log(name);
    // console.log(fname);
    // console.log(id);
    // console.log(number);
    // console.log(email);
    
    // document.getElementById("display-name").innerHTML = "name:" + name;
    // document.getElementById("display-fname").innerHTML = "father_name:" + fname;
    // document.getElementById("display-id").innerHTML = "id:" + id;
    // document.getElementById("display-number").innerHTML = "number:" + number;
    // document.getElementById("display-email").innerHTML = "email:" + email;
}

function show(){        
    document.getElementById("display-name").innerHTML = "Name: " + localStorage.getItem("name");
    document.getElementById("display-fname").innerHTML = "Father_Name: " + localStorage.getItem("fname");
    document.getElementById("display-id").innerHTML = "ID: " + localStorage.getItem("number");
    document.getElementById("display-number").innerHTML = "Number: " + localStorage.getItem("id");
    document.getElementById("display-email").innerHTML = "Email: " + localStorage.getItem("email");

    // localStorage.clear();
    
}
       