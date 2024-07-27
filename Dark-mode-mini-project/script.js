let darkmode = document.getElementById("darkmode_button");
let bulb = document.querySelector(".bulb");

let on = false;
darkmode.addEventListener("click", function () {
    if (!on) { // If the current state is OFF
        console.log("Turning ON Dark Mode");
        // Body
        document.body.style.transition = "all 0.3s ease-in-out";
        document.body.style.backgroundColor = "#FFFDD0"; // Light background color
        
        // Button
        darkmode.style.backgroundColor = "rgb(255,255,255)";
        darkmode.style.color = "burlywood";
        darkmode.style.boxShadow = "0px 0px 15px white";
        darkmode.textContent = "OFF"; // Update button text

        // Bulb
        bulb.style.backgroundColor = "rgb(255,255,255)";
        bulb.style.border = "20px solid rgb(250,250,250)";
        bulb.style.boxShadow = "0px 0px 10px white";
        bulb.style.transition = "all 0.3s ease-in-out";
        
    } else { // If the current state is ON
        console.log("Turning OFF Dark Mode");
        // Body
        document.body.style.transition = "all 0.3s ease-in-out";
        document.body.style.backgroundColor = "rgb(45,45,45)"; // Dark background color
        
        // Button
        darkmode.style.backgroundColor = "rgb(52, 52, 52)";
        darkmode.style.color = "beige";
        darkmode.style.boxShadow = "0px 0px 5px rgb(30,30,30)";
        darkmode.textContent = "ON"; // Update button text

        // Bulb
        bulb.style.backgroundColor = "rgb(4, 4, 4)";
        bulb.style.border = "20px solid rgb(22, 21, 21)";
        bulb.style.boxShadow = "0px 0px 10px rgb(6, 6, 6)";
        bulb.style.transition = "all 0.3s ease-in-out";
    }
    
    // Toggle the state
    on = !on;
});