        var addbtn = document.querySelector("#add-popup-button");
        var popup = document.querySelector(".pop-up");
        var overlay = document.querySelector(".overlay");
        var btn1 = document.querySelector(".btn1");
        var btn2 = document.querySelector(".btn2");
        var btn3 = document.querySelector(".closebtn1")

        //if the add button is clicked the popup should appear:::::::::::::
        addbtn.addEventListener("click", function(){
            popup.style.display ="block";
            overlay.style.display = "block";
        });

        //if the cancel button is clicked the popup should disappear:::::::::::::
        btn2.addEventListener("click",function(event){
            event.preventDefault();
            popup.style.display ="none";
            overlay.style.display = "none";
        })
        btn3.addEventListener("click",function(event){
            event.preventDefault();
            popup.style.display ="none";
            overlay.style.display = "none";
        })


        // if the details arent filled the alert should pop up:::::::::::
    
        var fillbook = document.querySelector("#bookname");
        var fillauthor = document.querySelector("#authorname");
        btn1.addEventListener("click",function(event){
                event.preventDefault();
        if(fillbook.value.trim() === ""){
            alert("Please fill the Book Name");
            fillbook.focus();
            return;
            }
        else if(fillauthor.value.trim()==""){
                alert("Please fill the Author Name");
                fillauthor.focus();
                return;
            }
        else{
                alert("Book added successfully");
                
        // whay im pasting this code here is , because btn1 in the evenhandler is preventing the default behaviour of form submission and makes it calling twice ... so im preventing that .

            //selecting the  Container ; Add book; bookname ; authorname ; description inputs:::::::::::::
        var container = document.querySelector(".container");
        var description = document.querySelector("#description");
        var addbook = document.querySelector(".btn1");
        //when the add button is clicked the book should be added to the container:::::::::::::

            // addbook.addEventListener("click",function(event){
            // event.preventDefault();
            // it is commented because of the above reason;;;; if you dont understand please refer to the above comment;;;;;;

            var div = document.createElement("div");
            div.setAttribute("class","bookcontainer");
            div.innerHTML = `<h2>${fillbook.value}</h2>`+
            `<h4>${fillauthor.value}</h4>`+
            `<p>${description.value}</p>`+
            `<button type="button">Read Now</button>`+
            `<button type="button"  onclick="deleteBook(event)">Delete</button>`;
            container.append(div);
            popup.style.display ="none";
            overlay.style.display = "none";
            fillauthor.value= "";
                fillbook.value = "";
                fillbook.focus();
                description.value= "";

        // });
        }
        
        });
        function deleteBook(event){
            event.target.parentNode.remove();
        }
        
        var readnowbtn = document.querySelector("#readnowbtn");
        var popup2 = document.querySelector(".popup2");
        var overlay2 = document.querySelector(".overlay2");
        var closebtn2 = document.querySelector("#closebtn2");

        readnowbtn.addEventListener("click",function(event){
            event.preventDefault();
            popup2.style.display ="block";
            overlay2.style.display ="block";
        });
        closebtn2.addEventListener("click",function(event){
            event.preventDefault();
            popup2.style.display ="none";
            overlay2.style.display ="none";
        });