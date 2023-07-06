class Employee:

    def __init__(self, first_name, last_name, salary, ssn):
        self._pay_stubs = []
        self.pay_total = 0
        self._test2 = 0
        self._ssn = ssn
        self.first_name = first_name
        self.last_name = last_name
        self.salary = salary
        self.email = f"{first_name}.{last_name}@company.com"

    def __repr__(self) -> str:
        return f"{self.first_name} {self.last_name} {self.salary} {self._ssn}"