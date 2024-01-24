import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";

export default function BotaoCarrinho() {
    return <>
        <View style={estilos.fundo}>
            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.textoBotao}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
        </View>
    </>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#E9C46A",
        paddingHorizontal: 20,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#264653",
        paddingVertical: 20,
        borderRadius: 6,
        width: "90%",
        marginLeft: "5%",
        marginBottom: 20
    },
    textoBotao: {
        textAlign: "center",
        color: "#F4A261",
        fontSize: 26,
        fontWeight: "bold"
    }
})