//When Compute Interest button is clicked
function compute() {
    //store values into varialbes
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //calculate interest
    var interest = principal * years * rate /100;

    //Get interest year
    var year = new Date().getFullYear()+parseInt(years);

    //if amount is less than 1 alert the user
    if (principal < 1) {

        //alert user
        alert("Enter a positive number");

        //focus amount input box
        document.getElementById("principal").focus();

        //clear the result output div
        document.getElementById("result").innerHTML = " ";
    }
    else { 
        //final string for output to result div
        var final = "\<br \>If you deposit " + highlight(principal) + "\<br\> at an interest rate of " + highlight(rate) + "%\<br\>You will receive an amount of " + highlight(interest) + ",\<br\>in the year " + highlight(year);
        
        //output result to result div
        document.getElementById("result").innerHTML = final;
    }
    //create yellow highlighted background for given text
    function highlight(text) {
       return text = "<span style='background-color:yellow;'>" + text + "</span>";
    }
}
function updateRate() {
    //Get rate from input box
    var rateval = document.getElementById("rate").value;
    //display rate
    document.getElementById("rate_val").innerText=rateval + "%";
}       