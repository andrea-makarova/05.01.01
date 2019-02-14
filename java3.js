const template = document.querySelector("template").content;
const main = document.querySelector("main");
const imgLink = "https://kea-alt-del.dk/t5/site/imgs/";
const productlistLink = "http://kea-alt-del.dk/t5/api/productlist";
const catLink = "http://kea-alt-del.dk/t5/api/categories";



fetch(catLink).then(e => e.json()).then(data => createCatSections(data));

function createCatSections(categories) {
    console.log(categories);
    categories.forEach(cat => {
        const newSection = document.createElement("section");
        const newHeader = document.createElement("h1");
        newSection.id = cat;
        newHeader.textContent = cat;
        main.appendChild(newHeader);
        main.appendChild(newSection);
    })
    fetch(productlistLink).then(e => e.json()).then(data => data.forEach(showData));
}


function showData(oneObject) {
    const section = document.querySelector("#" + oneObject.category);
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
    section.appendChild(clone)
}
