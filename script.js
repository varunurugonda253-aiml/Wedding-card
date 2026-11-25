/**
 * Srikanth & Supriya — A Beautiful Beginning
 * Scrolling Cinematic South Indian Wedding Invitation
 */

(() => {
  "use strict";

  // --- Constants & Data ---
  const pa = Date.parse("2026-11-29T10:15:00+05:30");
  const ma = [
    {
      title: "Wedding ceremony",
      date: "Sunday, 29 November 2026",
      time: "10:15 AM onwards · IST",
      venue: "P.R.M.R. Gardens · Tekumatla, Telangana",
      copy: "With the blessings of the Almighty and our elders, join us for the traditional Telugu wedding ceremony of Chi. Srikanth and Chi. La. Sow. Supriya. Pushyami Nakshatram, Dhanur Lagnam. Lunch follows the ceremony."
    }
  ];

  const ea = { scene: "opening", presence: 1 };
  const ta = "invitation:scene";
  const na = "invitation:shower";
  const ra = "invitation:blessed";

  const Q = (e, t) => e + Math.random() * (t - e);
  const ia = e => e[Math.floor(Math.random() * e.length)];
  const da = e => Math.max(0, Math.min(1, e));
  const $ = (e, t, n) => da((e - t) / (n - t));
  const fa = e => e * e * (3 - 2 * e);
  const ca = [[0.45, 0.12], [0.645, 0.2]];
  const la = 0.895;

  function sa(e) {
    return e < 0.19 || e > 0.77 ? null : e < 0.35 ? 0.22 : e < 0.4 ? 0.14 : e < 0.52 ? 0.095 : e < 0.58 ? 0.215 : e < 0.7 ? 0.175 : 0.27;
  }

  // --- Canvas Sprites Generator ---
  function aa(e, t, n) {
    let r = document.createElement("canvas");
    r.width = e;
    r.height = t;
    let i = r.getContext("2d");
    i.translate(e / 2, t / 2);
    n(i);
    return { c: r, max: Math.max(e, t) };
  }

  function oa() {
    let e = (e, t, n) => aa(48, 64, r => {
      let i = r.createRadialGradient(0, 8, 2, 0, 0, 34);
      i.addColorStop(0, e);
      i.addColorStop(1, t);
      r.fillStyle = i;
      r.beginPath();
      r.moveTo(0, 30);
      r.bezierCurveTo(-26, 12, -22, -24, -4, -30);
      r.quadraticCurveTo(0, -24, 4, -30);
      r.bezierCurveTo(22, -24, 26, 12, 0, 30);
      r.fill();
      r.strokeStyle = n;
      r.globalAlpha = 0.35;
      r.lineWidth = 1.2;
      r.beginPath();
      r.moveTo(0, 26);
      r.quadraticCurveTo(2, 0, 0, -22);
      r.stroke();
    });

    let t = aa(64, 64, e => {
      for (let t = 0; t < 5; t++) {
        e.save();
        e.rotate(t * Math.PI * 2 / 5);
        let n = e.createLinearGradient(0, 0, 0, -28);
        n.addColorStop(0, "#f3ecd4");
        n.addColorStop(1, "#fffdf5");
        e.fillStyle = n;
        e.beginPath();
        e.ellipse(0, -15, 8, 15, 0, 0, Math.PI * 2);
        e.fill();
        e.strokeStyle = "#d9cfb2";
        e.lineWidth = 1;
        e.stroke();
        e.restore();
      }
      e.fillStyle = "#e6d27a";
      e.beginPath();
      e.arc(0, 0, 4.5, 0, Math.PI * 2);
      e.fill();
    });

    let n = (e, t) => aa(64, 64, n => {
      for (let r = 0; r < 3; r++) {
        let i = 14 - r * 3, a = 24 - r * 7;
        for (let o = 0; o < i; o++) {
          n.save();
          n.rotate(o * Math.PI * 2 / i + r * 0.3);
          n.fillStyle = r % 2 ? t : e;
          n.beginPath();
          n.ellipse(0, -a + 6, 6 - r, 9 - r, 0, 0, Math.PI * 2);
          n.fill();
          n.restore();
        }
      }
      n.fillStyle = "#b45309";
      n.beginPath();
      n.arc(0, 0, 3.5, 0, Math.PI * 2);
      n.fill();
    });

    let r = (e, t, n) => aa(48, 48, r => {
      let i = r.createRadialGradient(0, 0, 0, 0, 0, 24);
      i.addColorStop(0, e);
      i.addColorStop(0.25, t);
      i.addColorStop(1, "rgba(255,200,90,0)");
      r.fillStyle = i;
      r.fillRect(-24, -24, 48, 48);
      if (n) {
        r.fillStyle = e;
        r.beginPath();
        for (let e = 0; e < 8; e++) {
          let t = e % 2 ? 2.2 : 16, n = e * Math.PI / 4;
          r.lineTo(Math.cos(n) * t, Math.sin(n) * t);
        }
        r.fill();
      }
    });

    let i = e => aa(56, 88, t => {
      t.shadowColor = "rgba(120,84,50,.32)";
      t.shadowBlur = 5;
      t.shadowOffsetY = 2;
      let n = t.createLinearGradient(0, 32, 0, -34);
      n.addColorStop(0, "#f4ecd9");
      n.addColorStop(0.55, "#fffdf7");
      n.addColorStop(1, e);
      t.fillStyle = n;
      t.beginPath();
      t.moveTo(0, 32);
      t.bezierCurveTo(-19, 18, -16, -16, 0, -34);
      t.bezierCurveTo(16, -16, 19, 18, 0, 32);
      t.fill();
      t.shadowColor = "transparent";
      t.strokeStyle = "#cdbd9c";
      t.globalAlpha = 0.45;
      t.lineWidth = 0.9;
      for (let e of [-6, 0, 6]) {
        t.beginPath();
        t.moveTo(e * 0.3, 28);
        t.quadraticCurveTo(e, 0, e * 0.4, -26);
        t.stroke();
      }
    });

    let a = aa(96, 76, e => {
      e.shadowColor = "rgba(120,84,50,.28)";
      e.shadowBlur = 5;
      e.shadowOffsetY = 2;
      let t = (t, n, r, i, a) => {
        e.save();
        e.translate(0, 18);
        e.rotate(t);
        let o = e.createLinearGradient(0, 0, 0, -n);
        o.addColorStop(0, i);
        o.addColorStop(1, a);
        e.fillStyle = o;
        e.beginPath();
        e.moveTo(0, 0);
        e.bezierCurveTo(-r, -n * 0.35, -r * 0.6, -n * 0.8, 0, -n);
        e.bezierCurveTo(r * 0.6, -n * 0.8, r, -n * 0.35, 0, 0);
        e.fill();
        e.strokeStyle = "#d6c8a8";
        e.globalAlpha = 0.5;
        e.lineWidth = 0.8;
        e.stroke();
        e.restore();
      };
      for (let e of [-1.25, 1.25]) t(e, 30, 11, "#efe5cf", "#fbeff0");
      for (let e of [-0.7, 0.7]) t(e, 38, 13, "#f3ead6", "#fdf1f2");
      t(0, 44, 14, "#f6efdd", "#fff4f4");
      e.fillStyle = "#e8cf72";
      e.beginPath();
      e.ellipse(0, 12, 7, 3, 0, 0, Math.PI * 2);
      e.fill();
    });

    let o = (e, t) => aa(14, 28, n => {
      let r = n.createLinearGradient(-5, 0, 5, 0);
      r.addColorStop(0, t);
      r.addColorStop(0.45, e);
      r.addColorStop(1, t);
      n.fillStyle = r;
      n.beginPath();
      n.ellipse(0, 0, 5, 12, 0, 0, Math.PI * 2);
      n.fill();
      n.strokeStyle = "rgba(90,50,10,.55)";
      n.lineWidth = 1.3;
      n.stroke();
      n.fillStyle = "rgba(255,255,240,.7)";
      n.beginPath();
      n.ellipse(-1.4, -3, 1.2, 4, 0, 0, Math.PI * 2);
      n.fill();
    });

    return {
      flowers: [
        t, t,
        e("#fff7f0", "#f3c6cf", "#c2687e"),
        e("#f7a3b5", "#c2365d", "#7d1535"),
        e("#ffd27a", "#f28a1a", "#a84b00"),
        n("#f59e0b", "#fbbf24"),
        n("#ea580c", "#f97316")
      ],
      roses: [
        e("#f7a3b5", "#c2365d", "#7d1535"),
        e("#ffe0e6", "#e98aa2", "#a73a5a"),
        t
      ],
      marigold: [
        e("#ffd27a", "#f28a1a", "#a84b00"),
        e("#ffe7a3", "#f5b301", "#9a6400"),
        n("#f59e0b", "#fbbf24")
      ],
      lotus: [
        i("#f1cdd5"),
        i("#f7e2e0"),
        i("#ecc3cd"),
        i("#f9ece6"),
        a,
        t
      ],
      sparkle: [
        r("#fff6d8", "rgba(236,190,96,.75)", true),
        r("#ffffff", "rgba(255,221,150,.7)", true)
      ],
      ember: [
        r("#fff3c4", "rgba(255,160,50,.8)", false),
        r("#ffe9a8", "rgba(245,120,40,.75)", false)
      ],
      grains: [
        o("#f7cf3d", "#d9a011"),
        o("#f5c52a", "#c98d0c"),
        o("#fbd955", "#e0a91a"),
        o("#f7cf3d", "#d9a011"),
        o("#d63b2f", "#9e1f18"),
        o("#fff1c7", "#e3cf95")
      ]
    };
  }

  // --- Celebration Canvas Engine ---
  function initCelebration(canvas) {
    if (!canvas) return;
    let r = canvas.getContext("2d");
    let i = oa();
    let a = innerWidth, o = innerHeight;
    let s = 1, c = 0, l = 0, u = true, d = [];
    let f = ea.scene, p = performance.now(), m = -1e9, h = 0;
    let g = -999, _ = -999, v = 0, y = 0, b = 0, x = scrollY;

    let S = () => Math.max(0.72, Math.min(1.15, a / 1250));

    let C = () => {
      a = innerWidth;
      o = innerHeight;
      s = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(a * s);
      canvas.height = Math.round(o * s);
      B();
    };

    let w = (e, t, n, r, i) => ({
      kind: e, s: t, x: n, y: r, size: i,
      vx: 0, vy: 0,
      rot: Q(0, 6.28), vr: Q(-1.5, 1.5),
      flip: Q(0, 6.28), vf: Q(1.5, 4),
      age: 0, life: 1e9, delay: 0,
      term: Q(45, 95), swayA: Q(12, 40), swayF: Q(0.6, 1.6), phase: Q(0, 6.28)
    });

    let T = (e, t, n = i.flowers) => w("flower", ia(n), e, t, Q(17, 30) * S());

    let E = (e, t) => {
      let n = ia(i.lotus);
      let r = w("flower", n, e, t, (n === i.lotus[4] ? Q(34, 44) : n === i.lotus[5] ? Q(15, 20) : Q(22, 32)) * S());
      r.term = Q(22, 42);
      r.swayA = Q(18, 38);
      r.swayF = Q(0.35, 0.8);
      r.vr = Q(-0.7, 0.7);
      r.vf = Q(0.8, 1.8);
      r.alpha = Q(0.75, 0.95);
      if (n === i.lotus[4]) {
        r.vf = Q(0.2, 0.5);
        r.rot = Q(-0.3, 0.3);
        r.vr = Q(-0.2, 0.2);
      }
      return r;
    };

    let D = (e, t, n = Q(10, 20)) => {
      let r = w("sparkle", ia(i.sparkle), e, t, n);
      r.life = Q(0.6, 1.3);
      r.vr = Q(-2, 2);
      return r;
    };

    let O = (e, t) => {
      let n = w("ember", ia(i.ember), e, t, Q(8, 18) * S());
      n.life = Q(3, 6);
      n.term = -Q(30, 70);
      n.swayA = Q(8, 22);
      return n;
    };

    let k = (e, t) => {
      let n = w("grain", ia(i.grains), e, t, Q(9, 12) * Math.max(0.85, S()));
      n.vr = Q(-12, 12);
      n.stick = Math.random() < 0.6;
      n.life = 1e9;
      return n;
    };

    let A = e => {
      if (e) {
        d.push(e);
        if (d.length > 900) d.splice(0, d.length - 900);
      }
    };

    let j = () => {
      let e = document.querySelector(".illustrated-couple");
      if (!e) return null;
      let t = e.getBoundingClientRect();
      let n = 1024 / 1536;
      if (t.width / t.height > n) {
        let e = t.height, r = e * n;
        return { x: t.left + (t.width - r) / 2, y: t.top, w: r, h: e };
      }
      let r = t.width, i = r / n;
      return { x: t.left, y: t.top + (t.height - i) / 2, w: r, h: i };
    };

    let M = {
      opening: { rate: 0, make: () => null },
      gate: { rate: 11, make: e => T(Q(0, e), -30) },
      events: { rate: 5, make: e => T(Q(0, e), -30, i.marigold) },
      couple: { rate: 3, make: e => T(Q(0, e), -30, i.roses) },
      portrait: {
        rate: 7,
        make: (e, t) => {
          let n = document.querySelector(".gold-portrait")?.getBoundingClientRect();
          if (!n || n.top > t) return null;
          let r = D(Q(n.left - 30, n.right + 30), Q(n.top - 20, n.bottom), Q(8, 16));
          r.vy = -Q(5, 25);
          r.life = Q(1, 2);
          return r;
        }
      },
      venue: { rate: 12, make: (e, t) => O(Q(e * 0.08, e * 0.92), Q(t * 0.45, t + 10)) },
      blessing: { rate: 6, make: e => T(Q(0, e), -30, i.roses) },
      memories: {
        rate: 6,
        make: (e, t) => {
          let n = D(Q(0, e), Q(t * 0.1, t), Q(8, 14));
          n.vy = -Q(8, 20);
          n.life = Q(1.5, 2.6);
          return n;
        }
      },
      final: { rate: 3.2, make: e => E(Q(0, e), -40) }
    };

    let N = (e, t) => {
      for (let n = 0; n < e; n++) {
        let e = t(Q(-20, a + 20), -Q(20, o * 0.9));
        e.vy = Q(40, 120);
        A(e);
      }
    };

    let ee = e => {
      let t = j();
      if (!t) return;
      let n = Math.round((e ? 320 : 140) * Math.max(0.6, S()));
      for (let r = 0; r < n; r++) {
        let n = ia(ca);
        let r = Math.random() < 0.75 ? n[0] + Q(-0.13, 0.13) : Q(0.12, 0.88);
        let i = k(t.x + r * t.w, -Q(10, 60));
        i.vy = Q(120, 420);
        i.vx = Q(-40, 40);
        i.delay = Q(0, e ? 1.6 : 1);
        A(i);
      }
      for (let n = 0; n < (e ? 26 : 12); n++) {
        let e = T(t.x + Q(0.1, 0.9) * t.w, -Q(20, 200), i.flowers);
        e.delay = Q(0, 1.2);
        A(e);
      }
      window.dispatchEvent(new CustomEvent(ra, { detail: e ? 5 : 1 }));
    };

    let te = e => {
      let t = performance.now();
      if (e === "gate") N(Math.round(90 * S()), (e, t) => T(e, t));
      if (e === "events") N(Math.round(30 * S()), (e, t) => T(e, t, i.marigold));
      if (e === "blessing") N(Math.round(40 * S()), (e, t) => T(e, t, i.roses));
      if (e === "final") N(Math.round(12 * S()), E);
      if (e === "couple" && t - m > 3500) {
        m = t;
        setTimeout(() => {
          if (u && ea.scene === "couple") ee(false);
        }, 650);
      }
    };

    let P = () => {
      if (ea.scene !== f) {
        f = ea.scene;
        p = performance.now();
        te(f);
      }
      B();
    };

    let ne = (e, t) => {
      let n = S();
      if (f === "couple") {
        let n = j();
        if (!n) return;
        let r = ca.reduce((t, r) => Math.abs(n.x + t[0] * n.w - e) < Math.abs(n.x + r[0] * n.w - e) ? t : r);
        let a = n.x + r[0] * n.w;
        let o = n.y + (r[1] - 0.06) * n.h;
        let s = 0.6;
        for (let n = 0; n < 38; n++) {
          let n = k(e + Q(-8, 8), t + Q(-8, 8));
          n.vx = (a - e) / s + Q(-90, 90);
          n.vy = (o - t) / s - 0.5 * 1100 * s + Q(-90, 60);
          A(n);
        }
        for (let n = 0; n < 4; n++) {
          let n = T(e, t, i.flowers);
          n.vx = Q(-160, 160);
          n.vy = -Q(120, 300);
          A(n);
        }
        window.dispatchEvent(new CustomEvent(ra, { detail: 1 }));
        return;
      }
      if (f === "final") {
        for (let n = 0; n < 9; n++) {
          let n = Q(Math.PI * 1.1, Math.PI * 1.9);
          let r = Q(60, 170);
          let i = E(e, t);
          i.vx = Math.cos(n) * r;
          i.vy = Math.sin(n) * r;
          A(i);
        }
        return;
      }
      let r = Math.round(26 * n) + 8;
      for (let n = 0; n < r; n++) {
        let n = Q(0, Math.PI * 2);
        let r = Q(120, 460);
        let a;
        a = f === "venue" ? O(e, t) : (f === "memories" || f === "portrait" || f === "opening") ? (Math.random() < 0.55 ? D(e, t, Q(10, 22)) : T(e, t, i.roses)) : f === "events" ? T(e, t, i.marigold) : T(e, t);
        a.vx = Math.cos(n) * r;
        a.vy = Math.sin(n) * r - 120;
        if (a.kind === "sparkle") a.life = Q(0.7, 1.4);
        A(a);
      }
    };

    let F = e => {
      if (e.target instanceof Element && (e.target.closest("button,a,input,[role=dialog]") || e.target.closest(".event-dialog"))) return;
      ne(e.clientX, e.clientY);
      B();
    };

    let re = () => {
      ee(true);
      B();
    };

    let I = e => {
      let t = e.target instanceof Element && e.target.closest(".gold-button,.final-save");
      if (!t) return;
      let n = t.getBoundingClientRect();
      for (let e = 0; e < 22; e++) {
        let e = Math.random() < 0.5 ? D(n.left + n.width / 2, n.top + n.height / 2) : T(n.left + n.width / 2, n.top, i.flowers);
        let t = Q(Math.PI * 1.05, Math.PI * 1.95);
        let r = Q(150, 420);
        e.vx = Math.cos(t) * r;
        e.vy = Math.sin(t) * r;
        A(e);
      }
      B();
    };

    let L = null;
    let R = e => {
      if (e.pointerType === "touch") return;
      if (g > -999) {
        v = v * 0.5 + (e.clientX - g) * 30;
        y = y * 0.5 + (e.clientY - _) * 30;
        b += Math.hypot(e.clientX - g, e.clientY - _);
      }
      g = e.clientX;
      _ = e.clientY;
      if (b > 34) {
        b = 0;
        let e = D(g + Q(-4, 4), _ + Q(-4, 4), Q(7, 13));
        e.vy = Q(10, 40);
        e.life = Q(0.45, 0.8);
        A(e);
      }
      let t = e.target instanceof Element ? e.target.closest("[data-tilt]") : null;
      if (L && L !== t) {
        L.style.rotate = "";
        L = null;
      }
      if (t) {
        let n = t.getBoundingClientRect();
        let r = (e.clientX - n.left) / n.width - 0.5;
        let i = (e.clientY - n.top) / n.height - 0.5;
        let a = Math.min(1, Math.hypot(r, i) * 2) * Number(t.dataset.tilt || 7);
        t.style.rotate = `${(-i).toFixed(3)} ${r.toFixed(3)} 0 ${a.toFixed(2)}deg`;
        L = t;
      }
      B();
    };

    let z = () => {
      g = _ = -999;
      if (L) {
        L.style.rotate = "";
        L = null;
      }
    };

    function B() {
      if (u && !document.hidden && !c) {
        c = requestAnimationFrame(V);
      }
    }

    function V(e) {
      c = 0;
      let t = l ? Math.min((e - l) / 1e3, 0.05) : 1 / 60;
      l = e;
      let i = M[f] ?? M.opening;
      let u = f === "couple" ? j() : null;
      let m = (e - p) / 1e3;
      for (h += i.rate * S() * Math.max(0, ea.presence) * Math.min(1, m / 0.6 + 0.3) * t; h >= 1;) {
        --h;
        A(i.make(a, o));
      }
      let b = (scrollY - x) * (1 - Math.exp(-t * 1e3 / 190));
      x += b;
      v *= Math.exp(-t * 5);
      y *= Math.exp(-t * 5);
      r.setTransform(1, 0, 0, 1, 0, 0);
      r.clearRect(0, 0, canvas.width, canvas.height);
      let C = 0;
      for (let e = d.length - 1; e >= 0; e--) {
        let n = d[e];
        if (n.delay > 0) {
          n.delay -= t;
          continue;
        }
        n.age += t;
        if (n.kind === "grain") {
          if (n.rest) {
            C++;
            if (!u || n.age > 9) {
              d.splice(e, 1);
              continue;
            }
            n.x = u.x + n.u * u.w;
            n.y = u.y + n.v * u.h;
          } else {
            n.py = n.y;
            n.vy = Math.min(n.vy + 1100 * t, 950);
            n.vx *= Math.exp(-t * 0.4);
            n.x += n.vx * t;
            n.y += n.vy * t;
            n.rot += n.vr * t;
            if (u && n.vy > 0) {
              let e = (n.x - u.x) / u.w;
              let t = n.bounced ? null : sa(e);
              let r = t => {
                n.rest = true;
                n.age = 0;
                n.u = e;
                n.v = t;
                n.vr = 0;
              };
              if (t !== null && n.py < u.y + t * u.h && n.y >= u.y + t * u.h) {
                if (n.stick) r(t + Q(0, 0.035));
                else {
                  n.bounced = true;
                  n.vy *= -0.28;
                  n.vx += Q(-120, 120);
                }
              } else if (e > 0.17 && e < 0.85 && n.y >= u.y + la * u.h && n.py < u.y + la * u.h) {
                r(la + Q(-0.025, 0.02));
              }
            }
          }
        } else {
          if (n.kind === "sparkle") {
            n.vx *= Math.exp(-t * 3);
            n.vy = n.vy * Math.exp(-t * 3) + 12 * t;
          } else {
            n.vx *= Math.exp(-t * 1.3);
            n.vy += (n.term - n.vy) * Math.min(1, t * 1.6);
            n.y -= b * (n.kind === "ember" ? 0.15 : 0.3);
          }
          if (g > -999 && n.kind !== "sparkle") {
            let e = n.x - g;
            let r = n.y - _;
            let i = e * e + r * r;
            if (i < 16e3) {
              let a = (1 - i / 16e3) * Math.min(1, t * 7);
              n.vx += (v - n.vx) * a * 0.7 + e * a * 2;
              n.vy += (y - n.vy) * a * 0.5 + r * a * 2;
              n.vr += v * a * 0.002;
            }
          }
          let e = n.kind === "sparkle" ? 0 : Math.sin(n.age * n.swayF + n.phase) * n.swayA;
          n.x += (n.vx + e) * t;
          n.y += n.vy * t;
          n.rot += n.vr * t;
          n.flip += n.vf * t;
        }
        if (n.age > n.life || n.y > o + 60 || n.y < -o || n.x < -120 || n.x > a + 120 || (n.kind === "ember" && n.y < -30)) {
          d.splice(e, 1);
          continue;
        }
        let i = 1;
        if (n.kind === "sparkle") {
          i = Math.sin(Math.min(1, n.age / n.life) * Math.PI) * (0.75 + 0.25 * Math.sin(n.age * 18 + n.phase));
        } else if (n.kind === "ember") {
          i = Math.min(1, n.age * 2) * (1 - n.age / n.life) * (0.7 + 0.3 * Math.sin(n.age * 9 + n.phase));
        } else if (n.rest) {
          i = n.age > 8 ? 9 - n.age : 1;
        } else if (n.alpha) {
          i = n.alpha * Math.min(1, n.age * 1.5);
        }
        let c = n.size * s / n.s.max;
        let l = Math.cos(n.rot);
        let f = Math.sin(n.rot);
        let p = n.kind === "flower" ? 0.25 + 0.75 * Math.abs(Math.cos(n.flip)) : 1;
        r.globalAlpha = Math.max(0, i);
        r.setTransform(l * p * c, f * p * c, -f * c, l * c, n.x * s, n.y * s);
        r.drawImage(n.s.c, -n.s.c.width / 2, -n.s.c.height / 2);
      }
      if (C > 520) {
        let e = C - 520;
        for (let t = 0; t < d.length && e > 0; t++) {
          if (d[t].rest) {
            d.splice(t--, 1);
            e--;
          }
        }
      }
      r.globalAlpha = 1;
      if (d.length || i.rate > 0) B();
      else l = 0;
    }

    let H = () => {
      if (document.hidden) {
        cancelAnimationFrame(c);
        c = 0;
        l = 0;
      } else {
        B();
      }
    };

    C();
    window.addEventListener("resize", C);
    window.addEventListener(ta, P);
    window.addEventListener(na, re);
    window.addEventListener("click", F);
    window.addEventListener("click", I, true);
    window.addEventListener("pointermove", R, { passive: true });
    document.documentElement.addEventListener("pointerleave", z);
    document.addEventListener("visibilitychange", H);
    P();
  }

  // --- Scroll Parallax & Film Stage Engine ---
  function initFilmStage() {
    let r = document.getElementById("invitation-top");
    if (!r) return;
    let a = r.querySelector(".film-stage");
    let o = {}, s = {}, l = {};

    r.querySelectorAll("[data-layer]").forEach(e => {
      let t = e.dataset.layer;
      o[t] = e;
      let sceneEl = e.closest("[data-scene]");
      if (sceneEl) l[t] = sceneEl.dataset.scene;
    });

    r.querySelectorAll("[data-scene]").forEach(e => {
      s[e.dataset.scene] = e;
    });

    let u = Array.from(r.querySelectorAll(".event-invitation"));
    let d = Array.from(r.querySelectorAll("[data-air-depth]")).map(e => ({
      node: e,
      depth: Number(e.dataset.airDepth)
    }));

    let f = {}, p = new Set(), m = new WeakMap();

    let h = (e, t, n) => {
      if (!e) return;
      let r = m.get(e);
      if (!r) {
        r = {};
        m.set(e, r);
      }
      if (r[t] !== n) {
        r[t] = n;
        e.style[t] = n;
      }
    };

    let g = (e, t, n) => {
      if (!e) return;
      let r = String(n);
      if (e.getAttribute(t) !== r) e.setAttribute(t, r);
    };

    let _ = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = _.matches;

    let v = true, y = 0, b = 0, x = scrollY, S = scrollY, C = -1;
    let w = innerWidth, T = innerHeight;
    let E = "wheel", D = 0, O = 0, k = 0, A = 0, j;
    let maxScroll = 1;

    let M = () => {
      if (v && !document.hidden && !y) {
        y = requestAnimationFrame(V);
      }
    };

    let N = () => {
      w = innerWidth;
      T = a ? a.clientHeight : innerHeight;
      maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      S = scrollY;
      C = -1;
      M();
    };

    let ee = () => {
      S = scrollY;
      M();
    };

    let te = () => { E = "wheel"; };
    let P = () => { E = "touch"; };

    let ne = () => {
      reduced = _.matches;
      if (reduced) r.classList.add("reduced");
      else r.classList.remove("reduced");
      D = O = 0;
      C = -1;
      M();
    };

    let F = e => {
      if (e.pointerType === "touch" || reduced || S / maxScroll > 0.13) return;
      D = e.clientX / w * 2 - 1;
      O = e.clientY / T * 2 - 1;
      M();
    };

    let re = () => {
      D = O = 0;
      M();
    };

    let I = e => {
      if (e.pointerType !== "touch" || reduced || S / maxScroll > 0.1 || (e.target instanceof Element && e.target.closest("button,a"))) return;
      D = (e.clientX / w * 2 - 1) * 1.5;
      O = (e.clientY / T * 2 - 1) * 1.5;
      clearTimeout(j);
      j = setTimeout(re, 900);
      M();
    };

    let L = () => {
      g(r, "data-page-visible", !document.hidden);
      if (document.hidden) {
        cancelAnimationFrame(y);
        y = 0;
        b = 0;
      } else {
        S = scrollY;
        M();
      }
    };

    let R = (e, t, n, r = 1, i = 0, a = 1) => {
      if (!p.has(l[e])) return;
      let s = o[e];
      if (s) {
        h(s, "transform", `translate3d(${(t * w / 100).toFixed(3)}px,${(n * T / 100).toFixed(3)}px,0) scale(${r.toFixed(4)}) rotate(${i.toFixed(3)}deg)`);
        h(s, "opacity", a.toFixed(4));
      }
    };

    let z = (e, t, r, i, a, o) => {
      let c = s[e];
      if (!c) return;
      let l = (1 - fa($(o, t, r))) * 100 - fa($(o, i, a)) * 105;
      let u = o >= t - 0.025 && o <= a + 0.015;
      if (e === "opening") { l = 0; u = o < 0.195; }
      if (e === "final") { l = (1 - fa($(o, t, r))) * 100; u = o >= t - 0.025; }
      if (reduced) { u = o >= t && (e === "final" || o < a); l = 0; }
      g(c, "data-active", u);
      h(c, "visibility", u ? "visible" : "hidden");
      let d = u && Math.abs(l) < 15;
      h(c, "pointerEvents", d ? "auto" : "none");
      g(c, "aria-hidden", !d);
      if (u) {
        p.add(e);
        f[e] = l;
        h(c, "transform", `translate3d(0,${(l * T / 100).toFixed(3)}px,0)`);
      }
    };

    let B = e => {
      let t = reduced;
      p.clear();
      z("opening", 0, 0, 0.15, 0.255, e);
      z("gate", 0.105, 0.175, 0.255, 0.315, e);
      z("events", 0.265, 0.315, 0.412, 0.468, e);
      z("couple", 0.413, 0.462, 0.516, 0.573, e);
      z("portrait", 0.516, 0.575, 0.64, 0.69, e);
      z("venue", 0.645, 0.69, 0.735, 0.791, e);
      z("blessing", 0.744, 0.792, 0.83, 0.878, e);
      z("memories", 0.837, 0.877, 0.932, 0.978, e);
      z("final", 0.93, 0.99, 1, 1.01, e);

      let r = "opening";
      for (let e of ["opening", "gate", "events", "couple", "portrait", "venue", "blessing", "memories", "final"]) {
        if (p.has(e) && Math.abs(f[e]) <= 50) r = e;
      }
      ea.presence = Math.max(0, 1 - Math.abs(f[r] ?? 0) / 100);
      if (ea.scene !== r) {
        ea.scene = r;
        window.dispatchEvent(new Event(ta));
      }

      R("blessing-controls", 0, 0, 1, 0, $(e, 0.47, 0.49));
      R("opening-title", 0, t ? 0 : -$(e, 0.012, 0.115) * 83, 1, 0, 1 - $(e, 0.055, 0.11));
      R("opening-temple", 0, t ? 0 : 85 - $(e, 0, 0.235) * 225, t ? 1 : 0.91 + $(e, 0, 0.19) * 0.28);
      R("opening-hint", 0, 0, 1, 0, 1 - $(e, 0, 0.035));
      R("opening-atmosphere", 0, t ? 0 : -$(e, 0, 0.15) * 28, 1, 0, 1 - fa($(e, 0.065, 0.16)));
      R("invitation-words", 0, t ? 0 : 10 - $(e, 0.13, 0.25) * 14, 1, 0, $(e, 0.145, 0.178));
      R("gate-frame", 0, t ? 0 : -$(e, 0.18, 0.265) * 7, 1 + $(e, 0.15, 0.26) * 0.05);
      R("event-window", 0, t ? 0 : 3 - $(e, 0.3, 0.43) * 6, t ? 1 : 0.99 + $(e, 0.3, 0.43) * 0.02);
      R("event-surround", 0, t ? 0 : 2 - $(e, 0.27, 0.43) * 4);

      if (p.has("events")) {
        let t = fa($(e, 0.35, 0.385));
        u.forEach((e, n) => {
          let r = n !== (t < 0.5 ? 0 : 1);
          if (e.inert !== r) e.inert = r;
        });
        h(o["event-reel"], "transform", `translate3d(${(-t * 50).toFixed(4)}%,0,0)`);
        h(o["pip-one"], "opacity", (1 - t * 0.65).toFixed(4));
        h(o["pip-two"], "opacity", (0.35 + t * 0.65).toFixed(4));
      }

      R("couple-temple", 0, t ? 0 : 16 - $(e, 0.437, 0.54) * 35, 1 + $(e, 0.44, 0.53) * 0.1);
      R("illustrated-couple", 0, t ? 0 : 55 - $(e, 0.44, 0.525) * 72, t ? 1 : 0.8 + $(e, 0.44, 0.525) * 0.23);
      R("portrait-intro", 0, t ? 0 : 7 - $(e, 0.566, 0.64) * 10, 1, 0, $(e, 0.551, 0.582));
      R("gold-portrait", 0, t ? 0 : 43 - $(e, 0.572, 0.625) * 48, t ? 1 : 0.9 + $(e, 0.58, 0.64) * 0.1);
      R("temple-procession", 0, t ? 0 : 45 - $(e, 0.61, 0.665) * 61, 1.1);
      R("venue-copy", 0, t ? 0 : 16 - $(e, 0.674, 0.737) * 29, 1, 0, $(e, 0.67, 0.695));
      R("venue-temple", 0, t ? 0 : 35 - $(e, 0.674, 0.745) * 47, 1);
      R("blessing-copy", 0, t ? 0 : 14 - $(e, 0.773, 0.833) * 21, 1, 0, $(e, 0.77, 0.795));
      R("countdown-heading", 0, t ? 0 : -$(e, 0.885, 0.927) * 53, 1, 0, 1 - $(e, 0.912, 0.93));
      R("memories-heading", 0, t ? 0 : 17 - $(e, 0.886, 0.932) * 25, 1, 0, $(e, 0.884, 0.903) * (1 - $(e, 0.934, 0.95)));

      if (p.has("memories")) {
        let n = fa($(e, 0.892, 0.936));
        let r = fa($(e, 0.936, 0.974));
        [[-36, 28, -19], [35, 37, 17], [-24, 62, 12], [28, 70, -14], [4, 83, -8]].forEach(([i, a, o], s) => {
          R(`memory-${s}`, t ? 0 : i * (1 - n) + Math.sin(s * 2) * r * 60, t ? 0 : a * (1 - n) + 14 * n - r * (50 + s * 12), t ? 0.4 : 0.58 + n * 0.15 - r * 0.33, o * (1 - n) + s * 6 * n - r * o, $(e, 0.881 + s * 0.003, 0.9 + s * 0.003) * (1 - r));
        });
      }

      R("final-landscape", 0, t ? 0 : 12 - $(e, 0.94, 1) * 12, 1.02);
      R("final-words", 0, t ? 0 : 12 - $(e, 0.96, 0.995) * 12, 1, 0, $(e, 0.955, 0.985));
    };

    function V(e) {
      y = 0;
      let i = b ? Math.min(e - b, 64) : 16.67;
      b = e;
      let a = reduced ? 1 : 1 - Math.exp(-i / (E === "touch" ? 80 : 190));
      x += (S - x) * a;
      if (Math.abs(S - x) < 0.12) x = S;
      let o = da(x / maxScroll);
      let s = x === S;
      g(r, "data-scroll-moving", !s);
      if (C !== x) {
        C = x;
        B(o);
      }
      if (p.has("opening") && !reduced) {
        let e = 1 - Math.exp(-i / 240);
        k += (D - k) * e;
        A += (O - A) * e;
        if (Math.abs(D - k) < 0.001) k = D;
        if (Math.abs(O - A) < 0.001) A = O;
        d.forEach(({ node: e, depth: t }) => {
          h(e, "transform", `translate3d(${(k * t).toFixed(2)}px,${(A * t * 0.6).toFixed(2)}px,0)`);
        });
      }
      let c = p.has("opening") && !reduced && (k !== D || A !== O);
      if (!s || c) M();
      else b = 0;
    }

    window.addEventListener("resize", N);
    window.addEventListener("scroll", ee, { passive: true });
    window.addEventListener("wheel", te, { passive: true });
    window.addEventListener("touchstart", P, { passive: true });
    window.addEventListener("pointermove", F, { passive: true });
    window.addEventListener("pointerdown", I, { passive: true });
    document.documentElement.addEventListener("pointerleave", re);
    document.addEventListener("visibilitychange", L);
    _.addEventListener("change", ne);

    // Initial check
    N();

    // Loader hide after images decode
    let imgs = Array.from(r.querySelectorAll("img"));
    Promise.allSettled(imgs.map(e => e.decode ? e.decode() : Promise.resolve())).then(() => {
      r.classList.add("ready");
      let loader = r.querySelector(".film-loader");
      if (loader) loader.setAttribute("aria-hidden", "true");
      N();
    }).catch(() => {
      r.classList.add("ready");
      N();
    });

    // Fallback timer for loader
    setTimeout(() => {
      r.classList.add("ready");
      N();
    }, 1500);
  }

  // --- Countdown Component ---
  function initCountdown() {
    let container = document.querySelector(".countdown");
    if (!container) return;

    let intervalId = null;

    function update() {
      let now = Date.now();
      let diff = Math.max(0, pa - now);

      if (diff <= 0) {
        container.innerHTML = `
          <div class="countdown-celebration" style="text-align:center;width:100%;padding:12px 16px;">
            <h3 style="font-family:Cormorant,Georgia,serif;font-size:clamp(26px,3.8vw,36px);color:var(--wine,#55313c);margin:0 0 8px;font-weight:500;letter-spacing:-0.01em;">Our Forever Begins ❤️</h3>
            <p style="font-family:Jost,sans-serif;font-size:clamp(14px,1.6vw,17px);color:#7d684b;line-height:1.5;margin:0;max-width:480px;margin-inline:auto;">Today marks the beginning of a beautiful journey. Thank you for being part of our celebration.</p>
          </div>
        `;
        if (intervalId) clearInterval(intervalId);
        return;
      }

      let d = Math.floor(diff / (1000 * 60 * 60 * 24));
      let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      let m = Math.floor((diff / (1000 * 60)) % 60);
      let s = Math.floor((diff / 1000) % 60);
      let digits = [d, h, m, s].map(v => String(v).padStart(2, "0"));

      let digitsEls = container.querySelectorAll(".count-digit");
      if (digitsEls.length === 4) {
        digitsEls.forEach((el, idx) => {
          if (el.textContent !== digits[idx]) {
            el.textContent = digits[idx];
          }
        });
      }
    }

    update();
    intervalId = setInterval(update, 1000);
  }

  // --- Blessing Counter & Button ---
  function initBlessings() {
    let count = 0;
    let akshantaluBtn = document.querySelector(".akshantalu-button");
    let tapHint = document.querySelector(".couple-scene .tap-hint");

    if (akshantaluBtn) {
      akshantaluBtn.addEventListener("click", () => {
        window.dispatchEvent(new Event(na));
      });
    }

    window.addEventListener(ra, e => {
      count += (e.detail || 1);
      if (tapHint) {
        tapHint.innerHTML = `Tap anywhere to bless the couple &middot; <b>${count}</b> ${count === 1 ? "blessing" : "blessings"}`;
      }
    });
  }

  // --- Event Details Dialog ---
  function initDialog() {
    let backdrop = document.getElementById("event-dialog-backdrop");
    let container = document.getElementById("event-dialog-container");
    let content = document.getElementById("event-dialog-content");
    let closeBtn = document.getElementById("event-dialog-close");

    let titleEl = document.getElementById("dialog-title");
    let copyEl = document.getElementById("dialog-copy");
    let datetimeEl = document.getElementById("dialog-datetime");
    let venueEl = document.getElementById("dialog-venue");

    function openDialog(idx) {
      let event = ma[idx];
      if (!event) return;

      titleEl.textContent = event.title;
      copyEl.textContent = event.copy;
      datetimeEl.innerHTML = `${event.date}<br/>${event.time}`;
      venueEl.textContent = event.venue;

      backdrop.style.display = "block";
      container.style.display = "flex";

      requestAnimationFrame(() => {
        backdrop.style.opacity = "1";
        content.style.opacity = "1";
        content.style.transform = "scale(1)";
      });
    }

    function closeDialog() {
      backdrop.style.opacity = "0";
      content.style.opacity = "0";
      content.style.transform = "scale(0.95)";

      setTimeout(() => {
        backdrop.style.display = "none";
        container.style.display = "none";
      }, 200);
    }

    if (closeBtn) closeBtn.addEventListener("click", closeDialog);
    if (backdrop) backdrop.addEventListener("click", closeDialog);

    window.addEventListener("keydown", e => {
      if (e.key === "Escape" && container.style.display === "flex") {
        closeDialog();
      }
    });

    // Wire up event details button:
    let eventBtn = document.querySelector(".event-reel article button.gold-button");
    if (eventBtn) eventBtn.addEventListener("click", () => openDialog(0));
  }

  // --- Initialize Everything On DOM Ready ---
  function init() {
    let canvas = document.querySelector("canvas.celebration-layer");
    initCelebration(canvas);
    initFilmStage();
    initCountdown();
    initBlessings();
    initDialog();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
