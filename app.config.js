const productionConfig = {
    name: 'My App Prod',
    slug: 'myapp-prod'
};

const developmentConfig = {
    "expo": {
        "name": "KidsApp",
        "slug": "kidsapp",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "userInterfaceStyle": "light",
        "splash": {
            "image": "./assets/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "assetBundlePatterns": [
            "**/*"
        ],
        "ios": {
            "supportsTablet": true,
            "bundleIdentifier": "com.saitarunboddeboyina.kidsapp"
        },
        "android": {
            "adaptiveIcon": {
                "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#ffffff"
            },
            "package": "com.saitarunboddeboyina.kidsapp"
        },
        "web": {
            "favicon": "./assets/favicon.png"
        },
        "extra": {
            "eas": {
                "projectId": "f4b8669b-5e5e-442d-a041-dc67502a860e"
            }
        }
    },
    "name": "KidsApp"
}

export default () => {
    if (process.env.ENVIRONMENT === 'dev' || process.env.ENVIRONMENT === undefined) {
        return developmentConfig;
    }
    else {
        return productionConfig;
    }
};