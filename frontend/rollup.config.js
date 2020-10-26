import path from "path";
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: path.resolve(__dirname, './src/scripts/common.ts'),
    output: {
        dir: 'dist/js',
        format: 'iife',
        name: 'MyModule'
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
    ],
};