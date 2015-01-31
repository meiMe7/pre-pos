function count_same_elements(collection)
{
    //在这里写入代码
    var result =[];
    var sum1=1;

    var obj = {key: 'a', count: 1};
    for (var i=0;i<collection.length;i++) {


            if (collection[i] == obj.key) {
               obj.count = sum1;
                sum1++;
            }
          else {
                var obj = {key: collection[i], count: 1};
               result.push(obj);
                sum1 = 2;

            }

        var arr =  new String(collection[i]).split("-");
        if(arr[1]!=undefined)
        {   obj.key =arr[0];
            obj.count=arr[1];
            result.push(obj);
        }
    }
    return result;
}

module.exports = count_same_elements;


