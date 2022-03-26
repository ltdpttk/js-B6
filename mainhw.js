var tong =0 ;
for (var i = 1;i<1000; i++){
    tong += i;
    if (tong > 10000){
        break;
    }
}
document.getElementById("result1").innerHTML = "Số nguyên dương nhỏ nhất: "+i;



// bai 2
document.getElementById("btn1").onclick = function(){
    var soX = document.getElementById("soX").value*1;
    var soY = document.getElementById("soY").value*1;
    var tong=0;
    var mu =0;
    for(var i = 1; i<=soY; i++){
        mu = soX**i;
        tong += mu;
}
document.getElementById("result2").innerHTML = tong;
// console.log(tong);
}

// bai 3
document.getElementById("btn2").onclick = function(){
    var giaThua = document.getElementById("giaThua").value*1;
    var tong =1;
    for(i=1; i<=giaThua;i++){
        tong = tong *i;
    }
    document.getElementById("result3").innerHTML = tong;
}

// bai 4
document.getElementById("btn3").onclick = function(){
    var soDiv = document.getElementById("soDiv").value*1;
    var chuoiDiv =[];
    for(var i=1;i<soDiv+1;i++ ){
        if(i%2===1){
            chuoiDiv.push(
                "<div class='alert alert-danger'>Div Lẻ " + i + "</div>"
            )
        }
        else{
            chuoiDiv.push(
                "<div class='alert alert-info'>Div chẳn " + i + "</div>"
            )
        }
    }
    document.getElementById("result4").innerHTML = chuoiDiv;
}  

// bai 5
document.getElementById("btn4").onclick = function(){
    var soNguyenTo = document.getElementById("soNguyenTo").value*1;
    var chuoiSo = [0];
    for (var i = 1; i < soNguyenTo + 1; i++) {
        var n = 0;
        for (var j = 1; j < i; j++) {
          if (n > 1) {
            break;
          } else {
            i % j == 0 ? (n = n + 1) : (n = n);
          }
        }
        n < 2 ? chuoiSo.push(i) : "";
      }
      document.getElementById("result5").innerHTML ="<div class='alert alert-success'>Các số nguyên tố trong giới hạn "+soNguyenTo+" là <span class='kq'>"+chuoiSo+"</span></div>";
}
