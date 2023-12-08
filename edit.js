let id = new URLSearchParams(window.location.search).get("id");
let table1 = document.querySelector(".table1");



fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(response => response.json())
    .then(data => {

        table1.innerHTML = `
        <tr>
        <th>Id</th>
        <th >Name</th>
        <th >Price</th>
        <th >Strock</th>
    <th></th>    
    <th></th>    
      </tr>
        <tr>
        <td>${data.id}</td>
        <td><input type="text" id="name" value="${data.name}"></td>   
        <td><input type="text" id="unitPrace" value="${data.unitPrice}"></td>   
        <td><input type="text" id="unitsInStock" value="${data.unitsInStock}"></td>   
        <th><button id="save">Save</button></th>  
        <th> <button id="edit">delete</button></th>
      </tr>
        `
        let name = document.querySelector("#name");
        let unitPrace = document.querySelector("#unitPrace");
        let unitsInStock = document.querySelector("#unitsInStock");

        let save = document.querySelector("#save");

        save.addEventListener("click", () => {


            obj = {
                name: name.value,
                unitPrace: unitPrace.value,
                unitsInStock: unitsInStock.value
            }
            axios.patch("https://northwind.vercel.app/api/products/" + id, obj).then(res => console.log(res.data))

            console.log(obj);

            setTimeout(()=>window.location='../index.html', 3000)
        })
    })


