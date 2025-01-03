const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with the class "prices"
  const pricesElements = document.querySelectorAll(".prices");

  // Calculate the total price
  let total = 0;
  pricesElements.forEach(priceElement => {
    total += parseFloat(priceElement.textContent || 0); // Parse the price and add to total
  });

  // Check if the #ans element already exists
  let totalRow = document.querySelector("#ans");
  if (!totalRow) {
    // Create a new row for the total price
    totalRow = document.createElement("tr");
    totalRow.id = "ans"; // Set the id for Cypress tests

    // Create a single cell for the total price
    const totalCell = document.createElement("td");
    totalCell.colSpan = document.querySelector("table").rows[0].cells.length; // Span across all columns
    totalCell.textContent = `${total}`; // Add total price

    // Append the total cell to the row, and the row to the table
    totalRow.appendChild(totalCell);
    document.querySelector("table").appendChild(totalRow);
  } else {
    // Update the total if the row already exists
    totalRow.firstChild.textContent = `${total}`;
  }
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
