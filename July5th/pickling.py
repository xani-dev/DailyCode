import pickle
from Employee import Employee


def main():
    employee = Employee("alice", "jones", 100000, "111-11-1111")
    serialized_employee = pickle.dumps(employee)  # serialize object.
    print(employee)
    print(serialized_employee)
    deserialized_employee = pickle.loads(serialized_employee)  # deserialize data.
    print(deserialized_employee)



main()