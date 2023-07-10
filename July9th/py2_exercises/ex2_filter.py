def filter_males(list_name):
    
    filtered = filter(lambda p: p['sex'] == 'male', list_name)
    print(list(filtered))


people_list = [
    {'name': 'alice', 'age': 20, 'weight': 160, 'sex': 'female', 'id': 1},
    {'name': 'bob', 'age': 10, 'weight': 130, 'sex': 'male', 'id': 2},
    {'name': 'charlie', 'age': 15, 'weight': 120, 'sex': 'male', 'id': 3},
]

filter_males(people_list)
