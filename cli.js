// process.chdir('./gavel/NativeCore');

var cli = require('@react-native-community/cli');
cli.run();

//gradlew assembleRelease -x bundleReleaseJsAndAssets
//react-native bundle --platform android --dev false --entry-file gavel/NativeCore/index.js --bundle-output gavel/NativeCore/android/app/src/main/assets/index.android.bundle --assets-dest gavel/NativeCore/android/app/src/main/res
