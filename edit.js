let id = new URLSearchParams(window.location.search).get("id");
let table1 = document.querySelector(".table1");
let spinner = document.querySelector('.spinner');
let div = document.querySelector(".xana");
let div2 = document.querySelector(".xana2");
div.style.display = "none"
div2.style.display = "none";
fetch(`https://northwind.vercel.app/api/products/${id}`)
  .then(response => response.json())
  .then(data => {
    spinner.style.display = 'none';
    table1.innerHTML =
      `
        <tr>
        <th>Id</th>
        <th >Name</th>
        <th >Price</th>
        <th >Strock</th>
        <th>Save</th>      
      </tr>
        <tr>
        <td>${data.id}</td>
        <td><input type="text" id="name" value="${data.name}"></td>   
        <td><input type="text" id="unitPrace" value="${data.unitPrice}"></td>   
        <td><input type="text" id="unitsInStock" value="${data.unitsInStock}"></td>   
        <th><button id="save">Save</button></th>  
      </tr>
        `
    let name = document.querySelector("#name");
    let unitPrace = document.querySelector("#unitPrace");
    let unitsInStock = document.querySelector("#unitsInStock");

    let save = document.querySelector("#save");

    save.addEventListener("click", () => {

      let nameValue = name.value.trim();
      let unitPraceValue = unitPrace.value.trim();
      let unitsInStockValue = unitsInStock.value.trim();

      if (nameValue === "" || unitPraceValue === "" || unitsInStockValue === "") {
        div.style.display = "flex";
        setTimeout(() => {
          div.style.display = "none";
        }, 2000);
        return;
      }


      let obj = {
        name: nameValue,
        unitPrace: unitPraceValue,
        unitsInStock: unitsInStockValue
      };

      axios.patch("https://northwind.vercel.app/api/products/" + id, obj)
        .then(res => {
          console.log(res.data);
          div2.style.display = "flex";
          setTimeout(() => {
            div2.style.display = "none";
          }, 3000);
          return;
        })

      setTimeout(() => window.location = '../index.html', 3000);
    });

  })


