import {
    defineConfig
} from 'vitepress'

import {
    getSidebar
} from 'vitepress-plugin-auto-sidebar'

import {
    dirname,
    resolve
} from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "docs",

    title: "Hidden Wolf Pool",
    description: "IT is a strange thing. Especially the presence of wolves.",
    themeConfig: {
        nav: [{
                text: '🏠 Home',
                link: '/'
            },
            {
                text: '🔁 DevOps',
                items: [{
                    text: '🛠️ Ansible',
                    link: '/devops/ansible/'
                }, ]
            }
        ],

        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/hidden-wolf-pool/hidden-wolf-pool.github.io'
        }],

        search: {
            provider: 'local'
        },

        sidebar: getSidebar({
            contentRoot: resolve(__dirname, '../docs'),
            contentDirs: ['devops/ansible'],
            useFrontmatter: true,
            collapsible: true,
            collapsed: true,
        }),
    },
    cleanUrls: true,

})
