def reverseWords(sentence):
    sentList = sentence.split()
    return ' '.join(sorted(sentList, key=sentList.index, reverse=True))


print(reverseWords("impossible. mean not does hard but hard, be to going It’s"))
