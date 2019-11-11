module.exports = function (api) {
  api.cache(true);

  const presets = [ [
    "@babel/preset-env",
    {
      "modules": false,
      "targets": {
        "browsers": "> 1%",
        "uglify": true
      },
      "useBuiltIns": "usage",
      "corejs": 3 
    }
  ],
  "@babel/preset-react" ];
  const plugins = [ "@babel/syntax-dynamic-import",
  "transform-object-rest-spread",
  [
    "transform-class-properties",
    {
      "spec": true
    }
  ] ];

  return {
    presets,
    plugins
  };
}
