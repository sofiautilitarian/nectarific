var n = 4;
function func1(){
    n = Math.floor(Math.random*21);
}

if (n==0){
    $(".selfformedclass1").innerHTML = "Based on scent, flowers can be divided into how many categories?";
    $(".selfformedclass2").innerHTML = "2";
    $(".selfformedclass3").innerHTML = "3";
    $(".selfformedclass4").innerHTML = "5";
    $(".selfformedclass5").innerHTML = "1";
}
if (n==1){
    $(".selfformedclass1").innerHTML = "Which of the following characteristics is typical of wind-pollinated flowers?";
    $(".selfformedclass2").innerHTML = "Brightly colored petals";
    $(".selfformedclass3").innerHTML = "Small, inconspicuous flowers";
    $(".selfformedclass4").innerHTML = "Heavy, sticky pollen";
    $(".selfformedclass5").innerHTML = "Sweet nectar";
}

if (n==2){
    $(".selfformedclass1").innerHTML = "Wind-pollinated plants often have:";
    $(".selfformedclass2").innerHTML = " Large, heavy seeds";
    $(".selfformedclass3").innerHTML = "Large quantities of lightweight pollen";
    $(".selfformedclass4").innerHTML = "Small quantities of sticky pollen";
    $(".selfformedclass5").innerHTML = "Large, showy flowers";
}

if (n==3){
    $(".selfformedclass1").innerHTML = "Which of the following is NOT a characteristic of wind-pollinated plants?";
    $(".selfformedclass2").innerHTML = "Pollen grains are small and light";
    $(".selfformedclass3").innerHTML = "Flowers have long stamens";
    $(".selfformedclass4").innerHTML = "Large amounts of nectar are produced";
    $(".selfformedclass5").innerHTML = "Pollen grains are heavy and sticky";
}

if (n==4){
    $(".selfformedclass1").innerHTML = "Wind pollination is most effective in: ";
    $(".selfformedclass2").innerHTML = "Open, airy environments";
    $(".selfformedclass3").innerHTML = "Dense forests";
    $(".selfformedclass4").innerHTML = "Tropical rainforests";
    $(".selfformedclass5").innerHTML = "Dark, shaded areas";
}
