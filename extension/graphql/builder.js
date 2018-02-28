const builder = require('graphql-to-js-client-builder').default

const code = builder(`
{
  shop {
    name
  }
}
`)

console.log(code)
