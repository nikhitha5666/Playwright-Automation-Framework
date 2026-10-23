// Script 1: Insurance Premium & Tax Calculator (Arithmetic Operators)
const basePremium = 500;
const taxRate = 0.18; //18% GST
const totalPremium = basePremium + (basePremium * taxRate);
console.log('---- Script 1: Premium Calculation ----');
console.log(`Base: $${basePremium}, Total with Tax: $${totalPremium}`);

// Script 2: Policyholder Age & Driving Eligibility Check (Comparison &Logical Operators)
const applicantAge = 26;
const hasValidLicense = true;
const isEligibleForAutoPolicy = applicantAge >= 18 && hasValidLicense;
console.log('\n--- Script 2:Eligibility Check ---');
console.log(`Is applicant eligible? ${isEligibleForAutoPolicy}`);

// Script 3: String to Number Conversion (Handling UI Inputs)
const uiCartPriceText = "$49.99";
// Strip the currency symbol and convert text to an operable float number
const numericPrice = parseFloat(uiCartPriceText.replace('$', ''));
const quantity = 3;
const totalOrderPrice = numericPrice * quantity;
console.log('\n--- Script 3: Extracted UI Price Calculation ---');
console.log(`Parsed Price: ${numericPrice}, Total for ${quantity} items: $${totalOrderPrice.toFixed(2)}`);

// Script 4: Discount Tier Evaluator (Ternary Operator)
const claimFreeYears = 5;
const discount = claimFreeYears >= 3 ? "20% No-Claim Bonus" : "No Discount";
console.log('\n--- Script 4: Discount Tier ---');
console.log(`Eligible Discount: ${discount}`);
 
// Script 5: Handling null vs undefined
let policyStatus; // undefined
console.log('\n--- Script 5: Null vs Undefined ---');
console.log(`Initial Status: ${policyStatus}`); // undefined
 
policyStatus = "Active";
console.log(`Updated Status: ${policyStatus}`); // Active
 
policyStatus = null; // Policy cancelled/closed explicitly
console.log(`Cancelled Status: ${policyStatus}`); // null
 