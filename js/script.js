var acumuladora = "";
function calcularSalarioLiquido() {
   var nome = document.getElementById("nome");
   var numDependetes = document.getElementById("numDependentes");
   var salarioBruto = document.getElementById("salarioBruto");
   var informacoes = document.getElementById("informacoes");
   var valNome = nome.value;
   var dependentes = Number(numDependetes.value);
   var valSalarioBruto = Number(salarioBruto.value);
   var descInss;
   var aliquotaInss;
   var valSalarioBrutoInss;
   if (valSalarioBruto <= 1100) {
      descInss = valSalarioBruto * 0.075;
      valSalarioBrutoInss = valSalarioBruto - descInss;
      aliquotaInss = "7,5%";
   }
   if (valSalarioBruto >= 1100.01 && valSalarioBruto <= 2203.48) {
      descInss = valSalarioBruto * 0.09 - 16.5;
      valSalarioBrutoInss = valSalarioBruto - descInss;
      aliquotaInss = "9%";
   }
   if (valSalarioBruto >= 2203.49 && valSalarioBruto <= 3305.22) {
      descInss = valSalarioBruto * 0.12 - 82.6;
      valSalarioBrutoInss = valSalarioBruto - descInss;
      aliquotaInss = "12%";
   }
   if (valSalarioBruto >= 3305.23 && valSalarioBruto <= 6433.57) {
      descInss = valSalarioBruto * 0.14 - 148.71;
      valSalarioBrutoInss = valSalarioBruto - descInss;
      aliquotaInss = "14%";
   }
   var descImpostoRenda;
   var salarioLiquido;
   var aliquotaImpRen;
   if (valSalarioBrutoInss <= 1903.98) {
      descImpostoRenda = 0;
      salarioLiquido = valSalarioBrutoInss - descImpostoRenda;
      aliquotaImpRen = "Isento";
   }
   if (valSalarioBrutoInss >= 1903.99 && valSalarioBrutoInss <= 2826.65) {
      descImpostoRenda = valSalarioBrutoInss * 0.075 - 142.8;
      salarioLiquido = valSalarioBrutoInss - descImpostoRenda;
      aliquotaImpRen = "7,5%";
   }
   if (valSalarioBrutoInss >= 2826.66 && valSalarioBrutoInss <= 3751.05) {
      descImpostoRenda = valSalarioBrutoInss * 0.15 - 354.8;
      salarioLiquido = valSalarioBrutoInss - descImpostoRenda;
      aliquotaImpRen = "15%";
   }
   if (valSalarioBrutoInss >= 3751.06 && valSalarioBrutoInss <= 4664.68) {
      descImpostoRenda = valSalarioBrutoInss * 0.225 - 636.13;
      salarioLiquido = valSalarioBrutoInss - descImpostoRenda;
      aliquotaImpRen = "22,5%";
   }
   if (valSalarioBrutoInss >= 4664.69) {
      descImpostoRenda = valSalarioBrutoInss* 0.275 - 869.36;
      salarioLiquido = valSalarioBrutoInss - descImpostoRenda;
      aliquotaImpRen = "27,5%";
   }
   let tr=document.createElement("tr");
   let td=document.createElement("td");
   let tx=document.createTextNode(valNome);
   let tbody=document.querySelector("tbody");
   td.append(tx)
   tr.append(td)
   td=document.createElement("td");
   tx=document.createTextNode(valSalarioBruto.toFixed(2));
   td.append(tx)
   tr.append(td)
   td=document.createElement("td");
   tx=document.createTextNode(aliquotaInss);
   td.append(tx)
   tr.append(td)
   td=document.createElement("td");
   tx=document.createTextNode(descInss.toFixed(2));
   td.append(tx)
   tr.append(td)
   td=document.createElement("td");
   tx=document.createTextNode(aliquotaImpRen);
   td.append(tx)
   tr.append(td)
   td=document.createElement("td");
   tx=document.createTextNode(descImpostoRenda.toFixed(2));
   td.append(tx)
   tr.append(td)
   td=document.createElement("td");
   tx=document.createTextNode(salarioLiquido.toFixed(2));
   td.append(tx)
   tr.append(td)
   tbody.append(tr)
   return false;
}
   
   /*acumuladora = acumuladora + "Nome: " + valNome + "\n" + "\n" + "Salário Bruto:  " + valSalarioBruto.toFixed(2) + "\n"+ "\n" + "Desconto INSS (%):  " + aliquotaInss + "\n"+ "\n" + "Desconto INSS:  R$" + descInss.toFixed(2) + "\n"+ "\n" + "Desconto IRRF (%):  " + aliquotaImpRen + "\n"+ "\n" + "Desconto IRRF:  R$" + descImpostoRenda.toFixed(2) + "\n"+ "\n" + "Salário Líquido:  " + salarioLiquido.toFixed(2) + "\n" + "------------------------------------------" + "\n ";
   informacoes.textContent = acumuladora;*/

var mostrarSalarioLiquido = document.getElementById("mostrarSalarioLiquido");
mostrarSalarioLiquido.addEventListener("click", calcularSalarioLiquido); 
