const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'https://5c3dc8a5-cae7-4f91-8426-6ba2ef115b9d-00-2tmoymzccwwag.sisko.replit.dev/distribution.json'
exports.REMOTE_DISTRO_URL = 'https://5c3dc8a5-cae7-4f91-8426-6ba2ef115b9d-00-2tmoymzccwwag.sisko.replit.dev/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api
