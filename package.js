Package.describe({
  name: 'joaomarcos:format-print',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Use this package to format cpf/cnpj, phone and date',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jmbizarrolopes/format-print.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('templating', 'client');
  api.use('session', 'client');
  api.use('ecmascript');
  api.addFiles('client/format-print.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('joaomarcos:format-print');
  api.addFiles('format-print-tests.js');
});
