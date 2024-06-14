import { useState } from "react";
import styles from "./App.module.css";
import converter from "./Converter";

const App = () => {
  const [conteudoJson, setConteudoJson] = useState(""); // estado para armazenar o json

  const arq = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      if (arquivo.name.endsWith(".csv") || arquivo.name.endsWith(".xlsx") || arquivo.name.endsWith(".xls"))  {
        converter(arquivo, (jsonString) => { 
          setConteudoJson(jsonString);
        });
      } else {
        alert("Formato de arquivo nao suportado")
      }
    }
  }

  return (
    <div className={styles.app}>
      <div id={styles.container1}>
        <div id={styles.campos}>
          <input
            type="file"
            id="arqInput"
            accept=".csv, .xls, .xlsx"
            onChange={arq}
          />
        </div>
      </div>

      <div id={styles.container2}>
        <div className={styles.blocosSaidas}>
          <pre id="outJson">{conteudoJson}</pre> 
        </div>
      </div>
    </div>
  );
};

export default App;
