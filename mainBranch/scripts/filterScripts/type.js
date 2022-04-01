let type= document.getElementById("type");
    let typeCount = 0;
    type.addEventListener('click', () => {

        let div1 = document.createElement('div');
        let inp1 = document.createElement('input');
        inp1.type = "checkbox";
        inp1.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Type=="Jhumka") {
                    return el;
                }
            })
            // console.log(newdata);
            appendData(data);
        })
        let span1 = document.createElement('span');
        span1.innerText = "Jhumka (359)";
        div1.append(inp1,span1);

        let div2 = document.createElement('div');
        let inp2 = document.createElement('input');
        inp2.type = "checkbox";
        inp2.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Type=="Drops") {
                    return el;
                }
            })
            // console.log(data);
            appendData(data);
        })
        let span2 = document.createElement('span');
        span2.innerText = "Drops (1507)"
        div2.append(inp2,span2);

        let div3 = document.createElement('div');
        let inp3 = document.createElement('input');
        inp3.type = "checkbox";
        inp3.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Type=="Hoops") {
                    return el;
                }
            })
            // console.log(data);
            appendData(data);
        })
        let span3 = document.createElement('span');
        span3.innerText = "Hoops (288)"
        div3.append(inp3,span3);


        let div4 = document.createElement('div');
        let inp4 = document.createElement('input');
        inp4.type = "checkbox";
        inp4.addEventListener('click', () => {
            data = JSON.parse(localStorage.getItem("database"));
            
            data = data.filter((el) => {
                if(el.Type=="Studs") {
                    return el;
                }
            })
            // console.log(data);
            appendData(data);
        })
        let span4 = document.createElement('span');
        span4.innerText = "Studs (1245)";
        div4.append(inp4,span4);

        if(typeCount%2==0) {
            let typeAdj = document.querySelector("#type+div")
            typeAdj.append(div1,div2,div3,div4);
        }
        else {
            let typeAdj = document.querySelector("#type+div")
            typeAdj.innerText = "";
        } 
        typeCount++;
    })