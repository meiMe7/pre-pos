function collect_same_elements(collection_a, object_b) {
    //在这里写入代码

    var temp=[];

    for(var i=0;i<collection_a.length;i++){

        for(var j=0;j< object_b['value'].length;j++)
        {

                if (collection_a[i] ==  object_b['value'][j]) {
                    temp.push(collection_a[i]);

                }
        }

    }
    return temp;
}

module.exports = collect_same_elements;