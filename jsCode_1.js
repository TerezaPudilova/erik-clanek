// Prepare variables
let sum = 0 ;




// Make necessary computations
for (let i = 0; i < input.deals.length ; i ++) {

    if(input.deals[i].productType == "LOAN" && input.deals[i].state != "PAID_OFF_PREMATURE") {
        sum += input.deals[i].loanAmount;


    }
}


// Prepare the output variables
output.awarded = (sum >= ruleVariables.LOAN_AMT_THRESHOLD) ;
output.commission.type = "REVENUE";
output.commission.name = "RC_LOAN";
output.commission.value = output.awarded ?  ruleVariables.COMMISSION_RATE * sum : 0;
output.commission.reasoning = output.awarded ? "OK" : "Volume of loans not high enough";






return output;