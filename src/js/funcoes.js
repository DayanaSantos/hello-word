const concederAumento =(cargo, salario) => {
    let percentualAumento = 0;

if (cargo === "dev junior") {
    percentualAumento = 0.2;
}else if (cargo === "dev pleno" || cargo === "designer" ){
    percentualAumento = 0.12;
}else if (cargo === "dev senior") {
    percentualAumento = 0.05
}

const valorAumento = salario * percentualAumento;
const salarioAtualizado = salario + valorAumento;

 return salarioAtualizado;
};

console.log(concederAumento("dba", 8000))