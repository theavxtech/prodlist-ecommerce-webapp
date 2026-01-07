import mysql.connector

conn = mysql.connector.connect(
    host="localhost",     
    user="root", 
    password="SQL1234@",
    database="project1" )

if conn.is_connected():
   
    cursor = conn.cursor()

    # Query to fetch tables
    cursor.execute("SELECT TITLE,CATEGORY,FILTER FROM cloth")

    # Fetch all tables
    tables= cursor.fetchall()

    # Print each table name
    print("Tables in the database:")
    for clothi in tables:
        print(clothi)




    # Close the cursor and connection
    if 'cursor' in locals():
        cursor.close()
    if conn.is_connected():
        conn.close()
        

 