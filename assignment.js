function feetToMile(feet)
    {
        var mile=feet/5280;
        console.log(feet, "feet is equal to ",mile, "mile");
    }
    feetToMile(5280);



function woodCalculator(chair,table,bed)
    {
        var total= (chair*1)+(table*3)+(bed*5);

        console.log("you need",total," cubic-feet Wood");
    }    
    woodCalculator(2,3,5);



function brickCalculator(totalDeck)
    {
        if(totalDeck<=10){
            totalBrick=totalDeck*1000*15;
            console.log(totalBrick);
        }
        else if(totalDeck>10 && totalDeck<=20){
            totalBrick=1000*15*10+((totalDeck-10)*1000*12);
            
            console.log(totalBrick);
        }
        else{
            totalBrick=(1000*15*10)+(1000*12*10)+((totalDeck-20)*1000*10);
            
            console.log("you need total ",totalBrick, " bricks");
        }
    }
    brickCalculator(21);



function tinyFriend(names)
{   
    var smallestName= names[0];
    for(var i=0;i<names.length;i++)
    {
        var currentName=names[i];
        if(currentName.length<smallestName.length){
            smallestName=currentName;
        }
    }
    return smallestName;
}
var smallestName=tinyFriend(['abcd','ef','ghih']);
console.log("The tiny name's Friend  is ",smallestName);