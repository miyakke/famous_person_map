var endpoint = "https://query.wikidata.org/sparql";
var query = (function () {/*
SELECT DISTINCT ?movieLabel ?lat ?long ?image
WHERE{
  ?movie wdt:P106 wd:Q2526255;
            wdt:P27 wd:Q17;
            wdt:P569 ?birthdate;
            wdt:P8687 ?followers;
            wdt:P18 ?image;
            wdt:P19 ?place.
  ?place wdt:P625 ?location.
  BIND(geof:latitude(?location) AS ?lat)
  BIND(geof:longitude(?location) AS ?long)
  SERVICE wikibase:label{bd:serviceParam wikibase:language"ja"}
  FILTER (xsd:date(?birthdate) >= "1900-01-01"^^xsd:date)
}
*/}).toString().match(/\n([\s\S]*)\n/)[1];

var maxZoom = 19;
var baseUrl = "https://tile.openstreetmap.jp/{z}/{x}/{y}.png";
var baseAttribution = 'Map data &copy; OpenStreetMap contributors, Tiles Courtesy of OpenStreetMap Japan';
var subdomains = '1234';
var clusterOptions = { showCoverageOnHover: false, maxClusterRadius: 50 };
var labelColumn = "placeLabel";
var labelLatitude = "lat";
var labelLongitude = "long";
var opacity = 1.0;
//あああああああ