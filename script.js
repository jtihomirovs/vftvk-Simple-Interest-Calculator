// Function to compute the result
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    p = document.getElementById("principal").value;

    // If the user enters zero or negative values, show an alert "Enter a positive number"
    if (principal == "" || principal <= 0) {
        alert('Enter a positive number');
        principal.focus();
    } else {
        document.getElementById("result").innerHTML="<br\>If you deposit <span class='highlighted'>"+principal+"</span>,<br\>at an interest rate of <span class='highlighted'>"+rate+"%</span><br\>You will receive an amount of <span class='highlighted'>"+interest+"</span>,<br\>in the year <span class='highlighted'>"+year+"</span><br\>";
    }

}

// Function that reads the value of the range slider and displays it the <span>adjacent to the slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
}       