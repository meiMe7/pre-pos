function collect_same_elements(collection_a, object_b) {
    //在这里写入代码
    var temp=[];

    for(var index in collection_a){

        for(var j=0;j< object_b['value'].length;j++)
        {

            if (collection_a[index].key==  object_b['value'][j]) {
                temp.push(object_b['value'][j]);

            }
        }

    }
    return temp;
}

module.exports = collect_same_elements;