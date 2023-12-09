let body = document.querySelector("body");
let div=document.querySelector(".div");
let id = new URLSearchParams(window.location.search).get("id");


fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        div.innerHTML = `

<h4>Məhsulun ünvanı:${data.id};</h4>
<h2>Məhsulun adı:${data.name}</h2>
<h2>Məhsulun qiyməti:${data.unitPrice}</h2>
<h2>Qablaşdırma:${data.quantityPerUnit}</h2>
<h2>Stokda var:${data.unitsInStock}<h2>
<a href="./index.html"><button>Əsas səhifəyə qayıt!</button></a>`;
    })

    console.log("hjghghgh");