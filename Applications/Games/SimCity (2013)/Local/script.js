const LocalInstallerScript = include("engines.wine.quick_script.local_installer_script");
const { getLatestStagingVersion } = include("engines.wine.engine.versions");

new LocalInstallerScript()
    .name("SimCity (2013)")
    .editor("Electronic Arts")
    .applicationHomepage("https://www.ea.com/en-gb/games/simcity")
    .author("ZemoScripter")
    .category("Category")
    .executable("Origin.exe")
    .wineVersion(getLatestStagingVersion)
    .wineDistribution("staging");
