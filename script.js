// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
    const employees = [];
    let continueAdding = true;
  
    while (continueAdding) {
      // Prompt for employee's first name
      let firstName = prompt("Enter the employee's first name (or press Cancel to finish):");
      
      // If Cancel is pressed, set continueAdding to false and break out of the loop
      if (firstName === null) {
        continueAdding = false;
        break;
      }
  
      // Validate first name input
      while (firstName.trim() === '') {
        alert('First name cannot be empty. Please enter a valid name.');
        firstName = prompt("Enter the employee's first name:");
      }
  
      // Prompt for employee's last name
      let lastName = prompt("Enter the employee's last name:");
      
      // Validate last name input
      while (lastName.trim() === '') {
        alert('Last name cannot be empty. Please enter a valid name.');
        lastName = prompt("Enter the employee's last name:");
      }
  
      // Prompt for employee's salary
      let salaryInput = prompt("Enter the employee's salary:");
      let salary = parseInt(salaryInput, 10);
  
      // Validate salary input
      while (isNaN(salary) || salary <= 0) {
        alert('Salary must be a positive number. Please enter a valid salary.');
        salaryInput = prompt("Enter the employee's salary:");
        salary = parseInt(salaryInput, 10);
      }
  
      // Add employee object to the employees array
      employees.push({ firstName, lastName, salary });
    }
  
    // Return the array of employee objects
    return employees;
  };

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    // Calculate the total salary using reduce method
    const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
    
    // Calculate the average salary
    const averageSalary = totalSalary / employeesArray.length;
    
    // Log the average salary and number of employees to the console
    console.log(`Average salary: ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })} (${employeesArray.length} employees)`);
  };

// Select a random employee
const getRandomEmployee = function(employeesArray) {
    // Generate a random index within the range of the employees array
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    
    // Get the employee object at the random index
    const randomEmployee = employeesArray[randomIndex];
    
    // Log the full name of the randomly selected employee to the console
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} for winning our weekly raffle!`);
  };

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');
  
    // Clear the employee table
    employeeTable.innerHTML = '';
  
    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];
  
      const newTableRow = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);
  
      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);
  
      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
      });
  
      newTableRow.append(salaryCell);
  
      employeeTable.append(newTableRow);
    }
  }
  
  const trackEmployeeData = function() {
    const employees = collectEmployees();
  
    console.table(employees);
  
    displayAverageSalary(employees);
  
    console.log('==============================');
  
    getRandomEmployee(employees);
  
    employees.sort(function(a,b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });
  
    displayEmployees(employees);
  }
  
  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData);
  