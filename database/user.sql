create table "user" {
  "id" uuid primary key default uuid_generate_v4(),
  "email" varchar(100) default: null
  "password" varchar(50) default: null
};

create table "user_biodata"{
  "id" uuid primary key default uuid_generate_v4(),
  "name" varchar(100) default: null
  "adress" varchar(100) default: null
  "age" varchar(10) default: null
  "id_user" uuid primary key default uuid_generate_v4("id"),
};

create table "user_history"{
  "id" uuid primary key default uuid_generate_v4(),
  "time" int(100) default: null
  "score" int(100) default: null
  "id_user" uuid primary key default uuid_generate_v4("id"),
};

