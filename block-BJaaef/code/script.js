let ul = document.querySelector("ul");
    got.houses.forEach(house => {
    house.people.forEach(peoples => { 
   let li = document.createElement("li")
   li.classList.add("card","flex-30")
   let img = document.createElement("img")
   img.src =peoples.image
   let span = document.createElement("span")
   span.innerText =peoples.name
   let h2  =document.createElement("h2")
   h2.innerText =peoples.description
   let button =document.createElement("button")
   button.classList.add("btn")
   button.innerText ="Learn More"
   li.append(img,span, h2, button)
   ul.append(li)
  console.log(ul);
    })
      });