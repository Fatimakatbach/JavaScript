//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
//Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let index = 0; index < alumns.length; index++) {
    const alumn = alumns[index];

    let approvedCount = 0;
    approvedCount = alumn.T1 ? approvedCount + 1 : approvedCount;
    approvedCount = alumn.T2 ? approvedCount + 1 : approvedCount;
    approvedCount = alumn.T3 ? approvedCount + 1 : approvedCount;
   

    alumn.isApproved = approvedCount >= 2;
}

console.log(alumns);