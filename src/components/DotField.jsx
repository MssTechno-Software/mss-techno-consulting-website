import { useEffect, useRef, memo } from "react";

const TWO_PI = Math.PI * 2;

const DotField = memo(
  ({
    /* =====================================================
       DOT SETTINGS
    ====================================================== */

    dotRadius = 2,
    dotSpacing = 16,

    /* =====================================================
       CURSOR — DOTS ONLY
    ====================================================== */

    cursorRadius = 500,
    cursorForce = 0.1,
    bulgeOnly = true,
    bulgeStrength = 67,

    /* =====================================================
       OPTIONAL EFFECTS
    ====================================================== */

    sparkle = false,
    waveAmplitude = 0,

    /* =====================================================
       MSS TECHNO COLORS
    ====================================================== */

    gradientFrom = "rgba(107, 45, 26, 0.62)",
    gradientTo = "rgba(77, 139, 79, 0.52)",
    glowColor = "#6B2D1A",
    className = "",
    ...rest
  }) => {
    const canvasRef = useRef(null);

    const dotsRef = useRef([]);

    const mouseRef = useRef({
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      speed: 0,
    });

    const rafRef = useRef(null);

    const sizeRef = useRef({
      w: 0,
      h: 0,
      offsetX: 0,
      offsetY: 0,
    });

    const engagement = useRef(0);

    const propsRef = useRef({});
    const rebuildRef = useRef(null);

    /* =====================================================
       CURRENT PROPS
    ====================================================== */

    propsRef.current = {
      dotRadius,
      dotSpacing,
      cursorRadius,
      cursorForce,
      bulgeOnly,
      bulgeStrength,
      sparkle,
      waveAmplitude,
      gradientFrom,
      gradientTo,
    };

    /* =====================================================
       CANVAS
    ====================================================== */

    useEffect(() => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const ctx = canvas.getContext("2d", {
        alpha: true,
      });

      if (!ctx) return;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      let resizeTimer;

      /* ===================================================
         RESIZE
      ================================================== */

      function resize() {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(
          doResize,
          100
        );
      }

      /* ===================================================
         SET CANVAS SIZE
      ================================================== */

      function doResize() {
        const parent =
          canvas.parentElement;

        if (!parent) return;

        const rect =
          parent.getBoundingClientRect();

        const w = rect.width;
        const h = rect.height;

        canvas.width = w * dpr;
        canvas.height = h * dpr;

        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;

        ctx.setTransform(
          dpr,
          0,
          0,
          dpr,
          0,
          0
        );

        sizeRef.current = {
          w,
          h,
          offsetX:
            rect.left +
            window.scrollX,
          offsetY:
            rect.top +
            window.scrollY,
        };

        buildDots(w, h);
      }

      /* ===================================================
         BUILD DOT GRID
      ================================================== */

      function buildDots(w, h) {
        const p = propsRef.current;

        const step =
          p.dotRadius +
          p.dotSpacing;

        const cols =
          Math.floor(w / step);

        const rows =
          Math.floor(h / step);

        const padX =
          (w % step) / 2;

        const padY =
          (h % step) / 2;

        const dots =
          new Array(rows * cols);

        let index = 0;

        for (
          let row = 0;
          row < rows;
          row++
        ) {
          for (
            let col = 0;
            col < cols;
            col++
          ) {
            const ax =
              padX +
              col * step +
              step / 2;

            const ay =
              padY +
              row * step +
              step / 2;

            dots[index++] = {
              ax,
              ay,

              sx: ax,
              sy: ay,

              vx: 0,
              vy: 0,

              x: ax,
              y: ay,
            };
          }
        }

        dotsRef.current = dots;
      }

      /* ===================================================
         MOUSE POSITION
      ================================================== */

      function onMouseMove(e) {
        const s =
          sizeRef.current;

        mouseRef.current.x =
          e.pageX - s.offsetX;

        mouseRef.current.y =
          e.pageY - s.offsetY;
      }

      /* ===================================================
         MOUSE SPEED

         ORIGINAL REACT BITS STYLE
      ================================================== */

      function updateMouseSpeed() {
        const m =
          mouseRef.current;

        const dx =
          m.prevX - m.x;

        const dy =
          m.prevY - m.y;

        const distance =
          Math.sqrt(
            dx * dx +
            dy * dy
          );

        m.speed +=
          (distance - m.speed) *
          0.5;

        if (
          m.speed < 0.001
        ) {
          m.speed = 0;
        }

        m.prevX = m.x;
        m.prevY = m.y;
      }

      const speedInterval =
        setInterval(
          updateMouseSpeed,
          20
        );

      let frameCount = 0;

      /* ===================================================
         ANIMATION
      ================================================== */

      function tick() {
        frameCount++;

        const dots =
          dotsRef.current;

        const mouse =
          mouseRef.current;

        const {
          w,
          h,
        } = sizeRef.current;

        const p =
          propsRef.current;

        const length =
          dots.length;

        const time =
          frameCount * 0.02;

        /* ================================================
           ORIGINAL REACT BITS ENGAGEMENT
        ================================================= */

        const targetEngagement =
          Math.min(
            mouse.speed / 2.8,
            1
          );

        engagement.current +=
          (
            targetEngagement -
            engagement.current
          ) * 0.14;

        if (
          engagement.current <
          0.001
        ) {
          engagement.current = 0;
        }

        const eng =
          engagement.current;

        /* ================================================
           CLEAR
        ================================================= */

        ctx.clearRect(
          0,
          0,
          w,
          h
        );

        /* ================================================
           MSS TECHNO DOT GRADIENT
        ================================================= */

        const gradient =
          ctx.createLinearGradient(
            0,
            0,
            w,
            h
          );

        gradient.addColorStop(
          0,
          p.gradientFrom
        );

        gradient.addColorStop(
          1,
          p.gradientTo
        );

        ctx.fillStyle =
          gradient;

        /* ================================================
           CURSOR AREA
        ================================================= */

        const currentCursorRadius =
          p.cursorRadius;

        const cursorRadiusSquared =
          currentCursorRadius *
          currentCursorRadius;

        const radius =
          p.dotRadius / 2;

        ctx.beginPath();

        /* ================================================
           DOTS
        ================================================= */

        for (
          let i = 0;
          i < length;
          i++
        ) {
          const dot =
            dots[i];

          const dx =
            mouse.x -
            dot.ax;

          const dy =
            mouse.y -
            dot.ay;

          const distanceSquared =
            dx * dx +
            dy * dy;

          /* ==============================================
             CURSOR → DOT BULGE

             NO CIRCLE
             NO GLOW
             ONLY DOT ANIMATION
          ============================================== */

          if (
            distanceSquared <
            cursorRadiusSquared &&
            eng > 0.01
          ) {
            const distance =
              Math.sqrt(
                distanceSquared
              );

            if (
              p.bulgeOnly
            ) {
              const t =
                1 -
                distance /
                currentCursorRadius;

              const push =
                t *
                t *
                p.bulgeStrength *
                eng;

              const angle =
                Math.atan2(
                  dy,
                  dx
                );

              dot.sx +=
                (
                  dot.ax -
                  Math.cos(angle) *
                  push -
                  dot.sx
                ) * 0.28;

              dot.sy +=
                (
                  dot.ay -
                  Math.sin(angle) *
                  push -
                  dot.sy
                ) * 0.28;
            } else {
              const angle =
                Math.atan2(
                  dy,
                  dx
                );

              const safeDistance =
                Math.max(
                  distance,
                  1
                );

              const move =
                (500 /
                  safeDistance) *
                (
                  mouse.speed *
                  p.cursorForce
                );

              dot.vx +=
                Math.cos(angle) *
                -move;

              dot.vy +=
                Math.sin(angle) *
                -move;
            }
          } else if (
            p.bulgeOnly
          ) {
            /* ============================================
               SMOOTH RETURN
            ============================================ */

            dot.sx +=
              (
                dot.ax -
                dot.sx
              ) * 0.16;

            dot.sy +=
              (
                dot.ay -
                dot.sy
              ) * 0.16;
          }

          /* ==============================================
             PHYSICS MODE
          ============================================== */

          if (
            !p.bulgeOnly
          ) {
            dot.vx *= 0.9;
            dot.vy *= 0.9;

            dot.x =
              dot.ax +
              dot.vx;

            dot.y =
              dot.ay +
              dot.vy;

            dot.sx +=
              (
                dot.x -
                dot.sx
              ) * 0.1;

            dot.sy +=
              (
                dot.y -
                dot.sy
              ) * 0.1;
          }

          /* ==============================================
             DRAW POSITION
          ============================================== */

          let drawX =
            dot.sx;

          let drawY =
            dot.sy;

          /* ==============================================
             OPTIONAL WAVE
          ============================================== */

          if (
            p.waveAmplitude >
            0
          ) {
            drawY +=
              Math.sin(
                dot.ax *
                0.03 +
                time
              ) *
              p.waveAmplitude;

            drawX +=
              Math.cos(
                dot.ay *
                0.03 +
                time *
                0.7
              ) *
              p.waveAmplitude *
              0.5;
          }

          /* ==============================================
             SPARKLE
          ============================================== */

          if (
            p.sparkle
          ) {
            const hash =
              (
                (
                  i *
                  2654435761
                ) ^
                (frameCount >> 3)
              ) >>> 0;

            if (
              hash % 100 <
              3
            ) {
              ctx.moveTo(
                drawX +
                radius *
                1.8,
                drawY
              );

              ctx.arc(
                drawX,
                drawY,
                radius *
                1.8,
                0,
                TWO_PI
              );
            } else {
              ctx.moveTo(
                drawX +
                radius,
                drawY
              );

              ctx.arc(
                drawX,
                drawY,
                radius,
                0,
                TWO_PI
              );
            }
          } else {
            ctx.moveTo(
              drawX +
              radius,
              drawY
            );

            ctx.arc(
              drawX,
              drawY,
              radius,
              0,
              TWO_PI
            );
          }
        }

        /* ================================================
           DRAW ONLY DOTS
        ================================================= */

        ctx.fill();

        rafRef.current =
          requestAnimationFrame(
            tick
          );
      }

      /* ===================================================
         START
      ================================================== */

      doResize();

      window.addEventListener(
        "resize",
        resize
      );

      window.addEventListener(
        "mousemove",
        onMouseMove,
        {
          passive: true,
        }
      );

      rafRef.current =
        requestAnimationFrame(
          tick
        );

      /* ===================================================
         REBUILD
      ================================================== */

      rebuildRef.current =
        () => {
          const {
            w,
            h,
          } = sizeRef.current;

          if (
            w > 0 &&
            h > 0
          ) {
            buildDots(
              w,
              h
            );
          }
        };

      /* ===================================================
         CLEANUP
      ================================================== */

      return () => {
        cancelAnimationFrame(
          rafRef.current
        );

        clearInterval(
          speedInterval
        );

        clearTimeout(
          resizeTimer
        );

        window.removeEventListener(
          "resize",
          resize
        );

        window.removeEventListener(
          "mousemove",
          onMouseMove
        );
      };
    }, []);

    /* =====================================================
       REBUILD ON DOT SETTINGS CHANGE
    ====================================================== */

    useEffect(() => {
      rebuildRef.current?.();
    }, [
      dotRadius,
      dotSpacing,
    ]);

    /* =====================================================
       RENDER
    ====================================================== */

    return (
      <div
        {...rest}
        className={`
          relative
          h-full
          w-full
          overflow-hidden
          ${className}
        `}
      >
        <canvas
          ref={canvasRef}
          className="
            absolute
            inset-0
            block
            h-full
            w-full
          "
        />
      </div>
    );
  }
);

DotField.displayName =
  "DotField";

export default DotField;