function sortearNumero() {
    const min = parseInt(document.getElementById("input-min").value)
    const max = parseInt(document.getElementById("input-max").value)

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, digite os dois números.")
        return
    }

    if (min > max) {
        alert("O número inicial deve ser menor que o número final.")
        return
    }

    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min

    document.getElementById("resultado").innerHTML = sorteado
}