import React from 'react';
import { Text, StyleSheet, View } from "react-native";

export default function Topo({ titulo }) {
    return <>
        <View style={estilos.fundo} >
            <Text style={estilos.texto}>{titulo}</Text>
        </View>
    </>
}


const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#264653",
        padding: 50
    },
    texto: {
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#F4A261",
        fontWeight: "bold",

    }
})