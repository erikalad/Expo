
var obj = {"version":"0.6","reqId":"0","status":"ok","sig":"1613552450","table":{"cols":[{"id":"A","label":"Marca temporal","type":"string"},{"id":"B","label":"Nombre y Apellido","type":"string"},{"id":"C","label":"DNI","type":"number","pattern":"General"},{"id":"D","label":"Correo electrónico","type":"string"},{"id":"E","label":"Teléfono","type":"string"}],"rows":[{"c":[null,{"v":"Erika Ladner"},{"v":3.8391222E7,"f":"38391222"},null,{"v":null}]},{"c":[null,{"v":"Dylan Marcote"},{"v":4.305444E7,"f":"43054440"},null,{"v":null}]},{"c":[null,{"v":"Nicole Salvatierra"},{"v":5.3534534E7,"f":"53534534"},null,{"v":null}]},{"c":[null,{"v":"Juan Perez"},{"v":5.3334777E7,"f":"53334777"},null,{"v":null}]},{"c":[null,{"v":"Nicolas Rodriguez"},{"v":9.8989878E7,"f":"98989878"},null,{"v":null}]},{"c":[null,{"v":"Martin Palermo"},{"v":1.2354545E7,"f":"12354545"},null,{"v":null}]},{"c":[null,{"v":"Manuel Enrique"},{"v":1.2345678E7,"f":"12345678"},null,{"v":null}]}],"parsedNumHeaders":1}}
let array= []
let info = obj.table.rows
for(let i=0;i<info.length;i++){
    let info2 = info[i]
    let info3 = info2['c']
    let nombre = info3[1].v
    let dni = info3[2].f
    let ultdni = dni.substring(5)
    array.push({"nombre" : nombre,"dni" : ultdni})
}

function nrorandom(){
    let premiado = array[Math.floor(Math.random() *7)]
    //VER DE APLICAR UN FILTRO PARA QUE BORRE EL SELECCIONADO
    return premiado
}

export default nrorandom

