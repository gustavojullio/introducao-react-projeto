import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Recomendados({ titulo, lista }) {
    return <>
        <View style={estilos.fundo}>
            <Text style={estilos.titulo}>{titulo}</Text>

            <View>
                {
                    lista.map(({ titulo, tipo, preco, imagem }) => {
                        return <View key={titulo} style={estilos.item}>
                            <Image source={imagem} style={estilos.imagem} />
                            <View style={estilos.texto}>
                                <Text style={estilos.tituloProduto}>{titulo}</Text>
                                <Text style={estilos.tituloProduto}>{tipo}</Text>
                                <Text style={estilos.preco}>{preco}</Text>
                            </View>
                        </View>
                    })
                }
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#E9C46A"
    },
    titulo: {
        color: "#264653",
        fontSize: 26,
        lineHeight: 26,
        fontWeight: "bold",
        marginBottom: 35,
        textAlign: "center",
        marginTop: 30
    },

    item: {
        flexDirection: "row",
        backgroundColor: "#264653",
        marginBottom: 20,
        borderRadius: 6,
        marginHorizontal: "10%"
    },
    texto: {
        marginLeft: 15,
        marginTop: 8

    },
    imagem: {
        width: 120,
        height: 120,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
    },
    tituloProduto: {
        color: "#F4A261",
        fontWeight: "bold",
        fontSize: 16,
    },
    preco: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 15,
        marginTop: "auto"
    }

})