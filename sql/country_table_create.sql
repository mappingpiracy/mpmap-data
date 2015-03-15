create table if not exists country(
	id serial not null,
	cow_id integer not null,
	name varchar(255) not null,
	abbreviation varchar(5) not null,
	primary key(id, cow_id)
);