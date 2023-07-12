from MySQLProxy import MySQLProxy

with MySQLProxy() as msp:
    people_list = msp.get_all_people()
    # person = msp.get_person(1)
    # new_person = msp.insert_person('Xani', 'Gonzalez')
    # updated_person = msp.update_person('Dan', 'Johnson', 4)
    # deleted_person = msp.delete_person(5)
    
    print(people_list)
    # print(updated_person)
    # print(person)
    