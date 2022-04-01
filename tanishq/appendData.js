const appendData = (data) => {
    productsContainer.innerText = null;

    data.forEach( (el) => {
        let div = document.createElement("div");
        
        let img = document.createElement("img");
        img.src = el.Img;
        img.style.height = "273px";
        img.style.height = "273px";

        let title = document.createElement("p");
        
        if(el.Title.length>=30) {
            let bag = "";
            for(let i=0;i<30;i++) {
                bag += el.Title[i];
            }
            title.innerText = bag + "...";
        }
        else {
            title.innerText = el.Title;
        }
        title.style.textAlign = "center";
        title.style.fontSize = "16px";
        title.style.letterSpacing = "1px";

        let price = document.createElement("h3");
        price.innerText = `₹${el.Price}`;
        price.style.textAlign = "center";

        let quickDiv = document.createElement('div');
        let quickView = document.createElement("div");
        quickView.innerText = "QUICK VIEW";
        quickView.style.color = "white";
        
        quickDiv.style.display = "flex";
        quickDiv.style.justifyContent = "center";
        quickDiv.style.alignItems = "center";
        quickDiv.style.height = "50px";
        quickDiv.style.background = "white";
        quickDiv.append(quickView);

        div.setAttribute("class","shadow-on-hover")
        div.append(img,title,price,quickDiv);

        div.addEventListener('mouseenter', () => {
            quickDiv.style.background = "black";
        })
        div.addEventListener('mouseleave', () => {
            quickDiv.style.background = "white";
        })

        div.addEventListener('click', () => {
            localStorage.setItem("productDetails", JSON.stringify(el));
        })
        productsContainer.append(div);
    })
}