let users = [ 
{profilePic: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww",

    displayPic: "https://images.unsplash.com/photo-1519895609939-d2a6491c1196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
 pendingMessage: 4,
 location: "karachi, lahore",
 name: "Sana",
 age: 24,
 interests: ["music", "games", "painting"],
 bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sunt excepturi ea consequatur eius reprehenderit? Temporibus eaque ducimus omnis nemo.",

 isFriend: null
},
{profilePic: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    displayPic: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 222,
    location: "islambad, muree",
    name: "maria",
    age: 88,
    interests: ["music", "games", "painting"],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sunt excepturi ea consequatur eius reprehenderit? Temporibus eaque ducimus omnis nemo.",
  
    isFriend: null
   },
   {profilePic: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",

    displayPic: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 9,
    location: "Peshaawar, india",
    name: "hassan",
    age: 25,
    interests: ["music", "games", "painting"],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sunt excepturi ea consequatur eius reprehenderit? Temporibus eaque ducimus omnis nemo.",
    
    isFriend: null
   },
   {profilePic: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    displayPic: "https://images.unsplash.com/photo-1568038479111-87bf80659645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 10,
    location: "Dehli, india",
    name: "rehana",
    age: 55,
    interests: ["music", "games", "painting"],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sunt excepturi ea consequatur eius reprehenderit? Temporibus eaque ducimus omnis nemo.",
    
    isFriend: null
   },

]
var maincard = document.querySelector(".maincard");
var incomingcard = document.querySelector(".incomingcard");
var deny = document.querySelector(".deny");
var accept = document.querySelector(".accept");


function select(elem){
return document.querySelector(elem);
}
let curr = 0;
let isAnimating = false;


function setData(index){
    select("#image img").src = users[index].profilePic
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".names h1").textContent = users[index].name;
    select(".names .age").textContent = users[index].age;
    select(".bio p").textContent = users[index].bio;

    var clutter = 0;
    users[index].interests.forEach(function(interest){
    clutter += `<div class="tag flex gap-3 items-center bg-white/30 px-4 py-2 gap-3 mt-2 rounded-full">
                <i class='bx bx-music'></i>
                <h2 class="text-xl tracking-tight capitalize">${interest}</h2>
              </div>`
    })
    select(".tags").innerHTML = clutter
    
    
}

function setinitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;

        setData(curr)

 

   
curr = 2
}

setinitial()


function imagechange(){
    if(!isAnimating){
        isAnimating = true
let tl = gsap.timeline({
    onComplete: function(){
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.add("incomingcard");


        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
            gsap.set(main, {
                scale: 1,
                opacity: 1,
            })
            if(curr === users.length) curr = 0;
            select(".maincard img").src = users[curr].displayPic;
          
            curr++
            main.classList.remove("maincard");
            incoming.classList.add("maincard");
            maincard.classList.add("incomingcard")
        
    }
});
tl.to(".maincard", {
    scale: 1.1,
    opacity: 0,
    ease: Circ,
    duration: .9

}, "a")
.from(".incomingcard", {
    scale: 9,
    opacity: 0,
    ease: Circ,
    duration: 1.1

}, "a")
}
}

deny.addEventListener("click", function(){
    imagechange();
    setData(curr-1)
   gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: .1,
        ease: Circ,
        duration: 1,
    
    })
    })
    accept.addEventListener("click", function(){
        console.log("accept")
    })


    function containerCreator(){
        document.querySelectorAll(".element").forEach(function(element){
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`);
            div.appendChild(element);
            select(".details").appendChild(div)
            //console.log(div)
            })
    }



containerCreator()
///  select(".incomingcard img").src = users[curr+1].displayPic;