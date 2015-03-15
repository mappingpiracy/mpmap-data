create user user_name with password 'password';
grant connect on database mpmap to user_name;
grant usage on schema public to user_name;
grant select,insert,update on incident to user_name;
grant select,insert,update on country to user_name;