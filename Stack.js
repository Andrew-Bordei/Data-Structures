// STACK
class Stack{
    constructor(lengthArray){
        this.stack = new Array(lengthArray);
        this.top = -1; 
    }
    Push(x){
        if (this.top==this.stack.length-1){
            console.log('Stack overflow');
        }
        this.top += 1;
        this.stack[this.top] = x;
    }
    Pop(){
        if (this.top == -1){
            console.log('Empty stack');
        }
        this.top -= 1; 
        return this.stack[this.top+1];
    }
    Peek(){
        if (this.top==-1){
            console.log('empty stack');
        }
        console.log(this.stack[this.top]);
    }
    isEmpty(){
        if (this.top==-1){  
            console.log(true);
        }
        console.log(false);
    }
    printStack(){
        console.log(this.stack);
    }
}