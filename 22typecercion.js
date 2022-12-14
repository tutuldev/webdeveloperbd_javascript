nila='222'

resulet=typeof(nila);
console.log(resulet);

nila= Number(nila);

resulet=typeof(nila);
console.log(resulet);

nila= String(nila);

resulet=typeof(nila);
console.log(resulet);


nila= Boolean(nila);

resulet=typeof(nila);
console.log(resulet);
console.log(nila)


console.log(Number('2'));
console.log(typeof(+'2'))

function gun(){
for(i=0;i<10;i++){

    console.log("10*1" + 10*i);
}
}
gun();