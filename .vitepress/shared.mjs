import {
    defineConfig
} from 'vitepress';

export const shared = defineConfig({
    title: "Hidden Wolf Pool",
    description: "IT is a strange thing. Especially the presence of wolves.",
    base: '',
    srcDir: "./docs",
    cleanUrls: true,
    themeConfig: {
        search: {
            provider: 'local',
        }
    }
});
