
-- add column for geolaction source
alter table incident add column geolocation_source varchar(255);

-- remove column for geolocation source
alter table incident drop column geolaction_source;

-- change type to varchar(255) and add check for vessel_type
alter table incident alter column vessel_type TYPE varchar(255);
alter table incident add CHECK(vessel_status in('Barge or Tug', 'Carrier', 'Chemical Tanker', 'Container Ship', 'Fishing Boat, Trawler, or Vessel', 'General Cargo', 'LNG, LPG, or Oil Tanker', 'Tanker or Produce Tanker', 'Yacht, Leisure Craft, or Passenger Ship', NULL));
update incident set vessel_type = NULL where id > -1;
	
-- change type back to text[] and remove check for vessel_type
alter table incident alter column vessel_type TYPE text[] USING (vessel_type::text[]);
-- http://stackoverflow.com/questions/5273717/drop-constraint-by-name-in-postgresql