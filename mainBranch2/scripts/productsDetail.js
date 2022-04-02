let obj = JSON.parse(localStorage.getItem("productDetails"));
    let img = document.querySelector("#div-below-addtocart>div>img");
    img.src = obj.Img[0];
    img.style.width = "390px";
    img.style.height = "390px";

    let td1 = document.querySelector("#designtd");
    let td2 = document.querySelector("#typetd");
    
    td1.innerText = obj.Type;
    td1.style.fontSize = "15px";
    td2.innerText = obj.Type;
    td2.style.fontSize = "15px";

    const moreInfo = () => {
        let div = document.getElementById("everything-goes-here");
        
        div.innerHTML = null;
        div.style.display = "block";
        let productSpecifications = document.getElementById("productSpecifications");
        productSpecifications.style.textDecoration = "none";

        let moreInfo = document.getElementById("moreInfo");
        moreInfo.style.textDecoration = "underline";

        let p1 = document.createElement('p');
        p1.innerText = "Titan Company Limited,Jewellery Division 29,Sipcot Industrial Complex,Hosur - 635126, Krishnagiri District,Tamil Nadu.";
        let p2 = document.createElement('p');
        p2.innerText = "Country Of Origin - India";
        let p3 = document.createElement('p');
        p3.innerText = "Imported By - Titan Company Limited,Jewellery Division 29,Sipcot Industrial Complex,Hosur - 635126, Krishnagiri District,Tamil Nadu.";
        let p4 = document.createElement('p');
        p4.innerText = "Net Quantity: 1 N";
        let p5 = document.createElement('p');
        p5.innerText = "Contact customer care executive at the manufacturing address above or call us at 1800-266-0123. Email us at customercare@titan.co.in";

        div.append(p1,p2,p3,p4,p5);
    }


    const productSpecifications = () => {
        let div = document.getElementById("everything-goes-here");

        div.innerHTML = null;
        div.style.display = "flex"
        let moreInfo = document.getElementById("moreInfo");
        moreInfo.style.textDecoration = "none";


        let productSpecifications = document.getElementById("productSpecifications");
        productSpecifications.style.textDecoration = "underline";
        
        let div1 = document.createElement('div');
        let table1 = document.createElement('table');
        let tr1 = document.createElement('tr')
        tr1.setAttribute("class","tr-row-height-set")
        
        let td1tr1 = document.createElement('td')
        td1tr1.innerText = "PURITY";
        let td2tr1 = document.createElement('td')
        td2tr1.innerText = "22.00";
        tr1.append(td1tr1,td2tr1);
        

        let tr2 = document.createElement('tr')
        tr2.setAttribute("class","tr-row-height-set")
        let td1tr2 = document.createElement('td')
        td1tr2.innerText = "TYPE";
        let td2tr2 = document.createElement('td')
        td2tr2.innerText = obj.Type;
        tr2.append(td1tr2,td2tr2);


        let tr3 = document.createElement('tr')
        tr3.setAttribute("class","tr-row-height-set")
        let td1tr3 = document.createElement('td')
        td1tr3.innerText = "COLLECTION";
        let td2tr3 = document.createElement('td')
        td2tr3.innerText = "Shagun";
        tr3.append(td1tr3,td2tr3);


        let tr4 = document.createElement('tr')
        tr4.setAttribute("class","tr-row-height-set")
        let td1tr4 = document.createElement('td')
        td1tr4.innerText = "FINDING";
        let td2tr4 = document.createElement('td')
        td2tr4.innerText = "B";
        tr4.append(td1tr4,td2tr4);


        let tr5 = document.createElement('tr')
        tr5.setAttribute("class","tr-row-height-set")
        let td1tr5 = document.createElement('td')
        td1tr5.innerText = "PRODUCT";
        let td2tr5 = document.createElement('td')
        td2tr5.innerText = "Earing";
        tr5.append(td1tr5,td2tr5);


        let tr6 = document.createElement('tr')
        tr6.setAttribute("class","tr-row-height-set")
        let td1tr6 = document.createElement('td')
        td1tr6.innerText = "OCCASION";
        let td2tr6 = document.createElement('td')
        td2tr6.innerText = "Modern Wear";
        tr6.append(td1tr6,td2tr6);



        let tr7 = document.createElement('tr')
        tr7 .setAttribute("class","tr-row-height-set")
        let td1tr7 = document.createElement('td')
        td1tr7.innerText = "PRODUCT WIDTH";
        let td2tr7 = document.createElement('td')
        td2tr7.innerText = "8 mm";
        tr7.append(td1tr7,td2tr7);

        table1.append(tr1,tr2,tr3,tr4,tr5,tr6,tr7);
        div1.append(table1);

        div1.style.flex = "1";
        div1.style.marginRight = "30%"
        div.append(div1);


        let div2 = document.createElement('div');
        table1 = document.createElement('table');
        tr1 = document.createElement('tr')
        tr1.setAttribute("class","tr-row-height-set")
        td1tr1 = document.createElement('td')
        td1tr1.innerText = "BRAND";
        td2tr1 = document.createElement('td')
        td2tr1.innerText = obj.Brand;

        tr1.append(td1tr1,td2tr1);
        

        tr2 = document.createElement('tr')
        tr2.setAttribute("class","tr-row-height-set")
        td1tr2 = document.createElement('td')
        td1tr2.innerText = "GENDER";
        td2tr2 = document.createElement('td')
        td2tr2.innerText = "Women";
        tr2.append(td1tr2,td2tr2);


        tr3 = document.createElement('tr')
        tr3.setAttribute("class","tr-row-height-set")
        td1tr3 = document.createElement('td')
        td1tr3.innerText = "METAL";
        td2tr3 = document.createElement('td')
        td2tr3.innerText = "Gold";
        tr3.append(td1tr3,td2tr3);


        tr4 = document.createElement('tr')
        tr4.setAttribute("class","tr-row-height-set")
        td1tr4 = document.createElement('td')
        td1tr4.innerText = "JEWELLLERY TYPE";
        td2tr4 = document.createElement('td')
        td2tr4.innerText = "Gold Jewellery";
        td2tr4.style.width = "200px"
        tr4.append(td1tr4,td2tr4);


        tr5 = document.createElement('tr')
        tr5.setAttribute("class","tr-row-height-set")
        td1tr5 = document.createElement('td')
        td1tr5.innerText = "METAL COLOR";
        td2tr5 = document.createElement('td')
        td2tr5.innerText = "Yellow";
        tr5.append(td1tr5,td2tr5);


        tr6 = document.createElement('tr')
        tr6.setAttribute("class","tr-row-height-set")
        td1tr6 = document.createElement('td')
        td1tr6.innerText = "HEIGHT";
        td2tr6 = document.createElement('td')
        td2tr6.innerText = "34 mm";
        tr6.append(td1tr6,td2tr6);
        
        table1.append(tr1,tr2,tr3,tr4,tr5,tr6,tr7);
        div2.append(table1);
        
        div2.style.flex = "1"
        div.append(div2);
    }
    
    let ps = document.getElementById("productSpecifications");
    ps.addEventListener("click", () => {
        productSpecifications();
    })

    let more = document.getElementById("moreInfo");
    more.addEventListener('click', () => {
        moreInfo();
    })
    productSpecifications()


    let data = JSON.parse(localStorage.getItem("database"));
    data = data.filter( (el) => {
        if(el.Type==obj.Type) {
            return el;
        }
    })
    
    data = data.splice(0,4);
    let appendHere = document.getElementById("you-may-like");
    data.forEach( (el) => {
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.Img;
        img.style.height = "273px";
        img.style.width = "273px";

        let title = document.createElement('h3');
        if(el.Title.length>=30) {
            let bag = "";
            for(let i=0;i<20;i++) {
                bag += el.Title[i].toUpperCase();
            }
            title.innerText = bag + "...";
        }
        else {
            title.innerText = el.Title;
        }
        title.style.textAlign = "center";
        title.style.fontFamily = 'Times New Roman';
        title.style.color = "gray";

        let price = document.createElement('h3');
        price.innerText = "₹" + el.Price;
        price.style.fontFamily = "Times New Roman";
        price.style.textAlign = "center";
        price.style.color = "gray";

        
        div.append(img,title,price);
        div.addEventListener('click', () => {
            localStorage.setItem("productDetails", JSON.stringify(el));
            window.location.href = "productsDetail.html";
        })
        div.setAttribute("class","shadow-on-hover")
        appendHere.append(div);
    })




    let products = JSON.parse(localStorage.getItem("productDetails"))
