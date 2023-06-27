function giaiBac2() {
    var a = document.getElementById("aID").value
    var b = document.getElementById("bID").value
    var c = document.getElementById("cID").value
    a = parseFloat(a) // ép kiểu thành số
    b = parseFloat(b)
    c = parseFloat(c)
    var delta = b * b - 4 * a * c
    if (delta < 0) {
        document.getElementById('result').innerHTML = "Phương trình vô nghiệm";
    } else if (delta === 0) {
        var x = -b / (2 * a);
        document.getElementById('result').innerHTML = "Phương trình có nghiệm kép x = " + x;
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById('result').innerHTML = "Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
    }
}

function tinhBMI() {
    var weigh = parseFloat(document.getElementById("kg").value)
    var height = parseFloat(document.getElementById("m").value)
    var BMI = weigh / (height * height)
    var ketQua = ""
    if ( BMI < 18.5) {
        ketQua = "Thiếu cân";
    } else if (BMI < 25) {
        ketQua = "Bình thường";
    } else if (BMI < 30) {
        ketQua = "Thừa cân";
    } else {
        ketQua = "Béo phì";
    }
    document.getElementById('tinh').innerHTML = "BMI= " + BMI.toFixed(2) + ": " + ketQua;
}

function tinhLai() {
    var vnd = parseFloat(document.getElementById("sotien").value)
    var thang = parseFloat(document.getElementById("kyhan").value)
    var phantram = parseFloat(document.getElementById("laisuat").value)

    var tienlai = ( thang * phantram * vnd)  / ( 12 * 100 )  

    document.getElementById('tinhtien').innerHTML = "Tiền lãi " + tienlai.toFixed(2) + " VNĐ ";
}
function doiTien() {
    var vnđ = parseFloat(document.getElementById("tien").value)
    var currency = document.getElementById("select-currency").value
    var convertedAmount = 0;
    if(currency === 'EUR')
    {
        convertedAmount = vnđ / 26000
    }
    else if(currency === 'USD')
    {
        convertedAmount = vnđ /22000
    }
    else if(currency === 'AUD')
    {
        convertedAmount = vnđ /16000
    }
    document.getElementById('doitien').innerHTML = vnđ + "VNĐ = " + convertedAmount.toFixed(2) + currency;
}