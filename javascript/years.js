// Fecha de inicio (año en que comenzó a trabajar)
const startYear = 2013;

// Obtener el año actual
const currentYear = new Date().getFullYear();

// Calcular los años de experiencia
const yearsOfExperience = currentYear - startYear;

// Mostrar el resultado en el HTML
document.getElementById("years-of-experience").textContent = yearsOfExperience;