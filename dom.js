let k=document.getElementById("div")
k.style.backgroundColor="red"
k.style.height="60px"
k.textContent="hello"
k.style.color="white"
k.innerHTML=`<p>this is geadey</p><p>this is new line</p>`
//div for deletion
let pchildElem=document.createElement("div")
pchildElem.style.backgroundColor="green"
pchildElem.textContent="hello world"
pchildElem.style.height="50px"
pchildElem.style.marginTop="5px"
pchildElem.style.textAlign="center"
pchildElem.style.color="white"
document.body.appendChild(pchildElem)
//appendchild
let girlImage=document.createElement("img")
girlImage.src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
girlImage.width="400"
girlImage.style.marginTop="5px"
girlImage.style.border="2px solid black"
document.body.appendChild(girlImage)
//removes green div
document.body.removeChild(pchildElem)
//new image creation for replacing
let newImage=document.createElement("img")
newImage.src="https://pixlr.com/images/generator/how-to-generate.webp"
newImage.width="300"
newImage.style.marginLeft="20px"
newImage.style.marginTop="20px"
newImage.style.borderRadius="10px"
document.body.appendChild(newImage)
//replace child
document.body.replaceChild(newImage,girlImage)
//clone
const clonedElem=girlImage.cloneNode(true)
document.body.append(clonedElem)
//modifying
let saipallavi=document.createElement("img")
saipallavi.setAttribute("src","https://i.pinimg.com/originals/8c/c1/bd/8cc1bd908f2ab85134f9367e29b7e1da.jpg")
saipallavi.setAttribute("width","300")
saipallavi.style.backgroundColor="green"
saipallavi.style.padding="30px"
saipallavi.style.border="5px dashed black"
saipallavi.style.margin="10px"
document.body.appendChild(saipallavi)
console.log(saipallavi.getAttribute("width"))//3
//classes
let divTag=document.createElement("div")
divTag.className="container"
divTag.classList.add("mango")
divTag.classList.add("apple")
divTag.classList.add("orange")
divTag.classList.add("banana")
divTag.classList.remove("apple")
console.log(divTag.classList.toggle("mango"))//removes banana
console.log(divTag.classList.contains("orange"))
console.log(divTag)
divTag.classList.replace("banana","guava")
console.log(divTag)

function applyStyle(){
let styleDiv=document.getElementById("styleDiv")
styleDiv.style.backgroundColor="blue"
styleDiv.style.color="white"
styleDiv.textContent="append"
styleDiv.width="400"
}

console.log(divTag.childNodes)
console.log(styleDiv.parentNode)
function alertClick(){
    alert("clicked!")
}
 function addEvent(){
    alert("event added")
 }
 function removeEvent(){
    alert("event removed")
 }

const parent=document.getElementById("parent")
const child1=document.getElementById("child1")
const child2=document.getElementById("child2")
console.log(parent.childNodes)
console.log(parent.children)
console.log(parent.firstChild)
console.log(parent.firstElementChild)
console.log(child1.nextSibling)
console.log(child1.nextElementSibling)


function submitForm(){
    document.getElementById("my_form").submit();
}
function resetForm(){
    document.getElementById("my_form").reset();
}

