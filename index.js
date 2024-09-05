$(document).ready(function () {
    var count = 0;
    var n = 0;
    function func1() {
        n = Math.floor(Math.random() * 18);
    }
    function func3() {
        var x = Math.floor(Math.random() * 3) + 1;
        $('.img').attr('src', 'img' + x + '.png');
    }
    func3();
    func1();
    func2(n);
    var correctAnswers = {
        0: "2",
        1: "Not so bright petals",
        2: "Large quantities of lightweight pollen",
        3: "Large amounts of nectar are produced",
        4: "no nectar",
        5: "The transfer of pollen from one flower to another",
        6: "Bees",
        7: "By transferring pollen from flower to flower",
        8: "Open, airy environments",
        9: "Protection to seeds",
        10: "Anther",
        11: "Seeds",
        12: "Bright, colourful petals",
        13: "Plant reproduction",
        14: "Pollinators",
        15: "Large nectar glands",
        16: "Great smell",
        17: "2 types"
    };

    var audio = new Audio('wrong.mp3'); // Initialize audio
    var audio1 = new Audio('right.mp3');
    var originalBackgroundColor = $('body').css('background-color'); // Store original background color




    // Function to handle answer clicks
    function handleAnswerClick(event) {
        var selectedAnswer = $(event.target).text();
        var correctAnswer = correctAnswers[n];
        if (selectedAnswer === correctAnswer) {
            $('body').css('background-color', 'green');
            audio1.play();
            count++; // Change background color to green
            $('.count').text("Your current score is "+count);
            setTimeout(function () {
                $('body').css('background-color', originalBackgroundColor); // Revert background color after 2 seconds
                func3();
                func1();
                func2(n);
                // Reload the page after 2 seconds
            }, 2000);
        } else {
            audio.play(); // Play the wrong answer sound
            $('body').css('background-color', 'red'); // Change background color to red
            setTimeout(function () {
                $('body').css('background-color', originalBackgroundColor); // Revert background color after 2 seconds
            }, 2000);
        }
    }

    // Set up click event listeners
    $(".selfformedclass2, .selfformedclass3, .selfformedclass4, .selfformedclass5").click(handleAnswerClick);

    // The rest of the code remains the same
    function func2(n) {
        if (n == 0) {
            $(".selfformedclass1").text("Based on scent, flowers can be divided into how many categories?");
            $(".selfformedclass2").text("2");
            $(".selfformedclass3").text("3");
            $(".selfformedclass4").text("5");
            $(".selfformedclass5").text("1");
        } else if (n == 1) {
            $(".selfformedclass1").text("Which of the following characteristics is typical of wind-pollinated flowers?");
            $(".selfformedclass2").text("Brightly colored petals");
            $(".selfformedclass3").text("Not so bright petals");
            $(".selfformedclass4").text("Heavy, sticky pollen");
            $(".selfformedclass5").text("Sweet nectar");
        } else if (n == 2) {
            $(".selfformedclass1").text("Wind-pollinated plants often have:");
            $(".selfformedclass2").text("Large, heavy seeds");
            $(".selfformedclass3").text("Large quantities of lightweight pollen");
            $(".selfformedclass4").text("Small quantities of sticky pollen");
            $(".selfformedclass5").text("Large, showy flowers");
        } else if (n == 3) {
            $(".selfformedclass1").text("Which of the following is NOT a characteristic of wind-pollinated plants?");
            $(".selfformedclass2").text("Pollen grains are small and light");
            $(".selfformedclass3").text("Flowers have long stamens");
            $(".selfformedclass4").text("Large amounts of nectar are produced");
            $(".selfformedclass5").text("Pollen grains are heavy and sticky");
        } else if (n == 4) {
            $(".selfformedclass1").text("Wind pollinated flowers have:");
            $(".selfformedclass2").text("no nectar");
            $(".selfformedclass3").text("Dense forests");
            $(".selfformedclass4").text("Tropical rainforests");
            $(".selfformedclass5").text("Dark, shaded areas");
        } else if (n == 5) {
            $(".selfformedclass1").text("What is pollination?");
            $(".selfformedclass2").text("The movement of water in plants");
            $(".selfformedclass3").text("The transfer of pollen from one flower to another");
            $(".selfformedclass4").text("The growth of a plant from a seed");
            $(".selfformedclass5").text("The wilting of flowers");
        } else if (n == 6) {
            $(".selfformedclass1").text("Which of the following animals helps with pollination?");
            $(".selfformedclass2").text("Elephants");
            $(".selfformedclass3").text("Bees");
            $(".selfformedclass4").text("Snakes");
            $(".selfformedclass5").text("Fish");
        } else if (n == 7) {
            $(".selfformedclass1").text("How do bees help with pollination?");
            $(".selfformedclass2").text("By eating the leaves");
            $(".selfformedclass3").text("By transferring pollen from flower to flower");
            $(".selfformedclass4").text("By digging in the soil");
            $(".selfformedclass5").text("By drinking water from flowers");
        } else if (n == 8) {
            $(".selfformedclass1").text("Wind pollination is most effective in:");
            $(".selfformedclass2").text("Open, airy environments");
            $(".selfformedclass3").text("Dense forests");
            $(".selfformedclass4").text("Tropical rainforests");
            $(".selfformedclass5").text("Dark, shaded areas");
        } else if (n == 9) {
            $(".selfformedclass1").text("Fruit provides:");
            $(".selfformedclass2").text("Protection to seeds");
            $(".selfformedclass3").text("Flavour to seeds");
            $(".selfformedclass4").text("Flowers to seeds");
            $(".selfformedclass5").text("Plants to seeds");
        } else if (n == 10) {
            $(".selfformedclass1").text("During pollination pollen moves from:");
            $(".selfformedclass2").text("Anther");
            $(".selfformedclass3").text("Stigma");
            $(".selfformedclass4").text("Stem");
            $(".selfformedclass5").text("Leaves");
        } else if (n == 11) {
            $(".selfformedclass1").text('Plants can produce offspring by making:');
            $(".selfformedclass2").text('Seeds');
            $(".selfformedclass3").text('Leaves');
            $(".selfformedclass4").text('Sunlight');
            $(".selfformedclass5").text('Roots');
        } else if (n == 12) {
            $(".selfformedclass1").text("Flowers getting pollinated by insects have:");
            $(".selfformedclass2").text("Bright, colourful petals");
            $(".selfformedclass3").text("Not so bright petals");
            $(".selfformedclass4").text("No nectar");
            $(".selfformedclass5").text("Lightweight pollen");
        } else if (n == 13) {
            $(".selfformedclass1").text("Pollination is an essential part of:");
            $(".selfformedclass2").text("Plant death");
            $(".selfformedclass3").text("Plant enlargement");
            $(".selfformedclass4").text("Plant reproduction");
            $(".selfformedclass5").text("Plant strength");
        } else if (n == 14) {
            $(".selfformedclass1").text("Insects or wind are:");
            $(".selfformedclass2").text("Pollinators");
            $(".selfformedclass3").text("Seeds");
            $(".selfformedclass4").text("Influencers");
            $(".selfformedclass5").text("Animals");
        } else if (n == 15) {
            $(".selfformedclass1").text("Flowers pollinated by insects have:");
            $(".selfformedclass2").text("Large nectar glands");
            $(".selfformedclass3").text("Dense forests");
            $(".selfformedclass4").text("Tropical rainforests");
            $(".selfformedclass5").text("Dark, shaded areas");
        } else if (n == 16) {
            $(".selfformedclass1").text("Flowers pollinated by insects have:");
            $(".selfformedclass2").text("Great smell");
            $(".selfformedclass3").text("Dense forests");
            $(".selfformedclass4").text("Tropical rainforests");
            $(".selfformedclass5").text("Dark, shaded areas");
        } else if (n == 17) {
            $(".selfformedclass1").text("Based on flowering, plants can be of:");
            $(".selfformedclass2").text("4 types");
            $(".selfformedclass3").text("6 types");
            $(".selfformedclass4").text("2 types");
            $(".selfformedclass5").text("3 types");
        }
    }
});