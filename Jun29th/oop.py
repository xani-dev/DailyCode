from Employee import Employee


def main():
    employee_1 = Employee('alice', 'jones', 200000, '111-11-1111')

    # Testing Getter and Setter
    print(employee_1.ssn)

    # Triggering destructor
    # employee_1 = None
    # print(employee_1.email)


if __name__ == '__main__':
    main()
