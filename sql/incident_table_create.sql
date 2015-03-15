-- Create the incidents table

CREATE TABLE public.incident
(
  id BIGSERIAL NOT NULL,
  reference_id integer NOT NULL,
  date timestamp with time zone NOT NULL,
  time_day varchar(255),
  	CHECK(time_day in ('6:01-12:00', '12:01-18:00', '18:01-00:00', '00:01-6:00', NULL)),
  type varchar(255),
  	CHECK(type in('Attempted', 'Actual', NULL)),
  action varchar(255),
  	CHECK(action in ('Hijacked', 'Boarded', 'Boarding', 'Fired Upon', 'Attempted', 'Missing', 'Detaining', 'Explosion', 'TBD', NULL)),
  latitude decimal NOT NULL,
  longitude decimal NOT NULL,
  closest_country_id integer NOT NULL DEFAULT 0,
  water_country_id integer NOT NULL DEFAULT 0,
  location_description text,
  vessel_name text,
  vessel_type text[],
  vessel_country_id integer[] NOT NULL DEFAULT ARRAY[0],
  vessel_status varchar(255),
    CHECK(vessel_status in('Steaming', 'Anchored', 'Berthed', 'Stationary', NULL)),
  violence_dummy boolean,
  CONSTRAINT primary_key PRIMARY KEY (id, reference_id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.incident
  OWNER TO mpmap_master;
