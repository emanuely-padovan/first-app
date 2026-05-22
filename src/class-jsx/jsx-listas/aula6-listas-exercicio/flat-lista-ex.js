import { useState } from "react";
import { Alert } from "react-native";

export default function ListaDeComprasCompleta() {
    const [nome, setNome] = useState("")
    const [descrição, setDescrição] = useState("")

    function handleAdicionar() {
        if (nome.trim() === "") {
            Alert.alert("Atenção!", "O nome do produto")
        }
    }
}