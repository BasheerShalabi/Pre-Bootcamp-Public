from __future__ import annotations
from math import floor
from math import ceil
class DoubleNode:
    def __init__(self,data):
        self.data = data
        self.next : DoubleNode | None = None
        self.previous : DoubleNode | None = None

class DLL:
    def __init__(self):
        self.head : DoubleNode | None = None
        self.tail : DoubleNode | None = None
        self.length : int | 0 = 0
    
    def __traverse(self,index):
        if index <0 or index > self.length:
            print("impossible, index is out of range")
            return
        if index <= floor(self.length/2):
            pointer = self.head
            for i in range(index-1):
                pointer = pointer.next
        else:
            pointer = self.tail
            for i in range(self.length-index):
                pointer = pointer.previous
        return pointer

    def len(self):
        return self.length
    
    def print(self):
        if self.head is None:
            print("List is empty")
            return
        pointer = self.head
        for i in range(self.length):
            print(pointer.data,end=" <--> ")
            if pointer.next is None:
                print("None")
            pointer = pointer.next

    def insert(self,data,index=None):
        newnode = DoubleNode(data)
        if self.head is None:
            self.head = newnode
            self.tail = self.head
            self.length +=1
            return
        if index is None:
            self.tail.next = newnode
            newnode.previous = self.tail
            self.tail = self.tail.next
            self.length += 1
            return
        if index == 0:
            newnode.next = self.head
            self.head.previous = newnode
            self.head = self.head.previous
            self.length +=1
            return
        pointer=self.__traverse(index)
        newnode.previous = pointer
        if index != self.length:
            newnode.next = pointer.next
            pointer.next.previous = newnode
        pointer.next = newnode
        self.length+=1
        if index ==self.length:
            self.tail = pointer.next

    def pop(self,index: int | None=None):
        if self.length == 0:
            print("List is empty")
            return
        if index is None:
            self.tail = self.tail.previous
            self.tail.next = None
            self.length -=1
            return
        if index == 1:
            self.head = self.head.next
            self.head.previous = None
            self.length -=1
            return
        pointer = self.__traverse(index)
        pointer.next.previous = pointer.previous
        pointer.previous.next = pointer.next
        pointer = None
        self.length -= 1
    
    def merge(self,list : DLL):
        if self.head is None:
            self.head = list.head
            self.tail = list.tail
            self.length = list.length
            return
        self.tail.next = list.head
        self.tail.next.previous = self.tail
        self.tail = list.tail
        self.length += list.length
    
    def reverse(self):
        if self.head is None:
            return
        hPointer = self.head
        tPointer = self.tail
        hCounter = 1
        tCounter = self.length
        while hCounter <= ceil(self.length/2) and tCounter >= ceil(self.length/2):
            temp = hPointer.data
            hPointer.data = tPointer.data
            tPointer.data = temp
            tPointer = tPointer.previous
            hPointer = hPointer.next
            hCounter +=1
            tCounter -=1
    
    def update(self,data,index):
        if not self.__traverse(index):
            return
        pointer = self.__traverse(index)
        pointer.data = data
    
    # def find(self,value):



dll1 = DLL()
dll2 = DLL()
dll1.print()
dll1.pop()
dll1.insert(7)
dll1.insert(5)
dll1.insert(3)
dll1.insert(6)

dll2.insert(7)
dll2.insert(5)
dll2.insert(3)
dll2.insert(6)

dll1.insert(9)
dll1.insert(66)
dll1.insert(4)
dll1.insert(34)
dll1.print()
dll1.insert(89,0)
dll1.print()
dll1.insert(5,0)
dll1.insert(500,6)
dll1.print()
dll1.pop()
dll1.print()
dll1.pop(1)
dll1.print()
dll1.merge(dll2)
dll1.print()
dll1.insert(66)
dll1.print()
dll1.reverse()
dll1.print()
dll1.update(854,19)
dll1.print()