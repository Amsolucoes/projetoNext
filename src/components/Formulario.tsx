import Cliente from "@/core/Cliente";
import { useState } from "react";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  cancelado?: () => void;
  clienteMudou?: (cliente: Cliente) => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada texto="Id" valor={id} somenteLeitura className="mb-4" />
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        valor={nome}
        valorAlterado={setNome}
        className="mb-4"
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorAlterado={setIdade}
      />
      <div className="flex justify-end mt-3">
        <Botao
          onclick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
          cor="green"
          className="mr-2"
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao cor="gray" onclick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
