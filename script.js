// Function to calculate the minimum cost to connect ropes
function mincost(arr) {
    if (arr.length < 1) {
        return 0;
    }

    let totalcost = 0;
    arr.sort((a, b) => a - b);

    // While there is more than one rope
    while (arr.length > 1) {
        let firstrope = arr.shift();  // Get the smallest rope
        let secondrope = arr.shift(); // Get the second smallest rope

        let newrope = firstrope + secondrope;  // Combine them
        totalcost += newrope;  // Add to total cost

        arr.push(newrope);  // Add the new rope back into the array
        arr.sort((a, b) => a - b);  // Re-sort the array
    }

    return totalcost;  // Return the total cost
}

// Function to trigger the calculation and show the result
function calculateCost() {
    const input = document.getElementById("ropeLengths").value;  // Get input value
    if (input.trim() === "") {
        alert("Please enter some rope lengths.");
        return;
    }

    // Convert the input into an array of integers
    let arr = input.split(',').map(Number);
    
    // Call the mincost function to calculate the total cost
    let result = mincost(arr);
    
    // Display the result
    document.getElementById("result").textContent = "The minimum cost to connect all ropes is: " + result;
}
