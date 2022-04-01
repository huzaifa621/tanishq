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
        images.src=products.Img

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
let cart = []
 btn.addEventListener("click",function(){
     cart.push(products)
    console.log(cart)
    localStorage.setItem("cart",JSON.stringify(cart))

 })

 let btn1 = document.getElementById("btn1")
 btn1.addEventListener("click",function(){
     console.log("hello")
 })