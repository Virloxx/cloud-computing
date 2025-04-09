#!/bin/bash

DB_NAME="world_facts"
DB_USER="postgres"
CSV_PATH="data.csv"

# Tworzenie bazy danych
echo "Tworzenie bazy danych $DB_NAME..."
sudo -u postgres psql -c "CREATE DATABASE $DB_NAME;"

# Tworzenie tabeli i importowanie danych
echo "Tworzenie tabeli countries i importowanie danych..."
sudo -u postgres psql -d $DB_NAME -c "
CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    country VARCHAR,
    region VARCHAR,
    population BIGINT,
    area_sq_mi DOUBLE PRECISION,
    pop_density DOUBLE PRECISION,
    coastline DOUBLE PRECISION,
    net_migration DOUBLE PRECISION,
    infant_mortality DOUBLE PRECISION,
    gdp DOUBLE PRECISION,
    literacy DOUBLE PRECISION,
    phones DOUBLE PRECISION,
    arable DOUBLE PRECISION,
    crops DOUBLE PRECISION,
    other DOUBLE PRECISION,
    climate DOUBLE PRECISION,
    birthrate DOUBLE PRECISION,
    deathrate DOUBLE PRECISION,
    agriculture DOUBLE PRECISION,
    industry DOUBLE PRECISION,
    service DOUBLE PRECISION
);
"

# Importowanie danych z pliku CSV (pomijając pierwszą kolumnę w CSV)
echo "Importowanie danych z $CSV_PATH..."
sudo -u postgres psql -d $DB_NAME -c "\COPY countries(country, region, population, area_sq_mi, pop_density, coastline, net_migration, infant_mortality, gdp, literacy, phones, arable, crops, other, climate, birthrate, deathrate, agriculture, industry, service) FROM '$CSV_PATH' DELIMITER ',' CSV HEADER;"

echo "Operacja zakończona!"
