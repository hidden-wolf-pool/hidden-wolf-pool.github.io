import {
    getSidebar
} from 'vitepress-plugin-auto-sidebar'

import {
    resolve
} from 'path';

// https://vitepress.dev/reference/site-config
export const en = {
    lang: 'en',
    themeConfig: {
        nav: [{
                text: '🏠 Home',
                link: '/en/'
            },
            {
                text: '🔁 DevOps',
                items: [{
                    text: '🛠️ Ansible',
                    link: '/en/devops/ansible/'
                }, ]
            },
            {
                text: '🐧 Linux',
                items: [{
                    text: '💬 Commands',
                    link: '/en/linux/commands/'
                }]
            }
        ],

        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/hidden-wolf-pool/hidden-wolf-pool.github.io'
        }],

        sidebar: getSidebar({
            contentRoot: resolve(__dirname, '../docs'),
            contentDirs: ['en/devops/ansible', 'en/linux/commands'],
            useFrontmatter: true,
            collapsible: true,
            collapsed: true,
        }),
    },
};
