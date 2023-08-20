const developmentConfig = {
    name: 'KidsApp',
    slug: 'kidsapp',
    android: {
        package: 'com.saitarunboddeboyina.kidsapp'
      },
    extra: {
        eas: {
          projectId: 'f4b8669b-5e5e-442d-a041-dc67502a860e'
        }
      }
};

const productionConfig = {
    name: 'My App Prod',
    slug: 'myapp-prod'
};

export default () => {
    console.log("MY ENV:", process.env.ENVIRONMENT);
    if (process.env.ENVIRONMENT === 'dev') {
        return developmentConfig;
    }
    else{
        return productionConfig;
    }
};