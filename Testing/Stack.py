from LinkedList import LL,Node

class Stack:
    def __init__(self):
        self.stack = LL()
        self.top = None
    
    def push(self,value):
        if self.top is None:
            self.stack.insert(value)
        else:
            newnode = Node(value)
            newnode.next = self.stack.head
            self.stack.head = newnode
            self.top = newnode
    
    def pop(self):
        if self.top is not None:
            value = self.stack.head.value
            self.stack.head = self.stack.head.next
            self.top = self.stack.head
        return value
    
    def get_top(self):
        if self.top is not None:
            return self.top.value