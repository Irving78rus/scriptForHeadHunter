(() => {
  let delay = 0;
  const jobs = document.querySelectorAll('[data-qa="vacancy-serp__vacancy_response"]');
  jobs.forEach((job) => {
    setTimeout(() => {
      job.firstChild.click();
      setTimeout(() => {
        const but = document.querySelector('[data-qa="vacancy-response-letter-toggle"]');
        but.click();
        setTimeout(() => {
          const letter = document.querySelector(
            '[data-qa="vacancy-response-popup-form-letter-input"]'
          );

          letter.focus();
          window.dispatchEvent(new KeyboardEvent("keydown", { code: "с" }));
          letter.dispatchEvent(new KeyboardEvent("keydown", { code: "с" }));
          letter.value +=
            "Добрый день! Я начинающий frontend разработчик. Я написал этот скрипт для автоматической отправки откликов, этим я надеюсь привлечь ваше внимание. Скрипт я разместил в моем GitHub профиле. Ссылка на git есть в моем резюме";

          setTimeout(() => {
            const finish = document.querySelector('[data-qa="vacancy-response-submit-popup"]');
             finish.click();
          }, 2000);
        }, 2000);
      }, 2000);
    }, delay);

    delay += 10000;
  });
})();
