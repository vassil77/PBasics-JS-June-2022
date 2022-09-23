function SeriesCalculator(params) {
    
    let serial=params[0];
    let seasonNum=Number(params[1]);
    let episodes1Season=Number(params[2]);
    let time1Episode=Number(params[3]);

    let totalTime=seasonNum*(episodes1Season*time1Episode*1.2+10);
    totalTime=Math.floor(totalTime);

    console.log(`Total time needed to watch the ${serial} series is ${totalTime} minutes.`);




}

SeriesCalculator
(["Lucifer",
"3",
"18",
"55"])
;
SeriesCalculator
(["Game of Thrones",
"7",
"10",
"50"])
;
SeriesCalculator
(["Riverdale",
"3",
"21",
"45"])
;