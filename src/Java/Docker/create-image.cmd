docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vychislenie-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t vychislenie-java/app ../../..
