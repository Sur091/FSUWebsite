
      const feedbackLink = document.querySelector(".feedback-link");
      const modalOverlay = document.getElementById("feedbackModal");

      feedbackLink.addEventListener("click", function () {
        modalOverlay.style.display = "block";
      });

      modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
          modalOverlay.style.display = "none";
        }
      });
