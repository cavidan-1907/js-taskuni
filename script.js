
let searchInput=document.querySelector("#search");
let table=document.querySelector(".table");
let tbody=document.querySelector(".tbody");
let spinner =document.querySelector('.spinner');


const deleteB= (id) => {
  axios.delete('https://northwind.vercel.app/api/products/'+id)
  .then(res=>{
    console.log(res.data);
    alert(`${id} nömrəli məhsul uğurla silindi!`)
    window.location.reload();
  })
}
fetch(`https://northwind.vercel.app/api/products`)
.then(response=>response.json())
.then(data=>{
  spinner.style.display= 'none';
    data.forEach(element => {
        tbody.innerHTML +=
        `
        <tr>
        <td>${element.id}</td>
        <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
        <td>${element.unitPrice}</td>
        <td>${element.unitsInStock}</td>
        <a href="delete.html"></a>
        <th><a href="uptade.html?id=${element.id}">  <button id="Uptade">Edit</button></a></th>  
        <td><button onClick='deleteB(${element.id})'>delete</button></td>
      </tr>
        `
        
    });
    searchInput.addEventListener("input",(e)=>{
 let dataS=data.filter(element=>{
    
       return element.name.toLowerCase().startsWith((e.target.value).toLowerCase())
       
});

tbody.innerHTML=" "
dataS.forEach(element => {
    tbody.innerHTML +=`
    <tr>
    <td>${element.id}</td>
    <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
    <td>${element.unitPrice}</td>
    <td>${element.unitsInStock}</td>
    <a href="delete.html"></a>
    <th><a href="uptade.html">  <button id="Uptade">Edit</button></a></th>  
    <th> <button>delete</button></th>
  </tr>
`
});
});
});
