-- Create the incidents table

CREATE TABLE public.incident
(
  id BIGSERIAL NOT NULL,
  reference_id integer NOT NULL,
  occurred_on timestamp with time zone NOT NULL,
  time_day varchar(255),
  	CHECK(time_day in ('6:00 AM - 12:00 PM', '12:01 PM - 6:00 PM', '6:01 PM - 12:00 AM', '12:01 AM - 6:00 PM')),
  type varchar(255),
  	CHECK(type in('Attempted', 'Actual')),
  action varchar(255),
  	CHECK(action in ('Hijacked', 'Boarded', 'Fired Upon', 'Attempted', 'Missing', 'Detaining')),
  latitude decimal NOT NULL,
  longitude decimal NOT NULL,
  closest_country_id integer NOT NULL DEFAULT 0,
  water_country_id integer NOT NULL DEFAULT 0,
  location_description text,
  vessel_name text,
  vessel_type text[],
  vessel_country_id integer[] NOT NULL DEFAULT ARRAY[0],
  violence_dummy boolean,
  CONSTRAINT primary_key PRIMARY KEY (id, reference_id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.incident
  OWNER TO mpmap_master;
