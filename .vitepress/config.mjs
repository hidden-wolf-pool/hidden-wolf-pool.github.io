import {
    defineConfig
} from 'vitepress'

import {
    en
} from './en.mjs'

import {
    ru
} from './ru.mjs'

import {
    shared
} from './shared.mjs'

export default defineConfig({
    ...shared,
    locales: {
        en: {
            label: 'English',
            ...en
        },
        ru: {
            label: 'Русский',
            ...ru,
        },
    }
})
