function collect_same_elements(collection_a, collection_b)
{
    //在这里写入代码
    var temp=[];

    for(var i=0;i<collection_a.length;i++){

        for(var j=0;j<collection_b.length;j++)
        {
           for(var k=0; k< collection_b[j].length;k++)
            if (collection_a[i] == collection_b[j][k]) {
                temp.push(collection_a[i]);

            }
        }

    }
    return temp;
}

module.exports = collect_same_elements;


