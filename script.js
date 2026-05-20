// script.js

/**
 *  ♈ Aries (Ram): March 21–April 19
 *  ♉ Taurus (Bull): April 20–May 20
 *  ♊ Gemini (Twins): May 21–June 21
 *  ♋ Cancer (Crab): June 22–July 22
 *  ♌ Leo (Lion): July 23–August 22
 *  ♍ Virgo (Virgin): August 23–September 22
 *  ♎ Libra (Balance): September 23–October 23
 *  ♏ Scorpius (Scorpion): October 24–November 21
 *  ♐ Sagittarius (Archer): November 22–December 21
 *  ♑ Capricornus (Goat): December 22–January 19
 *  ♒ Aquarius (Water Bearer): January 20–February 18
 *  ♓ Pisces (Fish): February 19–March 20
 */

function searchZodiac(day, month) {
  // Months with 31 days
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    // January
    if (month == 1) {
      if (day >= 1 && day <= 19) {
        return "capricorn";
      } else if (day > 19 && day <= 31) {
        return "aquarius";
      }
    }

    // March
    else if (month == 3) {
      if (day >= 1 && day <= 20) {
        return "pisces";
      } else if (day > 20 && day <= 31) {
        return "aries";
      }
    }

    // May
    else if (month == 5) {
      if (day >= 1 && day <= 21) {
        return "taurus";
      } else if (day > 21 && day <= 31) {
        return "gemini";
      }
    }

    // July
    else if (month == 7) {
      if (day >= 1 && day <= 22) {
        return "cancer";
      } else if (day > 22 && day <= 31) {
        return "leo";
      }
    }

    // August
    else if (month == 8) {
      if (day >= 1 && day <= 22) {
        return "leo";
      } else if (day > 22 && day <= 31) {
        return "virgo";
      }
    }

    // October
    else if (month == 10) {
      if (day >= 1 && day <= 23) {
        return "libra";
      } else if (day > 23 && day <= 31) {
        return "scorpio";
      }
    }

    // December
    else if (month == 12) {
      if (day >= 1 && day <= 21) {
        return "sagittarius";
      } else if (day > 21 && day <= 31) {
        return "capricorn";
      }
    }
  }

  // Months with 30 days
  else if (month == 4 || month == 6 || month == 9 || month == 11) {
    // April
    if (month == 4) {
      if (day >= 1 && day <= 19) {
        return "aries";
      } else if (day > 19 && day <= 30) {
        return "taurus";
      }
    }

    // June
    else if (month == 6) {
      if (day >= 1 && day <= 21) {
        return "gemini";
      } else if (day > 21 && day <= 30) {
        return "cancer";
      }
    }

    // September
    else if (month == 9) {
      if (day >= 1 && day <= 22) {
        return "virgo";
      } else if (day > 22 && day <= 30) {
        return "libra";
      }
    }

    // November
    else if (month == 11) {
      if (day >= 1 && day <= 21) {
        return "scorpio";
      } else if (day > 21 && day <= 30) {
        return "sagittarius";
      }
    }
  }

  // February
  else if (month == 2) {
    if (day >= 1 && day <= 18) {
      return "aquarius";
    } else if (day > 18 && day <= 29) {
      return "pisces";
    }
  }

  return null;
}

// ==================== ZODIAC LOGIC ====================
function searchZodiac(day, month) {
  // ... (sama persis seperti kode Anda sebelumnya, tidak diubah) ...
  // Saya sertakan ulang untuk kelengkapan
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    if (month == 1) {
      if (day >= 1 && day <= 19) return "capricorn";
      else if (day > 19 && day <= 31) return "aquarius";
    } else if (month == 3) {
      if (day >= 1 && day <= 20) return "pisces";
      else if (day > 20 && day <= 31) return "aries";
    } else if (month == 5) {
      if (day >= 1 && day <= 21) return "taurus";
      else if (day > 21 && day <= 31) return "gemini";
    } else if (month == 7) {
      if (day >= 1 && day <= 22) return "cancer";
      else if (day > 22 && day <= 31) return "leo";
    } else if (month == 8) {
      if (day >= 1 && day <= 22) return "leo";
      else if (day > 22 && day <= 31) return "virgo";
    } else if (month == 10) {
      if (day >= 1 && day <= 23) return "libra";
      else if (day > 23 && day <= 31) return "scorpio";
    } else if (month == 12) {
      if (day >= 1 && day <= 21) return "sagittarius";
      else if (day > 21 && day <= 31) return "capricorn";
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (month == 4) {
      if (day >= 1 && day <= 19) return "aries";
      else if (day > 19 && day <= 30) return "taurus";
    } else if (month == 6) {
      if (day >= 1 && day <= 21) return "gemini";
      else if (day > 21 && day <= 30) return "cancer";
    } else if (month == 9) {
      if (day >= 1 && day <= 22) return "virgo";
      else if (day > 22 && day <= 30) return "libra";
    } else if (month == 11) {
      if (day >= 1 && day <= 21) return "scorpio";
      else if (day > 21 && day <= 30) return "sagittarius";
    }
  } else if (month == 2) {
    if (day >= 1 && day <= 18) return "aquarius";
    else if (day > 18 && day <= 29) return "pisces";
  }
  return null;
}

