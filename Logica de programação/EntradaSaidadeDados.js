function funcJS(form_html){
    console.log("funcjs");
    form_html.saida_dados.value = form_html.entrada_dados.value;
}

function funcJS_ById(){
    console.log('funcJS_ById');
    document.getElementById('id_saida_dados').value = document.getElementById('id_entrada_dados').value;
    }