def alarm_clock(day, vacation):
    if vacation:
        return "off" if day == 0 or day == 6 else "10:00"
    return "10:00" if day == 0 or day == 6 else "7:00"

print(alarm_clock(1, False))
print(alarm_clock(5, False))
print(alarm_clock(0, False))
