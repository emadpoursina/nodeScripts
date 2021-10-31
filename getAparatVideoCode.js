let aparat_code = "";
let list = document.getElementsByTagName("IFRAME");

for(let i = 0; i < list.length-2; i++ ){
	aparat_code += list[i].outerHTML.substr(122, 5)+"\n";
}