// ==================== PERFORM SEARCH ====================
function performSearch() {
  const image = document.getElementById("result");
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const zodiacNameEl = document.getElementById("zodiacName");
  const zodiacCard = document.getElementById("zodiacCard");
  const cardInner = document.querySelector(".card-inner");

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);

  // Validasi input
  if (!day || !month || isNaN(day) || isNaN(month)) {
    shakeElement(document.querySelector(".search"));
    return;
  }

  const daysInMonth = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  if (day < 1 || day > daysInMonth[month]) {
    shakeElement(document.querySelector(".search"));
    return;
  }

  const zodiac = searchZodiac(day, month);
  if (zodiac) {
    // Tambahkan kelas loading
    cardInner.classList.add("loading");

    // Ganti src gambar
    const newSrc = "img/" + zodiac + ".png";
    image.src = newSrc;
    image.alt = zodiac;

    // Fallback jika gambar zodiak tidak ditemukan (misal aries.png)
    image.onerror = function () {
      this.onerror = null; // Hindari loop
      // SVG khusus dengan simbol zodiak (contoh: lingkaran + inisial)
      const fallbackSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#d4a853" stroke-width="4" opacity="0.8"/>
          <text x="100" y="115" text-anchor="middle" fill="#f0d78c" font-size="70" font-family="serif" font-weight="bold">${zodiac.charAt(0).toUpperCase()}</text>
          <text x="100" y="155" text-anchor="middle" fill="#ffffff" font-size="16" opacity="0.7">${zodiac}</text>
        </svg>
      `;
      this.src = "data:image/svg+xml," + encodeURIComponent(fallbackSvg);
    };

    // Saat gambar berhasil dimuat
    image.onload = function () {
      cardInner.classList.remove("loading");
    };

    // Tampilkan nama zodiak
    zodiacNameEl.textContent = zodiac;

    // Animasi reveal
    zodiacCard.classList.add("reveal");
    setTimeout(() => zodiacCard.classList.remove("reveal"), 500);
  }
}

// Fungsi bantu animasi shake
function shakeElement(el) {
  el.style.animation = "none";
  el.offsetHeight; // reflow
  el.style.animation = "shake 0.6s ease";
}

// ==================== STARFIELD & PARTICLES (sama seperti sebelumnya) ====================
// ... (tetap seperti kode Anda sebelumnya) ...

// ==================== INISIALISASI ====================
document.addEventListener("DOMContentLoaded", () => {
  initStarfield();
  initParticles();

  // Pastikan gambar default tampil (sudah ada di HTML, tapi jika onerror terjadi, SVG sudah aktif)
  const image = document.getElementById("result");
  if (!image.src || image.src === window.location.href) {
    // Jika src kosong (misal karena kesalahan), set fallback
    image.src = "img/default.png";
  }

  // Dukungan Enter key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") performSearch();
  });
});

// ==================== STARFIELD ====================
function initStarfield() {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    const count = Math.floor((canvas.width * canvas.height) / 2000);
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.1 ? 40 + Math.random() * 20 : 0, // Some golden stars
      });
    }
  }

  function drawStars(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      const twinkle =
        Math.sin(timestamp * star.twinkleSpeed + star.twinkleOffset) * 0.5 +
        0.5;
      const alpha = 0.3 + twinkle * 0.7;
      const radius = star.radius * (0.7 + twinkle * 0.6);

      // Glow
      const gradient = ctx.createRadialGradient(
        star.x,
        star.y,
        0,
        star.x,
        star.y,
        radius * 3,
      );
      if (star.hue > 0) {
        gradient.addColorStop(0, `hsla(${star.hue}, 80%, 70%, ${alpha})`);
        gradient.addColorStop(
          0.4,
          `hsla(${star.hue}, 60%, 50%, ${alpha * 0.3})`,
        );
      } else {
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(200, 210, 255, ${alpha * 0.3})`);
      }
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.arc(star.x, star.y, radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = star.hue
        ? `hsla(${star.hue}, 80%, 80%, ${alpha})`
        : `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();
    });

    animationId = requestAnimationFrame(drawStars);
  }

  resize();
  createStars();
  animationId = requestAnimationFrame(drawStars);

  window.addEventListener("resize", () => {
    resize();
    createStars();
  });
}

// ==================== FLOATING PARTICLES ====================
function initParticles() {
  const container = document.getElementById("particles");
  const particleCount = 25;

  function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 8;
    const color =
      Math.random() < 0.3
        ? "rgba(212, 168, 83, 0.8)"
        : "rgba(255, 255, 255, 0.7)";

    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${size}px ${color.replace("0.8", "0.3").replace("0.7", "0.2")};
      `;

    container.appendChild(particle);

    // Remove and recreate after animation
    setTimeout(
      () => {
        particle.remove();
        createParticle();
      },
      (duration + delay) * 1000,
    );
  }

  for (let i = 0; i < particleCount; i++) {
    setTimeout(() => createParticle(), Math.random() * 3000);
  }
}

// ==================== SHAKE KEYFRAMES ====================
const shakeStyle = document.createElement("style");
shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 50%, 90% { transform: translateX(-6px); }
      30%, 70% { transform: translateX(6px); }
    }
    .reveal {
      animation: cardReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes cardReveal {
      0% { transform: scale(0.8); opacity: 0; }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); opacity: 1; }
    }
  `;
document.head.appendChild(shakeStyle);

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  initStarfield();
  initParticles();

  // Set default image
  const image = document.getElementById("result");
  image.src = "img/default.png";

  // Enter key to search
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });
});
