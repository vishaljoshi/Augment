# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table beacon (
  id                        bigint auto_increment not null,
  uuid                      varchar(255),
  x_cord                    integer,
  y_cord                    integer,
  name                      varchar(255),
  constraint pk_beacon primary key (id))
;

create table customer (
  id                        bigint auto_increment not null,
  customer_name             varchar(255),
  ostype                    varchar(255),
  device_type               varchar(255),
  constraint pk_customer primary key (id))
;

create table floor_map (
  id                        bigint auto_increment not null,
  length_in_pixels          bigint,
  width_in_pixels           bigint,
  scale                     bigint,
  name                      varchar(255),
  description               varchar(255),
  mapfile                   blob,
  constraint pk_floor_map primary key (id))
;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists beacon;

drop table if exists customer;

drop table if exists floor_map;

SET REFERENTIAL_INTEGRITY TRUE;

