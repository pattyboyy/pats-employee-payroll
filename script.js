// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
    const employees = [];
  
    while (true) {
      const firstName = prompt("Enter the employee's first name (or press Cancel to finish):");
      if (firstName === null) {
        break;
      }
  
      if (firstName.trim() === '') {
        alert('First name cannot be empty. Please enter a valid name.');
        continue;
      }
  
      const lastName = prompt("Enter the employee's last name:");
      if (lastName.trim() === '') {
        alert('Last name cannot be empty. Please enter a valid name.');
        continue;
      }
  
      const salaryInput = prompt("Enter the employee's salary:");
      const salary = parseInt(salaryInput, 10);
  
      if (isNaN(salary) || salary <= 0) {
        alert('Salary must be a positive number. Please enter a valid salary.');
        continue;
      }
  
      employees.push({ firstName, lastName, salary });
    }
  
    return employees;
  };

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
    const averageSalary = totalSalary / employeesArray.length;
    console.log(`Average salary: ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })} (${employeesArray.length} employees)`);
  };

// Select a random employee
const getRandomEmployee = function(employeesArray) {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Conratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} for winning our weekly raffle!`);
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