const OriginScript = include("engines.wine.quick_script.origin_script");
const { getLatestStagingVersion } = include("engines.wine.engine.versions");

new OriginScript()
    .name("Spore")
    .editor("Maxis")
    .author("Zemogiter")
    .applicationHomepage("http://www.spore.com/")
    .category("Games")
    .wineVersion(getLatestStagingVersion)
    .wineDistribution("staging")
    .appId();
