import { readFileSync } from 'fs'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

const banner = readFileSync('./banner.js', 'utf-8')
  .replace('${version}', pkg.version)

export default {
  entry: 'src/index.js',
  format: 'umd',
  dest: pkg.main,
  moduleName: 'datum',
  plugins: [
    eslint(),
    babel()
  ],
  external: [
    'aquameta-query'
  ],
  globals: {
    'aquameta-query': 'aquametaQuery'
  },
  banner,
  sourceMap: true
}
