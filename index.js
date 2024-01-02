// Iniciar a ação de verificar o nivel do heroi
let continuar = true;

while (continuar) {
    // Obter o nome e a experiência do usuário
    let nome = "Baltazar"
    let xp = 5500

    // Estrutura de decisão para determinar o nível
    let nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exiba a mensagem final
    console.log("O Herói de nome " + nome + " está no nível de " + nivel);

    // Pergunte ao usuário se deseja continuar
    const pergunta = "Deseja classificar outro herói? (s/n)"
    console.log(pergunta)
    const resposta = 'n'
    if (resposta !== 's') {
        continuar = false;
    }
}
