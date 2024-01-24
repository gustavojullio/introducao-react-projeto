import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";

export default function BotaoComprar() {
    return <>
        <View style={estilos.fundo}>
            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.textoBotao}>Comprar</Text>
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
        backgroundColor: "#2A9D8F",
        paddingVertical: 20,
        borderRadius: 6,
        width: "90%",
        marginLeft: "5%",
        marginBottom: 20
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 26,
        fontWeight: "bold"
    }
})