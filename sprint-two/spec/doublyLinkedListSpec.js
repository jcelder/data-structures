describe ('doublyLinkedList', function() {
    var newList;
    beforeEach(function() {
        newList = DoublyLinkedList();
    })
    it('should have all the methods and properties present on the Linked List class', function() {
        expect(newList.addToTail).to.be.a('function');
        expect(newList.removeHead).to.be.a('function');
        expect(newList.contains).to.be.a('function');
        expect(newList.insert).to.be.a('function');
    })
    it('should add a new node to the head with an empty list', function() {
        newList.addToHead(4);
        expect(newList.head.value).to.equal(4)
    })
    it('should add a new node to the head and properly assign a next value', function() {
        newList.addToHead(4);
        newList.addToHead(5);
        expect(newList.head.value).to.equal(5);
        expect(newList.head.next.value).to.equal(4);
    })
    it('should remove the tail and reassign the new tail\'s next value', function() {
        newList.addToHead(4);
        newList.addToHead(5);
        newList.removeTail();
        expect(newList.tail.value).to.equal(4)
    })
})