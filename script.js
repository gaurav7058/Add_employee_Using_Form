let employees = [];
let nextId = 1;
document.getElementById("employeeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const age = document.getElementById("age").value.trim();
    const errorElement = document.getElementById("err_msg");

    if (!name || !profession || !age) {
      errorElement.textContent =
        "Error: Please make sure all the fields are filled before adding in the employee!";
      errorElement.style.color = "red";
      errorElement.style.marginLeft = "21px";
      errorElement.style.fontSize = "18px";
      errorElement.style.marginTop = "22px";
    } else {
      errorElement.textContent = "";
      errorElement.textContent = "Success: Employee Added";
      errorElement.style.color = "green";
      errorElement.style.marginLeft = "21px";
      errorElement.style.fontSize = "18px";
      errorElement.style.marginTop = "22px";

      let zeroEmp = document.getElementById("zero_emp");
      if ((errorElement.textContent == "Success: Employee Added")) {
        zeroEmp.innerText = "";
      }
      addEmployee(name, profession, age);
    document.getElementById("employeeForm").reset();  
    }   
  });

  function addEmployee(name, profession, age) {
    const employee = {
        id: nextId++,
        name: name,
        profession: profession,
        age: parseInt(age)
    };
    employees.push(employee);
    displayEmployees();
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <div class="list">
            <span>${employee.id}.</span>
            <span> Name: ${employee.name}</span> 
            <span>Profession: ${employee.profession}</span>
            <span> Age: ${employee.age}</span>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
            </div>
        `;
        employeeDiv.setAttribute("class","employee")
        employeeList.appendChild(employeeDiv);
    });
}