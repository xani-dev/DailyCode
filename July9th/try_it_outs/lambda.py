# def subtract():
#     result = lambda x,y,z: x-y-z

#     print(result(46,5,3))
    
# subtract()


people_list = [
    {'name': 'alice',   'age': 20, 'weight': 160, 'sex': 'female',   'id': 1},
    {'name': 'bob',     'age': 10, 'weight': 130, 'sex': 'male',   'id': 2},
    {'name': 'charlie', 'age': 15, 'weight': 120, 'sex': 'male', 'id': 3},
 ]
people_list.sort(key=lambda p: p['weight'])

new_list = filter(lambda p:p['sex']=='female'and p['weight']>140, people_list)

print(list(new_list))

print(people_list)


