alter table "user_biodata" add foreign key ("id_user") references "user" ("id")
alter table "user_history" add foreign key ("id_user") references "user" ("id")
