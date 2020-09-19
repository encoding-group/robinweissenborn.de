<script>

  let pages = [
    {
      slug: '',
    },
    {
      slug: 'info',
    },
    {
      slug: 'archive',
      priority: 0.8
    },
    {
      slug: 'imprint',
      changefreq: 'yearly',
      priority: 0
    },
  ];

</script>

{@html '<?xml version="1.0" encoding="UTF-8"?>'}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  {#each pages as page}
    <url>
      <loc>https://robinweissenborn.de/{page.slug}</loc>
      <changefreq>{page.changefreq || 'monthly'}</changefreq>
      <priority>{page.priority || 0.5}</priority>
      {#if 'images' in page}
        {#each page.images as image}
          <image:image>
            <image:loc>{image.url}</image:loc>
            <image:title>{image.title}</image:title>
          </image:image>
        {/each}
      {/if}
    </url>
  {/each}
</urlset>
