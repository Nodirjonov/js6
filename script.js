let a=+prompt('0=tosh 1=qaychi 2=qogoz')

let b=Math.round(Math.random()*2)


if(a===0 && b===0) {
    alert(' siz tosh talladiz va compam durrang');
}else if(a===0 && b===1){
    alert("siz tosh talladiz a comp qaychi yuttiz");
}else if(a===0 && b===2){
    alert("siz tosh talladiz a comp qogoz yutqizdiz");
}else if(a===1 && b===0) {
    alert('siz qaychi talladiz a comp tosh yutkazdiz');
}else if(a===1 && b===1){
    alert("siz qaychi talladiz va comp durrang");
}else if(a===1 && b===2){
    alert("siz qaychi talladiz a comp qogoz yuttiz");
}else if(a===2 && b===0) {
    alert('siz qogoz talladiz a comp tosh yuttiz');
}else if(a===2 && b===1){
    alert("siz qogoz talladiz a comp qaychi yitkazdiz");
}else if(a===2 && b===2){
    alert("siz qogoz talladiz va comp durrang");
}
