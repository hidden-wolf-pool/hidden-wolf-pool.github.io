import {
    getSidebar
} from 'vitepress-plugin-auto-sidebar'

import {
    resolve
} from 'path';

// https://vitepress.dev/reference/site-config
export const ru = {
    lang: 'ru',
    themeConfig: {
        nav: [{
                text: '🏠 Домой',
                link: '/ru/'
            },
            {
                text: '🔁 DevOps',
                items: [{
                    text: '🛠️ Ansible',
                    link: '/ru/devops/ansible/'
                }, ]
            },
            {
                text: '🐧 Linux',
                items: [{
                    text: '💬 Commands',
                    link: '/ru/linux/commands/'
                }]
            }
        ],

        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/hidden-wolf-pool/hidden-wolf-pool.github.io'
        }],

        sidebar: getSidebar({
            contentRoot: resolve(__dirname, '../docs'),
            contentDirs: ['ru/devops', 'ru/linux'],
            useFrontmatter: true,
            collapsible: true,
            collapsed: true,
        }),
    },
};
