def sort_people(list_name, field, direction):

    if direction == 'asc':
        direction = False
    else:
        direction = True

    result = sorted(list_name, key = lambda p : p[f'{field}'], reverse = direction)

    print(result)


people_list = [
    {'name': 'alice', 'age': 20, 'weight': 160, 'sex': 'male', 'id': 1},
    {'name': 'bob', 'age': 10, 'weight': 130, 'sex': 'male', 'id': 2},
    {'name': 'charlie', 'age': 15, 'weight': 120, 'sex': 'female', 'id': 3},
]

sort_people(people_list, 'age', 'asc')
