let spinner = document.querySelector('.spinner');
let nameInp = document.querySelector("#name");
let priceInp = document.querySelector("#price");
let stockInp = document.querySelector("#stock");

let error = document.querySelector(".xana");
let done = document.querySelector(".xana2");

let Addbtn = document.querySelector("#addProduct");

spinner.style.display = "none";

Addbtn.addEventListener("click", () => {
    spinner.style.display = "none";
    let nameValueAdd = nameInp.value.trim();
    let unitPraceValueAdd = priceInp.value.trim();
    let unitsInStockValueAdd = stockInp.value.trim();

    if (nameValueAdd === "" || unitPraceValueAdd === "" || unitsInStockValueAdd === "") {
   error.style.display="flex";
   setTimeout(() => {
    error.style.display="none"
   },3000);
   return;
    }
    error.style.display="none";
    spinner.style.display="flex";


    axios.post("https://northwind.vercel.app/api/products",{
        name: nameValueAdd,
        unitPrice:unitPraceValueAdd,
        unitsInStock: unitsInStockValueAdd
    })
.then((res)=>{
setTimeout(() => {
    window.location="./index.html";
},3000);
spinner.style.display="none";
done.innerHTML+=`ID Nömrəsi : ${res.data.id}`;
done.style.display="flex"
});



});
