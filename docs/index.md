---
layout: home
---
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const { go } = useRouter()

onMounted(() => {
  const lang = navigator.language.split('-')[0];
  if (lang === 'en') go('/en/');
  else go('/ru/')
})
</script>
