class Employee:
    def __init__(self, first_name, last_name, salary, ssn):
        self.first_name = first_name
        self.last_name = last_name
        self.salary = salary
        self.email = f'{first_name}.{last_name}@company.com'
        self.__ssn = ssn
      
    #Destructor 
    # def __del__(self):
    #     print('Destructor Called')
    
    # Getter
    @property
    def ssn(self):
        return self.__ssn
    
    # Setter
    @ssn.setter
    def ssn(self, ssn):
        self.__ssn = ssn