console.log(products)

const display = (products)=>{
    document.getElementById("Image_box").innerHTML=null;
    document.getElementById("product_details").innerHTML=null;
    document.getElementById("price_div").innerHTML=null
    document.getElementById("discription").innerHTML=null
    document.getElementById("name").innerHTML=null
    
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let div5 = document.createElement("div")
        let frame = document.createElement("div")
        frame.setAttribute("id","frame")

        let images = document.createElement("img")
        images.src=products.Img[0]

        let images_box = document.getElementById("imges_4box")
        for(let i=0;i<products.Img.length;i++) {
            let smallDiv = document.createElement('div');
            let x = products.Img;
            let img = document.createElement('img');
            img.src = x[i];
            img.style.height = "66px";
            img.style.width = "66px";
            smallDiv.append(img);
            smallDiv.style.border = "1px solid lightgray"
            smallDiv.addEventListener('click', () => {
                images.src = x[i];
                smallDiv.style.border = "1px solid black"
            })
            images_box.append(smallDiv);
        }


        let name = document.createElement("p")
        name.innerText="HOME > PRODUCT >"+products.Description
        

        let title = document.createElement("h4")
        title.innerText=products.Title

        let price = document.createElement("h3")
        price.innerText="PRICE ₹ "+products.Price

        let description = document.createElement("p")
        description.innerText=products.Description



        // let btn = document.createElement("button")
        // btn.innerHTML="ADD TO CART"



        div1.append(images)
        frame.append(div1)
        div2.append(description)
        div3.append(price)
        div4.append(title)
        div5.append(name)
        document.getElementById("Image_box").append(frame)
        document.getElementById("product_details").append(div2)
        document.getElementById("price_div").append(div3)
        document.getElementById("discription").append(title)
        document.getElementById("name").append(div5)
    
 }
 display(products)

 let btn = document.getElementById("btn");
//  console.log(btn)
let cart = JSON.parse(localStorage.getItem("cart")) || [];
 btn.addEventListener("click",function(){
     cart.push(products)
    console.log(cart)
    localStorage.setItem("cart",JSON.stringify(cart))

 })

 let btn1 = document.getElementById("btn1")
 btn1.addEventListener("click",function(){
     console.log("hello")
 })