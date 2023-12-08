let body = document.querySelector("body");
let id = new URLSearchParams(window.location.search).get("id");


fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        body.innerHTML = `

<h4> mehsulun idsi:${data.id};</h4>
<h2>mehsulun adi:${data.name}</h2>
<h2> mehsulun qiymeti:${data.unitPrice}</h2>
<h2> stokda var:${data.unitsInStock}<h2>
<h2> qablasdirma:${data.quantityPerUnit};</h2>
<a href="./index.html"><button>Esas sehifeye qayit</button></a>`;
    })