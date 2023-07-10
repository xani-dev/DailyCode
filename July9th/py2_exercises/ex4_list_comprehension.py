def get_people(list_of_people):
    new_list = [p['name'] for p in list_of_people if p['age'] >= 15]
    print(new_list)


people_list = [
    {'name': 'alice',   'age': 20, 'weight': 160, 'sex': 'male',   'id': 1},
    {'name': 'bob',     'age': 10, 'weight': 130, 'sex': 'male',   'id': 2},
    {'name': 'charlie', 'age': 15, 'weight': 120, 'sex': 'female', 'id': 3},
]
get_people(people_list)
