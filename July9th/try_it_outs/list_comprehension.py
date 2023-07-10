from pprint import pprint

car_list = [
    {'id': 1, 'make': 'Ford',   'model': 'Mustang',  'price': 36000, },
    {'id': 2, 'make': 'Chevy',  'model': 'Corvette', 'price': 60000, },
    {'id': 3, 'make': 'Toyota', 'model': 'Prius',    'price': 35000, },
    {'id': 4, 'make': 'Mazda',  'model': 'Mazda6',   'price': 32000, },
]



new_list = [{'id':c['id'], 'make': c['make'], 'on_sale': 'yes'} for c in car_list if c['price']>33000]
pprint(new_list)