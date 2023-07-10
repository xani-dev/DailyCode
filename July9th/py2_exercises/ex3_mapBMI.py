def calc_bmi(people_list):
    # Calculate BMI : BMI = round(weight / height ** 2, 1)
    def bmi(w, h):
        bmi_result = round(w / h ** 2, 1)
        return bmi_result
        
    bmi_list = map(lambda person: {**person, 'bmi': bmi(person['weight_kg'], person['height_meters'])},people_list)
    return list(bmi_list)


people_list = [
    {'id': 2, 'name': 'bob', 'weight_kg': 90, 'height_meters': 1.7},
    {'id': 3, 'name': 'charlie', 'weight_kg': 80, 'height_meters': 1.8},
]

new_people_list = calc_bmi(people_list)
print(new_people_list)
