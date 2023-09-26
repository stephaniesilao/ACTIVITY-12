document.querySelector("#addTask").addEventListener("click",() => {
    
    if(document.querySelector("#taskInput").value!=""){
        document.querySelector("#taskArea").innerHTML +=
        `<div>
            <button class="btn btn-secondary markButton" >✓</button>
            <span>${document.querySelector("#taskInput").value}</span>
        </div>
        <hr>`;
        document.querySelector("#taskInput").value="";
    } else {
        alert("Field cannot be empty!😠");
    }

    const markButtons = document.querySelectorAll(".markButton");
markButtons.forEach((markButton) => {
    markButton.addEventListener("click", (event) => {
        event.target.parentElement.lastElementChild.style = "text-decoration: line-through; font-weight:800; color:green" ;
        event.target.remove();
    })
});
    
});

