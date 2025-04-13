from __future__ import annotations
import time


class Node:
    def __init__(self,value):
        self.value = value
        self.next : Node | None = None

class LL:
    def __init__(self):
        self.head : Node | None = None
        self.tail : Node | None = None

    # inserting a new node to the tail
    def insert(self,value):
        newnode = Node(value)
        if(self.head is None):
            self.head = newnode
            self.tail = self.head
        else:
            self.tail.next = newnode
            self.tail = self.tail.next

    # returns the length of the linked list
    def length(self):
        if self.head is None:
            return 0
        if self.head.next is None:
            return 1
        pointer = self.head
        counter =0
        while pointer is not None:
            pointer = pointer.next
            counter +=1
        return counter
    
    # removes the tail node
    def pop(self,position: int | None=None):
        if position is None :
            position = self.length()-1

        pointer = self.head
    
        if pointer is None:
            self.head = None
            return self
    
        if position == 0:
            self.head = self.head.next
            return self
    
        for i in range(position-1):
            if pointer.next is None:
                return self   
            pointer=pointer.next
        
        if pointer.next.next is None:
            pointer.next = pointer.next.next
            self.tail = pointer
            return self

        pointer.next = pointer.next.next
        return self
    
    # prints the linked list
    def print(self):
        pointer = self.head
        if pointer is None:
            print("None")
        while pointer is not None:
            print(pointer.value,end=" -> ")
            if pointer.next is None:
                print("None")
            pointer=pointer.next

    #  reverses the linked list
    def reverse(self):
        if self.head is None:
            return None
        pointer = self.head
        list = []
        while pointer is not None:
            list.append(pointer.value)
            pointer = pointer.next
        pointer = self.head
        for i in range(len(list),0 ,-1):
            pointer.value = list[i-1]
            pointer = pointer.next
        return self
    
    #  reverses the linked list
    def quick_reverse(self):
        if self.head is None:
            return None
        
        current = self.head
        prev = None

        while self.head.next is not None:
            self.head = self.head.next
            current.next =prev
            prev = current
            current = self.head
        self.head.next = prev
        return self
        
    
    # appends a linked list to the tail of the current linked list
    def merge(self,newLL:LL):
        if self.head is None:
            self.head = newLL.head
        else:
            pointer = self.head
            while pointer.next is not None:
                pointer = pointer.next
            pointer.next = newLL.head
    
    def remove_duplicates(self,value=""):
        if self.head is None:
            return self
        
        if self.length == 1:
            return self
        
        pointer = self.head

        values = {}
        counter =0
        while pointer is not None:
                if pointer.value not in values:
                    values[pointer.value] = 0
                    counter+=1
                else:
                    if value != '':
                        if value.__contains__("-"):
                            if int(value.split('-')[1]) == pointer.value:
                                self.pop(counter)
                            else:
                                counter+=1
                        elif int(value) == pointer.value:
                            counter+=1
                        else:
                            self.pop(counter)
                    else:
                        self.pop(counter)
                pointer = pointer.next
        
# start1 = time.time()
# newLinkedList = LL()
# newLinkedList2 = LL()
# newLinkedList.insert(5)
# newLinkedList.insert(8)
# newLinkedList.insert(4)
# newLinkedList.insert(4)

# newLinkedList.insert(4)

# newLinkedList.insert(4)

# newLinkedList.insert(4)


# newLinkedList.insert(9)
# newLinkedList2.insert(35)
# newLinkedList2.insert(83)
# newLinkedList2.insert(83)
# newLinkedList2.insert(83)
# newLinkedList2.insert(83)
# newLinkedList2.insert(83)
# newLinkedList2.insert(83)
# newLinkedList2.insert(83)

# newLinkedList2.insert(94)
# newLinkedList2.insert(94)
# newLinkedList2.insert(94)
# newLinkedList2.insert(94)
# newLinkedList2.insert(45)
# newLinkedList2.insert(94)
# newLinkedList2.insert(94)
# newLinkedList2.insert(94)
# newLinkedList2.insert(94)
# newLinkedList.print()
# newLinkedList2.print()
# newLinkedList.pop()
# newLinkedList.pop()
# newLinkedList.print()
# newLinkedList.pop()
# newLinkedList.print()
# newLinkedList.pop()
# newLinkedList.print()
# newLinkedList.insert(9)
# newLinkedList.insert(9)

# newLinkedList.insert(9)

# newLinkedList.insert(9)

# newLinkedList.insert(9)

# newLinkedList.insert(9)

# newLinkedList.insert(9)

# newLinkedList.print()
# newLinkedList.insert(9)
# newLinkedList.insert(3)
# newLinkedList.insert(59)
# newLinkedList.insert(6)
# newLinkedList.insert(98)
# newLinkedList.print()
# newLinkedList.pop(4)
# newLinkedList.print()
# newLinkedList.reverse()
# newLinkedList.print()
# newLinkedList.quick_reverse()
# newLinkedList.print()
# newLinkedList.merge(newLinkedList2)
# newLinkedList.print()
# start = time.time()
# newLinkedList.remove_duplicates("-94")
# end = time.time()
# newLinkedList.print()

# end2 = time.time()

# print(f"Execution time: {end - start:.6f} seconds")
# print(f"total Execution time: {end2 - start1:.6f} seconds")
