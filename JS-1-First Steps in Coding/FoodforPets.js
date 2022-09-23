function FoodforPets(input) {

    let days = Number(input[0]);
    let food = Number(input[1]);
    
    const dogFood=[];
    for(i=0;i<days;i++){
        dogFood[i]=Number(input[2*i+2]);
    }

    const catFood=[];
    for(i=0;i<days;i++){
        catFood[i]=Number(input[2*i+3]);
    }

    let countBuiscuitsDays=Math.floor(days/3); 
    let buiscuits=0;
    for (i=1;i<=countBuiscuitsDays;i++){
    buiscuits+=0.1*(dogFood[3*i-1]+catFood[3*i-1]);
    } 
    buiscuits=Math.round(buiscuits);
    console.log(`Total eaten biscuits: ${buiscuits}gr.`);


    dogFoodEaten=0;
    for(i=0;i<days;i++){
        dogFoodEaten+=dogFood[i];
    }

    catFoodEaten=0;
    for(i=0;i<days;i++){
        catFoodEaten+=catFood[i];
    }

    totalFoodEaten=dogFoodEaten+catFoodEaten;
    percentEatenFood=(totalFoodEaten/food*100).toFixed(2);
    console.log(`${percentEatenFood}% of the food has been eaten.`);

    percentDogFood=(dogFoodEaten/totalFoodEaten*100).toFixed(2);
    console.log(`${percentDogFood}% eaten from the dog.`);

    percentCatFood=(catFoodEaten/totalFoodEaten*100).toFixed(2);
    console.log(`${percentCatFood}% eaten from the cat.`);



}

FoodforPets(
    (["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40", 
    
])
);
FoodforPets
(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"]);
