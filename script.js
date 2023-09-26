// Função para inserir números e operadores no visor
function insert(numb) {
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + numb;
}

// Função para limpar o visor
function clean() {
    document.getElementById('result').innerHTML = "";
}

// Função para calcular o resultado da expressão
function calcular() {
    var resultado = document.getElementById('result').innerHTML;
    try {
        var evalResult = eval(resultado);
        if (isNaN(evalResult)) {
            document.getElementById('result').innerHTML = "Erro";
        } else {
            document.getElementById('result').innerHTML = evalResult;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = "Erro";
    }
}
