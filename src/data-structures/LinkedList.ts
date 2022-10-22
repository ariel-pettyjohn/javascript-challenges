class ListNode {   
    data: any;
    next: ListNode | null

    constructor (data: any, next: ListNode | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head: ListNode | null;
    size: number;

    constructor () {
        this.head = null;
        this.size = 0;
    }

    insertFirst (data: any) {
        this.head = new ListNode(data, this.head);
        this.size++;
    }

    insertLast (data: any) {
        // TODO: replace with a recursive implementation
        let node = new ListNode(data);
        let current: ListNode | null;
        if (!this.head) this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt (data: any, index: number) {
        // TODO: replace with a recursive implementation
        if (index > 0 && index > this.size) return;
        if (index === 0) {
            this.insertFirst(data);
            return;
        }
        const node    = new ListNode(data);
        let   count   = 0;
        let   current = this.head;
        let   previous: ListNode | null = null;
        while (count < index) {
            previous = current;
            count++;
            current = current?.next || null;
        }
            node.next = current;
        if (previous) previous.next = node;
        this.size++;
    }

    getAt (index: number) {
        // TODO: replace with a recursive implementation
        let current = this.head;
        let count   = 0;
        while (current) {
            if (count == index) return current.data;
            count++;
            current = current.next;
        }
        return null;
    }

    removeAt (index: number) {
        // TODO: replace with a recursive implementation
        if (index > 0 && index > this.size) return;
        let current = this.head;
        let previous: ListNode | null = null;
        let count = 0;
        if (index === 0) this.head = current?.next || null;
        else {
            while (count < index) {
                count++;
                previous = current;
                current  = current?.next || null;
            }
            if (previous) previous.next = current?.next || null;
        }
        this.size--;
    }

    clearList () {
        this.head = null;
        this.size = 0;
    }
}

module.exports = { LinkedList };