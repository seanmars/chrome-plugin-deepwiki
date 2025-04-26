// content.js
(function () {
  function addButton() {
    const watchButton = document.querySelector('div#repository-details-container > ul > li:nth-child(1)');
    if (!watchButton) {
      return;
    }

    const deepWikiLi = document.createElement('li');
    deepWikiLi.className = 'd-flex flex-items-center';
    const deepWikiButton = document.createElement('button');
    deepWikiButton.textContent = 'DeepWiki';
    deepWikiButton.className = 'btn btn-sm ml-2'; // 使用 GitHub 的樣式
    deepWikiButton.style.borderRadius = '6px';
    deepWikiButton.style.padding = '4px 8px';
    deepWikiButton.style.cursor = 'pointer';

    deepWikiLi.appendChild(deepWikiButton);

    // 在 Watch 按鈕前插入 DeepWiki 按鈕
    watchButton.parentNode.prepend(deepWikiLi);

    deepWikiButton.addEventListener('click', function () {
      const repoUrl = window.location.href;
      chrome.storage.local.get(['domain'], function (result) {
        const domain = result.domain;
        const url = new URL(repoUrl);
        const deepWikiUrl = `https://${domain}${url.pathname}`;
        window.open(deepWikiUrl, '_blank');
      });
    });
  }

  window.addEventListener('load', addButton);
})();
