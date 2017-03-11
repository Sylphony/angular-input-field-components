// Karma configuration
// Generated on Tue Mar 07 2017 03:41:10 GMT-0800 (Pacific Standard Time)

module.exports = function(config) {
  var configObj = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // 'node_modules/angular/angular.js',
      'src/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.html',
      'src/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/index.js': ['webpack'],
        'src/**/*.js': ['webpack'],
        'src/**/*.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    webpack: {
      module: {
        rules: [
          { 
            test: /\.js?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets: ["es2015"]
            }
          }
        ]
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    // To be able to load the templates given at templateUrls
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'templates'
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };

  // For CI: If the --single-run flag is set, use PhantomJS only
  if (config.singleRun) {
    configObj.browsers = ["PhantomJS"];
  }

  config.set(configObj);
};
