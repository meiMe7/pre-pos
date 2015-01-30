function collect_same_elements(collection_a, collection_b)
{
    //在这里写入代码
    var temp=[];

    for(var i=0;i<collection_a.length;i++){

        for(var j=0;j<collection_b.length;j++)
        {

            if (collection_a[i] == collection_b[j]) {
                temp.push(collection_a[i]);

            }
        }

    }
    return temp;
}

module.exports = collect_same_elements;


