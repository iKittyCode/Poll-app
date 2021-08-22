var sendbutton = document.getElementById("sumbit")
var starwars = 0;
var marvel = 0;
sendbutton.onclick = async () => {
    var choice = prompt("Do you like marvel or starwars better reply in no caps and if you choose starwars put no spaces in between")
    fetch('/api',  {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
     
    },
    body:JSON.stringify({choice})
    })
location.reload()
}
async function getData() {
    var data = await fetch('/api')
    var json = await data.json()
    console.log(json)
    for (let i = 0; i < json.length; i++) {
    if (json[i].choice == "starwars") {
    starwars +=1
    } else if(json[i].choice == "marvel") {
    marvel +=1
    }
    
    }
   var root = document.createElement('div')
   var dog_amount = document.createElement('div')
   dog_amount.textContent = "marvel fans: " + marvel
   var cat_amount = document.createElement('div')
   cat_amount = "starwars fans: " + starwars
   root.append(cat_amount, dog_amount)
   root.style = "text-align:center;"
   document.body.append(root)
    }
    getData()

