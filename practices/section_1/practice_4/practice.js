function collect_same_elements(collection_a, object_b) {
    //在这里写入代码

    var temp=[];

    for(var i in collection_a['key']){

        for(var j=0;j< object_b['value'].length;j++)
        {

            if (collection_a['key'][i] ==  object_b['value'][j]) {
                temp.push(collection_a['key'][i]);

            }
        }

    }
    return temp;
}

module.exports = collect_same_elements;