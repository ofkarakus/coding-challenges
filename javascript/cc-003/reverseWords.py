def reverseWords(sentence):
    return ' '.join(sentence.split()[-1::-1])


print(reverseWords("impossible. mean not does hard but hard, be to going It’s"))
print(reverseWords("days. big make things Little"))
print(reverseWords("done. you’re when Stop tired. you’re when stop Don’t"))
print(reverseWords("Clarusway"))
