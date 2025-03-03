function subtractFee(input) {
  let intervals = [0.02, 0.21, 0.32, 0.43];
  let fees = [0.02, 0.03, 0.04, 0.05, 0.07, 0.09];

  while (input > intervals[intervals.length - 1]) {
    const lastElement = intervals[intervals.length - 1];
    if (intervals.length % 2 === 0) {
      intervals.push(parseFloat((lastElement + 0.12).toFixed(2)));
    } else {
      intervals.push(parseFloat((lastElement + 0.11).toFixed(2)));
    }
  }
  while (intervals.length > fees.length) {
    const lastElement = fees[fees.length - 1];
    if (fees.length % 2 === 0) {
      fees.push(parseFloat((lastElement + 0.01).toFixed(2)));
    } else {
      fees.push(parseFloat((lastElement + 0.02).toFixed(2)));
    }
  }

  const firstGreater = intervals.find((value) => value >= input);
  const indexOfFirstGreater = intervals.indexOf(firstGreater);
  const feeSubtraction = parseFloat((input - fees[indexOfFirstGreater - 1]).toFixed(2));
  const fee= parseFloat((input - feeSubtraction).toFixed(2));
  console.log("subtractFee:", "input:", input,"| fee:",fee, "| input - fee:", feeSubtraction);

  return [fee,feeSubtraction];
}

function sumFee(input) {
  let intervals = [0.19];
  let fees = [0.02, 0.03, 0.04, 0.06, 0.07, 0.09];

  while (input > intervals[intervals.length - 1]) {
    intervals.push(parseFloat((intervals[intervals.length - 1] + 0.1).toFixed(2)));
  }
  while (intervals.length > fees.length) {
    const lastElement = fees[fees.length - 1];
    if (fees.length % 2 === 0) {
      fees.push(parseFloat((lastElement + 0.01).toFixed(2)));
    } else {
      fees.push(parseFloat((lastElement + 0.02).toFixed(2)));
    }
  }
  const indexOfLastElement = intervals.indexOf(intervals[intervals.length - 1]);
  const feeSum = parseFloat((input + fees[indexOfLastElement]).toFixed(2));
  
  const fee = parseFloat((feeSum - input).toFixed(2))
  console.log("sumFee:", "input:", input,"| fee:",fee, "| input+fee:", feeSum);
  return [feeSum];
}


function listaCash (alvo){
let listaCents =[]

for (let i = 0.01; i<alvo;i= i+0.01 ){
  let cents = parseFloat(i.toFixed(2))
  listaCents.push(cents);
}

 return listaCents
}

//encapsulando código;
function verificaGap(start) {
  function sumFee(input) {
    let intervals = [0.19];
    let fees = [0.02, 0.03, 0.04, 0.06, 0.07, 0.09];
    while (input > intervals[intervals.length - 1]) {
      intervals.push(parseFloat((intervals[intervals.length - 1] + 0.1).toFixed(2)));
    }
    while (intervals.length > fees.length) {
      const lastElement = fees[fees.length - 1];
      fees.push(parseFloat((lastElement + (fees.length % 2 === 0 ? 0.01 : 0.02)).toFixed(2)));
    }
    const indexOfLastElement = intervals.indexOf(intervals[intervals.length - 1]);
    return [parseFloat((input + fees[indexOfLastElement]).toFixed(2))];
  }
  function listaCash(alvo) {
    let listaCents = [];
    for (let i = 1; i <= alvo * 100; i++) {  
      listaCents.push(i / 100);  
    }
    return listaCents;
  }

  function encontraGaps(array) {
    let faltantes = [];
    for (let i = 0; i < array.length - 1; i++) {
        let atual = array[i];
        let proximo = array[i + 1];
        let incremento = (proximo - atual).toFixed(2); 
        if (incremento > 0.01) { 
            let valorFaltante = (parseFloat(atual) + 0.01).toFixed(2);
            
            while (valorFaltante < proximo) {
                faltantes.push(parseFloat(valorFaltante)); 
                valorFaltante = (parseFloat(valorFaltante) + 0.01).toFixed(2);
            }
        }
    }
    return faltantes;
  }
  const lista = listaCash(start);
  const listaTaxa = lista.flatMap(sumFee);
  const valoresAusentes = encontraGaps(listaTaxa)
  console.log(listaTaxa)
  console.log(valoresAusentes)
  console.log(valoresAusentes.includes(start))
}

verificaGap(0.43);

