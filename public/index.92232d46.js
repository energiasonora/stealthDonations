/*! For license information please see tsparticles.confetti.bundle.min.js.LICENSE.txt */ !function(t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var i = e();
        for(var s in i)("object" == typeof exports ? exports : t)[s] = i[s];
    }
}(this, ()=>(()=>{
        "use strict";
        var t = {
            d: (e, i)=>{
                for(var s in i)t.o(i, s) && !t.o(e, s) && Object.defineProperty(e, s, {
                    enumerable: !0,
                    get: i[s]
                });
            },
            o: (t, e)=>Object.prototype.hasOwnProperty.call(t, e),
            r: (t)=>{
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
            }
        }, e = {};
        t.r(e), t.d(e, {
            AnimatableColor: ()=>De,
            AnimationOptions: ()=>Ce,
            AnimationValueWithRandom: ()=>Ee,
            Background: ()=>le,
            BackgroundMask: ()=>de,
            BackgroundMaskCover: ()=>he,
            Circle: ()=>vi,
            ClickEvent: ()=>pe,
            Collisions: ()=>Ae,
            CollisionsAbsorb: ()=>Oe,
            CollisionsOverlap: ()=>Te,
            ColorAnimation: ()=>Se,
            DivEvent: ()=>fe,
            Events: ()=>ge,
            ExternalInteractorBase: ()=>Di,
            FullScreen: ()=>ue,
            HoverEvent: ()=>ve,
            HslAnimation: ()=>ke,
            HslColorManager: ()=>Si,
            Interactivity: ()=>be,
            ManualParticle: ()=>xe,
            Modes: ()=>we,
            Move: ()=>Xe,
            MoveAngle: ()=>Ve,
            MoveAttract: ()=>Ue,
            MoveCenter: ()=>$e,
            MoveGravity: ()=>qe,
            MovePath: ()=>Ge,
            MoveTrail: ()=>je,
            Opacity: ()=>Ze,
            OpacityAnimation: ()=>Ye,
            Options: ()=>li,
            OptionsColor: ()=>ce,
            OutModes: ()=>We,
            Parallax: ()=>me,
            ParticlesBounce: ()=>Le,
            ParticlesBounceFactor: ()=>Fe,
            ParticlesDensity: ()=>Qe,
            ParticlesInteractorBase: ()=>Oi,
            ParticlesNumber: ()=>Ke,
            ParticlesNumberLimit: ()=>Je,
            ParticlesOptions: ()=>ai,
            Point: ()=>pi,
            Range: ()=>fi,
            RangedAnimationOptions: ()=>Pe,
            RangedAnimationValueWithRandom: ()=>Re,
            Rectangle: ()=>mi,
            ResizeEvent: ()=>ye,
            Responsive: ()=>_e,
            RgbColorManager: ()=>ki,
            Shadow: ()=>ti,
            Shape: ()=>ei,
            Size: ()=>si,
            SizeAnimation: ()=>ii,
            Spin: ()=>Ne,
            Stroke: ()=>oi,
            Theme: ()=>Me,
            ThemeDefault: ()=>ze,
            ValueWithRandom: ()=>Ie,
            Vector: ()=>v,
            Vector3d: ()=>m,
            ZIndex: ()=>ni,
            addColorManager: ()=>St,
            addEasing: ()=>w,
            alterHsl: ()=>se,
            areBoundsInside: ()=>et,
            arrayRandomIndex: ()=>J,
            calcExactPositionOrRandomFromSize: ()=>B,
            calcExactPositionOrRandomFromSizeRanged: ()=>V,
            calcPositionFromSize: ()=>F,
            calcPositionOrRandomFromSize: ()=>L,
            calcPositionOrRandomFromSizeRanged: ()=>A,
            calculateBounds: ()=>it,
            circleBounce: ()=>lt,
            circleBounceDataFromParticle: ()=>ct,
            clamp: ()=>z,
            clear: ()=>Zt,
            collisionVelocity: ()=>R,
            colorMix: ()=>$t,
            colorToHsl: ()=>Tt,
            colorToRgb: ()=>Ot,
            confetti: ()=>ro,
            deepExtend: ()=>st,
            divMode: ()=>rt,
            divModeExecute: ()=>nt,
            drawEffect: ()=>Jt,
            drawLine: ()=>Nt,
            drawParticle: ()=>Qt,
            drawParticlePlugin: ()=>ie,
            drawPlugin: ()=>ee,
            drawShape: ()=>Kt,
            drawShapeAfterDraw: ()=>te,
            errorPrefix: ()=>f,
            executeOnSingleOrMultiple: ()=>dt,
            findItemFromSingleOrMultiple: ()=>pt,
            generatedAttribute: ()=>i,
            getDistance: ()=>T,
            getDistances: ()=>O,
            getEasing: ()=>b,
            getHslAnimationFromHsl: ()=>jt,
            getHslFromAnimation: ()=>Ht,
            getLinkColor: ()=>qt,
            getLinkRandomColor: ()=>Gt,
            getLogger: ()=>G,
            getParticleBaseVelocity: ()=>E,
            getParticleDirectionAngle: ()=>I,
            getPosition: ()=>vt,
            getRandom: ()=>_,
            getRandomRgbColor: ()=>Bt,
            getRangeMax: ()=>k,
            getRangeMin: ()=>S,
            getRangeValue: ()=>P,
            getSize: ()=>yt,
            getStyleFromHsl: ()=>Ut,
            getStyleFromRgb: ()=>Vt,
            hasMatchMedia: ()=>W,
            hslToRgb: ()=>Lt,
            hslaToRgba: ()=>At,
            initParticleNumericAnimationValue: ()=>ft,
            isArray: ()=>zt,
            isBoolean: ()=>gt,
            isDivModeEnabled: ()=>ot,
            isFunction: ()=>xt,
            isInArray: ()=>Z,
            isNumber: ()=>bt,
            isObject: ()=>_t,
            isPointInside: ()=>tt,
            isSsr: ()=>j,
            isString: ()=>wt,
            itemFromArray: ()=>K,
            itemFromSingleOrMultiple: ()=>ut,
            loadFont: ()=>Q,
            loadOptions: ()=>ri,
            loadParticlesOptions: ()=>ci,
            mix: ()=>M,
            mouseDownEvent: ()=>s,
            mouseLeaveEvent: ()=>n,
            mouseMoveEvent: ()=>r,
            mouseOutEvent: ()=>a,
            mouseUpEvent: ()=>o,
            paintBase: ()=>Xt,
            paintImage: ()=>Yt,
            parseAlpha: ()=>U,
            randomInRange: ()=>C,
            rangeColorToHsl: ()=>It,
            rangeColorToRgb: ()=>Dt,
            rectBounce: ()=>ht,
            resizeEvent: ()=>u,
            rgbToHsl: ()=>Et,
            safeIntersectionObserver: ()=>X,
            safeMatchMedia: ()=>N,
            safeMutationObserver: ()=>Y,
            setLogger: ()=>q,
            setRandom: ()=>x,
            setRangeValue: ()=>D,
            singleDivModeExecute: ()=>at,
            stringToAlpha: ()=>Rt,
            stringToRgb: ()=>Ft,
            touchCancelEvent: ()=>d,
            touchEndEvent: ()=>l,
            touchMoveEvent: ()=>h,
            touchStartEvent: ()=>c,
            tsParticles: ()=>Ti,
            visibilityChangeEvent: ()=>p
        });
        const i = "generated", s = "pointerdown", o = "pointerup", n = "pointerleave", a = "pointerout", r = "pointermove", c = "touchstart", l = "touchend", h = "touchmove", d = "touchcancel", u = "resize", p = "visibilitychange", f = "tsParticles - Error";
        class m {
            constructor(t, e, i){
                if (this._updateFromAngle = (t, e)=>{
                    this.x = Math.cos(t) * e, this.y = Math.sin(t) * e;
                }, !bt(t) && t) {
                    this.x = t.x, this.y = t.y;
                    const e = t;
                    this.z = e.z ? e.z : 0;
                } else {
                    if (void 0 === t || void 0 === e) throw new Error(`${f} Vector3d not initialized correctly`);
                    this.x = t, this.y = e, this.z = i ?? 0;
                }
            }
            static get origin() {
                return m.create(0, 0, 0);
            }
            get angle() {
                return Math.atan2(this.y, this.x);
            }
            set angle(t) {
                this._updateFromAngle(t, this.length);
            }
            get length() {
                return Math.sqrt(this.getLengthSq());
            }
            set length(t) {
                this._updateFromAngle(this.angle, t);
            }
            static clone(t) {
                return m.create(t.x, t.y, t.z);
            }
            static create(t, e, i) {
                return new m(t, e, i);
            }
            add(t) {
                return m.create(this.x + t.x, this.y + t.y, this.z + t.z);
            }
            addTo(t) {
                this.x += t.x, this.y += t.y, this.z += t.z;
            }
            copy() {
                return m.clone(this);
            }
            distanceTo(t) {
                return this.sub(t).length;
            }
            distanceToSq(t) {
                return this.sub(t).getLengthSq();
            }
            div(t) {
                return m.create(this.x / t, this.y / t, this.z / t);
            }
            divTo(t) {
                this.x /= t, this.y /= t, this.z /= t;
            }
            getLengthSq() {
                return this.x ** 2 + this.y ** 2;
            }
            mult(t) {
                return m.create(this.x * t, this.y * t, this.z * t);
            }
            multTo(t) {
                this.x *= t, this.y *= t, this.z *= t;
            }
            normalize() {
                const t = this.length;
                0 != t && this.multTo(1 / t);
            }
            rotate(t) {
                return m.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t), 0);
            }
            setTo(t) {
                this.x = t.x, this.y = t.y;
                const e = t;
                this.z = e.z ? e.z : 0;
            }
            sub(t) {
                return m.create(this.x - t.x, this.y - t.y, this.z - t.z);
            }
            subFrom(t) {
                this.x -= t.x, this.y -= t.y, this.z -= t.z;
            }
        }
        class v extends m {
            constructor(t, e){
                super(t, e, 0);
            }
            static get origin() {
                return v.create(0, 0);
            }
            static clone(t) {
                return v.create(t.x, t.y);
            }
            static create(t, e) {
                return new v(t, e);
            }
        }
        let y = Math.random;
        const g = new Map;
        function w(t, e) {
            g.get(t) || g.set(t, e);
        }
        function b(t) {
            return g.get(t) || ((t)=>t);
        }
        function x(t = Math.random) {
            y = t;
        }
        function _() {
            return z(y(), 0, 1 - 1e-16);
        }
        function z(t, e, i) {
            return Math.min(Math.max(t, e), i);
        }
        function M(t, e, i, s) {
            return Math.floor((t * i + e * s) / (i + s));
        }
        function C(t) {
            const e = k(t);
            let i = S(t);
            return e === i && (i = 0), _() * (e - i) + i;
        }
        function P(t) {
            return bt(t) ? t : C(t);
        }
        function S(t) {
            return bt(t) ? t : t.min;
        }
        function k(t) {
            return bt(t) ? t : t.max;
        }
        function D(t, e) {
            if (t === e || void 0 === e && bt(t)) return t;
            const i = S(t), s = k(t);
            return void 0 !== e ? {
                min: Math.min(i, e),
                max: Math.max(s, e)
            } : D(i, s);
        }
        function O(t, e) {
            const i = t.x - e.x, s = t.y - e.y;
            return {
                dx: i,
                dy: s,
                distance: Math.sqrt(i ** 2 + s ** 2)
            };
        }
        function T(t, e) {
            return O(t, e).distance;
        }
        function I(t, e, i) {
            if (bt(t)) return t * Math.PI / 180;
            switch(t){
                case "top":
                    return .5 * -Math.PI;
                case "top-right":
                    return .25 * -Math.PI;
                case "right":
                    return 0;
                case "bottom-right":
                    return .25 * Math.PI;
                case "bottom":
                    return .5 * Math.PI;
                case "bottom-left":
                    return .75 * Math.PI;
                case "left":
                    return Math.PI;
                case "top-left":
                    return .75 * -Math.PI;
                case "inside":
                    return Math.atan2(i.y - e.y, i.x - e.x);
                case "outside":
                    return Math.atan2(e.y - i.y, e.x - i.x);
                default:
                    return _() * Math.PI * 2;
            }
        }
        function E(t) {
            const e = v.origin;
            return e.length = 1, e.angle = t, e;
        }
        function R(t, e, i, s) {
            return v.create(t.x * (i - s) / (i + s) + 2 * e.x * s / (i + s), t.y);
        }
        function F(t) {
            return t.position && void 0 !== t.position.x && void 0 !== t.position.y ? {
                x: t.position.x * t.size.width / 100,
                y: t.position.y * t.size.height / 100
            } : void 0;
        }
        function L(t) {
            return {
                x: (t.position?.x ?? 100 * _()) * t.size.width / 100,
                y: (t.position?.y ?? 100 * _()) * t.size.height / 100
            };
        }
        function A(t) {
            const e = {
                x: void 0 !== t.position?.x ? P(t.position.x) : void 0,
                y: void 0 !== t.position?.y ? P(t.position.y) : void 0
            };
            return L({
                size: t.size,
                position: e
            });
        }
        function B(t) {
            return {
                x: t.position?.x ?? _() * t.size.width,
                y: t.position?.y ?? _() * t.size.height
            };
        }
        function V(t) {
            const e = {
                x: void 0 !== t.position?.x ? P(t.position.x) : void 0,
                y: void 0 !== t.position?.y ? P(t.position.y) : void 0
            };
            return B({
                size: t.size,
                position: e
            });
        }
        function U(t) {
            return t ? t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t) : 1;
        }
        const $ = {
            debug: console.debug,
            error: console.error,
            info: console.info,
            log: console.log,
            verbose: console.log,
            warning: console.warn
        };
        function q(t) {
            $.debug = t.debug || $.debug, $.error = t.error || $.error, $.info = t.info || $.info, $.log = t.log || $.log, $.verbose = t.verbose || $.verbose, $.warning = t.warning || $.warning;
        }
        function G() {
            return $;
        }
        function H(t) {
            const e = {
                bounced: !1
            }, { pSide: i, pOtherSide: s, rectSide: o, rectOtherSide: n, velocity: a, factor: r } = t;
            return s.min < n.min || s.min > n.max || s.max < n.min || s.max > n.max || (i.max >= o.min && i.max <= .5 * (o.max + o.min) && a > 0 || i.min <= o.max && i.min > .5 * (o.max + o.min) && a < 0) && (e.velocity = a * -r, e.bounced = !0), e;
        }
        function j() {
            return "undefined" == typeof window || !window || void 0 === window.document || !window.document;
        }
        function W() {
            return !j() && "undefined" != typeof matchMedia;
        }
        function N(t) {
            if (W()) return matchMedia(t);
        }
        function X(t) {
            if (!j() && "undefined" != typeof IntersectionObserver) return new IntersectionObserver(t);
        }
        function Y(t) {
            if (!j() && "undefined" != typeof MutationObserver) return new MutationObserver(t);
        }
        function Z(t, e) {
            return t === e || zt(e) && e.indexOf(t) > -1;
        }
        async function Q(t, e) {
            try {
                await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
            } catch  {}
        }
        function J(t) {
            return Math.floor(_() * t.length);
        }
        function K(t, e, i = !0) {
            return t[void 0 !== e && i ? e % t.length : J(t)];
        }
        function tt(t, e, i, s, o) {
            return et(it(t, s ?? 0), e, i, o);
        }
        function et(t, e, i, s) {
            let o = !0;
            return s && "bottom" !== s || (o = t.top < e.height + i.x), !o || s && "left" !== s || (o = t.right > i.x), !o || s && "right" !== s || (o = t.left < e.width + i.y), !o || s && "top" !== s || (o = t.bottom > i.y), o;
        }
        function it(t, e) {
            return {
                bottom: t.y + e,
                left: t.x - e,
                right: t.x + e,
                top: t.y - e
            };
        }
        function st(t, ...e) {
            for (const i of e){
                if (null == i) continue;
                if (!_t(i)) {
                    t = i;
                    continue;
                }
                const e = Array.isArray(i);
                !e || !_t(t) && t && Array.isArray(t) ? e || !_t(t) && t && !Array.isArray(t) || (t = {}) : t = [];
                for(const e in i){
                    if ("__proto__" === e) continue;
                    const s = i[e], o = t;
                    o[e] = _t(s) && Array.isArray(s) ? s.map((t)=>st(o[e], t)) : st(o[e], s);
                }
            }
            return t;
        }
        function ot(t, e) {
            return !!pt(e, (e)=>e.enable && Z(t, e.mode));
        }
        function nt(t, e, i) {
            dt(e, (e)=>{
                const s = e.mode;
                e.enable && Z(t, s) && at(e, i);
            });
        }
        function at(t, e) {
            dt(t.selectors, (i)=>{
                e(i, t);
            });
        }
        function rt(t, e) {
            if (e && t) return pt(t, (t)=>(function(t, e) {
                    const i = dt(e, (e)=>t.matches(e));
                    return zt(i) ? i.some((t)=>t) : i;
                })(e, t.selectors));
        }
        function ct(t) {
            return {
                position: t.getPosition(),
                radius: t.getRadius(),
                mass: t.getMass(),
                velocity: t.velocity,
                factor: v.create(P(t.options.bounce.horizontal.value), P(t.options.bounce.vertical.value))
            };
        }
        function lt(t, e) {
            const { x: i, y: s } = t.velocity.sub(e.velocity), [o, n] = [
                t.position,
                e.position
            ], { dx: a, dy: r } = O(n, o);
            if (i * a + s * r < 0) return;
            const c = -Math.atan2(r, a), l = t.mass, h = e.mass, d = t.velocity.rotate(c), u = e.velocity.rotate(c), p = R(d, u, l, h), f = R(u, d, l, h), m = p.rotate(-c), v = f.rotate(-c);
            t.velocity.x = m.x * t.factor.x, t.velocity.y = m.y * t.factor.y, e.velocity.x = v.x * e.factor.x, e.velocity.y = v.y * e.factor.y;
        }
        function ht(t, e) {
            const i = it(t.getPosition(), t.getRadius()), s = t.options.bounce, o = H({
                pSide: {
                    min: i.left,
                    max: i.right
                },
                pOtherSide: {
                    min: i.top,
                    max: i.bottom
                },
                rectSide: {
                    min: e.left,
                    max: e.right
                },
                rectOtherSide: {
                    min: e.top,
                    max: e.bottom
                },
                velocity: t.velocity.x,
                factor: P(s.horizontal.value)
            });
            o.bounced && (void 0 !== o.velocity && (t.velocity.x = o.velocity), void 0 !== o.position && (t.position.x = o.position));
            const n = H({
                pSide: {
                    min: i.top,
                    max: i.bottom
                },
                pOtherSide: {
                    min: i.left,
                    max: i.right
                },
                rectSide: {
                    min: e.top,
                    max: e.bottom
                },
                rectOtherSide: {
                    min: e.left,
                    max: e.right
                },
                velocity: t.velocity.y,
                factor: P(s.vertical.value)
            });
            n.bounced && (void 0 !== n.velocity && (t.velocity.y = n.velocity), void 0 !== n.position && (t.position.y = n.position));
        }
        function dt(t, e) {
            return zt(t) ? t.map((t, i)=>e(t, i)) : e(t, 0);
        }
        function ut(t, e, i) {
            return zt(t) ? K(t, e, i) : t;
        }
        function pt(t, e) {
            return zt(t) ? t.find((t, i)=>e(t, i)) : e(t, 0) ? t : void 0;
        }
        function ft(t, e) {
            const i = t.value, s = t.animation, o = {
                delayTime: 1e3 * P(s.delay),
                enable: s.enable,
                value: P(t.value) * e,
                max: k(i) * e,
                min: S(i) * e,
                loops: 0,
                maxLoops: P(s.count),
                time: 0
            };
            if (s.enable) {
                switch(o.decay = 1 - P(s.decay), s.mode){
                    case "increase":
                        o.status = "increasing";
                        break;
                    case "decrease":
                        o.status = "decreasing";
                        break;
                    case "random":
                        o.status = _() >= .5 ? "increasing" : "decreasing";
                }
                const t = "auto" === s.mode;
                switch(s.startValue){
                    case "min":
                        o.value = o.min, t && (o.status = "increasing");
                        break;
                    case "max":
                        o.value = o.max, t && (o.status = "decreasing");
                        break;
                    default:
                        o.value = C(o), t && (o.status = _() >= .5 ? "increasing" : "decreasing");
                }
            }
            return o.initialValue = o.value, o;
        }
        function mt(t, e) {
            if (!("percent" === t.mode)) {
                const { mode: e, ...i } = t;
                return i;
            }
            return "x" in t ? {
                x: t.x / 100 * e.width,
                y: t.y / 100 * e.height
            } : {
                width: t.width / 100 * e.width,
                height: t.height / 100 * e.height
            };
        }
        function vt(t, e) {
            return mt(t, e);
        }
        function yt(t, e) {
            return mt(t, e);
        }
        function gt(t) {
            return "boolean" == typeof t;
        }
        function wt(t) {
            return "string" == typeof t;
        }
        function bt(t) {
            return "number" == typeof t;
        }
        function xt(t) {
            return "function" == typeof t;
        }
        function _t(t) {
            return "object" == typeof t && null !== t;
        }
        function zt(t) {
            return Array.isArray(t);
        }
        const Mt = "random", Ct = "mid", Pt = new Map;
        function St(t) {
            Pt.set(t.key, t);
        }
        function kt(t) {
            for (const [, e] of Pt)if (t.startsWith(e.stringPrefix)) return e.parseString(t);
            const e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (t, e, i, s, o)=>e + e + i + i + s + s + (void 0 !== o ? o + o : "")), i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
            return i ? {
                a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                b: parseInt(i[3], 16),
                g: parseInt(i[2], 16),
                r: parseInt(i[1], 16)
            } : void 0;
        }
        function Dt(t, e, i = !0) {
            if (!t) return;
            const s = wt(t) ? {
                value: t
            } : t;
            if (wt(s.value)) return Ot(s.value, e, i);
            if (zt(s.value)) return Dt({
                value: K(s.value, e, i)
            });
            for (const [, t] of Pt){
                const e = t.handleRangeColor(s);
                if (e) return e;
            }
        }
        function Ot(t, e, i = !0) {
            if (!t) return;
            const s = wt(t) ? {
                value: t
            } : t;
            if (wt(s.value)) return s.value === Mt ? Bt() : Ft(s.value);
            if (zt(s.value)) return Ot({
                value: K(s.value, e, i)
            });
            for (const [, t] of Pt){
                const e = t.handleColor(s);
                if (e) return e;
            }
        }
        function Tt(t, e, i = !0) {
            const s = Ot(t, e, i);
            return s ? Et(s) : void 0;
        }
        function It(t, e, i = !0) {
            const s = Dt(t, e, i);
            return s ? Et(s) : void 0;
        }
        function Et(t) {
            const e = t.r / 255, i = t.g / 255, s = t.b / 255, o = Math.max(e, i, s), n = Math.min(e, i, s), a = {
                h: 0,
                l: .5 * (o + n),
                s: 0
            };
            return o !== n && (a.s = a.l < .5 ? (o - n) / (o + n) : (o - n) / (2 - o - n), a.h = e === o ? (i - s) / (o - n) : a.h = i === o ? 2 + (s - e) / (o - n) : 4 + (e - i) / (o - n)), a.l *= 100, a.s *= 100, a.h *= 60, a.h < 0 && (a.h += 360), a.h >= 360 && (a.h -= 360), a;
        }
        function Rt(t) {
            return kt(t)?.a;
        }
        function Ft(t) {
            return kt(t);
        }
        function Lt(t) {
            const e = (t.h % 360 + 360) % 360, i = Math.max(0, Math.min(100, t.s)), s = e / 360, o = i / 100, n = Math.max(0, Math.min(100, t.l)) / 100;
            if (0 === i) {
                const t = Math.round(255 * n);
                return {
                    r: t,
                    g: t,
                    b: t
                };
            }
            const a = (t, e, i)=>(i < 0 && (i += 1), i > 1 && (i -= 1), 6 * i < 1 ? t + 6 * (e - t) * i : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t), r = n < .5 ? n * (1 + o) : n + o - n * o, c = 2 * n - r, l = Math.min(255, 255 * a(c, r, s + 1 / 3)), h = Math.min(255, 255 * a(c, r, s)), d = Math.min(255, 255 * a(c, r, s - 1 / 3));
            return {
                r: Math.round(l),
                g: Math.round(h),
                b: Math.round(d)
            };
        }
        function At(t) {
            const e = Lt(t);
            return {
                a: t.a,
                b: e.b,
                g: e.g,
                r: e.r
            };
        }
        function Bt(t) {
            const e = t ?? 0;
            return {
                b: Math.floor(C(D(e, 256))),
                g: Math.floor(C(D(e, 256))),
                r: Math.floor(C(D(e, 256)))
            };
        }
        function Vt(t, e) {
            return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
        }
        function Ut(t, e) {
            return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
        }
        function $t(t, e, i, s) {
            let o = t, n = e;
            return void 0 === o.r && (o = Lt(t)), void 0 === n.r && (n = Lt(e)), {
                b: M(o.b, n.b, i, s),
                g: M(o.g, n.g, i, s),
                r: M(o.r, n.r, i, s)
            };
        }
        function qt(t, e, i) {
            if (i === Mt) return Bt();
            if (i !== Ct) return i;
            {
                const i = t.getFillColor() ?? t.getStrokeColor(), s = e?.getFillColor() ?? e?.getStrokeColor();
                if (i && s && e) return $t(i, s, t.getRadius(), e.getRadius());
                {
                    const t = i ?? s;
                    if (t) return Lt(t);
                }
            }
        }
        function Gt(t, e, i) {
            const s = wt(t) ? t : t.value;
            return s === Mt ? i ? Dt({
                value: s
            }) : e ? Mt : Ct : s === Ct ? Ct : Dt({
                value: s
            });
        }
        function Ht(t) {
            return void 0 !== t ? {
                h: t.h.value,
                s: t.s.value,
                l: t.l.value
            } : void 0;
        }
        function jt(t, e, i) {
            const s = {
                h: {
                    enable: !1,
                    value: t.h
                },
                s: {
                    enable: !1,
                    value: t.s
                },
                l: {
                    enable: !1,
                    value: t.l
                }
            };
            return e && (Wt(s.h, e.h, i), Wt(s.s, e.s, i), Wt(s.l, e.l, i)), s;
        }
        function Wt(t, e, i) {
            t.enable = e.enable, t.enable ? (t.velocity = P(e.speed) / 100 * i, t.decay = 1 - P(e.decay), t.status = "increasing", t.loops = 0, t.maxLoops = P(e.count), t.time = 0, t.delayTime = 1e3 * P(e.delay), e.sync || (t.velocity *= _(), t.value *= _()), t.initialValue = t.value) : t.velocity = 0;
        }
        function Nt(t, e, i) {
            t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
        }
        function Xt(t, e, i) {
            t.fillStyle = i ?? "rgba(0,0,0,0)", t.fillRect(0, 0, e.width, e.height);
        }
        function Yt(t, e, i, s) {
            i && (t.globalAlpha = s, t.drawImage(i, 0, 0, e.width, e.height), t.globalAlpha = 1);
        }
        function Zt(t, e) {
            t.clearRect(0, 0, e.width, e.height);
        }
        function Qt(t) {
            const { container: e, context: i, particle: s, delta: o, colorStyles: n, backgroundMask: a, composite: r, radius: c, opacity: l, shadow: h, transform: d } = t, u = s.getPosition(), p = s.rotation + (s.pathRotation ? s.velocity.angle : 0), f = Math.sin(p), m = Math.cos(p), v = {
                a: m * (d.a ?? 1),
                b: f * (d.b ?? 1),
                c: -f * (d.c ?? 1),
                d: m * (d.d ?? 1)
            };
            i.setTransform(v.a, v.b, v.c, v.d, u.x, u.y), a && (i.globalCompositeOperation = r);
            const y = s.shadowColor;
            h.enable && y && (i.shadowBlur = h.blur, i.shadowColor = Vt(y), i.shadowOffsetX = h.offset.x, i.shadowOffsetY = h.offset.y), n.fill && (i.fillStyle = n.fill);
            const g = s.strokeWidth ?? 0;
            i.lineWidth = g, n.stroke && (i.strokeStyle = n.stroke);
            const w = {
                container: e,
                context: i,
                particle: s,
                radius: c,
                opacity: l,
                delta: o,
                transformData: v
            };
            i.beginPath(), Kt(w), s.shapeClose && i.closePath(), g > 0 && i.stroke(), s.shapeFill && i.fill(), te(w), Jt(w), i.globalCompositeOperation = "source-over", i.setTransform(1, 0, 0, 1, 0, 0);
        }
        function Jt(t) {
            const { container: e, context: i, particle: s, radius: o, opacity: n, delta: a, transformData: r } = t;
            if (!s.effect) return;
            const c = e.effectDrawers.get(s.effect);
            c && c.draw({
                context: i,
                particle: s,
                radius: o,
                opacity: n,
                delta: a,
                pixelRatio: e.retina.pixelRatio,
                transformData: {
                    ...r
                }
            });
        }
        function Kt(t) {
            const { container: e, context: i, particle: s, radius: o, opacity: n, delta: a, transformData: r } = t;
            if (!s.shape) return;
            const c = e.shapeDrawers.get(s.shape);
            c && c.draw({
                context: i,
                particle: s,
                radius: o,
                opacity: n,
                delta: a,
                pixelRatio: e.retina.pixelRatio,
                transformData: {
                    ...r
                }
            });
        }
        function te(t) {
            const { container: e, context: i, particle: s, radius: o, opacity: n, delta: a, transformData: r } = t;
            if (!s.shape) return;
            const c = e.shapeDrawers.get(s.shape);
            c && c.afterDraw && c.afterDraw({
                context: i,
                particle: s,
                radius: o,
                opacity: n,
                delta: a,
                pixelRatio: e.retina.pixelRatio,
                transformData: {
                    ...r
                }
            });
        }
        function ee(t, e, i) {
            e.draw && e.draw(t, i);
        }
        function ie(t, e, i, s) {
            e.drawParticle && e.drawParticle(t, i, s);
        }
        function se(t, e, i) {
            return {
                h: t.h,
                s: t.s,
                l: t.l + ("darken" === e ? -1 : 1) * i
            };
        }
        function oe(t, e, i) {
            const s = e[i];
            void 0 !== s && (t[i] = (t[i] ?? 1) * s);
        }
        class ne {
            constructor(t){
                this.container = t, this._applyPostDrawUpdaters = (t)=>{
                    for (const e of this._postDrawUpdaters)e.afterDraw && e.afterDraw(t);
                }, this._applyPreDrawUpdaters = (t, e, i, s, o, n)=>{
                    for (const a of this._preDrawUpdaters){
                        if (a.getColorStyles) {
                            const { fill: n, stroke: r } = a.getColorStyles(e, t, i, s);
                            n && (o.fill = n), r && (o.stroke = r);
                        }
                        if (a.getTransformValues) {
                            const t = a.getTransformValues(e);
                            for(const e in t)oe(n, t, e);
                        }
                        a.beforeDraw && a.beforeDraw(e);
                    }
                }, this._applyResizePlugins = ()=>{
                    for (const t of this._resizePlugins)t.resize && t.resize();
                }, this._getPluginParticleColors = (t)=>{
                    let e, i;
                    for (const s of this._colorPlugins)if (!e && s.particleFillColor && (e = It(s.particleFillColor(t))), !i && s.particleStrokeColor && (i = It(s.particleStrokeColor(t))), e && i) break;
                    return [
                        e,
                        i
                    ];
                }, this._initCover = ()=>{
                    const t = this.container.actualOptions.backgroundMask.cover, e = Dt(t.color);
                    if (e) {
                        const i = {
                            ...e,
                            a: t.opacity
                        };
                        this._coverColorStyle = Vt(i, i.a);
                    }
                }, this._initStyle = ()=>{
                    const t = this.element, e = this.container.actualOptions;
                    if (t) {
                        this._fullScreen ? (this._originalStyle = st({}, t.style), this._setFullScreenStyle()) : this._resetOriginalStyle();
                        for(const i in e.style){
                            if (!i || !e.style) continue;
                            const s = e.style[i];
                            s && t.style.setProperty(i, s, "important");
                        }
                    }
                }, this._initTrail = async ()=>{
                    const t = this.container.actualOptions, e = t.particles.move.trail, i = e.fill;
                    if (e.enable) {
                        if (i.color) {
                            const e = Dt(i.color);
                            if (!e) return;
                            const s = t.particles.move.trail;
                            this._trailFill = {
                                color: {
                                    ...e
                                },
                                opacity: 1 / s.length
                            };
                        } else await new Promise((t, s)=>{
                            if (!i.image) return;
                            const o = document.createElement("img");
                            o.addEventListener("load", ()=>{
                                this._trailFill = {
                                    image: o,
                                    opacity: 1 / e.length
                                }, t();
                            }), o.addEventListener("error", (t)=>{
                                s(t.error);
                            }), o.src = i.image;
                        });
                    }
                }, this._paintBase = (t)=>{
                    this.draw((e)=>Xt(e, this.size, t));
                }, this._paintImage = (t, e)=>{
                    this.draw((i)=>Yt(i, this.size, t, e));
                }, this._repairStyle = ()=>{
                    const t = this.element;
                    t && (this._safeMutationObserver((t)=>t.disconnect()), this._initStyle(), this.initBackground(), this._safeMutationObserver((e)=>e.observe(t, {
                            attributes: !0
                        })));
                }, this._resetOriginalStyle = ()=>{
                    const t = this.element, e = this._originalStyle;
                    if (!t || !e) return;
                    const i = t.style;
                    i.position = e.position, i.zIndex = e.zIndex, i.top = e.top, i.left = e.left, i.width = e.width, i.height = e.height;
                }, this._safeMutationObserver = (t)=>{
                    this._mutationObserver && t(this._mutationObserver);
                }, this._setFullScreenStyle = ()=>{
                    const t = this.element;
                    if (!t) return;
                    const e = "important", i = t.style;
                    i.setProperty("position", "fixed", e), i.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), e), i.setProperty("top", "0", e), i.setProperty("left", "0", e), i.setProperty("width", "100%", e), i.setProperty("height", "100%", e);
                }, this.size = {
                    height: 0,
                    width: 0
                }, this._context = null, this._generated = !1, this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = [];
            }
            get _fullScreen() {
                return this.container.actualOptions.fullScreen.enable;
            }
            clear() {
                const t = this.container.actualOptions, e = t.particles.move.trail, i = this._trailFill;
                t.backgroundMask.enable ? this.paint() : e.enable && e.length > 0 && i ? i.color ? this._paintBase(Vt(i.color, i.opacity)) : i.image && this._paintImage(i.image, i.opacity) : t.clear && this.draw((t)=>{
                    Zt(t, this.size);
                });
            }
            destroy() {
                if (this.stop(), this._generated) {
                    const t = this.element;
                    t && t.remove();
                } else this._resetOriginalStyle();
                this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = [];
            }
            draw(t) {
                const e = this._context;
                if (e) return t(e);
            }
            drawParticle(t, e) {
                if (t.spawning || t.destroyed) return;
                const i = t.getRadius();
                if (i <= 0) return;
                const s = t.getFillColor(), o = t.getStrokeColor() ?? s;
                let [n, a] = this._getPluginParticleColors(t);
                n || (n = s), a || (a = o), (n || a) && this.draw((s)=>{
                    const o = this.container, r = o.actualOptions, c = t.options.zIndex, l = (1 - t.zIndexFactor) ** c.opacityRate, h = t.bubble.opacity ?? t.opacity?.value ?? 1, d = h * l, u = (t.strokeOpacity ?? h) * l, p = {}, f = {
                        fill: n ? Ut(n, d) : void 0
                    };
                    f.stroke = a ? Ut(a, u) : f.fill, this._applyPreDrawUpdaters(s, t, i, d, f, p), Qt({
                        container: o,
                        context: s,
                        particle: t,
                        delta: e,
                        colorStyles: f,
                        backgroundMask: r.backgroundMask.enable,
                        composite: r.backgroundMask.composite,
                        radius: i * (1 - t.zIndexFactor) ** c.sizeRate,
                        opacity: d,
                        shadow: t.options.shadow,
                        transform: p
                    }), this._applyPostDrawUpdaters(t);
                });
            }
            drawParticlePlugin(t, e, i) {
                this.draw((s)=>ie(s, t, e, i));
            }
            drawPlugin(t, e) {
                this.draw((i)=>ee(i, t, e));
            }
            async init() {
                this._safeMutationObserver((t)=>t.disconnect()), this._mutationObserver = Y((t)=>{
                    for (const e of t)"attributes" === e.type && "style" === e.attributeName && this._repairStyle();
                }), this.resize(), this._initStyle(), this._initCover();
                try {
                    await this._initTrail();
                } catch (t) {
                    G().error(t);
                }
                this.initBackground(), this._safeMutationObserver((t)=>{
                    this.element && t.observe(this.element, {
                        attributes: !0
                    });
                }), this.initUpdaters(), this.initPlugins(), this.paint();
            }
            initBackground() {
                const t = this.container.actualOptions.background, e = this.element;
                if (!e) return;
                const i = e.style;
                if (i) {
                    if (t.color) {
                        const e = Dt(t.color);
                        i.backgroundColor = e ? Vt(e, t.opacity) : "";
                    } else i.backgroundColor = "";
                    i.backgroundImage = t.image || "", i.backgroundPosition = t.position || "", i.backgroundRepeat = t.repeat || "", i.backgroundSize = t.size || "";
                }
            }
            initPlugins() {
                this._resizePlugins = [];
                for (const [, t] of this.container.plugins)t.resize && this._resizePlugins.push(t), (t.particleFillColor || t.particleStrokeColor) && this._colorPlugins.push(t);
            }
            initUpdaters() {
                this._preDrawUpdaters = [], this._postDrawUpdaters = [];
                for (const t of this.container.particles.updaters)t.afterDraw && this._postDrawUpdaters.push(t), (t.getColorStyles || t.getTransformValues || t.beforeDraw) && this._preDrawUpdaters.push(t);
            }
            loadCanvas(t) {
                this._generated && this.element && this.element.remove(), this._generated = t.dataset && i in t.dataset ? "true" === t.dataset[i] : this._generated, this.element = t, this.element.ariaHidden = "true", this._originalStyle = st({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, this._context = this.element.getContext("2d"), this._safeMutationObserver((t)=>{
                    this.element && t.observe(this.element, {
                        attributes: !0
                    });
                }), this.container.retina.init(), this.initBackground();
            }
            paint() {
                const t = this.container.actualOptions;
                this.draw((e)=>{
                    t.backgroundMask.enable && t.backgroundMask.cover ? (Zt(e, this.size), this._paintBase(this._coverColorStyle)) : this._paintBase();
                });
            }
            resize() {
                if (!this.element) return !1;
                const t = this.container, e = t.retina.pixelRatio, i = t.canvas.size, s = this.element.offsetWidth * e, o = this.element.offsetHeight * e;
                if (o === i.height && s === i.width && o === this.element.height && s === this.element.width) return !1;
                const n = {
                    ...i
                };
                return this.element.width = i.width = this.element.offsetWidth * e, this.element.height = i.height = this.element.offsetHeight * e, this.container.started && t.particles.setResizeFactor({
                    width: i.width / n.width,
                    height: i.height / n.height
                }), !0;
            }
            stop() {
                this._safeMutationObserver((t)=>t.disconnect()), this._mutationObserver = void 0, this.draw((t)=>Zt(t, this.size));
            }
            async windowResize() {
                if (!this.element || !this.resize()) return;
                const t = this.container, e = t.updateActualOptions();
                t.particles.setDensity(), this._applyResizePlugins(), e && await t.refresh();
            }
        }
        function ae(t, e, i, s, o) {
            if (s) {
                let s = {
                    passive: !0
                };
                gt(o) ? s.capture = o : void 0 !== o && (s = o), t.addEventListener(e, i, s);
            } else {
                const s = o;
                t.removeEventListener(e, i, s);
            }
        }
        class re {
            constructor(t){
                this.container = t, this._doMouseTouchClick = (t)=>{
                    const e = this.container, i = e.actualOptions;
                    if (this._canPush) {
                        const t = e.interactivity.mouse, s = t.position;
                        if (!s) return;
                        t.clickPosition = {
                            ...s
                        }, t.clickTime = (new Date).getTime();
                        dt(i.interactivity.events.onClick.mode, (t)=>this.container.handleClickMode(t));
                    }
                    "touchend" === t.type && setTimeout(()=>this._mouseTouchFinish(), 500);
                }, this._handleThemeChange = (t)=>{
                    const e = t, i = this.container, s = i.options, o = s.defaultThemes, n = e.matches ? o.dark : o.light, a = s.themes.find((t)=>t.name === n);
                    a && a.default.auto && i.loadTheme(n);
                }, this._handleVisibilityChange = ()=>{
                    const t = this.container, e = t.actualOptions;
                    this._mouseTouchFinish(), e.pauseOnBlur && (document && document.hidden ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.getAnimationStatus() ? t.play(!0) : t.draw(!0)));
                }, this._handleWindowResize = async ()=>{
                    this._resizeTimeout && (clearTimeout(this._resizeTimeout), delete this._resizeTimeout), this._resizeTimeout = setTimeout(async ()=>{
                        const t = this.container.canvas;
                        t && await t.windowResize();
                    }, 1e3 * this.container.actualOptions.interactivity.events.resize.delay);
                }, this._manageInteractivityListeners = (t, e)=>{
                    const i = this._handlers, n = this.container, a = n.actualOptions, u = n.interactivity.element;
                    if (!u) return;
                    const p = u, f = n.canvas.element;
                    f && (f.style.pointerEvents = p === f ? "initial" : "none"), (a.interactivity.events.onHover.enable || a.interactivity.events.onClick.enable) && (ae(u, r, i.mouseMove, e), ae(u, c, i.touchStart, e), ae(u, h, i.touchMove, e), a.interactivity.events.onClick.enable ? (ae(u, l, i.touchEndClick, e), ae(u, o, i.mouseUp, e), ae(u, s, i.mouseDown, e)) : ae(u, l, i.touchEnd, e), ae(u, t, i.mouseLeave, e), ae(u, d, i.touchCancel, e));
                }, this._manageListeners = (t)=>{
                    const e = this._handlers, i = this.container, s = i.actualOptions.interactivity.detectsOn, o = i.canvas.element;
                    let r = n;
                    "window" === s ? (i.interactivity.element = window, r = a) : i.interactivity.element = "parent" === s && o ? o.parentElement ?? o.parentNode : o, this._manageMediaMatch(t), this._manageResize(t), this._manageInteractivityListeners(r, t), document && ae(document, p, e.visibilityChange, t, !1);
                }, this._manageMediaMatch = (t)=>{
                    const e = this._handlers, i = N("(prefers-color-scheme: dark)");
                    i && (void 0 === i.addEventListener ? void 0 !== i.addListener && (t ? i.addListener(e.oldThemeChange) : i.removeListener(e.oldThemeChange)) : ae(i, "change", e.themeChange, t));
                }, this._manageResize = (t)=>{
                    const e = this._handlers, i = this.container;
                    if (!i.actualOptions.interactivity.events.resize) return;
                    if ("undefined" == typeof ResizeObserver) return void ae(window, u, e.resize, t);
                    const s = i.canvas.element;
                    this._resizeObserver && !t ? (s && this._resizeObserver.unobserve(s), this._resizeObserver.disconnect(), delete this._resizeObserver) : !this._resizeObserver && t && s && (this._resizeObserver = new ResizeObserver(async (t)=>{
                        t.find((t)=>t.target === s) && await this._handleWindowResize();
                    }), this._resizeObserver.observe(s));
                }, this._mouseDown = ()=>{
                    const { interactivity: t } = this.container;
                    if (!t) return;
                    const { mouse: e } = t;
                    e.clicking = !0, e.downPosition = e.position;
                }, this._mouseTouchClick = (t)=>{
                    const e = this.container, i = e.actualOptions, { mouse: s } = e.interactivity;
                    s.inside = !0;
                    let o = !1;
                    const n = s.position;
                    if (n && i.interactivity.events.onClick.enable) {
                        for (const [, t] of e.plugins)if (t.clickPositionValid && (o = t.clickPositionValid(n), o)) break;
                        o || this._doMouseTouchClick(t), s.clicking = !1;
                    }
                }, this._mouseTouchFinish = ()=>{
                    const t = this.container.interactivity;
                    if (!t) return;
                    const e = t.mouse;
                    delete e.position, delete e.clickPosition, delete e.downPosition, t.status = n, e.inside = !1, e.clicking = !1;
                }, this._mouseTouchMove = (t)=>{
                    const e = this.container, i = e.actualOptions, s = e.interactivity, o = e.canvas.element;
                    if (!s || !s.element) return;
                    let n;
                    if (s.mouse.inside = !0, t.type.startsWith("pointer")) {
                        this._canPush = !0;
                        const e = t;
                        if (s.element === window) {
                            if (o) {
                                const t = o.getBoundingClientRect();
                                n = {
                                    x: e.clientX - t.left,
                                    y: e.clientY - t.top
                                };
                            }
                        } else if ("parent" === i.interactivity.detectsOn) {
                            const t = e.target, i = e.currentTarget;
                            if (t && i && o) {
                                const s = t.getBoundingClientRect(), a = i.getBoundingClientRect(), r = o.getBoundingClientRect();
                                n = {
                                    x: e.offsetX + 2 * s.left - (a.left + r.left),
                                    y: e.offsetY + 2 * s.top - (a.top + r.top)
                                };
                            } else n = {
                                x: e.offsetX ?? e.clientX,
                                y: e.offsetY ?? e.clientY
                            };
                        } else e.target === o && (n = {
                            x: e.offsetX ?? e.clientX,
                            y: e.offsetY ?? e.clientY
                        });
                    } else if (this._canPush = "touchmove" !== t.type, o) {
                        const e = t, i = e.touches[e.touches.length - 1], s = o.getBoundingClientRect();
                        n = {
                            x: i.clientX - (s.left ?? 0),
                            y: i.clientY - (s.top ?? 0)
                        };
                    }
                    const a = e.retina.pixelRatio;
                    n && (n.x *= a, n.y *= a), s.mouse.position = n, s.status = r;
                }, this._touchEnd = (t)=>{
                    const e = t, i = Array.from(e.changedTouches);
                    for (const t of i)this._touches.delete(t.identifier);
                    this._mouseTouchFinish();
                }, this._touchEndClick = (t)=>{
                    const e = t, i = Array.from(e.changedTouches);
                    for (const t of i)this._touches.delete(t.identifier);
                    this._mouseTouchClick(t);
                }, this._touchStart = (t)=>{
                    const e = t, i = Array.from(e.changedTouches);
                    for (const t of i)this._touches.set(t.identifier, performance.now());
                    this._mouseTouchMove(t);
                }, this._canPush = !0, this._touches = new Map, this._handlers = {
                    mouseDown: ()=>this._mouseDown(),
                    mouseLeave: ()=>this._mouseTouchFinish(),
                    mouseMove: (t)=>this._mouseTouchMove(t),
                    mouseUp: (t)=>this._mouseTouchClick(t),
                    touchStart: (t)=>this._touchStart(t),
                    touchMove: (t)=>this._mouseTouchMove(t),
                    touchEnd: (t)=>this._touchEnd(t),
                    touchCancel: (t)=>this._touchEnd(t),
                    touchEndClick: (t)=>this._touchEndClick(t),
                    visibilityChange: ()=>this._handleVisibilityChange(),
                    themeChange: (t)=>this._handleThemeChange(t),
                    oldThemeChange: (t)=>this._handleThemeChange(t),
                    resize: ()=>{
                        this._handleWindowResize();
                    }
                };
            }
            addListeners() {
                this._manageListeners(!0);
            }
            removeListeners() {
                this._manageListeners(!1);
            }
        }
        class ce {
            constructor(){
                this.value = "";
            }
            static create(t, e) {
                const i = new ce;
                return i.load(t), void 0 !== e && (wt(e) || zt(e) ? i.load({
                    value: e
                }) : i.load(e)), i;
            }
            load(t) {
                void 0 !== t?.value && (this.value = t.value);
            }
        }
        class le {
            constructor(){
                this.color = new ce, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1;
            }
            load(t) {
                t && (void 0 !== t.color && (this.color = ce.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.position && (this.position = t.position), void 0 !== t.repeat && (this.repeat = t.repeat), void 0 !== t.size && (this.size = t.size), void 0 !== t.opacity && (this.opacity = t.opacity));
            }
        }
        class he {
            constructor(){
                this.color = new ce, this.color.value = "#fff", this.opacity = 1;
            }
            load(t) {
                t && (void 0 !== t.color && (this.color = ce.create(this.color, t.color)), void 0 !== t.opacity && (this.opacity = t.opacity));
            }
        }
        class de {
            constructor(){
                this.composite = "destination-out", this.cover = new he, this.enable = !1;
            }
            load(t) {
                if (t) {
                    if (void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover) {
                        const e = t.cover, i = wt(t.cover) ? {
                            color: t.cover
                        } : t.cover;
                        this.cover.load(void 0 !== e.color ? e : {
                            color: i
                        });
                    }
                    void 0 !== t.enable && (this.enable = t.enable);
                }
            }
        }
        class ue {
            constructor(){
                this.enable = !0, this.zIndex = 0;
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex));
            }
        }
        class pe {
            constructor(){
                this.enable = !1, this.mode = [];
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode));
            }
        }
        class fe {
            constructor(){
                this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle";
            }
            load(t) {
                t && (void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type));
            }
        }
        class me {
            constructor(){
                this.enable = !1, this.force = 2, this.smooth = 10;
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth));
            }
        }
        class ve {
            constructor(){
                this.enable = !1, this.mode = [], this.parallax = new me;
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax));
            }
        }
        class ye {
            constructor(){
                this.delay = .5, this.enable = !0;
            }
            load(t) {
                void 0 !== t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.enable && (this.enable = t.enable));
            }
        }
        class ge {
            constructor(){
                this.onClick = new pe, this.onDiv = new fe, this.onHover = new ve, this.resize = new ye;
            }
            load(t) {
                if (!t) return;
                this.onClick.load(t.onClick);
                const e = t.onDiv;
                void 0 !== e && (this.onDiv = dt(e, (t)=>{
                    const e = new fe;
                    return e.load(t), e;
                })), this.onHover.load(t.onHover), this.resize.load(t.resize);
            }
        }
        class we {
            constructor(t, e){
                this._engine = t, this._container = e;
            }
            load(t) {
                if (!t) return;
                if (!this._container) return;
                const e = this._engine.interactors.get(this._container);
                if (e) for (const i of e)i.loadModeOptions && i.loadModeOptions(this, t);
            }
        }
        class be {
            constructor(t, e){
                this.detectsOn = "window", this.events = new ge, this.modes = new we(t, e);
            }
            load(t) {
                if (!t) return;
                const e = t.detectsOn;
                void 0 !== e && (this.detectsOn = e), this.events.load(t.events), this.modes.load(t.modes);
            }
        }
        class xe {
            load(t) {
                t && (t.position && (this.position = {
                    x: t.position.x ?? 50,
                    y: t.position.y ?? 50,
                    mode: t.position.mode ?? "percent"
                }), t.options && (this.options = st({}, t.options)));
            }
        }
        class _e {
            constructor(){
                this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas";
            }
            load(t) {
                t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.mode && ("screen" === t.mode ? this.mode = "screen" : this.mode = "canvas"), void 0 !== t.options && (this.options = st({}, t.options)));
            }
        }
        class ze {
            constructor(){
                this.auto = !1, this.mode = "any", this.value = !1;
            }
            load(t) {
                t && (void 0 !== t.auto && (this.auto = t.auto), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value));
            }
        }
        class Me {
            constructor(){
                this.name = "", this.default = new ze;
            }
            load(t) {
                t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = st({}, t.options)));
            }
        }
        class Ce {
            constructor(){
                this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.delay = 0, this.sync = !1;
            }
            load(t) {
                t && (void 0 !== t.count && (this.count = D(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = D(t.speed)), void 0 !== t.decay && (this.decay = D(t.decay)), void 0 !== t.delay && (this.delay = D(t.delay)), void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class Pe extends Ce {
            constructor(){
                super(), this.mode = "auto", this.startValue = "random";
            }
            load(t) {
                super.load(t), t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.startValue && (this.startValue = t.startValue));
            }
        }
        class Se extends Ce {
            constructor(){
                super(), this.offset = 0, this.sync = !0;
            }
            load(t) {
                super.load(t), t && void 0 !== t.offset && (this.offset = D(t.offset));
            }
        }
        class ke {
            constructor(){
                this.h = new Se, this.s = new Se, this.l = new Se;
            }
            load(t) {
                t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
            }
        }
        class De extends ce {
            constructor(){
                super(), this.animation = new ke;
            }
            static create(t, e) {
                const i = new De;
                return i.load(t), void 0 !== e && (wt(e) || zt(e) ? i.load({
                    value: e
                }) : i.load(e)), i;
            }
            load(t) {
                if (super.load(t), !t) return;
                const e = t.animation;
                void 0 !== e && (void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation));
            }
        }
        class Oe {
            constructor(){
                this.speed = 2;
            }
            load(t) {
                t && void 0 !== t.speed && (this.speed = t.speed);
            }
        }
        class Te {
            constructor(){
                this.enable = !0, this.retries = 0;
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries));
            }
        }
        class Ie {
            constructor(){
                this.value = 0;
            }
            load(t) {
                t && void 0 !== t.value && (this.value = D(t.value));
            }
        }
        class Ee extends Ie {
            constructor(){
                super(), this.animation = new Ce;
            }
            load(t) {
                if (super.load(t), !t) return;
                const e = t.animation;
                void 0 !== e && this.animation.load(e);
            }
        }
        class Re extends Ee {
            constructor(){
                super(), this.animation = new Pe;
            }
            load(t) {
                super.load(t);
            }
        }
        class Fe extends Ie {
            constructor(){
                super(), this.value = 1;
            }
        }
        class Le {
            constructor(){
                this.horizontal = new Fe, this.vertical = new Fe;
            }
            load(t) {
                t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical));
            }
        }
        class Ae {
            constructor(){
                this.absorb = new Oe, this.bounce = new Le, this.enable = !1, this.maxSpeed = 50, this.mode = "bounce", this.overlap = new Te;
            }
            load(t) {
                t && (this.absorb.load(t.absorb), this.bounce.load(t.bounce), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.maxSpeed && (this.maxSpeed = D(t.maxSpeed)), void 0 !== t.mode && (this.mode = t.mode), this.overlap.load(t.overlap));
            }
        }
        class Be {
            constructor(){
                this.close = !0, this.fill = !0, this.options = {}, this.type = [];
            }
            load(t) {
                if (!t) return;
                const e = t.options;
                if (void 0 !== e) for(const t in e){
                    const i = e[t];
                    i && (this.options[t] = st(this.options[t] ?? {}, i));
                }
                void 0 !== t.close && (this.close = t.close), void 0 !== t.fill && (this.fill = t.fill), void 0 !== t.type && (this.type = t.type);
            }
        }
        class Ve {
            constructor(){
                this.offset = 0, this.value = 90;
            }
            load(t) {
                t && (void 0 !== t.offset && (this.offset = D(t.offset)), void 0 !== t.value && (this.value = D(t.value)));
            }
        }
        class Ue {
            constructor(){
                this.distance = 200, this.enable = !1, this.rotate = {
                    x: 3e3,
                    y: 3e3
                };
            }
            load(t) {
                if (t && (void 0 !== t.distance && (this.distance = D(t.distance)), void 0 !== t.enable && (this.enable = t.enable), t.rotate)) {
                    const e = t.rotate.x;
                    void 0 !== e && (this.rotate.x = e);
                    const i = t.rotate.y;
                    void 0 !== i && (this.rotate.y = i);
                }
            }
        }
        class $e {
            constructor(){
                this.x = 50, this.y = 50, this.mode = "percent", this.radius = 0;
            }
            load(t) {
                t && (void 0 !== t.x && (this.x = t.x), void 0 !== t.y && (this.y = t.y), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.radius && (this.radius = t.radius));
            }
        }
        class qe {
            constructor(){
                this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50;
            }
            load(t) {
                t && (void 0 !== t.acceleration && (this.acceleration = D(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.inverse && (this.inverse = t.inverse), void 0 !== t.maxSpeed && (this.maxSpeed = D(t.maxSpeed)));
            }
        }
        class Ge {
            constructor(){
                this.clamp = !0, this.delay = new Ie, this.enable = !1, this.options = {};
            }
            load(t) {
                t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), this.generator = t.generator, t.options && (this.options = st(this.options, t.options)));
            }
        }
        class He {
            load(t) {
                t && (void 0 !== t.color && (this.color = ce.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image));
            }
        }
        class je {
            constructor(){
                this.enable = !1, this.length = 10, this.fill = new He;
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.fill && this.fill.load(t.fill), void 0 !== t.length && (this.length = t.length));
            }
        }
        class We {
            constructor(){
                this.default = "out";
            }
            load(t) {
                t && (void 0 !== t.default && (this.default = t.default), this.bottom = t.bottom ?? t.default, this.left = t.left ?? t.default, this.right = t.right ?? t.default, this.top = t.top ?? t.default);
            }
        }
        class Ne {
            constructor(){
                this.acceleration = 0, this.enable = !1;
            }
            load(t) {
                t && (void 0 !== t.acceleration && (this.acceleration = D(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), t.position && (this.position = st({}, t.position)));
            }
        }
        class Xe {
            constructor(){
                this.angle = new Ve, this.attract = new Ue, this.center = new $e, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new qe, this.path = new Ge, this.outModes = new We, this.random = !1, this.size = !1, this.speed = 2, this.spin = new Ne, this.straight = !1, this.trail = new je, this.vibrate = !1, this.warp = !1;
            }
            load(t) {
                if (!t) return;
                this.angle.load(bt(t.angle) ? {
                    value: t.angle
                } : t.angle), this.attract.load(t.attract), this.center.load(t.center), void 0 !== t.decay && (this.decay = D(t.decay)), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.distance && (this.distance = bt(t.distance) ? {
                    horizontal: t.distance,
                    vertical: t.distance
                } : {
                    ...t.distance
                }), void 0 !== t.drift && (this.drift = D(t.drift)), void 0 !== t.enable && (this.enable = t.enable), this.gravity.load(t.gravity);
                const e = t.outModes;
                void 0 !== e && (_t(e) ? this.outModes.load(e) : this.outModes.load({
                    default: e
                })), this.path.load(t.path), void 0 !== t.random && (this.random = t.random), void 0 !== t.size && (this.size = t.size), void 0 !== t.speed && (this.speed = D(t.speed)), this.spin.load(t.spin), void 0 !== t.straight && (this.straight = t.straight), this.trail.load(t.trail), void 0 !== t.vibrate && (this.vibrate = t.vibrate), void 0 !== t.warp && (this.warp = t.warp);
            }
        }
        class Ye extends Pe {
            constructor(){
                super(), this.destroy = "none", this.speed = 2;
            }
            load(t) {
                super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy);
            }
        }
        class Ze extends Re {
            constructor(){
                super(), this.animation = new Ye, this.value = 1;
            }
            load(t) {
                if (!t) return;
                super.load(t);
                const e = t.animation;
                void 0 !== e && this.animation.load(e);
            }
        }
        class Qe {
            constructor(){
                this.enable = !1, this.width = 1920, this.height = 1080;
            }
            load(t) {
                if (!t) return;
                void 0 !== t.enable && (this.enable = t.enable);
                const e = t.width;
                void 0 !== e && (this.width = e);
                const i = t.height;
                void 0 !== i && (this.height = i);
            }
        }
        class Je {
            constructor(){
                this.mode = "delete", this.value = 0;
            }
            load(t) {
                t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value));
            }
        }
        class Ke {
            constructor(){
                this.density = new Qe, this.limit = new Je, this.value = 0;
            }
            load(t) {
                t && (this.density.load(t.density), this.limit.load(t.limit), void 0 !== t.value && (this.value = t.value));
            }
        }
        class ti {
            constructor(){
                this.blur = 0, this.color = new ce, this.enable = !1, this.offset = {
                    x: 0,
                    y: 0
                }, this.color.value = "#000";
            }
            load(t) {
                t && (void 0 !== t.blur && (this.blur = t.blur), this.color = ce.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
            }
        }
        class ei {
            constructor(){
                this.close = !0, this.fill = !0, this.options = {}, this.type = "circle";
            }
            load(t) {
                if (!t) return;
                const e = t.options;
                if (void 0 !== e) for(const t in e){
                    const i = e[t];
                    i && (this.options[t] = st(this.options[t] ?? {}, i));
                }
                void 0 !== t.close && (this.close = t.close), void 0 !== t.fill && (this.fill = t.fill), void 0 !== t.type && (this.type = t.type);
            }
        }
        class ii extends Pe {
            constructor(){
                super(), this.destroy = "none", this.speed = 5;
            }
            load(t) {
                super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy);
            }
        }
        class si extends Re {
            constructor(){
                super(), this.animation = new ii, this.value = 3;
            }
            load(t) {
                if (super.load(t), !t) return;
                const e = t.animation;
                void 0 !== e && this.animation.load(e);
            }
        }
        class oi {
            constructor(){
                this.width = 0;
            }
            load(t) {
                t && (void 0 !== t.color && (this.color = De.create(this.color, t.color)), void 0 !== t.width && (this.width = D(t.width)), void 0 !== t.opacity && (this.opacity = D(t.opacity)));
            }
        }
        class ni extends Ie {
            constructor(){
                super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1;
            }
            load(t) {
                super.load(t), t && (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate), void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate), void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate));
            }
        }
        class ai {
            constructor(t, e){
                this._engine = t, this._container = e, this.bounce = new Le, this.collisions = new Ae, this.color = new De, this.color.value = "#fff", this.effect = new Be, this.groups = {}, this.move = new Xe, this.number = new Ke, this.opacity = new Ze, this.reduceDuplicates = !1, this.shadow = new ti, this.shape = new ei, this.size = new si, this.stroke = new oi, this.zIndex = new ni;
            }
            load(t) {
                if (!t) return;
                if (void 0 !== t.groups) for (const e of Object.keys(t.groups)){
                    if (!Object.hasOwn(t.groups, e)) continue;
                    const i = t.groups[e];
                    void 0 !== i && (this.groups[e] = st(this.groups[e] ?? {}, i));
                }
                void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates), this.bounce.load(t.bounce), this.color.load(De.create(this.color, t.color)), this.effect.load(t.effect), this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.zIndex.load(t.zIndex), this.collisions.load(t.collisions), void 0 !== t.interactivity && (this.interactivity = st({}, t.interactivity));
                const e = t.stroke;
                if (e && (this.stroke = dt(e, (t)=>{
                    const e = new oi;
                    return e.load(t), e;
                })), this._container) {
                    const e = this._engine.updaters.get(this._container);
                    if (e) for (const i of e)i.loadOptions && i.loadOptions(this, t);
                    const i = this._engine.interactors.get(this._container);
                    if (i) for (const e of i)e.loadParticlesOptions && e.loadParticlesOptions(this, t);
                }
            }
        }
        function ri(t, ...e) {
            for (const i of e)t.load(i);
        }
        function ci(t, e, ...i) {
            const s = new ai(t, e);
            return ri(s, ...i), s;
        }
        class li {
            constructor(t, e){
                this._findDefaultTheme = (t)=>this.themes.find((e)=>e.default.value && e.default.mode === t) ?? this.themes.find((t)=>t.default.value && "any" === t.default.mode), this._importPreset = (t)=>{
                    this.load(this._engine.getPreset(t));
                }, this._engine = t, this._container = e, this.autoPlay = !0, this.background = new le, this.backgroundMask = new de, this.clear = !0, this.defaultThemes = {}, this.delay = 0, this.fullScreen = new ue, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new be(t, e), this.manualParticles = [], this.particles = ci(this._engine, this._container), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.smooth = !1, this.style = {}, this.themes = [], this.zLayers = 100;
            }
            load(t) {
                if (!t) return;
                void 0 !== t.preset && dt(t.preset, (t)=>this._importPreset(t)), void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.clear && (this.clear = t.clear), void 0 !== t.name && (this.name = t.name), void 0 !== t.delay && (this.delay = D(t.delay));
                const e = t.detectRetina;
                void 0 !== e && (this.detectRetina = e), void 0 !== t.duration && (this.duration = D(t.duration));
                const i = t.fpsLimit;
                void 0 !== i && (this.fpsLimit = i), void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur), void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), void 0 !== t.zLayers && (this.zLayers = t.zLayers), this.background.load(t.background);
                const s = t.fullScreen;
                gt(s) ? this.fullScreen.enable = s : this.fullScreen.load(s), this.backgroundMask.load(t.backgroundMask), this.interactivity.load(t.interactivity), t.manualParticles && (this.manualParticles = t.manualParticles.map((t)=>{
                    const e = new xe;
                    return e.load(t), e;
                })), this.particles.load(t.particles), this.style = st(this.style, t.style), this._engine.loadOptions(this, t), void 0 !== t.smooth && (this.smooth = t.smooth);
                const o = this._engine.interactors.get(this._container);
                if (o) for (const e of o)e.loadOptions && e.loadOptions(this, t);
                if (void 0 !== t.responsive) for (const e of t.responsive){
                    const t = new _e;
                    t.load(e), this.responsive.push(t);
                }
                if (this.responsive.sort((t, e)=>t.maxWidth - e.maxWidth), void 0 !== t.themes) for (const e of t.themes){
                    const t = this.themes.find((t)=>t.name === e.name);
                    if (t) t.load(e);
                    else {
                        const t = new Me;
                        t.load(e), this.themes.push(t);
                    }
                }
                this.defaultThemes.dark = this._findDefaultTheme("dark")?.name, this.defaultThemes.light = this._findDefaultTheme("light")?.name;
            }
            setResponsive(t, e, i) {
                this.load(i);
                const s = this.responsive.find((i)=>"screen" === i.mode && screen ? i.maxWidth > screen.availWidth : i.maxWidth * e > t);
                return this.load(s?.options), s?.maxWidth;
            }
            setTheme(t) {
                if (t) {
                    const e = this.themes.find((e)=>e.name === t);
                    e && this.load(e.options);
                } else {
                    const t = N("(prefers-color-scheme: dark)"), e = t && t.matches, i = this._findDefaultTheme(e ? "dark" : "light");
                    i && this.load(i.options);
                }
            }
        }
        class hi {
            constructor(t, e){
                this.container = e, this._engine = t, this._interactors = t.getInteractors(this.container, !0), this._externalInteractors = [], this._particleInteractors = [];
            }
            async externalInteract(t) {
                for (const e of this._externalInteractors)e.isEnabled() && await e.interact(t);
            }
            handleClickMode(t) {
                for (const e of this._externalInteractors)e.handleClickMode && e.handleClickMode(t);
            }
            init() {
                this._externalInteractors = [], this._particleInteractors = [];
                for (const t of this._interactors){
                    switch(t.type){
                        case "external":
                            this._externalInteractors.push(t);
                            break;
                        case "particles":
                            this._particleInteractors.push(t);
                    }
                    t.init();
                }
            }
            async particlesInteract(t, e) {
                for (const i of this._externalInteractors)i.clear(t, e);
                for (const i of this._particleInteractors)i.isEnabled(t) && await i.interact(t, e);
            }
            async reset(t) {
                for (const e of this._externalInteractors)e.isEnabled() && e.reset(t);
                for (const e of this._particleInteractors)e.isEnabled(t) && e.reset(t);
            }
        }
        function di(t) {
            if (!Z(t.outMode, t.checkModes)) return;
            const e = 2 * t.radius;
            t.coord > t.maxCoord - e ? t.setCb(-t.radius) : t.coord < e && t.setCb(t.radius);
        }
        class ui {
            constructor(t, e, i, s, o, n){
                this.container = i, this._calcPosition = (t, e, i, s = 0)=>{
                    for (const [, s] of t.plugins){
                        const t = void 0 !== s.particlePosition ? s.particlePosition(e, this) : void 0;
                        if (t) return m.create(t.x, t.y, i);
                    }
                    const o = B({
                        size: t.canvas.size,
                        position: e
                    }), n = m.create(o.x, o.y, i), a = this.getRadius(), r = this.options.move.outModes, c = (e)=>{
                        di({
                            outMode: e,
                            checkModes: [
                                "bounce",
                                "bounce-horizontal"
                            ],
                            coord: n.x,
                            maxCoord: t.canvas.size.width,
                            setCb: (t)=>n.x += t,
                            radius: a
                        });
                    }, l = (e)=>{
                        di({
                            outMode: e,
                            checkModes: [
                                "bounce",
                                "bounce-vertical"
                            ],
                            coord: n.y,
                            maxCoord: t.canvas.size.height,
                            setCb: (t)=>n.y += t,
                            radius: a
                        });
                    };
                    return c(r.left ?? r.default), c(r.right ?? r.default), l(r.top ?? r.default), l(r.bottom ?? r.default), this._checkOverlap(n, s) ? this._calcPosition(t, void 0, i, s + 1) : n;
                }, this._calculateVelocity = ()=>{
                    const t = E(this.direction).copy(), e = this.options.move;
                    if ("inside" === e.direction || "outside" === e.direction) return t;
                    const i = Math.PI / 180 * P(e.angle.value), s = Math.PI / 180 * P(e.angle.offset), o = {
                        left: s - .5 * i,
                        right: s + .5 * i
                    };
                    return e.straight || (t.angle += C(D(o.left, o.right))), e.random && "number" == typeof e.speed && (t.length *= _()), t;
                }, this._checkOverlap = (t, e = 0)=>{
                    const i = this.options.collisions, s = this.getRadius();
                    if (!i.enable) return !1;
                    const o = i.overlap;
                    if (o.enable) return !1;
                    const n = o.retries;
                    if (n >= 0 && e > n) throw new Error(`${f} particle is overlapping and can't be placed`);
                    return !!this.container.particles.find((e)=>T(t, e.position) < s + e.getRadius());
                }, this._getRollColor = (t)=>{
                    if (!t || !this.roll || !this.backColor && !this.roll.alter) return t;
                    const e = this.roll.horizontal && this.roll.vertical ? 2 : 1, i = this.roll.horizontal ? .5 * Math.PI : 0;
                    return Math.floor(((this.roll.angle ?? 0) + i) / (Math.PI / e)) % 2 ? this.backColor ? this.backColor : this.roll.alter ? se(t, this.roll.alter.type, this.roll.alter.value) : t : t;
                }, this._initPosition = (t)=>{
                    const e = this.container, i = P(this.options.zIndex.value);
                    this.position = this._calcPosition(e, t, z(i, 0, e.zLayers)), this.initialPosition = this.position.copy();
                    const s = e.canvas.size;
                    switch(this.moveCenter = {
                        ...vt(this.options.move.center, s),
                        radius: this.options.move.center.radius ?? 0,
                        mode: this.options.move.center.mode ?? "percent"
                    }, this.direction = I(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction){
                        case "inside":
                            this.outType = "inside";
                            break;
                        case "outside":
                            this.outType = "outside";
                    }
                    this.offset = v.origin;
                }, this._engine = t, this.init(e, s, o, n);
            }
            destroy(t) {
                if (this.unbreakable || this.destroyed) return;
                this.destroyed = !0, this.bubble.inRange = !1, this.slow.inRange = !1;
                const e = this.container, i = this.pathGenerator, s = e.shapeDrawers.get(this.shape);
                s && s.particleDestroy && s.particleDestroy(this);
                for (const [, i] of e.plugins)i.particleDestroyed && i.particleDestroyed(this, t);
                for (const i of e.particles.updaters)i.particleDestroyed && i.particleDestroyed(this, t);
                i && i.reset(this), this._engine.dispatchEvent("particleDestroyed", {
                    container: this.container,
                    data: {
                        particle: this
                    }
                });
            }
            draw(t) {
                const e = this.container, i = e.canvas;
                for (const [, s] of e.plugins)i.drawParticlePlugin(s, this, t);
                i.drawParticle(this, t);
            }
            getFillColor() {
                return this._getRollColor(this.bubble.color ?? Ht(this.color));
            }
            getMass() {
                return this.getRadius() ** 2 * Math.PI * .5;
            }
            getPosition() {
                return {
                    x: this.position.x + this.offset.x,
                    y: this.position.y + this.offset.y,
                    z: this.position.z
                };
            }
            getRadius() {
                return this.bubble.radius ?? this.size.value;
            }
            getStrokeColor() {
                return this._getRollColor(this.bubble.color ?? Ht(this.strokeColor));
            }
            init(t, e, i, s) {
                const o = this.container, n = this._engine;
                this.id = t, this.group = s, this.effectClose = !0, this.effectFill = !0, this.shapeClose = !0, this.shapeFill = !0, this.pathRotation = !1, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.rotation = 0, this.misplaced = !1, this.retina = {
                    maxDistance: {}
                }, this.outType = "normal", this.ignoresResizeRatio = !0;
                const a = o.retina.pixelRatio, r = o.actualOptions, c = ci(this._engine, o, r.particles), l = c.effect.type, h = c.shape.type, { reduceDuplicates: d } = c;
                this.effect = ut(l, this.id, d), this.shape = ut(h, this.id, d);
                const u = c.effect, p = c.shape;
                if (i) {
                    if (i.effect && i.effect.type) {
                        const t = ut(i.effect.type, this.id, d);
                        t && (this.effect = t, u.load(i.effect));
                    }
                    if (i.shape && i.shape.type) {
                        const t = ut(i.shape.type, this.id, d);
                        t && (this.shape = t, p.load(i.shape));
                    }
                }
                this.effectData = function(t, e, i, s) {
                    const o = e.options[t];
                    if (o) return st({
                        close: e.close,
                        fill: e.fill
                    }, ut(o, i, s));
                }(this.effect, u, this.id, d), this.shapeData = function(t, e, i, s) {
                    const o = e.options[t];
                    if (o) return st({
                        close: e.close,
                        fill: e.fill
                    }, ut(o, i, s));
                }(this.shape, p, this.id, d), c.load(i);
                const f = this.effectData;
                f && c.load(f.particles);
                const m = this.shapeData;
                m && c.load(m.particles);
                const v = new be(n, o);
                v.load(o.actualOptions.interactivity), v.load(c.interactivity), this.interactivity = v, this.effectFill = f?.fill ?? c.effect.fill, this.effectClose = f?.close ?? c.effect.close, this.shapeFill = m?.fill ?? c.shape.fill, this.shapeClose = m?.close ?? c.shape.close, this.options = c;
                const y = this.options.move.path;
                this.pathDelay = 1e3 * P(y.delay.value), y.generator && (this.pathGenerator = this._engine.getPathGenerator(y.generator), this.pathGenerator && o.addPath(y.generator, this.pathGenerator) && this.pathGenerator.init(o)), o.retina.initParticle(this), this.size = ft(this.options.size, a), this.bubble = {
                    inRange: !1
                }, this.slow = {
                    inRange: !1,
                    factor: 1
                }, this._initPosition(e), this.initialVelocity = this._calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - P(this.options.move.decay);
                const g = o.particles;
                g.setLastZIndex(this.position.z), this.zIndexFactor = this.position.z / o.zLayers, this.sides = 24;
                let w = o.effectDrawers.get(this.effect);
                w || (w = this._engine.getEffectDrawer(this.effect), w && o.effectDrawers.set(this.effect, w)), w && w.loadEffect && w.loadEffect(this);
                let b = o.shapeDrawers.get(this.shape);
                b || (b = this._engine.getShapeDrawer(this.shape), b && o.shapeDrawers.set(this.shape, b)), b && b.loadShape && b.loadShape(this);
                const x = b?.getSidesCount;
                x && (this.sides = x(this)), this.spawning = !1, this.shadowColor = Dt(this.options.shadow.color);
                for (const t of g.updaters)t.init(this);
                for (const t of g.movers)t.init && t.init(this);
                w && w.particleInit && w.particleInit(o, this), b && b.particleInit && b.particleInit(o, this);
                for (const [, t] of o.plugins)t.particleCreated && t.particleCreated(this);
            }
            isInsideCanvas() {
                const t = this.getRadius(), e = this.container.canvas.size, i = this.position;
                return i.x >= -t && i.y >= -t && i.y <= e.height + t && i.x <= e.width + t;
            }
            isVisible() {
                return !this.destroyed && !this.spawning && this.isInsideCanvas();
            }
            reset() {
                for (const t of this.container.particles.updaters)t.reset && t.reset(this);
            }
        }
        class pi {
            constructor(t, e){
                this.position = t, this.particle = e;
            }
        }
        class fi {
            constructor(t, e){
                this.position = {
                    x: t,
                    y: e
                };
            }
        }
        class mi extends fi {
            constructor(t, e, i, s){
                super(t, e), this.size = {
                    height: s,
                    width: i
                };
            }
            contains(t) {
                const e = this.size.width, i = this.size.height, s = this.position;
                return t.x >= s.x && t.x <= s.x + e && t.y >= s.y && t.y <= s.y + i;
            }
            intersects(t) {
                t instanceof vi && t.intersects(this);
                const e = this.size.width, i = this.size.height, s = this.position, o = t.position, n = t instanceof mi ? t.size : {
                    width: 0,
                    height: 0
                }, a = n.width, r = n.height;
                return o.x < s.x + e && o.x + a > s.x && o.y < s.y + i && o.y + r > s.y;
            }
        }
        class vi extends fi {
            constructor(t, e, i){
                super(t, e), this.radius = i;
            }
            contains(t) {
                return T(t, this.position) <= this.radius;
            }
            intersects(t) {
                const e = this.position, i = t.position, s = Math.abs(i.x - e.x), o = Math.abs(i.y - e.y), n = this.radius;
                if (t instanceof vi) return n + t.radius > Math.sqrt(s ** 2 + o ** 2);
                if (t instanceof mi) {
                    const { width: e, height: i } = t.size;
                    return Math.pow(s - e, 2) + Math.pow(o - i, 2) <= n ** 2 || s <= n + e && o <= n + i || s <= e || o <= i;
                }
                return !1;
            }
        }
        class yi {
            constructor(t, e){
                this.rectangle = t, this.capacity = e, this._subdivide = ()=>{
                    const { x: t, y: e } = this.rectangle.position, { width: i, height: s } = this.rectangle.size, { capacity: o } = this;
                    for(let n = 0; n < 4; n++)this._subs.push(new yi(new mi(t + .5 * i * (n % 2), e + .5 * s * (Math.round(.5 * n) - n % 2), .5 * i, .5 * s), o));
                    this._divided = !0;
                }, this._points = [], this._divided = !1, this._subs = [];
            }
            insert(t) {
                return !!this.rectangle.contains(t.position) && (this._points.length < this.capacity ? (this._points.push(t), !0) : (this._divided || this._subdivide(), this._subs.some((e)=>e.insert(t))));
            }
            query(t, e, i) {
                const s = i || [];
                if (!t.intersects(this.rectangle)) return [];
                for (const i of this._points)!t.contains(i.position) && T(t.position, i.position) > i.particle.getRadius() && (!e || e(i.particle)) || s.push(i.particle);
                if (this._divided) for (const i of this._subs)i.query(t, e, s);
                return s;
            }
            queryCircle(t, e, i) {
                return this.query(new vi(t.x, t.y, e), i);
            }
            queryRectangle(t, e, i) {
                return this.query(new mi(t.x, t.y, e.width, e.height), i);
            }
        }
        const gi = (t)=>{
            const { height: e, width: i } = t;
            return new mi(-0.25 * i, -0.25 * e, 1.5 * i, 1.5 * e);
        };
        class wi {
            constructor(t, e){
                this._addToPool = (...t)=>{
                    for (const e of t)this._pool.push(e);
                }, this._applyDensity = (t, e, i)=>{
                    const s = t.number;
                    if (!t.number.density?.enable) return void (void 0 === i ? this._limit = s.limit.value : s.limit && this._groupLimits.set(i, s.limit.value));
                    const o = this._initDensityFactor(s.density), n = s.value, a = s.limit.value > 0 ? s.limit.value : n, r = Math.min(n, a) * o + e, c = Math.min(this.count, this.filter((t)=>t.group === i).length);
                    void 0 === i ? this._limit = s.limit.value * o : this._groupLimits.set(i, s.limit.value * o), c < r ? this.push(Math.abs(r - c), void 0, t, i) : c > r && this.removeQuantity(c - r, i);
                }, this._initDensityFactor = (t)=>{
                    const e = this._container;
                    if (!e.canvas.element || !t.enable) return 1;
                    const i = e.canvas.element, s = e.retina.pixelRatio;
                    return i.width * i.height / (t.height * t.width * s ** 2);
                }, this._pushParticle = (t, e, i, s)=>{
                    try {
                        let o = this._pool.pop();
                        o ? o.init(this._nextId, t, e, i) : o = new ui(this._engine, this._nextId, this._container, t, e, i);
                        let n = !0;
                        if (s && (n = s(o)), !n) return;
                        return this._array.push(o), this._zArray.push(o), this._nextId++, this._engine.dispatchEvent("particleAdded", {
                            container: this._container,
                            data: {
                                particle: o
                            }
                        }), o;
                    } catch (t) {
                        return void G().warning(`${f} adding particle: ${t}`);
                    }
                }, this._removeParticle = (t, e, i)=>{
                    const s = this._array[t];
                    if (!s || s.group !== e) return !1;
                    const o = this._zArray.indexOf(s);
                    return this._array.splice(t, 1), this._zArray.splice(o, 1), s.destroy(i), this._engine.dispatchEvent("particleRemoved", {
                        container: this._container,
                        data: {
                            particle: s
                        }
                    }), this._addToPool(s), !0;
                }, this._engine = t, this._container = e, this._nextId = 0, this._array = [], this._zArray = [], this._pool = [], this._limit = 0, this._groupLimits = new Map, this._needsSort = !1, this._lastZIndex = 0, this._interactionManager = new hi(t, e);
                const i = e.canvas.size;
                this.quadTree = new yi(gi(i), 4), this.movers = this._engine.getMovers(e, !0), this.updaters = this._engine.getUpdaters(e, !0);
            }
            get count() {
                return this._array.length;
            }
            addManualParticles() {
                const t = this._container, e = t.actualOptions;
                for (const i of e.manualParticles)this.addParticle(i.position ? vt(i.position, t.canvas.size) : void 0, i.options);
            }
            addParticle(t, e, i, s) {
                const o = this._container.actualOptions.particles.number.limit, n = void 0 === i ? this._limit : this._groupLimits.get(i) ?? this._limit, a = this.count;
                if (n > 0) {
                    if ("delete" === o.mode) {
                        const t = a + 1 - n;
                        t > 0 && this.removeQuantity(t);
                    } else if ("wait" === o.mode && a >= n) return;
                }
                return this._pushParticle(t, e, i, s);
            }
            clear() {
                this._array = [], this._zArray = [];
            }
            destroy() {
                this._array = [], this._zArray = [], this.movers = [], this.updaters = [];
            }
            async draw(t) {
                const e = this._container, i = e.canvas;
                i.clear(), await this.update(t);
                for (const [, s] of e.plugins)i.drawPlugin(s, t);
                for (const e of this._zArray)e.draw(t);
            }
            filter(t) {
                return this._array.filter(t);
            }
            find(t) {
                return this._array.find(t);
            }
            get(t) {
                return this._array[t];
            }
            handleClickMode(t) {
                this._interactionManager.handleClickMode(t);
            }
            init() {
                const t = this._container, e = t.actualOptions;
                this._lastZIndex = 0, this._needsSort = !1;
                let i = !1;
                this.updaters = this._engine.getUpdaters(t, !0), this._interactionManager.init();
                for (const [, e] of t.plugins)if (void 0 !== e.particlesInitialization && (i = e.particlesInitialization()), i) break;
                this._interactionManager.init();
                for (const [, e] of t.pathGenerators)e.init(t);
                if (this.addManualParticles(), !i) {
                    const t = e.particles, i = t.groups;
                    for(const e in i){
                        const s = i[e];
                        for(let i = this.count, o = 0; o < s.number?.value && i < t.number.value; i++, o++)this.addParticle(void 0, s, e);
                    }
                    for(let e = this.count; e < t.number.value; e++)this.addParticle();
                }
            }
            push(t, e, i, s) {
                for(let o = 0; o < t; o++)this.addParticle(e?.position, i, s);
            }
            async redraw() {
                this.clear(), this.init(), await this.draw({
                    value: 0,
                    factor: 0
                });
            }
            remove(t, e, i) {
                this.removeAt(this._array.indexOf(t), void 0, e, i);
            }
            removeAt(t, e = 1, i, s) {
                if (t < 0 || t > this.count) return;
                let o = 0;
                for(let n = t; o < e && n < this.count; n++)this._removeParticle(n--, i, s) && o++;
            }
            removeQuantity(t, e) {
                this.removeAt(0, t, e);
            }
            setDensity() {
                const t = this._container.actualOptions, e = t.particles.groups;
                for(const t in e)this._applyDensity(e[t], 0, t);
                this._applyDensity(t.particles, t.manualParticles.length);
            }
            setLastZIndex(t) {
                this._lastZIndex = t, this._needsSort = this._needsSort || this._lastZIndex < t;
            }
            setResizeFactor(t) {
                this._resizeFactor = t;
            }
            async update(t) {
                const e = this._container, i = new Set;
                this.quadTree = new yi(gi(e.canvas.size), 4);
                for (const [, t] of e.pathGenerators)t.update();
                for (const [, i] of e.plugins)i.update && await i.update(t);
                const s = this._resizeFactor;
                for (const e of this._array){
                    s && !e.ignoresResizeRatio && (e.position.x *= s.width, e.position.y *= s.height, e.initialPosition.x *= s.width, e.initialPosition.y *= s.height), e.ignoresResizeRatio = !1, await this._interactionManager.reset(e);
                    for (const [, i] of this._container.plugins){
                        if (e.destroyed) break;
                        i.particleUpdate && i.particleUpdate(e, t);
                    }
                    for (const i of this.movers)i.isEnabled(e) && i.move(e, t);
                    e.destroyed ? i.add(e) : this.quadTree.insert(new pi(e.getPosition(), e));
                }
                if (i.size) {
                    const t = (t)=>!i.has(t);
                    this._array = this.filter(t), this._zArray = this._zArray.filter(t);
                    for (const t of i)this._engine.dispatchEvent("particleRemoved", {
                        container: this._container,
                        data: {
                            particle: t
                        }
                    });
                    this._addToPool(...i);
                }
                await this._interactionManager.externalInteract(t);
                for (const e of this._array){
                    for (const i of this.updaters)i.update(e, t);
                    e.destroyed || e.spawning || await this._interactionManager.particlesInteract(e, t);
                }
                if (delete this._resizeFactor, this._needsSort) {
                    const t = this._zArray;
                    t.sort((t, e)=>e.position.z - t.position.z || t.id - e.id), this._lastZIndex = t[t.length - 1].position.z, this._needsSort = !1;
                }
            }
        }
        class bi {
            constructor(t){
                this.container = t, this.pixelRatio = 1, this.reduceFactor = 1;
            }
            init() {
                const t = this.container, e = t.actualOptions;
                this.pixelRatio = !e.detectRetina || j() ? 1 : window.devicePixelRatio, this.reduceFactor = 1;
                const i = this.pixelRatio, s = t.canvas;
                if (s.element) {
                    const t = s.element;
                    s.size.width = t.offsetWidth * i, s.size.height = t.offsetHeight * i;
                }
                const o = e.particles, n = o.move;
                this.maxSpeed = P(n.gravity.maxSpeed) * i, this.sizeAnimationSpeed = P(o.size.animation.speed) * i;
            }
            initParticle(t) {
                const e = t.options, i = this.pixelRatio, s = e.move, o = s.distance, n = t.retina;
                n.moveDrift = P(s.drift) * i, n.moveSpeed = P(s.speed) * i, n.sizeAnimationSpeed = P(e.size.animation.speed) * i;
                const a = n.maxDistance;
                a.horizontal = void 0 !== o.horizontal ? o.horizontal * i : void 0, a.vertical = void 0 !== o.vertical ? o.vertical * i : void 0, n.maxSpeed = P(s.gravity.maxSpeed) * i;
            }
        }
        function xi(t) {
            return t && !t.destroyed;
        }
        function _i(t, e, ...i) {
            const s = new li(t, e);
            return ri(s, ...i), s;
        }
        class zi {
            constructor(t, e, i){
                this._intersectionManager = (t)=>{
                    if (xi(this) && this.actualOptions.pauseOnOutsideViewport) for (const e of t)e.target === this.interactivity.element && (e.isIntersecting ? this.play : this.pause)();
                }, this._nextFrame = async (t)=>{
                    try {
                        if (!this._smooth && void 0 !== this._lastFrameTime && t < this._lastFrameTime + 1e3 / this.fpsLimit) return void this.draw(!1);
                        this._lastFrameTime ??= t;
                        const e = function(t, e = 60, i = !1) {
                            return {
                                value: t,
                                factor: i ? 60 / e : 60 * t / 1e3
                            };
                        }(t - this._lastFrameTime, this.fpsLimit, this._smooth);
                        if (this.addLifeTime(e.value), this._lastFrameTime = t, e.value > 1e3) return void this.draw(!1);
                        if (await this.particles.draw(e), !this.alive()) return void this.destroy();
                        this.getAnimationStatus() && this.draw(!1);
                    } catch (t) {
                        G().error(`${f} in animation loop`, t);
                    }
                }, this._engine = t, this.id = Symbol(e), this.fpsLimit = 120, this._smooth = !1, this._delay = 0, this._duration = 0, this._lifeTime = 0, this._firstStart = !0, this.started = !1, this.destroyed = !1, this._paused = !0, this._lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = i, this._initialSourceOptions = i, this.retina = new bi(this), this.canvas = new ne(this), this.particles = new wi(this._engine, this), this.pathGenerators = new Map, this.interactivity = {
                    mouse: {
                        clicking: !1,
                        inside: !1
                    }
                }, this.plugins = new Map, this.effectDrawers = new Map, this.shapeDrawers = new Map, this._options = _i(this._engine, this), this.actualOptions = _i(this._engine, this), this._eventListeners = new re(this), this._intersectionObserver = X((t)=>this._intersectionManager(t)), this._engine.dispatchEvent("containerBuilt", {
                    container: this
                });
            }
            get options() {
                return this._options;
            }
            get sourceOptions() {
                return this._sourceOptions;
            }
            addClickHandler(t) {
                if (!xi(this)) return;
                const e = this.interactivity.element;
                if (!e) return;
                const i = (e, i, s)=>{
                    if (!xi(this)) return;
                    const o = this.retina.pixelRatio, n = {
                        x: i.x * o,
                        y: i.y * o
                    }, a = this.particles.quadTree.queryCircle(n, s * o);
                    t(e, a);
                };
                let s = !1, o = !1;
                e.addEventListener("click", (t)=>{
                    if (!xi(this)) return;
                    const e = t, s = {
                        x: e.offsetX || e.clientX,
                        y: e.offsetY || e.clientY
                    };
                    i(t, s, 1);
                }), e.addEventListener("touchstart", ()=>{
                    xi(this) && (s = !0, o = !1);
                }), e.addEventListener("touchmove", ()=>{
                    xi(this) && (o = !0);
                }), e.addEventListener("touchend", (t)=>{
                    if (xi(this)) {
                        if (s && !o) {
                            const e = t;
                            let s = e.touches[e.touches.length - 1];
                            if (!s && (s = e.changedTouches[e.changedTouches.length - 1], !s)) return;
                            const o = this.canvas.element, n = o ? o.getBoundingClientRect() : void 0, a = {
                                x: s.clientX - (n ? n.left : 0),
                                y: s.clientY - (n ? n.top : 0)
                            };
                            i(t, a, Math.max(s.radiusX, s.radiusY));
                        }
                        s = !1, o = !1;
                    }
                }), e.addEventListener("touchcancel", ()=>{
                    xi(this) && (s = !1, o = !1);
                });
            }
            addLifeTime(t) {
                this._lifeTime += t;
            }
            addPath(t, e, i = !1) {
                return !(!xi(this) || !i && this.pathGenerators.has(t)) && (this.pathGenerators.set(t, e), !0);
            }
            alive() {
                return !this._duration || this._lifeTime <= this._duration;
            }
            destroy() {
                if (!xi(this)) return;
                this.stop(), this.particles.destroy(), this.canvas.destroy();
                for (const [, t] of this.effectDrawers)t.destroy && t.destroy(this);
                for (const [, t] of this.shapeDrawers)t.destroy && t.destroy(this);
                for (const t of this.effectDrawers.keys())this.effectDrawers.delete(t);
                for (const t of this.shapeDrawers.keys())this.shapeDrawers.delete(t);
                this._engine.clearPlugins(this), this.destroyed = !0;
                const t = this._engine.dom(), e = t.findIndex((t)=>t === this);
                e >= 0 && t.splice(e, 1), this._engine.dispatchEvent("containerDestroyed", {
                    container: this
                });
            }
            draw(t) {
                if (!xi(this)) return;
                let e = t;
                this._drawAnimationFrame = requestAnimationFrame(async (t)=>{
                    e && (this._lastFrameTime = void 0, e = !1), await this._nextFrame(t);
                });
            }
            async export(t, e = {}) {
                for (const [, i] of this.plugins){
                    if (!i.export) continue;
                    const s = await i.export(t, e);
                    if (s.supported) return s.blob;
                }
                G().error(`${f} - Export plugin with type ${t} not found`);
            }
            getAnimationStatus() {
                return !this._paused && !this.pageHidden && xi(this);
            }
            handleClickMode(t) {
                if (xi(this)) {
                    this.particles.handleClickMode(t);
                    for (const [, e] of this.plugins)e.handleClickMode && e.handleClickMode(t);
                }
            }
            async init() {
                if (!xi(this)) return;
                const t = this._engine.getSupportedEffects();
                for (const e of t){
                    const t = this._engine.getEffectDrawer(e);
                    t && this.effectDrawers.set(e, t);
                }
                const e = this._engine.getSupportedShapes();
                for (const t of e){
                    const e = this._engine.getShapeDrawer(t);
                    e && this.shapeDrawers.set(t, e);
                }
                this._options = _i(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = _i(this._engine, this, this._options);
                const i = this._engine.getAvailablePlugins(this);
                for (const [t, e] of i)this.plugins.set(t, e);
                this.retina.init(), await this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this._duration = 1e3 * P(this.actualOptions.duration), this._delay = 1e3 * P(this.actualOptions.delay), this._lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120, this._smooth = this.actualOptions.smooth;
                for (const [, t] of this.effectDrawers)t.init && await t.init(this);
                for (const [, t] of this.shapeDrawers)t.init && await t.init(this);
                for (const [, t] of this.plugins)t.init && await t.init();
                this._engine.dispatchEvent("containerInit", {
                    container: this
                }), this.particles.init(), this.particles.setDensity();
                for (const [, t] of this.plugins)t.particlesSetup && t.particlesSetup();
                this._engine.dispatchEvent("particlesSetup", {
                    container: this
                });
            }
            async loadTheme(t) {
                xi(this) && (this._currentTheme = t, await this.refresh());
            }
            pause() {
                if (xi(this) && (void 0 !== this._drawAnimationFrame && (cancelAnimationFrame(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
                    for (const [, t] of this.plugins)t.pause && t.pause();
                    this.pageHidden || (this._paused = !0), this._engine.dispatchEvent("containerPaused", {
                        container: this
                    });
                }
            }
            play(t) {
                if (!xi(this)) return;
                const e = this._paused || t;
                if (!this._firstStart || this.actualOptions.autoPlay) {
                    if (this._paused && (this._paused = !1), e) for (const [, t] of this.plugins)t.play && t.play();
                    this._engine.dispatchEvent("containerPlay", {
                        container: this
                    }), this.draw(e || !1);
                } else this._firstStart = !1;
            }
            async refresh() {
                if (xi(this)) return this.stop(), this.start();
            }
            async reset() {
                if (xi(this)) return this._initialSourceOptions = void 0, this._options = _i(this._engine, this), this.actualOptions = _i(this._engine, this, this._options), this.refresh();
            }
            async start() {
                xi(this) && !this.started && (await this.init(), this.started = !0, await new Promise((t)=>{
                    this._delayTimeout = setTimeout(async ()=>{
                        this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element);
                        for (const [, t] of this.plugins)t.start && await t.start();
                        this._engine.dispatchEvent("containerStarted", {
                            container: this
                        }), this.play(), t();
                    }, this._delay);
                }));
            }
            stop() {
                if (xi(this) && this.started) {
                    this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout), this._firstStart = !0, this.started = !1, this._eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.stop(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element);
                    for (const [, t] of this.plugins)t.stop && t.stop();
                    for (const t of this.plugins.keys())this.plugins.delete(t);
                    this._sourceOptions = this._options, this._engine.dispatchEvent("containerStopped", {
                        container: this
                    });
                }
            }
            updateActualOptions() {
                this.actualOptions.responsive = [];
                const t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
                return this.actualOptions.setTheme(this._currentTheme), this._responsiveMaxWidth !== t && (this._responsiveMaxWidth = t, !0);
            }
        }
        class Mi {
            constructor(){
                this._listeners = new Map;
            }
            addEventListener(t, e) {
                this.removeEventListener(t, e);
                let i = this._listeners.get(t);
                i || (i = [], this._listeners.set(t, i)), i.push(e);
            }
            dispatchEvent(t, e) {
                const i = this._listeners.get(t);
                i && i.forEach((t)=>t(e));
            }
            hasEventListener(t) {
                return !!this._listeners.get(t);
            }
            removeAllEventListeners(t) {
                t ? this._listeners.delete(t) : this._listeners = new Map;
            }
            removeEventListener(t, e) {
                const i = this._listeners.get(t);
                if (!i) return;
                const s = i.length, o = i.indexOf(e);
                o < 0 || (1 === s ? this._listeners.delete(t) : i.splice(o, 1));
            }
        }
        function Ci(t, e, i, s = !1) {
            let o = e.get(t);
            return o && !s || (o = [
                ...i.values()
            ].map((e)=>e(t)), e.set(t, o)), o;
        }
        class Pi {
            constructor(){
                this._configs = new Map, this._domArray = [], this._eventDispatcher = new Mi, this._initialized = !1, this.plugins = [], this._initializers = {
                    interactors: new Map,
                    movers: new Map,
                    updaters: new Map
                }, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.effectDrawers = new Map, this.shapeDrawers = new Map, this.pathGenerators = new Map;
            }
            get configs() {
                const t = {};
                for (const [e, i] of this._configs)t[e] = i;
                return t;
            }
            get version() {
                return "3.0.3";
            }
            addConfig(t) {
                const e = t.name ?? "default";
                this._configs.set(e, t), this._eventDispatcher.dispatchEvent("configAdded", {
                    data: {
                        name: e,
                        config: t
                    }
                });
            }
            async addEffect(t, e, i = !0) {
                dt(t, (t)=>{
                    !this.getEffectDrawer(t) && this.effectDrawers.set(t, e);
                }), await this.refresh(i);
            }
            addEventListener(t, e) {
                this._eventDispatcher.addEventListener(t, e);
            }
            async addInteractor(t, e, i = !0) {
                this._initializers.interactors.set(t, e), await this.refresh(i);
            }
            async addMover(t, e, i = !0) {
                this._initializers.movers.set(t, e), await this.refresh(i);
            }
            async addParticleUpdater(t, e, i = !0) {
                this._initializers.updaters.set(t, e), await this.refresh(i);
            }
            async addPathGenerator(t, e, i = !0) {
                !this.getPathGenerator(t) && this.pathGenerators.set(t, e), await this.refresh(i);
            }
            async addPlugin(t, e = !0) {
                !this.getPlugin(t.id) && this.plugins.push(t), await this.refresh(e);
            }
            async addPreset(t, e, i = !1, s = !0) {
                (i || !this.getPreset(t)) && this.presets.set(t, e), await this.refresh(s);
            }
            async addShape(t, e, i = !0) {
                dt(t, (t)=>{
                    !this.getShapeDrawer(t) && this.shapeDrawers.set(t, e);
                }), await this.refresh(i);
            }
            clearPlugins(t) {
                this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t);
            }
            dispatchEvent(t, e) {
                this._eventDispatcher.dispatchEvent(t, e);
            }
            dom() {
                return this._domArray;
            }
            domItem(t) {
                const e = this.dom(), i = e[t];
                if (i && !i.destroyed) return i;
                e.splice(t, 1);
            }
            getAvailablePlugins(t) {
                const e = new Map;
                for (const i of this.plugins)i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t));
                return e;
            }
            getEffectDrawer(t) {
                return this.effectDrawers.get(t);
            }
            getInteractors(t, e = !1) {
                return Ci(t, this.interactors, this._initializers.interactors, e);
            }
            getMovers(t, e = !1) {
                return Ci(t, this.movers, this._initializers.movers, e);
            }
            getPathGenerator(t) {
                return this.pathGenerators.get(t);
            }
            getPlugin(t) {
                return this.plugins.find((e)=>e.id === t);
            }
            getPreset(t) {
                return this.presets.get(t);
            }
            getShapeDrawer(t) {
                return this.shapeDrawers.get(t);
            }
            getSupportedEffects() {
                return this.effectDrawers.keys();
            }
            getSupportedShapes() {
                return this.shapeDrawers.keys();
            }
            getUpdaters(t, e = !1) {
                return Ci(t, this.updaters, this._initializers.updaters, e);
            }
            init() {
                this._initialized || (this._initialized = !0);
            }
            async load(t) {
                const e = t.id ?? t.element?.id ?? `tsparticles${Math.floor(1e4 * _())}`, { index: s, url: o } = t, n = o ? await async function(t) {
                    const e = ut(t.url, t.index);
                    if (!e) return t.fallback;
                    const i = await fetch(e);
                    return i.ok ? i.json() : (G().error(`${f} ${i.status} while retrieving config file`), t.fallback);
                }({
                    fallback: t.options,
                    url: o,
                    index: s
                }) : t.options;
                let a = t.element ?? document.getElementById(e);
                a || (a = document.createElement("div"), a.id = e, document.body.append(a));
                const r = ut(n, s), c = this.dom(), l = c.findIndex((t)=>t.id.description === e);
                if (l >= 0) {
                    const t = this.domItem(l);
                    t && !t.destroyed && (t.destroy(), c.splice(l, 1));
                }
                let h;
                if ("canvas" === a.tagName.toLowerCase()) h = a, h.dataset[i] = "false";
                else {
                    const t = a.getElementsByTagName("canvas");
                    t.length ? (h = t[0], h.dataset[i] = "false") : (h = document.createElement("canvas"), h.dataset[i] = "true", a.appendChild(h));
                }
                h.style.width || (h.style.width = "100%"), h.style.height || (h.style.height = "100%");
                const d = new zi(this, e, r);
                return l >= 0 ? c.splice(l, 0, d) : c.push(d), d.canvas.loadCanvas(h), await d.start(), d;
            }
            loadOptions(t, e) {
                for (const i of this.plugins)i.loadOptions(t, e);
            }
            loadParticlesOptions(t, e, ...i) {
                const s = this.updaters.get(t);
                if (s) for (const t of s)t.loadOptions && t.loadOptions(e, ...i);
            }
            async refresh(t = !0) {
                t && this.dom().forEach((t)=>t.refresh());
            }
            removeEventListener(t, e) {
                this._eventDispatcher.removeEventListener(t, e);
            }
            setOnClickHandler(t) {
                const e = this.dom();
                if (!e.length) throw new Error(`${f} can only set click handlers after calling tsParticles.load()`);
                for (const i of e)i.addClickHandler(t);
            }
        }
        class Si {
            constructor(){
                this.key = "hsl", this.stringPrefix = "hsl";
            }
            handleColor(t) {
                const e = t.value.hsl ?? t.value;
                if (void 0 !== e.h && void 0 !== e.s && void 0 !== e.l) return Lt(e);
            }
            handleRangeColor(t) {
                const e = t.value.hsl ?? t.value;
                if (void 0 !== e.h && void 0 !== e.l) return Lt({
                    h: P(e.h),
                    l: P(e.l),
                    s: P(e.s)
                });
            }
            parseString(t) {
                if (!t.startsWith("hsl")) return;
                const e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                return e ? At({
                    a: e.length > 4 ? U(e[5]) : 1,
                    h: parseInt(e[1], 10),
                    l: parseInt(e[3], 10),
                    s: parseInt(e[2], 10)
                }) : void 0;
            }
        }
        class ki {
            constructor(){
                this.key = "rgb", this.stringPrefix = "rgb";
            }
            handleColor(t) {
                const e = t.value.rgb ?? t.value;
                if (void 0 !== e.r) return e;
            }
            handleRangeColor(t) {
                const e = t.value.rgb ?? t.value;
                if (void 0 !== e.r) return {
                    r: P(e.r),
                    g: P(e.g),
                    b: P(e.b)
                };
            }
            parseString(t) {
                if (!t.startsWith(this.stringPrefix)) return;
                const e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                return e ? {
                    a: e.length > 4 ? U(e[5]) : 1,
                    b: parseInt(e[3], 10),
                    g: parseInt(e[2], 10),
                    r: parseInt(e[1], 10)
                } : void 0;
            }
        }
        class Di {
            constructor(t){
                this.container = t, this.type = "external";
            }
        }
        class Oi {
            constructor(t){
                this.container = t, this.type = "particles";
            }
        }
        const Ti = function() {
            const t = new ki, e = new Si;
            St(t), St(e);
            const i = new Pi;
            return i.init(), i;
        }();
        j() || (window.tsParticles = Ti);
        class Ii {
            constructor(){
                this.angle = 90, this.count = 50, this.spread = 45, this.startVelocity = 45, this.decay = .9, this.gravity = 1, this.drift = 0, this.ticks = 200, this.position = {
                    x: 50,
                    y: 50
                }, this.colors = [
                    "#26ccff",
                    "#a25afd",
                    "#ff5e7e",
                    "#88ff5a",
                    "#fcff42",
                    "#ffa62d",
                    "#ff36ff"
                ], this.shapes = [
                    "square",
                    "circle"
                ], this.scalar = 1, this.zIndex = 100, this.disableForReducedMotion = !0, this.flat = !1, this.shapeOptions = {};
            }
            get origin() {
                return {
                    x: this.position.x / 100,
                    y: this.position.y / 100
                };
            }
            set origin(t) {
                this.position.x = 100 * t.x, this.position.y = 100 * t.y;
            }
            get particleCount() {
                return this.count;
            }
            set particleCount(t) {
                this.count = t;
            }
            load(t) {
                if (!t) return;
                void 0 !== t.angle && (this.angle = t.angle);
                const e = t.count ?? t.particleCount;
                void 0 !== e && (this.count = e), void 0 !== t.spread && (this.spread = t.spread), void 0 !== t.startVelocity && (this.startVelocity = t.startVelocity), void 0 !== t.decay && (this.decay = t.decay), void 0 !== t.flat && (this.flat = t.flat), void 0 !== t.gravity && (this.gravity = t.gravity), void 0 !== t.drift && (this.drift = t.drift), void 0 !== t.ticks && (this.ticks = t.ticks);
                const i = t.origin;
                i && !t.position && (t.position = {
                    x: void 0 !== i.x ? 100 * i.x : void 0,
                    y: void 0 !== i.y ? 100 * i.y : void 0
                });
                const s = t.position;
                s && (void 0 !== s.x && (this.position.x = s.x), void 0 !== s.y && (this.position.y = s.y)), void 0 !== t.colors && (zt(t.colors) ? this.colors = [
                    ...t.colors
                ] : this.colors = t.colors);
                const o = t.shapeOptions;
                if (void 0 !== o) for(const t in o){
                    const e = o[t];
                    e && (this.shapeOptions[t] = st(this.shapeOptions[t] ?? {}, e));
                }
                void 0 !== t.shapes && (zt(t.shapes) ? this.shapes = [
                    ...t.shapes
                ] : this.shapes = t.shapes), void 0 !== t.scalar && (this.scalar = t.scalar), void 0 !== t.zIndex && (this.zIndex = t.zIndex), void 0 !== t.disableForReducedMotion && (this.disableForReducedMotion = t.disableForReducedMotion);
            }
        }
        function Ei(t, e, i, s, o, n) {
            !function(t, e) {
                const i = t.options, s = i.move.path;
                if (!s.enable) return;
                if (t.lastPathTime <= t.pathDelay) return void (t.lastPathTime += e.value);
                const o = t.pathGenerator?.generate(t, e);
                o && t.velocity.addTo(o);
                s.clamp && (t.velocity.x = z(t.velocity.x, -1, 1), t.velocity.y = z(t.velocity.y, -1, 1));
                t.lastPathTime -= t.pathDelay;
            }(t, n);
            const a = t.gravity, r = a?.enable && a.inverse ? -1 : 1;
            o && i && (t.velocity.x += o * n.factor / (60 * i)), a?.enable && i && (t.velocity.y += r * (a.acceleration * n.factor) / (60 * i));
            const c = t.moveDecay;
            t.velocity.multTo(c);
            const l = t.velocity.mult(i);
            a?.enable && s > 0 && (!a.inverse && l.y >= 0 && l.y >= s || a.inverse && l.y <= 0 && l.y <= -s) && (l.y = r * s, i && (t.velocity.y = l.y / i));
            const h = t.options.zIndex, d = (1 - t.zIndexFactor) ** h.velocityRate;
            l.multTo(d);
            const { position: u } = t;
            u.addTo(l), e.vibrate && (u.x += Math.sin(u.x * Math.cos(u.y)), u.y += Math.cos(u.y * Math.sin(u.x)));
        }
        class Ri {
            constructor(){
                this._initSpin = (t)=>{
                    const e = t.container, i = t.options.move.spin;
                    if (!i.enable) return;
                    const s = i.position ?? {
                        x: 50,
                        y: 50
                    }, o = {
                        x: .01 * s.x * e.canvas.size.width,
                        y: .01 * s.y * e.canvas.size.height
                    }, n = T(t.getPosition(), o), a = P(i.acceleration);
                    t.retina.spinAcceleration = a * e.retina.pixelRatio, t.spin = {
                        center: o,
                        direction: t.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                        angle: t.velocity.angle,
                        radius: n,
                        acceleration: t.retina.spinAcceleration
                    };
                };
            }
            init(t) {
                const e = t.options.move.gravity;
                t.gravity = {
                    enable: e.enable,
                    acceleration: P(e.acceleration),
                    inverse: e.inverse
                }, this._initSpin(t);
            }
            isEnabled(t) {
                return !t.destroyed && t.options.move.enable;
            }
            move(t, e) {
                const i = t.options, s = i.move;
                if (!s.enable) return;
                const o = t.container, n = o.retina.pixelRatio, a = function(t) {
                    return t.slow.inRange ? t.slow.factor : 1;
                }(t), r = (t.retina.moveSpeed ??= P(s.speed) * n) * o.retina.reduceFactor, c = t.retina.moveDrift ??= P(t.options.move.drift) * n, l = k(i.size.value) * n, h = r * (s.size ? t.getRadius() / l : 1) * a * (e.factor || 1) / 2, d = t.retina.maxSpeed ?? o.retina.maxSpeed;
                s.spin.enable ? function(t, e) {
                    const i = t.container;
                    if (!t.spin) return;
                    const s = {
                        x: "clockwise" === t.spin.direction ? Math.cos : Math.sin,
                        y: "clockwise" === t.spin.direction ? Math.sin : Math.cos
                    };
                    t.position.x = t.spin.center.x + t.spin.radius * s.x(t.spin.angle), t.position.y = t.spin.center.y + t.spin.radius * s.y(t.spin.angle), t.spin.radius += t.spin.acceleration;
                    const o = Math.max(i.canvas.size.width, i.canvas.size.height), n = .5 * o;
                    t.spin.radius > n ? (t.spin.radius = n, t.spin.acceleration *= -1) : t.spin.radius < 0 && (t.spin.radius = 0, t.spin.acceleration *= -1), t.spin.angle += .01 * e * (1 - t.spin.radius / o);
                }(t, h) : Ei(t, s, h, d, c, e), function(t) {
                    const e = t.initialPosition, { dx: i, dy: s } = O(e, t.position), o = Math.abs(i), n = Math.abs(s), { maxDistance: a } = t.retina, r = a.horizontal, c = a.vertical;
                    if (r || c) {
                        if ((r && o >= r || c && n >= c) && !t.misplaced) t.misplaced = !!r && o > r || !!c && n > c, r && (t.velocity.x = .5 * t.velocity.y - t.velocity.x), c && (t.velocity.y = .5 * t.velocity.x - t.velocity.y);
                        else if ((!r || o < r) && (!c || n < c) && t.misplaced) t.misplaced = !1;
                        else if (t.misplaced) {
                            const i = t.position, s = t.velocity;
                            r && (i.x < e.x && s.x < 0 || i.x > e.x && s.x > 0) && (s.x *= -_()), c && (i.y < e.y && s.y < 0 || i.y > e.y && s.y > 0) && (s.y *= -_());
                        }
                    }
                }(t);
            }
        }
        class Fi {
            draw(t) {
                const { context: e, particle: i, radius: s } = t;
                i.circleRange || (i.circleRange = {
                    min: 0,
                    max: 2 * Math.PI
                });
                const o = i.circleRange;
                e.arc(0, 0, s, o.min, o.max, !1);
            }
            getSidesCount() {
                return 12;
            }
            particleInit(t, e) {
                const i = e.shapeData, s = i?.angle ?? {
                    max: 360,
                    min: 0
                };
                e.circleRange = _t(s) ? {
                    min: s.min * Math.PI / 180,
                    max: s.max * Math.PI / 180
                } : {
                    min: 0,
                    max: s * Math.PI / 180
                };
            }
        }
        function Li(t, e, i, s, o) {
            if (!e || !i.enable || (e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0)) return;
            if (e.time || (e.time = 0), (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0) && (e.time += t.value), (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0)) return;
            const n = C(i.offset), a = (e.velocity ?? 0) * t.factor + 3.6 * n, r = e.decay ?? 1;
            o && "increasing" !== e.status ? (e.value -= a, e.value < 0 && (e.loops || (e.loops = 0), e.loops++, e.status = "increasing", e.value += e.value)) : (e.value += a, e.value > s && (e.loops || (e.loops = 0), e.loops++, o && (e.status = "decreasing", e.value -= e.value % s))), e.velocity && 1 !== r && (e.velocity *= r), e.value > s && (e.value %= s);
        }
        class Ai {
            constructor(t){
                this.container = t;
            }
            init(t) {
                const e = It(t.options.color, t.id, t.options.reduceDuplicates);
                e && (t.color = jt(e, t.options.color.animation, this.container.retina.reduceFactor));
            }
            isEnabled(t) {
                const { h: e, s: i, l: s } = t.options.color.animation, { color: o } = t;
                return !t.destroyed && !t.spawning && (void 0 !== o?.h.value && e.enable || void 0 !== o?.s.value && i.enable || void 0 !== o?.l.value && s.enable);
            }
            update(t, e) {
                !function(t, e) {
                    const { h: i, s, l: o } = t.options.color.animation, { color: n } = t;
                    if (!n) return;
                    const { h: a, s: r, l: c } = n;
                    a && Li(e, a, i, 360, !1), r && Li(e, r, s, 100, !0), c && Li(e, c, o, 100, !0);
                }(t, e);
            }
        }
        class Bi {
            constructor(t){
                this.container = t;
            }
            init(t) {
                const e = t.options.opacity;
                t.opacity = ft(e, 1);
                const i = e.animation;
                i.enable && (t.opacity.velocity = P(i.speed) / 100 * this.container.retina.reduceFactor, i.sync || (t.opacity.velocity *= _()));
            }
            isEnabled(t) {
                return !t.destroyed && !t.spawning && !!t.opacity && t.opacity.enable && ((t.opacity.maxLoops ?? 0) <= 0 || (t.opacity.maxLoops ?? 0) > 0 && (t.opacity.loops ?? 0) < (t.opacity.maxLoops ?? 0));
            }
            reset(t) {
                t.opacity && (t.opacity.time = 0, t.opacity.loops = 0);
            }
            update(t, e) {
                this.isEnabled(t) && function(t, e) {
                    const i = t.opacity;
                    if (t.destroyed || !i?.enable || (i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0)) return;
                    const s = i.min, o = i.max, n = i.decay ?? 1;
                    if (i.time || (i.time = 0), (i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0) && (i.time += e.value), !((i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0))) {
                        switch(i.status){
                            case "increasing":
                                i.value >= o ? (i.status = "decreasing", i.loops || (i.loops = 0), i.loops++) : i.value += (i.velocity ?? 0) * e.factor;
                                break;
                            case "decreasing":
                                i.value <= s ? (i.status = "increasing", i.loops || (i.loops = 0), i.loops++) : i.value -= (i.velocity ?? 0) * e.factor;
                        }
                        i.velocity && 1 !== i.decay && (i.velocity *= n), function(t, e, i, s) {
                            switch(t.options.opacity.animation.destroy){
                                case "max":
                                    e >= s && t.destroy();
                                    break;
                                case "min":
                                    e <= i && t.destroy();
                            }
                        }(t, i.value, s, o), t.destroyed || (i.value = z(i.value, s, o));
                    }
                }(t, e);
            }
        }
        class Vi {
            constructor(t){
                this.container = t, this.modes = [
                    "bounce",
                    "bounce-vertical",
                    "bounce-horizontal",
                    "bounceVertical",
                    "bounceHorizontal",
                    "split"
                ];
            }
            update(t, e, i, s) {
                if (!this.modes.includes(s)) return;
                const o = this.container;
                let n = !1;
                for (const [, s] of o.plugins)if (void 0 !== s.particleBounce && (n = s.particleBounce(t, i, e)), n) break;
                if (n) return;
                const a = t.getPosition(), r = t.offset, c = t.getRadius(), l = it(a, c), h = o.canvas.size;
                !function(t) {
                    if ("bounce" !== t.outMode && "bounce-horizontal" !== t.outMode && "bounceHorizontal" !== t.outMode && "split" !== t.outMode || "left" !== t.direction && "right" !== t.direction) return;
                    t.bounds.right < 0 && "left" === t.direction ? t.particle.position.x = t.size + t.offset.x : t.bounds.left > t.canvasSize.width && "right" === t.direction && (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
                    const e = t.particle.velocity.x;
                    let i = !1;
                    if ("right" === t.direction && t.bounds.right >= t.canvasSize.width && e > 0 || "left" === t.direction && t.bounds.left <= 0 && e < 0) {
                        const e = P(t.particle.options.bounce.horizontal.value);
                        t.particle.velocity.x *= -e, i = !0;
                    }
                    if (!i) return;
                    const s = t.offset.x + t.size;
                    t.bounds.right >= t.canvasSize.width && "right" === t.direction ? t.particle.position.x = t.canvasSize.width - s : t.bounds.left <= 0 && "left" === t.direction && (t.particle.position.x = s), "split" === t.outMode && t.particle.destroy();
                }({
                    particle: t,
                    outMode: s,
                    direction: e,
                    bounds: l,
                    canvasSize: h,
                    offset: r,
                    size: c
                }), function(t) {
                    if ("bounce" !== t.outMode && "bounce-vertical" !== t.outMode && "bounceVertical" !== t.outMode && "split" !== t.outMode || "bottom" !== t.direction && "top" !== t.direction) return;
                    t.bounds.bottom < 0 && "top" === t.direction ? t.particle.position.y = t.size + t.offset.y : t.bounds.top > t.canvasSize.height && "bottom" === t.direction && (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
                    const e = t.particle.velocity.y;
                    let i = !1;
                    if ("bottom" === t.direction && t.bounds.bottom >= t.canvasSize.height && e > 0 || "top" === t.direction && t.bounds.top <= 0 && e < 0) {
                        const e = P(t.particle.options.bounce.vertical.value);
                        t.particle.velocity.y *= -e, i = !0;
                    }
                    if (!i) return;
                    const s = t.offset.y + t.size;
                    t.bounds.bottom >= t.canvasSize.height && "bottom" === t.direction ? t.particle.position.y = t.canvasSize.height - s : t.bounds.top <= 0 && "top" === t.direction && (t.particle.position.y = s), "split" === t.outMode && t.particle.destroy();
                }({
                    particle: t,
                    outMode: s,
                    direction: e,
                    bounds: l,
                    canvasSize: h,
                    offset: r,
                    size: c
                });
            }
        }
        class Ui {
            constructor(t){
                this.container = t, this.modes = [
                    "destroy"
                ];
            }
            update(t, e, i, s) {
                if (!this.modes.includes(s)) return;
                const o = this.container;
                switch(t.outType){
                    case "normal":
                    case "outside":
                        if (tt(t.position, o.canvas.size, v.origin, t.getRadius(), e)) return;
                        break;
                    case "inside":
                        {
                            const { dx: e, dy: i } = O(t.position, t.moveCenter), { x: s, y: o } = t.velocity;
                            if (s < 0 && e > t.moveCenter.radius || o < 0 && i > t.moveCenter.radius || s >= 0 && e < -t.moveCenter.radius || o >= 0 && i < -t.moveCenter.radius) return;
                            break;
                        }
                }
                o.particles.remove(t, void 0, !0);
            }
        }
        class $i {
            constructor(t){
                this.container = t, this.modes = [
                    "none"
                ];
            }
            update(t, e, i, s) {
                if (!this.modes.includes(s)) return;
                if (t.options.move.distance.horizontal && ("left" === e || "right" === e) || t.options.move.distance.vertical && ("top" === e || "bottom" === e)) return;
                const o = t.options.move.gravity, n = this.container, a = n.canvas.size, r = t.getRadius();
                if (o.enable) {
                    const i = t.position;
                    (!o.inverse && i.y > a.height + r && "bottom" === e || o.inverse && i.y < -r && "top" === e) && n.particles.remove(t);
                } else {
                    if (t.velocity.y > 0 && t.position.y <= a.height + r || t.velocity.y < 0 && t.position.y >= -r || t.velocity.x > 0 && t.position.x <= a.width + r || t.velocity.x < 0 && t.position.x >= -r) return;
                    tt(t.position, n.canvas.size, v.origin, r, e) || n.particles.remove(t);
                }
            }
        }
        class qi {
            constructor(t){
                this.container = t, this.modes = [
                    "out"
                ];
            }
            update(t, e, i, s) {
                if (!this.modes.includes(s)) return;
                const o = this.container;
                switch(t.outType){
                    case "inside":
                        {
                            const { x: e, y: i } = t.velocity, s = v.origin;
                            s.length = t.moveCenter.radius, s.angle = t.velocity.angle + Math.PI, s.addTo(v.create(t.moveCenter));
                            const { dx: n, dy: a } = O(t.position, s);
                            if (e <= 0 && n >= 0 || i <= 0 && a >= 0 || e >= 0 && n <= 0 || i >= 0 && a <= 0) return;
                            t.position.x = Math.floor(C({
                                min: 0,
                                max: o.canvas.size.width
                            })), t.position.y = Math.floor(C({
                                min: 0,
                                max: o.canvas.size.height
                            }));
                            const { dx: r, dy: c } = O(t.position, t.moveCenter);
                            t.direction = Math.atan2(-c, -r), t.velocity.angle = t.direction;
                            break;
                        }
                    default:
                        if (tt(t.position, o.canvas.size, v.origin, t.getRadius(), e)) return;
                        switch(t.outType){
                            case "outside":
                                {
                                    t.position.x = Math.floor(C({
                                        min: -t.moveCenter.radius,
                                        max: t.moveCenter.radius
                                    })) + t.moveCenter.x, t.position.y = Math.floor(C({
                                        min: -t.moveCenter.radius,
                                        max: t.moveCenter.radius
                                    })) + t.moveCenter.y;
                                    const { dx: e, dy: i } = O(t.position, t.moveCenter);
                                    t.moveCenter.radius && (t.direction = Math.atan2(i, e), t.velocity.angle = t.direction);
                                    break;
                                }
                            case "normal":
                                {
                                    const i = t.options.move.warp, s = o.canvas.size, n = {
                                        bottom: s.height + t.getRadius() + t.offset.y,
                                        left: -t.getRadius() - t.offset.x,
                                        right: s.width + t.getRadius() + t.offset.x,
                                        top: -t.getRadius() - t.offset.y
                                    }, a = t.getRadius(), r = it(t.position, a);
                                    "right" === e && r.left > s.width + t.offset.x ? (t.position.x = n.left, t.initialPosition.x = t.position.x, i || (t.position.y = _() * s.height, t.initialPosition.y = t.position.y)) : "left" === e && r.right < -t.offset.x && (t.position.x = n.right, t.initialPosition.x = t.position.x, i || (t.position.y = _() * s.height, t.initialPosition.y = t.position.y)), "bottom" === e && r.top > s.height + t.offset.y ? (i || (t.position.x = _() * s.width, t.initialPosition.x = t.position.x), t.position.y = n.top, t.initialPosition.y = t.position.y) : "top" === e && r.bottom < -t.offset.y && (i || (t.position.x = _() * s.width, t.initialPosition.x = t.position.x), t.position.y = n.bottom, t.initialPosition.y = t.position.y);
                                    break;
                                }
                        }
                }
            }
        }
        class Gi {
            constructor(t){
                this.container = t, this._updateOutMode = (t, e, i, s)=>{
                    for (const o of this.updaters)o.update(t, s, e, i);
                }, this.updaters = [
                    new Vi(t),
                    new Ui(t),
                    new qi(t),
                    new $i(t)
                ];
            }
            init() {}
            isEnabled(t) {
                return !t.destroyed && !t.spawning;
            }
            update(t, e) {
                const i = t.options.move.outModes;
                this._updateOutMode(t, e, i.bottom ?? i.default, "bottom"), this._updateOutMode(t, e, i.left ?? i.default, "left"), this._updateOutMode(t, e, i.right ?? i.default, "right"), this._updateOutMode(t, e, i.top ?? i.default, "top");
            }
        }
        class Hi {
            init(t) {
                const e = t.container, i = t.options.size.animation;
                i.enable && (t.size.velocity = (t.retina.sizeAnimationSpeed ?? e.retina.sizeAnimationSpeed) / 100 * e.retina.reduceFactor, i.sync || (t.size.velocity *= _()));
            }
            isEnabled(t) {
                return !t.destroyed && !t.spawning && t.size.enable && ((t.size.maxLoops ?? 0) <= 0 || (t.size.maxLoops ?? 0) > 0 && (t.size.loops ?? 0) < (t.size.maxLoops ?? 0));
            }
            reset(t) {
                t.size.loops = 0;
            }
            update(t, e) {
                this.isEnabled(t) && function(t, e) {
                    const i = t.size;
                    if (t.destroyed || !i || !i.enable || (i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0)) return;
                    const s = (i.velocity ?? 0) * e.factor, o = i.min, n = i.max, a = i.decay ?? 1;
                    if (i.time || (i.time = 0), (i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0) && (i.time += e.value), !((i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0))) {
                        switch(i.status){
                            case "increasing":
                                i.value >= n ? (i.status = "decreasing", i.loops || (i.loops = 0), i.loops++) : i.value += s;
                                break;
                            case "decreasing":
                                i.value <= o ? (i.status = "increasing", i.loops || (i.loops = 0), i.loops++) : i.value -= s;
                        }
                        i.velocity && 1 !== a && (i.velocity *= a), function(t, e, i, s) {
                            switch(t.options.size.animation.destroy){
                                case "max":
                                    e >= s && t.destroy();
                                    break;
                                case "min":
                                    e <= i && t.destroy();
                            }
                        }(t, i.value, o, n), t.destroyed || (i.value = z(i.value, o, n));
                    }
                }(t, e);
            }
        }
        async function ji(t, e = !0) {
            await async function(t, e = !0) {
                await t.addMover("base", ()=>new Ri, e);
            }(t, !1), await async function(t, e = !0) {
                await t.addShape("circle", new Fi, e);
            }(t, !1), await async function(t, e = !0) {
                await t.addParticleUpdater("color", (t)=>new Ai(t), e);
            }(t, !1), await async function(t, e = !0) {
                await t.addParticleUpdater("opacity", (t)=>new Bi(t), e);
            }(t, !1), await async function(t, e = !0) {
                await t.addParticleUpdater("outModes", (t)=>new Gi(t), e);
            }(t, !1), await async function(t, e = !0) {
                await t.addParticleUpdater("size", ()=>new Hi, e);
            }(t, !1), await t.refresh(e);
        }
        function Wi(t, e) {
            if (!e.segments.length || !e.segments[0].values.length) return;
            const { context: i, radius: s } = t;
            i.moveTo(e.segments[0].values[0].x * s, e.segments[0].values[0].y * s);
            for(let t = 0; t < e.segments.length; t++){
                const o = e.segments[t];
                i.bezierCurveTo(o.values[1].x * s, o.values[1].y * s, o.values[2].x * s, o.values[2].y * s, o.values[3].x * s, o.values[3].y * s);
            }
            for(let t = e.segments.length - 1; t >= 0; t--){
                const o = e.segments[t];
                i.bezierCurveTo(-o.values[2].x * s, o.values[2].y * s, -o.values[1].x * s, o.values[1].y * s, -o.values[0].x * s, o.values[0].y * s);
            }
        }
        const Ni = .5, Xi = {
            heart: {
                segments: [
                    {
                        values: [
                            {
                                x: 0,
                                y: Ni
                            },
                            {
                                x: 0,
                                y: Ni
                            },
                            {
                                x: Ni,
                                y: 0
                            },
                            {
                                x: Ni,
                                y: -Ni / 2
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni,
                                y: -Ni / 2
                            },
                            {
                                x: Ni,
                                y: -Ni / 2
                            },
                            {
                                x: Ni,
                                y: -Ni
                            },
                            {
                                x: Ni / 2,
                                y: -Ni
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni / 2,
                                y: -Ni
                            },
                            {
                                x: Ni / 2,
                                y: -Ni
                            },
                            {
                                x: 0,
                                y: -Ni
                            },
                            {
                                x: 0,
                                y: -Ni / 2
                            }
                        ]
                    }
                ]
            },
            diamond: {
                segments: [
                    {
                        values: [
                            {
                                x: 0,
                                y: Ni
                            },
                            {
                                x: 0,
                                y: Ni
                            },
                            {
                                x: .375,
                                y: 0
                            },
                            {
                                x: .375,
                                y: 0
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: .375,
                                y: 0
                            },
                            {
                                x: .375,
                                y: 0
                            },
                            {
                                x: 0,
                                y: -Ni
                            },
                            {
                                x: 0,
                                y: -Ni
                            }
                        ]
                    }
                ]
            },
            club: {
                segments: [
                    {
                        values: [
                            {
                                x: 0,
                                y: -Ni
                            },
                            {
                                x: 0,
                                y: -Ni
                            },
                            {
                                x: Ni / 2,
                                y: -Ni
                            },
                            {
                                x: Ni / 2,
                                y: -Ni / 2
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni / 2,
                                y: -Ni / 2
                            },
                            {
                                x: Ni / 2,
                                y: -Ni / 2
                            },
                            {
                                x: Ni,
                                y: -Ni / 2
                            },
                            {
                                x: Ni,
                                y: 0
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni,
                                y: 0
                            },
                            {
                                x: Ni,
                                y: 0
                            },
                            {
                                x: Ni,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 2,
                                y: Ni / 2
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni / 2,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 2,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 8,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 8,
                                y: Ni / 8
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni / 8,
                                y: Ni / 8
                            },
                            {
                                x: Ni / 8,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 2,
                                y: Ni
                            },
                            {
                                x: Ni / 2,
                                y: Ni
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni / 2,
                                y: Ni
                            },
                            {
                                x: Ni / 2,
                                y: Ni
                            },
                            {
                                x: 0,
                                y: Ni
                            },
                            {
                                x: 0,
                                y: Ni
                            }
                        ]
                    }
                ]
            },
            spade: {
                segments: [
                    {
                        values: [
                            {
                                x: 0,
                                y: -Ni
                            },
                            {
                                x: 0,
                                y: -Ni
                            },
                            {
                                x: Ni,
                                y: -Ni / 2
                            },
                            {
                                x: Ni,
                                y: 0
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni,
                                y: 0
                            },
                            {
                                x: Ni,
                                y: 0
                            },
                            {
                                x: Ni,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 2,
                                y: Ni / 2
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni / 2,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 2,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 8,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 8,
                                y: Ni / 8
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni / 8,
                                y: Ni / 8
                            },
                            {
                                x: Ni / 8,
                                y: Ni / 2
                            },
                            {
                                x: Ni / 2,
                                y: Ni
                            },
                            {
                                x: Ni / 2,
                                y: Ni
                            }
                        ]
                    },
                    {
                        values: [
                            {
                                x: Ni / 2,
                                y: Ni
                            },
                            {
                                x: Ni / 2,
                                y: Ni
                            },
                            {
                                x: 0,
                                y: Ni
                            },
                            {
                                x: 0,
                                y: Ni
                            }
                        ]
                    }
                ]
            }
        };
        class Yi {
            draw(t) {
                Wi(t, Xi.spade);
            }
        }
        class Zi {
            draw(t) {
                Wi(t, Xi.heart);
            }
        }
        class Qi {
            draw(t) {
                Wi(t, Xi.diamond);
            }
        }
        class Ji {
            draw(t) {
                Wi(t, Xi.club);
            }
        }
        class Ki {
            constructor(){
                this.wait = !1;
            }
            load(t) {
                t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.delay && (this.delay = D(t.delay)), void 0 !== t.duration && (this.duration = D(t.duration)), void 0 !== t.wait && (this.wait = t.wait));
            }
        }
        class ts {
            constructor(){
                this.quantity = 1, this.delay = .1;
            }
            load(t) {
                void 0 !== t && (void 0 !== t.quantity && (this.quantity = D(t.quantity)), void 0 !== t.delay && (this.delay = D(t.delay)));
            }
        }
        class es {
            constructor(){
                this.color = !1, this.opacity = !1;
            }
            load(t) {
                t && (void 0 !== t.color && (this.color = t.color), void 0 !== t.opacity && (this.opacity = t.opacity));
            }
        }
        class is {
            constructor(){
                this.options = {}, this.replace = new es, this.type = "square";
            }
            load(t) {
                t && (void 0 !== t.options && (this.options = st({}, t.options ?? {})), this.replace.load(t.replace), void 0 !== t.type && (this.type = t.type));
            }
        }
        class ss {
            constructor(){
                this.mode = "percent", this.height = 0, this.width = 0;
            }
            load(t) {
                void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.height && (this.height = t.height), void 0 !== t.width && (this.width = t.width));
            }
        }
        class os {
            constructor(){
                this.autoPlay = !0, this.fill = !0, this.life = new Ki, this.rate = new ts, this.shape = new is, this.startCount = 0;
            }
            load(t) {
                t && (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.size && (this.size || (this.size = new ss), this.size.load(t.size)), void 0 !== t.direction && (this.direction = t.direction), this.domId = t.domId, void 0 !== t.fill && (this.fill = t.fill), this.life.load(t.life), this.name = t.name, this.particles = dt(t.particles, (t)=>st({}, t)), this.rate.load(t.rate), this.shape.load(t.shape), void 0 !== t.position && (this.position = {}, void 0 !== t.position.x && (this.position.x = D(t.position.x)), void 0 !== t.position.y && (this.position.y = D(t.position.y))), void 0 !== t.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new De), this.spawnColor.load(t.spawnColor)), void 0 !== t.startCount && (this.startCount = t.startCount));
            }
        }
        function ns(t, e) {
            t.color ? t.color.value = e : t.color = {
                value: e
            };
        }
        class as {
            constructor(t, e, i, s, o){
                this.emitters = e, this.container = i, this._destroy = ()=>{
                    this._mutationObserver?.disconnect(), this._mutationObserver = void 0, this._resizeObserver?.disconnect(), this._resizeObserver = void 0, this.emitters.removeEmitter(this), this._engine.dispatchEvent("emitterDestroyed", {
                        container: this.container,
                        data: {
                            emitter: this
                        }
                    });
                }, this._prepareToDie = ()=>{
                    if (this._paused) return;
                    const t = void 0 !== this.options.life?.duration ? P(this.options.life.duration) : void 0;
                    this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal) && void 0 !== t && t > 0 && (this._duration = 1e3 * t);
                }, this._setColorAnimation = (t, e, i)=>{
                    const s = this.container;
                    if (!t.enable) return e;
                    const o = C(t.offset), n = 1e3 * P(this.options.rate.delay) / s.retina.reduceFactor;
                    return (e + P(t.speed ?? 0) * s.fpsLimit / n + 3.6 * o) % i;
                }, this._engine = t, this._currentDuration = 0, this._currentEmitDelay = 0, this._currentSpawnDelay = 0, this._initialPosition = o, s instanceof os ? this.options = s : (this.options = new os, this.options.load(s)), this._spawnDelay = 1e3 * P(this.options.life.delay ?? 0) / this.container.retina.reduceFactor, this.position = this._initialPosition ?? this._calcPosition(), this.name = this.options.name, this.fill = this.options.fill, this._firstSpawn = !this.options.life.wait, this._startParticlesAdded = !1;
                let n = st({}, this.options.particles);
                if (n ??= {}, n.move ??= {}, n.move.direction ??= this.options.direction, this.options.spawnColor && (this.spawnColor = It(this.options.spawnColor)), this._paused = !this.options.autoPlay, this._particlesOptions = n, this._size = this._calcSize(), this.size = yt(this._size, this.container.canvas.size), this._lifeCount = this.options.life.count ?? -1, this._immortal = this._lifeCount <= 0, this.options.domId) {
                    const t = document.getElementById(this.options.domId);
                    t && (this._mutationObserver = new MutationObserver(()=>{
                        this.resize();
                    }), this._resizeObserver = new ResizeObserver(()=>{
                        this.resize();
                    }), this._mutationObserver.observe(t, {
                        attributes: !0,
                        attributeFilter: [
                            "style",
                            "width",
                            "height"
                        ]
                    }), this._resizeObserver.observe(t));
                }
                const a = this.options.shape, r = this._engine.emitterShapeManager?.getShapeGenerator(a.type);
                r && (this._shape = r.generate(this.position, this.size, this.fill, a.options)), this._engine.dispatchEvent("emitterCreated", {
                    container: i,
                    data: {
                        emitter: this
                    }
                }), this.play();
            }
            externalPause() {
                this._paused = !0, this.pause();
            }
            externalPlay() {
                this._paused = !1, this.play();
            }
            async init() {
                await this._shape?.init();
            }
            pause() {
                this._paused || delete this._emitDelay;
            }
            play() {
                if (!this._paused && this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal || !this.options.life.count) && (this._firstSpawn || this._currentSpawnDelay >= (this._spawnDelay ?? 0))) {
                    if (void 0 === this._emitDelay) {
                        const t = P(this.options.rate.delay);
                        this._emitDelay = 1e3 * t / this.container.retina.reduceFactor;
                    }
                    (this._lifeCount > 0 || this._immortal) && this._prepareToDie();
                }
            }
            resize() {
                const t = this._initialPosition;
                this.position = t && tt(t, this.container.canvas.size, v.origin) ? t : this._calcPosition(), this._size = this._calcSize(), this.size = yt(this._size, this.container.canvas.size), this._shape?.resize(this.position, this.size);
            }
            async update(t) {
                this._paused || (this._firstSpawn && (this._firstSpawn = !1, this._currentSpawnDelay = this._spawnDelay ?? 0, this._currentEmitDelay = this._emitDelay ?? 0), this._startParticlesAdded || (this._startParticlesAdded = !0, await this._emitParticles(this.options.startCount)), void 0 !== this._duration && (this._currentDuration += t.value, this._currentDuration >= this._duration && (this.pause(), void 0 !== this._spawnDelay && delete this._spawnDelay, this._immortal || this._lifeCount--, this._lifeCount > 0 || this._immortal ? (this.position = this._calcPosition(), this._shape?.resize(this.position, this.size), this._spawnDelay = 1e3 * P(this.options.life.delay ?? 0) / this.container.retina.reduceFactor) : this._destroy(), this._currentDuration -= this._duration, delete this._duration)), void 0 !== this._spawnDelay && (this._currentSpawnDelay += t.value, this._currentSpawnDelay >= this._spawnDelay && (this._engine.dispatchEvent("emitterPlay", {
                    container: this.container
                }), this.play(), this._currentSpawnDelay -= this._currentSpawnDelay, delete this._spawnDelay)), void 0 !== this._emitDelay && (this._currentEmitDelay += t.value, this._currentEmitDelay >= this._emitDelay && (this._emit(), this._currentEmitDelay -= this._emitDelay)));
            }
            _calcPosition() {
                if (this.options.domId) {
                    const t = this.container, e = document.getElementById(this.options.domId);
                    if (e) {
                        const i = e.getBoundingClientRect();
                        return {
                            x: (i.x + i.width / 2) * t.retina.pixelRatio,
                            y: (i.y + i.height / 2) * t.retina.pixelRatio
                        };
                    }
                }
                return A({
                    size: this.container.canvas.size,
                    position: this.options.position
                });
            }
            _calcSize() {
                const t = this.container;
                if (this.options.domId) {
                    const e = document.getElementById(this.options.domId);
                    if (e) {
                        const i = e.getBoundingClientRect();
                        return {
                            width: i.width * t.retina.pixelRatio,
                            height: i.height * t.retina.pixelRatio,
                            mode: "precise"
                        };
                    }
                }
                return this.options.size ?? (()=>{
                    const t = new ss;
                    return t.load({
                        height: 0,
                        mode: "percent",
                        width: 0
                    }), t;
                })();
            }
            async _emit() {
                if (this._paused) return;
                const t = P(this.options.rate.quantity);
                await this._emitParticles(t);
            }
            async _emitParticles(t) {
                const e = ut(this._particlesOptions);
                for(let i = 0; i < t; i++){
                    const t = st({}, e);
                    if (this.spawnColor) {
                        const e = this.options.spawnColor?.animation;
                        e && (this.spawnColor.h = this._setColorAnimation(e.h, this.spawnColor.h, 360), this.spawnColor.s = this._setColorAnimation(e.s, this.spawnColor.s, 100), this.spawnColor.l = this._setColorAnimation(e.l, this.spawnColor.l, 100)), ns(t, this.spawnColor);
                    }
                    const i = this.options.shape;
                    let s = this.position;
                    if (this._shape) {
                        const e = await this._shape.randomPosition();
                        if (e) {
                            s = e.position;
                            const o = i.replace;
                            o.color && e.color && ns(t, e.color), o.opacity && (t.opacity ? t.opacity.value = e.opacity : t.opacity = {
                                value: e.opacity
                            });
                        } else s = null;
                    }
                    s && this.container.particles.addParticle(s, t);
                }
            }
        }
        class rs {
            constructor(t, e){
                this.container = e, this._engine = t, this.array = [], this.emitters = [], this.interactivityEmitters = {
                    random: {
                        count: 1,
                        enable: !1
                    },
                    value: []
                }, e.getEmitter = (t)=>void 0 === t || bt(t) ? this.array[t || 0] : this.array.find((e)=>e.name === t), e.addEmitter = async (t, e)=>this.addEmitter(t, e), e.removeEmitter = (t)=>{
                    const i = e.getEmitter(t);
                    i && this.removeEmitter(i);
                }, e.playEmitter = (t)=>{
                    const i = e.getEmitter(t);
                    i && i.externalPlay();
                }, e.pauseEmitter = (t)=>{
                    const i = e.getEmitter(t);
                    i && i.externalPause();
                };
            }
            async addEmitter(t, e) {
                const i = new os;
                i.load(t);
                const s = new as(this._engine, this, this.container, i, e);
                return await s.init(), this.array.push(s), s;
            }
            handleClickMode(t) {
                const e = this.emitters, i = this.interactivityEmitters;
                if ("emitter" !== t) return;
                let s;
                if (i && zt(i.value)) {
                    if (i.value.length > 0 && i.random.enable) {
                        s = [];
                        const t = [];
                        for(let e = 0; e < i.random.count; e++){
                            const o = J(i.value);
                            t.includes(o) && t.length < i.value.length ? e-- : (t.push(o), s.push(K(i.value, o)));
                        }
                    } else s = i.value;
                } else s = i?.value;
                const o = s ?? e, n = this.container.interactivity.mouse.clickPosition;
                dt(o, (t)=>{
                    this.addEmitter(t, n);
                });
            }
            async init() {
                if (this.emitters = this.container.actualOptions.emitters, this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters, this.emitters) {
                    if (zt(this.emitters)) for (const t of this.emitters)await this.addEmitter(t);
                    else await this.addEmitter(this.emitters);
                }
            }
            pause() {
                for (const t of this.array)t.pause();
            }
            play() {
                for (const t of this.array)t.play();
            }
            removeEmitter(t) {
                const e = this.array.indexOf(t);
                e >= 0 && this.array.splice(e, 1);
            }
            resize() {
                for (const t of this.array)t.resize();
            }
            stop() {
                this.array = [];
            }
            async update(t) {
                for (const e of this.array)await e.update(t);
            }
        }
        const cs = new Map;
        class ls {
            constructor(t){
                this._engine = t;
            }
            addShapeGenerator(t, e) {
                this.getShapeGenerator(t) || cs.set(t, e);
            }
            getShapeGenerator(t) {
                return cs.get(t);
            }
            getSupportedShapeGenerators() {
                return cs.keys();
            }
        }
        class hs {
            constructor(t){
                this._engine = t, this.id = "emitters";
            }
            getPlugin(t) {
                return new rs(this._engine, t);
            }
            loadOptions(t, e) {
                if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
                e?.emitters && (t.emitters = dt(e.emitters, (t)=>{
                    const e = new os;
                    return e.load(t), e;
                }));
                const i = e?.interactivity?.modes?.emitters;
                if (i) {
                    if (zt(i)) t.interactivity.modes.emitters = {
                        random: {
                            count: 1,
                            enable: !0
                        },
                        value: i.map((t)=>{
                            const e = new os;
                            return e.load(t), e;
                        })
                    };
                    else {
                        const e = i;
                        if (void 0 !== e.value) {
                            if (zt(e.value)) t.interactivity.modes.emitters = {
                                random: {
                                    count: e.random.count ?? 1,
                                    enable: e.random.enable ?? !1
                                },
                                value: e.value.map((t)=>{
                                    const e = new os;
                                    return e.load(t), e;
                                })
                            };
                            else {
                                const i = new os;
                                i.load(e.value), t.interactivity.modes.emitters = {
                                    random: {
                                        count: e.random.count ?? 1,
                                        enable: e.random.enable ?? !1
                                    },
                                    value: i
                                };
                            }
                        } else (t.interactivity.modes.emitters = {
                            random: {
                                count: 1,
                                enable: !1
                            },
                            value: new os
                        }).value.load(i);
                    }
                }
            }
            needsPlugin(t) {
                if (!t) return !1;
                const e = t.emitters;
                return zt(e) && !!e.length || void 0 !== e || !!t.interactivity?.events?.onClick?.mode && Z("emitter", t.interactivity.events.onClick.mode);
            }
        }
        const ds = [
            "emoji"
        ], us = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
        class ps {
            constructor(){
                this._emojiShapeDict = new Map;
            }
            destroy() {
                for (const [t, e] of this._emojiShapeDict)e instanceof ImageBitmap && e?.close(), this._emojiShapeDict.delete(t);
            }
            draw(t) {
                const { context: e, particle: i, radius: s, opacity: o } = t, n = i.emojiData;
                n && (e.globalAlpha = o, e.drawImage(n, -s, -s, 2 * s, 2 * s), e.globalAlpha = 1);
            }
            async init(t) {
                const e = t.actualOptions;
                if (ds.find((t)=>Z(t, e.particles.shape.type))) {
                    const t = [
                        Q(us)
                    ], i = ds.map((t)=>e.particles.shape.options[t]).find((t)=>!!t);
                    i && dt(i, (e)=>{
                        e.font && t.push(Q(e.font));
                    }), await Promise.all(t);
                }
            }
            particleDestroy(t) {
                delete t.emojiData;
            }
            particleInit(t, e) {
                const i = e.shapeData;
                if (!i?.value) return;
                const s = ut(i.value, e.randomIndexData), o = i.font ?? us;
                if (!s) return;
                const n = `${s}_${o}`, a = this._emojiShapeDict.get(n);
                if (a) return void (e.emojiData = a);
                const r = 2 * k(e.size.value);
                let c;
                if ("undefined" != typeof OffscreenCanvas) {
                    const t = new OffscreenCanvas(r, r), i = t.getContext("2d");
                    if (!i) return;
                    i.font = `400 ${2 * k(e.size.value)}px ${o}`, i.textBaseline = "middle", i.textAlign = "center", i.fillText(s, k(e.size.value), k(e.size.value)), c = t.transferToImageBitmap();
                } else {
                    const t = document.createElement("canvas");
                    t.width = r, t.height = r;
                    const i = t.getContext("2d");
                    if (!i) return;
                    i.font = `400 ${2 * k(e.size.value)}px ${o}`, i.textBaseline = "middle", i.textAlign = "center", i.fillText(s, k(e.size.value), k(e.size.value)), c = t;
                }
                this._emojiShapeDict.set(n, c), e.emojiData = c;
            }
        }
        class fs {
            draw(t) {
                const { context: e, radius: i } = t, s = 2 * i, o = .5 * i, n = i + o, a = -i, r = -i;
                e.moveTo(a, r + i / 2), e.quadraticCurveTo(a, r, a + o, r), e.quadraticCurveTo(a + i, r, a + i, r + o), e.quadraticCurveTo(a + i, r, a + n, r), e.quadraticCurveTo(a + s, r, a + s, r + o), e.quadraticCurveTo(a + s, r + i, a + n, r + n), e.lineTo(a + i, r + s), e.lineTo(a + o, r + n), e.quadraticCurveTo(a, r + i, a, r + o);
            }
        }
        const ms = [
            0,
            4,
            2,
            1
        ], vs = [
            8,
            8,
            4,
            2
        ];
        class ys {
            constructor(t){
                this.pos = 0, this.data = new Uint8ClampedArray(t);
            }
            getString(t) {
                const e = this.data.slice(this.pos, this.pos + t);
                return this.pos += e.length, e.reduce((t, e)=>t + String.fromCharCode(e), "");
            }
            nextByte() {
                return this.data[this.pos++];
            }
            nextTwoBytes() {
                return this.pos += 2, this.data[this.pos - 2] + (this.data[this.pos - 1] << 8);
            }
            readSubBlocks() {
                let t = "", e = 0;
                do {
                    e = this.data[this.pos++];
                    for(let i = e; --i >= 0; t += String.fromCharCode(this.data[this.pos++]));
                }while (0 !== e);
                return t;
            }
            readSubBlocksBin() {
                let t = 0, e = 0;
                for(let i = 0; 0 !== (t = this.data[this.pos + i]); i += t + 1)e += t;
                const i = new Uint8Array(e);
                for(let e = 0; 0 !== (t = this.data[this.pos++]);)for(let s = t; --s >= 0; i[e++] = this.data[this.pos++]);
                return i;
            }
            skipSubBlocks() {
                for(; 0 !== this.data[this.pos]; this.pos += this.data[this.pos] + 1);
                this.pos++;
            }
        }
        function gs(t, e) {
            const i = [];
            for(let s = 0; s < e; s++)i.push({
                r: t.data[t.pos],
                g: t.data[t.pos + 1],
                b: t.data[t.pos + 2]
            }), t.pos += 3;
            return i;
        }
        async function ws(t, e, i, s, o, n) {
            switch(t.nextByte()){
                case 59:
                    return !0;
                case 44:
                    await async function(t, e, i, s, o, n) {
                        const a = e.frames[s(!0)];
                        a.left = t.nextTwoBytes(), a.top = t.nextTwoBytes(), a.width = t.nextTwoBytes(), a.height = t.nextTwoBytes();
                        const r = t.nextByte(), c = 128 == (128 & r), l = 64 == (64 & r);
                        a.sortFlag = 32 == (32 & r), a.reserved = (24 & r) >>> 3;
                        const h = 1 << 1 + (7 & r);
                        c && (a.localColorTable = gs(t, h));
                        const d = (t)=>{
                            const { r: s, g: n, b: r } = (c ? a.localColorTable : e.globalColorTable)[t];
                            return {
                                r: s,
                                g: n,
                                b: r,
                                a: t === o(null) ? i ? ~~((s + n + r) / 3) : 0 : 255
                            };
                        }, u = (()=>{
                            try {
                                return new ImageData(a.width, a.height, {
                                    colorSpace: "srgb"
                                });
                            } catch (t) {
                                if (t instanceof DOMException && "IndexSizeError" === t.name) return null;
                                throw t;
                            }
                        })();
                        if (null == u) throw new EvalError("GIF frame size is to large");
                        const p = t.nextByte(), f = t.readSubBlocksBin(), m = 1 << p, v = (t, e)=>{
                            const i = t >>> 3, s = 7 & t;
                            return (f[i] + (f[i + 1] << 8) + (f[i + 2] << 16) & (1 << e) - 1 << s) >>> s;
                        };
                        if (l) {
                            for(let i = 0, o = p + 1, r = 0, c = [
                                [
                                    0
                                ]
                            ], l = 0; l < 4; l++){
                                if (ms[l] < a.height) for(let t = 0, e = 0;;){
                                    const s = i;
                                    if (i = v(r, o), r += o + 1, i === m) {
                                        o = p + 1, c.length = m + 2;
                                        for(let t = 0; t < c.length; t++)c[t] = t < m ? [
                                            t
                                        ] : [];
                                    } else {
                                        i >= c.length ? c.push(c[s].concat(c[s][0])) : s !== m && c.push(c[s].concat(c[i][0]));
                                        for(let s = 0; s < c[i].length; s++){
                                            const { r: o, g: n, b: r, a: h } = d(c[i][s]);
                                            u.data.set([
                                                o,
                                                n,
                                                r,
                                                h
                                            ], ms[l] * a.width + vs[l] * e + t % (4 * a.width)), t += 4;
                                        }
                                        c.length === 1 << o && o < 12 && o++;
                                    }
                                    if (t === 4 * a.width * (e + 1) && (e++, ms[l] + vs[l] * e >= a.height)) break;
                                }
                                n?.(t.pos / (t.data.length - 1), s(!1) + 1, u, {
                                    x: a.left,
                                    y: a.top
                                }, {
                                    width: e.width,
                                    height: e.height
                                });
                            }
                            a.image = u, a.bitmap = await createImageBitmap(u);
                        } else {
                            for(let t = 0, e = p + 1, i = 0, s = [
                                [
                                    0
                                ]
                            ], o = -4;;){
                                const n = t;
                                if (t = v(i, e), i += e, t === m) {
                                    e = p + 1, s.length = m + 2;
                                    for(let t = 0; t < s.length; t++)s[t] = t < m ? [
                                        t
                                    ] : [];
                                } else {
                                    if (t === m + 1) break;
                                    t >= s.length ? s.push(s[n].concat(s[n][0])) : n !== m && s.push(s[n].concat(s[t][0]));
                                    for(let e = 0; e < s[t].length; e++){
                                        const { r: i, g: n, b: a, a: r } = d(s[t][e]);
                                        u.data.set([
                                            i,
                                            n,
                                            a,
                                            r
                                        ], o += 4);
                                    }
                                    s.length >= 1 << e && e < 12 && e++;
                                }
                            }
                            a.image = u, a.bitmap = await createImageBitmap(u), n?.((t.pos + 1) / t.data.length, s(!1) + 1, a.image, {
                                x: a.left,
                                y: a.top
                            }, {
                                width: e.width,
                                height: e.height
                            });
                        }
                    }(t, e, i, s, o, n);
                    break;
                case 33:
                    await async function(t, e, i, s) {
                        switch(t.nextByte()){
                            case 249:
                                {
                                    const o = e.frames[i(!1)];
                                    t.pos++;
                                    const n = t.nextByte();
                                    o.GCreserved = (224 & n) >>> 5, o.disposalMethod = (28 & n) >>> 2, o.userInputDelayFlag = 2 == (2 & n);
                                    const a = 1 == (1 & n);
                                    o.delayTime = 10 * t.nextTwoBytes();
                                    const r = t.nextByte();
                                    a && s(r), t.pos++;
                                    break;
                                }
                            case 255:
                                {
                                    t.pos++;
                                    const i = {
                                        identifier: t.getString(8),
                                        authenticationCode: t.getString(3),
                                        data: t.readSubBlocksBin()
                                    };
                                    e.applicationExtensions.push(i);
                                    break;
                                }
                            case 254:
                                e.comments.push([
                                    i(!1),
                                    t.readSubBlocks()
                                ]);
                                break;
                            case 1:
                                if (0 === e.globalColorTable.length) throw new EvalError("plain text extension without global color table");
                                t.pos++, e.frames[i(!1)].plainTextData = {
                                    left: t.nextTwoBytes(),
                                    top: t.nextTwoBytes(),
                                    width: t.nextTwoBytes(),
                                    height: t.nextTwoBytes(),
                                    charSize: {
                                        width: t.nextTwoBytes(),
                                        height: t.nextTwoBytes()
                                    },
                                    foregroundColor: t.nextByte(),
                                    backgroundColor: t.nextByte(),
                                    text: t.readSubBlocks()
                                };
                                break;
                            default:
                                t.skipSubBlocks();
                        }
                    }(t, e, s, o);
                    break;
                default:
                    throw new EvalError("undefined block found");
            }
            return !1;
        }
        const bs = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
        async function xs(t) {
            return new Promise((e)=>{
                t.loading = !0;
                const i = new Image;
                t.element = i, i.addEventListener("load", ()=>{
                    t.loading = !1, e();
                }), i.addEventListener("error", ()=>{
                    t.element = void 0, t.error = !0, t.loading = !1, G().error(`${f} loading image: ${t.source}`), e();
                }), i.src = t.source;
            });
        }
        async function _s(t) {
            if ("gif" === t.type) {
                t.loading = !0;
                try {
                    t.gifData = await async function(t, e, i) {
                        i || (i = !1);
                        const s = await fetch(t);
                        if (!s.ok && 404 === s.status) throw new EvalError("file not found");
                        const o = await s.arrayBuffer(), n = {
                            width: 0,
                            height: 0,
                            totalTime: 0,
                            colorRes: 0,
                            pixelAspectRatio: 0,
                            frames: [],
                            sortFlag: !1,
                            globalColorTable: [],
                            backgroundImage: new ImageData(1, 1, {
                                colorSpace: "srgb"
                            }),
                            comments: [],
                            applicationExtensions: []
                        }, a = new ys(new Uint8ClampedArray(o));
                        if ("GIF89a" !== a.getString(6)) throw new Error("not a supported GIF file");
                        n.width = a.nextTwoBytes(), n.height = a.nextTwoBytes();
                        const r = a.nextByte(), c = 128 == (128 & r);
                        n.colorRes = (112 & r) >>> 4, n.sortFlag = 8 == (8 & r);
                        const l = 1 << 1 + (7 & r), h = a.nextByte();
                        n.pixelAspectRatio = a.nextByte(), 0 !== n.pixelAspectRatio && (n.pixelAspectRatio = (n.pixelAspectRatio + 15) / 64), c && (n.globalColorTable = gs(a, l));
                        const d = (()=>{
                            try {
                                return new ImageData(n.width, n.height, {
                                    colorSpace: "srgb"
                                });
                            } catch (t) {
                                if (t instanceof DOMException && "IndexSizeError" === t.name) return null;
                                throw t;
                            }
                        })();
                        if (null == d) throw new Error("GIF frame size is to large");
                        const { r: u, g: p, b: f } = n.globalColorTable[h];
                        d.data.set(c ? [
                            u,
                            p,
                            f,
                            255
                        ] : [
                            0,
                            0,
                            0,
                            0
                        ]);
                        for(let t = 4; t < d.data.length; t *= 2)d.data.copyWithin(t, 0, t);
                        n.backgroundImage = d;
                        let m = -1, v = !0, y = -1;
                        const g = (t)=>(t && (v = !0), m), w = (t)=>(null != t && (y = t), y);
                        try {
                            do v && (n.frames.push({
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0,
                                disposalMethod: 0,
                                image: new ImageData(1, 1, {
                                    colorSpace: "srgb"
                                }),
                                plainTextData: null,
                                userInputDelayFlag: !1,
                                delayTime: 0,
                                sortFlag: !1,
                                localColorTable: [],
                                reserved: 0,
                                GCreserved: 0
                            }), m++, y = -1, v = !1);
                            while (!await ws(a, n, i, g, w, e));
                            n.frames.length--;
                            for (const t of n.frames){
                                if (t.userInputDelayFlag && 0 === t.delayTime) {
                                    n.totalTime = 1 / 0;
                                    break;
                                }
                                n.totalTime += t.delayTime;
                            }
                            return n;
                        } catch (t) {
                            if (t instanceof EvalError) throw new Error(`error while parsing frame ${m} "${t.message}"`);
                            throw t;
                        }
                    }(t.source), t.gifLoopCount = function(t) {
                        for (const e of t.applicationExtensions)if (e.identifier + e.authenticationCode === "NETSCAPE2.0") return e.data[1] + (e.data[2] << 8);
                        return NaN;
                    }(t.gifData) ?? 0, 0 === t.gifLoopCount && (t.gifLoopCount = 1 / 0);
                } catch  {
                    t.error = !0;
                }
                t.loading = !1;
            } else await xs(t);
        }
        async function zs(t) {
            if ("svg" !== t.type) return void await xs(t);
            t.loading = !0;
            const e = await fetch(t.source);
            e.ok ? t.svgData = await e.text() : (G().error(`${f} Image not found`), t.error = !0), t.loading = !1;
        }
        function Ms(t, e, i, s) {
            const o = function(t, e, i) {
                const { svgData: s } = t;
                if (!s) return "";
                const o = Ut(e, i);
                if (s.includes("fill")) return s.replace(bs, ()=>o);
                const n = s.indexOf(">");
                return `${s.substring(0, n)} fill="${o}"${s.substring(n)}`;
            }(t, i, s.opacity?.value ?? 1), n = {
                color: i,
                gif: e.gif,
                data: {
                    ...t,
                    svgData: o
                },
                loaded: !1,
                ratio: e.width / e.height,
                replaceColor: e.replaceColor,
                source: e.src
            };
            return new Promise((e)=>{
                const i = new Blob([
                    o
                ], {
                    type: "image/svg+xml"
                }), s = URL || window.URL || window.webkitURL || window, a = s.createObjectURL(i), r = new Image;
                r.addEventListener("load", ()=>{
                    n.loaded = !0, n.element = r, e(n), s.revokeObjectURL(a);
                }), r.addEventListener("error", async ()=>{
                    s.revokeObjectURL(a);
                    const i = {
                        ...t,
                        error: !1,
                        loading: !0
                    };
                    await xs(i), n.loaded = !0, n.element = i.element, e(n);
                }), r.src = a;
            });
        }
        class Cs {
            constructor(t){
                this.loadImageShape = async (t)=>{
                    if (!this._engine.loadImage) throw new Error(`${f} image shape not initialized`);
                    await this._engine.loadImage({
                        gif: t.gif,
                        name: t.name,
                        replaceColor: t.replaceColor ?? !1,
                        src: t.src
                    });
                }, this._engine = t;
            }
            addImage(t) {
                this._engine.images || (this._engine.images = []), this._engine.images.push(t);
            }
            draw(t) {
                const { context: e, radius: i, particle: s, opacity: o, delta: n } = t, a = s.image, r = a?.element;
                if (a) {
                    if (e.globalAlpha = o, a.gif && a.gifData) {
                        const t = new OffscreenCanvas(a.gifData.width, a.gifData.height), o = t.getContext("2d");
                        if (!o) throw new Error("could not create offscreen canvas context");
                        o.imageSmoothingQuality = "low", o.imageSmoothingEnabled = !1, o.clearRect(0, 0, t.width, t.height), void 0 === s.gifLoopCount && (s.gifLoopCount = a.gifLoopCount ?? 0);
                        let r = s.gifFrame ?? 0;
                        const c = {
                            x: .5 * -a.gifData.width,
                            y: .5 * -a.gifData.height
                        }, l = a.gifData.frames[r];
                        if (void 0 === s.gifTime && (s.gifTime = 0), !l.bitmap) return;
                        switch(e.scale(i / a.gifData.width, i / a.gifData.height), l.disposalMethod){
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 0:
                                o.drawImage(l.bitmap, l.left, l.top), e.drawImage(t, c.x, c.y), o.clearRect(0, 0, t.width, t.height);
                                break;
                            case 1:
                                o.drawImage(l.bitmap, l.left, l.top), e.drawImage(t, c.x, c.y);
                                break;
                            case 2:
                                o.drawImage(l.bitmap, l.left, l.top), e.drawImage(t, c.x, c.y), o.clearRect(0, 0, t.width, t.height), 0 === a.gifData.globalColorTable.length ? o.putImageData(a.gifData.frames[0].image, c.x + l.left, c.y + l.top) : o.putImageData(a.gifData.backgroundImage, c.x, c.y);
                                break;
                            case 3:
                                {
                                    const i = o.getImageData(0, 0, t.width, t.height);
                                    o.drawImage(l.bitmap, l.left, l.top), e.drawImage(t, c.x, c.y), o.clearRect(0, 0, t.width, t.height), o.putImageData(i, 0, 0);
                                }
                        }
                        if (s.gifTime += n.value, s.gifTime > l.delayTime) {
                            if (s.gifTime -= l.delayTime, ++r >= a.gifData.frames.length) {
                                if (--s.gifLoopCount <= 0) return;
                                r = 0, o.clearRect(0, 0, t.width, t.height);
                            }
                            s.gifFrame = r;
                        }
                        e.scale(a.gifData.width / i, a.gifData.height / i);
                    } else if (r) {
                        const t = a.ratio, s = {
                            x: -i,
                            y: -i
                        }, o = 2 * i;
                        e.drawImage(r, s.x, s.y, o, o / t);
                    }
                    e.globalAlpha = 1;
                }
            }
            getSidesCount() {
                return 12;
            }
            async init(t) {
                const e = t.actualOptions;
                if (e.preload && this._engine.loadImage) for (const t of e.preload)await this._engine.loadImage(t);
            }
            loadShape(t) {
                if ("image" !== t.shape && "images" !== t.shape) return;
                this._engine.images || (this._engine.images = []);
                const e = t.shapeData;
                if (!e) return;
                this._engine.images.find((t)=>t.name === e.name || t.source === e.src) || this.loadImageShape(e).then(()=>{
                    this.loadShape(t);
                });
            }
            particleInit(t, e) {
                if ("image" !== e.shape && "images" !== e.shape) return;
                this._engine.images || (this._engine.images = []);
                const i = this._engine.images, s = e.shapeData;
                if (!s) return;
                const o = e.getFillColor(), n = i.find((t)=>t.name === s.name || t.source === s.src);
                if (!n) return;
                const a = s.replaceColor ?? n.replaceColor;
                n.loading ? setTimeout(()=>{
                    this.particleInit(t, e);
                }) : (async ()=>{
                    let t;
                    t = n.svgData && o ? await Ms(n, s, o, e) : {
                        color: o,
                        data: n,
                        element: n.element,
                        gif: n.gif,
                        gifData: n.gifData,
                        gifLoopCount: n.gifLoopCount,
                        loaded: !0,
                        ratio: s.width && s.height ? s.width / s.height : n.ratio ?? 1,
                        replaceColor: a,
                        source: s.src
                    }, t.ratio || (t.ratio = 1);
                    const i = {
                        image: t,
                        fill: s.fill ?? e.shapeFill,
                        close: s.close ?? e.shapeClose
                    };
                    e.image = i.image, e.shapeFill = i.fill, e.shapeClose = i.close;
                })();
            }
        }
        class Ps {
            constructor(){
                this.src = "", this.gif = !1;
            }
            load(t) {
                t && (void 0 !== t.gif && (this.gif = t.gif), void 0 !== t.height && (this.height = t.height), void 0 !== t.name && (this.name = t.name), void 0 !== t.replaceColor && (this.replaceColor = t.replaceColor), void 0 !== t.src && (this.src = t.src), void 0 !== t.width && (this.width = t.width));
            }
        }
        class Ss {
            constructor(t){
                this.id = "imagePreloader", this._engine = t;
            }
            getPlugin() {
                return {};
            }
            loadOptions(t, e) {
                if (!e || !e.preload) return;
                t.preload || (t.preload = []);
                const i = t.preload;
                for (const t of e.preload){
                    const e = i.find((e)=>e.name === t.name || e.src === t.src);
                    if (e) e.load(t);
                    else {
                        const e = new Ps;
                        e.load(t), i.push(e);
                    }
                }
            }
            needsPlugin() {
                return !0;
            }
        }
        async function ks(t, e = !0) {
            !function(t) {
                t.loadImage || (t.loadImage = async (e)=>{
                    if (!e.name && !e.src) throw new Error(`${f} no image source provided`);
                    if (t.images || (t.images = []), !t.images.find((t)=>t.name === e.name || t.source === e.src)) try {
                        const i = {
                            gif: e.gif ?? !1,
                            name: e.name ?? e.src,
                            source: e.src,
                            type: e.src.substring(e.src.length - 3),
                            error: !1,
                            loading: !0,
                            replaceColor: e.replaceColor,
                            ratio: e.width && e.height ? e.width / e.height : void 0
                        };
                        t.images.push(i);
                        const s = e.gif ? _s : e.replaceColor ? zs : xs;
                        await s(i);
                    } catch  {
                        throw new Error(`${f} ${e.name ?? e.src} not found`);
                    }
                });
            }(t);
            const i = new Ss(t);
            await t.addPlugin(i, e), await t.addShape([
                "image",
                "images"
            ], new Cs(t), e);
        }
        class Ds extends Ie {
            constructor(){
                super(), this.sync = !1;
            }
            load(t) {
                t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class Os extends Ie {
            constructor(){
                super(), this.sync = !1;
            }
            load(t) {
                t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class Ts {
            constructor(){
                this.count = 0, this.delay = new Ds, this.duration = new Os;
            }
            load(t) {
                t && (void 0 !== t.count && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration));
            }
        }
        class Is {
            constructor(t){
                this.container = t;
            }
            init(t) {
                const e = this.container, i = t.options.life;
                i && (t.life = {
                    delay: e.retina.reduceFactor ? P(i.delay.value) * (i.delay.sync ? 1 : _()) / e.retina.reduceFactor * 1e3 : 0,
                    delayTime: 0,
                    duration: e.retina.reduceFactor ? P(i.duration.value) * (i.duration.sync ? 1 : _()) / e.retina.reduceFactor * 1e3 : 0,
                    time: 0,
                    count: i.count
                }, t.life.duration <= 0 && (t.life.duration = -1), t.life.count <= 0 && (t.life.count = -1), t.life && (t.spawning = t.life.delay > 0));
            }
            isEnabled(t) {
                return !t.destroyed;
            }
            loadOptions(t, ...e) {
                t.life || (t.life = new Ts);
                for (const i of e)t.life.load(i?.life);
            }
            update(t, e) {
                if (!this.isEnabled(t) || !t.life) return;
                const i = t.life;
                let s = !1;
                if (t.spawning) {
                    if (i.delayTime += e.value, !(i.delayTime >= t.life.delay)) return;
                    s = !0, t.spawning = !1, i.delayTime = 0, i.time = 0;
                }
                if (-1 === i.duration) return;
                if (t.spawning) return;
                if (s ? i.time = 0 : i.time += e.value, i.time < i.duration) return;
                if (i.time = 0, t.life.count > 0 && t.life.count--, 0 === t.life.count) return void t.destroy();
                const o = this.container.canvas.size, n = D(0, o.width), a = D(0, o.width);
                t.position.x = C(n), t.position.y = C(a), t.spawning = !0, i.delayTime = 0, i.time = 0, t.reset();
                const r = t.options.life;
                r && (i.delay = 1e3 * P(r.delay.value), i.duration = 1e3 * P(r.duration.value));
            }
        }
        class Es {
            constructor(){
                this.factor = 4, this.value = !0;
            }
            load(t) {
                t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.value && (this.value = t.value));
            }
        }
        class Rs {
            constructor(){
                this.disable = !1, this.reduce = new Es;
            }
            load(t) {
                t && (void 0 !== t.disable && (this.disable = t.disable), this.reduce.load(t.reduce));
            }
        }
        class Fs {
            constructor(t, e){
                this._handleMotionChange = (t)=>{
                    const e = this._container, i = e.actualOptions.motion;
                    i && (e.retina.reduceFactor = t.matches ? i.disable ? 0 : i.reduce.value ? 1 / i.reduce.factor : 1 : 1);
                }, this._container = t, this._engine = e;
            }
            async init() {
                const t = this._container, e = t.actualOptions.motion;
                if (!e || !e.disable && !e.reduce.value) return void (t.retina.reduceFactor = 1);
                const i = N("(prefers-reduced-motion: reduce)");
                if (!i) return void (t.retina.reduceFactor = 1);
                this._handleMotionChange(i);
                const s = async ()=>{
                    this._handleMotionChange(i);
                    try {
                        await t.refresh();
                    } catch  {}
                };
                void 0 !== i.addEventListener ? i.addEventListener("change", s) : void 0 !== i.addListener && i.addListener(s);
            }
        }
        class Ls {
            constructor(t){
                this.id = "motion", this._engine = t;
            }
            getPlugin(t) {
                return new Fs(t, this._engine);
            }
            loadOptions(t, e) {
                if (!this.needsPlugin()) return;
                let i = t.motion;
                i?.load || (t.motion = i = new Rs), i.load(e?.motion);
            }
            needsPlugin() {
                return !0;
            }
        }
        class As {
            draw(t) {
                const { context: e, particle: i, radius: s } = t, o = this.getCenter(i, s), n = this.getSidesData(i, s), a = n.count.numerator * n.count.denominator, r = n.count.numerator / n.count.denominator, c = 180 * (r - 2) / r, l = Math.PI - Math.PI * c / 180;
                if (e) {
                    e.beginPath(), e.translate(o.x, o.y), e.moveTo(0, 0);
                    for(let t = 0; t < a; t++)e.lineTo(n.length, 0), e.translate(n.length, 0), e.rotate(l);
                }
            }
            getSidesCount(t) {
                const e = t.shapeData;
                return Math.round(P(e?.sides ?? 5));
            }
        }
        class Bs extends As {
            getCenter(t, e) {
                return {
                    x: -e / (t.sides / 3.5),
                    y: -e / .76
                };
            }
            getSidesData(t, e) {
                const i = t.sides;
                return {
                    count: {
                        denominator: 1,
                        numerator: i
                    },
                    length: 2.66 * e / (i / 3)
                };
            }
        }
        class Vs extends As {
            getCenter(t, e) {
                return {
                    x: -e,
                    y: e / 1.66
                };
            }
            getSidesCount() {
                return 3;
            }
            getSidesData(t, e) {
                return {
                    count: {
                        denominator: 2,
                        numerator: 3
                    },
                    length: 2 * e
                };
            }
        }
        async function Us(t, e = !0) {
            await async function(t, e = !0) {
                await t.addShape("polygon", new Bs, e);
            }(t, e), await async function(t, e = !0) {
                await t.addShape("triangle", new Vs, e);
            }(t, e);
        }
        class $s {
            constructor(){
                this.enable = !1, this.value = 0;
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.value && (this.value = D(t.value)));
            }
        }
        class qs {
            constructor(){
                this.darken = new $s, this.enable = !1, this.enlighten = new $s, this.mode = "vertical", this.speed = 25;
            }
            load(t) {
                t && (void 0 !== t.backColor && (this.backColor = ce.create(this.backColor, t.backColor)), this.darken.load(t.darken), void 0 !== t.enable && (this.enable = t.enable), this.enlighten.load(t.enlighten), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.speed && (this.speed = D(t.speed)));
            }
        }
        class Gs {
            getTransformValues(t) {
                const e = t.roll?.enable && t.roll, i = e && e.horizontal, s = e && e.vertical;
                return {
                    a: i ? Math.cos(e.angle) : void 0,
                    d: s ? Math.sin(e.angle) : void 0
                };
            }
            init(t) {
                !function(t) {
                    const e = t.options.roll;
                    if (e?.enable) {
                        if (t.roll = {
                            enable: e.enable,
                            horizontal: "horizontal" === e.mode || "both" === e.mode,
                            vertical: "vertical" === e.mode || "both" === e.mode,
                            angle: _() * Math.PI * 2,
                            speed: P(e.speed) / 360
                        }, e.backColor) t.backColor = It(e.backColor);
                        else if (e.darken.enable && e.enlighten.enable) {
                            const i = _() >= .5 ? "darken" : "enlighten";
                            t.roll.alter = {
                                type: i,
                                value: P("darken" === i ? e.darken.value : e.enlighten.value)
                            };
                        } else e.darken.enable ? t.roll.alter = {
                            type: "darken",
                            value: P(e.darken.value)
                        } : e.enlighten.enable && (t.roll.alter = {
                            type: "enlighten",
                            value: P(e.enlighten.value)
                        });
                    } else t.roll = {
                        enable: !1,
                        horizontal: !1,
                        vertical: !1,
                        angle: 0,
                        speed: 0
                    };
                }(t);
            }
            isEnabled(t) {
                const e = t.options.roll;
                return !t.destroyed && !t.spawning && !!e?.enable;
            }
            loadOptions(t, ...e) {
                t.roll || (t.roll = new qs);
                for (const i of e)t.roll.load(i?.roll);
            }
            update(t, e) {
                this.isEnabled(t) && function(t, e) {
                    const i = t.options.roll, s = t.roll;
                    if (!s || !i?.enable) return;
                    const o = s.speed * e.factor, n = 2 * Math.PI;
                    s.angle += o, s.angle > n && (s.angle -= n);
                }(t, e);
            }
        }
        class Hs {
            constructor(){
                this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1;
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = D(t.speed)), void 0 !== t.decay && (this.decay = D(t.decay)), void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class js extends Ie {
            constructor(){
                super(), this.animation = new Hs, this.direction = "clockwise", this.path = !1, this.value = 0;
            }
            load(t) {
                t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path));
            }
        }
        class Ws {
            constructor(t){
                this.container = t;
            }
            init(t) {
                const e = t.options.rotate;
                if (!e) return;
                t.rotate = {
                    enable: e.animation.enable,
                    value: P(e.value) * Math.PI / 180
                }, t.pathRotation = e.path;
                let i = e.direction;
                if ("random" === i) i = Math.floor(2 * _()) > 0 ? "counter-clockwise" : "clockwise";
                switch(i){
                    case "counter-clockwise":
                    case "counterClockwise":
                        t.rotate.status = "decreasing";
                        break;
                    case "clockwise":
                        t.rotate.status = "increasing";
                }
                const s = e.animation;
                s.enable && (t.rotate.decay = 1 - P(s.decay), t.rotate.velocity = P(s.speed) / 360 * this.container.retina.reduceFactor, s.sync || (t.rotate.velocity *= _())), t.rotation = t.rotate.value;
            }
            isEnabled(t) {
                const e = t.options.rotate;
                return !!e && !t.destroyed && !t.spawning && e.animation.enable && !e.path;
            }
            loadOptions(t, ...e) {
                t.rotate || (t.rotate = new js);
                for (const i of e)t.rotate.load(i?.rotate);
            }
            update(t, e) {
                this.isEnabled(t) && (!function(t, e) {
                    const i = t.rotate, s = t.options.rotate;
                    if (!i || !s) return;
                    const o = s.animation, n = (i.velocity ?? 0) * e.factor, a = 2 * Math.PI, r = i.decay ?? 1;
                    o.enable && ("increasing" === i.status ? (i.value += n, i.value > a && (i.value -= a)) : (i.value -= n, i.value < 0 && (i.value += a)), i.velocity && 1 !== r && (i.velocity *= r));
                }(t, e), t.rotation = t.rotate?.value ?? 0);
            }
        }
        const Ns = Math.sqrt(2);
        class Xs {
            draw(t) {
                const { context: e, radius: i } = t, s = i / Ns, o = 2 * s;
                e.rect(-s, -s, o, o);
            }
            getSidesCount() {
                return 4;
            }
        }
        class Ys {
            draw(t) {
                const { context: e, particle: i, radius: s } = t, o = i.sides, n = i.starInset ?? 2;
                e.moveTo(0, 0 - s);
                for(let t = 0; t < o; t++)e.rotate(Math.PI / o), e.lineTo(0, 0 - s * n), e.rotate(Math.PI / o), e.lineTo(0, 0 - s);
            }
            getSidesCount(t) {
                const e = t.shapeData;
                return Math.round(P(e?.sides ?? 5));
            }
            particleInit(t, e) {
                const i = e.shapeData;
                e.starInset = P(i?.inset ?? 2);
            }
        }
        class Zs {
            constructor(){
                this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1;
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = D(t.speed)), void 0 !== t.decay && (this.decay = D(t.decay)), void 0 !== t.sync && (this.sync = t.sync));
            }
        }
        class Qs extends Ie {
            constructor(){
                super(), this.animation = new Zs, this.direction = "clockwise", this.enable = !1, this.value = 0;
            }
            load(t) {
                super.load(t), t && (this.animation.load(t.animation), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.enable && (this.enable = t.enable));
            }
        }
        class Js {
            constructor(t){
                this.container = t;
            }
            getTransformValues(t) {
                const e = t.tilt?.enable && t.tilt;
                return {
                    b: e ? Math.cos(e.value) * e.cosDirection : void 0,
                    c: e ? Math.sin(e.value) * e.sinDirection : void 0
                };
            }
            init(t) {
                const e = t.options.tilt;
                if (!e) return;
                t.tilt = {
                    enable: e.enable,
                    value: P(e.value) * Math.PI / 180,
                    sinDirection: _() >= .5 ? 1 : -1,
                    cosDirection: _() >= .5 ? 1 : -1
                };
                let i = e.direction;
                if ("random" === i) i = Math.floor(2 * _()) > 0 ? "counter-clockwise" : "clockwise";
                switch(i){
                    case "counter-clockwise":
                    case "counterClockwise":
                        t.tilt.status = "decreasing";
                        break;
                    case "clockwise":
                        t.tilt.status = "increasing";
                }
                const s = t.options.tilt?.animation;
                s?.enable && (t.tilt.decay = 1 - P(s.decay), t.tilt.velocity = P(s.speed) / 360 * this.container.retina.reduceFactor, s.sync || (t.tilt.velocity *= _()));
            }
            isEnabled(t) {
                const e = t.options.tilt?.animation;
                return !t.destroyed && !t.spawning && !!e?.enable;
            }
            loadOptions(t, ...e) {
                t.tilt || (t.tilt = new Qs);
                for (const i of e)t.tilt.load(i?.tilt);
            }
            update(t, e) {
                this.isEnabled(t) && function(t, e) {
                    if (!t.tilt || !t.options.tilt) return;
                    const i = t.options.tilt.animation, s = (t.tilt.velocity ?? 0) * e.factor, o = 2 * Math.PI, n = t.tilt.decay ?? 1;
                    i.enable && ("increasing" === t.tilt.status ? (t.tilt.value += s, t.tilt.value > o && (t.tilt.value -= o)) : (t.tilt.value -= s, t.tilt.value < 0 && (t.tilt.value += o)), t.tilt.velocity && 1 !== n && (t.tilt.velocity *= n));
                }(t, e);
            }
        }
        class Ks {
            constructor(){
                this.angle = 50, this.move = 10;
            }
            load(t) {
                t && (void 0 !== t.angle && (this.angle = D(t.angle)), void 0 !== t.move && (this.move = D(t.move)));
            }
        }
        class to {
            constructor(){
                this.distance = 5, this.enable = !1, this.speed = new Ks;
            }
            load(t) {
                if (t && (void 0 !== t.distance && (this.distance = D(t.distance)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed)) {
                    if (bt(t.speed)) this.speed.load({
                        angle: t.speed
                    });
                    else {
                        const e = t.speed;
                        void 0 !== e.min ? this.speed.load({
                            angle: e
                        }) : this.speed.load(t.speed);
                    }
                }
            }
        }
        class eo {
            constructor(t){
                this.container = t;
            }
            init(t) {
                const e = t.options.wobble;
                t.wobble = e?.enable ? {
                    angle: _() * Math.PI * 2,
                    angleSpeed: P(e.speed.angle) / 360,
                    moveSpeed: P(e.speed.move) / 10
                } : {
                    angle: 0,
                    angleSpeed: 0,
                    moveSpeed: 0
                }, t.retina.wobbleDistance = P(e?.distance ?? 0) * this.container.retina.pixelRatio;
            }
            isEnabled(t) {
                return !t.destroyed && !t.spawning && !!t.options.wobble?.enable;
            }
            loadOptions(t, ...e) {
                t.wobble || (t.wobble = new to);
                for (const i of e)t.wobble.load(i?.wobble);
            }
            update(t, e) {
                this.isEnabled(t) && function(t, e) {
                    const { wobble: i } = t.options, { wobble: s } = t;
                    if (!i?.enable || !s) return;
                    const o = s.angleSpeed * e.factor, n = s.moveSpeed * e.factor * ((t.retina.wobbleDistance ?? 0) * e.factor) / (1e3 / 60), a = 2 * Math.PI, { position: r } = t;
                    s.angle += o, s.angle > a && (s.angle -= a), r.x += n * Math.cos(s.angle), r.y += n * Math.abs(Math.sin(s.angle));
                }(t, e);
            }
        }
        let io = !1, so = !1;
        const oo = new Map;
        async function no(t) {
            if (!io) {
                if (so) return new Promise((t)=>{
                    const e = setInterval(()=>{
                        io && (clearInterval(e), t());
                    }, 100);
                });
                so = !0, await async function(t, e = !0) {
                    t.emitterShapeManager || (t.emitterShapeManager = new ls(t)), t.addEmitterShapeGenerator || (t.addEmitterShapeGenerator = (e, i)=>{
                        t.emitterShapeManager?.addShapeGenerator(e, i);
                    });
                    const i = new hs(t);
                    await t.addPlugin(i, e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addPlugin(new Ls(t), e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addShape([
                        "spade",
                        "spades"
                    ], new Yi, e), await t.addShape([
                        "heart",
                        "hearts"
                    ], new Zi, e), await t.addShape([
                        "diamond",
                        "diamonds"
                    ], new Qi, e), await t.addShape([
                        "club",
                        "clubs"
                    ], new Ji, e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addShape("heart", new fs, e);
                }(t, !1), await ks(t, !1), await Us(t, !1), await async function(t, e = !0) {
                    await t.addShape([
                        "edge",
                        "square"
                    ], new Xs, e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addShape("star", new Ys, e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addShape(ds, new ps, e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addParticleUpdater("rotate", (t)=>new Ws(t), e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addParticleUpdater("life", (t)=>new Is(t), e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addParticleUpdater("roll", ()=>new Gs, e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addParticleUpdater("tilt", (t)=>new Js(t), e);
                }(t, !1), await async function(t, e = !0) {
                    await t.addParticleUpdater("wobble", (t)=>new eo(t), e);
                }(t, !1), await ji(t), so = !1, io = !0;
            }
        }
        async function ao(t) {
            const e = new Ii;
            let i;
            e.load(t.options);
            const s = 1e3 * e.ticks / 432e3;
            if (oo.has(t.id) && (i = oo.get(t.id), i && !i.destroyed)) {
                const t = i;
                if (t.addEmitter) return void t.addEmitter({
                    startCount: e.count,
                    position: e.position,
                    size: {
                        width: 0,
                        height: 0
                    },
                    rate: {
                        delay: 0,
                        quantity: 0
                    },
                    life: {
                        duration: .1,
                        count: 1
                    },
                    particles: {
                        color: {
                            value: e.colors
                        },
                        shape: {
                            type: e.shapes,
                            options: e.shapeOptions
                        },
                        life: {
                            count: 1
                        },
                        opacity: {
                            value: {
                                min: 0,
                                max: 1
                            },
                            animation: {
                                enable: !0,
                                sync: !0,
                                speed: s,
                                startValue: "max",
                                destroy: "min"
                            }
                        },
                        size: {
                            value: 5 * e.scalar
                        },
                        move: {
                            angle: {
                                value: e.spread,
                                offset: 0
                            },
                            drift: {
                                min: -e.drift,
                                max: e.drift
                            },
                            gravity: {
                                acceleration: 9.81 * e.gravity
                            },
                            speed: 3 * e.startVelocity,
                            decay: 1 - e.decay,
                            direction: -e.angle
                        }
                    }
                });
            }
            const o = {
                fullScreen: {
                    enable: !t.canvas,
                    zIndex: e.zIndex
                },
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 0
                    },
                    color: {
                        value: e.colors
                    },
                    shape: {
                        type: e.shapes,
                        options: e.shapeOptions
                    },
                    opacity: {
                        value: {
                            min: 0,
                            max: 1
                        },
                        animation: {
                            enable: !0,
                            sync: !0,
                            speed: s,
                            startValue: "max",
                            destroy: "min"
                        }
                    },
                    size: {
                        value: 5 * e.scalar
                    },
                    links: {
                        enable: !1
                    },
                    life: {
                        count: 1
                    },
                    move: {
                        angle: {
                            value: e.spread,
                            offset: 0
                        },
                        drift: {
                            min: -e.drift,
                            max: e.drift
                        },
                        enable: !0,
                        gravity: {
                            enable: !0,
                            acceleration: 9.81 * e.gravity
                        },
                        speed: 3 * e.startVelocity,
                        decay: 1 - e.decay,
                        direction: -e.angle,
                        random: !0,
                        straight: !1,
                        outModes: {
                            default: "none",
                            bottom: "destroy"
                        }
                    },
                    rotate: {
                        value: e.flat ? 0 : {
                            min: 0,
                            max: 360
                        },
                        direction: "random",
                        animation: {
                            enable: !e.flat,
                            speed: 60
                        }
                    },
                    tilt: {
                        direction: "random",
                        enable: !e.flat,
                        value: e.flat ? 0 : {
                            min: 0,
                            max: 360
                        },
                        animation: {
                            enable: !0,
                            speed: 60
                        }
                    },
                    roll: {
                        darken: {
                            enable: !0,
                            value: 25
                        },
                        enable: !e.flat,
                        speed: {
                            min: 15,
                            max: 25
                        }
                    },
                    wobble: {
                        distance: 30,
                        enable: !e.flat,
                        speed: {
                            min: -15,
                            max: 15
                        }
                    }
                },
                detectRetina: !0,
                motion: {
                    disable: e.disableForReducedMotion
                },
                emitters: {
                    name: "confetti",
                    startCount: e.count,
                    position: e.position,
                    size: {
                        width: 0,
                        height: 0
                    },
                    rate: {
                        delay: 0,
                        quantity: 0
                    },
                    life: {
                        duration: .1,
                        count: 1
                    }
                }
            };
            return i = await Ti.load({
                id: t.id,
                element: t.canvas,
                options: o
            }), oo.set(t.id, i), i;
        }
        async function ro(t, e) {
            let i, s;
            return await no(Ti), wt(t) ? (s = t, i = e ?? {}) : (s = "confetti", i = t), ao({
                id: s,
                options: i
            });
        }
        return ro.create = async (t, e)=>{
            if (!t) return ro;
            await no(Ti);
            const i = t.getAttribute("id") || "confetti";
            return t.setAttribute("id", i), async (s, o)=>{
                let n, a;
                return wt(s) ? (a = s, n = o ?? e) : (a = i, n = s), ao({
                    id: a,
                    canvas: t,
                    options: n
                });
            };
        }, ro.version = Ti.version, j() || (window.confetti = ro), e;
    })());

//# sourceMappingURL=index.92232d46.js.map
