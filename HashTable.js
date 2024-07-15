// HASHTABLE
class HashTable{
    constructor(){
        this.table = new Array(26);
        this.buckets;
        this.loadFactor;
    }
    firstHashFunction(str){
        for (var i = 0; i < str.length; i++){
            var hash1 = (31*str.charCodeAt(i)+23) % this.table.length;
        }
        return hash1; 
    }
    secondHashFunction(str){
        for (var i = 0; i < str.length; i++){
            var hash2 = Math.floor( str.charCodeAt(i)*17 % 1 * this.table.length);
        }
        return hash2; 
    }
    insert(key, value){
        this.buckets++;
        this.loadFactor = this.buckets / this.table.length; 
        const index = this.firstHashFunction(key);    
        if (this.table[index] == null){
            this.table[index] =  value;
        } else {
            const newIndex = (this.firstHashFunction(key) + index * this.secondHashFunction(key)) % this.table.length;
            this.table[newIndex] = value;
        }
    }
    search(key){
        const index = this.firstHashFunction(key);
        var value = this.table[index];
        console.log(value);      
    }
    delete(key){
        const index = this.search(key); 
        this.table[index] = null; 
        console.log(key + " was deleted!");
    }
}