create table public.array_test (
	id BIGSERIAL PRIMARY KEY,
	intarr integer[] NOT NULL DEFAULT ARRAY[0],
	textarr text[] NOT NULL DEFAULT ARRAY['hello world']
)

insert into array_test (intarr) values (ARRAY[]::integer[]);


SELECT inc.id, inc.reference_id, to_char(inc.date, 'YYYY-MM-DD') AS date,
        inc.time_day, inc.type, inc.action, inc.latitude, inc.longitude,
    c1.name AS closest_country, c2.name AS water_country,
    inc.location_description, inc.vessel_name, inc.vessel_type,
    -- combine all country names in the vessel_country_id array into one comma-separated string
    (SELECT string_agg(name, ',') FROM country where cow_id = ANY (inc.vessel_country_id)) AS vessel_country,
    inc.vessel_status,  
    inc.violence_dummy
    FROM incident as inc
    -- join for closest_country
    LEFT JOIN country AS c1
        ON c1.cow_id = inc.closest_country_id
    -- join for water country
    LEFT JOIN country AS c2
        ON c2.cow_id = inc.water_country_id

    <where>
        <if test="filter.beginDate != null and filter.endDate != null">
            ev.occurred_on &gt;= #{eventFilter.beginDate}::timestamp AND ev.occurred_on &lt;= #{eventFilter.endDate}::timestamp
        </if>
        <if test="filter.closestCountry != null">
            AND ev.location_closest_country_id IN
            <foreach item="id" index="index" collection="filter.closestCountry" open="(" separator="," close=")">
                #{id}
            </foreach>
        </if>
        <if test="filter.territorialWaterStatus != null">
            AND ev.location_water_status_country_id IN
            <foreach item="id" index="index" collection="filter.territorialWaterStatus" open="(" separator="," close=")">
                #{id}
            </foreach>
        </if>
        <if test="filter.vesselCountry != null">
            AND ev.vessel_flag_country_id IN
            <foreach item="id" index="index" collection="filter.vesselCountry" open="(" separator="," close=")">
                #{id}
            </foreach>
        </if>
        <if test="filter.vesselStatus != null">
            AND ev.vessel_status IN
            <foreach item="id" index="index" collection="filter.vesselStatus" open="(" separator="," close=")">
                #{id}
            </foreach>
        </if>
    </where>
    ORDER BY inc.date asc;


SELECT inc.id, inc.reference_id, to_char(inc.date, 'YYYY-MM-DD') AS date,
        inc.time_day, inc.type, inc.action, inc.latitude, inc.longitude,
	c1.name AS closest_country, c2.name AS water_country,
	inc.location_description, inc.vessel_name, inc.vessel_type,
	c3.name AS vessel_country, inc.vessel_status,	
	inc.violence_dummy
	FROM incident as inc
	-- join for closest_country
	LEFT JOIN country AS c1
		ON c1.cow_id = inc.closest_country_id
	LEFT JOIN country AS c2
		ON c2.cow_id = inc.water_country_id

         
        ev.vessel_status AS vessel_status
        FROM event AS ev
        LEFT JOIN country AS co01
        ON co01.cow_id = ev.location_closest_country_id
        LEFT JOIN country AS co02
        ON co02.cow_id = ev.location_water_status_country_id
        LEFT JOIN country AS co03
        ON co03.cow_id = ev.vessel_flag_country_id
        <where>
            <if test="eventFilter.beginDate != null and eventFilter.endDate != null">
                ev.occurred_on &gt;= #{eventFilter.beginDate}::timestamp AND ev.occurred_on &lt;= #{eventFilter.endDate}::timestamp
            </if>
            <if test="eventFilter.closestCountry != null">
                AND ev.location_closest_country_id IN
                <foreach item="id" index="index" collection="eventFilter.closestCountry" open="(" separator="," close=")">
                    #{id}
                </foreach>
            </if>
            <if test="eventFilter.territorialWaterStatus != null">
                AND ev.location_water_status_country_id IN
                <foreach item="id" index="index" collection="eventFilter.territorialWaterStatus" open="(" separator="," close=")">
                    #{id}
                </foreach>
            </if>
            <if test="eventFilter.vesselCountry != null">
                AND ev.vessel_flag_country_id IN
                <foreach item="id" index="index" collection="eventFilter.vesselCountry" open="(" separator="," close=")">
                    #{id}
                </foreach>
            </if>
            <if test="eventFilter.vesselStatus != null">
                AND ev.vessel_status IN
                <foreach item="id" index="index" collection="eventFilter.vesselStatus" open="(" separator="," close=")">
                    #{id}
                </foreach>
            </if>
        </where>
        ORDER BY ev.occurred_on ASC;	