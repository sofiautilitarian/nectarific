$(document).ready(function () {
    var count = 0;
    var n = 28;
    function func1() {
        if (n>0){
            n--;
        }
        else {
            n = 27;
        }
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
        17: "2 types",
        18: "Anther",
        19: "same species",
        20: "By eating and excreting seeds",
        21: "Ensuring seedlings are well-distributed",
        22: "Winged or parachute-like seeds prone to wind blow",
        23: "Carrying seeds and depositing in new locations",
        24: "Seeds are dropped from a height and roll to a new location",
        25: "Animals spread seeds through their waste, which fertilizes and helps seeds germinate",
        26: "Small, lightweight seeds are often dispersed by wind, while large seeds are typically dispersed by animals or water",
        27: "The seed coat softens and splits"
    };

     // Initialize audio
   
    var originalBackgroundColor = $('body').css('background-color'); // Store original background color




    // Function to handle answer clicks
    function handleAnswerClick(event) {
        var selectedAnswer = $(event.target).text();
        var correctAnswer = correctAnswers[n];
        if (selectedAnswer === correctAnswer) {
            $('body').css('background-color', 'green');
            var audio1 = new Audio('right.mp3');
            audio1.play();
            count++; // Change background color to green
            $('.count').text("Your current score is "+count);
            setTimeout(function () {
                $('body').css('background-color', originalBackgroundColor); // Revert background color after 2 seconds
                func3();
                func1();
                func2(n);
                // Reload the page after 2 seconds
            }, 1000);
        } 
        else {
            var audio = new Audio('wrong.mp3');
            audio.play(); // Play the wrong answer sound
            $('body').css('background-color', 'red'); // Change background color to red
            setTimeout(function () {
                $('body').css('background-color', originalBackgroundColor); // Revert background color after 2 seconds
            }, 1000);
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
        } else if (n == 18) {
            $(".selfformedclass1").text("Pollen stays in: ");
            $(".selfformedclass2").text("Anther");
            $(".selfformedclass3").text("Sepal");
            $(".selfformedclass4").text("Stigma");
            $(".selfformedclass5").text("Sepal");
        } else if (n == 19) {
            $(".selfformedclass1").text("Pollination only happens in flowers belonging to the: ");
            $(".selfformedclass2").text("same plant");
            $(".selfformedclass3").text("same tree");
            $(".selfformedclass4").text("same species");
            $(".selfformedclass5").text("same parent");
        } else if (n == 20) {
            $(".selfformedclass1").text("How do animals contribute to seed dispersion?");
            $(".selfformedclass2").text("By eating and excreting seeds");
            $(".selfformedclass3").text("By carrying seeds on fur");
            $(".selfformedclass4").text("By caching seeds in ground");
            $(".selfformedclass5").text("By depositing seeds through saliva");
        } else if (n == 21) {
            $(".selfformedclass1").text("Why is it important for plants to have enough space for seed dispersion?");
            $(".selfformedclass2").text("To protect seeds");
            $(".selfformedclass3").text("Ensuring seedlings are well-distributed");
            $(".selfformedclass4").text("To attract insects");
            $(".selfformedclass5").text("To make the seeds sticky");
        } else if (n == 22) {
            $(".selfformedclass1").text("What do plants do to ensure wind disperses seeds effectively?");
            $(".selfformedclass2").text("Seeds falling close to the parent plant.");
            $(".selfformedclass3").text("Winged or parachute-like seeds prone to wind blow");
            $(".selfformedclass4").text("Colorful seeds to attract insects.");
            $(".selfformedclass5").text("Sticky seeds adhere to animal fur");
        } else if (n == 23) {
            $(".selfformedclass1").text("How does water act as a medium for seed dispersion?");
            $(".selfformedclass2").text("Carrying seeds and depositing in new locations");
            $(".selfformedclass3").text("Seeds are dispersed through waterlogged soil");
            $(".selfformedclass4").text("Seeds float on the surface of water");
            $(".selfformedclass5").text("Seeds are trapped in mud and carried to new areas");
        } else if (n == 24) {
            $(".selfformedclass1").text("How does water act as a medium for seed dispersion?");
            $(".selfformedclass2").text("Seeds fall and roll away from the parent plant due to gravity");
            $(".selfformedclass3").text("Seeds are expelled by the plant and roll away on the ground");
            $(".selfformedclass4").text("Seeds are dropped from a height and roll to a new location");
            $(".selfformedclass5").text("Seeds are thrown by the plant and roll through the soil");
        } else if (n == 25) {
            $(".selfformedclass1").text("In what ways can animal behaviors influence the dispersion and germination of seeds?");
            $(".selfformedclass2").text("Animals eat seeds and transport them to new locations where they may germinate");
            $(".selfformedclass3").text("Animals cache seeds in various locations, which can result in germination if the seeds are not retrieved");
            $(".selfformedclass4").text("Animals chew seeds, breaking down their hard coats and facilitating germination");
            $(".selfformedclass5").text("Animals spread seeds through their waste, which fertilizes and helps seeds germinate");
        } else if (n == 26) {
            $(".selfformedclass1").text("How does seed size and shape affect a plant's method of seed dispersion");
            $(".selfformedclass2").text("Small, lightweight seeds are often dispersed by wind, while large seeds are typically dispersed by animals or water");
            $(".selfformedclass3").text("Heavy, large seeds are dispersed by water, while small seeds are dispersed by animals");
            $(".selfformedclass4").text("Seeds with a hard coating are dispersed by wind, while soft seeds are dispersed by water");
            $(".selfformedclass5").text("Small seeds are dispersed by animals, while large seeds are dispersed by wind");
        } else if (n == 27) {
            $(".selfformedclass1").text("What is the first stage of seed germination?");
            $(".selfformedclass2").text("The seed coat softens and splits");
            $(".selfformedclass3").text("The first root begins to grow downward");
            $(".selfformedclass4").text("The seed absorbs sunlight");
            $(".selfformedclass5").text("The seed dies");
        }
    }
});
