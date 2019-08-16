$("#newsLetterBtn").on("click", function(event) {
        // event.preventDefault();
        event.stopPropagation();
    
        let addedInput = false;
        let inputObj = $("#inputName").val().trim();
        let inputObj2 = $("#inputLastName").val().trim();
        let inputObj3 = $("#inputEmail").val().trim();
    
        if (inputObj === "") {
            addedInput;
            alert("Please add your name and email!");
        }
        else {
            addedInput = true;
            console.log(inputObj, inputObj2, inputObj3);
            $("#inputName").val("");
            $("#inputLastName").val("");
            $("#inputEmail").val("");
        }
        return addedInput;
    });