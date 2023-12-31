import { StyleSheet, Text, View, Image } from "react-native"
import axios from 'axios';
import React, { useEffect, useState} from "react";

export default function FancyCard () {
    const [randomImageUrl, setRandomImageUrl] = useState('');

    useEffect(() => {
        // Função para buscar uma imagem aleatória da internet
        const fetchRandomImage = async () => {
          try {
            const response = await axios.get('https://source.unsplash.com/random');
            setRandomImageUrl(response.request.responseURL);
          } catch (error) {
            console.error('Erro ao buscar imagem aleatória:', error);
          }
        };
    })

    return (
        <View>
            <Text style={styles.headingText}> FancyCard </Text>
            <View style={[styles.card, styles.cardElevate]}>r
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    card: {

    },
    cardElevate: {}
})