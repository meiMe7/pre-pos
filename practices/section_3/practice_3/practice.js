function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
var temp =find_data(collection_a);
   return third_less(temp, object_b);
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
function third_less(collection_a, object_b)
{


    for(var i=0;i<collection_a.length;i++){

        for(var j=0;j< object_b['value'].length;j++)
        {
            var temp_data=collection_a[i].count-3;
            if (collection_a[i].key ==  object_b['value'][j]) {


                while(temp_data >= 0){
                    collection_a[i].count--;
                    temp_data -=3;
                }

            }
        }

    }
    return collection_a;
}

module.exports = create_updated_collection;
