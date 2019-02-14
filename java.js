const template = document.querySelector("template").content;
let main1 = document.querySelector("#first");


// starters


let clone = template.cloneNode(true);

console.log(clone);

clone.querySelector("img").src = "imgs/medium/ringbroed-druer-md.jpg";

clone.querySelector("h2").textContent = "Russian Ringbread";
clone.querySelector("p").textContent = "Russisk ringbrød af Karapatisk mel";

clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "29 kr";


main1.appendChild(clone);


clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/rodbede-cabanossi-md.jpg";

clone.querySelector("h2").textContent = "Cabanossi with beetrootcreme";
clone.querySelector("p").textContent = "Cabanossi med rødbedecreme og løg";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "49 kr";



main1.appendChild(clone);

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/baltiskbondesuppe-md.jpg";

clone.querySelector("h2").textContent = "Baltic farmers soup";
clone.querySelector("p").textContent = "Baltisk bondesuppe - en solid starter";

clone.querySelector("h3.price").textContent = "79 kr";



main1.appendChild(clone);

// mains

let main2 = document.querySelector("#second");

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/bulgarskbondesuppe-md.jpg";

clone.querySelector("h2").textContent = "Bulgarian farmers soup";
clone.querySelector("p").textContent = "Cauceskus bulgarske bondesuppe";

clone.querySelector("h3.price").textContent = "99 kr";



main2.appendChild(clone);



clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/mos-rogn-md.jpg";

clone.querySelector("h2").textContent = "Giant row with mashed potatoes";
clone.querySelector("p").textContent = "Kæmpe klipfiskerogn med Kartofler og fiskefond";
clone.querySelector("h3.oldPrice").textContent = "89 kr";
clone.querySelector("h3.price").textContent = "39 kr";



main2.appendChild(clone);

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/boef-md.jpg";

clone.querySelector("h2").textContent = "Stake with vegetables";
clone.querySelector("p").textContent = "Diplomat-bøf med grønt";
clone.querySelector("h3.price").textContent = "159 kr";
clone.querySelector("h3.oldPrice").textContent = "179 kr";




main2.appendChild(clone);


// desserts

let main3 = document.querySelector("#third");

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/kaviarpandekager-md.jpg";

clone.querySelector("h2").textContent = "Pancakes with Caviar";
clone.querySelector("p").textContent = "Brændte pandekager med Bordyriske ørne-kaviar";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "79 kr";



main3.appendChild(clone);

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/guzni-md.jpg";

clone.querySelector("h2").textContent = "Guzni";
clone.querySelector("p").textContent = "Guzni - Rødbede/nøddeis ";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "69 kr";



main3.appendChild(clone);


clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/kirgisiskroulade-md.jpg";

clone.querySelector("h2").textContent = "Kyrgyzian roulade";
clone.querySelector("p").textContent = "Kirgisisk roulade bestående af nødder og rødkål ";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "89 kr";



main3.appendChild(clone);

// drinks

let main4 = document.querySelector("#fourth");

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/bochkarev-md.jpg";

clone.querySelector("h2").textContent = "Bochkarev beer";
clone.querySelector("p").textContent = "En halv liter Bochkarev fadøl";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "55 kr";



main4.appendChild(clone);

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/voda-md.jpg";

clone.querySelector("h2").textContent = "Voda-vodka";
clone.querySelector("p").textContent = "Voda-vodka - vodka i rigelige mængder";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "19 kr";



main4.appendChild(clone);

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/cola-md.jpg";

clone.querySelector("h2").textContent = "Gloske (cola)";
clone.querySelector("p").textContent = "Gloske - russisk for Cola - fra bryggeriet Iznogoud";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "39 kr";



main4.appendChild(clone);


// side orders

let main5 = document.querySelector("#fifth");

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/ringbroed-md.jpg";

clone.querySelector("h2").textContent = "Russian Ringbread";
clone.querySelector("p").textContent = "Russisk ringbrød bagt med det fineste gryzni-mel fra Gryzkigistan";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "29 kr";

clone.querySelector("p.soldOut").textContent = "Sold out";



main5.appendChild(clone);

clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/bondeboller-md.jpg";

clone.querySelector("h2").textContent = "Murman farmer buns";
clone.querySelector("p").textContent = "Murmanske bondeboller bagt i stenovn";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "19 kr";



main5.appendChild(clone);


clone = template.cloneNode(true);
console.log(clone);

clone.querySelector("img").src = "imgs/medium/russisksalat-md.jpg";

clone.querySelector("h2").textContent = "Russian salad";
clone.querySelector("p").textContent = "Russisk salat med ærter, bønner, gulerødder og mayonnaise fra Volgograd";
clone.querySelector("p.vegetarian").textContent = "🌱 vegetarian";
clone.querySelector("h3.price").textContent = "49 kr";



main5.appendChild(clone);

