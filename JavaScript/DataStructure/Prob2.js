function checkEligibility(age){
    if(age>=18){
        return 'Eligible';
    }else{
        return 'Not Eligible';
    }


}

const Result=checkEligibility(20)
console.log(Result)