function gerarQRCode() {
    var inputUser = document.querySelector("textarea");
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
    var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUser);
    document.querySelector("#QRCodeImage").src = conteudoQRCode;
}