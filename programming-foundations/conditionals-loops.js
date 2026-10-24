/*1. Conditionals (`if / else if / else` & `switch`)
`if / else`**: Executes code blocks based on conditions.
* **`switch`**: Evaluates an expression against multiple matching `case` clauses.
* **QA Use Case**: Handling environment URLs (e.g., routing tests to `dev`, `qa`, or `prod` based on a test configuration flag) or handling dynamic policy types (e.g., `Auto`, `Home`, `Commercial`).
 
#### 2. Loops (`for`, `for...of`, `while`)
* **Standard `for` loop**: Repeats a fixed number of iterations using an index (`for (let i = 0; i < items.length; i++)`).
* **`for...of` loop**: The modern, clean JavaScript way to loop through arrays (`for (const item of items)`).
* **`while` loop**: Continues looping as long as a condition remains true.
* **QA Use Case**:
  * Looping through a table of search results to assert every policy number starts with `"POL-"`.
  * Polling an API status (e.g., checking every 2 seconds until `status === 'PROCESSED'`).
 */

// 1. Switch Statement: Multi-Environment Base URL Resolver
const targetEnv = "staging"; // Try changing to 'dev', 'qa', or 'prod'
let baseUrl;
 
switch (targetEnv.toLowerCase()) {
  case "dev":
    baseUrl = "https://dev-portal.insurance.internal";
    break;
  case "qa":
    baseUrl = "https://qa-portal.insurance.internal";
    break;
  case "staging":
    baseUrl = "https://staging-portal.insurance.internal";
    break;
  default:
    baseUrl = "https://sandbox-portal.insurance.internal";
}
console.log("--- 1. Environment Config Resolver ---");
console.log(`Target: ${targetEnv.toUpperCase()} | Base URL: ${baseUrl}\n`);
 
 
// 2. Classic FizzBuzz (Top SDET Screening Question)
// Print numbers 1 to 20:
// - Multiples of 3: print "Fizz"
// - Multiples of 5: print "Buzz"
// - Multiples of both 3 and 5: print "FizzBuzz"
console.log("--- 2. Classic FizzBuzz Test ---");
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i}: Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i}: Buzz`);
  } else {
    console.log(`${i}`);
  }
}
 
 
// 3. For...Of Loop: Validating Policy Status in a List
console.log("\n--- 3. Policy Status Validation ---");
const policyStatuses = ["Active", "Active", "Cancelled", "Active", "Suspended"];
let activePolicyCount = 0;
 
for (const status of policyStatuses) {
  if (status === "Active") {
    activePolicyCount++;
  } else {
    console.log(`Alert: Found non-active policy status -> ${status}`);
  }
}
console.log(`Total Active Policies: ${activePolicyCount}`);
 
 
// 4. While Loop: Retry / Polling Logic Simulation
console.log("\n--- 4. Polling Policy Processing Status ---");
let attempts = 0;
const maxAttempts = 5;
let isJobCompleted = false;
 
while (attempts < maxAttempts && !isJobCompleted) {
  attempts++;
  console.log(`Attempt ${attempts}: Checking backend job status...`);
  
  // Simulate job completing on attempt 3
  if (attempts === 3) {
    isJobCompleted = true;
    console.log("SUCCESS: Backend job status is 'COMPLETED'");
    break;
  }
}
 
 
// 5. Array Element Matching (Finding Missing/Failed Claims)
console.log("\n--- 5. Claim Processing Verification ---");
const claimIds = ["CLM-1001", "CLM-1002", "ERR-9999", "CLM-1003"];
 
for (let i = 0; i < claimIds.length; i++) {
  if (claimIds[i].startsWith("ERR")) {
    console.log(`Defect Detected: Claim index ${i} contains error code ${claimIds[i]}`);
    continue; // skip further checks on this item and continue loop
  }
  console.log(`Verified Claim: ${claimIds[i]}`);
}
 