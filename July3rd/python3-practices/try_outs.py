from Employee import Employee
import copy

# DeepCopy Try It Out
employee_1 = Employee("alice", "jones", 20000, "111-11-1111")
employee_2 = copy.deepcopy(employee_1)
# print(id(employee_1))
# print(id(employee_2))


# Exceptions Try It Out
class MathException(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)


def do_work():
    try:
        return 2 / 0
    except ZeroDivisionError:
        raise MathException("Cannot divide by zero!")


def do_math():
    result = do_work()
    return result


def main():
    try:
        print(do_math())
    except MathException as math_exc:
        print(math_exc)


main()
