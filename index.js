
let signUp = document.querySelector('#sign_up_button');
signUp.addEventListener("click",function(){

   let mail = document.querySelector('#email_signup');
   let pass = document.querySelector('#pass_signup');

   mail.style.borderColor="#ABA0AF"
   pass.style.borderColor="#ABA0AF"

   let error_mail = document.querySelector('#error_mail');
   let error_pass = document.querySelector('#error_pass');
   error_mail.innerHTML=""
   error_pass.innerHTML=""

   let p = document.createElement('p');
   if(mail.value==""){
    error_mail.innerHTML=""

    p.innerText="Required"
    error_mail.append(p)

    mail.style.borderColor="rgb(246, 108, 108)"
    
   }
   else if(pass.value==""){
    // error_pass.innerHTML=""

    // p.innerText="Required"
    // error_pass.append(p)

    pass.style.borderColor="rgb(246, 108, 108)"
   }
   else{
    let obj={
        email:mail,
        password:pass,
    }
    let arr = JSON.parse(localStorage.getItem("user")) || []
    
    arr.push(obj)
    
    localStorage.setItem("user",JSON.stringify(arr))
    
   }
})

//jumping

const goo = document.querySelector('#jump_goo');
goo.addEventListener("click",function(){
    window.location.href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=online&client_id=426090949585-au9jodg0hqhc5l161evdrb667fsqf37n.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftrack.toggl.com%2Fauth&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=eyJ0eXBlIjoiZ29vZ2xlLXNpZ24tdXAiLCJjb3VudHJ5SWQiOjEwMiwicGxhbklkIjowLCJ0aW1lem9uZSI6IkV0Yy9VVEMifQ%3D%3D&flowName=GeneralOAuthFlow"
})


const app1 = document.querySelector('#jump_app_1');
app1.addEventListener("click",function(){
    window.location.href="https://appleid.apple.com/auth/authorize?client_id=com.toggl.track&scope=name%20email&response_type=code%20id_token&response_mode=form_post&redirect_uri=https%3A%2F%2Ftrack.toggl.com%2Fapi%2Fv9%2Foauth%2Fapple%2Fcallback&state=eyJ0eXBlIjoiYXBwbGUtc2lnbi11cCIsImNvdW50cnlJZCI6MTAyLCJwbGFuSWQiOjAsInRpbWV6b25lIjoiRXRjL1VUQyJ9"
})

const goo1 = document.querySelector('#jump_goo_1');
goo1.addEventListener("click",function(){
    window.location.href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=online&client_id=426090949585-au9jodg0hqhc5l161evdrb667fsqf37n.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftrack.toggl.com%2Fauth&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=eyJ0eXBlIjoiZ29vZ2xlLXNpZ24tdXAiLCJjb3VudHJ5SWQiOjEwMiwicGxhbklkIjowLCJ0aW1lem9uZSI6IkV0Yy9VVEMifQ%3D%3D&flowName=GeneralOAuthFlow"
})

const demo = document.querySelector('#book_demo');
demo.addEventListener("click",function(){
    window.location.href="#"
})


//video playing

        const button = document.querySelector("#video_btn");
		const close = document.querySelector(".close");
		const trailer = document.querySelector(".trailer");
		const video = document.querySelector("video");
        let vdo = document.querySelector('iframe');

		button.addEventListener('click', ()=>{
			trailer.style.visibility = "visible";
			trailer.style.opacity = 1;
		});

		close.addEventListener('click', ()=>{
			trailer.style.visibility = "hidden";
			trailer.style.opacity = 0;

			video.pause();
			video.currentTime = 0;
		});         


        ///appending data

        let appendData=()=>{
            return `
            <div id="one_box">
                <label class="mail_font" for="Email">Email</label><br>
                <input type="email" id="email_append" placeholder="Email">
                <div id="append_error_mail"></div>
            </div>
            <div id="two_box">
                <label class="mail_font" for="pass">Password</label><br>
                <input type="password" id="pass_append" placeholder="Password">
                <div id="append_error_pass"></div>
            </div>
            <button onclick="other()" class="scnd_boxes_first_row_btn" id="btn_append">Sign up via email</button>`
        }
        
        // let in_from = document.querySelector('#append_form');
        // in_from.innerHTML=appendData()

       var change = false

        let inside_btn = document.querySelector('signup_form_last_btn');
        signup_form_last_btn.addEventListener("click",function(){
            // console.log("hi")
            if(change==false){
                // console.log("hi")
                let in_from = document.querySelector('#append_form');
                in_from.innerHTML=appendData()
                change=true
            }
            else{
                // console.log("no hi")
                let in_from = document.querySelector('#append_form');
                in_from.innerHTML=""
                change=false
            }
        })


// other from filling 


function other(){
// console.log("hi")
   let append_mail = document.querySelector('#email_append');
   let append_pass = document.querySelector('#pass_append');
//    console.log(mail)

   append_mail.style.borderColor="#ABA0AF"
   append_pass.style.borderColor="#ABA0AF"

   let append_error_mail = document.querySelector('#append_error_mail');
   let append_error_pass = document.querySelector('#append_error_pass');

   append_error_mail.innerHTML=""
   append_error_pass.innerHTML=""
    
let p = document.createElement('p');
    
    p.innerText=""
    append_error_mail.append(p)

   if(append_mail.value==""){
    append_error_mail.innerHTML=""
    p.innerText=""
    // append_error_mail.append(p)

    p.innerText="Required"
    append_error_mail.append(p)

    append_mail.style.borderColor="rgb(246, 108, 108)"
    
   }
   else if(append_pass.value==""){
    append_error_pass.innerHTML=""

    p.innerText="Required"
    append_error_pass.append(p)

    append_pass.style.borderColor="rgb(246, 108, 108)"
   }
   else{
    let obj={
        email:mail,
        password:pass,
    }
    let arr = JSON.parse(localStorage.getItem("user")) || []
    
    arr.push(obj)
    
    localStorage.setItem("user",JSON.stringify(arr))
    
   }
}


