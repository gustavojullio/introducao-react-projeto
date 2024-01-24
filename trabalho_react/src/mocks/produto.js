import tenis1 from '../../assets/produtos/tenis1.jpeg';
import tenis2 from '../../assets/produtos/tenis2.jpeg';
import tenis3 from '../../assets/produtos/tenis3.jpeg';
import lista1 from '../../assets/produtos/lista1.jpeg';
import lista2 from '../../assets/produtos/lista2.jpeg';
import lista3 from '../../assets/produtos/lista3.jpeg'
import lista4 from '../../assets/produtos/lista4.jpeg';


import Recomendados from '../telas/Produto/componentes/Recomendados';

const produto = {
    topo: {
        titulo: "Detalhes do produto:"
    },
    galeriaDeFotosdoProduto: {
        img1: tenis1,
        img2: tenis2,
        img3: tenis3
    },
    descricao: {
        tituloProduto: "Tênis Nike Sb Chron 2 Canvas Masculino",
        frete: "Frete Grátis",
        descricaoProduto: "Departamento: Esporte\nMaterial: Têxtil\nGarantia do Fabricante: Contra defeito de fabricação",
        tamanho: {
            texto: "Escolha o tamanho:",
            tamProduto: [38, 39, 40, 41, 42]
        },
        preco: "R$ 389,90"
    },
    recomendados: {
        titulo: "Recomendados:",
        lista: [
            {
                titulo: "Asics Raiden 3",
                tipo: "Esportivo",
                preco: "R$ 329,90",
                imagem: lista1
            },
            {
                titulo: "Olympikus Zex",
                tipo: "Esportivo",
                preco: "R$ 143,99",
                imagem: lista2
            },
            {
                titulo: "Redley Originals",
                tipo: "Casual",
                preco: "R$ 219,99",
                imagem: lista3
            },
            {
                titulo: "Adidas Gamecourt 2",
                tipo: "Esportivo",
                preco: "R$ 499,99",
                imagem: lista4
            },
        ]
    }
}

export default produto;