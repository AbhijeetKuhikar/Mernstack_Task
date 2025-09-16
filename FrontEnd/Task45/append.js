function unorderedlist(){
let list= document.querySelector("#ul1")

let li1=document.createElement("li")
let li2=document.createElement("li")
let li3=document.createElement("li")
let li4=document.createElement("li")
let li5=document.createElement("li")
let li6=document.createElement("li")

li1.innerText="this is sentence no 1"
li2.innerText="sentence no 2"
li3.innerText="3 no sentence"
li4.innerText="senetnec no 4"
li5.innerText="sentence no 5"
li6.innerText="finally sentence no 6"

list.append(li1)
list.append(li2)
list.append(li3)
list.append(li4)
list.append(li5)
list.append(li6)

return list
}
unorderedlist()

function Orderedlist(){
    let ol=document.querySelector("#ol1")

    let objects=["grapes","muskmelon","watermelon","mango","banana"]

    for(let i=0; i<objects.length;i++){
        let lii1=document.createElement("li")
        lii1.innerText=objects[i]
        ol.appendChild(lii1)


    }
    return ol
}
Orderedlist()