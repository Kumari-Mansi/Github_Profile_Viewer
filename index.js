let btn = document.getElementById("btn");
let user = document.getElementById("userID")

async function fetchUser(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error("User not found");
        }
        let result = await response.json();
        userData(result);
    } catch (err) {
        document.getElementById("userProfile").innerHTML = `<h2>${err.message}</h2>`;
    }
}

btn.addEventListener('click',()=>{
   let userId = user.value;
    fetchUser(userId)
     document.getElementById("userProfile").innerHTML=`<span class="loader"></span>`
})
function userData({
    avatar_url,name,bio,followers,following,public_repos,html_url}){
        if(!avatar_url){
             document.getElementById("userProfile").innerHTML=`<h1>User Not found</h1>`
            return        }

            if(!bio){
                bio=""
            }
             if(!name){
                name="Anonymous"
            }
         document.getElementById("userProfile").innerHTML=`
   <div class="userInfo">
            <img src=${avatar_url} alt="" class="userimg">
            <div class="userdetail">
                <p class="username">${name}</p>
                <p class="userbio">${bio}</p>
            </div>
        </div>
        <div class="follower">
            <div class="userfollow">
                <div class="repo">
                    <p>Followers</p>
                    <p>${followers}</p>
                </div>
                <div class="repo">
                    <p>Following</p>
                    <p>${following}</p>
                </div>
                <div class="repo">
                    <p>Repository</p>
                    <p>${public_repos}</p>
                </div>
            </div>
           <a href=${html_url} target="_blank"  class="visitprofile"> <div>View Profile</div></a>
        </div>`
    
}



// https://api.github.com/users/mansi


    
   