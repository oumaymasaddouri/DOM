
let prx = document.getElementById("prx").innerHTML;

let prx1 = document.getElementById("prx1").innerHTML;

let prx2 = document.getElementById("prx2").innerHTML;

let prx3 = document.getElementById("prx3").innerHTML;

let prx4 = document.getElementById("prx4").innerHTML;

let final_total = Number(document.getElementById("final_total").innerHTML);

let plus = document.getElementById("plus");

let minus = document.getElementById("minus");

let Q = document.getElementById("Q").innerHTML;

let plus1 = document.getElementById("plus1");

let minus1 = document.getElementById("minus1");

let Q1 = document.getElementById("Q1").innerHTML;

let items_numb = Number(document.getElementById("items_numb").innerHTML);

let plus2 = document.getElementById("plus2");

let minus2 = document.getElementById("minus2");

let Q2 = document.getElementById("Q2").innerHTML;

let plus3 = document.getElementById("plus3");

let minus3 = document.getElementById("minus3");

let Q3 = document.getElementById("Q3").innerHTML;

let plus4 = document.getElementById("plus4");

let minus4 = document.getElementById("minus4");

let Q4 = document.getElementById("Q4").innerHTML;

del.addEventListener("click", function () {
  document.getElementById("final_total").innerHTML =
    Number(document.getElementById("final_total").innerHTML) - prx * Q;

  document.getElementById("row").remove();
  document.getElementById("items_numb").innerHTML = items_numb - 1;
  Q = 0;

  items_numb--;
});


del1.addEventListener("click", function () {
  document.getElementById("final_total").innerHTML =
    Number(document.getElementById("final_total").innerHTML) - prx1 * Q1;
  document.getElementById("row1").remove();
  document.getElementById("items_numb").innerHTML = items_numb - 1;
  Q1 = 0;
  items_numb--;
});

del2.addEventListener("click", function () {
  document.getElementById("final_total").innerHTML =
    Number(document.getElementById("final_total").innerHTML) - prx2 * Q2;
  document.getElementById("row2").remove();
  document.getElementById("items_numb").innerHTML = items_numb - 1;
  Q2 = 0;
  items_numb--;
});

del3.addEventListener("click", function () {
  document.getElementById("row3").remove();
  document.getElementById("items_numb").innerHTML = items_numb - 1;
  document.getElementById("final_total").innerHTML =
    Number(document.getElementById("final_total").innerHTML) - prx3 * Q3;
  Q3 = 0;
  items_numb--;
});
del4.addEventListener("click", function () {
  document.getElementById("row4").remove();
  document.getElementById("items_numb").innerHTML = items_numb - 1;
  document.getElementById("final_total").innerHTML =
    Number(document.getElementById("final_total").innerHTML) - prx4 * Q4;
  Q4 = 0;
  items_numb--;
});

plus.addEventListener("click", function () {
  Q++;
  document.getElementById("Q").innerHTML = Q;
  document.getElementById("tot").innerHTML = prx * Q;
  document.getElementById("final_total").innerHTML =
    final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
});

minus.addEventListener("click", function () {
  if (Q > 0) {
    Q--;
    document.getElementById("Q").innerHTML = Q;
    document.getElementById("tot").innerHTML = prx * Q;
    document.getElementById("final_total").innerHTML =
      final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
  }
});
plus1.addEventListener("click", function () {
  Q1++;
  document.getElementById("Q1").innerHTML = Q1;
  document.getElementById("tot1").innerHTML = prx1 * Q1;
  final_total = Number(document.getElementById("tot").innerHTML);
  document.getElementById("final_total").innerHTML =
    final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
});
minus1.addEventListener("click", function () {
  if (Q1 > 0) {
    Q1--;
    document.getElementById("Q1").innerHTML = Q1;
    document.getElementById("tot1").innerHTML = prx1 * Q1;
    document.getElementById("final_total").innerHTML =
      final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
  }
});
plus2.addEventListener("click", function () {
  Q2++;
  document.getElementById("Q2").innerHTML = Q2;
  document.getElementById("tot2").innerHTML = prx2 * Q2;
  document.getElementById("final_total").innerHTML =
    final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
});
minus2.addEventListener("click", function () {
  if (Q2 > 0) {
    Q2--;
    document.getElementById("Q2").innerHTML = Q2;
    document.getElementById("tot2").innerHTML = prx2 * Q2;
    document.getElementById("final_total").innerHTML =
      final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
  }
});
plus3.addEventListener("click", function () {
  Q3++;
  document.getElementById("Q3").innerHTML = Q3;
  document.getElementById("tot3").innerHTML = prx3 * Q3;
  document.getElementById("final_total").innerHTML =
    final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
});
minus3.addEventListener("click", function () {
  if (Q3 > 0) {
    Q3--;
    document.getElementById("Q3").innerHTML = Q3;
    document.getElementById("tot3").innerHTML = prx3 * Q3;
    document.getElementById("final_total").innerHTML =
      final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
  }
});
plus4.addEventListener("click", function () {
  Q4++;
  document.getElementById("Q4").innerHTML = Q4;
  document.getElementById("tot4").innerHTML = prx4 * Q4;
  document.getElementById("final_total").innerHTML =
    final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
});
minus4.addEventListener("click", function bas() {
  if (Q4 > 0) {
    Q4--;

    document.getElementById("Q4").innerHTML = Q4;
    document.getElementById("tot4").innerHTML = prx4 * Q4;
    document.getElementById("final_total").innerHTML =
      final_total + prx * Q + prx1 * Q1 + prx2 * Q2 + prx3 * Q3 + prx4 * Q4;
  }
});