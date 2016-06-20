CREATE database TopSongsdb;

use TopSongsDB;

create table 'topsongs'. 'Top5000' (
'position' int not null,
'artist' varchar(100) null,
'song' varchar(100) null,
'year' int null,
'raw_total' decimal(10, 4),
'raw_usa' decimal(10, 4),
'raw_uk' decimal(10, 4),
'raw_eur' decimal(10, 4),
'raw_row' decimal(10, 4),
PRIMARY KEY ('position'));

select * From top5000:
