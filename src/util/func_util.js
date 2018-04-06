/**
 * arrの各要素にfuncを通し、返り値でarrの要素を分割する
 * 
 * 例）var arr = [1,3,8,4,3,10,33]
 *     var result = partitionBy((elem) => { return elem % 2 == 0 ? 'even' : 'odd' }, arr)
 *     resultの中身: {'even':[8,4,10], 'odd':[1,3,3,10,33]}
 * 
 * @param {*arrの各要素に適用させる関数} func 
 * @param {*被適用配列} arr 
 */
export function partitionBy (func, arr) {
    var result = {}
    arr.forEach((elem) => {
        let key = func(elem)
        if(key){
            if(key in result){
                result[key].push(elem)
            }else{
                result[key] = [elem]
            }
        //返り値がnullだったらキーを'null'として設定
        }else{
            if('null' in result){
                result['null'].push(elem)
            }else{
                result['null'] = [elem]
            }
        }
    }, this);
    return result
}