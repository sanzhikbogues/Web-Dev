arr = []
n = int(input())
for _ in range(n):
    command = input().split()
    if command[0] == 'insert':
        i, e = int(command[1]), int(command[2])
        arr.insert(i, e)
    elif command[0] == 'print':
        print(arr)
    elif command[0] == 'remove':
        e = int(command[1])
        arr.remove(e)
    elif command[0] == 'append':
        e = int(command[1])
        arr.append(e)
    elif command[0] == 'sort':
        arr.sort()
    elif command[0] == 'pop':
        arr.pop()
    elif command[0] == 'reverse':
        arr.reverse()