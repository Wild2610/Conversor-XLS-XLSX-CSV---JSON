import * as XLSX from "xlsx";

const converter = (arq, callback) => {
  const leitor = new FileReader();

  leitor.onload = (e) => {
    const dados = e.target.result;
    const planilha = XLSX.read(dados, { type: "binary" });
    const nomeAba = planilha.SheetNames[0];
    const aba = planilha.Sheets[nomeAba];
    const json = XLSX.utils.sheet_to_json(aba);

    const resultadoFormatado = {
      linhas: json,
    };

    const jsonString = JSON.stringify(resultadoFormatado, null, 2);
    callback(jsonString);
  };

  leitor.readAsBinaryString(arq);
};

export default converter;