function create_updated_collection(collection_a, object_b)
{
    //在这里写入代码

    for(var i=0;i<collection_a.length;i++){

        for(var j=0;j< object_b['value'].length;j++)
        {
            var temp=collection_a[i].count-3;
            if (collection_a[i].key ==  object_b['value'][j]) {


                while(temp >= 0){
                    collection_a[i].count--;
                    temp -=3;
                }

            }
        }

    }
    return collection_a;
}

module.exports = create_updated_collection;


