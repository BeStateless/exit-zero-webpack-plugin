# exit-zero-webpack-plugin

This simple plugin ensures that your webpack build always exits zero (i.e. success); this can be useful in environments or situations where a non-zero exit might produces undesirable effects. Note that any errors that occurred during the build will still exist, just simply won't break the build.

## Usage

```
npm install -D exit-zero-webpack-plugin
```

In your webpack config:
```javascript
  plugins: [
    new ExitZeroWebpackPlugin({}),
  ]
```

## API

`exit-zero-webpack-plugin` accepts the following arguments

### `active: boolean`

Determins whether or not to run exit-zero-webpack-plugin. Defaults to true.