let searchInput=document.querySelector("#search");
let table=document.querySelector(".table");
fetch(`https://northwind.vercel.app/api/products`)
.then(response=>response.json())
.then(data=>{
    data.forEach(element => {
        table.innerHTML +=`
        <tr>
        <td>${element.id}</td>
        <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
        <td>${element.unitPrice}</td>
        <td>${element.unitsInStock}</td>
        <a href="delete.html"></a>
        <th><a href="uptade.html?id=${element.id}">  <button id="Uptade">Uptade</button></a></th>  
        <th> <button id="edit">delete</button></th>
      </tr>
        `
    });
    searchInput.addEventListener("input",(e)=>{
 let dataS=data.filter(element=>{
    
       return element.name.toLowerCase().startsWith((e.target.value).toLowerCase())
       
});

table.innerHTML=`
<tr>
<th class="id">Id</th>
<th id="name">Name</th>
<th id="price">Price</th>
<th id="stroch">Strock</th>
<th></th>    
<th></th>

</tr>`
dataS.forEach(element => {
    table.innerHTML +=`
    <tr>
    <td>${element.id}</td>
    <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
    <td>${element.unitPrice}</td>
    <td>${element.unitsInStock}</td>
    <a href="delete.html"></a>
    <th><a href="uptade.html">  <button id="Uptade">Uptade</button></a></th>  
    <th> <button id="edit">delete</button></th>
  </tr>
`
});
});
});
