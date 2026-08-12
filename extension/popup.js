document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('github-link');
  link.addEventListener('click', () => {
    chrome.tabs.create({ url: link.href });
  });
});