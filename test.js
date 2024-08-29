

async function concurrencyRequest(urls, maxNum) {
  const results = new Array(urls.length).fill(null);
  let completedCount = 0;
  let inProgressCount = 0;

  async function processUrl(index) {
    const response = await fetch(urls[index]);
    const data = await response.json();
    results[index] = data;
    completedCount++;
    inProgressCount--;
    if (urls.length > completedCount + inProgressCount) {
      await processUrl(completedCount + inProgressCount);
    }
    if (completedCount === urls.length) {
      console.log(results);
    }
  }

  for (let i = 0; i < maxNum && i < urls.length; i++) {
    inProgressCount++;
    processUrl(i);
  }
}

const urls = [
    'https://example.com/api/1',
    'https://example.com/api/2',
    'https://example.com/api/2',
    'https://example.com/api/2',
    'https://example.com/api/2',
    'https://example.com/api/2',
    'https://example.com/api/2',
    'https://example.com/api/2',
    'https://example.com/api/2',
    'https://example.com/api/2',
    'https://example.com/api/2',
    //... 添加更多的 URL
  ];
  const maxNum = 6;
  concurrencyRequest(urls, maxNum);
