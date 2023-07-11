from MySQLProxy import MySQLProxy

with MySQLProxy() as msp:
    people_list = msp.get_all_people()
    person = msp.get_person(1)
    # new_person = msp.insert_person('Xani', 'Gonzalez')
    
    print(people_list)
    print(person)
    