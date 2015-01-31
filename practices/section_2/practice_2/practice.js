function count_same_elements(collection)
{
    //在这里写入代码
    var temp_arr =find_data(collection);
 return    split_data(temp_arr);
}
function split_data(temp_arr){

    for (var i=0;i<temp_arr.length;i++) {
        var arr =  new String(temp_arr[i].key).split("-");

        if(arr[1]!=undefined)
        {   temp_arr[i].key =arr[0];
            temp_arr[i].count=arr[1];

        }

    }
    return temp_arr;
}
function find_data(collection_a){var result =[];

    for (var i=0;i< collection_a.length;i++) {
        var  sum = 1;
        var obj = {};
        for (var j=i+1;j< collection_a.length;j++){
            if(collection_a[i] == collection_a[j]) {
                sum ++;
                i=j;
            }
        }

        obj = {key:collection_a[i],count:sum};

        obj.count = sum;
        result.push(obj);
    }
    return result;}

module.exports = count_same_elements;


