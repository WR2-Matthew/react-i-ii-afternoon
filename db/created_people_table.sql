create table people (
user_id serial primary key,
first_name varchar(100),
last_name varchar(100),
city varchar(200),
country varchar(200),
job_title varchar(200),
employer varchar(200),
favorite_movie_one text,
favorite_movie_two text,
favorite_movie_three text
);