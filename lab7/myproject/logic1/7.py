def squirrel_play(temp, is_summer):
    return 60 <= temp <= (100 if is_summer else 90)

print(squirrel_play(70, False))
print(squirrel_play(95, False))
print(squirrel_play(95, True))
