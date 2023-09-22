const path = require('path');

/** @type {Detox.DetoxConfig} */
module.exports = {
  logger: {
    level: process.env.CI ? 'debug' : undefined,
  },
  testRunner: {
    args: {
      '$0': 'yarn dlx jest',
      config: path.resolve(process.cwd(), 'e2e/jest.config.js'),
      maxWorkers: process.env.CI ? 2 : undefined,
      _: [path.resolve(process.cwd(), 'e2e')],
    },
  },
  artifacts: {
    plugins: {
      log: process.env.CI ? 'failing' : undefined,
      screenshot: process.env.CI ? 'failing' : undefined,
    },
  },
  apps: {
    // 'ios.release': {
    //   'type': 'ios.app',
    //   'binaryPath':
    //     'ios/build/Build/Products/Release-iphonesimulator/example.app',
    //   'build':
    //     'export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -workspace ios/example.xcworkspace -UseNewBuildSystem=NO -scheme example -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -quiet',
    // },
    // 'ios.debug': {
    //   'type': 'ios.app',
    //   'binaryPath':
    //     'ios/build/Build/Products/Debug-iphonesimulator/example.app',
    //   'build':
    //     'xcodebuild -workspace ios/example.xcworkspace -UseNewBuildSystem=NO -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    //   'start': 'scripts/start-rn.sh ios',
    // },
    'android.debug': {
      'type': 'android.apk',
      build:
        'cd android && ./gradlew :app:assembleDebug :app:assembleAndroidTest -DtestBuildType=debug && cd ..',
      testBinaryPath:
        'android/app/build/outputs/apk/androidTest/direct/debug/app-direct-debug-androidTest.apk',
      binaryPath:
        'android/app/build/outputs/apk/direct/debug/app-direct-debug.apk',
    },
    'android.release': {
      'type': 'android.apk',
      'binaryPath': 'android/app/build/outputs/apk/release/app-release.apk',
      'build':
        'cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 12 Pro',
      },
    },
    'android.emulator': {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_29',
      },
    },
  },
  configurations: {
    'ios.sim.release': {
      'device': 'simulator',
      'app': 'ios.release',
    },
    'ios.sim.debug': {
      'device': 'simulator',
      'app': 'ios.debug',
    },
    'android.emu.debug': {
      'device': 'android.emulator',
      'app': 'android.debug',
    },
    'android.emu.release': {
      'device': 'android.emulator',
      'app': 'android.release',
    },
  },
};
