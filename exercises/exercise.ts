/*Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.*/
/*setItem(key: string, item: T) // should create a new key-value pair
getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs*/

/*
The map should be usable like shown below:*/

/*const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();*/


// Solution
class MyMap<T> {
    private map: {[key: string]: T} = {};
    setItem(key: string, item: T ) {
        this.map[key] = item;
    }

    getItem(key: string){
        return this.map[key]
    }

    clear() {
        this.map = {};
    }

    printKeyMap(){
        for (let key in this.map){
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printKeyMap();
numberMap.clear();
numberMap.printKeyMap();

const stringMap = new MyMap<string>();
stringMap.setItem("apples", "10");
stringMap.setItem("bananas", "2");
console.log(stringMap.getItem("apples"));
stringMap.printKeyMap();
stringMap.clear();
stringMap.printKeyMap();
