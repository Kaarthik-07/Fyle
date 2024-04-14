document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("taxForm");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-modal");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        calculateTax();
    });

    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    function calculateTax() {
        // Fetching user inputs
        const grossIncome = parseFloat(document.getElementById("grossIncome").value);
        const extraIncome = parseFloat(document.getElementById("extraIncome").value) || 0;
        const deductions = parseFloat(document.getElementById("deductions").value) || 0;
        const age = document.getElementById("age").value;

        // Calculating taxable income
        const taxableIncome = grossIncome + extraIncome - deductions - 8;

        // Calculating tax based on age
        let taxRate;
        if (age === "<40") {
            taxRate = 0.3;
        } else if (age === "≥ 40 &lt; 60") {
            taxRate = 0.4;
        } else {
            taxRate = 0.1;
        }

        const tax = taxableIncome > 0 ? taxRate * taxableIncome : 0;

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>Taxable Income: ${taxableIncome} Lakhs</p><p>Tax Payable: ${tax} Lakhs</p>`;
        modal.style.display = "block";
    }
});
