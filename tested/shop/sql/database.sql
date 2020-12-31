CREATE TABLE account ( username VARCHAR(50) PRIMARY KEY, password TEXT, fullname VARCHAR(50), phone VARCHAR(11), birthday DATE, age INT );
CREATE TABLE category ( id INT PRIMARY KEY, name VARCHAR(20), description VARCHAR(50) );
CREATE TABLE subcategory ( id INT PRIMARY KEY, name VARCHAR(20), description VARCHAR(50), category_id INT, FOREIGN KEY (category_id) REFERENCES category (id) );
CREATE TABLE product ( id INT PRIMARY KEY, name VARCHAR(50), description TEXT, price REAL, image TEXT, brand VARCHAR(20), country VARCHAR(20) );
CREATE TABLE product_subcategory ( subcategory_id INT, product_id INT, FOREIGN KEY (product_id) REFERENCES product (id), FOREIGN KEY (subcategory_id) REFERENCES subcategory (id) );

INSERT INTO category VALUES ('1', 'condommarker', '');
INSERT INTO category VALUES ('2', 'sextoy', '');

INSERT INTO subcategory VALUES (1, 'durex', '', 1);
INSERT INTO subcategory VALUES (2, 'okamoto', '', 1);
INSERT INTO subcategory VALUES (3, 'sagami', '', 1);
INSERT INTO subcategory VALUES (4, 'female', '', 2);
INSERT INTO subcategory VALUES (5, 'male', '', 2);


INSERT INTO product VALUES (1,
                            'Durex Invisible Extra Thin Extra Sensitive Condom Box of 3',
                            'Durex Invisible Extra Thin Extra Sensitive Condom Box of 3',
                            90000,
                            '',
                            '',
                            'China');

INSERT INTO product_subcategory VALUES (4, 1);
INSERT INTO product_subcategory VALUES (5, 1);
