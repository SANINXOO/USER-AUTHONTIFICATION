document.getElementById("btn-login").addEventListener("click",()=>{
    
    let user=document.getElementById("username").value
    let password=document.getElementById("password").value


    fetch("http://localhost:3005/authentication/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        user,password
    })
  })
    .then((res) => {
      if(res.status==200)
      {
        alert("Login Succesfull")
      }
      else
      {
        alert("Login Failed")
      }
    })
    .catch((error)=>{alert("server not connected")})


})