let price = document.getElementById("price");
    let priceCount = 0;
    price.addEventListener('click', () => {

        let div1 = document.createElement('div');
        let inp1 = document.createElement('input');
        inp1.type = "checkbox";
        inp1.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Price<10000) {
                    return el;
                }
            })
            // console.log(newdata);
            appendData(data);
        })
        let span1 = document.createElement('span');
        span1.innerText = "Less than ₹10000 (205)";
        div1.append(inp1,span1);

        let div2 = document.createElement('div');
        let inp2 = document.createElement('input');
        inp2.type = "checkbox";
        inp2.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Price>=10000 && el.Price<=25000) {
                    return el;
                }
            })
            // console.log(newdata);
            appendData(data);
        })
        let span2 = document.createElement('span');
        span2.innerText = "Between ₹10000 and ₹25000 (1097)"
        div2.append(inp2,span2);

        let div3 = document.createElement('div');
        let inp3 = document.createElement('input');
        inp3.type = "checkbox";
        inp3.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Price>=25000 && el.Price<=50000) {
                    return el;
                }
            })
            // console.log(newdata);
            appendData(data);
        })
        let span3 = document.createElement('span');
        span3.innerText = "Between ₹25000 and ₹50000 (1209)"
        div3.append(inp3,span3);


        let div4 = document.createElement('div');
        let inp4 = document.createElement('input');
        inp4.type = "checkbox";
        inp4.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Price>=50000 && el.Price<=100000) {
                    return el;
                }
            })
            // console.log(newdata);
            appendData(data);
        })
        let span4 = document.createElement('span');
        span4.innerText = "Between ₹50000 and ₹100000 (596)";
        div4.append(inp4,span4);

        let div5 = document.createElement('div');
        let inp5 = document.createElement('input');
        inp5.type = "checkbox";
        inp5.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Price>=100000 && el.Price<=200000) {
                    return el;
                }
            })
            // console.log(newdata);
            appendData(data);
        })
        let span5 = document.createElement('span');
        span5.innerText = "Between ₹100000 and ₹200000 (259)"
        div5.append(inp5,span5);

        let div6 = document.createElement('div');
        let inp6 = document.createElement('input');
        inp6.type = "checkbox";
        inp6.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Price>=200000 && el.Price<=500000) {
                    return el;
                }
            })
            // console.log(newdata);
            appendData(data);
        })
        let span6 = document.createElement('span');
        span6.innerText = "Between ₹200000 and ₹500000 (37)"
        div6.append(inp6,span6);

        if(priceCount%2==0) {
            let priceAdj = document.querySelector("#price+div")
            priceAdj.append(div1,div2,div3,div4,div5,div6);
        }
        else {
            let priceAdj = document.querySelector("#price+div")
            priceAdj.innerText = "";
        } 
        priceCount++;
    })