import requests
import json

def get_user_data(user_id):
    url = f"https://jsonplaceholder.typicode.com/users/{user_id}"
    response = requests.get(url)

    if response.status_code == 200:
        user_data = response.json()
        formatted_data = json.dumps(user_data, indent=4)
        print(formatted_data)
        # print("User Data:")
        # print(f"ID: {user_data['id']}")
        # print(f"Name: {user_data['name']}")
        # print(f"Username: {user_data['username']}")
        # print(f"Email: {user_data['email']}")
        # print(f"Address: {user_data['address']['street']}, {user_data['address']['suite']}, {user_data['address']['city']}")
        # print(f"Phone: {user_data['phone']}")
        # print(f"Website: {user_data['website']}")
        # print(f"Company: {user_data['company']['name']}")
    else:
        print("Error retrieving user data. Please try again.")

# Prompt user for user ID
user_id = input("Enter a user ID (1-10): ")

# Call the function to get user data
get_user_data(user_id)
