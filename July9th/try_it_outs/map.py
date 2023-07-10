people_list = [
    {'name': 'alice',   'age': 20, 'weight': 160, 'sex': 'female',   'id': 1},
    {'name': 'bob',     'age': 10, 'weight': 130, 'sex': 'male',   'id': 2},
    {'name': 'charlie', 'age': 15, 'weight': 120, 'sex': 'male', 'id': 3},
 ]

# ADD PREFIX
def add_prefix(person):
    if person['sex'] == 'male':
        new_value = {
            'name': 'Mr. ' + person['name']
    } 
    else:
            new_value = {
                'name': 'Mrs. ' + person['name']
            }
    return new_value

prefix_list = list(map(add_prefix, people_list))
print(prefix_list)