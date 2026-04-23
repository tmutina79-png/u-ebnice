(function () {
  /* ── Styly pro modální okno ── */
  var style = document.createElement('style');
  style.textContent = [
    '#pdm-overlay{display:none;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;}',
    '#pdm-overlay.active{display:flex;}',
    '.pdm-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.5);}',
    '.pdm-box{position:relative;background:#fff;border-radius:14px;padding:1.6rem 1.8rem;max-width:520px;width:92%;max-height:88vh;overflow-y:auto;box-shadow:0 10px 40px rgba(0,0,0,.3);}',
    '.pdm-title{margin:0 0 1.1rem;color:#1e40af;font-size:1.2rem;font-weight:700;border-bottom:2px solid #dbeafe;padding-bottom:.6rem;}',
    '.pdm-section{margin-bottom:.9rem;}',
    '.pdm-label{font-weight:700;color:#374151;margin-bottom:.45rem;display:block;}',
    '.pdm-quick{display:flex;gap:.4rem;margin-bottom:.65rem;}',
    '.pdm-btn-sm{padding:.22rem .7rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:5px;cursor:pointer;font-size:.82rem;}',
    '.pdm-btn-sm:hover{background:#e5e7eb;}',
    '#pdm-examples{display:flex;flex-wrap:wrap;gap:.4rem;}',
    '.pdm-ex-lbl{display:inline-flex;align-items:center;gap:.3rem;padding:.28rem .65rem;background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;cursor:pointer;font-size:.88rem;user-select:none;transition:background .12s,border-color .12s;}',
    '.pdm-ex-lbl:hover{background:#dbeafe;}',
    '.pdm-ex-lbl input{cursor:pointer;accent-color:#2563eb;}',
    '.pdm-ex-lbl.checked{background:#dbeafe;border-color:#2563eb;font-weight:600;}',
    '.pdm-hr{border:none;border-top:1px solid #e5e7eb;margin:1rem 0;}',
    '.pdm-toggle-row{display:flex;flex-direction:column;gap:.5rem;}',
    '.pdm-toggle{display:flex;align-items:center;gap:.55rem;cursor:pointer;font-size:.95rem;padding:.3rem .4rem;border-radius:6px;}',
    '.pdm-toggle:hover{background:#f9fafb;}',
    '.pdm-toggle input{accent-color:#16a34a;width:16px;height:16px;cursor:pointer;}',
    '.pdm-actions{display:flex;gap:.6rem;justify-content:flex-end;margin-top:1.3rem;}',
    '.pdm-btn-cancel{padding:.45rem 1.1rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:7px;cursor:pointer;font-weight:600;font-size:.95rem;}',
    '.pdm-btn-cancel:hover{background:#e5e7eb;}',
    '.pdm-btn-print{padding:.45rem 1.3rem;background:#16a34a;color:#fff;border:none;border-radius:7px;cursor:pointer;font-weight:700;font-size:.98rem;box-shadow:0 1px 4px rgba(0,0,0,.15);}',
    '.pdm-btn-print:hover{background:#15803d;}'
  ].join('');
  document.head.appendChild(style);

  /* ── Vytvoř modální HTML ── */
  var overlay = document.createElement('div');
  overlay.id = 'pdm-overlay';
  overlay.innerHTML =
    '<div class="pdm-backdrop" onclick="pdmClose()"></div>' +
    '<div class="pdm-box">' +
      '<div class="pdm-title">🖨️ Nastavení tisku / PDF</div>' +

      '<div class="pdm-section">' +
        '<span class="pdm-label">Vyber příklady:</span>' +
        '<div class="pdm-quick">' +
          '<button class="pdm-btn-sm" onclick="pdmAll(true)">✅ Vybrat vše</button>' +
          '<button class="pdm-btn-sm" onclick="pdmAll(false)">☐ Zrušit vše</button>' +
        '</div>' +
        '<div id="pdm-examples"></div>' +
      '</div>' +

      '<div class="pdm-hr"></div>' +

      '<div class="pdm-section">' +
        '<span class="pdm-label">Co zahrnout:</span>' +
        '<div class="pdm-toggle-row">' +
          '<label class="pdm-toggle"><input type="checkbox" id="pdm-hints" checked> 💡 Postup / nápovědu</label>' +
          '<label class="pdm-toggle"><input type="checkbox" id="pdm-results" checked> ✅ Výsledky</label>' +
        '</div>' +
      '</div>' +

      '<div class="pdm-actions">' +
        '<button class="pdm-btn-cancel" onclick="pdmClose()">Zrušit</button>' +
        '<button class="pdm-btn-print" onclick="pdmDoPrint()">🖨️ Tisknout&nbsp;/&nbsp;PDF</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  /* ── Najdi všechny příklady na stránce ── */
  function getCards() {
    return Array.from(document.querySelectorAll('.exercise-card, details.exercise'));
  }

  /* ── Otevři dialog ── */
  window.printPage = function () {
    var cards = getCards();
    var container = document.getElementById('pdm-examples');
    container.innerHTML = '';
    cards.forEach(function (card, i) {
      var numEl = card.querySelector('.exercise-number');
      var label = numEl ? numEl.textContent.trim() : ('Příklad ' + (i + 1));
      var lbl = document.createElement('label');
      lbl.className = 'pdm-ex-lbl checked';
      lbl.innerHTML = '<input type="checkbox" checked data-idx="' + i + '"> ' + label;
      lbl.querySelector('input').addEventListener('change', function () {
        lbl.classList.toggle('checked', this.checked);
      });
      container.appendChild(lbl);
    });
    overlay.classList.add('active');
  };

  window.pdmClose = function () {
    overlay.classList.remove('active');
  };

  window.pdmAll = function (val) {
    document.querySelectorAll('#pdm-examples input[type=checkbox]').forEach(function (cb) {
      cb.checked = val;
      cb.closest('.pdm-ex-lbl').classList.toggle('checked', val);
    });
  };

  window.pdmDoPrint = function () {
    var cards = getCards();
    var inclHints   = document.getElementById('pdm-hints').checked;
    var inclResults = document.getElementById('pdm-results').checked;

    /* Které příklady tisknout */
    var selectedIdxs = Array.from(
      document.querySelectorAll('#pdm-examples input[type=checkbox]')
    ).reduce(function (acc, cb, i) {
      if (cb.checked) acc.push(i);
      return acc;
    }, []);

    /* Skryj nevybrané příklady */
    var hiddenCards = [];
    cards.forEach(function (card, i) {
      if (selectedIdxs.indexOf(i) < 0) {
        hiddenCards.push({ el: card, disp: card.style.display });
        card.style.display = 'none';
      }
    });

    /* Skryj postup/nápovědu */
    var hiddenHints = [];
    if (!inclHints) {
      document.querySelectorAll('details.hint, details.step').forEach(function (el) {
        hiddenHints.push({ el: el, disp: el.style.display });
        el.style.display = 'none';
      });
    }

    /* Skryj výsledky */
    var hiddenResults = [];
    if (!inclResults) {
      document.querySelectorAll('details.result').forEach(function (el) {
        hiddenResults.push({ el: el, disp: el.style.display });
        el.style.display = 'none';
      });
    }

    /* Rozbal všechna zbývající details */
    var allDetails = Array.from(document.querySelectorAll('details'));
    var openStates = allDetails.map(function (d) { return d.open; });
    allDetails.forEach(function (d) { d.open = true; });

    pdmClose();

    setTimeout(function () {
      window.print();
      /* Obnov vše */
      allDetails.forEach(function (d, i) { d.open = openStates[i]; });
      hiddenCards.forEach(function (o)   { o.el.style.display = o.disp; });
      hiddenHints.forEach(function (o)   { o.el.style.display = o.disp; });
      hiddenResults.forEach(function (o) { o.el.style.display = o.disp; });
    }, 120);
  };
})();
