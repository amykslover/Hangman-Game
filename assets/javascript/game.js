    
    var wordList = [
        "Aardvark",
        "Albatross",
        "Alligator",
        "Alpaca",
        "Ant",
        "Anteater",
        "Antelope",
        "Ape",
        "Armadillo",
        "Donkey",
        "Baboon",
        "Badger",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Bison",
        "Boar",
        "Buffalo",
        "Butterfly",
        "Camel",
        "Capybara",
        "Caribou",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Cattle",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Chough",
        "Clam",
        "Cobra",
        "Cockroach",
        "Cod",
        "Cormorant",
        "Coyote",
        "Crab",
        "Crane",
        "Crocodile",
        "Crow",
        "Curlew",
        "Deer",
        "Dinosaur",
        "Dog",
        "Dogfish",
        "Dolphin",
        "Dotterel",
        "Dove",
        "Dragonfly",
        "Duck",
        "Dugong",
        "Dunlin",
        "Eagle",
        "Echidna",
        "Eel",
        "Eland",
        "Elephant",
        "Elk",
        "Emu",
        "Falcon",
        "Ferret",
        "Finch",
        "Fish",
        "Flamingo",
        "Fly",
        "Fox",
        "Frog",
        "Gaur",
        "Gazelle",
        "Gerbil",
        "Giraffe",
        "Gnat",
        "Gnu",
        "Goat",
        "Goldfinch",
        "Goldfish",
        "Goose",
        "Gorilla",
        "Goshawk",
        "Grasshopper",
        "Grouse",
        "Guanaco",
        "Gull",
        "Hamster",
        "Hare",
        "Hawk",
        "Hedgehog",
        "Heron",
        "Herring",
        "Hippopotamus",
        "Hornet",
        "Horse",
        "Human",
        "Hummingbird",
        "Hyena",
        "Ibex",
        "Ibis",
        "Jackal",
        "Jaguar",
        "Jay",
        "Jellyfish",
        "Kangaroo",
        "Kingfisher",
        "Koala",
        "Kookabura",
        "Kouprey",
        "Kudu",
        "Lapwing",
        "Lark",
        "Lemur",
        "Leopard",
        "Lion",
        "Llama",
        "Lobster",
        "Locust",
        "Loris",
        "Louse",
        "Lyrebird",
        "Magpie",
        "Mallard",
        "Manatee",
        "Mandrill",
        "Mantis",
        "Marten",
        "Meerkat",
        "Mink",
        "Mole",
        "Mongoose",
        "Monkey",
        "Moose",
        "Mosquito",
        "Mouse",
        "Mule",
        "Narwhal",
        "Newt",
        "Nightingale",
        "Octopus",
        "Okapi",
        "Opossum",
        "Oryx",
        "Ostrich",
        "Otter",
        "Owl",
        "Oyster",
        "Panther",
        "Parrot",
        "Partridge",
        "Peafowl",
        "Pelican",
        "Penguin",
        "Pheasant",
        "Pig",
        "Pigeon",
        "Pony",
        "Porcupine",
        "Porpoise",
        "Quail",
        "Quelea",
        "Quetzal",
        "Rabbit",
        "Raccoon",
        "Rail",
        "Ram",
        "Rat",
        "Raven",
        "Red deer",
        "Red panda",
        "Reindeer",
        "Rhinoceros",
        "Rook",
        "Salamander",
        "Salmon",
        "Sand Dollar",
        "Sandpiper",
        "Sardine",
        "Scorpion",
        "Seahorse",
        "Seal",
        "Shark",
        "Sheep",
        "Shrew",
        "Skunk",
        "Snail",
        "Snake",
        "Sparrow",
        "Spider",
        "Spoonbill",
        "Squid",
        "Squirrel",
        "Starling",
        "Stingray",
        "Stinkbug",
        "Stork",
        "Swallow",
        "Swan",
        "Tapir",
        "Tarsier",
        "Termite",
        "Tiger",
        "Toad",
        "Trout",
        "Turkey",
        "Turtle",
        "Viper",
        "Vulture",
        "Wallaby",
        "Walrus",
        "Wasp",
        "Weasel",
        "Whale",
        "Wildcat",
        "Wolf",
        "Wolverine",
        "Wombat",
        "Woodcock",
        "Woodpecker",
        "Worm",
        "Wren",
        "Yak",
        "Zebra"
        ]
    



        var random = Math.floor(Math.random() * wordList.length); 
        var secretWord = wordList[random].toLowerCase();
        var maskedWord = secretWord.replace(/[a-z, A-Z]/g, "*");
        var puzzleWord = secretWord;
        var secretWordLength = secretWord.length;
        //display masked word in HTML//
        document.getElementById("secret").innerHTML = maskedWord;

        var splitSecretWord = secretWord.split("")
        var splitMaskedWord = maskedWord.split("")

        var lettersGuessedRight = [];
        var lettersGuessedWrong = [];
        var lettersGuessed = [];
        var guessedWrong = 0     
        var wrongGuessesAllowed = 7
    
    

    document.onkeyup = function(event) {

    //check if the event.key is already in the lettersGuessed list//
    //if so, then prompt user to enter another letter//
    //if no, then set uGuess to the event.key value and proceed//
    var uGuess = event.key; 

    //check if the guess is in the word, if it isn't then the value will be -1    
        if(secretWord.indexOf(uGuess) == -1) {
        
        //verify that the letter was not already guessed, if it is then ignore, otherwise//
        //add letter to lettersGuessed//
        //increment hangman counter//
        if(lettersGuessedWrong.indexOf(uGuess) == -1) {
            lettersGuessedWrong.push(uGuess);
            guessedWrong++
            }

        if(guessedWrong == 0) {

        }
        //create a master list of letters guessed and display those letters on screen
        var lettersGuessed = lettersGuessedWrong.concat(lettersGuessedRight);
        document.getElementById("letters").innerHTML = lettersGuessed;
        document.getElementById("letterswrong").innerHTML = guessedWrong;

        if(guessedWrong == wrongGuessesAllowed) {
            alert("Game Over")
        }
        } 
            
        else{
            for (var i = 0; i < splitSecretWord.length; i++) {
                if (uGuess == splitSecretWord[i]) {
                    splitMaskedWord[i] = uGuess;

                    var joinedMaskedWord = splitMaskedWord.join("");
                    document.getElementById("secret").innerHTML = splitMaskedWord.join("");

                        if(lettersGuessedRight.indexOf(uGuess) == -1) {
                            lettersGuessedRight.push(uGuess);
                        }

                        var lettersGuessed = lettersGuessedWrong.concat(lettersGuessedRight);
                        document.getElementById("letters").innerHTML = lettersGuessed;
                        
                        if(splitMaskedWord.join("") == splitSecretWord.join("")) {
                            alert("You won the game!")
                        }
                        }
                    }
                }
            };



