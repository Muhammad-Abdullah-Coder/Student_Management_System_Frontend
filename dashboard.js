
const modal = document.getElementById("myModal");


const openButtons = document.querySelectorAll(".card button");


const closeButton = document.querySelector(".modal .close");


const modalName = document.getElementById("modal-name");
const modalOccupation = document.getElementById("modal-occupation");
const modalDetails = document.getElementById("modal-details");


const students = [
    {
        name: "Jany",
        occupation: "Ui/Ux Designer",
        details: {
            "Student Details": ["Present: 85%", "Good-Work: 25%"],
            "Joining Details": ["Month: 04", "Year: 00"]
        }
    },
    {
        name: "Jennifer",
        occupation: "Frontend Developer",
        details: {
            "Student Details": ["Present: 75%", "Good-Work: 65%"],
            "Joining Details": ["Month: 07", "Year: 00"]
        }
    },
    {
        name: "Sophie",
        occupation: "Fullstack Developer",
        details: {
            "Student Details": ["Present: 80%", "Good-Work: 95%"],
            "Joining Details": ["Month: 03", "Year: 02"]
        }
    },
    {
        name: "Ana de Armas",
        occupation: "Backend Developer",
        details: {
            "Student Details": ["Present: 90%", "Good-Work: 85%"],
            "Joining Details": ["Month: 02", "Year: 01"]
        }
    }
];


function openModal(index) {
    const student = students[index];
    modalName.textContent = student.name;
    modalOccupation.textContent = `Occupation: ${student.occupation}`;
    
    let detailsHtml = "";
    for (const [key, values] of Object.entries(student.details)) {
        detailsHtml += `<tr><th>${key}:</th>`;
        values.forEach(value => {
            detailsHtml += `<td>${value}</td>`;
        });
        detailsHtml += `</tr>`;
    }
    modalDetails.innerHTML = detailsHtml;

    modal.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
}


openButtons.forEach((button, index) => {
    button.addEventListener("click", () => openModal(index));
});

closeButton.addEventListener("click", closeModal);


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
