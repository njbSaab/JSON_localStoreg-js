let data = localStorage.getItem('msgList')
let msgList = []


if(data !== "" && data !==null){
    msgList = JSON.parse(data)
}

console.log(msgList);

function createNewMsg(obj){
    const itemMessage = document.createElement("li");
    itemMessage.classList.add("card")

    const itemTitle = document.createElement("h2")
    itemTitle.classList.add("card-header")
    itemTitle.textContent = obj.name

    const itemText = document.createElement("p")
    itemText.classList.add("card-text")
    itemText.textContent = obj.message


    itemMessage.append(itemTitle)
    itemMessage.append(itemText)

    document.getElementById('msg-list').append(itemMessage)
}
for(const msg of msgList){
  createNewMsg()
}

localStorage.setItem('name', 'NJ')
localStorage.setItem('age', 31)

document
  .getElementById("add-msg-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let userName = document.getElementById("name-inp").value;
    let message = document.getElementById("msg-inp").value;


    let msgObj = {
        name: userName,
        message: message

    }

    msgList.push(msgObj)

    localStorage.setItem('msgList', JSON.stringify(msgList))

    createNewMsg(msgObj)

    
    document.getElementById("msg-inp").value = ""
  });
