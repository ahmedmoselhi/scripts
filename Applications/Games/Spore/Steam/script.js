const SteamScript = include("engines.wine.quick_script.steam_script");
const { getLatestStableVersion } = include("engines.wine.engine.versions");

new SteamScript()
    .name("Spore")
    .editor("Maxis")
    .author("Zemogiter")
    .applicationHomepage("http://www.spore.com/")
    .wineDistribution("upstream")
    .wineVersion(getLatestStableVersion)
    .appId(17390);
