function generateNumber() {

    const min = Math.ceil(document.getElementById("input-min").value)
    const max = Math.floor(document.getElementById("input-max").value)

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, digite os dois números.")
        return
    }

    if (min > max) {
        alert("O número inicial deve ser menor que o número final.")
        return
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min

    document.getElementById("result").innerHTML = result
}