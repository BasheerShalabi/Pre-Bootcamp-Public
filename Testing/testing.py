
def isValid(s):
    stack=[]
    for i in s :
        if i == "(" or i == "[" or i == "{":
            stack.append(i)
        elif len(stack) > 0:
            match(i):
                case ")":
                    if stack[-1] == "(":
                        stack.pop()
                    else:
                        return False
                case "]":
                    if stack[-1] == "[":
                        stack.pop()
                    else:
                        return False
                case "}":
                    if stack[-1] == "{":
                        stack.pop()
                    else:
                        return False
        else:
            return False
    if len(stack) != 0:
        return False
    return True

# def reverse(x):
#         if (x>=pow(2,31)) or (x<-pow(2,31)):
#             return 0
#         if x <0:
#             isNegative = True
#             x=abs(x)
#         else:
#             isNegative =False
#         num=0
#         power=0
#         temp = x
#         while temp:
#             power+=1
#             temp=int(temp/10)
#         while x:
#             num += (int(x%10) * pow(10,power-1))
#             power-=1
#             x=int(x/10)
#         if isNegative:
#             return num*-1
#         return num

# print(reverse(-40000))
# def canConstruct(ransomNote, magazine):
#         counter=0
#         ransomletters={}
#         magletters={}
#         for i in ransomNote:
#             letter = i
#             if ransomletters.__contains__(i):continue
#             for j in ransomNote:
#                 if j is i:
#                     counter+=1
#             ransomletters[i] = counter
#             counter=0
#         for i in magazine:
#             letter = i
#             if magletters.__contains__(i):continue
#             for j in magazine:
#                 if j is i:
#                     counter+=1
#             magletters[i] = counter
#             counter=0
#         print(ransomletters)
#         print(magletters)
#         for i,j in magletters,ransomletters:
#             print(i)
#         return True

# canConstruct("aaa","aaaaa")
# class person:
#     def __init__(this,name):
#         this.name=name

# new = person("ggg")

# print(new.name)


# import unittest

# def sum(*nums):
#     sum=0
#     for i in range(len(nums)):
#         sum+=nums[i]
#     return sum



# class sumTest(unittest.TestCase):
#     def testTwo(self):
#         self.assertEqual(   sum(5,-6,-6,8) ,1  )  
#     def testThree(self):
#         self.assertEqual(sum(6,6),6)

# if __name__ == '__main__':
#     unittest.main()