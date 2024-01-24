import React from "react";
import { ScrollView } from "react-native";
import Topo from "./componentes/Topo";
import GaleriaDeFotosDoProduto from "./componentes/GaleriaDeFotosDoProduto";
import Descricao from "./componentes/Descricao";
import BotaoComprar from "./componentes/BotaoComprar";
import BotaoCarrinho from "./componentes/BotaoCarrinho";
import Recomendados from "./componentes/Recomendados";


export default function Carrinho({ topo, galeriaDeFotosdoProduto, descricao, recomendados }) {
    return <ScrollView>
        <Topo {...topo} />
        <GaleriaDeFotosDoProduto {...galeriaDeFotosdoProduto} />
        <Descricao {...descricao} />
        <BotaoComprar />
        <BotaoCarrinho />
        <Recomendados {...recomendados} />
    </ScrollView>
}