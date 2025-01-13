console.log("hello");

function soChanLe(a, b){
    let soChan = 0;
    let soLe = 0;

    for (let i = a; i < b; i++) {
        if (i%2 === 0) {
            soChan++;
        
        }else {
            soLe++;
        }
        
    }
    console.log(`So luong so chan: ${soChan}`);
    console.log(`So luong so lele: ${soLe}`);

}

//
soChanLe(2,10);
