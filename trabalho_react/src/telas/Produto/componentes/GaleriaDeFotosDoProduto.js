import React from "react";
import { Image, StyleSheet, View, } from "react-native";


export default function GaleriaDeFotosDoProduto({ img1, img2, img3 }) {
    return <>
        <View style={estilos.principal}>
            <Image source={img1} style={estilos.imgPrincipal} />
            <View style={estilos.imagens}>
                <Image source={img1} style={estilos.imgSecundarias} />
                <Image source={img2} style={estilos.imgSecundarias} />
                <Image source={img3} style={estilos.imgSecundarias} />
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({
    principal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imgPrincipal: {
        width: 380,
        height: 380
    },
    imagens: {
        flexDirection: "row",
        alignItems: "center",
    },
    imgSecundarias: {
        width: 100,
        height: 100,
        paddingHorizontal: 65
    }

});

