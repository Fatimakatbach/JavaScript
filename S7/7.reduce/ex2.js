//Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().


const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let suma = (sumas, exam) => {
    if (array.score >= 5) {
        return sumas + array.score;
    }else {
            return sumas;
        }
        
    }
        
    
let total = exams.reduce(suma, 0);
console.log(total);