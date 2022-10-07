var customerType;
var invoiceTotal;
var discountPercent;
var discountAmount;
var newinvoiceTotal;

window.document.write('<h2>Welcome to the Invoice Application</h2>');
customerType = prompt("Enter customer type (r/w)");
invoiceTotal = parseFloat(prompt("Enter invoice total"));

if (customerType === 'r') {
     if (invoiceTotal > 0 && invoiceTotal < 100) {
        discountPercent = 0;
     } else if (invoiceTotal >= 100 && invoiceTotal < 250) {
        discountPercent = 0.1;
     } else if (invoiceTotal >= 250 && invoiceTotal < 500) {
        discountPercent = 0.2;
     } else if (invoiceTotal >= 500) {
        discountPercent = 0.25;
     } 
} else if (customerType === 'w') {
    if (invoiceTotal > 0 && invoiceTotal < 500) {
        discountPercent = 0.4;
     } else if (invoiceTotal >= 500) {
        discountPercent = 0.5;
     }
} else {
    discountPercent = 0;
}

discountAmount = invoiceTotal * discountPercent;
newinvoiceTotal = invoiceTotal - discountAmount;

document.write("Invoice Total is: " + String(invoiceTotal), "<br>");
document.write("Discount Percent is: " + String(discountPercent), "<br>");
document.write("Discount Amount is: " + String(discountAmount), "<br>");
document.write("New Invoice Total is: " + String(newinvoiceTotal));