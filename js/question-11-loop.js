//Iterate 0 to 10 using for loop, do the same using while and do while loop.

for (var i =0; i<11; i++){
    console.log(i);
}

//using while loop
var j=0;
while(j<11){

    console.log(j);
    j++;
}

//using do while 
var k = 0;

do{
    console.log(k);
    k++;
}

while(k < 11);

//Iterate 10 to 0 using for loop, do the same using while and do while loop.
for (var a = 10; a>0; a--){
    console.log(a);
}

var b = 10;
while(b>0){
    console.log(`while ${b}`);
    b--;
}

var c = 10;
do{
    console.log(`doWhile ${c} `);
    c--;
}
while(c>0)


//Iterate the array in question number 10 using a for loop and print out the items.
var itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "iBM",
    "Oracle",
    "Amazon"
  ];

  for(var f=0; f<itCompanies.length; f++){
      //console.log(itCompanies[f]);

      if(itCompanies[f].includes("Oracle")){
          console.log( `${itCompanies[f]} exists.`);
      }
      
  }

  //Filter out companies which have more than two ‘o’ without the filter method
 for (var h=0; h<itCompanies.length; h++){

    if(itCompanies[h].includes("oo")){
        console.log(`${itCompanies[h]} has two o's. `);
    }
 }

 