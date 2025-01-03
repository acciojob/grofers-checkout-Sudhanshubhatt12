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

  // Create a new row for the total price
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");

  // Create a single cell for the total price
  const totalCell = document.createElement("td");
  totalCell.colSpan = table.rows[0].cells.length; // Span across all columns
  totalCell.textContent = `Total Price: ${total.toFixed(2)}`; // Add total price

  // Append the total cell to the row, and the row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  // Disable the button after adding the total row to prevent duplicate rows
  getSumBtn.disabled = true;
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
