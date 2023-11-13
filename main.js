// Funções para calcular o volume e a área de cada forma
function calcularVolumeCubo() {
    const lado = parseFloat(document.getElementById("cuboLado").value);
    const volume = Math.pow(lado, 3);
    document.getElementById("cuboResultado").textContent = `Volume do Cubo: ${volume}`;
}

function calcularAreaCubo() {
    const lado = parseFloat(document.getElementById("cuboLado").value);
    const area = 6 * Math.pow(lado, 2);
    document.getElementById("cuboResultado").textContent = `Área do Cubo: ${area}`;
}

function calcularVolumeParalelepipedo() {
    const comprimento = parseFloat(document.getElementById("paralelepipedoComprimento").value);
    const largura = parseFloat(document.getElementById("paralelepipedoLargura").value);
    const altura = parseFloat(document.getElementById("paralelepipedoAltura").value);
    const volume = comprimento * largura * altura;
    document.getElementById("paralelepipedoResultado").textContent = `Volume do Paralelepípedo: ${volume}`;
}

function calcularAreaParalelepipedo() {
    const comprimento = parseFloat(document.getElementById("paralelepipedoComprimento").value);
    const largura = parseFloat(document.getElementById("paralelepipedoLargura").value);
    const altura = parseFloat(document.getElementById("paralelepipedoAltura").value);
    const area = 2 * (comprimento * largura + comprimento * altura + largura * altura);
    document.getElementById("paralelepipedoResultado").textContent = `Área do Paralelepípedo: ${area}`;
}

function calcularVolumeEsfera() {
    const raio = parseFloat(document.getElementById("esferaRaio").value);
    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    document.getElementById("esferaResultado").textContent = `Volume da Esfera: ${volume}`;
}

function calcularAreaEsfera() {
    const raio = parseFloat(document.getElementById("esferaRaio").value);
    const area = 4 * Math.PI * Math.pow(raio, 2);
    document.getElementById("esferaResultado").textContent = `Área da Esfera: ${area}`;
}

function calcularVolumeCone() {
    const raio = parseFloat(document.getElementById("coneRaio").value);
    const altura = parseFloat(document.getElementById("coneAltura").value);
    const volume = (1 / 3) * Math.PI * Math.pow(raio, 2) * altura;
    document.getElementById("coneResultado").textContent = `Volume do Cone: ${volume}`;
}

function calcularAreaCone() {
    const raio = parseFloat(document.getElementById("coneRaio").value);
    const altura = parseFloat(document.getElementById("coneAltura").value);
    const geratriz = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
    const area = Math.PI * raio * (raio + geratriz);
    document.getElementById("coneResultado").textContent = `Área do Cone: ${area}`;
}


function calcularVolumeAreaCilindro() {
    var raioBase = parseFloat(document.getElementById('raioBase').value);
    var alturaCilindro = parseFloat(document.getElementById('alturaCilindro').value);

    if (isNaN(raioBase) || isNaN(alturaCilindro)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    var volumeCilindro = Math.PI * Math.pow(raioBase, 2) * alturaCilindro;
    var areaSuperficieCilindro = 2 * Math.PI * raioBase * (raioBase + alturaCilindro);

    document.getElementById('resultadoCilindro').innerHTML = "Volume: " + volumeCilindro.toFixed(2) + "<br>Área da Superfície: " + areaSuperficieCilindro.toFixed(2);
}



function calcularAreaPerimetro() {
    var baseMaior = parseFloat(document.getElementById('baseMaior').value);
    var baseMenor = parseFloat(document.getElementById('baseMenor').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);

    if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura) || isNaN(lado1) || isNaN(lado2)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    var area = ((baseMaior + baseMenor) * altura) / 2;
    var perimetro = baseMaior + baseMenor + lado1 + lado2;

    document.getElementById('resultado').innerHTML = "Área: " + area.toFixed(2) + "<br>Perímetro: " + perimetro.toFixed(2);
}

function calcularConsumo() {
    const potencia = parseFloat(document.getElementById('potencia').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    const periodo = parseFloat(document.getElementById('periodo').value);
    const taxa = parseFloat(document.getElementById('taxa').value);

    const energia = (potencia * tempo * periodo) / 1000;
    const custo = taxa * energia;

    const resultado = `Consumo de Energia: ${energia.toFixed(2)} kWh<br>Custo: R$ ${custo.toFixed(2)}`;
    document.getElementById('resultadoF').innerHTML = resultado;
}