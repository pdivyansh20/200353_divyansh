let tax =0 ;
function Tax(income){
    if(income<= 250000){
        tax=0;
    }
    else if(income>250001 && income<=500000 ){
      tax= (income-250000)*0.05;
    }
    else if(income>500001 && income<=750000 ){
        tax= (income-250000)*0.05 + (income-500000)*0.1 ;
      }
      else if(income>750001 && income<=1000000 ){
        tax= (income-250000)*0.05 + (income-500000)*0.1 + (income-750000)*0.15 ;
      }
      else if(income>1000001 && income<=1250000 ){
        tax= (income-250000)*0.05 + (income-500000)*0.1 + (income-750000)*0.15 + (income-1000000)*0.2 ;
      }
      else if(income>1250001 && income<=1500000 ){
        tax= (income-250000)*0.05 + (income-500000)*0.1 + (income-750000)*0.15 + (income-1000000)*0.2+(income-1250000)*0.25 ;
      }
      else if( income>=1500000 ){
        tax= (income-250000)*0.05 + (income-500000)*0.1 + (income-750000)*0.15 + (income-1000000)*0.2+(income-1250000)*0.25+(income-1500000)*0.3;
      }
      return tax
}
console.log(Tax(753000))