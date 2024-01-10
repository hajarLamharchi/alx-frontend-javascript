interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: 'jesse',
    lastName: 'pinkman',
    age: 24,
    location: 'Albequerque'
}

const student2: Student = {
    firstName: 'walt',
    lastName: 'white',
    age: 52,
    location: 'New Mexico'
}

const studentsList: Student[] = [student1, student2];

function render() {
    const table = document.createElement('table');
    var headerRow = table.createTHead().insertRow(0);
    const headers = ['First Name', 'Location'];

    for (var i = 0; i < headers.length; i++) {
        var headerCell = headerRow.insertCell(i);
        headerCell.textContent = headers[i];
    }
    studentsList.forEach((student)=> {
        const row  = table.insertRow();
        const firstName = row.insertCell(0);
        firstName.textContent=student.firstName;
        const location = row.insertCell(1);
        location.textContent=student.location;

    });
    document.body.appendChild(table);
}

render();