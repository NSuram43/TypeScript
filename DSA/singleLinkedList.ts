class ListNode{
    constructor(public data: number, public next: ListNode | null = null){};
}

class LinkedList{
    private head: ListNode | null = null;
    private tail: ListNode | null = null;
    private length : number;
    constructor(value: number){
        const newNode = new ListNode(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    
    push(value:number){
        const newNode = new ListNode(value);
        if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        }
        else{
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(): ListNode|undefined{
        if(!this.head){
            return undefined;
        }
        
            let temp = this.head;
            let pre = this.head;
            while(temp.next)
                {
                    pre = temp;
                    temp = temp.next;
                }
                this.tail = pre;
                this.tail.next = null;
                this.length--;
                if(this.length === 0){
                    this.head =null;
                    this.tail = null;
                }
                return temp;
            }
            unshift(value:number):LinkedList{
                const newNode = new ListNode(value);
                newNode.next = this.head;
                this.head = newNode;
                if(this.length === 0) this.tail = newNode;
                this.length++;
                return this;
            }
            // unshift(value:number):LinkedList{
            //     const newNode = new ListNode(value);
            //     if(!this.head){
            //         this.head = newNode;
            //         this.tail = newNode;
            //     }else{
            //         newNode.next = this.head;
            //         this.head = newNode;
            //     }
            //     this.length++;
            //     return this;
            // }
            shift():ListNode|undefined{
if(!this.head) return undefined;
let value = this.head;
this.head = this.head.next;
this.length--;
if(this.length === 0){
    this.tail = null;
}
value.next = null;
return value;
            }
            get(index:number){
                if(index < 0|| index>=this.length) return undefined;
                let temp = this.head;
                for(let i=0;i<index;i++){
                    temp = temp!.next;
                }
                return temp;
            }
            set(index: number, value: number): boolean {
                const foundNode = this.get(index);
                if (foundNode) {
                    foundNode.data = value;
                    return true;
                }
                return false;
            }
            insert(index:number,value:number){
               if(index<0 || index > this.length){ return false};
                if(index===0){  
                    this.unshift(value);
                    return true};
                if(index === this.length){  this.push(value);
                    return true
                };
                const newNode = new ListNode(value);
                const prev = this.get(index-1)!;
                    newNode.next = prev.next;
                    prev.next = newNode;
                    this.length++;
                return this;
            }
            remove(index:number){
                if(index <0 || index >=this.length) return undefined;
                if(index === 0) return this.shift();
                if(index ===this.length-1) return this.pop();
                const before = this.get(index-1)!;
                const temp = before.next!;
                
                before.next = temp.next;
                 temp.next = null;
                 this.length--;
                 return temp;
}
reverse() {
    // If the list is empty or has only one node, do nothing.
    if (this.length < 2) {
        return this;
    }

    // Swap the head and tail. The original head becomes the new tail.
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

        // Reverse the pointers.
        let prev: ListNode | null = null;
        let next: ListNode | null = null;

        // Iterate through the list, reversing the 'next' pointer of each node.
        while (current !== null) {
            next = current.next; // Store the next node
            current.next = prev; // Reverse the pointer
            prev = current;      // Move prev to the current node
            current = next;  
        }
    return this;
}
findMiddleNode(){
    if(this.head === null) return undefined;
    if(this.head.next === null) return this.head;
    
let slow : ListNode | null = this.head;
let fast: ListNode | null = this.head;
while(fast  && fast.next){
    slow = slow!.next;
    fast = fast.next.next;
}
return slow;
}
}



let list = new LinkedList(4);
list.push(5).push(6);
list.pop();
list.unshift(1);