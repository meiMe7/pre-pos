function count_same_elements(collection) {
    //在这里写入代码
    var result = [];
    var obj = {name: '', summary: 0};
    for (var i = 0; i <= collection.length; i++) {
        if (collection[i] == obj.name) {
            obj.summary++;
        }
        else {
            if (obj.name == '')var obj = {name: collection[i], summary: 1};
            else {

            result.push(obj);
            var obj = {name: collection[i], summary: 1};
        }
        }}

    for (var j = 0; j < result.length; j++) {
        var obj_2 = result[j].name;
        var arr = new String(obj_2).split("-");
        var arr_2 = new String(obj_2).split(":");
        var arr_3 = new String(obj_2).split("[");
        if (arr[1] != undefined) {
            result[j].name = arr[0];
            result[j].summary = Number(arr[1]);
        }
        if (arr_2[1] != undefined) {
            result[j].name = arr_2[0];
            result[j].summary = Number(arr_2[1]);
        }
        if (arr_3[1] != undefined) {
            var arr_4 = new String(arr_3[1]).split("]");
            result[j].name = arr_3[0];
            result[j].summary = Number(arr_4[0]);
        }


    }
    var arr_temp = [];
    for (var j = 0; j < result.length; j++) {
        var flag = false;
        for (var k = 0; k < arr_temp.length; k++) {
            if (arr_temp[k].name.indexOf(result[j].name) > -1) {
                arr_temp[k].summary = arr_temp[k].summary + result[j].summary;
                flag = true;
                break;
            }
        }
        if (!flag) {
            arr_temp.push(result[j])
        }
    }
    return arr_temp;
}

module.exports = count_same_elements;