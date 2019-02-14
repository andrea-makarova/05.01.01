const template = document.querySelector("template").content;
const imgLink = "https://kea-alt-del.dk/t5/site/imgs/";
const productlistLink = "http://kea-alt-del.dk/t5/api/productlist"
let main1 = document.querySelector("#first");
let main2 = document.querySelector("#second");
let main3 = document.querySelector("#third");
let main4 = document.querySelector("#fourth");
let main5 = document.querySelector("#fifth");

// starters
fetch(productlistLink).then(e => e.json()).then(data => data.forEach(showData));



function showData(oneObject) {
    console.log(oneObject.name);
    let clone = template.cloneNode(true);
    clone.querySelector("img").src = imgLink + "medium/" + oneObject.image + "-md.jpg";
    clone.querySelector("img").alt = oneObject.image;
    clone.querySelector("h2").textContent = oneObject.name;
    clone.querySelector("p").textContent = oneObject.shortdescription;
    if (oneObject.vegetarian == true) {
        clone.querySelector("p.vegetarian").textContent = "🌱 Vegetarian";
    };
    if (oneObject.alcohol !== 0) {
        clone.querySelector("p.alcohol").textContent = "Contains " + oneObject.alcohol + " % of alcohol";
    };
    if (oneObject.discount !== 0) {
        clone.querySelector("h3.oldPrice").textContent = oneObject.price + " kr";
        clone.querySelector("h3.price").textContent = oneObject.price - oneObject.discount + " kr";
    } else {
        clone.querySelector("h3.price").textContent = oneObject.price + " kr";
    }
    if (oneObject.soldout == true) {
        clone.querySelector("p.soldOut").textContent = "Sold out";
        clone.querySelector("img").style.opacity = 0.3;
    }


    if (oneObject.category == "starter") {
        main1.appendChild(clone);
    }
    if (oneObject.category == "main") {
        main2.appendChild(clone);
    }
    if (oneObject.category == "dessert") {
        main3.appendChild(clone);
    }
    if (oneObject.category == "drinks") {
        main4.appendChild(clone);
    }
    if (oneObject.category == "sideorders") {
        main5.appendChild(clone);
    }

}
