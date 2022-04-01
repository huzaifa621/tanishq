let occasion= document.getElementById("occasion");
    let occasionCount = 0;
    occasion.addEventListener('click', () => {

        let div1 = document.createElement('div');
        let inp1 = document.createElement('input');
        inp1.type = "checkbox";
        inp1.addEventListener('click', () => {
            console.log(1);
        })
        let span1 = document.createElement('span');
        span1.innerText = "Bridal Wear (2)";
        div1.append(inp1,span1);

        let div2 = document.createElement('div');
        let inp2 = document.createElement('input');
        inp2.type = "checkbox";
        inp2.addEventListener('click', () => {
            console.log(2);
        })
        let span2 = document.createElement('span');
        span2.innerText = "Casual Wear (68)"
        div2.append(inp2,span2);

        let div3 = document.createElement('div');
        let inp3 = document.createElement('input');
        inp3.type = "checkbox";
        inp3.addEventListener('click', () => {
            console.log(3);
        })
        let span3 = document.createElement('span');
        span3.innerText = "Modern Wear (46)"
        div3.append(inp3,span3);


        let div4 = document.createElement('div');
        let inp4 = document.createElement('input');
        inp4.type = "checkbox";
        inp4.addEventListener('click', () => {
            console.log(4);
        })
        let span4 = document.createElement('span');
        span4.innerText = "Office Wear (4)";
        div4.append(inp4,span4);

        let div5 = document.createElement('div');
        let inp5 = document.createElement('input');
        inp5.type = "checkbox";
        inp5.addEventListener('click', () => {
            console.log(5);
        })
        let span5 = document.createElement('span');
        span5.innerText = "Traditional and Ethnic Wear (239)"
        div5.append(inp5,span5);

        if(occasionCount%2==0) {
            let occasionAdj = document.querySelector("#occasion+div")
            occasionAdj.append(div1,div2,div3,div4,div5);
        }
        else {
            let occasionAdj = document.querySelector("#occasion+div")
            occasionAdj.innerText = "";
        } 
        occasionCount++;
    })