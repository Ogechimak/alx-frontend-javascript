// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Faith",
  lastName: "Ogechi",
  age: 20,
  location: "Nigeria"
};

const student2: Student = {
  firstName: "Makata",
  lastName: "Rita",
  age: 22,
  location: "India"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  // Create table element
  const table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';

  // Create table header
  const headerRow = table.insertRow();
  const firstNameHeader = headerRow.insertCell(0);
  const locationHeader = headerRow.insertCell(1);
  firstNameHeader.textContent = 'First Name';
  locationHeader.textContent = 'Location';
  firstNameHeader.style.border = '1px solid black';
  locationHeader.style.border = '1px solid black';
  firstNameHeader.style.padding = '5px';
  locationHeader.style.padding = '5px';

  // Append rows for each student
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    firstNameCell.style.border = '1px solid black';
    locationCell.style.border = '1px solid black';
    firstNameCell.style.padding = '5px';
    locationCell.style.padding = '5px';
  });

  // Append table to the document body
  document.body.appendChild(table);
}

// Call the renderTable function when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderTable);