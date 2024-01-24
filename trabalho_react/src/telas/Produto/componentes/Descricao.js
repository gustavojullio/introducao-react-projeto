import React from "react";
import { Text, StyleSheet, View, } from "react-native";

export default function Descricao({ tituloProduto, frete, descricaoProduto, tamanho, preco }) {
    return <>
        <View style={estilos.fundo}>
            <Text style={estilos.titulo}>{tituloProduto}</Text>

            <View style={estilos.frete}>
                <Text style={estilos.textFrete}>{frete}</Text>
            </View>


            <Text style={estilos.descricaoProduto}>{descricaoProduto}</Text>

            <Text style={estilos.descricaoTamanho}>{tamanho.texto}</Text>

            <View style={estilos.viewTamanhos}>
                {tamanho.tamProduto.map((tam, index) => (
                    <View key={index} style={estilos.itemTamanho}>
                        <Text style={estilos.textTam}>{tam}</Text>
                    </View>
                ))}
            </View>

            <Text style={estilos.preco}>{preco}</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#E9C46A",
        paddingHorizontal: 20,
    },
    titulo: {
        color: "#264653",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 15,
        marginTop: 15
    },

    frete: {
        backgroundColor: "#2A9D8F",
        borderRadius: 50,
        width: 150,
        height: 35,
        alignItems: 'center',
        marginBottom: 20
    },

    textFrete: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
    },
    descricaoProduto: {
        color: "#264653",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 15
    },

    descricaoTamanho: {
        color: "#264653",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 15
    },


    viewTamanhos: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    },
    itemTamanho: {
        backgroundColor: "#264653",
        borderWidth: 1,
        borderColor: "#264653",
        padding: 5,
        margin: 5,
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTam: {
        color: "#F4A261",
        fontWeight: "bold",
    },
    preco: {
        color: "#264653",
        fontWeight: "bold",
        fontSize: 40,
        marginTop: 15
    }

})
