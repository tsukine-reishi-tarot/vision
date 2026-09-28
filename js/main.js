"use strict";

"use strict";


document.addEventListener("DOMContentLoaded", () => {

  const floatingCta = document.getElementById("floatingCta");

  const fvCta = document.querySelector(".fv__cta-button");

  const section05Cta = document.querySelector(
    ".section05__cta-button"
  );


  if (!floatingCta || !fvCta) {
    return;
  }


  let fvCtaVisible = false;
  let section05CtaVisible = false;


  /**
   * フローティングCTAの表示判定
   */
  const updateFloatingCta = () => {

    const originalButtonVisible =
      fvCtaVisible ||
      section05CtaVisible;

    floatingCta.classList.toggle(
      "is-visible",
      !originalButtonVisible
    );

  };


  /**
   * FV CTA
   */
  const fvObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        fvCtaVisible = entry.isIntersecting;

        updateFloatingCta();

      });

    },
    {
      threshold: 0.15
    }
  );

  fvObserver.observe(fvCta);


  /**
   * Section05 CTA
   */
  if (section05Cta) {

    const section05Observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            section05CtaVisible =
              entry.isIntersecting;

            updateFloatingCta();

          });

        },
        {
          threshold: 0.15
        }
      );

    section05Observer.observe(section05Cta);

  }

});