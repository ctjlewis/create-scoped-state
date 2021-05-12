// import test from 'ava';
import defaultModule from '../dist/index.mjs'
import { TestHeading } from '../dist/index.mjs'
import subdirImport from '../dist/TestButton/index.js'

import singleFileExport from '../dist/createStatefulContext/index.js'

console.log({ defaultModule })
console.log({ subdirImport })
console.log({ TestHeading })
console.log({ singleFileExport })