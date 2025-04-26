const domainInput = document.getElementById("domain");
const saveButton = document.getElementById("save");

chrome.storage.local.get(["domain"], function (result) {
  if (result.domain) {
    domainInput.value = result.domain;
  } else {
    domainInput.value = "deepwiki.com"; // Default value
  }
});

saveButton.addEventListener("click", function () {
  let domain = domainInput.value;
  if (!domain) {
    domain = "deepwiki.com";
    domainInput.value = domain;
  }

  chrome.storage.local.set({ domain: domain });
});