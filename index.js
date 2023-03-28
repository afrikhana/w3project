
let marks =  prompt("Enter marks from 0 - 100:");

if (marks >= 79) {
  console.log("Grade: A");
} else if (marks >= 60 && marks <= 78) {
  console.log("Grade: B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade: C");
} else if (marks >= 40 && marks <= 49) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}

//used the prompt function to input the marks
let speed = prompt("Enter the speed of the car:");

if (speed <= 70) {
  console.log("Ok");
} else {
  let mph = Math.floor((speed - 70) / 5);
  
  if (mph > 12) {
    console.log("License suspended");
  } else {
    console.log("Points: " + mph);
  }
}

// Define the tax rates and grosspay
const taxRates = [
    { grosspay: 0, rate: 0 },
    { grosspay: 24000, rate: 0.1 },
    { grosspay: 288000, rate: 0.1 },
    { grosspay: 288001, rate: 0.25 },
    { grosspay: 388000, rate: 0.3 },
   ,
  ];
  
  const NHIFRates = [
    { grosspay: 0-5999, rate: 150 },
    { grosspay: 7999, rate: 300 },
    { grosspay: 11999, rate: 400 },
    { grosspay: 14999, rate: 500 },
    { grosspay: 19999, rate: 600 },
    { grosspay: 24999, rate: 750 },
    { grosspay: 29999, rate: 850 },
    { grosspay: 34999, rate: 900 },
    { grosspay: 39999, rate: 950 },
   
  ];
  
  const NSSFPercentage = 0.06;
  
  // Get user inputs
  const basicSalary = prompt("Enter your basic salary:");
  const benefits = prompt("Enter your benefits:");
  
  // Get gross salary
  const grossSalary = parseFloat(basicSalary) + parseFloat(benefits);
  
  // Get taxable income
  const taxableIncome = grossSalary - 24000;
  
  // Calculate tax
  let tax = 0;
  for (let i = 1; i < taxRates.length; i++) {
    const prevGrosspay = taxRates[i - 1].grosspay;
    const grosspay = taxRates[i].grosspay;
    const rate = taxRates[i].rate;
    const taxableAmount = Math.min(taxableIncome - prevGrosspay, grosspay - prevGrosspay);
    if (taxableAmount > 0) {
      tax += taxableAmount * rate;
    } else {
      break;
    }
  }
  
  // Calcthe NHIF Deductions
  let NHIFDeductions = 0;
  for (let i = 1; i < NHIFRates.length; i++) {
    const prevGrosspay = NHIFRates[i - 1].grosspay;
    const grosspay = NHIFRates[i].grosspay;
    const rate = NHIFRates[i].rate;
    const taxableAmount = Math.min(grossSalary - prevGrosspay, grosspay - prevGrosspay);
    if (taxableAmount > 0) {
      NHIFDeductions += rate;
    } else {
      break;
    }
  }
  
  // Calc NSSF Deductions
  const NSSFContribution = Math.min(grossSalary * NSSFPercentage, 1800);
  const NSSFDeductions = NSSFContribution;
  
  // Calc net salary
  const netSalary = grossSalary - tax - NHIFDeductions - NSSFDeductions;
  
  // Display the results
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`PAYE (Tax): ${tax}`);
  console.log(`NHIF Deductions: ${NHIFDeductions}`);
  console.log(`NSSF Deductions: ${NSSFDeductions}`);
  console.log(`Net Salary: ${netSalary}`);