let purity = document.getElementById("purity");
    let purityCount = 0;
    purity.addEventListener('click', () => {

        let div1 = document.createElement('div');
        let inp1 = document.createElement('input');
        inp1.type = "checkbox";
        inp1.addEventListener('click', () => {
            console.log(1);
        })
        let span1 = document.createElement('span');
        span1.innerText = "14.00 (1)";
        div1.append(inp1,span1);

        let div2 = document.createElement('div');
        let inp2 = document.createElement('input');
        inp2.type = "checkbox";
        inp2.addEventListener('click', () => {
            console.log(2);
        })
        let span2 = document.createElement('span');
        span2.innerText = "18.00 (11)"
        div2.append(inp2,span2);

        let div3 = document.createElement('div');
        let inp3 = document.createElement('input');
        inp3.type = "checkbox";
        inp3.addEventListener('click', () => {
            console.log(3);
        })
        let span3 = document.createElement('span');
        span3.innerText = "22.00 (347)"
        div3.append(inp3,span3);

        if(purityCount%2==0) {
            let purityAdj = document.querySelector("#purity+div")
            purityAdj.append(div1,div2,div3);
        }
        else {
            let purityAdj = document.querySelector("#purity+div")
            purityAdj.innerText = "";
        } 
        purityCount++;
    })