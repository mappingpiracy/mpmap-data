create table public.array_test (
	id BIGSERIAL PRIMARY KEY,
	intarr integer[] NOT NULL DEFAULT ARRAY[0],
	textarr text[] NOT NULL DEFAULT ARRAY['hello world']
)

insert into array_test (intarr) values (ARRAY[]::integer[]);