

def main():
    lines = []

    # Reading
    with open('input.txt', 'r') as file1:

        while True:
            line = file1.readline()
            if not line:
                break
            lines.append(line)
            print(lines)

    # Writing
    with open('output.txt', 'w') as file2:
        for line in lines:
            file2.writelines(line)


main()
