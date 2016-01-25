# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table beacon (
  id                        bigint auto_increment not null,
  uuid                      varchar(255),
  x_cord                    integer,
  y_cord                    integer,
  name                      varchar(255),
  major                     varchar(255),
  minor                     varchar(255),
  indoor_map_id             bigint,
  constraint pk_beacon primary key (id))
;

create table customer (
  id                        bigint auto_increment not null,
  customer_name             varchar(255),
  ostype                    varchar(255),
  device_type               varchar(255),
  constraint pk_customer primary key (id))
;

create table INDOOR_MAP (
  id                        bigint auto_increment not null,
  length_in_pixels          bigint,
  width_in_pixels           bigint,
  scale                     bigint,
  map_name                  varchar(255),
  file_name                 varchar(255),
  file_type                 varchar(255),
  image                     blob,
  constraint pk_INDOOR_MAP primary key (id))
;

create table route (
  id                        bigint auto_increment not null,
  startx                    integer,
  starty                    integer,
  endx                      integer,
  endy                      integer,
  indoor_map_id             bigint,
  constraint pk_route primary key (id))
;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists beacon;

drop table if exists customer;

drop table if exists INDOOR_MAP;

drop table if exists route;

SET REFERENTIAL_INTEGRITY TRUE;

