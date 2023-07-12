import pymysql
import configparser

class MySQLProxy(object):
    SELECT_ALL_PEOPLE = "SELECT * FROM person;"
    SELECT_A_PERSON = "SELECT * FROM person WHERE person_id = %s;"
    INSERT_PERSON = "INSERT INTO person (first_name, last_name) VALUES (%s, %s)"
    UPDATE_PERSON = "UPDATE person SET first_name = %s, last_name =%s WHERE person_id =%s;"
    DELETE_PERSON = "DELETE FROM person WHERE person_id = %s;"
    
    
    def __init__(self):
        self.__connection = None
        self.__get_db_config()

    def get_all_people(self):
        retval = None
        with self.__connection.cursor(pymysql.cursors.DictCursor) as cursor:
            cursor.execute(self.SELECT_ALL_PEOPLE)
        self.__connection.commit()
        retval = cursor.fetchall()
        return retval
    
    def insert_person(self, first_name, last_name):
        retval = None
        with self.__connection.cursor(pymysql.cursors.DictCursor) as cursor:
            cursor.execute(self.INSERT_PERSON, (first_name, last_name))
        self.__connection.commit()
        retval = cursor.fetchall()
        return retval
    
    def update_person(self, first_name, last_name, person_id):
        retval = None
        with self.__connection.cursor(pymysql.cursors.DictCursor) as cursor:
            cursor.execute(self.UPDATE_PERSON, (first_name, last_name, person_id))
        self.__connection.commit()
        retval = cursor.fetchall()
        return retval
    
    def delete_person(self, person_id):
        retval = None
        with self.__connection.cursor(pymysql.cursors.DictCursor) as cursor:
            cursor.execute(self.DELETE_PERSON, (person_id))
        self.__connection.commit()
        retval = cursor.fetchall()
        return retval

    def get_person(self, person_id):
        retval = None
        with self.__connection.cursor(pymysql.cursors.DictCursor) as cursor:
            cursor.execute(self.SELECT_A_PERSON, person_id)
        self.__connection.commit()
        retval = cursor.fetchall()
        return retval

    def __get_db_config(self):
        config = configparser.ConfigParser()
        config.read('./config.ini')
        self.__DB = config['Database']['DB']
        self.__PORT = config['Database']['PORT']
        self.__HOST = config['Database']['HOST']
        self.__USER = config['Database']['USER']
        self.__PWD = config['Database']['PWD']

    def __create_connection(self):
        self.__connection = pymysql.connect(
            user=self.__USER,
            host=self.__HOST,
            password=self.__PWD,
            database=self.__DB)

    def __enter__(self):
        self.__create_connection()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.__connection.close()