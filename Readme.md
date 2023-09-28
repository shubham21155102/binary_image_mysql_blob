**Check available databases**

```sql
 SHOW DATABASES;
```

```sql
-- Create a database named 'users'
CREATE DATABASE users;
```

```sql
-- Datatypes

In SQL, there are various data types that you can use to define the type of data that can be stored in a database table's columns. The specific data types available may vary slightly depending on the database management system (DBMS) you are using, as different DBMSs may have their own proprietary data types. However, here are some common SQL data types:

Numeric Data Types:
INT or INTEGER: Integer values.
SMALLINT: Small integer values.
TINYINT: Tiny integer values.
BIGINT: Large integer values.
DECIMAL(p, s) or NUMERIC(p, s): Fixed-point numbers with precision p and scale s.
FLOAT(p): Floating-point numbers.
REAL: Real numbers.
DOUBLE PRECISION: Double-precision floating-point numbers.
Character and String Data Types:
CHAR(n): Fixed-length character strings of length n.
VARCHAR(n): Variable-length character strings with a maximum length of n.
TEXT: Variable-length character strings with no maximum length.
Date and Time Data Types:
DATE: Date values in the format 'YYYY-MM-DD'.
TIME: Time values in the format 'HH:MI:SS'.
DATETIME or TIMESTAMP: Date and time values.
YEAR: Year values in two-digit or four-digit format.
Boolean Data Type:
BOOLEAN or BOOL: Represents true or false values.
Binary Data Types:
BINARY(n): Fixed-length binary data of length n.
VARBINARY(n): Variable-length binary data with a maximum length of n.
BLOB: Binary large object for storing large binary data.
Other Data Types:
ENUM: Enumeration type for specifying a set of values.
SET: Set type for specifying a set of values.
JSON: JSON data type for storing JSON-formatted data.
UUID: Universally unique identifier.
Custom/User-Defined Data Types:
Some database systems allow you to define your own custom data types.
```
