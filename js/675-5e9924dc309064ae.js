(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [675],
  {
    8872: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return m;
          },
        });
      let i = r(8754),
        n = r(1757),
        o = n._(r(7294)),
        l = i._(r(2636)),
        s = r(5471),
        a = r(3735),
        u = r(3341);
      r(4210);
      let d = i._(r(7746)),
        c = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function f(e, t, r, i, n, o) {
        let l = null == e ? void 0 : e.src;
        if (!e || e["data-loaded-src"] === l) return;
        e["data-loaded-src"] = l;
        let s = "decode" in e ? e.decode() : Promise.resolve();
        s.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (("blur" === t && n(!0), null == r ? void 0 : r.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let i = !1,
                n = !1;
              r.current({
                ...t,
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => i,
                isPropagationStopped: () => n,
                persist: () => {},
                preventDefault: () => {
                  (i = !0), t.preventDefault();
                },
                stopPropagation: () => {
                  (n = !0), t.stopPropagation();
                },
              });
            }
            (null == i ? void 0 : i.current) && i.current(e);
          }
        });
      }
      function g(e) {
        let [t, r] = o.version.split("."),
          i = parseInt(t, 10),
          n = parseInt(r, 10);
        return i > 18 || (18 === i && n >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let p = (0, o.forwardRef)((e, t) => {
          let {
            src: r,
            srcSet: i,
            sizes: n,
            height: l,
            width: s,
            decoding: a,
            className: u,
            style: d,
            fetchPriority: c,
            placeholder: p,
            loading: m,
            unoptimized: h,
            fill: v,
            onLoadRef: b,
            onLoadingCompleteRef: w,
            setBlurComplete: y,
            setShowAltText: S,
            onLoad: _,
            onError: C,
            ...E
          } = e;
          return o.default.createElement("img", {
            ...E,
            ...g(c),
            loading: m,
            width: s,
            height: l,
            decoding: a,
            "data-nimg": v ? "fill" : "1",
            className: u,
            style: d,
            sizes: n,
            srcSet: i,
            src: r,
            ref: (0, o.useCallback)(
              (e) => {
                t &&
                  ("function" == typeof t
                    ? t(e)
                    : "object" == typeof t && (t.current = e)),
                  e &&
                    (C && (e.src = e.src), e.complete && f(e, p, b, w, y, h));
              },
              [r, p, b, w, y, C, h, t]
            ),
            onLoad: (e) => {
              let t = e.currentTarget;
              f(t, p, b, w, y, h);
            },
            onError: (e) => {
              S(!0), "blur" === p && y(!0), C && C(e);
            },
          });
        }),
        m = (0, o.forwardRef)((e, t) => {
          let r = (0, o.useContext)(u.ImageConfigContext),
            i = (0, o.useMemo)(() => {
              let e = c || r || a.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                i = e.deviceSizes.sort((e, t) => e - t);
              return { ...e, allSizes: t, deviceSizes: i };
            }, [r]),
            { onLoad: n, onLoadingComplete: f } = e,
            m = (0, o.useRef)(n);
          (0, o.useEffect)(() => {
            m.current = n;
          }, [n]);
          let h = (0, o.useRef)(f);
          (0, o.useEffect)(() => {
            h.current = f;
          }, [f]);
          let [v, b] = (0, o.useState)(!1),
            [w, y] = (0, o.useState)(!1),
            { props: S, meta: _ } = (0, s.getImgProps)(e, {
              defaultLoader: d.default,
              imgConf: i,
              blurComplete: v,
              showAltText: w,
            });
          return o.default.createElement(
            o.default.Fragment,
            null,
            o.default.createElement(p, {
              ...S,
              unoptimized: _.unoptimized,
              placeholder: _.placeholder,
              fill: _.fill,
              onLoadRef: m,
              onLoadingCompleteRef: h,
              setBlurComplete: b,
              setShowAltText: y,
              ref: t,
            }),
            _.priority
              ? o.default.createElement(
                  l.default,
                  null,
                  o.default.createElement("link", {
                    key: "__nimg-" + S.src + S.srcSet + S.sizes,
                    rel: "preload",
                    as: "image",
                    href: S.srcSet ? void 0 : S.src,
                    imageSrcSet: S.srcSet,
                    imageSizes: S.sizes,
                    crossOrigin: S.crossOrigin,
                    referrerPolicy: S.referrerPolicy,
                    ...g(S.fetchPriority),
                  })
                )
              : null
          );
        });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5471: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        r(4210);
      let i = r(7757),
        n = r(3735);
      function o(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e, t) {
        var r;
        let s,
          a,
          u,
          {
            src: d,
            sizes: c,
            unoptimized: f = !1,
            priority: g = !1,
            loading: p,
            className: m,
            quality: h,
            width: v,
            height: b,
            fill: w = !1,
            style: y,
            onLoad: S,
            onLoadingComplete: _,
            placeholder: C = "empty",
            blurDataURL: E,
            fetchPriority: j,
            layout: z,
            objectFit: P,
            objectPosition: x,
            lazyBoundary: O,
            lazyRoot: I,
            ...k
          } = e,
          { imgConf: M, showAltText: R, blurComplete: A, defaultLoader: N } = t,
          D = M || n.imageConfigDefault;
        if ("allSizes" in D) s = D;
        else {
          let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
            t = D.deviceSizes.sort((e, t) => e - t);
          s = { ...D, allSizes: e, deviceSizes: t };
        }
        let W = k.loader || N;
        delete k.loader, delete k.srcSet;
        let B = "__next_img_default" in W;
        if (B) {
          if ("custom" === s.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = W;
          W = (t) => {
            let { config: r, ...i } = t;
            return e(i);
          };
        }
        if (z) {
          "fill" === z && (w = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[z];
          e && (y = { ...y, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[z];
          t && !c && (c = t);
        }
        let F = "",
          L = l(v),
          G = l(b);
        if ("object" == typeof (r = d) && (o(r) || void 0 !== r.src)) {
          let e = o(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((a = e.blurWidth),
            (u = e.blurHeight),
            (E = E || e.blurDataURL),
            (F = e.src),
            !w)
          ) {
            if (L || G) {
              if (L && !G) {
                let t = L / e.width;
                G = Math.round(e.height * t);
              } else if (!L && G) {
                let t = G / e.height;
                L = Math.round(e.width * t);
              }
            } else (L = e.width), (G = e.height);
          }
        }
        let T = !g && ("lazy" === p || void 0 === p);
        (!(d = "string" == typeof d ? d : F) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((f = !0), (T = !1)),
          s.unoptimized && (f = !0),
          B && d.endsWith(".svg") && !s.dangerouslyAllowSVG && (f = !0),
          g && (j = "high");
        let V = l(h),
          U = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: P,
                  objectPosition: x,
                }
              : {},
            R ? {} : { color: "transparent" },
            y
          ),
          q =
            "blur" === C && E && !A
              ? {
                  backgroundSize: U.objectFit || "cover",
                  backgroundPosition: U.objectPosition || "50% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    'url("data:image/svg+xml;charset=utf-8,' +
                    (0, i.getImageBlurSvg)({
                      widthInt: L,
                      heightInt: G,
                      blurWidth: a,
                      blurHeight: u,
                      blurDataURL: E,
                      objectFit: U.objectFit,
                    }) +
                    '")',
                }
              : {},
          J = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: i,
              width: n,
              quality: o,
              sizes: l,
              loader: s,
            } = e;
            if (i) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: a, kind: u } = (function (e, t, r) {
                let { deviceSizes: i, allSizes: n } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let i; (i = e.exec(r)); i) t.push(parseInt(i[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: n.filter((t) => t >= i[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                if ("number" != typeof t) return { widths: i, kind: "w" };
                let o = [
                  ...new Set(
                    [t, 2 * t].map(
                      (e) => n.find((t) => t >= e) || n[n.length - 1]
                    )
                  ),
                ];
                return { widths: o, kind: "x" };
              })(t, n, l),
              d = a.length - 1;
            return {
              sizes: l || "w" !== u ? l : "100vw",
              srcSet: a
                .map(
                  (e, i) =>
                    s({ config: t, src: r, quality: o, width: e }) +
                    " " +
                    ("w" === u ? e : i + 1) +
                    u
                )
                .join(", "),
              src: s({ config: t, src: r, quality: o, width: a[d] }),
            };
          })({
            config: s,
            src: d,
            unoptimized: f,
            width: L,
            quality: V,
            sizes: c,
            loader: W,
          }),
          Y = {
            ...k,
            loading: T ? "lazy" : p,
            fetchPriority: j,
            width: L,
            height: G,
            decoding: "async",
            className: m,
            style: { ...U, ...q },
            sizes: J.sizes,
            srcSet: J.srcSet,
            src: J.src,
          },
          H = { unoptimized: f, priority: g, placeholder: C, fill: w };
        return { props: Y, meta: H };
      }
    },
    7757: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: i,
            blurHeight: n,
            blurDataURL: o,
            objectFit: l,
          } = e,
          s = i || t,
          a = n || r,
          u = o.startsWith("data:image/jpeg")
            ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
            : "";
        return s && a
          ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " +
              s +
              " " +
              a +
              "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" +
              (i && n ? "1" : "20") +
              "'/%3E" +
              u +
              "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" +
              o +
              "'/%3E%3C/svg%3E"
          : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" +
              ("contain" === l
                ? "xMidYMid"
                : "cover" === l
                ? "xMidYMid slice"
                : "none") +
              "' x='0' y='0' height='100%25' width='100%25' href='" +
              o +
              "'/%3E%3C/svg%3E";
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    2555: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return u;
          },
          unstable_getImgProps: function () {
            return a;
          },
        });
      let i = r(8754),
        n = r(5471),
        o = r(4210),
        l = r(8872),
        s = i._(r(7746)),
        a = (e) => {
          (0, o.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, n.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        },
        u = l.Image;
    },
    7746: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: i, quality: n } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          i +
          "&q=" +
          (n || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        (r.__next_img_default = !0);
      let i = r;
    },
    5675: function (e, t, r) {
      r(2555);
    },
  },
]);
