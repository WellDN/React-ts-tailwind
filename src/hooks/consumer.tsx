import { useEffect, useState } from "react";
import { AddCart } from "./context";

export function Consumer() {
    
    const [ consumer, consumerCount ] = useState(0);
    useEffect(() => {
        // Atualiza o título do documento utilizando a API do navegador
        document.title = `Você clicou ${consumer} vezes`;
      });
    return (<div>
    <p>Você clicou {consumer} vezes</p>
    <button onClick={() => consumerCount(consumer + 1)}>
      Clique aqui
    </button>
  </div>
)}