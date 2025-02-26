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


function listaInt (){
let listaCents =[]

for (let i = 0; i<10;i= i+0.01 ){
  let cents = parseFloat(i.toFixed(2))
  listaCents.push(cents);
}
// console.log(listaCents)
 return listaCents
}
function encontrarValoresNaoComuns(arr1, arr2) {
  // Filtra os valores que estão em arr1, mas não em arr2, e vice-versa
  const resultado = [
      ...arr1.filter(valor => !arr2.includes(valor)),
      ...arr2.filter(valor => !arr1.includes(valor))
  ];
  console.log(resultado)
  return resultado;
}

function calculaValoresInexistentes(){
  const lista = listaInt()
  let listaTaxa = []

  for (let i = 0; i< lista.length; i++){
    let calculos = sumFee(lista[i])
    listaTaxa.push(...calculos)
  }
  console.log("calculaTudo")
  console.log(listaTaxa)
  
  console.log(lista)
  encontrarValoresNaoComuns(lista,listaTaxa)
}

calculaValoresInexistentes()
