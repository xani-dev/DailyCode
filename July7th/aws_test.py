import boto3
from botocore.exceptions import ClientError
# import os

def upload():
    print('*** Uploading file to S3 ***')
    # Upload the file
    s3_client = boto3.client('s3')
    file_name = 'notes.txt'
    bucket = 'myustbucket'
    key_path = 'TestFolder/notes.txt'
    try:
        response = s3_client.upload_file(file_name, bucket, key_path)
        # No news is good news!
        print(response)  
    except ClientError as e:
        print(e)
   



upload()