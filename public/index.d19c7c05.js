!function(t1, e1) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e1() : "function" == typeof define && define.amd ? define([], e1) : "object" == typeof exports ? exports.Tone = e1() : t1.Tone = e1();
}("undefined" != typeof self ? self : this, function() {
    return (()=>{
        var s = {
            228: (t1)=>{
                t1.exports = function(t1, e1) {
                    (null == e1 || e1 > t1.length) && (e1 = t1.length);
                    for(var s = 0, n = new Array(e1); s < e1; s++)n[s] = t1[s];
                    return n;
                }, t1.exports.default = t1.exports, t1.exports.__esModule = !0;
            },
            858: (t1)=>{
                t1.exports = function(t1) {
                    if (Array.isArray(t1)) return t1;
                }, t1.exports.default = t1.exports, t1.exports.__esModule = !0;
            },
            575: (t1)=>{
                t1.exports = function(t1, e1) {
                    if (!(t1 instanceof e1)) throw new TypeError("Cannot call a class as a function");
                }, t1.exports.default = t1.exports, t1.exports.__esModule = !0;
            },
            913: (t1)=>{
                function n(t1, e1) {
                    for(var s = 0; s < e1.length; s++){
                        var n = e1[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t1, n.key, n);
                    }
                }
                t1.exports = function(t1, e1, s) {
                    return e1 && n(t1.prototype, e1), s && n(t1, s), t1;
                }, t1.exports.default = t1.exports, t1.exports.__esModule = !0;
            },
            884: (t1)=>{
                t1.exports = function(t1, e1) {
                    var s = null == t1 ? null : "undefined" != typeof Symbol && t1[Symbol.iterator] || t1["@@iterator"];
                    if (null != s) {
                        var n, i, r = [], o = !0, a = !1;
                        try {
                            for(s = s.call(t1); !(o = (n = s.next()).done) && (r.push(n.value), !e1 || r.length !== e1); o = !0);
                        } catch (t1) {
                            a = !0, i = t1;
                        } finally{
                            try {
                                o || null == s.return || s.return();
                            } finally{
                                if (a) throw i;
                            }
                        }
                        return r;
                    }
                }, t1.exports.default = t1.exports, t1.exports.__esModule = !0;
            },
            521: (t1)=>{
                t1.exports = function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }, t1.exports.default = t1.exports, t1.exports.__esModule = !0;
            },
            38: (t1, e1, s)=>{
                var n = s(858), i = s(884), r = s(379), o = s(521);
                t1.exports = function(t1, e1) {
                    return n(t1) || i(t1, e1) || r(t1, e1) || o();
                }, t1.exports.default = t1.exports, t1.exports.__esModule = !0;
            },
            379: (t1, e1, s)=>{
                var n = s(228);
                t1.exports = function(t1, e1) {
                    if (t1) {
                        if ("string" == typeof t1) return n(t1, e1);
                        var s = Object.prototype.toString.call(t1).slice(8, -1);
                        return "Map" === (s = "Object" === s && t1.constructor ? t1.constructor.name : s) || "Set" === s ? Array.from(t1) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? n(t1, e1) : void 0;
                    }
                }, t1.exports.default = t1.exports, t1.exports.__esModule = !0;
            },
            382: function(t1, e1, s) {
                !function(t1, e1, s, n) {
                    "use strict";
                    function i(t1) {
                        return t1 && "object" == typeof t1 && "default" in t1 ? t1 : {
                            default: t1
                        };
                    }
                    function o(t1, e1, s) {
                        return {
                            endTime: e1,
                            insertTime: s,
                            type: "exponentialRampToValue",
                            value: t1
                        };
                    }
                    function a(t1, e1, s) {
                        return {
                            endTime: e1,
                            insertTime: s,
                            type: "linearRampToValue",
                            value: t1
                        };
                    }
                    function h(t1, e1) {
                        return {
                            startTime: e1,
                            type: "setValue",
                            value: t1
                        };
                    }
                    function c(t1, e1, s) {
                        return {
                            duration: s,
                            startTime: e1,
                            type: "setValueCurve",
                            values: t1
                        };
                    }
                    function l(t1, e1, s) {
                        var n = s.startTime, i = s.target, s = s.timeConstant;
                        return i + (e1 - i) * Math.exp((n - t1) / s);
                    }
                    function u(t1) {
                        return "exponentialRampToValue" === t1.type;
                    }
                    function p(t1) {
                        return "linearRampToValue" === t1.type;
                    }
                    function d(t1) {
                        return u(t1) || p(t1);
                    }
                    function f(t1) {
                        return "setValue" === t1.type;
                    }
                    function _(t1) {
                        return "setValueCurve" === t1.type;
                    }
                    function m(t1, e1, s, n) {
                        var i = t1[e1];
                        return void 0 === i ? n : d(i) || f(i) ? i.value : _(i) ? i.values[i.values.length - 1] : l(s, m(t1, e1 - 1, i.startTime, n), i);
                    }
                    function g(t1, e1, s, n, i) {
                        return void 0 === s ? [
                            n.insertTime,
                            i
                        ] : d(s) ? [
                            s.endTime,
                            s.value
                        ] : f(s) ? [
                            s.startTime,
                            s.value
                        ] : _(s) ? [
                            s.startTime + s.duration,
                            s.values[s.values.length - 1]
                        ] : [
                            s.startTime,
                            m(t1, e1 - 1, s.startTime, i)
                        ];
                    }
                    function v(t1) {
                        return "cancelAndHold" === t1.type;
                    }
                    function y(t1) {
                        return "cancelScheduledValues" === t1.type;
                    }
                    function x(t1) {
                        return v(t1) || y(t1) ? t1.cancelTime : u(t1) || p(t1) ? t1.endTime : t1.startTime;
                    }
                    function w(t1, e1, s, n) {
                        var i = n.endTime, n = n.value;
                        return s === n ? n : 0 < s && 0 < n || s < 0 && n < 0 ? s * Math.pow(n / s, (t1 - e1) / (i - e1)) : 0;
                    }
                    function b(t1, e1, s, n) {
                        return s + (t1 - e1) / (n.endTime - e1) * (n.value - s);
                    }
                    function T(t1) {
                        return "setTarget" === t1.type;
                    }
                    var S = i(e1), r = i(s), s = i(n), n = (n = Symbol.iterator, s.default(k, [
                        {
                            key: n,
                            value: function() {
                                return this._automationEvents[Symbol.iterator]();
                            }
                        },
                        {
                            key: "add",
                            value: function(e1) {
                                var s = x(e1);
                                if (v(e1) || y(e1)) {
                                    var t1 = this._automationEvents.findIndex(function(t1) {
                                        return y(e1) && _(t1) ? t1.startTime + t1.duration >= s : x(t1) >= s;
                                    }), n = this._automationEvents[t1];
                                    if (-1 !== t1 && (this._automationEvents = this._automationEvents.slice(0, t1)), v(e1)) {
                                        var i = this._automationEvents[this._automationEvents.length - 1];
                                        if (void 0 !== n && d(n)) {
                                            if (T(i)) throw new Error("The internal list is malformed.");
                                            var t1 = _(i) ? i.startTime + i.duration : x(i), r = _(i) ? i.values[i.values.length - 1] : i.value, r = (u(n) ? w : b)(s, t1, r, n), r = (u(n) ? o : a)(r, s, this._currenTime);
                                            this._automationEvents.push(r);
                                        }
                                        void 0 !== i && T(i) && this._automationEvents.push(h(this.getValue(s), s)), void 0 !== i && _(i) && i.startTime + i.duration > s && (this._automationEvents[this._automationEvents.length - 1] = c(new Float32Array([
                                            6,
                                            7
                                        ]), i.startTime, s - i.startTime));
                                    }
                                } else {
                                    r = this._automationEvents.findIndex(function(t1) {
                                        return x(t1) > s;
                                    }), i = -1 === r ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[r - 1];
                                    if (void 0 !== i && _(i) && x(i) + i.duration > s) return !1;
                                    i = u(e1) ? o(e1.value, e1.endTime, this._currenTime) : p(e1) ? a(e1.value, s, this._currenTime) : e1;
                                    if (-1 === r) this._automationEvents.push(i);
                                    else {
                                        if (_(e1) && s + e1.duration > x(this._automationEvents[r])) return !1;
                                        this._automationEvents.splice(r, 0, i);
                                    }
                                }
                                return !0;
                            }
                        },
                        {
                            key: "flush",
                            value: function(e1) {
                                var t1, s, n = this._automationEvents.findIndex(function(t1) {
                                    return x(t1) > e1;
                                });
                                1 < n && (s = (t1 = this._automationEvents.slice(n - 1))[0], T(s) && t1.unshift(h(m(this._automationEvents, n - 2, s.startTime, this._defaultValue), s.startTime)), this._automationEvents = t1);
                            }
                        },
                        {
                            key: "getValue",
                            value: function(e1) {
                                if (0 === this._automationEvents.length) return this._defaultValue;
                                var t1, s = this._automationEvents.findIndex(function(t1) {
                                    return x(t1) > e1;
                                }), n = this._automationEvents[s], i = (-1 === s ? this._automationEvents.length : s) - 1, r = this._automationEvents[i];
                                if (void 0 !== r && T(r) && (void 0 === n || !d(n) || n.insertTime > e1)) return l(e1, m(this._automationEvents, i - 1, r.startTime, this._defaultValue), r);
                                if (void 0 !== r && f(r) && (void 0 === n || !d(n))) return r.value;
                                if (void 0 !== r && _(r) && (void 0 === n || !d(n) || r.startTime + r.duration > e1)) return e1 < r.startTime + r.duration ? (o = e1, t1 = (a = r).duration, s = a.startTime, a = a.values, s = (o - s) / t1 * ((o = a).length - 1), t1 = Math.floor(s), a = Math.ceil(s), t1 === a ? o[t1] : (1 - (s - t1)) * o[t1] + (1 - (a - s)) * o[a]) : r.values[r.values.length - 1];
                                if (void 0 !== r && d(r) && (void 0 === n || !d(n))) return r.value;
                                if (void 0 !== n && u(n)) {
                                    var o = g(this._automationEvents, i, r, n, this._defaultValue), a = S.default(o, 2), o = a[0], a = a[1];
                                    return w(e1, o, a, n);
                                }
                                if (void 0 !== n && p(n)) {
                                    i = g(this._automationEvents, i, r, n, this._defaultValue), r = S.default(i, 2), i = r[0], r = r[1];
                                    return b(e1, i, r, n);
                                }
                                return this._defaultValue;
                            }
                        }
                    ]), k);
                    function k(t1) {
                        r.default(this, k), this._automationEvents = [], this._currenTime = 0, this._defaultValue = t1;
                    }
                    t1.AutomationEventList = n, t1.createCancelAndHoldAutomationEvent = function(t1) {
                        return {
                            cancelTime: t1,
                            type: "cancelAndHold"
                        };
                    }, t1.createCancelScheduledValuesAutomationEvent = function(t1) {
                        return {
                            cancelTime: t1,
                            type: "cancelScheduledValues"
                        };
                    }, t1.createExponentialRampToValueAutomationEvent = function(t1, e1) {
                        return {
                            endTime: e1,
                            type: "exponentialRampToValue",
                            value: t1
                        };
                    }, t1.createLinearRampToValueAutomationEvent = function(t1, e1) {
                        return {
                            endTime: e1,
                            type: "linearRampToValue",
                            value: t1
                        };
                    }, t1.createSetTargetAutomationEvent = function(t1, e1, s) {
                        return {
                            startTime: e1,
                            target: t1,
                            timeConstant: s,
                            type: "setTarget"
                        };
                    }, t1.createSetValueAutomationEvent = h, t1.createSetValueCurveAutomationEvent = c, Object.defineProperty(t1, "__esModule", {
                        value: !0
                    });
                }(e1, s(38), s(575), s(913));
            }
        }, n = {};
        function wm(t1) {
            var e1 = n[t1];
            if (void 0 !== e1) return e1.exports;
            e1 = n[t1] = {
                exports: {}
            };
            return s[t1].call(e1.exports, e1, e1.exports, wm), e1.exports;
        }
        wm.d = (t1, e1)=>{
            for(var s in e1)wm.o(e1, s) && !wm.o(t1, s) && Object.defineProperty(t1, s, {
                enumerable: !0,
                get: e1[s]
            });
        }, wm.o = (t1, e1)=>Object.prototype.hasOwnProperty.call(t1, e1), wm.r = (t1)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t1, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t1, "__esModule", {
                value: !0
            });
        };
        var bm = {};
        return (()=>{
            "use strict";
            wm.r(bm), wm.d(bm, {
                AMOscillator: ()=>Ud,
                AMSynth: ()=>Tf,
                Abs: ()=>af,
                Add: ()=>Hd,
                AmplitudeEnvelope: ()=>xf,
                Analyser: ()=>G_,
                AudioToGain: ()=>Wd,
                AutoFilter: ()=>h_,
                AutoPanner: ()=>l_,
                AutoWah: ()=>p_,
                BaseContext: ()=>Ep,
                BiquadFilter: ()=>Sf,
                BitCrusher: ()=>f_,
                Buffer: ()=>vm,
                BufferSource: ()=>xm,
                Buffers: ()=>ym,
                Channel: ()=>K_,
                Chebyshev: ()=>m_,
                Chorus: ()=>w_,
                Clock: ()=>md,
                Compressor: ()=>rm,
                Context: ()=>Rp,
                Convolver: ()=>um,
                CrossFade: ()=>r_,
                DCMeter: ()=>Y_,
                Delay: ()=>gd,
                Destination: ()=>dm,
                Distortion: ()=>b_,
                Draw: ()=>mm,
                DuoSynth: ()=>Df,
                EQ3: ()=>lm,
                Emitter: ()=>Mp,
                Envelope: ()=>mf,
                FFT: ()=>X_,
                FMOscillator: ()=>Gd,
                FMSynth: ()=>Of,
                FatOscillator: ()=>Zd,
                FeedbackCombFilter: ()=>jf,
                FeedbackDelay: ()=>S_,
                Filter: ()=>kf,
                Follower: ()=>u_,
                Freeverb: ()=>O_,
                Frequency: ()=>function(t1, e1) {
                        return new Hp(Lp(), t1, e1);
                    },
                FrequencyClass: ()=>Hp,
                FrequencyEnvelope: ()=>Cf,
                FrequencyShifter: ()=>C_,
                Gain: ()=>hd,
                GainToAudio: ()=>hf,
                Gate: ()=>om,
                GrainPlayer: ()=>of,
                GreaterThan: ()=>pf,
                GreaterThanZero: ()=>uf,
                IntervalTimeline: ()=>bd,
                JCReverb: ()=>q_,
                LFO: ()=>tf,
                Limiter: ()=>am,
                Listener: ()=>_m,
                Loop: ()=>Qf,
                LowpassCombFilter: ()=>zf,
                Master: ()=>fm,
                MembraneSynth: ()=>Rf,
                Merge: ()=>v_,
                MetalSynth: ()=>Ef,
                Meter: ()=>Z_,
                MidSideCompressor: ()=>hm,
                MidSideMerge: ()=>L_,
                MidSideSplit: ()=>j_,
                Midi: ()=>function(t1, e1) {
                        return new yd(Lp(), t1, e1);
                    },
                MidiClass: ()=>yd,
                Mono: ()=>tm,
                MonoSynth: ()=>Af,
                MultibandCompressor: ()=>cm,
                MultibandSplit: ()=>em,
                Multiply: ()=>Bd,
                Negate: ()=>cf,
                Noise: ()=>Rd,
                NoiseSynth: ()=>qf,
                Offline: ()=>function(n, i, r = 2, o = Lp().sampleRate) {
                        return ap(this, void 0, void 0, function*() {
                            const t1 = Lp(), e1 = new Np(r, i, o);
                            zp(e1), yield n(e1);
                            var s = e1.render();
                            zp(t1);
                            s = yield s;
                            return new Vp(s);
                        });
                    },
                OfflineContext: ()=>Np,
                OmniOscillator: ()=>$d,
                OnePoleFilter: ()=>Lf,
                Oscillator: ()=>jd,
                PWMOscillator: ()=>Xd,
                PanVol: ()=>J_,
                Panner: ()=>c_,
                Panner3D: ()=>nm,
                Param: ()=>nd,
                Part: ()=>Zf,
                Pattern: ()=>n_,
                Phaser: ()=>N_,
                PingPongDelay: ()=>I_,
                PitchShift: ()=>V_,
                Player: ()=>nf,
                Players: ()=>rf,
                PluckSynth: ()=>Wf,
                PolySynth: ()=>Bf,
                Pow: ()=>df,
                PulseOscillator: ()=>Qd,
                Recorder: ()=>im,
                Reverb: ()=>P_,
                Sampler: ()=>Uf,
                Scale: ()=>Jd,
                ScaleExp: ()=>ff,
                Sequence: ()=>i_,
                Signal: ()=>ud,
                Solo: ()=>H_,
                Split: ()=>g_,
                StateTimeline: ()=>sd,
                StereoWidener: ()=>W_,
                Subtract: ()=>lf,
                SyncedSignal: ()=>_f,
                Synth: ()=>wf,
                Ticks: ()=>function(t1, e1) {
                        return new xd(Lp(), t1, e1);
                    },
                TicksClass: ()=>xd,
                Time: ()=>function(t1, e1) {
                        return new $p(Lp(), t1, e1);
                    },
                TimeClass: ()=>$p,
                Timeline: ()=>kp,
                ToneAudioBuffer: ()=>Vp,
                ToneAudioBuffers: ()=>vd,
                ToneAudioNode: ()=>id,
                ToneBufferSource: ()=>Ed,
                ToneEvent: ()=>Gf,
                ToneOscillatorNode: ()=>Pd,
                Transport: ()=>pm,
                TransportTime: ()=>function(t1, e1) {
                        return new td(Lp(), t1, e1);
                    },
                TransportTimeClass: ()=>td,
                Tremolo: ()=>B_,
                Unit: ()=>e1,
                UserMedia: ()=>Vd,
                Vibrato: ()=>U_,
                Volume: ()=>Sd,
                WaveShaper: ()=>zd,
                Waveform: ()=>$_,
                Zero: ()=>Kd,
                connect: ()=>od,
                connectSeries: ()=>rd,
                connectSignal: ()=>pd,
                context: ()=>gm,
                dbToGain: ()=>Wp,
                debug: ()=>t1,
                defaultArg: ()=>mp,
                disconnect: ()=>ad,
                fanIn: ()=>function(...t1) {
                        const e1 = t1.pop();
                        $u(e1) && t1.forEach((t1)=>od(t1, e1));
                    },
                ftom: ()=>Qp,
                gainToDb: ()=>Bp,
                getContext: ()=>Lp,
                getDestination: ()=>function() {
                        return Lp().destination;
                    },
                getDraw: ()=>function() {
                        return Lp().draw;
                    },
                getListener: ()=>function() {
                        return Lp().listener;
                    },
                getTransport: ()=>function() {
                        return Lp().transport;
                    },
                immediate: ()=>function() {
                        return Lp().immediate();
                    },
                intervalToFrequencyRatio: ()=>Up,
                isArray: ()=>ep,
                isBoolean: ()=>tp,
                isDefined: ()=>$u,
                isFunction: ()=>Hu,
                isNote: ()=>np,
                isNumber: ()=>Ju,
                isObject: ()=>Ku,
                isString: ()=>sp,
                isUndef: ()=>Yu,
                loaded: ()=>function() {
                        return Vp.loaded();
                    },
                mtof: ()=>Xp,
                now: ()=>function() {
                        return Lp().now();
                    },
                optionsFromArguments: ()=>_p,
                setContext: ()=>zp,
                start: ()=>function() {
                        return jp.resume();
                    },
                supported: ()=>Wu,
                version: ()=>s
            });
            var t1 = {};
            wm.r(t1), wm.d(t1, {
                assert: ()=>Bu,
                assertContextRunning: ()=>Gu,
                assertRange: ()=>Uu,
                log: ()=>Zu,
                setLogger: ()=>function(t1) {
                        Qu = t1;
                    },
                warn: ()=>Xu
            });
            var e1 = {};
            wm.r(e1);
            const s = "14.8.29";
            var n, i, a, o, r, h, c, l, u, p, d, f, _, m, g, v, y, x, w, b, T, S, k, C, A, D, O, M, E, R, q, F, I, V, N, P, j, L, z, W, B, U, G, Q, Z, X, Y, $, H, J, K, tt, et, st, nt = wm(382);
            const it = new WeakSet, rt = new WeakMap, ot = new WeakMap, at = new WeakMap, ht = new WeakMap, ct = new WeakMap, lt = new WeakMap, ut = new WeakMap, pt = new WeakMap, dt = new WeakMap, ft = {
                construct: ()=>ft
            }, _t = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/, mt = (t1, e1)=>{
                const s = [];
                let n = t1.replace(/^[\s]+/, ""), i = n.match(_t);
                for(; null !== i;){
                    const t1 = i[1].slice(1, -1), r = i[0].replace(/([\s]+)?;?$/, "").replace(t1, new URL(t1, e1).toString());
                    s.push(r), n = n.slice(i[0].length).replace(/^[\s]+/, ""), i = n.match(_t);
                }
                return [
                    s.join(";"),
                    n
                ];
            }, gt = (t1)=>{
                if (void 0 !== t1 && !Array.isArray(t1)) throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.");
            }, vt = (t1)=>{
                if (!((t1)=>{
                    try {
                        new new Proxy(t1, ft);
                    } catch  {
                        return !1;
                    }
                    return !0;
                })(t1)) throw new TypeError("The given value for processorCtor should be a constructor.");
                if (null === t1.prototype || "object" != typeof t1.prototype) throw new TypeError("The given value for processorCtor should have a prototype.");
            }, yt = (t1, e1)=>{
                e1 = t1.get(e1);
                if (void 0 === e1) throw new Error("A value with the given key could not be found.");
                return e1;
            }, xt = (t1, e1)=>{
                e1 = Array.from(t1).filter(e1);
                if (1 < e1.length) throw Error("More than one element was found.");
                if (0 === e1.length) throw Error("No element was found.");
                var [e1] = e1;
                return t1.delete(e1), e1;
            }, wt = (t1, e1, s, n)=>{
                var i = yt(t1, e1), r = xt(i, (t1)=>t1[0] === s && t1[1] === n);
                return 0 === i.size && t1.delete(e1), r;
            }, bt = (t1)=>yt(lt, t1), Tt = (t1)=>{
                if (it.has(t1)) throw new Error("The AudioNode is already stored.");
                it.add(t1), bt(t1).forEach((t1)=>t1(!0));
            }, St = (t1)=>"port" in t1, kt = (t1)=>{
                if (!it.has(t1)) throw new Error("The AudioNode is not stored.");
                it.delete(t1), bt(t1).forEach((t1)=>t1(!1));
            }, Ct = (t1, e1)=>{
                !St(t1) && e1.every((t1)=>0 === t1.size) && kt(t1);
            }, At = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                fftSize: 2048,
                maxDecibels: -30,
                minDecibels: -100,
                smoothingTimeConstant: .8
            }, Dt = (t1, e1)=>t1.context === e1, Ot = (t1)=>{
                try {
                    t1.copyToChannel(new Float32Array(1), 0, -1);
                } catch  {
                    return !1;
                }
                return !0;
            }, Mt = ()=>new DOMException("", "IndexSizeError"), Et = (e1)=>{
                var s;
                e1.getChannelData = (s = e1.getChannelData, (t1)=>{
                    try {
                        return s.call(e1, t1);
                    } catch (t1) {
                        if (12 === t1.code) throw Mt();
                        throw t1;
                    }
                });
            }, Rt = {
                numberOfChannels: 1
            }, qt = -340282346638528860000000000000000000000, Ft = -qt, It = (t1)=>it.has(t1), Vt = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }, Nt = (t1)=>yt(rt, t1), Pt = (t1)=>yt(at, t1), jt = (e1, s)=>{
                const t1 = Nt(e1)["activeInputs"];
                t1.forEach((t1)=>t1.forEach(([t1])=>{
                        s.includes(e1) || jt(t1, [
                            ...s,
                            e1
                        ]);
                    }));
                var n, i, n = "playbackRate" in e1 ? [
                    e1.playbackRate
                ] : St(e1) ? Array.from(e1.parameters.values()) : "frequency" in (i = e1) && "gain" in i ? [
                    e1.Q,
                    e1.detune,
                    e1.frequency,
                    e1.gain
                ] : "offset" in e1 ? [
                    e1.offset
                ] : !("frequency" in (i = e1)) && "gain" in i ? [
                    e1.gain
                ] : "detune" in (n = e1) && "frequency" in n ? [
                    e1.detune,
                    e1.frequency
                ] : "pan" in e1 ? [
                    e1.pan
                ] : [];
                for (const e1 of n){
                    const t1 = Pt(e1);
                    void 0 !== t1 && t1.activeInputs.forEach(([t1])=>jt(t1, s));
                }
                It(e1) && kt(e1);
            }, Lt = (t1)=>{
                jt(t1.destination, []);
            }, zt = (t1)=>"context" in t1, Wt = (t1)=>zt(t1[0]), Bt = (t1, e1, s, n)=>{
                for (const e1 of t1)if (s(e1)) {
                    if (n) return !1;
                    throw Error("The set contains at least one similar element.");
                }
                return t1.add(e1), !0;
            }, Ut = (t1, e1, [s, n], i)=>{
                Bt(t1, [
                    e1,
                    s,
                    n
                ], (t1)=>t1[0] === e1 && t1[1] === s, i);
            }, Gt = (t1, [e1, s, n], i)=>{
                var r = t1.get(e1);
                void 0 === r ? t1.set(e1, new Set([
                    [
                        s,
                        n
                    ]
                ])) : Bt(r, [
                    s,
                    n
                ], (t1)=>t1[0] === s, i);
            }, Qt = (t1)=>"inputs" in t1, Zt = (t1, e1, s, n)=>{
                if (Qt(e1)) {
                    var i = e1.inputs[n];
                    return t1.connect(i, s, 0), [
                        i,
                        s,
                        0
                    ];
                }
                return t1.connect(e1, s, n), [
                    e1,
                    s,
                    n
                ];
            }, Xt = (t1, e1, s)=>{
                for (const n of t1)if (n[0] === e1 && n[1] === s) return t1.delete(n), n;
                return null;
            }, Yt = (t1, e1)=>{
                if (!bt(t1).delete(e1)) throw new Error("Missing the expected event listener.");
            }, $t = (t1, e1, s)=>{
                var n = yt(t1, e1), i = xt(n, (t1)=>t1[0] === s);
                return 0 === n.size && t1.delete(e1), i;
            }, Ht = (t1, e1, s, n)=>{
                Qt(e1) ? t1.disconnect(e1.inputs[n], s, 0) : t1.disconnect(e1, s, n);
            }, Jt = (t1)=>yt(ot, t1), Kt = (t1)=>yt(ht, t1), te = (t1)=>ut.has(t1), ee = (t1)=>!it.has(t1), se = (r, o)=>new Promise((e1)=>{
                    if (null !== o) e1(!0);
                    else {
                        const o = r.createScriptProcessor(256, 1, 1), t1 = r.createGain(), s = r.createBuffer(1, 2, 44100), n = s.getChannelData(0);
                        n[0] = 1, n[1] = 1;
                        const i = r.createBufferSource();
                        i.buffer = s, i.loop = !0, i.connect(o).connect(r.destination), i.connect(t1), i.disconnect(t1), o.onaudioprocess = (t1)=>{
                            t1 = t1.inputBuffer.getChannelData(0);
                            Array.prototype.some.call(t1, (t1)=>1 === t1) ? e1(!0) : e1(!1), i.stop(), o.onaudioprocess = null, i.disconnect(o), o.disconnect(r.destination);
                        }, i.start();
                    }
                }), ne = (t1, s)=>{
                const e1 = new Map;
                for (const s of t1)for (const t1 of s){
                    const s = e1.get(t1);
                    e1.set(t1, void 0 === s ? 1 : s + 1);
                }
                e1.forEach((t1, e1)=>s(e1, t1));
            }, ie = (t1)=>"context" in t1, re = (t1, e1, s, n, i)=>{
                var [r, o] = ((t1, e1, s, n)=>{
                    var { activeInputs: i, passiveInputs: e1 } = Nt(e1), i = Xt(i[n], t1, s);
                    return null === i ? [
                        wt(e1, t1, s, n)[2],
                        !1
                    ] : [
                        i[2],
                        !0
                    ];
                })(t1, s, n, i);
                if (null !== r && (Yt(t1, r), !o || e1 || te(t1) || Ht(Jt(t1), Jt(s), n, i)), It(s)) {
                    const t1 = Nt(s)["activeInputs"];
                    Ct(s, t1);
                }
            }, oe = (t1, e1, s, n)=>{
                var [i, r] = ((t1, e1, s)=>{
                    var { activeInputs: n, passiveInputs: e1 } = Pt(e1), n = Xt(n, t1, s);
                    return null === n ? [
                        $t(e1, t1, s)[1],
                        !1
                    ] : [
                        n[2],
                        !0
                    ];
                })(t1, s, n);
                null !== i && (Yt(t1, i), !r || e1 || te(t1) || Jt(t1).disconnect(Kt(s), n));
            };
            class ae {
                constructor(t1){
                    this._map = new Map(t1);
                }
                get size() {
                    return this._map.size;
                }
                entries() {
                    return this._map.entries();
                }
                forEach(s, n = null) {
                    return this._map.forEach((t1, e1)=>s.call(n, t1, e1, this));
                }
                get(t1) {
                    return this._map.get(t1);
                }
                has(t1) {
                    return this._map.has(t1);
                }
                keys() {
                    return this._map.keys();
                }
                values() {
                    return this._map.values();
                }
            }
            const he = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 1,
                numberOfOutputs: 1,
                parameterData: {},
                processorOptions: {}
            };
            function ce(t1, e1, s, n, i) {
                if ("function" == typeof t1.copyFromChannel) 0 === e1[s].byteLength && (e1[s] = new Float32Array(128)), t1.copyFromChannel(e1[s], n, i);
                else {
                    const r = t1.getChannelData(n);
                    if (0 === e1[s].byteLength) e1[s] = r.slice(i, i + 128);
                    else {
                        const t1 = new Float32Array(r.buffer, i * Float32Array.BYTES_PER_ELEMENT, 128);
                        e1[s].set(t1);
                    }
                }
            }
            const le = (t1, e1, s, n, i)=>{
                "function" == typeof t1.copyToChannel ? 0 !== e1[s].byteLength && t1.copyToChannel(e1[s], n, i) : 0 !== e1[s].byteLength && t1.getChannelData(n).set(e1[s], i);
            }, ue = (e1, s)=>{
                const n = [];
                for(let t1 = 0; t1 < e1; t1 += 1){
                    const e1 = [], i = "number" == typeof s ? s : s[t1];
                    for(let t1 = 0; t1 < i; t1 += 1)e1.push(new Float32Array(128));
                    n.push(e1);
                }
                return n;
            }, pe = {
                Q: 1,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 350,
                gain: 0,
                type: "lowpass"
            }, de = {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 6
            }, fe = {
                channelCount: 6,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: 6
            }, _e = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                offset: 1
            }, me = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                disableNormalization: !1
            }, ge = (s)=>{
                const { port1: n, port2: i } = new MessageChannel;
                return new Promise((t1)=>{
                    const e1 = ()=>{
                        i.onmessage = null, n.close(), i.close(), t1();
                    };
                    i.onmessage = ()=>e1();
                    try {
                        n.postMessage(s, [
                            s
                        ]);
                    } finally{
                        e1();
                    }
                });
            }, ve = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                delayTime: 0,
                maxDelayTime: 1
            }, ye = (t1, e1, s)=>{
                s = e1[s];
                if (void 0 === s) throw t1();
                return s;
            }, xe = {
                attack: .003,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                knee: 30,
                ratio: 12,
                release: .25,
                threshold: -24
            }, we = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                gain: 1
            }, be = ()=>new DOMException("", "InvalidStateError"), Te = ()=>new DOMException("", "InvalidAccessError"), Se = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers"
            }, ke = (s, n, i, r, o, a, h, t1, c, l, u)=>{
                var e1 = l.length;
                let p = t1;
                for(let t1 = 0; t1 < e1; t1 += 1){
                    let e1 = i[0] * l[t1];
                    for(let t1 = 1; t1 < o; t1 += 1){
                        const r = p - t1 & c - 1;
                        e1 += i[t1] * a[r], e1 -= s[t1] * h[r];
                    }
                    for(let t1 = o; t1 < r; t1 += 1)e1 += i[t1] * a[p - t1 & c - 1];
                    for(let t1 = o; t1 < n; t1 += 1)e1 -= s[t1] * h[p - t1 & c - 1];
                    a[p] = l[t1], h[p] = e1, p = p + 1 & c - 1, u[t1] = e1;
                }
                return p;
            }, Ce = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers"
            }, Ae = (t1)=>{
                var e1 = new Uint32Array([
                    1179011410,
                    40,
                    1163280727,
                    544501094,
                    16,
                    131073,
                    44100,
                    176400,
                    1048580,
                    1635017060,
                    4,
                    0
                ]);
                try {
                    const s = t1.decodeAudioData(e1.buffer, ()=>{});
                    return void 0 !== s && (s.catch(()=>{}), !0);
                } catch  {}
                return !1;
            }, De = (t1, e1, s)=>{
                e1 = e1[s];
                void 0 !== e1 && e1 !== t1[s] && (t1[s] = e1);
            }, Oe = (t1, e1)=>{
                De(t1, e1, "channelCount"), De(t1, e1, "channelCountMode"), De(t1, e1, "channelInterpretation");
            }, Me = (t1)=>"function" == typeof t1.getFloatTimeDomainData, Ee = (t1, e1, s)=>{
                e1 = e1[s];
                void 0 !== e1 && e1 !== t1[s].value && (t1[s].value = e1);
            }, Re = (n)=>{
                var i;
                n.start = (i = n.start, (t1 = 0, e1 = 0, s)=>{
                    if ("number" == typeof s && s < 0 || e1 < 0 || t1 < 0) throw new RangeError("The parameters can't be negative.");
                    i.call(n, t1, e1, s);
                });
            }, qe = (e1)=>{
                var s;
                e1.stop = (s = e1.stop, (t1 = 0)=>{
                    if (t1 < 0) throw new RangeError("The parameter can't be negative.");
                    s.call(e1, t1);
                });
            }, Fe = (t1, e1)=>null === t1 ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(t1 * e1))))), Ie = (t1, e1)=>{
                t1 = t1.createBiquadFilter();
                return Oe(t1, e1), Ee(t1, e1, "Q"), Ee(t1, e1, "detune"), Ee(t1, e1, "frequency"), Ee(t1, e1, "gain"), De(t1, e1, "type"), t1;
            }, Ve = (t1, e1)=>{
                t1 = t1.createChannelSplitter(e1.numberOfOutputs);
                return Oe(t1, e1), ((t1)=>{
                    const e1 = t1.numberOfOutputs;
                    Object.defineProperty(t1, "channelCount", {
                        get: ()=>e1,
                        set: (t1)=>{
                            if (t1 !== e1) throw be();
                        }
                    }), Object.defineProperty(t1, "channelCountMode", {
                        get: ()=>"explicit",
                        set: (t1)=>{
                            if ("explicit" !== t1) throw be();
                        }
                    }), Object.defineProperty(t1, "channelInterpretation", {
                        get: ()=>"discrete",
                        set: (t1)=>{
                            if ("discrete" !== t1) throw be();
                        }
                    });
                })(t1), t1;
            }, Ne = (t1, e1)=>(t1.connect = e1.connect.bind(e1), t1.disconnect = e1.disconnect.bind(e1), t1), Pe = (t1, e1)=>{
                t1 = t1.createDelay(e1.maxDelayTime);
                return Oe(t1, e1), Ee(t1, e1, "delayTime"), t1;
            }, je = (t1, e1)=>{
                t1 = t1.createGain();
                return Oe(t1, e1), Ee(t1, e1, "gain"), t1;
            };
            function Le(e1, s) {
                let n = [
                    0,
                    0
                ];
                for(let t1 = e1.length - 1; 0 <= t1; --t1)n = [
                    (i = n)[0] * s[0] - i[1] * s[1],
                    i[0] * s[1] + i[1] * s[0]
                ], n[0] += e1[t1];
                var i;
                return n;
            }
            const ze = (t1, e1, s, n)=>t1.createScriptProcessor(e1, s, n), We = ()=>new DOMException("", "NotSupportedError"), Be = {
                numberOfChannels: 1
            }, Ue = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 440,
                periodicWave: void 0,
                type: "sine"
            }, Ge = {
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                coneInnerAngle: 360,
                coneOuterAngle: 360,
                coneOuterGain: 0,
                distanceModel: "inverse",
                maxDistance: 1e4,
                orientationX: 1,
                orientationY: 0,
                orientationZ: 0,
                panningModel: "equalpower",
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                refDistance: 1,
                rolloffFactor: 1
            }, Qe = {
                disableNormalization: !1
            }, Ze = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                pan: 0
            }, Xe = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                curve: null,
                oversample: "none"
            }, Ye = (t1, e1, s)=>void 0 === t1.copyFromChannel ? t1.getChannelData(s)[0] : (t1.copyFromChannel(e1, s), e1[0]), $e = (t1)=>{
                if (null === t1) return !1;
                var e1 = t1.length;
                return e1 % 2 != 0 ? 0 !== t1[Math.floor(e1 / 2)] : t1[e1 / 2 - 1] + t1[e1 / 2] !== 0;
            }, He = (t1, e1, s, n)=>{
                let i = t1;
                for(; !i.hasOwnProperty(e1);)i = Object.getPrototypeOf(i);
                var { get: r, set: o } = Object.getOwnPropertyDescriptor(i, e1);
                Object.defineProperty(t1, e1, {
                    get: s(r),
                    set: n(o)
                });
            }, Je = (e1, s, n)=>{
                try {
                    e1.setValueAtTime(s, n);
                } catch (t1) {
                    if (9 !== t1.code) throw t1;
                    Je(e1, s, n + 1e-7);
                }
            }, Ke = (t1)=>{
                const e1 = t1.createOscillator();
                try {
                    e1.start(-1);
                } catch (t1) {
                    return t1 instanceof RangeError;
                }
                return !1;
            }, ts = (t1)=>{
                const e1 = t1.createBuffer(1, 1, 44100), s = t1.createBufferSource();
                s.buffer = e1, s.start(), s.stop();
                try {
                    return s.stop(), !0;
                } catch  {
                    return !1;
                }
            }, es = (t1)=>{
                const e1 = t1.createOscillator();
                try {
                    e1.stop(-1);
                } catch (t1) {
                    return t1 instanceof RangeError;
                }
                return !1;
            }, ss = ()=>{
                try {
                    new DOMException;
                } catch  {
                    return !1;
                }
                return !0;
            }, ns = ()=>new Promise((e1)=>{
                    const t1 = new ArrayBuffer(0), { port1: s, port2: n } = new MessageChannel;
                    s.onmessage = ({ data: t1 })=>e1(null !== t1), n.postMessage(t1, [
                        t1
                    ]);
                }), is = (n, t1)=>{
                const i = t1.createGain();
                n.connect(i);
                const e1 = (s = n.disconnect, ()=>{
                    s.call(n, i), n.removeEventListener("ended", e1);
                });
                var s;
                n.addEventListener("ended", e1), Ne(n, i), n.stop = ((e1)=>{
                    let s = !1;
                    return (t1 = 0)=>{
                        if (s) try {
                            e1.call(n, t1);
                        } catch  {
                            i.gain.setValueAtTime(0, t1);
                        }
                        else e1.call(n, t1), s = !0;
                    };
                })(n.stop);
            }, rs = (s, n)=>(t1)=>{
                    var e1 = {
                        value: s
                    };
                    return Object.defineProperties(t1, {
                        currentTarget: e1,
                        target: e1
                    }), ("function" == typeof n ? n : n.handleEvent).call(s, t1);
                }, os = (o = Bt, (t1, e1, [s, n, i], r)=>{
                o(t1[n], [
                    e1,
                    s,
                    i
                ], (t1)=>t1[0] === e1 && t1[1] === s, r);
            }), as = (a = Bt, (t1, e1, [s, n, i], r)=>{
                var o = t1.get(s);
                void 0 === o ? t1.set(s, new Set([
                    [
                        n,
                        e1,
                        i
                    ]
                ])) : a(o, [
                    n,
                    e1,
                    i
                ], (t1)=>t1[0] === n && t1[1] === e1, r);
            }), hs = (i = xt, (t1, e1, s, n)=>i(t1[n], (t1)=>t1[0] === e1 && t1[1] === s)), cs = new WeakMap, ls = (n = cs, (t1)=>{
                return null !== (t1 = n.get(t1)) && void 0 !== t1 ? t1 : 0;
            }), us = (r = new Map, h = new WeakMap, (e1, t1)=>{
                const s = h.get(e1);
                if (void 0 !== s) return s;
                var n = r.get(e1);
                if (void 0 !== n) return n;
                try {
                    const s = t1();
                    return s instanceof Promise ? (r.set(e1, s), s.catch(()=>!1).then((t1)=>(r.delete(e1), h.set(e1, t1), t1))) : (h.set(e1, s), s);
                } catch  {
                    return h.set(e1, !1), !1;
                }
            }), ps = "undefined" == typeof window ? null : window, ds = (m = us, g = Mt, (t1, e1)=>{
                const s = t1.createAnalyser();
                if (Oe(s, e1), !(e1.maxDecibels > e1.minDecibels)) throw g();
                var i;
                return De(s, e1, "fftSize"), De(s, e1, "maxDecibels"), De(s, e1, "minDecibels"), De(s, e1, "smoothingTimeConstant"), m(Me, ()=>Me(s)) || ((i = s).getFloatTimeDomainData = (e1)=>{
                    var s = new Uint8Array(e1.length);
                    i.getByteTimeDomainData(s);
                    var n = Math.max(s.length, i.fftSize);
                    for(let t1 = 0; t1 < n; t1 += 1)e1[t1] = .0078125 * (s[t1] - 128);
                    return e1;
                }), s;
            }), fs = (_ = Nt, (t1)=>{
                t1 = _(t1);
                if (null === t1.renderer) throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
                return t1.renderer;
            }), _s = (p = Nt, d = fs, f = te, async (o, a, h, t1)=>{
                const e1 = p(o), c = [
                    ...t1,
                    o
                ];
                await Promise.all(e1.activeInputs.map((t1, r)=>Array.from(t1).filter(([t1])=>!c.includes(t1)).map(async ([t1, e1])=>{
                        const s = d(t1), n = await s.render(t1, a, c), i = o.context.destination;
                        f(t1) || o === i && f(o) || n.connect(h, e1, r);
                    })).reduce((t1, e1)=>[
                        ...t1,
                        ...e1
                    ], []));
            }), ms = (c = ds, l = Jt, u = _s, ()=>{
                const i = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = i.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = l(t1);
                            if (!Dt(n, e1)) {
                                const l = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    fftSize: n.fftSize,
                                    maxDecibels: n.maxDecibels,
                                    minDecibels: n.minDecibels,
                                    smoothingTimeConstant: n.smoothingTimeConstant
                                };
                                n = c(e1, l);
                            }
                            return i.set(e1, n), await u(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), gs = (v = ct, (t1)=>{
                t1 = v.get(t1);
                if (void 0 === t1) throw be();
                return t1;
            }), vs = null === (Uc = ps) ? null : Uc.hasOwnProperty("OfflineAudioContext") ? Uc.OfflineAudioContext : Uc.hasOwnProperty("webkitOfflineAudioContext") ? Uc.webkitOfflineAudioContext : null, ys = (et = vs, (t1)=>null !== et && t1 instanceof et), xs = new WeakMap, ws = (tt = rs, class {
                constructor(t1){
                    this._nativeEventTarget = t1, this._listeners = new WeakMap;
                }
                addEventListener(e1, s, n) {
                    if (null !== s) {
                        let t1 = this._listeners.get(s);
                        void 0 === t1 && (t1 = tt(this, s), "function" == typeof s && this._listeners.set(s, t1)), this._nativeEventTarget.addEventListener(e1, t1, n);
                    }
                }
                dispatchEvent(t1) {
                    return this._nativeEventTarget.dispatchEvent(t1);
                }
                removeEventListener(t1, e1, s) {
                    e1 = null === e1 ? void 0 : this._listeners.get(e1);
                    this._nativeEventTarget.removeEventListener(t1, void 0 === e1 ? null : e1, s);
                }
            }), bs = null === (Jc = ps) ? null : Jc.hasOwnProperty("AudioContext") ? Jc.AudioContext : Jc.hasOwnProperty("webkitAudioContext") ? Jc.webkitAudioContext : null, Ts = (K = bs, (t1)=>null !== K && t1 instanceof K), Ss = (J = ps, (t1)=>null !== J && "function" == typeof J.AudioNode && t1 instanceof J.AudioNode), ks = (H = ps, (t1)=>null !== H && "function" == typeof H.AudioParam && t1 instanceof H.AudioParam), Cs = null !== (Kc = ps) && Kc.hasOwnProperty("AudioWorkletNode") ? Kc.AudioWorkletNode : null, As = (st = rt, y = (t1, e1, s)=>{
                const n = [];
                for(let t1 = 0; t1 < s.numberOfInputs; t1 += 1)n.push(new Set);
                st.set(t1, {
                    activeInputs: n,
                    outputs: new Set,
                    passiveInputs: new WeakMap,
                    renderer: e1
                });
            }, x = ((l, u, p, d, f, _, m, g, v, y, x, w, b)=>{
                const T = new WeakMap;
                return (n, i, r, o, a)=>{
                    const { activeInputs: h, passiveInputs: c } = _(i), t1 = _(n)["outputs"], e1 = g(n), s = (t1)=>{
                        var e1 = v(i), s = v(n);
                        if (t1) {
                            const u = wt(c, n, r, o);
                            l(h, n, u, !1), a || w(n) || p(s, e1, r, o), b(i) && Tt(i);
                        } else {
                            const l = d(h, n, r, o);
                            u(c, o, l, !1), a || w(n) || f(s, e1, r, o);
                            const p = m(i);
                            if (0 === p) x(i) && Ct(i, h);
                            else {
                                const l = T.get(i);
                                void 0 !== l && clearTimeout(l), T.set(i, setTimeout(()=>{
                                    x(i) && Ct(i, h);
                                }, 1e3 * p));
                            }
                        }
                    };
                    return !!y(t1, [
                        i,
                        r,
                        o
                    ], (t1)=>t1[0] === i && t1[1] === r && t1[2] === o, !0) && (e1.add(s), x(n) ? l(h, n, [
                        r,
                        o,
                        s
                    ], !0) : u(c, o, [
                        n,
                        r,
                        s
                    ], !0), !0);
                };
            })(os, as, Zt, hs, Ht, Nt, ls, bt, Jt, Bt, It, te, ee), w = us, G = ut, Q = Ht, Z = Nt, X = Jt, Y = Kt, $ = It, b = (n)=>(t1, e1)=>{
                    var s = G.get(t1);
                    if (void 0 === s) {
                        if (!n && $(t1)) {
                            const G = X(t1), $ = Z(t1)["outputs"];
                            for (const Z of $)if (Wt(Z)) {
                                const Y = X(Z[0]);
                                Q(G, Y, Z[1], Z[2]);
                            } else {
                                const Q = Y(Z[0]);
                                G.disconnect(Q, Z[1]);
                            }
                        }
                        G.set(t1, e1);
                    } else G.set(t1, s + e1);
                }, T = Mt, S = Te, k = We, N = Zt, P = ut, j = Nt, L = Jt, z = Kt, W = gs, B = It, U = ys, C = (t1, e1)=>{
                var s = P.get(t1);
                if (void 0 === s) throw new Error("Missing the expected cycle count.");
                var n = W(t1.context), n = U(n);
                if (s === e1) {
                    if (P.delete(t1), !n && B(t1)) {
                        const P = L(t1), W = j(t1)["outputs"];
                        for (const j of W)if (Wt(j)) {
                            const z = L(j[0]);
                            N(P, z, j[1], j[2]);
                        } else {
                            const N = z(j[0]);
                            P.connect(N, j[1]);
                        }
                    }
                } else P.set(t1, s - e1);
            }, F = xs, I = Nt, V = yt, A = function e1(s, t1) {
                const n = zt(t1) ? t1 : V(F, t1);
                if ("delayTime" in n) return [];
                if (s[0] === n) return [
                    s
                ];
                if (s.includes(n)) return [];
                var t1 = I(n)["outputs"];
                return Array.from(t1).map((t1)=>e1([
                        ...s,
                        n
                    ], t1[0])).reduce((t1, e1)=>t1.concat(e1), []);
            }, Ds = ws, O = Ts, M = Ss, E = ks, q = Cs, class extends Ds {
                constructor(t1, e1, s, n){
                    super(s), this._context = t1, this._nativeAudioNode = s;
                    const i = D(t1);
                    O(i) && !0 !== w(se, ()=>se(i, q)) && ((i)=>{
                        const r = new Map;
                        var o, a;
                        i.connect = (a = i.connect.bind(i), (t1, e1 = 0, s = 0)=>{
                            const n = ie(t1) ? a(t1, e1, s) : a(t1, e1), i = r.get(t1);
                            return void 0 === i ? r.set(t1, [
                                {
                                    input: s,
                                    output: e1
                                }
                            ]) : i.every((t1)=>t1.input !== s || t1.output !== e1) && i.push({
                                input: s,
                                output: e1
                            }), n;
                        }), i.disconnect = (o = i.disconnect, (e1, s, n)=>{
                            if (o.apply(i), void 0 === e1) r.clear();
                            else if ("number" == typeof e1) for (const [i, o] of r){
                                const s = o.filter((t1)=>t1.output !== e1);
                                0 === s.length ? r.delete(i) : r.set(i, s);
                            }
                            else if (r.has(e1)) {
                                if (void 0 === s) r.delete(e1);
                                else {
                                    const i = r.get(e1);
                                    if (void 0 !== i) {
                                        const o = i.filter((t1)=>t1.output !== s && (t1.input !== n || void 0 === n));
                                        0 === o.length ? r.delete(e1) : r.set(e1, o);
                                    }
                                }
                            }
                            for (const [o, e1] of r)e1.forEach((t1)=>{
                                ie(o) ? i.connect(o, t1.output, t1.input) : i.connect(o, t1.output);
                            });
                        });
                    })(s), ot.set(this, s), lt.set(this, new Set), "closed" !== t1.state && e1 && Tt(this), y(this, n, s);
                }
                get channelCount() {
                    return this._nativeAudioNode.channelCount;
                }
                set channelCount(t1) {
                    this._nativeAudioNode.channelCount = t1;
                }
                get channelCountMode() {
                    return this._nativeAudioNode.channelCountMode;
                }
                set channelCountMode(t1) {
                    this._nativeAudioNode.channelCountMode = t1;
                }
                get channelInterpretation() {
                    return this._nativeAudioNode.channelInterpretation;
                }
                set channelInterpretation(t1) {
                    this._nativeAudioNode.channelInterpretation = t1;
                }
                get context() {
                    return this._context;
                }
                get numberOfInputs() {
                    return this._nativeAudioNode.numberOfInputs;
                }
                get numberOfOutputs() {
                    return this._nativeAudioNode.numberOfOutputs;
                }
                connect(t1, e1 = 0, s = 0) {
                    if (e1 < 0 || e1 >= this._nativeAudioNode.numberOfOutputs) throw T();
                    var n = D(this._context), n = R(n);
                    if (M(t1) || E(t1)) throw S();
                    if (zt(t1)) {
                        const T = Jt(t1);
                        try {
                            const x = Zt(this._nativeAudioNode, T, e1, s), b = ee(this);
                            (n || b) && this._nativeAudioNode.disconnect(...x), "closed" !== this.context.state && !b && ee(t1) && Tt(t1);
                        } catch (t1) {
                            if (12 === t1.code) throw S();
                            throw t1;
                        }
                        if (x(this, t1, e1, s, n)) {
                            const x = A([
                                this
                            ], t1);
                            ne(x, b(n));
                        }
                        return t1;
                    }
                    s = Kt(t1);
                    if ("playbackRate" === s.name && 1024 === s.maxValue) throw k();
                    try {
                        this._nativeAudioNode.connect(s, e1), (n || ee(this)) && this._nativeAudioNode.disconnect(s, e1);
                    } catch (t1) {
                        if (12 === t1.code) throw S();
                        throw t1;
                    }
                    if (((r, o, a, h)=>{
                        const { activeInputs: c, passiveInputs: l } = Pt(o), t1 = Nt(r)["outputs"], e1 = bt(r), s = (t1)=>{
                            const e1 = Jt(r), s = Kt(o);
                            if (t1) {
                                const o = $t(l, r, a);
                                Ut(c, r, o, !1), h || te(r) || e1.connect(s, a);
                            } else {
                                const o = (t1 = c, n = r, i = a, xt(t1, (t1)=>t1[0] === n && t1[1] === i));
                                Gt(l, o, !1), h || te(r) || e1.disconnect(s, a);
                            }
                            var n, i;
                        };
                        return !!Bt(t1, [
                            o,
                            a
                        ], (t1)=>t1[0] === o && t1[1] === a, !0) && (e1.add(s), It(r) ? Ut(c, r, [
                            a,
                            s
                        ], !0) : Gt(l, [
                            r,
                            a,
                            s
                        ], !0), !0);
                    })(this, t1, e1, n)) {
                        const x = A([
                            this
                        ], t1);
                        ne(x, b(n));
                    }
                }
                disconnect(t1, e1, s) {
                    let n;
                    var i = D(this._context), i = R(i);
                    if (void 0 === t1) n = ((t1, e1)=>{
                        const s = Nt(t1), n = [];
                        for (const i of s.outputs)(Wt(i) ? re : oe)(t1, e1, ...i), n.push(i[0]);
                        return s.outputs.clear(), n;
                    })(this, i);
                    else if ("number" == typeof t1) {
                        if (t1 < 0 || t1 >= this.numberOfOutputs) throw T();
                        n = ((t1, e1, s)=>{
                            const n = Nt(t1), i = [];
                            for (const r of n.outputs)r[1] === s && ((Wt(r) ? re : oe)(t1, e1, ...r), i.push(r[0]), n.outputs.delete(r));
                            return i;
                        })(this, i, t1);
                    } else {
                        if (void 0 !== e1 && (e1 < 0 || e1 >= this.numberOfOutputs)) throw T();
                        if (zt(t1) && void 0 !== s && (s < 0 || s >= t1.numberOfInputs)) throw T();
                        if (n = ((e1, s, n, i, r)=>{
                            const o = Nt(e1);
                            return Array.from(o.outputs).filter((t1)=>!(t1[0] !== n || void 0 !== i && t1[1] !== i || void 0 !== r && t1[2] !== r)).map((t1)=>((Wt(t1) ? re : oe)(e1, s, ...t1), o.outputs.delete(t1), t1[0]));
                        })(this, i, t1, e1, s), 0 === n.length) throw S();
                    }
                    for (const t1 of n){
                        const e1 = A([
                            this
                        ], t1);
                        ne(e1, C);
                    }
                }
            });
            var Ds, Os, Ms, Es, Rs, qs, Fs, Is, Vs, Ns, Ps, js, Ls, zs, Ws, Bs, Us, Gs, Qs, Zs, Xs, Ys, $s, Hs, Js, Ks, tn, en, sn, nn, rn, on, an, hn, cn, ln, un, pn, dn, fn, _n, mn, gn, vn, yn, xn, wn, bn, Tn, Sn, kn, Cn, An, Dn, On, Mn, En, Rn, qn, Fn, In, Vn, Nn, Pn, jn, Ln, zn, Wn, Bn, Un, Gn, Qn, Zn, Xn, Yn, $n, Hn, Jn, Kn, ti, ei, si, ni, ii, ri, oi, ai, hi, ci, li, ui, pi, di, fi, _i, mi, gi, vi, yi, xi, wi, bi, Ti, Si, ki, Ci, Ai, Di, Oi, Mi, Ei, Ri, qi, Fi, Ii, Vi, Ni, Pi, ji, Li, zi, Wi, Bi, Ui, Gi, Qi, Zi, Xi, Yi, $i, Hi, Ji, Ki, tr, er, sr, nr, ir, rr, or, ar, hr, cr, lr, ur, pr, dr, fr, _r, mr, gr, vr, yr, xr, wr, br, Tr, Sr, kr, Cr, Ar, Dr, Or, Mr, Er, Rr, qr, Fr, Ir, Vr, Nr, Pr, jr, Lr, zr, Wr, Br, Ur, Gr, Qr, Zr, Xr, Yr, $r, Hr, Jr, Kr, to, eo, so, no, io, ro, oo, ao, ho, co, lo, uo, po, fo, _o, mo, go, vo, yo, xo, wo, bo, To, So, ko, Co, Ao, Do, Oo, Mo, Eo, Ro, qo, Fo, Io, Vo, No, Po, jo, Lo, zo, Wo, Bo, Uo, Go, Qo, Zo, Xo, Yo, $o, Ho, Jo, Ko, ta, ea, sa, na, ia, ra, oa, aa, ha, ca, la, ua, pa, da, fa, _a, ma, ga, va, ya, xa, wa, ba, Ta, Sa, ka, Ca, Aa, Da, Oa, Ma, Ea, Ra, qa, Fa, Ia, Va, Na, Pa, ja, La, za, Wa, Ba, Ua, Ga, Qa, Za, Xa, Ya, $a, Ha, Ja, Ka, th, eh, sh, nh, ih, rh, oh, ah, hh, ch, lh, uh, ph, dh, fh, _h, mh, gh, vh, yh, xh, wh, bh, Th, Sh, kh, Ch, Ah, Dh, Oh, Mh, Eh, Rh, qh, Fh, Ih, Vh, Nh, Ph, jh, Lh, zh, Wh, Bh, Uh, Gh, Qh, Zh, Xh, Yh, $h, Hh, Jh, Kh, tc, ec, sc, nc, ic, rc, oc, ac, hc, cc, lc, uc, pc, dc, fc, _c, mc, gc, vc, yc, xc, wc, bc, Tc, Sc, kc, Cc, Ac, Dc, Oc, Mc, Ec, Rc, qc, Fc, Ic, Vc, Nc, Pc, jc, Lc, zc, Wc, Bc, Uc, Gc, Qc, Zc, Xc, Yc, $c, Hc, Jc = (Uc = As, Os = ms, Ms = Mt, Es = ds, Rs = D = gs, qs = R = ys, class extends Uc {
                constructor(t1, e1){
                    var s = Rs(t1), e1 = {
                        ...At,
                        ...e1
                    }, e1 = Es(s, e1);
                    super(t1, !1, e1, qs(s) ? Os() : null), this._nativeAnalyserNode = e1;
                }
                get fftSize() {
                    return this._nativeAnalyserNode.fftSize;
                }
                set fftSize(t1) {
                    this._nativeAnalyserNode.fftSize = t1;
                }
                get frequencyBinCount() {
                    return this._nativeAnalyserNode.frequencyBinCount;
                }
                get maxDecibels() {
                    return this._nativeAnalyserNode.maxDecibels;
                }
                set maxDecibels(t1) {
                    var e1 = this._nativeAnalyserNode.maxDecibels;
                    if (!((this._nativeAnalyserNode.maxDecibels = t1) > this._nativeAnalyserNode.minDecibels)) throw this._nativeAnalyserNode.maxDecibels = e1, Ms();
                }
                get minDecibels() {
                    return this._nativeAnalyserNode.minDecibels;
                }
                set minDecibels(t1) {
                    var e1 = this._nativeAnalyserNode.minDecibels;
                    if (this._nativeAnalyserNode.minDecibels = t1, !(this._nativeAnalyserNode.maxDecibels > t1)) throw this._nativeAnalyserNode.minDecibels = e1, Ms();
                }
                get smoothingTimeConstant() {
                    return this._nativeAnalyserNode.smoothingTimeConstant;
                }
                set smoothingTimeConstant(t1) {
                    this._nativeAnalyserNode.smoothingTimeConstant = t1;
                }
                getByteFrequencyData(t1) {
                    this._nativeAnalyserNode.getByteFrequencyData(t1);
                }
                getByteTimeDomainData(t1) {
                    this._nativeAnalyserNode.getByteTimeDomainData(t1);
                }
                getFloatFrequencyData(t1) {
                    this._nativeAnalyserNode.getFloatFrequencyData(t1);
                }
                getFloatTimeDomainData(t1) {
                    this._nativeAnalyserNode.getFloatTimeDomainData(t1);
                }
            }), Kc = new WeakSet, Uc = null !== (Ds = ps) && Ds.hasOwnProperty("AudioBuffer") ? Ds.AudioBuffer : null, Ds = (Fs = new Uint32Array(1), (t1)=>(Fs[0] = t1, Fs[0]));
            const tl = (wn = Mt, (a)=>{
                a.copyFromChannel = (e1, t1, s = 0)=>{
                    var n = xn(s), t1 = xn(t1);
                    if (t1 >= a.numberOfChannels) throw wn();
                    var i = a.length, r = a.getChannelData(t1), o = e1.length;
                    for(let t1 = n < 0 ? -n : 0; t1 + n < i && t1 < o; t1 += 1)e1[t1] = r[t1 + n];
                }, a.copyToChannel = (e1, t1, s = 0)=>{
                    var n = xn(s), t1 = xn(t1);
                    if (t1 >= a.numberOfChannels) throw wn();
                    const i = a.length, r = a.getChannelData(t1), o = e1.length;
                    for(let t1 = n < 0 ? -n : 0; t1 + n < i && t1 < o; t1 += 1)r[t1 + n] = e1[t1];
                };
            }), el = (yn = xn = Ds, (n)=>{
                var i, r;
                n.copyFromChannel = (r = n.copyFromChannel, (t1, e1, s = 0)=>{
                    s = yn(s), e1 = yn(e1);
                    if (s < n.length) return r.call(n, t1, e1, s);
                }), n.copyToChannel = (i = n.copyToChannel, (t1, e1, s = 0)=>{
                    s = yn(s), e1 = yn(e1);
                    if (s < n.length) return i.call(n, t1, e1, s);
                });
            }), sl = ((i, r, o, a, h, c, l, u)=>{
                let p = null;
                return class e1 {
                    constructor(t1){
                        if (null === h) throw new Error("Missing the native OfflineAudioContext constructor.");
                        var { length: e1, numberOfChannels: s, sampleRate: t1 } = {
                            ...Rt,
                            ...t1
                        };
                        null === p && (p = new h(1, 1, 44100));
                        const n = null !== a && r(c, c) ? new a({
                            length: e1,
                            numberOfChannels: s,
                            sampleRate: t1
                        }) : p.createBuffer(s, e1, t1);
                        if (0 === n.numberOfChannels) throw o();
                        return "function" != typeof n.copyFromChannel ? (l(n), Et(n)) : r(Ot, ()=>Ot(n)) || u(n), i.add(n), n;
                    }
                    static [Symbol.hasInstance](t1) {
                        return null !== t1 && "object" == typeof t1 && Object.getPrototypeOf(t1) === e1.prototype || i.has(t1);
                    }
                };
            })(Kc, us, We, Uc, vs, (vn = Uc, ()=>{
                if (null === vn) return !1;
                try {
                    new vn({
                        length: 1,
                        sampleRate: 44100
                    });
                } catch  {
                    return !1;
                }
                return !0;
            }), tl, el), nl = (gn = je, (t1, e1)=>{
                const s = gn(t1, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                });
                e1.connect(s).connect(t1.destination);
                const n = ()=>{
                    e1.removeEventListener("ended", n), e1.disconnect(s), s.disconnect();
                };
                e1.addEventListener("ended", n);
            }), il = (fn = fs, _n = Pt, mn = te, async (t1, i, r, o)=>{
                t1 = _n(t1);
                await Promise.all(Array.from(t1.activeInputs).map(async ([t1, e1])=>{
                    const s = fn(t1), n = await s.render(t1, i, o);
                    mn(t1) || n.connect(r, e1);
                }));
            }), rl = (dn = il, (t1, e1, s, n)=>dn(e1, t1, s, n)), ol = (en = nl, sn = us, nn = (t1)=>{
                const e1 = t1.createBufferSource();
                e1.start();
                try {
                    e1.start();
                } catch  {
                    return !0;
                }
                return !1;
            }, rn = (t1)=>{
                const e1 = t1.createBufferSource(), s = t1.createBuffer(1, 1, 44100);
                e1.buffer = s;
                try {
                    e1.start(0, 1);
                } catch  {
                    return !1;
                }
                return !0;
            }, on = (t1)=>{
                const e1 = t1.createBufferSource();
                e1.start();
                try {
                    e1.stop();
                } catch  {
                    return !1;
                }
                return !0;
            }, an = Ke, hn = ts, cn = es, pn = He, ln = (s, t1)=>{
                const n = t1.createBuffer(1, 1, 44100);
                null === s.buffer && (s.buffer = n), pn(s, "buffer", (e1)=>()=>{
                        var t1 = e1.call(s);
                        return t1 === n ? null : t1;
                    }, (e1)=>(t1)=>e1.call(s, null === t1 ? n : t1));
            }, un = is, (t1, e1)=>{
                var i, r, o, s = t1.createBufferSource();
                return Oe(s, e1), Ee(s, e1, "playbackRate"), De(s, e1, "buffer"), De(s, e1, "loop"), De(s, e1, "loopEnd"), De(s, e1, "loopStart"), sn(nn, ()=>nn(t1)) || ((o = s).start = ((n)=>{
                    let i = !1;
                    return (t1 = 0, e1 = 0, s)=>{
                        if (i) throw be();
                        n.call(o, t1, e1, s), i = !0;
                    };
                })(o.start)), sn(rn, ()=>rn(t1)) || ((i = s).start = (r = i.start, (t1 = 0, e1 = 0, s)=>{
                    var n = i.buffer, e1 = null === n ? e1 : Math.min(n.duration, e1);
                    null !== n && e1 > n.duration - .5 / i.context.sampleRate ? r.call(i, t1, 0, 0) : r.call(i, t1, e1, s);
                })), sn(on, ()=>on(t1)) || ln(s, t1), sn(an, ()=>an(t1)) || Re(s), sn(hn, ()=>hn(t1)) || un(s, t1), sn(cn, ()=>cn(t1)) || qe(s), en(t1, s), s;
            }), al = (tn = Pt, Js = (t1)=>{
                t1 = tn(t1);
                if (null === t1.renderer) throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
                return t1.renderer;
            }, Ks = il, (t1, e1, s, n)=>(Js(e1).replay(s), Ks(e1, t1, s, n))), hl = (Zs = rl, Xs = ol, Ys = Jt, $s = al, Hs = _s, ()=>{
                const r = new WeakMap;
                let o = null, a = null;
                return {
                    set start (t){
                        o = t;
                    },
                    set stop (t){
                        a = t;
                    },
                    render (t1, e1, s) {
                        var n = r.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = Ys(t1);
                            var i = Dt(n, e1);
                            if (!i) {
                                const Zs = {
                                    buffer: n.buffer,
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    loop: n.loop,
                                    loopEnd: n.loopEnd,
                                    loopStart: n.loopStart,
                                    playbackRate: n.playbackRate.value
                                };
                                n = Xs(e1, Zs), null !== o && n.start(...o), null !== a && n.stop(a);
                            }
                            return r.set(e1, n), i ? await Zs(e1, t1.playbackRate, n.playbackRate, s) : await $s(e1, t1.playbackRate, n.playbackRate, s), await Hs(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), cl = (bn = at, Is = (t1, e1)=>{
                bn.set(t1, {
                    activeInputs: new Set,
                    passiveInputs: new WeakMap,
                    renderer: e1
                });
            }, Vs = xs, Ns = ht, Ps = nt.createCancelAndHoldAutomationEvent, js = nt.createCancelScheduledValuesAutomationEvent, Ls = nt.createExponentialRampToValueAutomationEvent, zs = nt.createLinearRampToValueAutomationEvent, Ws = nt.createSetTargetAutomationEvent, Bs = nt.createSetValueAutomationEvent, Us = nt.createSetValueCurveAutomationEvent, Gs = bs, Qs = Je, (p, t1, d, e1 = null, s = null)=>{
                const f = new nt.AutomationEventList(d.defaultValue), _ = t1 ? (c = f, {
                    replay (t1) {
                        for (const e1 of c)if ("exponentialRampToValue" === e1.type) {
                            const { endTime: c, value: s } = e1;
                            t1.exponentialRampToValueAtTime(s, c);
                        } else if ("linearRampToValue" === e1.type) {
                            const { endTime: c, value: n } = e1;
                            t1.linearRampToValueAtTime(n, c);
                        } else if ("setTarget" === e1.type) {
                            const { startTime: c, target: i, timeConstant: r } = e1;
                            t1.setTargetAtTime(i, c, r);
                        } else if ("setValue" === e1.type) {
                            const { startTime: c, value: o } = e1;
                            t1.setValueAtTime(o, c);
                        } else {
                            if ("setValueCurve" !== e1.type) throw new Error("Can't apply an unknown automation.");
                            {
                                const { duration: c, startTime: a, values: h } = e1;
                                t1.setValueCurveAtTime(h, a, c);
                            }
                        }
                    }
                }) : null, m = {
                    get defaultValue () {
                        return d.defaultValue;
                    },
                    get maxValue () {
                        return null === e1 ? d.maxValue : e1;
                    },
                    get minValue () {
                        return null === s ? d.minValue : s;
                    },
                    get value () {
                        return d.value;
                    },
                    set value (t){
                        d.value = t, m.setValueAtTime(t, p.context.currentTime);
                    },
                    cancelAndHoldAtTime (t1) {
                        var e1, s;
                        return "function" == typeof d.cancelAndHoldAtTime ? (null === _ && f.flush(p.context.currentTime), f.add(Ps(t1)), d.cancelAndHoldAtTime(t1)) : (e1 = Array.from(f).pop(), null === _ && f.flush(p.context.currentTime), f.add(Ps(t1)), s = Array.from(f).pop(), d.cancelScheduledValues(t1), e1 !== s && void 0 !== s && ("exponentialRampToValue" === s.type ? d.exponentialRampToValueAtTime(s.value, s.endTime) : "linearRampToValue" === s.type ? d.linearRampToValueAtTime(s.value, s.endTime) : "setValue" === s.type ? d.setValueAtTime(s.value, s.startTime) : "setValueCurve" === s.type && d.setValueCurveAtTime(s.values, s.startTime, s.duration))), m;
                    },
                    cancelScheduledValues: (t1)=>(null === _ && f.flush(p.context.currentTime), f.add(js(t1)), d.cancelScheduledValues(t1), m),
                    exponentialRampToValueAtTime (t1, e1) {
                        if (0 === t1) throw new RangeError;
                        if (!Number.isFinite(e1) || e1 < 0) throw new RangeError;
                        return null === _ && f.flush(p.context.currentTime), f.add(Ls(t1, e1)), d.exponentialRampToValueAtTime(t1, e1), m;
                    },
                    linearRampToValueAtTime: (t1, e1)=>(null === _ && f.flush(p.context.currentTime), f.add(zs(t1, e1)), d.linearRampToValueAtTime(t1, e1), m),
                    setTargetAtTime: (t1, e1, s)=>(null === _ && f.flush(p.context.currentTime), f.add(Ws(t1, e1, s)), d.setTargetAtTime(t1, e1, s), m),
                    setValueAtTime: (t1, e1)=>(null === _ && f.flush(p.context.currentTime), f.add(Bs(t1, e1)), d.setValueAtTime(t1, e1), m),
                    setValueCurveAtTime (t1, e1, s) {
                        var n = t1 instanceof Float32Array ? t1 : new Float32Array(t1);
                        if (null !== Gs && "webkitAudioContext" === Gs.name) {
                            const i = e1 + s, r = p.context.sampleRate, o = Math.ceil(e1 * r), a = Math.floor(i * r), h = a - o, c = new Float32Array(h);
                            for(let t1 = 0; t1 < h; t1 += 1){
                                const p = (n.length - 1) / s * ((o + t1) / r - e1), l = Math.floor(p), u = Math.ceil(p);
                                c[t1] = l === u ? n[l] : (1 - (p - l)) * n[l] + (1 - (u - p)) * n[u];
                            }
                            null === _ && f.flush(p.context.currentTime), f.add(Us(c, e1, s)), d.setValueCurveAtTime(c, e1, s);
                            t1 = a / r;
                            t1 < i && Qs(m, c[c.length - 1], t1), Qs(m, n[n.length - 1], i);
                        } else null === _ && f.flush(p.context.currentTime), f.add(Us(n, e1, s)), d.setValueCurveAtTime(n, e1, s);
                        return m;
                    }
                };
                var c;
                return Ns.set(m, d), Vs.set(m, p), Is(m, _), m;
            }), ll = (Uc = As, Gc = hl, Zc = be, Xc = ol, Hc = rs, class extends Uc {
                constructor(t1, e1){
                    var s = Yc(t1), n = {
                        ...Vt,
                        ...e1
                    }, i = Xc(s, n), e1 = $c(s), s = e1 ? Gc() : null;
                    super(t1, !1, i, s), this._audioBufferSourceNodeRenderer = s, this._isBufferNullified = !1, this._isBufferSet = null !== n.buffer, this._nativeAudioBufferSourceNode = i, this._onended = null, this._playbackRate = Qc(this, e1, i.playbackRate, Ft, qt);
                }
                get buffer() {
                    return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer;
                }
                set buffer(t1) {
                    if (null !== (this._nativeAudioBufferSourceNode.buffer = t1)) {
                        if (this._isBufferSet) throw Zc();
                        this._isBufferSet = !0;
                    }
                }
                get loop() {
                    return this._nativeAudioBufferSourceNode.loop;
                }
                set loop(t1) {
                    this._nativeAudioBufferSourceNode.loop = t1;
                }
                get loopEnd() {
                    return this._nativeAudioBufferSourceNode.loopEnd;
                }
                set loopEnd(t1) {
                    this._nativeAudioBufferSourceNode.loopEnd = t1;
                }
                get loopStart() {
                    return this._nativeAudioBufferSourceNode.loopStart;
                }
                set loopStart(t1) {
                    this._nativeAudioBufferSourceNode.loopStart = t1;
                }
                get onended() {
                    return this._onended;
                }
                set onended(t1) {
                    var e1 = "function" == typeof t1 ? Hc(this, t1) : null;
                    this._nativeAudioBufferSourceNode.onended = e1;
                    var s = this._nativeAudioBufferSourceNode.onended;
                    this._onended = null !== s && s === e1 ? t1 : s;
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                start(t1 = 0, e1 = 0, s) {
                    if (this._nativeAudioBufferSourceNode.start(t1, e1, s), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === s ? [
                        t1,
                        e1
                    ] : [
                        t1,
                        e1,
                        s
                    ]), "closed" !== this.context.state) {
                        Tt(this);
                        const t1 = ()=>{
                            this._nativeAudioBufferSourceNode.removeEventListener("ended", t1), It(this) && kt(this);
                        };
                        this._nativeAudioBufferSourceNode.addEventListener("ended", t1);
                    }
                }
                stop(t1 = 0) {
                    this._nativeAudioBufferSourceNode.stop(t1), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = t1);
                }
            }), ul = (Uc = As, Vc = Mt, Nc = be, Wc = je, Bc = He, Pc = (t1, e1, s)=>{
                const n = t1.destination;
                if (n.channelCount !== e1) try {
                    n.channelCount = e1;
                } catch  {}
                s && "explicit" !== n.channelCountMode && (n.channelCountMode = "explicit"), 0 === n.maxChannelCount && Object.defineProperty(n, "maxChannelCount", {
                    value: e1
                });
                const i = Wc(t1, {
                    channelCount: e1,
                    channelCountMode: n.channelCountMode,
                    channelInterpretation: n.channelInterpretation,
                    gain: 1
                });
                return Bc(i, "channelCount", (t1)=>()=>t1.call(i), (t1)=>(e1)=>{
                        t1.call(i, e1);
                        try {
                            n.channelCount = e1;
                        } catch (t1) {
                            if (e1 > n.maxChannelCount) throw t1;
                        }
                    }), Bc(i, "channelCountMode", (t1)=>()=>t1.call(i), (e1)=>(t1)=>{
                        e1.call(i, t1), n.channelCountMode = t1;
                    }), Bc(i, "channelInterpretation", (t1)=>()=>t1.call(i), (e1)=>(t1)=>{
                        e1.call(i, t1), n.channelInterpretation = t1;
                    }), Object.defineProperty(i, "maxChannelCount", {
                    get: ()=>n.maxChannelCount
                }), i.connect(n), i;
            }, class extends Uc {
                constructor(t1, e1){
                    var s = jc(t1), n = Lc(s), e1 = Pc(s, e1, n);
                    super(t1, !1, e1, n ? ((i)=>{
                        let t1 = null;
                        return {
                            render: (e1, s, n)=>(null === t1 && (t1 = (async ()=>{
                                    var t1 = s.destination;
                                    return await i(e1, s, t1, n), t1;
                                })()), t1)
                        };
                    })(zc) : null), this._isNodeOfNativeOfflineAudioContext = n, this._nativeAudioDestinationNode = e1;
                }
                get channelCount() {
                    return this._nativeAudioDestinationNode.channelCount;
                }
                set channelCount(t1) {
                    if (this._isNodeOfNativeOfflineAudioContext) throw Nc();
                    if (t1 > this._nativeAudioDestinationNode.maxChannelCount) throw Vc();
                    this._nativeAudioDestinationNode.channelCount = t1;
                }
                get channelCountMode() {
                    return this._nativeAudioDestinationNode.channelCountMode;
                }
                set channelCountMode(t1) {
                    if (this._isNodeOfNativeOfflineAudioContext) throw Nc();
                    this._nativeAudioDestinationNode.channelCountMode = t1;
                }
                get maxChannelCount() {
                    return this._nativeAudioDestinationNode.maxChannelCount;
                }
            }), pl = (Ec = rl, qc = Jt, Fc = al, Ic = zc = _s, ()=>{
                const r = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = r.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = qc(t1);
                            var i = Dt(n, e1);
                            if (!i) {
                                const Ec = {
                                    Q: n.Q.value,
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    detune: n.detune.value,
                                    frequency: n.frequency.value,
                                    gain: n.gain.value,
                                    type: n.type
                                };
                                n = Rc(e1, Ec);
                            }
                            return r.set(e1, n), i ? (await Ec(e1, t1.Q, n.Q, s), await Ec(e1, t1.detune, n.detune, s), await Ec(e1, t1.frequency, n.frequency, s), await Ec(e1, t1.gain, n.gain, s)) : (await Fc(e1, t1.Q, n.Q, s), await Fc(e1, t1.detune, n.detune, s), await Fc(e1, t1.frequency, n.frequency, s), await Fc(e1, t1.gain, n.gain, s)), await Ic(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), dl = (Mc = cs, (t1, e1)=>Mc.set(t1, e1)), fl = (Uc = As, Tc = Qc = cl, Sc = pl, kc = Te, Cc = Rc = Ie, Ac = jc = Yc = gs, Dc = Lc = $c = ys, Oc = dl, class extends Uc {
                constructor(t1, e1){
                    var s = Ac(t1), e1 = {
                        ...pe,
                        ...e1
                    }, e1 = Cc(s, e1), s = Dc(s);
                    super(t1, !1, e1, s ? Sc() : null), this._Q = Tc(this, s, e1.Q, Ft, qt), this._detune = Tc(this, s, e1.detune, 1200 * Math.log2(Ft), -1200 * Math.log2(Ft)), this._frequency = Tc(this, s, e1.frequency, t1.sampleRate / 2, 0), this._gain = Tc(this, s, e1.gain, 40 * Math.log10(Ft), qt), this._nativeBiquadFilterNode = e1, Oc(this, 1);
                }
                get detune() {
                    return this._detune;
                }
                get frequency() {
                    return this._frequency;
                }
                get gain() {
                    return this._gain;
                }
                get Q() {
                    return this._Q;
                }
                get type() {
                    return this._nativeBiquadFilterNode.type;
                }
                set type(t1) {
                    this._nativeBiquadFilterNode.type = t1;
                }
                getFrequencyResponse(t1, e1, s) {
                    try {
                        this._nativeBiquadFilterNode.getFrequencyResponse(t1, e1, s);
                    } catch (t1) {
                        if (11 === t1.code) throw kc();
                        throw t1;
                    }
                    if (t1.length !== e1.length || e1.length !== s.length) throw kc();
                }
            }), _l = (wc = Bt, bc = Ss, (r, i, o)=>{
                const a = new Set;
                var h, c;
                return r.connect = (c = r.connect, (e1, s = 0, n = 0)=>{
                    var t1 = 0 === a.size;
                    if (bc(e1)) return c.call(r, e1, s, n), wc(a, [
                        e1,
                        s,
                        n
                    ], (t1)=>t1[0] === e1 && t1[1] === s && t1[2] === n, !0), t1 && i(), e1;
                    c.call(r, e1, s), wc(a, [
                        e1,
                        s
                    ], (t1)=>t1[0] === e1 && t1[1] === s, !0), t1 && i();
                }), r.disconnect = (h = r.disconnect, (t1, e1, s)=>{
                    var n = 0 < a.size;
                    if (void 0 === t1) h.apply(r), a.clear();
                    else if ("number" == typeof t1) {
                        h.call(r, t1);
                        for (const h of a)h[1] === t1 && a.delete(h);
                    } else {
                        bc(t1) ? h.call(r, t1, e1, s) : h.call(r, t1, e1);
                        for (const h of a)h[0] !== t1 || void 0 !== e1 && h[1] !== e1 || void 0 !== s && h[2] !== s || a.delete(h);
                    }
                    var i = 0 === a.size;
                    n && i && o();
                }), r;
            }), ml = (yc = be, (t1, s)=>{
                s.channelCount = 1, s.channelCountMode = "explicit", Object.defineProperty(s, "channelCount", {
                    get: ()=>1,
                    set: ()=>{
                        throw yc();
                    }
                }), Object.defineProperty(s, "channelCountMode", {
                    get: ()=>"explicit",
                    set: ()=>{
                        throw yc();
                    }
                });
                const n = t1.createBufferSource();
                xc(s, ()=>{
                    var e1 = s.numberOfInputs;
                    for(let t1 = 0; t1 < e1; t1 += 1)n.connect(s, 0, t1);
                }, ()=>n.disconnect(s));
            }), gl = (gc = bs, vc = ml, (t1, e1)=>{
                var s = t1.createChannelMerger(e1.numberOfInputs);
                return null !== gc && "webkitAudioContext" === gc.name && vc(t1, s), Oe(s, e1), s;
            }), vl = (_c = Jt, ()=>{
                const i = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = i.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = _c(t1);
                            if (!Dt(n, e1)) {
                                const _c = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    numberOfInputs: n.numberOfInputs
                                };
                                n = fc(e1, _c);
                            }
                            return i.set(e1, n), await mc(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), yl = (Uc = As, lc = vl, class extends Uc {
                constructor(t1, e1){
                    var s = pc(t1), e1 = {
                        ...de,
                        ...e1
                    };
                    super(t1, !1, uc(s, e1), dc(s) ? lc() : null);
                }
            }), xl = (hc = Jt, ()=>{
                const i = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = i.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = hc(t1);
                            if (!Dt(n, e1)) {
                                const hc = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    numberOfOutputs: n.numberOfOutputs
                                };
                                n = ac(e1, hc);
                            }
                            return i.set(e1, n), await cc(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), wl = (Uc = As, nc = xl, ic = ac = Ve, class extends Uc {
                constructor(t1, e1){
                    var s = rc(t1), e1 = {
                        ...e1 = {
                            ...fe,
                            ...e1
                        },
                        channelCount: e1.numberOfOutputs
                    };
                    super(t1, !1, ic(s, e1), oc(s) ? nc() : null);
                }
            }), bl = (sc = xc = _l, (t1, { offset: e1, ...s })=>{
                const n = t1.createBuffer(1, 2, 44100), i = tc(t1, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: "max",
                    channelInterpretation: "speakers",
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                }), r = ec(t1, {
                    ...s,
                    gain: e1
                }), o = n.getChannelData(0);
                o[0] = 1, o[1] = 1, i.buffer = n, i.loop = !0;
                e1 = {
                    get bufferSize () {},
                    get channelCount () {
                        return r.channelCount;
                    },
                    set channelCount (t){
                        r.channelCount = t;
                    },
                    get channelCountMode () {
                        return r.channelCountMode;
                    },
                    set channelCountMode (t){
                        r.channelCountMode = t;
                    },
                    get channelInterpretation () {
                        return r.channelInterpretation;
                    },
                    set channelInterpretation (t){
                        r.channelInterpretation = t;
                    },
                    get context () {
                        return r.context;
                    },
                    get inputs () {
                        return [];
                    },
                    get numberOfInputs () {
                        return i.numberOfInputs;
                    },
                    get numberOfOutputs () {
                        return r.numberOfOutputs;
                    },
                    get offset () {
                        return r.gain;
                    },
                    get onended () {
                        return i.onended;
                    },
                    set onended (t){
                        i.onended = t;
                    },
                    addEventListener: (...t1)=>i.addEventListener(t1[0], t1[1], t1[2]),
                    dispatchEvent: (...t1)=>i.dispatchEvent(t1[0]),
                    removeEventListener: (...t1)=>i.removeEventListener(t1[0], t1[1], t1[2]),
                    start (t1 = 0) {
                        i.start.call(i, t1);
                    },
                    stop (t1 = 0) {
                        i.stop.call(i, t1);
                    }
                };
                return Kh(t1, i), sc(Ne(e1, r), ()=>i.connect(r), ()=>i.disconnect(r));
            }), Tl = (Xh = Kh = nl, Yh = us, $h = bl, Hh = Ke, Jh = es, (t1, e1)=>{
                if (void 0 === t1.createConstantSource) return $h(t1, e1);
                var s = t1.createConstantSource();
                return Oe(s, e1), Ee(s, e1, "offset"), Yh(Hh, ()=>Hh(t1)) || Re(s), Yh(Jh, ()=>Jh(t1)) || qe(s), Xh(t1, s), s;
            }), Sl = (Gh = Jt, ()=>{
                const r = new WeakMap;
                let o = null, a = null;
                return {
                    set start (t){
                        o = t;
                    },
                    set stop (t){
                        a = t;
                    },
                    render (t1, e1, s) {
                        var n = r.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = Gh(t1);
                            var i = Dt(n, e1);
                            if (!i) {
                                const Bh = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    offset: n.offset.value
                                };
                                n = Uh(e1, Bh), null !== o && n.start(o), null !== a && n.stop(a);
                            }
                            return r.set(e1, n), i ? await Bh(e1, t1.offset, n.offset, s) : await Qh(e1, t1.offset, n.offset, s), await Zh(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), kl = (Uc = As, Ph = Sl, Wh = rs, class extends Uc {
                constructor(t1, e1){
                    var s = Lh(t1), n = {
                        ..._e,
                        ...e1
                    }, e1 = jh(s, n), n = zh(s), s = n ? Ph() : null;
                    super(t1, !1, e1, s), this._constantSourceNodeRenderer = s, this._nativeConstantSourceNode = e1, this._offset = Nh(this, n, e1.offset, Ft, qt), this._onended = null;
                }
                get offset() {
                    return this._offset;
                }
                get onended() {
                    return this._onended;
                }
                set onended(t1) {
                    var e1 = "function" == typeof t1 ? Wh(this, t1) : null;
                    this._nativeConstantSourceNode.onended = e1;
                    var s = this._nativeConstantSourceNode.onended;
                    this._onended = null !== s && s === e1 ? t1 : s;
                }
                start(t1 = 0) {
                    if (this._nativeConstantSourceNode.start(t1), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = t1), "closed" !== this.context.state) {
                        Tt(this);
                        const t1 = ()=>{
                            this._nativeConstantSourceNode.removeEventListener("ended", t1), It(this) && kt(this);
                        };
                        this._nativeConstantSourceNode.addEventListener("ended", t1);
                    }
                }
                stop(t1 = 0) {
                    this._nativeConstantSourceNode.stop(t1), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = t1);
                }
            }), Cl = (t1, e1)=>{
                const s = t1.createConvolver();
                if (Oe(s, e1), e1.disableNormalization === s.normalize && (s.normalize = !e1.disableNormalization), De(s, e1, "buffer"), 2 < e1.channelCount) throw Ih();
                if (Vh(s, "channelCount", (t1)=>()=>t1.call(s), (e1)=>(t1)=>{
                        if (2 < t1) throw Ih();
                        return e1.call(s, t1);
                    }), "max" === e1.channelCountMode) throw Ih();
                return Vh(s, "channelCountMode", (t1)=>()=>t1.call(s), (e1)=>(t1)=>{
                        if ("max" === t1) throw Ih();
                        return e1.call(s, t1);
                    }), s;
            }, Al = (qh = Jt, ()=>{
                const i = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = i.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = qh(t1);
                            if (!Dt(n, e1)) {
                                const qh = {
                                    buffer: n.buffer,
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    disableNormalization: !n.normalize
                                };
                                n = Rh(e1, qh);
                            }
                            return i.set(e1, n), Qt(n) ? await Fh(t1, e1, n.inputs[0], s) : await Fh(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), Dl = (Uc = As, Ah = Al, Dh = Rh = Cl, class extends Uc {
                constructor(t1, e1){
                    var s = Oh(t1), n = {
                        ...me,
                        ...e1
                    }, e1 = Dh(s, n);
                    super(t1, !1, e1, Mh(s) ? Ah() : null), this._isBufferNullified = !1, this._nativeConvolverNode = e1, null !== n.buffer && Eh(this, n.buffer.duration);
                }
                get buffer() {
                    return this._isBufferNullified ? null : this._nativeConvolverNode.buffer;
                }
                set buffer(t1) {
                    if (null === (this._nativeConvolverNode.buffer = t1) && null !== this._nativeConvolverNode.buffer) {
                        const t1 = this._nativeConvolverNode.context;
                        this._nativeConvolverNode.buffer = t1.createBuffer(1, 1, 44100), this._isBufferNullified = !0, Eh(this, 0);
                    } else this._isBufferNullified = !1, Eh(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration);
                }
                get normalize() {
                    return this._nativeConvolverNode.normalize;
                }
                set normalize(t1) {
                    this._nativeConvolverNode.normalize = t1;
                }
            }), Ol = (Sh = Jt, (r)=>{
                const o = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = o.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = Sh(t1);
                            var i = Dt(n, e1);
                            if (!i) {
                                const bh = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    delayTime: n.delayTime.value,
                                    maxDelayTime: r
                                };
                                n = Th(e1, bh);
                            }
                            return o.set(e1, n), i ? await bh(e1, t1.delayTime, n.delayTime, s) : await kh(e1, t1.delayTime, n.delayTime, s), await Ch(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), Ml = (Uc = As, gh = Ol, vh = Th = Pe, class extends Uc {
                constructor(t1, e1){
                    var s = yh(t1), n = {
                        ...ve,
                        ...e1
                    }, e1 = vh(s, n), s = xh(s);
                    super(t1, !1, e1, s ? gh(n.maxDelayTime) : null), this._delayTime = mh(this, s, e1.delayTime), wh(this, n.maxDelayTime);
                }
                get delayTime() {
                    return this._delayTime;
                }
            }), El = (t1, e1)=>{
                t1 = t1.createDynamicsCompressor();
                if (Oe(t1, e1), 2 < e1.channelCount) throw _h();
                if ("max" === e1.channelCountMode) throw _h();
                return Ee(t1, e1, "attack"), Ee(t1, e1, "knee"), Ee(t1, e1, "ratio"), Ee(t1, e1, "release"), Ee(t1, e1, "threshold"), t1;
            }, Rl = (ph = Jt, ()=>{
                const r = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = r.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = ph(t1);
                            var i = Dt(n, e1);
                            if (!i) {
                                const lh = {
                                    attack: n.attack.value,
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    knee: n.knee.value,
                                    ratio: n.ratio.value,
                                    release: n.release.value,
                                    threshold: n.threshold.value
                                };
                                n = uh(e1, lh);
                            }
                            return r.set(e1, n), i ? (await lh(e1, t1.attack, n.attack, s), await lh(e1, t1.knee, n.knee, s), await lh(e1, t1.ratio, n.ratio, s), await lh(e1, t1.release, n.release, s), await lh(e1, t1.threshold, n.threshold, s)) : (await dh(e1, t1.attack, n.attack, s), await dh(e1, t1.knee, n.knee, s), await dh(e1, t1.ratio, n.ratio, s), await dh(e1, t1.release, n.release, s), await dh(e1, t1.threshold, n.threshold, s)), await fh(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), ql = (Uc = As, ih = Rl, rh = uh = El, class extends Uc {
                constructor(t1, e1){
                    var s = ah(t1), e1 = {
                        ...xe,
                        ...e1
                    }, e1 = rh(s, e1), s = hh(s);
                    super(t1, !1, e1, s ? ih() : null), this._attack = nh(this, s, e1.attack), this._knee = nh(this, s, e1.knee), this._nativeDynamicsCompressorNode = e1, this._ratio = nh(this, s, e1.ratio), this._release = nh(this, s, e1.release), this._threshold = nh(this, s, e1.threshold), ch(this, .006);
                }
                get attack() {
                    return this._attack;
                }
                get channelCount() {
                    return this._nativeDynamicsCompressorNode.channelCount;
                }
                set channelCount(t1) {
                    var e1 = this._nativeDynamicsCompressorNode.channelCount;
                    if (2 < (this._nativeDynamicsCompressorNode.channelCount = t1)) throw this._nativeDynamicsCompressorNode.channelCount = e1, oh();
                }
                get channelCountMode() {
                    return this._nativeDynamicsCompressorNode.channelCountMode;
                }
                set channelCountMode(t1) {
                    var e1 = this._nativeDynamicsCompressorNode.channelCountMode;
                    if ("max" === (this._nativeDynamicsCompressorNode.channelCountMode = t1)) throw this._nativeDynamicsCompressorNode.channelCountMode = e1, oh();
                }
                get knee() {
                    return this._knee;
                }
                get ratio() {
                    return this._ratio;
                }
                get reduction() {
                    return "number" == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction;
                }
                get release() {
                    return this._release;
                }
                get threshold() {
                    return this._threshold;
                }
            }), Fl = (Ja = lh = bh = Bh = rl, th = Jt, eh = dh = kh = Qh = al, ()=>{
                const r = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = r.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = th(t1);
                            var i = Dt(n, e1);
                            if (!i) {
                                const Ja = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    gain: n.gain.value
                                };
                                n = Ka(e1, Ja);
                            }
                            return r.set(e1, n), i ? await Ja(e1, t1.gain, n.gain, s) : await eh(e1, t1.gain, n.gain, s), await sh(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), Il = (Uc = As, Xa = Fl, class extends Uc {
                constructor(t1, e1){
                    var s = $a(t1), e1 = {
                        ...we,
                        ...e1
                    }, e1 = Ya(s, e1), s = Ha(s);
                    super(t1, !1, e1, s ? Xa() : null), this._gain = Za(this, s, e1.gain, Ft, qt);
                }
                get gain() {
                    return this._gain;
                }
            }), Vl = (Ba = Te, Ua = be, (t1, e1, { channelCount: s, channelCountMode: n, channelInterpretation: i, feedback: r, feedforward: o })=>{
                const a = Fe(e1, t1.sampleRate), l = r instanceof Float64Array ? r : new Float64Array(r), u = o instanceof Float64Array ? o : new Float64Array(o), h = l.length, c = u.length, p = Math.min(h, c);
                if (0 === h || 20 < h) throw Qa();
                if (0 === l[0]) throw Ua();
                if (0 === c || 20 < c) throw Qa();
                if (0 === u[0]) throw Ua();
                if (1 !== l[0]) {
                    for(let t1 = 0; t1 < c; t1 += 1)u[t1] /= l[0];
                    for(let t1 = 1; t1 < h; t1 += 1)l[t1] /= l[0];
                }
                const d = Ga(t1, a, s, s);
                d.channelCount = s, d.channelCountMode = n, d.channelInterpretation = i;
                const f = [], _ = [], m = [];
                for(let t1 = 0; t1 < s; t1 += 1){
                    f.push(0);
                    const Ba = new Float32Array(32), Ua = new Float32Array(32);
                    Ba.fill(0), Ua.fill(0), _.push(Ba), m.push(Ua);
                }
                d.onaudioprocess = (t1)=>{
                    const e1 = t1.inputBuffer, s = t1.outputBuffer, n = e1.numberOfChannels;
                    for(let t1 = 0; t1 < n; t1 += 1){
                        const n = e1.getChannelData(t1), i = s.getChannelData(t1);
                        f[t1] = ke(l, h, u, c, p, _[t1], m[t1], f[t1], 32, n, i);
                    }
                };
                const g = t1.sampleRate / 2;
                return Ne({
                    get bufferSize () {
                        return a;
                    },
                    get channelCount () {
                        return d.channelCount;
                    },
                    set channelCount (t){
                        d.channelCount = t;
                    },
                    get channelCountMode () {
                        return d.channelCountMode;
                    },
                    set channelCountMode (t){
                        d.channelCountMode = t;
                    },
                    get channelInterpretation () {
                        return d.channelInterpretation;
                    },
                    set channelInterpretation (t){
                        d.channelInterpretation = t;
                    },
                    get context () {
                        return d.context;
                    },
                    get inputs () {
                        return [
                            d
                        ];
                    },
                    get numberOfInputs () {
                        return d.numberOfInputs;
                    },
                    get numberOfOutputs () {
                        return d.numberOfOutputs;
                    },
                    addEventListener: (...t1)=>d.addEventListener(t1[0], t1[1], t1[2]),
                    dispatchEvent: (...t1)=>d.dispatchEvent(t1[0]),
                    getFrequencyResponse (e1, s, n) {
                        if (e1.length !== s.length || s.length !== n.length) throw Ba();
                        const i = e1.length;
                        for(let t1 = 0; t1 < i; t1 += 1){
                            const i = -Math.PI * (e1[t1] / g), h = [
                                Math.cos(i),
                                Math.sin(i)
                            ], c = (r = Le(u, h), o = Le(l, h), a = void 0, a = o[0] * o[0] + o[1] * o[1], [
                                (r[0] * o[0] + r[1] * o[1]) / a,
                                (r[1] * o[0] - r[0] * o[1]) / a
                            ]);
                            s[t1] = Math.sqrt(c[0] * c[0] + c[1] * c[1]), n[t1] = Math.atan2(c[1], c[0]);
                        }
                        var r, o, a;
                    },
                    removeEventListener: (...t1)=>d.removeEventListener(t1[0], t1[1], t1[2])
                }, d);
            }), Nl = (Na = us, za = Pa = Ya = Ka = ec = je, Wa = vs, La = ()=>{
                if (null === Wa) return Promise.resolve(!1);
                const e1 = new Wa(1, 1, 44100), s = za(e1, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                });
                return new Promise((t1)=>{
                    e1.oncomplete = ()=>{
                        s.disconnect(), t1(0 !== e1.currentTime);
                    }, e1.startRendering();
                });
            }, (n)=>Na(Ae, ()=>Ae(n)) ? Promise.resolve(Na(La, La)).then((t1)=>{
                    if (!t1) {
                        const t1 = ja(n, 512, 0, 1);
                        n.oncomplete = ()=>{
                            t1.onaudioprocess = null, t1.disconnect();
                        }, t1.onaudioprocess = ()=>n.currentTime, t1.connect(n.destination);
                    }
                    return n.startRendering();
                }) : new Promise((e1)=>{
                    const s = Pa(n, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: 0
                    });
                    n.oncomplete = (t1)=>{
                        s.disconnect(), e1(t1.renderedBuffer);
                    }, s.connect(n.destination), n.startRendering();
                })), Pl = (Ra = tc = ol, qa = Jt, Fa = vs, Ia = sh = fh = Ch = Fh = Zh = cc = mc = _s, Va = Nl, (o, a)=>{
                const h = new WeakMap;
                let c = null;
                return {
                    render (t1, e1, s) {
                        var n = h.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = null, i = qa(t1);
                            var r = Dt(i, e1);
                            if (void 0 === e1.createIIRFilter ? n = Ra(e1, {
                                buffer: null,
                                channelCount: 2,
                                channelCountMode: "max",
                                channelInterpretation: "speakers",
                                loop: !1,
                                loopEnd: 0,
                                loopStart: 0,
                                playbackRate: 1
                            }) : r || (i = e1.createIIRFilter(a, o)), h.set(e1, null === n ? i : n), null === n) return await Ia(t1, e1, i, s), i;
                            {
                                if (null === c) {
                                    if (null === Fa) throw new Error("Missing the native OfflineAudioContext constructor.");
                                    const Ra = new Fa(t1.context.destination.channelCount, t1.context.length, e1.sampleRate);
                                    c = (async ()=>(await Ia(t1, Ra, Ra.destination, s), ((e1, t1, s, n)=>{
                                            const i = s instanceof Float64Array ? s : new Float64Array(s), r = n instanceof Float64Array ? n : new Float64Array(n), o = i.length, a = r.length, h = Math.min(o, a);
                                            if (1 !== i[0]) {
                                                for(let t1 = 0; t1 < o; t1 += 1)r[t1] /= i[0];
                                                for(let t1 = 1; t1 < a; t1 += 1)i[t1] /= i[0];
                                            }
                                            const c = new Float32Array(32), l = new Float32Array(32), u = t1.createBuffer(e1.numberOfChannels, e1.length, e1.sampleRate), p = e1.numberOfChannels;
                                            for(let t1 = 0; t1 < p; t1 += 1){
                                                const s = e1.getChannelData(t1), n = u.getChannelData(t1);
                                                c.fill(0), l.fill(0), ke(i, o, r, a, h, c, l, 0, 32, s, n);
                                            }
                                            return u;
                                        })(await Va(Ra), e1, o, a)))();
                                }
                                const Ra = await c;
                                return n.buffer = Ra, n.start(0), n;
                            }
                        })(t1, e1, s);
                    }
                };
            }), jl = (Ea = Vl, (t1, e1, s)=>{
                if (void 0 === t1.createIIRFilter) return Ea(t1, e1, s);
                t1 = t1.createIIRFilter(s.feedforward, s.feedback);
                return Oe(t1, s), t1;
            }), Ll = (Uc = As, Ca = jl, Aa = Pl, Da = $a = ah = yh = Oh = Lh = rc = pc = gs, Ma = ch = wh = Eh = dl, class extends Uc {
                constructor(t1, e1){
                    var n, i, s = Da(t1), r = Oa(s), e1 = {
                        ...Se,
                        ...e1
                    }, s = Ca(s, r ? null : t1.baseLatency, e1);
                    super(t1, !1, s, r ? Aa(e1.feedback, e1.feedforward) : null), (n = s).getFrequencyResponse = (i = n.getFrequencyResponse, (t1, e1, s)=>{
                        if (t1.length !== e1.length || e1.length !== s.length) throw Te();
                        return i.call(n, t1, e1, s);
                    }), this._nativeIIRFilterNode = s, Ma(this, 1);
                }
                getFrequencyResponse(t1, e1, s) {
                    return this._nativeIIRFilterNode.getFrequencyResponse(t1, e1, s);
                }
            }), zl = (va = Za = nh = mh = Nh = cl, ya = uc = fc = gl, xa = jh = Uh = Tl, wa = ja = Ga = ze, ba = Qa = oh = _h = Ih = We, Ta = Ye, Sa = Oa = Ha = hh = xh = Mh = zh = oc = dc = ys, ka = Vh = He, (_, m)=>{
                const a = m.listener, { forwardX: t1, forwardY: e1, forwardZ: s, positionX: n, positionY: i, positionZ: r, upX: o, upY: h, upZ: c } = void 0 === a.forwardX ? (()=>{
                    const n = new Float32Array(1), p = ya(m, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: 9
                    }), d = Sa(m);
                    let e1 = !1, i = [
                        0,
                        0,
                        -1,
                        0,
                        1,
                        0
                    ], r = [
                        0,
                        0,
                        0
                    ];
                    const f = ()=>{
                        if (!e1) {
                            e1 = !0;
                            const t1 = wa(m, 256, 9, 0);
                            t1.onaudioprocess = ({ inputBuffer: t1 })=>{
                                const e1 = [
                                    Ta(t1, n, 0),
                                    Ta(t1, n, 1),
                                    Ta(t1, n, 2),
                                    Ta(t1, n, 3),
                                    Ta(t1, n, 4),
                                    Ta(t1, n, 5)
                                ];
                                e1.some((t1, e1)=>t1 !== i[e1]) && (a.setOrientation(...e1), i = e1);
                                const s = [
                                    Ta(t1, n, 6),
                                    Ta(t1, n, 7),
                                    Ta(t1, n, 8)
                                ];
                                s.some((t1, e1)=>t1 !== r[e1]) && (a.setPosition(...s), r = s);
                            }, p.connect(t1);
                        }
                    }, t1 = (e1)=>(t1)=>{
                            t1 !== i[e1] && (i[e1] = t1, a.setOrientation(...i));
                        }, s = (e1)=>(t1)=>{
                            t1 !== r[e1] && (r[e1] = t1, a.setPosition(...r));
                        }, o = (t1, e1, s)=>{
                        const n = xa(m, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: e1
                        });
                        n.connect(p, 0, t1), n.start(), Object.defineProperty(n.offset, "defaultValue", {
                            get: ()=>e1
                        });
                        const i = va({
                            context: _
                        }, d, n.offset, Ft, qt);
                        var r, o, a, h, c, l, u;
                        return ka(i, "value", (t1)=>()=>t1.call(i), (e1)=>(t1)=>{
                                try {
                                    e1.call(i, t1);
                                } catch (t1) {
                                    if (9 !== t1.code) throw t1;
                                }
                                f(), d && s(t1);
                            }), i.cancelAndHoldAtTime = (r = i.cancelAndHoldAtTime, d ? ()=>{
                            throw ba();
                        } : (...t1)=>{
                            t1 = r.apply(i, t1);
                            return f(), t1;
                        }), i.cancelScheduledValues = (o = i.cancelScheduledValues, d ? ()=>{
                            throw ba();
                        } : (...t1)=>{
                            t1 = o.apply(i, t1);
                            return f(), t1;
                        }), i.exponentialRampToValueAtTime = (a = i.exponentialRampToValueAtTime, d ? ()=>{
                            throw ba();
                        } : (...t1)=>{
                            t1 = a.apply(i, t1);
                            return f(), t1;
                        }), i.linearRampToValueAtTime = (h = i.linearRampToValueAtTime, d ? ()=>{
                            throw ba();
                        } : (...t1)=>{
                            t1 = h.apply(i, t1);
                            return f(), t1;
                        }), i.setTargetAtTime = (c = i.setTargetAtTime, d ? ()=>{
                            throw ba();
                        } : (...t1)=>{
                            t1 = c.apply(i, t1);
                            return f(), t1;
                        }), i.setValueAtTime = (l = i.setValueAtTime, d ? ()=>{
                            throw ba();
                        } : (...t1)=>{
                            t1 = l.apply(i, t1);
                            return f(), t1;
                        }), i.setValueCurveAtTime = (u = i.setValueCurveAtTime, d ? ()=>{
                            throw ba();
                        } : (...t1)=>{
                            t1 = u.apply(i, t1);
                            return f(), t1;
                        }), i;
                    };
                    return {
                        forwardX: o(0, 0, t1(0)),
                        forwardY: o(1, 0, t1(1)),
                        forwardZ: o(2, -1, t1(2)),
                        positionX: o(6, 0, s(0)),
                        positionY: o(7, 0, s(1)),
                        positionZ: o(8, 0, s(2)),
                        upX: o(3, 0, t1(3)),
                        upY: o(4, 1, t1(4)),
                        upZ: o(5, 0, t1(5))
                    };
                })() : a;
                return {
                    get forwardX () {
                        return t1;
                    },
                    get forwardY () {
                        return e1;
                    },
                    get forwardZ () {
                        return s;
                    },
                    get positionX () {
                        return n;
                    },
                    get positionY () {
                        return i;
                    },
                    get positionZ () {
                        return r;
                    },
                    get upX () {
                        return o;
                    },
                    get upY () {
                        return h;
                    },
                    get upZ () {
                        return c;
                    }
                };
            }), Wl = new WeakMap, Bl = (da = ul, fa = zl, ma = Wl, class extends ws {
                constructor(t1, e1){
                    super(t1), this._nativeContext = t1, ct.set(this, t1), _a(t1) && ma.set(t1, new Set), this._destination = new da(this, e1), this._listener = fa(this, t1), this._onstatechange = null;
                }
                get currentTime() {
                    return this._nativeContext.currentTime;
                }
                get destination() {
                    return this._destination;
                }
                get listener() {
                    return this._listener;
                }
                get onstatechange() {
                    return this._onstatechange;
                }
                set onstatechange(t1) {
                    var e1 = "function" == typeof t1 ? ga(this, t1) : null;
                    this._nativeContext.onstatechange = e1;
                    var s = this._nativeContext.onstatechange;
                    this._onstatechange = null !== s && s === e1 ? t1 : s;
                }
                get sampleRate() {
                    return this._nativeContext.sampleRate;
                }
                get state() {
                    return this._nativeContext.state;
                }
            }), Ul = (aa = nl, ha = us, ca = Ke, la = ts, ua = es, pa = is, (t1, e1)=>{
                const s = t1.createOscillator();
                return Oe(s, e1), Ee(s, e1, "detune"), Ee(s, e1, "frequency"), void 0 !== e1.periodicWave ? s.setPeriodicWave(e1.periodicWave) : De(s, e1, "type"), ha(ca, ()=>ca(t1)) || Re(s), ha(la, ()=>la(t1)) || pa(s, t1), ha(ua, ()=>ua(t1)) || qe(s), aa(t1, s), s;
            }), Gl = (ia = Jt, ()=>{
                const r = new WeakMap;
                let o = null, a = null, h = null;
                return {
                    set periodicWave (t){
                        o = t;
                    },
                    set start (t){
                        a = t;
                    },
                    set stop (t){
                        h = t;
                    },
                    render (t1, e1, s) {
                        var n = r.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = ia(t1);
                            var i = Dt(n, e1);
                            if (!i) {
                                const sa = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    detune: n.detune.value,
                                    frequency: n.frequency.value,
                                    periodicWave: null === o ? void 0 : o,
                                    type: n.type
                                };
                                n = na(e1, sa), null !== a && n.start(a), null !== h && n.stop(h);
                            }
                            return r.set(e1, n), i ? (await sa(e1, t1.detune, n.detune, s), await sa(e1, t1.frequency, n.frequency, s)) : (await ra(e1, t1.detune, n.detune, s), await ra(e1, t1.frequency, n.frequency, s)), await oa(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), Ql = (Uc = As, Ho = na = Ul, Jo = Gl, ea = ga = rs, class extends Uc {
                constructor(t1, e1){
                    var s = Ko(t1), n = {
                        ...Ue,
                        ...e1
                    }, i = Ho(s, n), r = ta(s), e1 = r ? Jo() : null, s = t1.sampleRate / 2;
                    super(t1, !1, i, e1), this._detune = $o(this, r, i.detune, 153600, -153600), this._frequency = $o(this, r, i.frequency, s, -s), this._nativeOscillatorNode = i, this._onended = null, this._oscillatorNodeRenderer = e1, null !== this._oscillatorNodeRenderer && void 0 !== n.periodicWave && (this._oscillatorNodeRenderer.periodicWave = n.periodicWave);
                }
                get detune() {
                    return this._detune;
                }
                get frequency() {
                    return this._frequency;
                }
                get onended() {
                    return this._onended;
                }
                set onended(t1) {
                    var e1 = "function" == typeof t1 ? ea(this, t1) : null;
                    this._nativeOscillatorNode.onended = e1;
                    var s = this._nativeOscillatorNode.onended;
                    this._onended = null !== s && s === e1 ? t1 : s;
                }
                get type() {
                    return this._nativeOscillatorNode.type;
                }
                set type(t1) {
                    this._nativeOscillatorNode.type = t1, null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null);
                }
                setPeriodicWave(t1) {
                    this._nativeOscillatorNode.setPeriodicWave(t1), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = t1);
                }
                start(t1 = 0) {
                    if (this._nativeOscillatorNode.start(t1), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = t1), "closed" !== this.context.state) {
                        Tt(this);
                        const t1 = ()=>{
                            this._nativeOscillatorNode.removeEventListener("ended", t1), It(this) && kt(this);
                        };
                        this._nativeOscillatorNode.addEventListener("ended", t1);
                    }
                }
                stop(t1 = 0) {
                    this._nativeOscillatorNode.stop(t1), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = t1);
                }
            }), Zl = (Yo = ol, (t1, e1)=>{
                const s = Yo(t1, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: "max",
                    channelInterpretation: "speakers",
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                }), n = t1.createBuffer(1, 2, 44100);
                return s.buffer = n, s.loop = !0, s.connect(e1), s.start(), ()=>{
                    s.stop(), s.disconnect(e1);
                };
            }), Xl = (Go = be, (r, { curve: t1, oversample: e1, ...s })=>{
                const o = r.createWaveShaper(), a = r.createWaveShaper();
                Oe(o, s), Oe(a, s);
                const h = Qo(r, {
                    ...s,
                    gain: 1
                }), n = Qo(r, {
                    ...s,
                    gain: -1
                }), i = Qo(r, {
                    ...s,
                    gain: 1
                }), c = Qo(r, {
                    ...s,
                    gain: -1
                });
                let l = null, u = !1, p = null;
                const d = {
                    get bufferSize () {},
                    get channelCount () {
                        return o.channelCount;
                    },
                    set channelCount (t){
                        h.channelCount = t, n.channelCount = t, o.channelCount = t, i.channelCount = t, a.channelCount = t, c.channelCount = t;
                    },
                    get channelCountMode () {
                        return o.channelCountMode;
                    },
                    set channelCountMode (t){
                        h.channelCountMode = t, n.channelCountMode = t, o.channelCountMode = t, i.channelCountMode = t, a.channelCountMode = t, c.channelCountMode = t;
                    },
                    get channelInterpretation () {
                        return o.channelInterpretation;
                    },
                    set channelInterpretation (t){
                        h.channelInterpretation = t, n.channelInterpretation = t, o.channelInterpretation = t, i.channelInterpretation = t, a.channelInterpretation = t, c.channelInterpretation = t;
                    },
                    get context () {
                        return o.context;
                    },
                    get curve () {
                        return p;
                    },
                    set curve (e){
                        if (null !== e && e.length < 2) throw Go();
                        if (null === e) o.curve = e, a.curve = e;
                        else {
                            const Uo = e.length, Go = new Float32Array(Uo + 2 - Uo % 2), Zo = new Float32Array(Uo + 2 - Uo % 2);
                            Go[0] = e[0], Zo[0] = -e[Uo - 1];
                            const s = Math.ceil((Uo + 1) / 2), r = (Uo + 1) / 2 - 1;
                            for(let t1 = 1; t1 < s; t1 += 1){
                                const n = t1 / s * r, i = Math.floor(n), o = Math.ceil(n);
                                Go[t1] = i === o ? e[i] : (1 - (n - i)) * e[i] + (1 - (o - n)) * e[o], Zo[t1] = i === o ? -e[Uo - 1 - i] : -(1 - (n - i)) * e[Uo - 1 - i] - (1 - (o - n)) * e[Uo - 1 - o];
                            }
                            Go[s] = Uo % 2 == 1 ? e[s - 1] : (e[s - 2] + e[s - 1]) / 2, o.curve = Go, a.curve = Zo;
                        }
                        p = e, u && (Zo(p) && null === l ? l = Uo(r, h) : null !== l && (l(), l = null));
                    },
                    get inputs () {
                        return [
                            h
                        ];
                    },
                    get numberOfInputs () {
                        return o.numberOfInputs;
                    },
                    get numberOfOutputs () {
                        return o.numberOfOutputs;
                    },
                    get oversample () {
                        return o.oversample;
                    },
                    set oversample (t){
                        o.oversample = t, a.oversample = t;
                    },
                    addEventListener: (...t1)=>h.addEventListener(t1[0], t1[1], t1[2]),
                    dispatchEvent: (...t1)=>h.dispatchEvent(t1[0]),
                    removeEventListener: (...t1)=>h.removeEventListener(t1[0], t1[1], t1[2])
                };
                return null !== t1 && (d.curve = t1 instanceof Float32Array ? t1 : new Float32Array(t1)), e1 !== d.oversample && (d.oversample = e1), Xo(Ne(d, i), ()=>{
                    h.connect(o).connect(i), h.connect(n).connect(a).connect(c).connect(i), u = !0, Zo(p) && (l = Uo(r, h));
                }, ()=>{
                    h.disconnect(o), o.disconnect(i), h.disconnect(n), n.disconnect(a), a.disconnect(c), c.disconnect(i), u = !1, null !== l && (l(), l = null);
                });
            }), Yl = (No = Uo = Zl, Po = be, jo = Xl, Lo = Zo = $e, Wo = bs, Bo = He, (s, t1)=>{
                const n = s.createWaveShaper();
                if (null !== Wo && "webkitAudioContext" === Wo.name && void 0 === s.createGain().gain.automationRate) return jo(s, t1);
                Oe(n, t1);
                var e1 = null === t1.curve || t1.curve instanceof Float32Array ? t1.curve : new Float32Array(t1.curve);
                if (null !== e1 && e1.length < 2) throw Po();
                De(n, {
                    curve: e1
                }, "curve"), De(n, t1, "oversample");
                let i = null, r = !1;
                return Bo(n, "curve", (t1)=>()=>t1.call(n), (e1)=>(t1)=>(e1.call(n, t1), r && (Lo(t1) && null === i ? i = No(s, n) : Lo(t1) || null === i || (i(), i = null)), t1)), zo(n, ()=>{
                    r = !0, Lo(n.curve) && (i = No(s, n));
                }, ()=>{
                    r = !1, null !== i && (i(), i = null);
                });
            }), $l = (Ao = Zt, Do = be, Eo = ze, Ro = Yl, qo = We, Fo = Ht, Io = Ye, Vo = zo = Xo = _l, (t1, { coneInnerAngle: e1, coneOuterAngle: s, coneOuterGain: n, distanceModel: i, maxDistance: r, orientationX: o, orientationY: a, orientationZ: h, panningModel: c, positionX: l, positionY: u, positionZ: p, refDistance: d, rolloffFactor: f, ..._ })=>{
                const m = t1.createPanner();
                if (2 < _.channelCount) throw qo();
                if ("max" === _.channelCountMode) throw qo();
                Oe(m, _);
                const g = {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete"
                }, v = Oo(t1, {
                    ...g,
                    channelInterpretation: "speakers",
                    numberOfInputs: 6
                }), y = Mo(t1, {
                    ..._,
                    gain: 1
                }), x = Mo(t1, {
                    ...g,
                    gain: 1
                }), w = Mo(t1, {
                    ...g,
                    gain: 0
                }), b = Mo(t1, {
                    ...g,
                    gain: 0
                }), T = Mo(t1, {
                    ...g,
                    gain: 0
                }), S = Mo(t1, {
                    ...g,
                    gain: 0
                }), k = Mo(t1, {
                    ...g,
                    gain: 0
                }), C = Eo(t1, 256, 6, 1), A = Ro(t1, {
                    ...g,
                    curve: new Float32Array([
                        1,
                        1
                    ]),
                    oversample: "none"
                });
                let D = [
                    o,
                    a,
                    h
                ], O = [
                    l,
                    u,
                    p
                ];
                const M = new Float32Array(1);
                C.onaudioprocess = ({ inputBuffer: t1 })=>{
                    const e1 = [
                        Io(t1, M, 0),
                        Io(t1, M, 1),
                        Io(t1, M, 2)
                    ];
                    e1.some((t1, e1)=>t1 !== D[e1]) && (m.setOrientation(...e1), D = e1);
                    const s = [
                        Io(t1, M, 3),
                        Io(t1, M, 4),
                        Io(t1, M, 5)
                    ];
                    s.some((t1, e1)=>t1 !== O[e1]) && (m.setPosition(...s), O = s);
                }, Object.defineProperty(w.gain, "defaultValue", {
                    get: ()=>0
                }), Object.defineProperty(b.gain, "defaultValue", {
                    get: ()=>0
                }), Object.defineProperty(T.gain, "defaultValue", {
                    get: ()=>0
                }), Object.defineProperty(S.gain, "defaultValue", {
                    get: ()=>0
                }), Object.defineProperty(k.gain, "defaultValue", {
                    get: ()=>0
                });
                const E = {
                    get bufferSize () {},
                    get channelCount () {
                        return m.channelCount;
                    },
                    set channelCount (t){
                        if (2 < t) throw qo();
                        y.channelCount = t, m.channelCount = t;
                    },
                    get channelCountMode () {
                        return m.channelCountMode;
                    },
                    set channelCountMode (t){
                        if ("max" === t) throw qo();
                        y.channelCountMode = t, m.channelCountMode = t;
                    },
                    get channelInterpretation () {
                        return m.channelInterpretation;
                    },
                    set channelInterpretation (t){
                        y.channelInterpretation = t, m.channelInterpretation = t;
                    },
                    get coneInnerAngle () {
                        return m.coneInnerAngle;
                    },
                    set coneInnerAngle (t){
                        m.coneInnerAngle = t;
                    },
                    get coneOuterAngle () {
                        return m.coneOuterAngle;
                    },
                    set coneOuterAngle (t){
                        m.coneOuterAngle = t;
                    },
                    get coneOuterGain () {
                        return m.coneOuterGain;
                    },
                    set coneOuterGain (t){
                        if (t < 0 || 1 < t) throw Do();
                        m.coneOuterGain = t;
                    },
                    get context () {
                        return m.context;
                    },
                    get distanceModel () {
                        return m.distanceModel;
                    },
                    set distanceModel (t){
                        m.distanceModel = t;
                    },
                    get inputs () {
                        return [
                            y
                        ];
                    },
                    get maxDistance () {
                        return m.maxDistance;
                    },
                    set maxDistance (t){
                        if (t < 0) throw new RangeError;
                        m.maxDistance = t;
                    },
                    get numberOfInputs () {
                        return m.numberOfInputs;
                    },
                    get numberOfOutputs () {
                        return m.numberOfOutputs;
                    },
                    get orientationX () {
                        return x.gain;
                    },
                    get orientationY () {
                        return w.gain;
                    },
                    get orientationZ () {
                        return b.gain;
                    },
                    get panningModel () {
                        return m.panningModel;
                    },
                    set panningModel (t){
                        m.panningModel = t;
                    },
                    get positionX () {
                        return T.gain;
                    },
                    get positionY () {
                        return S.gain;
                    },
                    get positionZ () {
                        return k.gain;
                    },
                    get refDistance () {
                        return m.refDistance;
                    },
                    set refDistance (t){
                        if (t < 0) throw new RangeError;
                        m.refDistance = t;
                    },
                    get rolloffFactor () {
                        return m.rolloffFactor;
                    },
                    set rolloffFactor (t){
                        if (t < 0) throw new RangeError;
                        m.rolloffFactor = t;
                    },
                    addEventListener: (...t1)=>y.addEventListener(t1[0], t1[1], t1[2]),
                    dispatchEvent: (...t1)=>y.dispatchEvent(t1[0]),
                    removeEventListener: (...t1)=>y.removeEventListener(t1[0], t1[1], t1[2])
                };
                return e1 !== E.coneInnerAngle && (E.coneInnerAngle = e1), s !== E.coneOuterAngle && (E.coneOuterAngle = s), n !== E.coneOuterGain && (E.coneOuterGain = n), i !== E.distanceModel && (E.distanceModel = i), r !== E.maxDistance && (E.maxDistance = r), o !== E.orientationX.value && (E.orientationX.value = o), a !== E.orientationY.value && (E.orientationY.value = a), h !== E.orientationZ.value && (E.orientationZ.value = h), c !== E.panningModel && (E.panningModel = c), l !== E.positionX.value && (E.positionX.value = l), u !== E.positionY.value && (E.positionY.value = u), p !== E.positionZ.value && (E.positionZ.value = p), d !== E.refDistance && (E.refDistance = d), f !== E.rolloffFactor && (E.rolloffFactor = f), 1 === D[0] && 0 === D[1] && 0 === D[2] || m.setOrientation(...D), 0 === O[0] && 0 === O[1] && 0 === O[2] || m.setPosition(...O), Vo(Ne(E, m), ()=>{
                    y.connect(m), Ao(y, A, 0, 0), A.connect(x).connect(v, 0, 0), A.connect(w).connect(v, 0, 1), A.connect(b).connect(v, 0, 2), A.connect(T).connect(v, 0, 3), A.connect(S).connect(v, 0, 4), A.connect(k).connect(v, 0, 5), v.connect(C).connect(t1.destination);
                }, ()=>{
                    y.disconnect(m), Fo(y, A, 0, 0), A.disconnect(x), x.disconnect(v), A.disconnect(w), w.disconnect(v), A.disconnect(b), b.disconnect(v), A.disconnect(T), T.disconnect(v), A.disconnect(S), S.disconnect(v), A.disconnect(k), k.disconnect(v), v.disconnect(C), C.disconnect(t1.destination);
                });
            }), Hl = (Co = $l, (t1, e1)=>{
                var s = t1.createPanner();
                return void 0 === s.orientationX ? Co(t1, e1) : (Oe(s, e1), Ee(s, e1, "orientationX"), Ee(s, e1, "orientationY"), Ee(s, e1, "orientationZ"), Ee(s, e1, "positionX"), Ee(s, e1, "positionY"), Ee(s, e1, "positionZ"), De(s, e1, "coneInnerAngle"), De(s, e1, "coneOuterAngle"), De(s, e1, "coneOuterGain"), De(s, e1, "distanceModel"), De(s, e1, "maxDistance"), De(s, e1, "panningModel"), De(s, e1, "refDistance"), De(s, e1, "rolloffFactor"), s);
            }), Jl = (mo = sa = rl, go = Oo = gl, vo = Tl, yo = Mo = Qo = je, wo = Jt, bo = vs, To = ra = al, So = oa = _s, ko = Nl, ()=>{
                const l = new WeakMap;
                let u = null;
                return {
                    render (t1, e1, s) {
                        var n = l.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, r, o)=>{
                            let a = null, e1 = wo(t1);
                            var h = {
                                channelCount: e1.channelCount,
                                channelCountMode: e1.channelCountMode,
                                channelInterpretation: e1.channelInterpretation
                            }, c = {
                                ...h,
                                coneInnerAngle: e1.coneInnerAngle,
                                coneOuterAngle: e1.coneOuterAngle,
                                coneOuterGain: e1.coneOuterGain,
                                distanceModel: e1.distanceModel,
                                maxDistance: e1.maxDistance,
                                panningModel: e1.panningModel,
                                refDistance: e1.refDistance,
                                rolloffFactor: e1.rolloffFactor
                            }, s = Dt(e1, r);
                            if ("bufferSize" in e1) a = yo(r, {
                                ...h,
                                gain: 1
                            });
                            else if (!s) {
                                const mo = {
                                    ...c,
                                    orientationX: e1.orientationX.value,
                                    orientationY: e1.orientationY.value,
                                    orientationZ: e1.orientationZ.value,
                                    positionX: e1.positionX.value,
                                    positionY: e1.positionY.value,
                                    positionZ: e1.positionZ.value
                                };
                                e1 = xo(r, mo);
                            }
                            if (l.set(r, null === a ? e1 : a), null === a) return s ? (await mo(r, t1.orientationX, e1.orientationX, o), await mo(r, t1.orientationY, e1.orientationY, o), await mo(r, t1.orientationZ, e1.orientationZ, o), await mo(r, t1.positionX, e1.positionX, o), await mo(r, t1.positionY, e1.positionY, o), await mo(r, t1.positionZ, e1.positionZ, o)) : (await To(r, t1.orientationX, e1.orientationX, o), await To(r, t1.orientationY, e1.orientationY, o), await To(r, t1.orientationZ, e1.orientationZ, o), await To(r, t1.positionX, e1.positionX, o), await To(r, t1.positionY, e1.positionY, o), await To(r, t1.positionZ, e1.positionZ, o)), Qt(e1) ? await So(t1, r, e1.inputs[0], o) : await So(t1, r, e1, o), e1;
                            {
                                if (null === u) {
                                    if (null === bo) throw new Error("Missing the native OfflineAudioContext constructor.");
                                    const mo = new bo(6, t1.context.length, r.sampleRate), yo = go(mo, {
                                        channelCount: 1,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        numberOfInputs: 6
                                    });
                                    yo.connect(mo.destination), u = (async ()=>{
                                        const e1 = await Promise.all([
                                            t1.orientationX,
                                            t1.orientationY,
                                            t1.orientationZ,
                                            t1.positionX,
                                            t1.positionY,
                                            t1.positionZ
                                        ].map(async (t1, e1)=>{
                                            e1 = vo(mo, {
                                                channelCount: 1,
                                                channelCountMode: "explicit",
                                                channelInterpretation: "discrete",
                                                offset: 0 === e1 ? 1 : 0
                                            });
                                            return await To(mo, t1, e1.offset, o), e1;
                                        }));
                                        for(let t1 = 0; t1 < 6; t1 += 1)e1[t1].connect(yo, 0, t1), e1[t1].start(0);
                                        return ko(mo);
                                    })();
                                }
                                const mo = await u, wo = yo(r, {
                                    ...h,
                                    gain: 1
                                });
                                await So(t1, r, wo, o);
                                const l = [];
                                for(let t1 = 0; t1 < mo.numberOfChannels; t1 += 1)l.push(mo.getChannelData(t1));
                                let s = [
                                    l[0][0],
                                    l[1][0],
                                    l[2][0]
                                ], n = [
                                    l[3][0],
                                    l[4][0],
                                    l[5][0]
                                ], e1 = yo(r, {
                                    ...h,
                                    gain: 1
                                }), i = xo(r, {
                                    ...c,
                                    orientationX: s[0],
                                    orientationY: s[1],
                                    orientationZ: s[2],
                                    positionX: n[0],
                                    positionY: n[1],
                                    positionZ: n[2]
                                });
                                wo.connect(e1).connect(i.inputs[0]), i.connect(a);
                                for(let t1 = 128; t1 < mo.length; t1 += 128){
                                    const mo = [
                                        l[0][t1],
                                        l[1][t1],
                                        l[2][t1]
                                    ], vo = [
                                        l[3][t1],
                                        l[4][t1],
                                        l[5][t1]
                                    ];
                                    if (mo.some((t1, e1)=>t1 !== s[e1]) || vo.some((t1, e1)=>t1 !== n[e1])) {
                                        s = mo, n = vo;
                                        const bo = t1 / r.sampleRate;
                                        e1.gain.setValueAtTime(0, bo), e1 = yo(r, {
                                            ...h,
                                            gain: 0
                                        }), i = xo(r, {
                                            ...c,
                                            orientationX: s[0],
                                            orientationY: s[1],
                                            orientationZ: s[2],
                                            positionX: n[0],
                                            positionY: n[1],
                                            positionZ: n[2]
                                        }), e1.gain.setValueAtTime(1, bo), wo.connect(e1).connect(i.inputs[0]), i.connect(a);
                                    }
                                }
                                return a;
                            }
                        })(t1, e1, s);
                    }
                };
            }), Kl = (Uc = As, co = $o = cl, lo = xo = Hl, uo = Jl, fo = ta = _a = ys, _o = dl, class extends Uc {
                constructor(t1, e1){
                    var s = po(t1), e1 = {
                        ...Ge,
                        ...e1
                    }, e1 = lo(s, e1), s = fo(s);
                    super(t1, !1, e1, s ? uo() : null), this._nativePannerNode = e1, this._orientationX = co(this, s, e1.orientationX, Ft, qt), this._orientationY = co(this, s, e1.orientationY, Ft, qt), this._orientationZ = co(this, s, e1.orientationZ, Ft, qt), this._positionX = co(this, s, e1.positionX, Ft, qt), this._positionY = co(this, s, e1.positionY, Ft, qt), this._positionZ = co(this, s, e1.positionZ, Ft, qt), _o(this, 1);
                }
                get coneInnerAngle() {
                    return this._nativePannerNode.coneInnerAngle;
                }
                set coneInnerAngle(t1) {
                    this._nativePannerNode.coneInnerAngle = t1;
                }
                get coneOuterAngle() {
                    return this._nativePannerNode.coneOuterAngle;
                }
                set coneOuterAngle(t1) {
                    this._nativePannerNode.coneOuterAngle = t1;
                }
                get coneOuterGain() {
                    return this._nativePannerNode.coneOuterGain;
                }
                set coneOuterGain(t1) {
                    this._nativePannerNode.coneOuterGain = t1;
                }
                get distanceModel() {
                    return this._nativePannerNode.distanceModel;
                }
                set distanceModel(t1) {
                    this._nativePannerNode.distanceModel = t1;
                }
                get maxDistance() {
                    return this._nativePannerNode.maxDistance;
                }
                set maxDistance(t1) {
                    this._nativePannerNode.maxDistance = t1;
                }
                get orientationX() {
                    return this._orientationX;
                }
                get orientationY() {
                    return this._orientationY;
                }
                get orientationZ() {
                    return this._orientationZ;
                }
                get panningModel() {
                    return this._nativePannerNode.panningModel;
                }
                set panningModel(t1) {
                    this._nativePannerNode.panningModel = t1;
                }
                get positionX() {
                    return this._positionX;
                }
                get positionY() {
                    return this._positionY;
                }
                get positionZ() {
                    return this._positionZ;
                }
                get refDistance() {
                    return this._nativePannerNode.refDistance;
                }
                set refDistance(t1) {
                    this._nativePannerNode.refDistance = t1;
                }
                get rolloffFactor() {
                    return this._nativePannerNode.rolloffFactor;
                }
                set rolloffFactor(t1) {
                    this._nativePannerNode.rolloffFactor = t1;
                }
            }), tu = (ho = Mt, (t1, { disableNormalization: e1, imag: s, real: n })=>{
                var i = s instanceof Float32Array ? s : new Float32Array(s), n = n instanceof Float32Array ? n : new Float32Array(n), e1 = t1.createPeriodicWave(n, i, {
                    disableNormalization: e1
                });
                if (Array.from(s).length < 2) throw ho();
                return e1;
            }), eu = (io = tu, ro = po = Ko = gs, oo = new WeakSet, class ao {
                constructor(t1, e1){
                    t1 = ro(t1), e1 = ((t1)=>{
                        var { imag: e1, real: s } = t1;
                        return void 0 === e1 ? void 0 === s ? {
                            ...t1,
                            imag: [
                                0,
                                0
                            ],
                            real: [
                                0,
                                0
                            ]
                        } : {
                            ...t1,
                            imag: Array.from(s, ()=>0),
                            real: s
                        } : void 0 === s ? {
                            ...t1,
                            imag: e1,
                            real: Array.from(e1, ()=>0)
                        } : {
                            ...t1,
                            imag: e1,
                            real: s
                        };
                    })({
                        ...Qe,
                        ...e1
                    }), e1 = io(t1, e1);
                    return oo.add(e1), e1;
                }
                static [Symbol.hasInstance](t1) {
                    return null !== t1 && "object" == typeof t1 && Object.getPrototypeOf(t1) === ao.prototype || oo.has(t1);
                }
            }), su = ((u, y, x, w, p, d)=>{
                const b = 16385, T = new Float32Array([
                    1,
                    1
                ]), S = Math.PI / 2, k = {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete"
                }, C = {
                    ...k,
                    oversample: "none"
                }, f = (t1, e1, s, n, i)=>{
                    if (1 === e1) return ((t1, e1, s, n)=>{
                        const i = new Float32Array(b), r = new Float32Array(b);
                        for(let t1 = 0; t1 < b; t1 += 1){
                            const e1 = t1 / 16384 * S;
                            i[t1] = Math.cos(e1), r[t1] = Math.sin(e1);
                        }
                        const o = x(t1, {
                            ...k,
                            gain: 0
                        }), a = w(t1, {
                            ...C,
                            curve: i
                        }), h = w(t1, {
                            ...C,
                            curve: T
                        }), c = x(t1, {
                            ...k,
                            gain: 0
                        }), l = w(t1, {
                            ...C,
                            curve: r
                        });
                        return {
                            connectGraph () {
                                e1.connect(o), e1.connect(void 0 === h.inputs ? h : h.inputs[0]), e1.connect(c), h.connect(s), s.connect(void 0 === a.inputs ? a : a.inputs[0]), s.connect(void 0 === l.inputs ? l : l.inputs[0]), a.connect(o.gain), l.connect(c.gain), o.connect(n, 0, 0), c.connect(n, 0, 1);
                            },
                            disconnectGraph () {
                                e1.disconnect(o), e1.disconnect(void 0 === h.inputs ? h : h.inputs[0]), e1.disconnect(c), h.disconnect(s), s.disconnect(void 0 === a.inputs ? a : a.inputs[0]), s.disconnect(void 0 === l.inputs ? l : l.inputs[0]), a.disconnect(o.gain), l.disconnect(c.gain), o.disconnect(n, 0, 0), c.disconnect(n, 0, 1);
                            }
                        };
                    })(t1, s, n, i);
                    if (2 === e1) return ((t1, e1, s, n)=>{
                        const i = new Float32Array(b), r = new Float32Array(b), o = new Float32Array(b), a = new Float32Array(b), h = Math.floor(8192.5);
                        for(let t1 = 0; t1 < b; t1 += 1)if (t1 > h) {
                            const y = (t1 - h) / (16384 - h) * S;
                            i[t1] = Math.cos(y), r[t1] = Math.sin(y), o[t1] = 0, a[t1] = 1;
                        } else {
                            const y = t1 / (16384 - h) * S;
                            i[t1] = 1, r[t1] = 0, o[t1] = Math.cos(y), a[t1] = Math.sin(y);
                        }
                        const c = y(t1, {
                            channelCount: 2,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            numberOfOutputs: 2
                        }), l = x(t1, {
                            ...k,
                            gain: 0
                        }), u = w(t1, {
                            ...C,
                            curve: i
                        }), p = x(t1, {
                            ...k,
                            gain: 0
                        }), d = w(t1, {
                            ...C,
                            curve: r
                        }), f = w(t1, {
                            ...C,
                            curve: T
                        }), _ = x(t1, {
                            ...k,
                            gain: 0
                        }), m = w(t1, {
                            ...C,
                            curve: o
                        }), g = x(t1, {
                            ...k,
                            gain: 0
                        }), v = w(t1, {
                            ...C,
                            curve: a
                        });
                        return {
                            connectGraph () {
                                e1.connect(c), e1.connect(void 0 === f.inputs ? f : f.inputs[0]), c.connect(l, 0), c.connect(p, 0), c.connect(_, 1), c.connect(g, 1), f.connect(s), s.connect(void 0 === u.inputs ? u : u.inputs[0]), s.connect(void 0 === d.inputs ? d : d.inputs[0]), s.connect(void 0 === m.inputs ? m : m.inputs[0]), s.connect(void 0 === v.inputs ? v : v.inputs[0]), u.connect(l.gain), d.connect(p.gain), m.connect(_.gain), v.connect(g.gain), l.connect(n, 0, 0), _.connect(n, 0, 0), p.connect(n, 0, 1), g.connect(n, 0, 1);
                            },
                            disconnectGraph () {
                                e1.disconnect(c), e1.disconnect(void 0 === f.inputs ? f : f.inputs[0]), c.disconnect(l, 0), c.disconnect(p, 0), c.disconnect(_, 1), c.disconnect(g, 1), f.disconnect(s), s.disconnect(void 0 === u.inputs ? u : u.inputs[0]), s.disconnect(void 0 === d.inputs ? d : d.inputs[0]), s.disconnect(void 0 === m.inputs ? m : m.inputs[0]), s.disconnect(void 0 === v.inputs ? v : v.inputs[0]), u.disconnect(l.gain), d.disconnect(p.gain), m.disconnect(_.gain), v.disconnect(g.gain), l.disconnect(n, 0, 0), _.disconnect(n, 0, 0), p.disconnect(n, 0, 1), g.disconnect(n, 0, 1);
                            }
                        };
                    })(t1, s, n, i);
                    throw p();
                };
                return (e1, { channelCount: t1, channelCountMode: s, pan: n, ...i })=>{
                    if ("max" === s) throw p();
                    const r = u(e1, {
                        ...i,
                        channelCount: 1,
                        channelCountMode: s,
                        numberOfInputs: 2
                    }), o = x(e1, {
                        ...i,
                        channelCount: t1,
                        channelCountMode: s,
                        gain: 1
                    }), a = x(e1, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: n
                    });
                    let { connectGraph: h, disconnectGraph: c } = f(e1, t1, o, a, r);
                    Object.defineProperty(a.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(a.gain, "maxValue", {
                        get: ()=>1
                    }), Object.defineProperty(a.gain, "minValue", {
                        get: ()=>-1
                    });
                    t1 = {
                        get bufferSize () {},
                        get channelCount () {
                            return o.channelCount;
                        },
                        set channelCount (t){
                            o.channelCount !== t && (l && c(), { connectGraph: h, disconnectGraph: c } = f(e1, t, o, a, r), l && h()), o.channelCount = t;
                        },
                        get channelCountMode () {
                            return o.channelCountMode;
                        },
                        set channelCountMode (t){
                            if ("clamped-max" === t || "max" === t) throw p();
                            o.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return o.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            o.channelInterpretation = t;
                        },
                        get context () {
                            return o.context;
                        },
                        get inputs () {
                            return [
                                o
                            ];
                        },
                        get numberOfInputs () {
                            return o.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return o.numberOfOutputs;
                        },
                        get pan () {
                            return a.gain;
                        },
                        addEventListener: (...t1)=>o.addEventListener(t1[0], t1[1], t1[2]),
                        dispatchEvent: (...t1)=>o.dispatchEvent(t1[0]),
                        removeEventListener: (...t1)=>o.removeEventListener(t1[0], t1[1], t1[2])
                    };
                    let l = !1;
                    return d(Ne(t1, r), ()=>{
                        h(), l = !0;
                    }, ()=>{
                        c(), l = !1;
                    });
                };
            })(gl, Ve, je, Yl, We, _l), nu = (so = su, no = We, (t1, e1)=>{
                const s = e1.channelCountMode;
                if ("clamped-max" === s) throw no();
                if (void 0 === t1.createStereoPanner) return so(t1, e1);
                t1 = t1.createStereoPanner();
                return Oe(t1, e1), Ee(t1, e1, "pan"), Object.defineProperty(t1, "channelCountMode", {
                    get: ()=>s,
                    set: (t1)=>{
                        if (t1 !== s) throw no();
                    }
                }), t1;
            }), iu = (Hr = rl, Kr = Jt, to = al, ()=>{
                const r = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = r.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = Kr(t1);
                            var i = Dt(n, e1);
                            if (!i) {
                                const Hr = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    pan: n.pan.value
                                };
                                n = Jr(e1, Hr);
                            }
                            return r.set(e1, n), i ? await Hr(e1, t1.pan, n.pan, s) : await to(e1, t1.pan, n.pan, s), Qt(n) ? await eo(t1, e1, n.inputs[0], s) : await eo(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), ru = (Uc = As, Qr = cl, Zr = Jr = nu, Xr = iu, class extends Uc {
                constructor(t1, e1){
                    var s = Yr(t1), e1 = {
                        ...Ze,
                        ...e1
                    }, e1 = Zr(s, e1), s = $r(s);
                    super(t1, !1, e1, s ? Xr() : null), this._pan = Qr(this, s, e1.pan);
                }
                get pan() {
                    return this._pan;
                }
            }), ou = (Ur = Jt, Gr = eo = _s, ()=>{
                const i = new WeakMap;
                return {
                    render (t1, e1, s) {
                        var n = i.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (t1, e1, s)=>{
                            let n = Ur(t1);
                            if (!Dt(n, e1)) {
                                const Ur = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    curve: n.curve,
                                    oversample: n.oversample
                                };
                                n = Br(e1, Ur);
                            }
                            return i.set(e1, n), Qt(n) ? await Gr(t1, e1, n.inputs[0], s) : await Gr(t1, e1, n, s), n;
                        })(t1, e1, s);
                    }
                };
            }), au = (Uc = As, Nr = be, Pr = Br = Yl, jr = ou, Lr = Yr = gs, zr = $r = ys, Wr = dl, class extends Uc {
                constructor(t1, e1){
                    var s = Lr(t1), e1 = {
                        ...Xe,
                        ...e1
                    }, e1 = Pr(s, e1);
                    super(t1, !0, e1, zr(s) ? jr() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = e1, Wr(this, 1);
                }
                get curve() {
                    return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve;
                }
                set curve(t1) {
                    if (null === t1) this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([
                        0,
                        0
                    ]);
                    else {
                        if (t1.length < 2) throw Nr();
                        this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = t1;
                    }
                }
                get oversample() {
                    return this._nativeWaveShaperNode.oversample;
                }
                set oversample(t1) {
                    this._nativeWaveShaperNode.oversample = t1;
                }
            }), hu = null !== (Uc = ps) && Uc.isSecureContext, cu = (Vr = ps, (t1, e1, s)=>{
                Object.defineProperties(Vr, {
                    currentFrame: {
                        configurable: !0,
                        get: ()=>Math.round(t1 * e1)
                    },
                    currentTime: {
                        configurable: !0,
                        get: ()=>t1
                    }
                });
                try {
                    return s();
                } finally{
                    null !== Vr && (delete Vr.currentFrame, delete Vr.currentTime);
                }
            }), lu = new WeakMap, uu = (Fr = lu, Ir = vs, (t1)=>{
                let e1 = Fr.get(t1);
                if (void 0 !== e1) return e1;
                if (null === Ir) throw new Error("Missing the native OfflineAudioContext constructor.");
                return e1 = new Ir(1, 1, 44100), Fr.set(t1, e1), e1;
            }), pu = hu ? ((r, o, a, l, u, p, d, f, _, m, g, v, y)=>{
                let x = 0;
                return (e1, s, h = {
                    credentials: "omit"
                })=>{
                    const t1 = g.get(e1);
                    if (void 0 !== t1 && t1.has(s)) return Promise.resolve();
                    const n = m.get(e1);
                    if (void 0 !== n) {
                        const r = n.get(s);
                        if (void 0 !== r) return r;
                    }
                    const c = p(e1), i = void 0 === c.audioWorklet ? u(s).then(([t1, e1])=>{
                        var [t1, e1] = mt(t1, e1);
                        return a(`${t1};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${e1}\n})})(window,'_AWGS')`);
                    }).then(()=>{
                        const t1 = y._AWGS.pop();
                        if (void 0 === t1) throw new SyntaxError;
                        l(c.currentTime, c.sampleRate, ()=>t1(class {
                            }, void 0, (t1, e1)=>{
                                if ("" === t1.trim()) throw o();
                                const s = pt.get(c);
                                if (void 0 !== s) {
                                    if (s.has(t1)) throw o();
                                    vt(e1), gt(e1.parameterDescriptors), s.set(t1, e1);
                                } else vt(e1), gt(e1.parameterDescriptors), pt.set(c, new Map([
                                    [
                                        t1,
                                        e1
                                    ]
                                ]));
                            }, c.sampleRate, void 0, void 0));
                    }) : Promise.all([
                        u(s),
                        Promise.resolve(r(v, v))
                    ]).then(([[t1, e1], s])=>{
                        const n = x + 1;
                        x = n;
                        const [i, r] = mt(t1, e1), o = new Blob([
                            `${i};((AudioWorkletProcessor,registerProcessor)=>{${r}\n})(${s ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${s ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${s ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${n}',class extends AudioWorkletProcessor{process(){return !1}})`
                        ], {
                            type: "application/javascript; charset=utf-8"
                        }), a = URL.createObjectURL(o);
                        return c.audioWorklet.addModule(a, h).then(()=>{
                            if (f(c)) return c;
                            const t1 = d(c);
                            return t1.audioWorklet.addModule(a, h).then(()=>t1);
                        }).then((t1)=>{
                            if (null === _) throw new SyntaxError;
                            try {
                                new _(t1, `__sac${n}`);
                            } catch  {
                                throw new SyntaxError;
                            }
                        }).finally(()=>URL.revokeObjectURL(a));
                    });
                    return void 0 === n ? m.set(e1, new Map([
                        [
                            s,
                            i
                        ]
                    ])) : n.set(s, i), i.then(()=>{
                        const t1 = g.get(e1);
                        void 0 === t1 ? g.set(e1, new Set([
                            s
                        ])) : t1.add(s);
                    }).finally(()=>{
                        const t1 = m.get(e1);
                        void 0 !== t1 && t1.delete(s);
                    }), i;
                };
            })(us, We, (qr = ps, (i)=>new Promise((t1, r)=>{
                    if (null !== qr) {
                        const e1 = qr.document.head;
                        if (null === e1) r(new SyntaxError);
                        else {
                            const s = qr.document.createElement("script"), n = new Blob([
                                i
                            ], {
                                type: "application/javascript"
                            }), o = URL.createObjectURL(n), a = qr.onerror, h = ()=>{
                                qr.onerror = a, URL.revokeObjectURL(o);
                            };
                            qr.onerror = (t1, e1, s, n, i)=>e1 === o || e1 === qr.location.href && 1 === s && 1 === n ? (h(), r(i), !1) : null !== a ? a(t1, e1, s, n, i) : void 0, s.onerror = ()=>{
                                h(), r(new SyntaxError);
                            }, s.onload = ()=>{
                                h(), t1();
                            }, s.src = o, s.type = "module", e1.appendChild(s);
                        }
                    } else r(new SyntaxError);
                })), cu, async (t1)=>{
                try {
                    const e1 = await fetch(t1);
                    if (e1.ok) return [
                        await e1.text(),
                        e1.url
                    ];
                } catch  {}
                throw new DOMException("", "AbortError");
            }, gs, uu, ys, Cs, new WeakMap, new WeakMap, (Er = Cs, Rr = vs, async ()=>{
                if (null === Er) return !0;
                if (null === Rr) return !1;
                const t1 = new Blob([
                    'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'
                ], {
                    type: "application/javascript; charset=utf-8"
                }), e1 = new Rr(1, 128, 44100), s = URL.createObjectURL(t1);
                let n = !1, i = !1;
                try {
                    await e1.audioWorklet.addModule(s);
                    const Rr = new Er(e1, "a", {
                        numberOfOutputs: 0
                    }), t1 = e1.createOscillator();
                    Rr.port.onmessage = ()=>n = !0, Rr.onprocessorerror = ()=>i = !0, t1.connect(Rr), t1.start(0), await e1.startRendering();
                } catch  {} finally{
                    URL.revokeObjectURL(s);
                }
                return n && !i;
            }), ps) : void 0, du = (Or = Ts, Mr = ys, (t1)=>Or(t1) || Mr(t1)), fu = (xr = Kc, wr = us, br = new WeakSet, Sr = du, kr = Ot, Cr = Ae, Ar = tl, Dr = el, (t1, r)=>{
                const o = Sr(t1) ? t1 : Tr(t1);
                if (br.has(r)) {
                    const xr = new DOMException("", "DataCloneError");
                    return Promise.reject(xr);
                }
                try {
                    br.add(r);
                } catch  {}
                return wr(Cr, ()=>Cr(o)) ? o.decodeAudioData(r).then((t1)=>(ge(r).catch(()=>{}), wr(kr, ()=>kr(t1)) || Dr(t1), xr.add(t1), t1)) : new Promise((e1, s)=>{
                    const n = async ()=>{
                        try {
                            await ge(r);
                        } catch  {}
                    }, i = (t1)=>{
                        s(t1), n();
                    };
                    try {
                        o.decodeAudioData(r, (t1)=>{
                            "function" != typeof t1.copyFromChannel && (Ar(t1), Et(t1)), xr.add(t1), n().then(()=>e1(t1));
                        }, (t1)=>{
                            i(null === t1 ? new DOMException("", "EncodingError") : t1);
                        });
                    } catch (t1) {
                        i(t1);
                    }
                });
            }), _u = (er = pu, sr = Jc, nr = sl, ir = ll, rr = fl, or = yl, ar = wl, hr = kl, cr = Dl, lr = fu, ur = Ml, pr = ql, dr = Il, fr = Ll, _r = Ql, mr = Kl, gr = eu, vr = ru, yr = au, class extends Bl {
                constructor(t1, e1){
                    super(t1, e1), this._nativeContext = t1, this._audioWorklet = void 0 === er ? void 0 : {
                        addModule: (t1, e1)=>er(this, t1, e1)
                    };
                }
                get audioWorklet() {
                    return this._audioWorklet;
                }
                createAnalyser() {
                    return new sr(this);
                }
                createBiquadFilter() {
                    return new rr(this);
                }
                createBuffer(t1, e1, s) {
                    return new nr({
                        length: e1,
                        numberOfChannels: t1,
                        sampleRate: s
                    });
                }
                createBufferSource() {
                    return new ir(this);
                }
                createChannelMerger(t1 = 6) {
                    return new or(this, {
                        numberOfInputs: t1
                    });
                }
                createChannelSplitter(t1 = 6) {
                    return new ar(this, {
                        numberOfOutputs: t1
                    });
                }
                createConstantSource() {
                    return new hr(this);
                }
                createConvolver() {
                    return new cr(this);
                }
                createDelay(t1 = 1) {
                    return new ur(this, {
                        maxDelayTime: t1
                    });
                }
                createDynamicsCompressor() {
                    return new pr(this);
                }
                createGain() {
                    return new dr(this);
                }
                createIIRFilter(t1, e1) {
                    return new fr(this, {
                        feedback: e1,
                        feedforward: t1
                    });
                }
                createOscillator() {
                    return new _r(this);
                }
                createPanner() {
                    return new mr(this);
                }
                createPeriodicWave(t1, e1, s = {
                    disableNormalization: !1
                }) {
                    return new gr(this, {
                        ...s,
                        imag: e1,
                        real: t1
                    });
                }
                createStereoPanner() {
                    return new vr(this);
                }
                createWaveShaper() {
                    return new yr(this);
                }
                decodeAudioData(t1, e1, s) {
                    return lr(this._nativeContext, t1).then((t1)=>("function" == typeof e1 && e1(t1), t1), (t1)=>{
                        throw "function" == typeof s && s(t1), t1;
                    });
                }
            }), mu = class extends As {
                constructor(t1, e1){
                    const s = Ki(t1), n = s.createMediaElementSource(e1.mediaElement);
                    if (tr(s)) throw TypeError();
                    super(t1, !0, n, null), this._nativeMediaElementAudioSourceNode = n;
                }
                get mediaElement() {
                    return this._nativeMediaElementAudioSourceNode.mediaElement;
                }
            }, gu = class extends As {
                constructor(t1, e1){
                    var s = Hi(t1);
                    if (Ji(s)) throw new TypeError;
                    e1 = ((t1, e1)=>{
                        t1 = t1.createMediaStreamDestination();
                        return Oe(t1, e1), 1 === t1.numberOfOutputs && Object.defineProperty(t1, "numberOfOutputs", {
                            get: ()=>0
                        }), t1;
                    })(s, {
                        ...Ce,
                        ...e1
                    });
                    super(t1, !1, e1, null), this._nativeMediaStreamAudioDestinationNode = e1;
                }
                get stream() {
                    return this._nativeMediaStreamAudioDestinationNode.stream;
                }
            }, vu = class extends As {
                constructor(t1, e1){
                    var s = Yi(t1), e1 = ((t1, { mediaStream: e1 })=>{
                        const s = e1.getAudioTracks();
                        s.sort((t1, e1)=>t1.id < e1.id ? -1 : t1.id > e1.id ? 1 : 0);
                        var n = s.slice(0, 1), n = t1.createMediaStreamSource(new MediaStream(n));
                        return Object.defineProperty(n, "mediaStream", {
                            value: e1
                        }), n;
                    })(s, e1);
                    if ($i(s)) throw new TypeError;
                    super(t1, !0, e1, null), this._nativeMediaStreamAudioSourceNode = e1;
                }
                get mediaStream() {
                    return this._nativeMediaStreamAudioSourceNode.mediaStream;
                }
            }, yu = (Zi = be, Xi = $i = Ji = tr = ys, (t1, { mediaStreamTrack: e1 })=>{
                if ("function" == typeof t1.createMediaStreamTrackSource) return t1.createMediaStreamTrackSource(e1);
                var s = new MediaStream([
                    e1
                ]), s = t1.createMediaStreamSource(s);
                if ("audio" !== e1.kind) throw Zi();
                if (Xi(t1)) throw new TypeError;
                return s;
            }), xu = (Jc = As, Gi = yu, Qi = Yi = Hi = Ki = Tr = gs, class extends Jc {
                constructor(t1, e1){
                    var s = Qi(t1);
                    super(t1, !0, Gi(s, e1), null);
                }
            }), wu = (Jc = _u, Ni = be, Pi = We, ji = ()=>new DOMException("", "UnknownError"), Li = mu, zi = gu, Wi = vu, Bi = xu, Ui = bs, class extends Jc {
                constructor(t1 = {}){
                    if (null === Ui) throw new Error("Missing the native AudioContext constructor.");
                    let e1;
                    try {
                        e1 = new Ui(t1);
                    } catch (t1) {
                        if (12 === t1.code && "sampleRate is not in range" === t1.message) throw Pi();
                        throw t1;
                    }
                    if (null === e1) throw ji();
                    if (void 0 !== (n = t1.latencyHint) && "number" != typeof n && ("string" != typeof n || "balanced" !== n && "interactive" !== n && "playback" !== n)) throw new TypeError(`The provided value '${t1.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
                    if (void 0 !== t1.sampleRate && e1.sampleRate !== t1.sampleRate) throw Pi();
                    super(e1, 2);
                    var s = t1["latencyHint"], n = e1["sampleRate"];
                    if (this._baseLatency = "number" == typeof e1.baseLatency ? e1.baseLatency : "balanced" === s ? 512 / n : "interactive" === s || void 0 === s ? 256 / n : "playback" === s ? 1024 / n : 128 * Math.max(2, Math.min(128, Math.round(s * n / 128))) / n, this._nativeAudioContext = e1, "webkitAudioContext" === Ui.name ? (this._nativeGainNode = e1.createGain(), this._nativeOscillatorNode = e1.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(e1.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, "running" === e1.state) {
                        this._state = "suspended";
                        const t1 = ()=>{
                            "suspended" === this._state && (this._state = null), e1.removeEventListener("statechange", t1);
                        };
                        e1.addEventListener("statechange", t1);
                    }
                }
                get baseLatency() {
                    return this._baseLatency;
                }
                get state() {
                    return null !== this._state ? this._state : this._nativeAudioContext.state;
                }
                close() {
                    return "closed" === this.state ? this._nativeAudioContext.close().then(()=>{
                        throw Ni();
                    }) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close().then(()=>{
                        null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), Lt(this);
                    }));
                }
                createMediaElementSource(t1) {
                    return new Li(this, {
                        mediaElement: t1
                    });
                }
                createMediaStreamDestination() {
                    return new zi(this);
                }
                createMediaStreamSource(t1) {
                    return new Wi(this, {
                        mediaStream: t1
                    });
                }
                createMediaStreamTrackSource(t1) {
                    return new Bi(this, {
                        mediaStreamTrack: t1
                    });
                }
                resume() {
                    return "suspended" === this._state ? new Promise((t1, e1)=>{
                        const s = ()=>{
                            this._nativeAudioContext.removeEventListener("statechange", s), "running" === this._nativeAudioContext.state ? t1() : this.resume().then(t1, e1);
                        };
                        this._nativeAudioContext.addEventListener("statechange", s);
                    }) : this._nativeAudioContext.resume().catch((t1)=>{
                        if (void 0 === t1 || 15 === t1.code) throw Ni();
                        throw t1;
                    });
                }
                suspend() {
                    return this._nativeAudioContext.suspend().catch((t1)=>{
                        if (void 0 === t1) throw Ni();
                        throw t1;
                    });
                }
            }), bu = (Vi = Wl, (t1)=>{
                t1 = Vi.get(t1);
                if (void 0 === t1) throw new Error("The context has no set of AudioWorkletNodes.");
                return t1;
            }), Tu = (t1, e1)=>{
                Ii(t1).add(e1);
            }, Su = (Fi = Mt, (t1, e1, s = 0, n = 0)=>{
                const i = t1[s];
                if (void 0 === i) throw Fi();
                return ie(e1) ? i.connect(e1, 0, n) : i.connect(e1, 0);
            }), ku = (qi = Ii = bu, (t1, e1)=>{
                qi(t1).delete(e1);
            }), Cu = (Ri = Mt, (t1, e1, s, n = 0)=>void 0 === e1 ? t1.forEach((t1)=>t1.disconnect()) : "number" == typeof e1 ? ye(Ri, t1, e1).disconnect() : ie(e1) ? void 0 === s ? t1.forEach((t1)=>t1.disconnect(e1)) : void 0 === n ? ye(Ri, t1, s).disconnect(e1, 0) : ye(Ri, t1, s).disconnect(e1, 0, n) : void 0 === s ? t1.forEach((t1)=>t1.disconnect(e1)) : ye(Ri, t1, s).disconnect(e1, 0)), Au = new WeakMap, Du = (Mi = Au, Ei = yt, (t1)=>Ei(Mi, t1)), Ou = (vi = Mt, yi = be, Si = ze, Di = Du, (o, t1, e1, a)=>{
                if (0 === a.numberOfInputs && 0 === a.numberOfOutputs) throw ki();
                const h = Array.isArray(a.outputChannelCount) ? a.outputChannelCount : Array.from(a.outputChannelCount);
                if (h.some((t1)=>t1 < 1)) throw ki();
                if (h.length !== a.numberOfOutputs) throw vi();
                if ("explicit" !== a.channelCountMode) throw ki();
                const c = a.channelCount * a.numberOfInputs, s = h.reduce((t1, e1)=>t1 + e1, 0), n = void 0 === e1.parameterDescriptors ? 0 : e1.parameterDescriptors.length;
                if (6 < c + n || 6 < s) throw ki();
                const i = new MessageChannel, l = [], u = [];
                for(let t1 = 0; t1 < a.numberOfInputs; t1 += 1)l.push(Ti(o, {
                    channelCount: a.channelCount,
                    channelCountMode: a.channelCountMode,
                    channelInterpretation: a.channelInterpretation,
                    gain: 1
                })), u.push(wi(o, {
                    channelCount: a.channelCount,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    numberOfOutputs: a.channelCount
                }));
                const p = [];
                if (void 0 !== e1.parameterDescriptors) for (const { defaultValue: gi, maxValue: vi, minValue: yi, name: xi } of e1.parameterDescriptors){
                    const wi = bi(o, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        offset: void 0 !== a.parameterData[xi] ? a.parameterData[xi] : void 0 === gi ? 0 : gi
                    });
                    Object.defineProperties(wi.offset, {
                        defaultValue: {
                            get: ()=>void 0 === gi ? 0 : gi
                        },
                        maxValue: {
                            get: ()=>void 0 === vi ? Ft : vi
                        },
                        minValue: {
                            get: ()=>void 0 === yi ? qt : yi
                        }
                    }), p.push(wi);
                }
                const d = xi(o, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: Math.max(1, c + n)
                }), f = Fe(t1, o.sampleRate), _ = Si(o, f, c + n, Math.max(1, s)), r = wi(o, {
                    channelCount: Math.max(1, s),
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    numberOfOutputs: Math.max(1, s)
                }), m = [];
                for(let t1 = 0; t1 < a.numberOfOutputs; t1 += 1)m.push(xi(o, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: h[t1]
                }));
                for(let e1 = 0; e1 < a.numberOfInputs; e1 += 1){
                    l[e1].connect(u[e1]);
                    for(let t1 = 0; t1 < a.channelCount; t1 += 1)u[e1].connect(d, t1, e1 * a.channelCount + t1);
                }
                const g = new ae(void 0 === e1.parameterDescriptors ? [] : e1.parameterDescriptors.map(({ name: t1 }, e1)=>{
                    const s = p[e1];
                    return s.connect(d, 0, c + e1), s.start(0), [
                        t1,
                        s.offset
                    ];
                }));
                d.connect(_);
                let v = a.channelInterpretation, y = null;
                const x = 0 === a.numberOfOutputs ? [
                    _
                ] : m, w = {
                    get bufferSize () {
                        return f;
                    },
                    get channelCount () {
                        return a.channelCount;
                    },
                    set channelCount (t){
                        throw yi();
                    },
                    get channelCountMode () {
                        return a.channelCountMode;
                    },
                    set channelCountMode (t){
                        throw yi();
                    },
                    get channelInterpretation () {
                        return v;
                    },
                    set channelInterpretation (t){
                        for (const e1 of l)e1.channelInterpretation = t;
                        v = t;
                    },
                    get context () {
                        return _.context;
                    },
                    get inputs () {
                        return l;
                    },
                    get numberOfInputs () {
                        return a.numberOfInputs;
                    },
                    get numberOfOutputs () {
                        return a.numberOfOutputs;
                    },
                    get onprocessorerror () {
                        return y;
                    },
                    set onprocessorerror (t){
                        "function" == typeof y && w.removeEventListener("processorerror", y), y = "function" == typeof t ? t : null, "function" == typeof y && w.addEventListener("processorerror", y);
                    },
                    get parameters () {
                        return g;
                    },
                    get port () {
                        return i.port2;
                    },
                    addEventListener: (...t1)=>_.addEventListener(t1[0], t1[1], t1[2]),
                    connect: gi.bind(null, x),
                    disconnect: Ci.bind(null, x),
                    dispatchEvent: (...t1)=>_.dispatchEvent(t1[0]),
                    removeEventListener: (...t1)=>_.removeEventListener(t1[0], t1[1], t1[2])
                }, b = new Map;
                var T, S;
                i.port1.addEventListener = (T = i.port1.addEventListener, (...t1)=>{
                    if ("message" === t1[0]) {
                        const s = "function" == typeof t1[1] ? t1[1] : "object" == typeof t1[1] && null !== t1[1] && "function" == typeof t1[1].handleEvent ? t1[1].handleEvent : null;
                        var e1;
                        null !== s && (void 0 !== (e1 = b.get(t1[1])) ? t1[1] = e1 : (t1[1] = (t1)=>{
                            Ai(o.currentTime, o.sampleRate, ()=>s(t1));
                        }, b.set(s, t1[1])));
                    }
                    return T.call(i.port1, t1[0], t1[1], t1[2]);
                }), i.port1.removeEventListener = (S = i.port1.removeEventListener, (...t1)=>{
                    var e1;
                    return "message" !== t1[0] || void 0 !== (e1 = b.get(t1[1])) && (b.delete(t1[1]), t1[1] = e1), S.call(i.port1, t1[0], t1[1], t1[2]);
                });
                let k = null;
                Object.defineProperty(i.port1, "onmessage", {
                    get: ()=>k,
                    set: (t1)=>{
                        "function" == typeof k && i.port1.removeEventListener("message", k), k = "function" == typeof t1 ? t1 : null, "function" == typeof k && (i.port1.addEventListener("message", k), i.port1.start());
                    }
                }), e1.prototype.port = i.port1;
                let C = null;
                const A = ((t1, e1, s, n)=>{
                    let i = dt.get(t1);
                    void 0 === i && (i = new WeakMap, dt.set(t1, i));
                    t1 = (async ()=>{
                        var t1;
                        return new s((t1 = n, await new Promise((e1, s)=>{
                            const { port1: n, port2: i } = new MessageChannel;
                            n.onmessage = ({ data: t1 })=>{
                                n.close(), i.close(), e1(t1);
                            }, n.onmessageerror = ({ data: t1 })=>{
                                n.close(), i.close(), s(t1);
                            }, i.postMessage(t1);
                        })));
                    })();
                    return i.set(e1, t1), t1;
                })(o, w, e1, a);
                A.then((t1)=>C = t1);
                const D = ue(a.numberOfInputs, a.channelCount), O = ue(a.numberOfOutputs, h), M = void 0 === e1.parameterDescriptors ? [] : e1.parameterDescriptors.reduce((t1, { name: e1 })=>({
                        ...t1,
                        [e1]: new Float32Array(128)
                    }), {});
                let E = !0;
                const R = ()=>{
                    0 < a.numberOfOutputs && _.disconnect(r);
                    for(let e1 = 0, s = 0; e1 < a.numberOfOutputs; e1 += 1){
                        var n = m[e1];
                        for(let t1 = 0; t1 < h[e1]; t1 += 1)r.disconnect(n, s + t1, t1);
                        s += h[e1];
                    }
                }, q = new Map;
                let F = !(_.onaudioprocess = ({ inputBuffer: s, outputBuffer: i })=>{
                    if (null !== C) {
                        const r = Di(w);
                        for(let n = 0; n < f; n += 128){
                            for(let e1 = 0; e1 < a.numberOfInputs; e1 += 1)for(let t1 = 0; t1 < a.channelCount; t1 += 1)ce(s, D[e1], t1, t1, n);
                            void 0 !== e1.parameterDescriptors && e1.parameterDescriptors.forEach(({ name: t1 }, e1)=>{
                                ce(s, M, t1, c + e1, n);
                            });
                            for(let e1 = 0; e1 < a.numberOfInputs; e1 += 1)for(let t1 = 0; t1 < h[e1]; t1 += 1)0 === O[e1][t1].byteLength && (O[e1][t1] = new Float32Array(128));
                            try {
                                const s = D.map((t1, e1)=>{
                                    if (0 < r[e1].size) return q.set(e1, f / 128), t1;
                                    var s = q.get(e1);
                                    return void 0 === s ? [] : (t1.every((t1)=>t1.every((t1)=>0 === t1)) && (1 === s ? q.delete(e1) : q.set(e1, s - 1)), t1);
                                }), t1 = Ai(o.currentTime + n / o.sampleRate, o.sampleRate, ()=>C.process(s, O, M));
                                E = t1;
                                for(let e1 = 0, s = 0; e1 < a.numberOfOutputs; e1 += 1){
                                    for(let t1 = 0; t1 < h[e1]; t1 += 1)le(i, O[e1], t1, s + t1, n);
                                    s += h[e1];
                                }
                            } catch (s) {
                                E = !1, w.dispatchEvent(new ErrorEvent("processorerror", {
                                    colno: s.colno,
                                    filename: s.filename,
                                    lineno: s.lineno,
                                    message: s.message
                                }));
                            }
                            if (!E) {
                                for(let e1 = 0; e1 < a.numberOfInputs; e1 += 1){
                                    l[e1].disconnect(u[e1]);
                                    for(let t1 = 0; t1 < a.channelCount; t1 += 1)u[n].disconnect(d, t1, e1 * a.channelCount + t1);
                                }
                                if (void 0 !== e1.parameterDescriptors) {
                                    const s = e1.parameterDescriptors.length;
                                    for(let t1 = 0; t1 < s; t1 += 1){
                                        const s = p[t1];
                                        s.disconnect(d, 0, c + t1), s.stop();
                                    }
                                }
                                d.disconnect(_), _.onaudioprocess = null, (F ? R : N)();
                                break;
                            }
                        }
                    }
                });
                const I = Ti(o, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                }), V = ()=>_.connect(I).connect(o.destination), N = ()=>{
                    _.disconnect(I), I.disconnect();
                };
                return V(), Oi(w, ()=>{
                    if (E) {
                        N(), 0 < a.numberOfOutputs && _.connect(r);
                        for(let e1 = 0, s = 0; e1 < a.numberOfOutputs; e1 += 1){
                            var n = m[e1];
                            for(let t1 = 0; t1 < h[e1]; t1 += 1)r.connect(n, s + t1, t1);
                            s += h[e1];
                        }
                    }
                    F = !0;
                }, ()=>{
                    E && (V(), R()), F = !1;
                });
            }), Mu = (pi = be, di = Ou, _i = ki = We, mi = Oi = _l, (t1, e1, s, n, i, r)=>{
                if (null !== s) try {
                    const di = new s(t1, n, r), _i = new Map;
                    let e1 = null;
                    if (Object.defineProperties(di, {
                        channelCount: {
                            get: ()=>r.channelCount,
                            set: ()=>{
                                throw pi();
                            }
                        },
                        channelCountMode: {
                            get: ()=>"explicit",
                            set: ()=>{
                                throw pi();
                            }
                        },
                        onprocessorerror: {
                            get: ()=>e1,
                            set: (t1)=>{
                                "function" == typeof e1 && di.removeEventListener("processorerror", e1), e1 = "function" == typeof t1 ? t1 : null, "function" == typeof e1 && di.addEventListener("processorerror", e1);
                            }
                        }
                    }), di.addEventListener = (a = di.addEventListener, (...e1)=>{
                        if ("processorerror" === e1[0]) {
                            const di = "function" == typeof e1[1] ? e1[1] : "object" == typeof e1[1] && null !== e1[1] && "function" == typeof e1[1].handleEvent ? e1[1].handleEvent : null;
                            var t1;
                            null !== di && (void 0 !== (t1 = _i.get(e1[1])) ? e1[1] = t1 : (e1[1] = (t1)=>{
                                "error" === t1.type ? (Object.defineProperties(t1, {
                                    type: {
                                        value: "processorerror"
                                    }
                                }), di(t1)) : di(new ErrorEvent(e1[0], {
                                    ...t1
                                }));
                            }, _i.set(di, e1[1])));
                        }
                        return a.call(di, "error", e1[1], e1[2]), a.call(di, ...e1);
                    }), di.removeEventListener = (o = di.removeEventListener, (...t1)=>{
                        if ("processorerror" === t1[0]) {
                            const di = _i.get(t1[1]);
                            void 0 !== di && (_i.delete(t1[1]), t1[1] = di);
                        }
                        return o.call(di, "error", t1[1], t1[2]), o.call(di, t1[0], t1[1], t1[2]);
                    }), 0 === r.numberOfOutputs) return di;
                    {
                        const pi = fi(t1, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            gain: 0
                        });
                        return di.connect(pi).connect(t1.destination), mi(di, ()=>pi.disconnect(), ()=>pi.connect(t1.destination));
                    }
                } catch (t1) {
                    if (11 === t1.code) throw _i();
                    throw t1;
                }
                var o, a;
                if (void 0 === i) throw _i();
                return ((t1)=>{
                    const e1 = (new MessageChannel)["port1"];
                    try {
                        e1.postMessage(t1);
                    } finally{
                        e1.close();
                    }
                })(r), di(t1, e1, i, r);
            }), Eu = ($n = rl, Hn = gi = Su, Jn = ol, Kn = xi = gl, ti = wi = Ve, ei = bi = Tl, si = fi = Ti = je, ni = ku, ii = Ci = Cu, ri = Ai = cu, oi = Jt, ai = Cs, hi = vs, ci = al, li = _s, ui = Nl, (r, h, c)=>{
                const l = new WeakMap;
                let u = null;
                return {
                    render (t1, e1, s) {
                        ni(e1, t1);
                        var n = l.get(e1);
                        return void 0 !== n ? Promise.resolve(n) : (async (o, e1, a)=>{
                            let t1 = oi(o), s = null;
                            const n = Dt(t1, e1), i = Array.isArray(h.outputChannelCount) ? h.outputChannelCount : Array.from(h.outputChannelCount);
                            if (null === ai) {
                                const $n = i.reduce((t1, e1)=>t1 + e1, 0), Jn = ti(e1, {
                                    channelCount: Math.max(1, $n),
                                    channelCountMode: "explicit",
                                    channelInterpretation: "discrete",
                                    numberOfOutputs: Math.max(1, $n)
                                }), ei = [];
                                for(let t1 = 0; t1 < o.numberOfOutputs; t1 += 1)ei.push(Kn(e1, {
                                    channelCount: 1,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "speakers",
                                    numberOfInputs: i[t1]
                                }));
                                const ri = si(e1, {
                                    channelCount: h.channelCount,
                                    channelCountMode: h.channelCountMode,
                                    channelInterpretation: h.channelInterpretation,
                                    gain: 1
                                });
                                ri.connect = Hn.bind(null, ei), ri.disconnect = ii.bind(null, ei), s = [
                                    Jn,
                                    ei,
                                    ri
                                ];
                            } else n || (t1 = new ai(e1, r));
                            if (l.set(e1, null === s ? t1 : s[2]), null !== s) {
                                if (null === u) {
                                    if (void 0 === c) throw new Error("Missing the processor constructor.");
                                    if (null === hi) throw new Error("Missing the native OfflineAudioContext constructor.");
                                    const $n = o.channelCount * o.numberOfInputs, Hn = void 0 === c.parameterDescriptors ? 0 : c.parameterDescriptors.length, Jn = $n + Hn, ii = async ()=>{
                                        const s = new hi(Jn, 128 * Math.ceil(o.context.length / 128), e1.sampleRate), n = [], i = [];
                                        for(let t1 = 0; t1 < h.numberOfInputs; t1 += 1)n.push(si(s, {
                                            channelCount: h.channelCount,
                                            channelCountMode: h.channelCountMode,
                                            channelInterpretation: h.channelInterpretation,
                                            gain: 1
                                        })), i.push(ti(s, {
                                            channelCount: h.channelCount,
                                            channelCountMode: "explicit",
                                            channelInterpretation: "discrete",
                                            numberOfOutputs: h.channelCount
                                        }));
                                        const t1 = await Promise.all(Array.from(o.parameters.values()).map(async (t1)=>{
                                            var e1 = ei(s, {
                                                channelCount: 1,
                                                channelCountMode: "explicit",
                                                channelInterpretation: "discrete",
                                                offset: t1.value
                                            });
                                            return await ci(s, t1, e1.offset, a), e1;
                                        })), r = Kn(s, {
                                            channelCount: 1,
                                            channelCountMode: "explicit",
                                            channelInterpretation: "speakers",
                                            numberOfInputs: Math.max(1, $n + Hn)
                                        });
                                        for(let e1 = 0; e1 < h.numberOfInputs; e1 += 1){
                                            n[e1].connect(i[e1]);
                                            for(let t1 = 0; t1 < h.channelCount; t1 += 1)i[e1].connect(r, t1, e1 * h.channelCount + t1);
                                        }
                                        for (const [Hn, Jn] of t1.entries())Jn.connect(r, 0, $n + Hn), Jn.start(0);
                                        return r.connect(s.destination), await Promise.all(n.map((t1)=>li(o, s, t1, a))), ui(s);
                                    };
                                    u = (async (t1, s, e1, i, r, o, a)=>{
                                        const h = null === s ? 128 * Math.ceil(t1.context.length / 128) : s.length, c = i.channelCount * i.numberOfInputs, n = r.reduce((t1, e1)=>t1 + e1, 0), l = 0 === n ? null : e1.createBuffer(n, h, e1.sampleRate);
                                        if (void 0 === o) throw new Error("Missing the processor constructor.");
                                        const u = Nt(t1), p = await ((t1, e1)=>{
                                            t1 = yt(dt, t1), e1 = Jt(e1);
                                            return yt(t1, e1);
                                        })(e1, t1), d = ue(i.numberOfInputs, i.channelCount), f = ue(i.numberOfOutputs, r), _ = Array.from(t1.parameters.keys()).reduce((t1, e1)=>({
                                                ...t1,
                                                [e1]: new Float32Array(128)
                                            }), {});
                                        for(let n = 0; n < h; n += 128){
                                            if (0 < i.numberOfInputs && null !== s) for(let e1 = 0; e1 < i.numberOfInputs; e1 += 1)for(let t1 = 0; t1 < i.channelCount; t1 += 1)ce(s, d[e1], t1, t1, n);
                                            void 0 !== o.parameterDescriptors && null !== s && o.parameterDescriptors.forEach(({ name: t1 }, e1)=>{
                                                ce(s, _, t1, c + e1, n);
                                            });
                                            for(let e1 = 0; e1 < i.numberOfInputs; e1 += 1)for(let t1 = 0; t1 < r[e1]; t1 += 1)0 === f[e1][t1].byteLength && (f[e1][t1] = new Float32Array(128));
                                            try {
                                                const t1 = d.map((t1, e1)=>0 === u.activeInputs[e1].size ? [] : t1), s = a(n / e1.sampleRate, e1.sampleRate, ()=>p.process(t1, f, _));
                                                if (null !== l) for(let e1 = 0, s = 0; e1 < i.numberOfOutputs; e1 += 1){
                                                    for(let t1 = 0; t1 < r[e1]; t1 += 1)le(l, f[e1], t1, s + t1, n);
                                                    s += r[e1];
                                                }
                                                if (!s) break;
                                            } catch (s) {
                                                t1.dispatchEvent(new ErrorEvent("processorerror", {
                                                    colno: s.colno,
                                                    filename: s.filename,
                                                    lineno: s.lineno,
                                                    message: s.message
                                                }));
                                                break;
                                            }
                                        }
                                        return l;
                                    })(o, 0 === Jn ? null : await ii(), e1, h, i, c, ri);
                                }
                                const $n = await u, Hn = Jn(e1, {
                                    buffer: null,
                                    channelCount: 2,
                                    channelCountMode: "max",
                                    channelInterpretation: "speakers",
                                    loop: !1,
                                    loopEnd: 0,
                                    loopStart: 0,
                                    playbackRate: 1
                                }), [ii, oi, ai] = s;
                                null !== $n && (Hn.buffer = $n, Hn.start(0)), Hn.connect(ii);
                                for(let e1 = 0, s = 0; e1 < o.numberOfOutputs; e1 += 1){
                                    const Jn = oi[e1];
                                    for(let t1 = 0; t1 < i[e1]; t1 += 1)ii.connect(Jn, s + t1, t1);
                                    s += i[e1];
                                }
                                return ai;
                            }
                            if (n) for (const [Hn, Jn] of o.parameters.entries())await $n(e1, Jn, t1.parameters.get(Hn), a);
                            else for (const [$n, Hn] of o.parameters.entries())await ci(e1, Hn, t1.parameters.get($n), a);
                            return await li(o, e1, t1, a), t1;
                        })(t1, e1, s);
                    }
                };
            }), Ru = (Yn = lu, (t1)=>Yn.get(t1)), qu = (Xn = Au, (t1, e1)=>{
                Xn.set(t1, e1);
            }), Fu = hu ? (Nn = Tu, Pn = cl, jn = Eu, Ln = Mu, zn = Nt, Wn = Ru, Bn = gs, Un = ys, Gn = Cs, Qn = qu, Zn = rs, class extends As {
                constructor(t1, e1, s){
                    var n;
                    const i = Bn(t1), r = Un(i), o = {
                        ...s = {
                            ...he,
                            ...s
                        },
                        outputChannelCount: void 0 !== s.outputChannelCount ? s.outputChannelCount : 1 === s.numberOfInputs && 1 === s.numberOfOutputs ? [
                            s.channelCount
                        ] : Array.from({
                            length: s.numberOfOutputs
                        }, ()=>1)
                    };
                    ((t1)=>{
                        const { port1: e1, port2: s } = new MessageChannel;
                        try {
                            e1.postMessage(t1);
                        } finally{
                            e1.close(), s.close();
                        }
                    })(o);
                    const a = pt.get(i), h = null == a ? void 0 : a.get(e1), c = !r && "closed" === i.state && null !== (n = Wn(i)) && void 0 !== n ? n : i, l = Ln(c, r ? null : t1.baseLatency, Gn, e1, h, o);
                    super(t1, !0, l, r ? jn(e1, o, h) : null);
                    const u = [];
                    l.parameters.forEach((t1, e1)=>{
                        t1 = Pn(this, r, t1);
                        u.push([
                            e1,
                            t1
                        ]);
                    }), this._nativeAudioWorkletNode = l, this._onprocessorerror = null, this._parameters = new ae(u), r && Nn(i, this);
                    var e1 = zn(this)["activeInputs"];
                    Qn(l, e1);
                }
                get onprocessorerror() {
                    return this._onprocessorerror;
                }
                set onprocessorerror(t1) {
                    var e1 = "function" == typeof t1 ? Zn(this, t1) : null;
                    this._nativeAudioWorkletNode.onprocessorerror = e1;
                    var s = this._nativeAudioWorkletNode.onprocessorerror;
                    this._onprocessorerror = null !== s && s === e1 ? t1 : s;
                }
                get parameters() {
                    return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters;
                }
                get port() {
                    return this._nativeAudioWorkletNode.port;
                }
            }) : void 0, Iu = (In = We, Vn = vs, (t1, e1, s)=>{
                if (null === Vn) throw new Error("Missing the native OfflineAudioContext constructor.");
                try {
                    return new Vn(t1, e1, s);
                } catch (t1) {
                    if ("SyntaxError" === t1.name) throw In();
                    throw t1;
                }
            }), Vu = ((s, n, i, r, o, a, h, c)=>{
                const l = [];
                return (t1, e1)=>i(t1).render(t1, e1, l).then(()=>Promise.all(Array.from(r(e1)).map((t1)=>i(t1).render(t1, e1, l)))).then(()=>o(e1)).then((t1)=>("function" != typeof t1.copyFromChannel ? (h(t1), Et(t1)) : n(a, ()=>a(t1)) || c(t1), s.add(t1), t1));
            })(Kc, us, fs, bu, Nl, Ot, tl, el), Nu = (En = us, Rn = be, qn = Iu, Fn = Vu, class extends _u {
                constructor(t1, e1, s){
                    let n;
                    if ("number" == typeof t1 && void 0 !== e1 && void 0 !== s) n = {
                        length: e1,
                        numberOfChannels: t1,
                        sampleRate: s
                    };
                    else {
                        if ("object" != typeof t1) throw new Error("The given parameters are not valid.");
                        n = t1;
                    }
                    const { length: i, numberOfChannels: r, sampleRate: o } = {
                        ...Be,
                        ...n
                    }, a = qn(r, i, o);
                    En(Ae, ()=>Ae(a)) || a.addEventListener("statechange", (()=>{
                        let e1 = 0;
                        const s = (t1)=>{
                            "running" === this._state && (0 < e1 ? (a.removeEventListener("statechange", s), t1.stopImmediatePropagation(), this._waitForThePromiseToSettle(t1)) : e1 += 1);
                        };
                        return s;
                    })()), super(a, r), this._length = i, this._nativeOfflineAudioContext = a, this._state = null;
                }
                get length() {
                    return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
                }
                get state() {
                    return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
                }
                startRendering() {
                    return "running" === this._state ? Promise.reject(Rn()) : (this._state = "running", Fn(this.destination, this._nativeOfflineAudioContext).finally(()=>{
                        this._state = null, Lt(this);
                    }));
                }
                _waitForThePromiseToSettle(t1) {
                    null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(t1) : setTimeout(()=>this._waitForThePromiseToSettle(t1));
                }
            }), Pu = (On = ct, Mn = Ts, (t1)=>{
                var e1 = On.get(t1);
                return Mn(e1) || Mn(t1);
            }), ju = (An = ot, Dn = Ss, (t1)=>An.has(t1) || Dn(t1)), Lu = (kn = ht, Cn = ks, (t1)=>kn.has(t1) || Cn(t1)), zu = (Tn = ct, Sn = ys, (t1)=>{
                var e1 = Tn.get(t1);
                return Sn(e1) || Sn(t1);
            }), Wu = ()=>(async (t1, e1, s, n, i, r, o, a, h, c, l, u, p, d, f, _)=>!!(t1(e1, e1) && t1(s, s) && t1(i, i) && t1(r, r) && t1(a, a) && t1(h, h) && t1(c, c) && t1(l, l) && t1(u, u) && t1(p, p) && t1(d, d)) && (await Promise.all([
                        t1(n, n),
                        t1(o, o),
                        t1(f, f),
                        t1(_, _)
                    ])).every((t1)=>t1))(us, ((s)=>()=>{
                        if (null === s) return !1;
                        const t1 = new s(1, 1, 44100).createBuffer(1, 1, 44100);
                        if (void 0 === t1.copyToChannel) return !0;
                        var e1 = new Float32Array(2);
                        try {
                            t1.copyFromChannel(e1, 0, 0);
                        } catch  {
                            return !1;
                        }
                        return !0;
                    })(vs), ((s)=>()=>{
                        if (null === s) return !1;
                        if (void 0 !== s.prototype && void 0 !== s.prototype.close) return !0;
                        const t1 = new s, e1 = void 0 !== t1.close;
                        try {
                            t1.close();
                        } catch  {}
                        return e1;
                    })(bs), ((t1)=>()=>{
                        if (null === t1) return Promise.resolve(!1);
                        const i = new t1(1, 1, 44100);
                        return new Promise((e1)=>{
                            let s = !0;
                            var t1 = (t1)=>{
                                s && (s = !1, i.startRendering(), e1(t1 instanceof TypeError));
                            };
                            let n;
                            try {
                                n = i.decodeAudioData(null, ()=>{}, t1);
                            } catch (e1) {
                                t1(e1);
                            }
                            void 0 !== n && n.catch(t1);
                        });
                    })(vs), ((e1)=>()=>{
                        if (null === e1) return !1;
                        let t1;
                        try {
                            t1 = new e1({
                                latencyHint: "balanced"
                            });
                        } catch  {
                            return !1;
                        }
                        return t1.close(), !0;
                    })(bs), ((s)=>()=>{
                        if (null === s) return !1;
                        const t1 = new s(1, 1, 44100).createGain(), e1 = t1.connect(t1) === t1;
                        return t1.disconnect(t1), e1;
                    })(vs), ((r, o)=>async ()=>{
                        if (null === r) return !0;
                        if (null === o) return !1;
                        const t1 = new Blob([
                            'let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'
                        ], {
                            type: "application/javascript; charset=utf-8"
                        }), s = new MessageChannel, e1 = new o(1, 128, 44100), n = URL.createObjectURL(t1);
                        let i = !1;
                        try {
                            await e1.audioWorklet.addModule(n);
                            const o = new r(e1, "a", {
                                numberOfOutputs: 0
                            }), t1 = e1.createOscillator();
                            await new Promise((t1)=>{
                                o.port.onmessage = ()=>t1(), o.port.postMessage(s.port2, [
                                    s.port2
                                ]);
                            }), o.port.onmessage = ()=>i = !0, t1.connect(o), t1.start(0), await e1.startRendering(), i = await new Promise((e1)=>{
                                s.port1.onmessage = ({ data: t1 })=>e1(1 === t1), s.port1.postMessage(0);
                            });
                        } catch  {} finally{
                            s.port1.close(), URL.revokeObjectURL(n);
                        }
                        return i;
                    })(Cs, vs), ((e1)=>()=>{
                        if (null === e1) return !1;
                        const t1 = new e1(1, 1, 44100).createChannelMerger();
                        if ("max" === t1.channelCountMode) return !0;
                        try {
                            t1.channelCount = 2;
                        } catch  {
                            return !0;
                        }
                        return !1;
                    })(vs), ((e1)=>()=>{
                        if (null === e1) return !1;
                        const t1 = new e1(1, 1, 44100);
                        return void 0 === t1.createConstantSource || t1.createConstantSource().offset.maxValue !== Number.POSITIVE_INFINITY;
                    })(vs), ((s)=>()=>{
                        if (null === s) return !1;
                        const t1 = new s(1, 1, 44100), e1 = t1.createConvolver();
                        e1.buffer = t1.createBuffer(1, 1, t1.sampleRate);
                        try {
                            e1.buffer = t1.createBuffer(1, 1, t1.sampleRate);
                        } catch  {
                            return !1;
                        }
                        return !0;
                    })(vs), ((e1)=>()=>{
                        if (null === e1) return !1;
                        const t1 = new e1(1, 1, 44100).createConvolver();
                        try {
                            t1.channelCount = 1;
                        } catch  {
                            return !1;
                        }
                        return !0;
                    })(vs), ss, ((t1)=>()=>null !== t1 && t1.hasOwnProperty("isSecureContext"))(ps), ((e1)=>()=>{
                        if (null === e1) return !1;
                        const t1 = new e1;
                        try {
                            return t1.createMediaStreamSource(new MediaStream), !1;
                        } catch (t1) {
                            return !0;
                        } finally{
                            t1.close();
                        }
                    })(bs), ((n)=>()=>{
                        if (null === n) return Promise.resolve(!1);
                        const t1 = new n(1, 1, 44100);
                        if (void 0 === t1.createStereoPanner) return Promise.resolve(!0);
                        if (void 0 === t1.createConstantSource) return Promise.resolve(!0);
                        const e1 = t1.createConstantSource(), s = t1.createStereoPanner();
                        return e1.channelCount = 1, e1.offset.value = 1, s.channelCount = 1, e1.start(), e1.connect(s).connect(t1.destination), t1.startRendering().then((t1)=>1 !== t1.getChannelData(0)[0]);
                    })(vs), ns);
            function Bu(t1, e1) {
                if (!t1) throw new Error(e1);
            }
            function Uu(t1, e1, s = 1 / 0) {
                if (!(e1 <= t1 && t1 <= s)) throw new RangeError(`Value must be within [${e1}, ${s}], got: ${t1}`);
            }
            function Gu(t1) {
                t1.isOffline || "running" === t1.state || Xu('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.');
            }
            let Qu = console;
            function Zu(...t1) {
                Qu.log(...t1);
            }
            function Xu(...t1) {
                Qu.warn(...t1);
            }
            function Yu(t1) {
                return void 0 === t1;
            }
            function $u(t1) {
                return !Yu(t1);
            }
            function Hu(t1) {
                return "function" == typeof t1;
            }
            function Ju(t1) {
                return "number" == typeof t1;
            }
            function Ku(t1) {
                return "[object Object]" === Object.prototype.toString.call(t1) && t1.constructor === Object;
            }
            function tp(t1) {
                return "boolean" == typeof t1;
            }
            function ep(t1) {
                return Array.isArray(t1);
            }
            function sp(t1) {
                return "string" == typeof t1;
            }
            function np(t1) {
                return sp(t1) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t1);
            }
            const ip = "object" == typeof self ? self : null, rp = ip && (ip.hasOwnProperty("AudioContext") || ip.hasOwnProperty("webkitAudioContext"));
            function op(t1, e1, s, n) {
                var i, r = arguments.length, o = r < 3 ? e1 : null === n ? n = Object.getOwnPropertyDescriptor(e1, s) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t1, e1, s, n);
                else for(var a = t1.length - 1; 0 <= a; a--)(i = t1[a]) && (o = (r < 3 ? i(o) : 3 < r ? i(e1, s, o) : i(e1, s)) || o);
                return 3 < r && o && Object.defineProperty(e1, s, o), o;
            }
            function ap(t1, o, a, h) {
                return new (a = a || Promise)(function(s, e1) {
                    function n(t1) {
                        try {
                            r(h.next(t1));
                        } catch (t1) {
                            e1(t1);
                        }
                    }
                    function i(t1) {
                        try {
                            r(h.throw(t1));
                        } catch (t1) {
                            e1(t1);
                        }
                    }
                    function r(t1) {
                        var e1;
                        t1.done ? s(t1.value) : ((e1 = t1.value) instanceof a ? e1 : new a(function(t1) {
                            t1(e1);
                        })).then(n, i);
                    }
                    r((h = h.apply(t1, o || [])).next());
                });
            }
            Object.create, Object.create;
            class hp {
                constructor(t1, e1, s){
                    this._callback = t1, this._type = e1, this._updateInterval = s, this._createClock();
                }
                _createWorker() {
                    const t1 = new Blob([
                        `\n\t\t\t// the initial timeout time\n\t\t\tlet timeoutTime =  ${(1e3 * this._updateInterval).toFixed(1)};\n\t\t\t// onmessage callback\n\t\t\tself.onmessage = function(msg){\n\t\t\t\ttimeoutTime = parseInt(msg.data);\n\t\t\t};\n\t\t\t// the tick function which posts a message\n\t\t\t// and schedules a new tick\n\t\t\tfunction tick(){\n\t\t\t\tsetTimeout(tick, timeoutTime);\n\t\t\t\tself.postMessage('tick');\n\t\t\t}\n\t\t\t// call tick initially\n\t\t\ttick();\n\t\t\t`
                    ], {
                        type: "text/javascript"
                    }), e1 = URL.createObjectURL(t1), s = new Worker(e1);
                    s.onmessage = this._callback.bind(this), this._worker = s;
                }
                _createTimeout() {
                    this._timeout = setTimeout(()=>{
                        this._createTimeout(), this._callback();
                    }, 1e3 * this._updateInterval);
                }
                _createClock() {
                    if ("worker" === this._type) try {
                        this._createWorker();
                    } catch (t1) {
                        this._type = "timeout", this._createClock();
                    }
                    else "timeout" === this._type && this._createTimeout();
                }
                _disposeClock() {
                    this._timeout && clearTimeout(this._timeout), this._worker && (this._worker.terminate(), this._worker.onmessage = null);
                }
                get updateInterval() {
                    return this._updateInterval;
                }
                set updateInterval(t1) {
                    this._updateInterval = Math.max(t1, 128 / 44100), "worker" === this._type && this._worker.postMessage(Math.max(1e3 * t1, 1));
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    this._disposeClock(), this._type = t1, this._createClock();
                }
                dispose() {
                    this._disposeClock();
                }
            }
            function cp(t1) {
                return Lu(t1);
            }
            function lp(t1) {
                return ju(t1);
            }
            function up(t1) {
                return zu(t1);
            }
            function pp(t1) {
                return Pu(t1);
            }
            function dp(t1) {
                return t1 instanceof sl;
            }
            function fp(t1, ...e1) {
                if (!e1.length) return t1;
                var s, n, i = e1.shift();
                if (Ku(t1) && Ku(i)) for(const e1 in i)s = e1, n = i[e1], "value" === s || cp(n) || lp(n) || dp(n) ? t1[e1] = i[e1] : Ku(i[e1]) ? (t1[e1] || Object.assign(t1, {
                    [e1]: {}
                }), fp(t1[e1], i[e1])) : Object.assign(t1, {
                    [e1]: i[e1]
                });
                return fp(t1, ...e1);
            }
            function _p(e1, t1, s = [], n) {
                const i = {}, r = Array.from(t1);
                if (Ku(r[0]) && n && !Reflect.has(r[0], n) && (Object.keys(r[0]).some((t1)=>Reflect.has(e1, t1)) || (fp(i, {
                    [n]: r[0]
                }), s.splice(s.indexOf(n), 1), r.shift())), 1 === r.length && Ku(r[0])) fp(i, r[0]);
                else for(let t1 = 0; t1 < s.length; t1++)$u(r[t1]) && (i[s[t1]] = r[t1]);
                return fp(e1, i);
            }
            function mp(t1, e1) {
                return Yu(t1) ? e1 : t1;
            }
            function gp(e1, t1) {
                return t1.forEach((t1)=>{
                    Reflect.has(e1, t1) && delete e1[t1];
                }), e1;
            }
            class vp {
                constructor(){
                    this.debug = !1, this._wasDisposed = !1;
                }
                static getDefaults() {
                    return {};
                }
                log(...t1) {
                    (this.debug || ip && this.toString() === ip.TONE_DEBUG_CLASS) && Zu(this, ...t1);
                }
                dispose() {
                    return this._wasDisposed = !0, this;
                }
                get disposed() {
                    return this._wasDisposed;
                }
                toString() {
                    return this.name;
                }
            }
            vp.version = s;
            const yp = 1e-6;
            function xp(t1, e1) {
                return t1 > e1 + yp;
            }
            function wp(t1, e1) {
                return xp(t1, e1) || Tp(t1, e1);
            }
            function bp(t1, e1) {
                return t1 + yp < e1;
            }
            function Tp(t1, e1) {
                return Math.abs(t1 - e1) < yp;
            }
            function Sp(t1, e1, s) {
                return Math.max(Math.min(t1, s), e1);
            }
            class kp extends vp {
                constructor(){
                    super(), this.name = "Timeline", this._timeline = [];
                    var t1 = _p(kp.getDefaults(), arguments, [
                        "memory"
                    ]);
                    this.memory = t1.memory, this.increasing = t1.increasing;
                }
                static getDefaults() {
                    return {
                        memory: 1 / 0,
                        increasing: !1
                    };
                }
                get length() {
                    return this._timeline.length;
                }
                add(t1) {
                    var e1;
                    if (Bu(Reflect.has(t1, "time"), "Timeline: events must have a time attribute"), t1.time = t1.time.valueOf(), this.increasing && this.length ? (e1 = this._timeline[this.length - 1], Bu(wp(t1.time, e1.time), "The time must be greater than or equal to the last scheduled time"), this._timeline.push(t1)) : (e1 = this._search(t1.time), this._timeline.splice(e1 + 1, 0, t1)), this.length > this.memory) {
                        const t1 = this.length - this.memory;
                        this._timeline.splice(0, t1);
                    }
                    return this;
                }
                remove(t1) {
                    t1 = this._timeline.indexOf(t1);
                    return -1 !== t1 && this._timeline.splice(t1, 1), this;
                }
                get(t1, e1 = "time") {
                    e1 = this._search(t1, e1);
                    return -1 !== e1 ? this._timeline[e1] : null;
                }
                peek() {
                    return this._timeline[0];
                }
                shift() {
                    return this._timeline.shift();
                }
                getAfter(t1, e1 = "time") {
                    e1 = this._search(t1, e1);
                    return e1 + 1 < this._timeline.length ? this._timeline[e1 + 1] : null;
                }
                getBefore(t1) {
                    var e1 = this._timeline.length;
                    if (0 < e1 && this._timeline[e1 - 1].time < t1) return this._timeline[e1 - 1];
                    t1 = this._search(t1);
                    return 0 <= t1 - 1 ? this._timeline[t1 - 1] : null;
                }
                cancel(s) {
                    if (1 < this._timeline.length) {
                        let e1 = this._search(s);
                        if (0 <= e1) {
                            if (Tp(this._timeline[e1].time, s)) {
                                for(let t1 = e1; 0 <= t1 && Tp(this._timeline[t1].time, s); t1--)e1 = t1;
                                this._timeline = this._timeline.slice(0, e1);
                            } else this._timeline = this._timeline.slice(0, e1 + 1);
                        } else this._timeline = [];
                    } else 1 === this._timeline.length && wp(this._timeline[0].time, s) && (this._timeline = []);
                    return this;
                }
                cancelBefore(t1) {
                    t1 = this._search(t1);
                    return 0 <= t1 && (this._timeline = this._timeline.slice(t1 + 1)), this;
                }
                previousEvent(t1) {
                    t1 = this._timeline.indexOf(t1);
                    return 0 < t1 ? this._timeline[t1 - 1] : null;
                }
                _search(s, n = "time") {
                    if (0 === this._timeline.length) return -1;
                    let t1 = 0;
                    var e1 = this._timeline.length;
                    let i = e1;
                    if (0 < e1 && this._timeline[e1 - 1][n] <= s) return e1 - 1;
                    for(; t1 < i;){
                        let e1 = Math.floor(t1 + (i - t1) / 2);
                        var r = this._timeline[e1], o = this._timeline[e1 + 1];
                        if (Tp(r[n], s)) {
                            for(let t1 = e1; t1 < this._timeline.length && Tp(this._timeline[t1][n], s); t1++)e1 = t1;
                            return e1;
                        }
                        if (bp(r[n], s) && xp(o[n], s)) return e1;
                        xp(r[n], s) ? i = e1 : t1 = e1 + 1;
                    }
                    return -1;
                }
                _iterate(t1, e1 = 0, s = this._timeline.length - 1) {
                    this._timeline.slice(e1, s + 1).forEach(t1);
                }
                forEach(t1) {
                    return this._iterate(t1), this;
                }
                forEachBefore(t1, e1) {
                    t1 = this._search(t1);
                    return -1 !== t1 && this._iterate(e1, 0, t1), this;
                }
                forEachAfter(t1, e1) {
                    t1 = this._search(t1);
                    return this._iterate(e1, t1 + 1), this;
                }
                forEachBetween(t1, e1, s) {
                    let n = this._search(t1), i = this._search(e1);
                    return -1 !== n && -1 !== i ? (this._timeline[n].time !== t1 && (n += 1), this._timeline[i].time === e1 && --i, this._iterate(s, n, i)) : -1 === n && this._iterate(s, 0, i), this;
                }
                forEachFrom(t1, e1) {
                    let s = this._search(t1);
                    for(; 0 <= s && this._timeline[s].time >= t1;)s--;
                    return this._iterate(e1, s + 1), this;
                }
                forEachAtTime(s, n) {
                    var i = this._search(s);
                    if (-1 !== i && Tp(this._timeline[i].time, s)) {
                        let e1 = i;
                        for(let t1 = i; 0 <= t1 && Tp(this._timeline[t1].time, s); t1--)e1 = t1;
                        this._iterate((t1)=>{
                            n(t1);
                        }, e1, i);
                    }
                    return this;
                }
                dispose() {
                    return super.dispose(), this._timeline = [], this;
                }
            }
            const Cp = [];
            function Ap(t1) {
                Cp.push(t1);
            }
            const Dp = [];
            function Op(t1) {
                Dp.push(t1);
            }
            class Mp extends vp {
                constructor(){
                    super(...arguments), this.name = "Emitter";
                }
                on(t1, e1) {
                    return t1.split(/\W+/).forEach((t1)=>{
                        Yu(this._events) && (this._events = {}), this._events.hasOwnProperty(t1) || (this._events[t1] = []), this._events[t1].push(e1);
                    }), this;
                }
                once(e1, s) {
                    const n = (...t1)=>{
                        s(...t1), this.off(e1, n);
                    };
                    return this.on(e1, n), this;
                }
                off(t1, s) {
                    return t1.split(/\W+/).forEach((t1)=>{
                        if (Yu(this._events) && (this._events = {}), this._events.hasOwnProperty(t1)) {
                            if (Yu(s)) this._events[t1] = [];
                            else {
                                const e1 = this._events[t1];
                                for(let t1 = e1.length - 1; 0 <= t1; t1--)e1[t1] === s && e1.splice(t1, 1);
                            }
                        }
                    }), this;
                }
                emit(t1, ...s) {
                    if (this._events && this._events.hasOwnProperty(t1)) {
                        const n = this._events[t1].slice(0);
                        for(let t1 = 0, e1 = n.length; t1 < e1; t1++)n[t1].apply(this, s);
                    }
                    return this;
                }
                static mixin(s) {
                    [
                        "on",
                        "once",
                        "off",
                        "emit"
                    ].forEach((t1)=>{
                        var e1 = Object.getOwnPropertyDescriptor(Mp.prototype, t1);
                        Object.defineProperty(s.prototype, t1, e1);
                    });
                }
                dispose() {
                    return super.dispose(), this._events = void 0, this;
                }
            }
            class Ep extends Mp {
                constructor(){
                    super(...arguments), this.isOffline = !1;
                }
                toJSON() {
                    return {};
                }
            }
            class Rp extends Ep {
                constructor(){
                    super(), this.name = "Context", this._constants = new Map, this._timeouts = new kp, this._timeoutIds = 0, this._initialized = !1, this.isOffline = !1, this._workletModules = new Map;
                    var t1, e1 = _p(Rp.getDefaults(), arguments, [
                        "context"
                    ]);
                    e1.context ? this._context = e1.context : this._context = (t1 = {
                        latencyHint: e1.latencyHint
                    }, new wu(t1)), this._ticker = new hp(this.emit.bind(this, "tick"), e1.clockSource, e1.updateInterval), this.on("tick", this._timeoutLoop.bind(this)), this._context.onstatechange = ()=>{
                        this.emit("statechange", this.state);
                    }, this._setLatencyHint(e1.latencyHint), this.lookAhead = e1.lookAhead;
                }
                static getDefaults() {
                    return {
                        clockSource: "worker",
                        latencyHint: "interactive",
                        lookAhead: .1,
                        updateInterval: .05
                    };
                }
                initialize() {
                    var e1;
                    return this._initialized || (e1 = this, Cp.forEach((t1)=>t1(e1)), this._initialized = !0), this;
                }
                createAnalyser() {
                    return this._context.createAnalyser();
                }
                createOscillator() {
                    return this._context.createOscillator();
                }
                createBufferSource() {
                    return this._context.createBufferSource();
                }
                createBiquadFilter() {
                    return this._context.createBiquadFilter();
                }
                createBuffer(t1, e1, s) {
                    return this._context.createBuffer(t1, e1, s);
                }
                createChannelMerger(t1) {
                    return this._context.createChannelMerger(t1);
                }
                createChannelSplitter(t1) {
                    return this._context.createChannelSplitter(t1);
                }
                createConstantSource() {
                    return this._context.createConstantSource();
                }
                createConvolver() {
                    return this._context.createConvolver();
                }
                createDelay(t1) {
                    return this._context.createDelay(t1);
                }
                createDynamicsCompressor() {
                    return this._context.createDynamicsCompressor();
                }
                createGain() {
                    return this._context.createGain();
                }
                createIIRFilter(t1, e1) {
                    return this._context.createIIRFilter(t1, e1);
                }
                createPanner() {
                    return this._context.createPanner();
                }
                createPeriodicWave(t1, e1, s) {
                    return this._context.createPeriodicWave(t1, e1, s);
                }
                createStereoPanner() {
                    return this._context.createStereoPanner();
                }
                createWaveShaper() {
                    return this._context.createWaveShaper();
                }
                createMediaStreamSource(t1) {
                    return Bu(pp(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamSource(t1);
                }
                createMediaElementSource(t1) {
                    return Bu(pp(this._context), "Not available if OfflineAudioContext"), this._context.createMediaElementSource(t1);
                }
                createMediaStreamDestination() {
                    return Bu(pp(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamDestination();
                }
                decodeAudioData(t1) {
                    return this._context.decodeAudioData(t1);
                }
                get currentTime() {
                    return this._context.currentTime;
                }
                get state() {
                    return this._context.state;
                }
                get sampleRate() {
                    return this._context.sampleRate;
                }
                get listener() {
                    return this.initialize(), this._listener;
                }
                set listener(t1) {
                    Bu(!this._initialized, "The listener cannot be set after initialization."), this._listener = t1;
                }
                get transport() {
                    return this.initialize(), this._transport;
                }
                set transport(t1) {
                    Bu(!this._initialized, "The transport cannot be set after initialization."), this._transport = t1;
                }
                get draw() {
                    return this.initialize(), this._draw;
                }
                set draw(t1) {
                    Bu(!this._initialized, "Draw cannot be set after initialization."), this._draw = t1;
                }
                get destination() {
                    return this.initialize(), this._destination;
                }
                set destination(t1) {
                    Bu(!this._initialized, "The destination cannot be set after initialization."), this._destination = t1;
                }
                createAudioWorkletNode(t1, e1) {
                    var s;
                    return s = this.rawContext, t1, e1, Bu($u(Fu), "This node only works in a secure context (https or localhost)"), new Fu(s, t1, e1);
                }
                addAudioWorkletModule(t1, e1) {
                    return ap(this, void 0, void 0, function*() {
                        Bu($u(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)"), this._workletModules.has(e1) || this._workletModules.set(e1, this.rawContext.audioWorklet.addModule(t1)), yield this._workletModules.get(e1);
                    });
                }
                workletsAreReady() {
                    return ap(this, void 0, void 0, function*() {
                        const e1 = [];
                        this._workletModules.forEach((t1)=>e1.push(t1)), yield Promise.all(e1);
                    });
                }
                get updateInterval() {
                    return this._ticker.updateInterval;
                }
                set updateInterval(t1) {
                    this._ticker.updateInterval = t1;
                }
                get clockSource() {
                    return this._ticker.type;
                }
                set clockSource(t1) {
                    this._ticker.type = t1;
                }
                get latencyHint() {
                    return this._latencyHint;
                }
                _setLatencyHint(t1) {
                    let e1 = 0;
                    if (sp(this._latencyHint = t1)) switch(t1){
                        case "interactive":
                            e1 = .1;
                            break;
                        case "playback":
                            e1 = .5;
                            break;
                        case "balanced":
                            e1 = .25;
                    }
                    this.lookAhead = e1, this.updateInterval = e1 / 2;
                }
                get rawContext() {
                    return this._context;
                }
                now() {
                    return this._context.currentTime + this.lookAhead;
                }
                immediate() {
                    return this._context.currentTime;
                }
                resume() {
                    return pp(this._context) ? this._context.resume() : Promise.resolve();
                }
                close() {
                    return ap(this, void 0, void 0, function*() {
                        var e1;
                        pp(this._context) && (yield this._context.close()), this._initialized && (e1 = this, Dp.forEach((t1)=>t1(e1)));
                    });
                }
                getConstant(e1) {
                    if (this._constants.has(e1)) return this._constants.get(e1);
                    {
                        const t1 = this._context.createBuffer(1, 128, this._context.sampleRate), s = t1.getChannelData(0);
                        for(let t1 = 0; t1 < s.length; t1++)s[t1] = e1;
                        const n = this._context.createBufferSource();
                        return n.channelCount = 1, n.channelCountMode = "explicit", n.buffer = t1, n.loop = !0, n.start(0), this._constants.set(e1, n), n;
                    }
                }
                dispose() {
                    return super.dispose(), this._ticker.dispose(), this._timeouts.dispose(), Object.keys(this._constants).map((t1)=>this._constants[t1].disconnect()), this;
                }
                _timeoutLoop() {
                    var t1 = this.now();
                    let e1 = this._timeouts.peek();
                    for(; this._timeouts.length && e1 && e1.time <= t1;)e1.callback(), this._timeouts.shift(), e1 = this._timeouts.peek();
                }
                setTimeout(t1, e1) {
                    this._timeoutIds++;
                    var s = this.now();
                    return this._timeouts.add({
                        callback: t1,
                        id: this._timeoutIds,
                        time: s + e1
                    }), this._timeoutIds;
                }
                clearTimeout(e1) {
                    return this._timeouts.forEach((t1)=>{
                        t1.id === e1 && this._timeouts.remove(t1);
                    }), this;
                }
                clearInterval(t1) {
                    return this.clearTimeout(t1);
                }
                setInterval(e1, s) {
                    const n = ++this._timeoutIds, i = ()=>{
                        var t1 = this.now();
                        this._timeouts.add({
                            callback: ()=>{
                                e1(), i();
                            },
                            id: n,
                            time: t1 + s
                        });
                    };
                    return i(), n;
                }
            }
            function qp(e1, t1) {
                ep(t1) ? t1.forEach((t1)=>qp(e1, t1)) : Object.defineProperty(e1, t1, {
                    enumerable: !0,
                    writable: !1
                });
            }
            function Fp(e1, t1) {
                ep(t1) ? t1.forEach((t1)=>Fp(e1, t1)) : Object.defineProperty(e1, t1, {
                    writable: !0
                });
            }
            const Ip = ()=>{};
            class Vp extends vp {
                constructor(){
                    super(), this.name = "ToneAudioBuffer", this.onload = Ip;
                    var t1 = _p(Vp.getDefaults(), arguments, [
                        "url",
                        "onload",
                        "onerror"
                    ]);
                    this.reverse = t1.reverse, this.onload = t1.onload, t1.url && dp(t1.url) || t1.url instanceof Vp ? this.set(t1.url) : sp(t1.url) && this.load(t1.url).catch(t1.onerror);
                }
                static getDefaults() {
                    return {
                        onerror: Ip,
                        onload: Ip,
                        reverse: !1
                    };
                }
                get sampleRate() {
                    return (this._buffer || Lp()).sampleRate;
                }
                set(t1) {
                    return t1 instanceof Vp ? t1.loaded ? this._buffer = t1.get() : t1.onload = ()=>{
                        this.set(t1), this.onload(this);
                    } : this._buffer = t1, this._reversed && this._reverse(), this;
                }
                get() {
                    return this._buffer;
                }
                load(e1) {
                    return ap(this, void 0, void 0, function*() {
                        var t1 = Vp.load(e1).then((t1)=>{
                            this.set(t1), this.onload(this);
                        });
                        Vp.downloads.push(t1);
                        try {
                            yield t1;
                        } finally{
                            const e1 = Vp.downloads.indexOf(t1);
                            Vp.downloads.splice(e1, 1);
                        }
                        return this;
                    });
                }
                dispose() {
                    return super.dispose(), this._buffer = void 0, this;
                }
                fromArray(t1) {
                    const e1 = ep(t1) && 0 < t1[0].length, s = e1 ? t1.length : 1, n = (e1 ? t1[0] : t1).length, i = Lp(), r = i.createBuffer(s, n, i.sampleRate), o = e1 || 1 !== s ? t1 : [
                        t1
                    ];
                    for(let t1 = 0; t1 < s; t1++)r.copyToChannel(o[t1], t1);
                    return this._buffer = r, this;
                }
                toMono(t1) {
                    if (Ju(t1)) this.fromArray(this.toArray(t1));
                    else {
                        let e1 = new Float32Array(this.length);
                        const n = this.numberOfChannels;
                        for(let t1 = 0; t1 < n; t1++){
                            var s = this.toArray(t1);
                            for(let t1 = 0; t1 < s.length; t1++)e1[t1] += s[t1];
                        }
                        e1 = e1.map((t1)=>t1 / n), this.fromArray(e1);
                    }
                    return this;
                }
                toArray(e1) {
                    if (Ju(e1)) return this.getChannelData(e1);
                    if (1 === this.numberOfChannels) return this.toArray(0);
                    {
                        const e1 = [];
                        for(let t1 = 0; t1 < this.numberOfChannels; t1++)e1[t1] = this.getChannelData(t1);
                        return e1;
                    }
                }
                getChannelData(t1) {
                    return this._buffer ? this._buffer.getChannelData(t1) : new Float32Array(0);
                }
                slice(t1, e1 = this.duration) {
                    Bu(this.loaded, "Buffer is not loaded");
                    var s = Math.floor(t1 * this.sampleRate), n = Math.floor(e1 * this.sampleRate);
                    Bu(s < n, "The start time must be less than the end time");
                    const i = n - s, r = Lp().createBuffer(this.numberOfChannels, i, this.sampleRate);
                    for(let t1 = 0; t1 < this.numberOfChannels; t1++)r.copyToChannel(this.getChannelData(t1).subarray(s, n), t1);
                    return new Vp(r);
                }
                _reverse() {
                    if (this.loaded) for(let t1 = 0; t1 < this.numberOfChannels; t1++)this.getChannelData(t1).reverse();
                    return this;
                }
                get loaded() {
                    return 0 < this.length;
                }
                get duration() {
                    return this._buffer ? this._buffer.duration : 0;
                }
                get length() {
                    return this._buffer ? this._buffer.length : 0;
                }
                get numberOfChannels() {
                    return this._buffer ? this._buffer.numberOfChannels : 0;
                }
                get reverse() {
                    return this._reversed;
                }
                set reverse(t1) {
                    this._reversed !== t1 && (this._reversed = t1, this._reverse());
                }
                static fromArray(t1) {
                    return (new Vp).fromArray(t1);
                }
                static fromUrl(e1) {
                    return ap(this, void 0, void 0, function*() {
                        const t1 = new Vp;
                        return yield t1.load(e1);
                    });
                }
                static load(r) {
                    return ap(this, void 0, void 0, function*() {
                        const e1 = r.match(/\[([^\]\[]+\|.+)\]$/);
                        if (e1) {
                            const s = e1[1].split("|");
                            let t1 = s[0];
                            for (const r of s)if (Vp.supportsType(r)) {
                                t1 = r;
                                break;
                            }
                            r = r.replace(e1[0], t1);
                        }
                        const s = "" === Vp.baseUrl || Vp.baseUrl.endsWith("/") ? Vp.baseUrl : Vp.baseUrl + "/", t1 = document.createElement("a");
                        t1.href = s + r, t1.pathname = (t1.pathname + t1.hash).split("/").map(encodeURIComponent).join("/");
                        const n = yield fetch(t1.href);
                        if (!n.ok) throw new Error(`could not load url: ${r}`);
                        var i = yield n.arrayBuffer();
                        return yield Lp().decodeAudioData(i);
                    });
                }
                static supportsType(t1) {
                    t1 = t1.split("."), t1 = t1[t1.length - 1];
                    return "" !== document.createElement("audio").canPlayType("audio/" + t1);
                }
                static loaded() {
                    return ap(this, void 0, void 0, function*() {
                        for(yield Promise.resolve(); Vp.downloads.length;)yield Vp.downloads[0];
                    });
                }
            }
            Vp.baseUrl = "", Vp.downloads = [];
            class Np extends Rp {
                constructor(){
                    var t1, e1, s;
                    super({
                        clockSource: "offline",
                        context: up(arguments[0]) ? arguments[0] : (t1 = arguments[0], e1 = arguments[1] * arguments[2], s = arguments[2], new Nu(t1, e1, s)),
                        lookAhead: 0,
                        updateInterval: up(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
                    }), this.name = "OfflineContext", this._currentTime = 0, this.isOffline = !0, this._duration = up(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1];
                }
                now() {
                    return this._currentTime;
                }
                get currentTime() {
                    return this._currentTime;
                }
                _renderClock(s) {
                    return ap(this, void 0, void 0, function*() {
                        let t1 = 0;
                        for(; 0 <= this._duration - this._currentTime;){
                            this.emit("tick"), this._currentTime += 128 / this.sampleRate, t1++;
                            var e1 = Math.floor(this.sampleRate / 128);
                            s && t1 % e1 == 0 && (yield new Promise((t1)=>setTimeout(t1, 1)));
                        }
                    });
                }
                render(e1 = !0) {
                    return ap(this, void 0, void 0, function*() {
                        yield this.workletsAreReady(), yield this._renderClock(e1);
                        var t1 = yield this._context.startRendering();
                        return new Vp(t1);
                    });
                }
                close() {
                    return Promise.resolve();
                }
            }
            const Pp = new class extends Ep {
                constructor(){
                    super(...arguments), this.lookAhead = 0, this.latencyHint = 0, this.isOffline = !1;
                }
                createAnalyser() {
                    return {};
                }
                createOscillator() {
                    return {};
                }
                createBufferSource() {
                    return {};
                }
                createBiquadFilter() {
                    return {};
                }
                createBuffer(t1, e1, s) {
                    return {};
                }
                createChannelMerger(t1) {
                    return {};
                }
                createChannelSplitter(t1) {
                    return {};
                }
                createConstantSource() {
                    return {};
                }
                createConvolver() {
                    return {};
                }
                createDelay(t1) {
                    return {};
                }
                createDynamicsCompressor() {
                    return {};
                }
                createGain() {
                    return {};
                }
                createIIRFilter(t1, e1) {
                    return {};
                }
                createPanner() {
                    return {};
                }
                createPeriodicWave(t1, e1, s) {
                    return {};
                }
                createStereoPanner() {
                    return {};
                }
                createWaveShaper() {
                    return {};
                }
                createMediaStreamSource(t1) {
                    return {};
                }
                createMediaElementSource(t1) {
                    return {};
                }
                createMediaStreamDestination() {
                    return {};
                }
                decodeAudioData(t1) {
                    return Promise.resolve({});
                }
                createAudioWorkletNode(t1, e1) {
                    return {};
                }
                get rawContext() {
                    return {};
                }
                addAudioWorkletModule(t1, e1) {
                    return ap(this, void 0, void 0, function*() {
                        return Promise.resolve();
                    });
                }
                resume() {
                    return Promise.resolve();
                }
                setTimeout(t1, e1) {
                    return 0;
                }
                clearTimeout(t1) {
                    return this;
                }
                setInterval(t1, e1) {
                    return 0;
                }
                clearInterval(t1) {
                    return this;
                }
                getConstant(t1) {
                    return {};
                }
                get currentTime() {
                    return 0;
                }
                get state() {
                    return {};
                }
                get sampleRate() {
                    return 0;
                }
                get listener() {
                    return {};
                }
                get transport() {
                    return {};
                }
                get draw() {
                    return {};
                }
                set draw(t1) {}
                get destination() {
                    return {};
                }
                set destination(t1) {}
                now() {
                    return 0;
                }
                immediate() {
                    return 0;
                }
            };
            let jp = Pp;
            function Lp() {
                return jp === Pp && rp && zp(new Rp), jp;
            }
            function zp(t1, e1 = !1) {
                e1 && jp.dispose(), jp = pp(t1) ? new Rp(t1) : up(t1) ? new Np(t1) : t1;
            }
            if (ip && !ip.TONE_SILENCE_LOGGING) {
                let t1 = "v";
                "dev" === s && (t1 = "");
                const e1 = ` * Tone.js ${t1}${s} * `;
                console.log(`%c${e1}`, "background: #000; color: #fff");
            }
            function Wp(t1) {
                return Math.pow(10, t1 / 20);
            }
            function Bp(t1) {
                return Math.log(t1) / Math.LN10 * 20;
            }
            function Up(t1) {
                return Math.pow(2, t1 / 12);
            }
            let Gp = 440;
            function Qp(t1) {
                return Math.round(Zp(t1));
            }
            function Zp(t1) {
                return 69 + 12 * Math.log2(t1 / Gp);
            }
            function Xp(t1) {
                return Gp * Math.pow(2, (t1 - 69) / 12);
            }
            class Yp extends vp {
                constructor(t1, e1, s){
                    super(), this.defaultUnits = "s", this._val = e1, this._units = s, this.context = t1, this._expressions = this._getExpressions();
                }
                _getExpressions() {
                    return {
                        hz: {
                            method: (t1)=>this._frequencyToUnits(parseFloat(t1)),
                            regexp: /^(\d+(?:\.\d+)?)hz$/i
                        },
                        i: {
                            method: (t1)=>this._ticksToUnits(parseInt(t1, 10)),
                            regexp: /^(\d+)i$/i
                        },
                        m: {
                            method: (t1)=>this._beatsToUnits(parseInt(t1, 10) * this._getTimeSignature()),
                            regexp: /^(\d+)m$/i
                        },
                        n: {
                            method: (t1, e1)=>{
                                t1 = parseInt(t1, 10), e1 = "." === e1 ? 1.5 : 1;
                                return 1 === t1 ? this._beatsToUnits(this._getTimeSignature()) * e1 : this._beatsToUnits(4 / t1) * e1;
                            },
                            regexp: /^(\d+)n(\.?)$/i
                        },
                        number: {
                            method: (t1)=>this._expressions[this.defaultUnits].method.call(this, t1),
                            regexp: /^(\d+(?:\.\d+)?)$/
                        },
                        s: {
                            method: (t1)=>this._secondsToUnits(parseFloat(t1)),
                            regexp: /^(\d+(?:\.\d+)?)s$/
                        },
                        samples: {
                            method: (t1)=>parseInt(t1, 10) / this.context.sampleRate,
                            regexp: /^(\d+)samples$/
                        },
                        t: {
                            method: (t1)=>{
                                t1 = parseInt(t1, 10);
                                return this._beatsToUnits(8 / (3 * Math.floor(t1)));
                            },
                            regexp: /^(\d+)t$/i
                        },
                        tr: {
                            method: (t1, e1, s)=>{
                                let n = 0;
                                return t1 && "0" !== t1 && (n += this._beatsToUnits(this._getTimeSignature() * parseFloat(t1))), e1 && "0" !== e1 && (n += this._beatsToUnits(parseFloat(e1))), s && "0" !== s && (n += this._beatsToUnits(parseFloat(s) / 4)), n;
                            },
                            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
                        }
                    };
                }
                valueOf() {
                    if (this._val instanceof Yp && this.fromType(this._val), Yu(this._val)) return this._noArg();
                    if (sp(this._val) && Yu(this._units)) {
                        for(const t1 in this._expressions)if (this._expressions[t1].regexp.test(this._val.trim())) {
                            this._units = t1;
                            break;
                        }
                    } else if (Ku(this._val)) {
                        let t1 = 0;
                        for(const s in this._val){
                            var e1;
                            $u(this._val[s]) && (e1 = this._val[s], t1 += new this.constructor(this.context, s).valueOf() * e1);
                        }
                        return t1;
                    }
                    if ($u(this._units)) {
                        const n = this._expressions[this._units], i = this._val.toString().trim().match(n.regexp);
                        return i ? n.method.apply(this, i.slice(1)) : n.method.call(this, this._val);
                    }
                    return sp(this._val) ? parseFloat(this._val) : this._val;
                }
                _frequencyToUnits(t1) {
                    return 1 / t1;
                }
                _beatsToUnits(t1) {
                    return 60 / this._getBpm() * t1;
                }
                _secondsToUnits(t1) {
                    return t1;
                }
                _ticksToUnits(t1) {
                    return t1 * this._beatsToUnits(1) / this._getPPQ();
                }
                _noArg() {
                    return this._now();
                }
                _getBpm() {
                    return this.context.transport.bpm.value;
                }
                _getTimeSignature() {
                    return this.context.transport.timeSignature;
                }
                _getPPQ() {
                    return this.context.transport.PPQ;
                }
                fromType(t1) {
                    switch(this._units = void 0, this.defaultUnits){
                        case "s":
                            this._val = t1.toSeconds();
                            break;
                        case "i":
                            this._val = t1.toTicks();
                            break;
                        case "hz":
                            this._val = t1.toFrequency();
                            break;
                        case "midi":
                            this._val = t1.toMidi();
                    }
                    return this;
                }
                toFrequency() {
                    return 1 / this.toSeconds();
                }
                toSamples() {
                    return this.toSeconds() * this.context.sampleRate;
                }
                toMilliseconds() {
                    return 1e3 * this.toSeconds();
                }
            }
            class $p extends Yp {
                constructor(){
                    super(...arguments), this.name = "TimeClass";
                }
                _getExpressions() {
                    return Object.assign(super._getExpressions(), {
                        now: {
                            method: (t1)=>this._now() + new this.constructor(this.context, t1).valueOf(),
                            regexp: /^\+(.+)/
                        },
                        quantize: {
                            method: (t1)=>{
                                t1 = new $p(this.context, t1).valueOf();
                                return this._secondsToUnits(this.context.transport.nextSubdivision(t1));
                            },
                            regexp: /^@(.+)/
                        }
                    });
                }
                quantize(t1, e1 = 1) {
                    var s = new this.constructor(this.context, t1).valueOf(), t1 = this.valueOf();
                    return t1 + (Math.round(t1 / s) * s - t1) * e1;
                }
                toNotation() {
                    const s = this.toSeconds(), e1 = [
                        "1m"
                    ];
                    for(let t1 = 1; t1 < 9; t1++){
                        const n = Math.pow(2, t1);
                        e1.push(n + "n."), e1.push(n + "n"), e1.push(n + "t");
                    }
                    e1.push("0");
                    let n = e1[0], i = new $p(this.context, e1[0]).toSeconds();
                    return e1.forEach((t1)=>{
                        var e1 = new $p(this.context, t1).toSeconds();
                        Math.abs(e1 - s) < Math.abs(i - s) && (n = t1, i = e1);
                    }), n;
                }
                toBarsBeatsSixteenths() {
                    var t1 = this._beatsToUnits(1);
                    let e1 = this.valueOf() / t1;
                    e1 = parseFloat(e1.toFixed(4));
                    const s = Math.floor(e1 / this._getTimeSignature());
                    let n = e1 % 1 * 4;
                    e1 = Math.floor(e1) % this._getTimeSignature();
                    t1 = n.toString();
                    return 3 < t1.length && (n = parseFloat(parseFloat(t1).toFixed(3))), [
                        s,
                        e1,
                        n
                    ].join(":");
                }
                toTicks() {
                    var t1 = this._beatsToUnits(1);
                    return this.valueOf() / t1 * this._getPPQ();
                }
                toSeconds() {
                    return this.valueOf();
                }
                toMidi() {
                    return Qp(this.toFrequency());
                }
                _now() {
                    return this.context.now();
                }
            }
            class Hp extends $p {
                constructor(){
                    super(...arguments), this.name = "Frequency", this.defaultUnits = "hz";
                }
                static get A4() {
                    return Gp;
                }
                static set A4(t1) {
                    t1, Gp = t1;
                }
                _getExpressions() {
                    return Object.assign({}, super._getExpressions(), {
                        midi: {
                            regexp: /^(\d+(?:\.\d+)?midi)/,
                            method (t1) {
                                return "midi" === this.defaultUnits ? t1 : Hp.mtof(t1);
                            }
                        },
                        note: {
                            regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                            method (t1, e1) {
                                e1 = Jp[t1.toLowerCase()] + 12 * (parseInt(e1, 10) + 1);
                                return "midi" === this.defaultUnits ? e1 : Hp.mtof(e1);
                            }
                        },
                        tr: {
                            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                            method (t1, e1, s) {
                                let n = 1;
                                return t1 && "0" !== t1 && (n *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t1))), e1 && "0" !== e1 && (n *= this._beatsToUnits(parseFloat(e1))), s && "0" !== s && (n *= this._beatsToUnits(parseFloat(s) / 4)), n;
                            }
                        }
                    });
                }
                transpose(t1) {
                    return new Hp(this.context, this.valueOf() * Up(t1));
                }
                harmonize(t1) {
                    return t1.map((t1)=>this.transpose(t1));
                }
                toMidi() {
                    return Qp(this.valueOf());
                }
                toNote() {
                    var t1 = this.toFrequency(), t1 = Math.log2(t1 / Hp.A4);
                    let e1 = Math.round(12 * t1) + 57;
                    const s = Math.floor(e1 / 12);
                    return s < 0 && (e1 += -12 * s), Kp[e1 % 12] + s.toString();
                }
                toSeconds() {
                    return 1 / super.toSeconds();
                }
                toTicks() {
                    var t1 = this._beatsToUnits(1), t1 = this.valueOf() / t1;
                    return Math.floor(t1 * this._getPPQ());
                }
                _noArg() {
                    return 0;
                }
                _frequencyToUnits(t1) {
                    return t1;
                }
                _ticksToUnits(t1) {
                    return 1 / (60 * t1 / (this._getBpm() * this._getPPQ()));
                }
                _beatsToUnits(t1) {
                    return 1 / super._beatsToUnits(t1);
                }
                _secondsToUnits(t1) {
                    return 1 / t1;
                }
                static mtof(t1) {
                    return Xp(t1);
                }
                static ftom(t1) {
                    return Qp(t1);
                }
            }
            const Jp = {
                cbb: -2,
                cb: -1,
                c: 0,
                "c#": 1,
                cx: 2,
                dbb: 0,
                db: 1,
                d: 2,
                "d#": 3,
                dx: 4,
                ebb: 2,
                eb: 3,
                e: 4,
                "e#": 5,
                ex: 6,
                fbb: 3,
                fb: 4,
                f: 5,
                "f#": 6,
                fx: 7,
                gbb: 5,
                gb: 6,
                g: 7,
                "g#": 8,
                gx: 9,
                abb: 7,
                ab: 8,
                a: 9,
                "a#": 10,
                ax: 11,
                bbb: 9,
                bb: 10,
                b: 11,
                "b#": 12,
                bx: 13
            }, Kp = [
                "C",
                "C#",
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B"
            ];
            class td extends $p {
                constructor(){
                    super(...arguments), this.name = "TransportTime";
                }
                _now() {
                    return this.context.transport.seconds;
                }
            }
            class ed extends vp {
                constructor(){
                    super();
                    var t1 = _p(ed.getDefaults(), arguments, [
                        "context"
                    ]);
                    this.defaultContext ? this.context = this.defaultContext : this.context = t1.context;
                }
                static getDefaults() {
                    return {
                        context: Lp()
                    };
                }
                now() {
                    return this.context.currentTime + this.context.lookAhead;
                }
                immediate() {
                    return this.context.currentTime;
                }
                get sampleTime() {
                    return 1 / this.context.sampleRate;
                }
                get blockTime() {
                    return 128 / this.context.sampleRate;
                }
                toSeconds(t1) {
                    return new $p(this.context, t1).toSeconds();
                }
                toFrequency(t1) {
                    return new Hp(this.context, t1).toFrequency();
                }
                toTicks(t1) {
                    return new td(this.context, t1).toTicks();
                }
                _getPartialProperties(e1) {
                    const s = this.get();
                    return Object.keys(s).forEach((t1)=>{
                        Yu(e1[t1]) && delete s[t1];
                    }), s;
                }
                get() {
                    const s = this.constructor.getDefaults();
                    return Object.keys(s).forEach((t1)=>{
                        if (Reflect.has(this, t1)) {
                            const e1 = this[t1];
                            $u(e1) && $u(e1.value) && $u(e1.setValueAtTime) ? s[t1] = e1.value : e1 instanceof ed ? s[t1] = e1._getPartialProperties(s[t1]) : ep(e1) || Ju(e1) || sp(e1) || tp(e1) ? s[t1] = e1 : delete s[t1];
                        }
                    }), s;
                }
                set(e1) {
                    return Object.keys(e1).forEach((t1)=>{
                        Reflect.has(this, t1) && $u(this[t1]) && (this[t1] && $u(this[t1].value) && $u(this[t1].setValueAtTime) ? this[t1].value !== e1[t1] && (this[t1].value = e1[t1]) : this[t1] instanceof ed ? this[t1].set(e1[t1]) : this[t1] = e1[t1]);
                    }), this;
                }
            }
            class sd extends kp {
                constructor(t1 = "stopped"){
                    super(), this.name = "StateTimeline", this._initial = t1, this.setStateAtTime(this._initial, 0);
                }
                getValueAtTime(t1) {
                    t1 = this.get(t1);
                    return null !== t1 ? t1.state : this._initial;
                }
                setStateAtTime(t1, e1, s) {
                    return Uu(e1, 0), this.add(Object.assign({}, s, {
                        state: t1,
                        time: e1
                    })), this;
                }
                getLastState(e1, s) {
                    for(let t1 = this._search(s); 0 <= t1; t1--){
                        const s = this._timeline[t1];
                        if (s.state === e1) return s;
                    }
                }
                getNextState(e1, t1) {
                    const s = this._search(t1);
                    if (-1 !== s) for(let t1 = s; t1 < this._timeline.length; t1++){
                        const s = this._timeline[t1];
                        if (s.state === e1) return s;
                    }
                }
            }
            class nd extends ed {
                constructor(){
                    super(_p(nd.getDefaults(), arguments, [
                        "param",
                        "units",
                        "convert"
                    ])), this.name = "Param", this.overridden = !1, this._minOutput = 1e-7;
                    const t1 = _p(nd.getDefaults(), arguments, [
                        "param",
                        "units",
                        "convert"
                    ]);
                    for(Bu($u(t1.param) && (cp(t1.param) || t1.param instanceof nd), "param must be an AudioParam"); !cp(t1.param);)t1.param = t1.param._param;
                    this._swappable = !!$u(t1.swappable) && t1.swappable, this._swappable ? (this.input = this.context.createGain(), this._param = t1.param, this.input.connect(this._param)) : this._param = this.input = t1.param, this._events = new kp(1e3), this._initialValue = this._param.defaultValue, this.units = t1.units, this.convert = t1.convert, this._minValue = t1.minValue, this._maxValue = t1.maxValue, $u(t1.value) && t1.value !== this._toType(this._initialValue) && this.setValueAtTime(t1.value, 0);
                }
                static getDefaults() {
                    return Object.assign(ed.getDefaults(), {
                        convert: !0,
                        units: "number"
                    });
                }
                get value() {
                    var t1 = this.now();
                    return this.getValueAtTime(t1);
                }
                set value(t1) {
                    this.cancelScheduledValues(this.now()), this.setValueAtTime(t1, this.now());
                }
                get minValue() {
                    return $u(this._minValue) ? this._minValue : "time" === this.units || "frequency" === this.units || "normalRange" === this.units || "positive" === this.units || "transportTime" === this.units || "ticks" === this.units || "bpm" === this.units || "hertz" === this.units || "samples" === this.units ? 0 : "audioRange" === this.units ? -1 : "decibels" === this.units ? -1 / 0 : this._param.minValue;
                }
                get maxValue() {
                    return $u(this._maxValue) ? this._maxValue : "normalRange" === this.units || "audioRange" === this.units ? 1 : this._param.maxValue;
                }
                _is(t1, e1) {
                    return this.units === e1;
                }
                _assertRange(t1) {
                    return $u(this.maxValue) && $u(this.minValue) && Uu(t1, this._fromType(this.minValue), this._fromType(this.maxValue)), t1;
                }
                _fromType(t1) {
                    return this.convert && !this.overridden ? this._is(t1, "time") ? this.toSeconds(t1) : this._is(t1, "decibels") ? Wp(t1) : this._is(t1, "frequency") ? this.toFrequency(t1) : t1 : this.overridden ? 0 : t1;
                }
                _toType(t1) {
                    return this.convert && "decibels" === this.units ? Bp(t1) : t1;
                }
                setValueAtTime(t1, e1) {
                    var s = this.toSeconds(e1), n = this._fromType(t1);
                    return Bu(isFinite(n) && isFinite(s), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(t1)}, ${JSON.stringify(e1)}`), this._assertRange(n), this.log(this.units, "setValueAtTime", t1, s), this._events.add({
                        time: s,
                        type: "setValueAtTime",
                        value: n
                    }), this._param.setValueAtTime(n, s), this;
                }
                getValueAtTime(t1) {
                    const e1 = Math.max(this.toSeconds(t1), 0), s = this._events.getAfter(e1), n = this._events.get(e1);
                    let i = this._initialValue;
                    if (null === n) i = this._initialValue;
                    else if ("setTargetAtTime" !== n.type || null !== s && "setValueAtTime" !== s.type) {
                        if (null === s) i = n.value;
                        else if ("linearRampToValueAtTime" === s.type || "exponentialRampToValueAtTime" === s.type) {
                            let t1 = n.value;
                            if ("setTargetAtTime" === n.type) {
                                const e1 = this._events.getBefore(n.time);
                                t1 = null === e1 ? this._initialValue : e1.value;
                            }
                            i = "linearRampToValueAtTime" === s.type ? this._linearInterpolate(n.time, t1, s.time, s.value, e1) : this._exponentialInterpolate(n.time, t1, s.time, s.value, e1);
                        } else i = n.value;
                    } else {
                        const r = this._events.getBefore(n.time);
                        t1 = null === r ? this._initialValue : r.value;
                        "setTargetAtTime" === n.type && (i = this._exponentialApproach(n.time, t1, n.value, n.constant, e1));
                    }
                    return this._toType(i);
                }
                setRampPoint(t1) {
                    t1 = this.toSeconds(t1);
                    let e1 = this.getValueAtTime(t1);
                    return this.cancelAndHoldAtTime(t1), 0 === this._fromType(e1) && (e1 = this._toType(this._minOutput)), this.setValueAtTime(e1, t1), this;
                }
                linearRampToValueAtTime(t1, e1) {
                    var s = this._fromType(t1), n = this.toSeconds(e1);
                    return Bu(isFinite(s) && isFinite(n), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t1)}, ${JSON.stringify(e1)}`), this._assertRange(s), this._events.add({
                        time: n,
                        type: "linearRampToValueAtTime",
                        value: s
                    }), this.log(this.units, "linearRampToValueAtTime", t1, n), this._param.linearRampToValueAtTime(s, n), this;
                }
                exponentialRampToValueAtTime(t1, e1) {
                    let s = this._fromType(t1);
                    s = Tp(s, 0) ? this._minOutput : s, this._assertRange(s);
                    var n = this.toSeconds(e1);
                    return Bu(isFinite(s) && isFinite(n), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t1)}, ${JSON.stringify(e1)}`), this._events.add({
                        time: n,
                        type: "exponentialRampToValueAtTime",
                        value: s
                    }), this.log(this.units, "exponentialRampToValueAtTime", t1, n), this._param.exponentialRampToValueAtTime(s, n), this;
                }
                exponentialRampTo(t1, e1, s) {
                    return s = this.toSeconds(s), this.setRampPoint(s), this.exponentialRampToValueAtTime(t1, s + this.toSeconds(e1)), this;
                }
                linearRampTo(t1, e1, s) {
                    return s = this.toSeconds(s), this.setRampPoint(s), this.linearRampToValueAtTime(t1, s + this.toSeconds(e1)), this;
                }
                targetRampTo(t1, e1, s) {
                    return s = this.toSeconds(s), this.setRampPoint(s), this.exponentialApproachValueAtTime(t1, s, e1), this;
                }
                exponentialApproachValueAtTime(t1, e1, s) {
                    e1 = this.toSeconds(e1), s = this.toSeconds(s);
                    var n = Math.log(s + 1) / Math.log(200);
                    return this.setTargetAtTime(t1, e1, n), this.cancelAndHoldAtTime(e1 + .9 * s), this.linearRampToValueAtTime(t1, e1 + s), this;
                }
                setTargetAtTime(t1, e1, s) {
                    var n = this._fromType(t1);
                    Bu(isFinite(s) && 0 < s, "timeConstant must be a number greater than 0");
                    var i = this.toSeconds(e1);
                    return this._assertRange(n), Bu(isFinite(n) && isFinite(i), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t1)}, ${JSON.stringify(e1)}`), this._events.add({
                        constant: s,
                        time: i,
                        type: "setTargetAtTime",
                        value: n
                    }), this.log(this.units, "setTargetAtTime", t1, i, s), this._param.setTargetAtTime(n, i, s), this;
                }
                setValueCurveAtTime(e1, s, t1, n = 1) {
                    t1 = this.toSeconds(t1), s = this.toSeconds(s);
                    const i = this._fromType(e1[0]) * n;
                    this.setValueAtTime(this._toType(i), s);
                    var r = t1 / (e1.length - 1);
                    for(let t1 = 1; t1 < e1.length; t1++){
                        const i = this._fromType(e1[t1]) * n;
                        this.linearRampToValueAtTime(this._toType(i), s + t1 * r);
                    }
                    return this;
                }
                cancelScheduledValues(t1) {
                    var e1 = this.toSeconds(t1);
                    return Bu(isFinite(e1), `Invalid argument to cancelScheduledValues: ${JSON.stringify(t1)}`), this._events.cancel(e1), this._param.cancelScheduledValues(e1), this.log(this.units, "cancelScheduledValues", e1), this;
                }
                cancelAndHoldAtTime(t1) {
                    var e1 = this.toSeconds(t1), s = this._fromType(this.getValueAtTime(e1));
                    Bu(isFinite(e1), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t1)}`), this.log(this.units, "cancelAndHoldAtTime", e1, "value=" + s);
                    var n = this._events.get(e1), t1 = this._events.getAfter(e1);
                    return n && Tp(n.time, e1) ? t1 ? (this._param.cancelScheduledValues(t1.time), this._events.cancel(t1.time)) : (this._param.cancelAndHoldAtTime(e1), this._events.cancel(e1 + this.sampleTime)) : t1 && (this._param.cancelScheduledValues(t1.time), this._events.cancel(t1.time), "linearRampToValueAtTime" === t1.type ? this.linearRampToValueAtTime(this._toType(s), e1) : "exponentialRampToValueAtTime" === t1.type && this.exponentialRampToValueAtTime(this._toType(s), e1)), this._events.add({
                        time: e1,
                        type: "setValueAtTime",
                        value: s
                    }), this._param.setValueAtTime(s, e1), this;
                }
                rampTo(t1, e1 = .1, s) {
                    return "frequency" === this.units || "bpm" === this.units || "decibels" === this.units ? this.exponentialRampTo(t1, e1, s) : this.linearRampTo(t1, e1, s), this;
                }
                apply(e1) {
                    var s = this.context.currentTime;
                    e1.setValueAtTime(this.getValueAtTime(s), s);
                    var t1 = this._events.get(s);
                    if (t1 && "setTargetAtTime" === t1.type) {
                        var t1 = this._events.getAfter(t1.time), n = t1 ? t1.time : s + 2, i = (n - s) / 10;
                        for(let t1 = s; t1 < n; t1 += i)e1.linearRampToValueAtTime(this.getValueAtTime(t1), t1);
                    }
                    return this._events.forEachAfter(this.context.currentTime, (t1)=>{
                        "cancelScheduledValues" === t1.type ? e1.cancelScheduledValues(t1.time) : "setTargetAtTime" === t1.type ? e1.setTargetAtTime(t1.value, t1.time, t1.constant) : e1[t1.type](t1.value, t1.time);
                    }), this;
                }
                setParam(t1) {
                    Bu(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
                    const e1 = this.input;
                    return e1.disconnect(this._param), this.apply(t1), this._param = t1, e1.connect(this._param), this;
                }
                dispose() {
                    return super.dispose(), this._events.dispose(), this;
                }
                get defaultValue() {
                    return this._toType(this._param.defaultValue);
                }
                _exponentialApproach(t1, e1, s, n, i) {
                    return s + (e1 - s) * Math.exp(-(i - t1) / n);
                }
                _linearInterpolate(t1, e1, s, n, i) {
                    return e1 + (i - t1) / (s - t1) * (n - e1);
                }
                _exponentialInterpolate(t1, e1, s, n, i) {
                    return e1 * Math.pow(n / e1, (i - t1) / (s - t1));
                }
            }
            class id extends ed {
                constructor(){
                    super(...arguments), this._internalChannels = [];
                }
                get numberOfInputs() {
                    return $u(this.input) ? cp(this.input) || this.input instanceof nd ? 1 : this.input.numberOfInputs : 0;
                }
                get numberOfOutputs() {
                    return $u(this.output) ? this.output.numberOfOutputs : 0;
                }
                _isAudioNode(t1) {
                    return $u(t1) && (t1 instanceof id || lp(t1));
                }
                _getInternalNodes() {
                    const t1 = this._internalChannels.slice(0);
                    return this._isAudioNode(this.input) && t1.push(this.input), this._isAudioNode(this.output) && this.input !== this.output && t1.push(this.output), t1;
                }
                _setChannelProperties(e1) {
                    this._getInternalNodes().forEach((t1)=>{
                        t1.channelCount = e1.channelCount, t1.channelCountMode = e1.channelCountMode, t1.channelInterpretation = e1.channelInterpretation;
                    });
                }
                _getChannelProperties() {
                    var t1 = this._getInternalNodes();
                    Bu(0 < t1.length, "ToneAudioNode does not have any internal nodes");
                    t1 = t1[0];
                    return {
                        channelCount: t1.channelCount,
                        channelCountMode: t1.channelCountMode,
                        channelInterpretation: t1.channelInterpretation
                    };
                }
                get channelCount() {
                    return this._getChannelProperties().channelCount;
                }
                set channelCount(t1) {
                    var e1 = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e1, {
                        channelCount: t1
                    }));
                }
                get channelCountMode() {
                    return this._getChannelProperties().channelCountMode;
                }
                set channelCountMode(t1) {
                    var e1 = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e1, {
                        channelCountMode: t1
                    }));
                }
                get channelInterpretation() {
                    return this._getChannelProperties().channelInterpretation;
                }
                set channelInterpretation(t1) {
                    var e1 = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e1, {
                        channelInterpretation: t1
                    }));
                }
                connect(t1, e1 = 0, s = 0) {
                    return od(this, t1, e1, s), this;
                }
                toDestination() {
                    return this.connect(this.context.destination), this;
                }
                toMaster() {
                    return Xu("toMaster() has been renamed toDestination()"), this.toDestination();
                }
                disconnect(t1, e1 = 0, s = 0) {
                    return ad(this, t1, e1, s), this;
                }
                chain(...t1) {
                    return rd(this, ...t1), this;
                }
                fan(...t1) {
                    return t1.forEach((t1)=>this.connect(t1)), this;
                }
                dispose() {
                    return super.dispose(), $u(this.input) && (this.input instanceof id ? this.input.dispose() : lp(this.input) && this.input.disconnect()), $u(this.output) && (this.output instanceof id ? this.output.dispose() : lp(this.output) && this.output.disconnect()), this._internalChannels = [], this;
                }
            }
            function rd(...t1) {
                var e1 = t1.shift();
                t1.reduce((t1, e1)=>(t1 instanceof id ? t1.connect(e1) : lp(t1) && od(t1, e1), e1), e1);
            }
            function od(t1, e1, s = 0, n = 0) {
                for(Bu($u(t1), "Cannot connect from undefined node"), Bu($u(e1), "Cannot connect to undefined node"), (e1 instanceof id || lp(e1)) && Bu(0 < e1.numberOfInputs, "Cannot connect to node with no inputs"), Bu(0 < t1.numberOfOutputs, "Cannot connect from node with no outputs"); e1 instanceof id || e1 instanceof nd;)$u(e1.input) && (e1 = e1.input);
                for(; t1 instanceof id;)$u(t1.output) && (t1 = t1.output);
                cp(e1) ? t1.connect(e1, s) : t1.connect(e1, s, n);
            }
            function ad(t1, e1, s = 0, n = 0) {
                if ($u(e1)) for(; e1 instanceof id;)e1 = e1.input;
                for(; !lp(t1);)$u(t1.output) && (t1 = t1.output);
                cp(e1) ? t1.disconnect(e1, s) : lp(e1) ? t1.disconnect(e1, s, n) : t1.disconnect();
            }
            class hd extends id {
                constructor(){
                    super(_p(hd.getDefaults(), arguments, [
                        "gain",
                        "units"
                    ])), this.name = "Gain", this._gainNode = this.context.createGain(), this.input = this._gainNode, this.output = this._gainNode;
                    var t1 = _p(hd.getDefaults(), arguments, [
                        "gain",
                        "units"
                    ]);
                    this.gain = new nd({
                        context: this.context,
                        convert: t1.convert,
                        param: this._gainNode.gain,
                        units: t1.units,
                        value: t1.gain,
                        minValue: t1.minValue,
                        maxValue: t1.maxValue
                    }), qp(this, "gain");
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        convert: !0,
                        gain: 1,
                        units: "gain"
                    });
                }
                dispose() {
                    return super.dispose(), this._gainNode.disconnect(), this.gain.dispose(), this;
                }
            }
            class cd extends id {
                constructor(t1){
                    super(t1), this.onended = Ip, this._startTime = -1, this._stopTime = -1, this._timeout = -1, this.output = new hd({
                        context: this.context,
                        gain: 0
                    }), this._gainNode = this.output, this.getStateAtTime = function(t1) {
                        t1 = this.toSeconds(t1);
                        return -1 !== this._startTime && t1 >= this._startTime && (-1 === this._stopTime || t1 <= this._stopTime) ? "started" : "stopped";
                    }, this._fadeIn = t1.fadeIn, this._fadeOut = t1.fadeOut, this._curve = t1.curve, this.onended = t1.onended;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        curve: "linear",
                        fadeIn: 0,
                        fadeOut: 0,
                        onended: Ip
                    });
                }
                _startGain(t1, e1 = 1) {
                    Bu(-1 === this._startTime, "Source cannot be started more than once");
                    var s = this.toSeconds(this._fadeIn);
                    return this._startTime = t1 + s, this._startTime = Math.max(this._startTime, this.context.currentTime), 0 < s ? (this._gainNode.gain.setValueAtTime(0, t1), "linear" === this._curve ? this._gainNode.gain.linearRampToValueAtTime(e1, t1 + s) : this._gainNode.gain.exponentialApproachValueAtTime(e1, t1, s)) : this._gainNode.gain.setValueAtTime(e1, t1), this;
                }
                stop(t1) {
                    return this.log("stop", t1), this._stopGain(this.toSeconds(t1)), this;
                }
                _stopGain(t1) {
                    Bu(-1 !== this._startTime, "'start' must be called before 'stop'"), this.cancelStop();
                    const e1 = this.toSeconds(this._fadeOut);
                    return this._stopTime = this.toSeconds(t1) + e1, this._stopTime = Math.max(this._stopTime, this.context.currentTime), 0 < e1 ? "linear" === this._curve ? this._gainNode.gain.linearRampTo(0, e1, t1) : this._gainNode.gain.targetRampTo(0, e1, t1) : (this._gainNode.gain.cancelAndHoldAtTime(t1), this._gainNode.gain.setValueAtTime(0, t1)), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout(()=>{
                        var t1 = "exponential" === this._curve ? 2 * e1 : 0;
                        this._stopSource(this.now() + t1), this._onended();
                    }, this._stopTime - this.context.currentTime), this;
                }
                _onended() {
                    var t1;
                    this.onended === Ip || (this.onended(this), this.onended = Ip, this.context.isOffline) || (t1 = ()=>this.dispose(), void 0 !== window.requestIdleCallback ? window.requestIdleCallback(t1) : setTimeout(t1, 1e3));
                }
                get state() {
                    return this.getStateAtTime(this.now());
                }
                cancelStop() {
                    return this.log("cancelStop"), Bu(-1 !== this._startTime, "Source is not started"), this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1, this;
                }
                dispose() {
                    return super.dispose(), this._gainNode.dispose(), this.onended = Ip, this;
                }
            }
            class ld extends cd {
                constructor(){
                    super(_p(ld.getDefaults(), arguments, [
                        "offset"
                    ])), this.name = "ToneConstantSource", this._source = this.context.createConstantSource();
                    var t1 = _p(ld.getDefaults(), arguments, [
                        "offset"
                    ]);
                    od(this._source, this._gainNode), this.offset = new nd({
                        context: this.context,
                        convert: t1.convert,
                        param: this._source.offset,
                        units: t1.units,
                        value: t1.offset,
                        minValue: t1.minValue,
                        maxValue: t1.maxValue
                    });
                }
                static getDefaults() {
                    return Object.assign(cd.getDefaults(), {
                        convert: !0,
                        offset: 1,
                        units: "number"
                    });
                }
                start(t1) {
                    t1 = this.toSeconds(t1);
                    return this.log("start", t1), this._startGain(t1), this._source.start(t1), this;
                }
                _stopSource(t1) {
                    this._source.stop(t1);
                }
                dispose() {
                    return super.dispose(), "started" === this.state && this.stop(), this._source.disconnect(), this.offset.dispose(), this;
                }
            }
            class ud extends id {
                constructor(){
                    super(_p(ud.getDefaults(), arguments, [
                        "value",
                        "units"
                    ])), this.name = "Signal", this.override = !0;
                    var t1 = _p(ud.getDefaults(), arguments, [
                        "value",
                        "units"
                    ]);
                    this.output = this._constantSource = new ld({
                        context: this.context,
                        convert: t1.convert,
                        offset: t1.value,
                        units: t1.units,
                        minValue: t1.minValue,
                        maxValue: t1.maxValue
                    }), this._constantSource.start(0), this.input = this._param = this._constantSource.offset;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        convert: !0,
                        units: "number",
                        value: 0
                    });
                }
                connect(t1, e1 = 0, s = 0) {
                    return pd(this, t1, e1, s), this;
                }
                dispose() {
                    return super.dispose(), this._param.dispose(), this._constantSource.dispose(), this;
                }
                setValueAtTime(t1, e1) {
                    return this._param.setValueAtTime(t1, e1), this;
                }
                getValueAtTime(t1) {
                    return this._param.getValueAtTime(t1);
                }
                setRampPoint(t1) {
                    return this._param.setRampPoint(t1), this;
                }
                linearRampToValueAtTime(t1, e1) {
                    return this._param.linearRampToValueAtTime(t1, e1), this;
                }
                exponentialRampToValueAtTime(t1, e1) {
                    return this._param.exponentialRampToValueAtTime(t1, e1), this;
                }
                exponentialRampTo(t1, e1, s) {
                    return this._param.exponentialRampTo(t1, e1, s), this;
                }
                linearRampTo(t1, e1, s) {
                    return this._param.linearRampTo(t1, e1, s), this;
                }
                targetRampTo(t1, e1, s) {
                    return this._param.targetRampTo(t1, e1, s), this;
                }
                exponentialApproachValueAtTime(t1, e1, s) {
                    return this._param.exponentialApproachValueAtTime(t1, e1, s), this;
                }
                setTargetAtTime(t1, e1, s) {
                    return this._param.setTargetAtTime(t1, e1, s), this;
                }
                setValueCurveAtTime(t1, e1, s, n) {
                    return this._param.setValueCurveAtTime(t1, e1, s, n), this;
                }
                cancelScheduledValues(t1) {
                    return this._param.cancelScheduledValues(t1), this;
                }
                cancelAndHoldAtTime(t1) {
                    return this._param.cancelAndHoldAtTime(t1), this;
                }
                rampTo(t1, e1, s) {
                    return this._param.rampTo(t1, e1, s), this;
                }
                get value() {
                    return this._param.value;
                }
                set value(t1) {
                    this._param.value = t1;
                }
                get convert() {
                    return this._param.convert;
                }
                set convert(t1) {
                    this._param.convert = t1;
                }
                get units() {
                    return this._param.units;
                }
                get overridden() {
                    return this._param.overridden;
                }
                set overridden(t1) {
                    this._param.overridden = t1;
                }
                get maxValue() {
                    return this._param.maxValue;
                }
                get minValue() {
                    return this._param.minValue;
                }
                apply(t1) {
                    return this._param.apply(t1), this;
                }
            }
            function pd(t1, e1, s, n) {
                (e1 instanceof nd || cp(e1) || e1 instanceof ud && e1.override) && (e1.cancelScheduledValues(0), e1.setValueAtTime(0, 0), e1 instanceof ud && (e1.overridden = !0)), od(t1, e1, s, n);
            }
            class dd extends nd {
                constructor(){
                    super(_p(dd.getDefaults(), arguments, [
                        "value"
                    ])), this.name = "TickParam", this._events = new kp(1 / 0), this._multiplier = 1;
                    var t1 = _p(dd.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._multiplier = t1.multiplier, this._events.cancel(0), this._events.add({
                        ticks: 0,
                        time: 0,
                        type: "setValueAtTime",
                        value: this._fromType(t1.value)
                    }), this.setValueAtTime(t1.value, 0);
                }
                static getDefaults() {
                    return Object.assign(nd.getDefaults(), {
                        multiplier: 1,
                        units: "hertz",
                        value: 1
                    });
                }
                setTargetAtTime(t1, e1, s) {
                    e1 = this.toSeconds(e1), this.setRampPoint(e1);
                    const n = this._fromType(t1), i = this._events.get(e1), r = Math.round(Math.max(1 / s, 1));
                    for(let t1 = 0; t1 <= r; t1++){
                        const r = s * t1 + e1, o = this._exponentialApproach(i.time, i.value, n, s, r);
                        this.linearRampToValueAtTime(this._toType(o), r);
                    }
                    return this;
                }
                setValueAtTime(t1, e1) {
                    var s = this.toSeconds(e1);
                    super.setValueAtTime(t1, e1);
                    const n = this._events.get(s), i = this._events.previousEvent(n), r = this._getTicksUntilEvent(i, s);
                    return n.ticks = Math.max(r, 0), this;
                }
                linearRampToValueAtTime(t1, e1) {
                    var s = this.toSeconds(e1);
                    super.linearRampToValueAtTime(t1, e1);
                    const n = this._events.get(s), i = this._events.previousEvent(n), r = this._getTicksUntilEvent(i, s);
                    return n.ticks = Math.max(r, 0), this;
                }
                exponentialRampToValueAtTime(t1, e1) {
                    e1 = this.toSeconds(e1);
                    const s = this._fromType(t1), n = this._events.get(e1), i = Math.round(Math.max(10 * (e1 - n.time), 1)), r = (e1 - n.time) / i;
                    for(let t1 = 0; t1 <= i; t1++){
                        const i = r * t1 + n.time, o = this._exponentialInterpolate(n.time, n.value, e1, s, i);
                        this.linearRampToValueAtTime(this._toType(o), i);
                    }
                    return this;
                }
                _getTicksUntilEvent(t1, e1) {
                    if (null === t1) t1 = {
                        ticks: 0,
                        time: 0,
                        type: "setValueAtTime",
                        value: 0
                    };
                    else if (Yu(t1.ticks)) {
                        const e1 = this._events.previousEvent(t1);
                        t1.ticks = this._getTicksUntilEvent(e1, t1.time);
                    }
                    var s = this._fromType(this.getValueAtTime(t1.time));
                    let n = this._fromType(this.getValueAtTime(e1));
                    var i = this._events.get(e1);
                    return i && i.time === e1 && "setValueAtTime" === i.type && (n = this._fromType(this.getValueAtTime(e1 - this.sampleTime))), .5 * (e1 - t1.time) * (s + n) + t1.ticks;
                }
                getTicksAtTime(t1) {
                    var e1 = this.toSeconds(t1), t1 = this._events.get(e1);
                    return Math.max(this._getTicksUntilEvent(t1, e1), 0);
                }
                getDurationOfTicks(t1, e1) {
                    var s = this.toSeconds(e1), e1 = this.getTicksAtTime(e1);
                    return this.getTimeOfTick(e1 + t1) - s;
                }
                getTimeOfTick(t1) {
                    var e1 = this._events.get(t1, "ticks"), s = this._events.getAfter(t1, "ticks");
                    if (e1 && e1.ticks === t1) return e1.time;
                    if (e1 && s && "linearRampToValueAtTime" === s.type && e1.value !== s.value) {
                        var n = this._fromType(this.getValueAtTime(e1.time)), i = (this._fromType(this.getValueAtTime(s.time)) - n) / (s.time - e1.time), r = Math.sqrt(Math.pow(n, 2) - 2 * i * (e1.ticks - t1)), s = (-n + r) / i;
                        return (0 < s ? s : (-n - r) / i) + e1.time;
                    }
                    return e1 ? 0 === e1.value ? 1 / 0 : e1.time + (t1 - e1.ticks) / e1.value : t1 / this._initialValue;
                }
                ticksToTime(t1, e1) {
                    return this.getDurationOfTicks(t1, e1);
                }
                timeToTicks(t1, e1) {
                    var s = this.toSeconds(e1), e1 = this.toSeconds(t1), t1 = this.getTicksAtTime(s);
                    return this.getTicksAtTime(s + e1) - t1;
                }
                _fromType(t1) {
                    return "bpm" === this.units && this.multiplier ? 1 / (60 / t1 / this.multiplier) : super._fromType(t1);
                }
                _toType(t1) {
                    return "bpm" === this.units && this.multiplier ? t1 / this.multiplier * 60 : super._toType(t1);
                }
                get multiplier() {
                    return this._multiplier;
                }
                set multiplier(t1) {
                    var e1 = this.value;
                    this._multiplier = t1, this.cancelScheduledValues(0), this.setValueAtTime(e1, 0);
                }
            }
            class fd extends ud {
                constructor(){
                    super(_p(fd.getDefaults(), arguments, [
                        "value"
                    ])), this.name = "TickSignal";
                    var t1 = _p(fd.getDefaults(), arguments, [
                        "value"
                    ]);
                    this.input = this._param = new dd({
                        context: this.context,
                        convert: t1.convert,
                        multiplier: t1.multiplier,
                        param: this._constantSource.offset,
                        units: t1.units,
                        value: t1.value
                    });
                }
                static getDefaults() {
                    return Object.assign(ud.getDefaults(), {
                        multiplier: 1,
                        units: "hertz",
                        value: 1
                    });
                }
                ticksToTime(t1, e1) {
                    return this._param.ticksToTime(t1, e1);
                }
                timeToTicks(t1, e1) {
                    return this._param.timeToTicks(t1, e1);
                }
                getTimeOfTick(t1) {
                    return this._param.getTimeOfTick(t1);
                }
                getDurationOfTicks(t1, e1) {
                    return this._param.getDurationOfTicks(t1, e1);
                }
                getTicksAtTime(t1) {
                    return this._param.getTicksAtTime(t1);
                }
                get multiplier() {
                    return this._param.multiplier;
                }
                set multiplier(t1) {
                    this._param.multiplier = t1;
                }
                dispose() {
                    return super.dispose(), this._param.dispose(), this;
                }
            }
            class _d extends ed {
                constructor(){
                    super(_p(_d.getDefaults(), arguments, [
                        "frequency"
                    ])), this.name = "TickSource", this._state = new sd, this._tickOffset = new kp;
                    var t1 = _p(_d.getDefaults(), arguments, [
                        "frequency"
                    ]);
                    this.frequency = new fd({
                        context: this.context,
                        units: t1.units,
                        value: t1.frequency
                    }), qp(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.setTicksAtTime(0, 0);
                }
                static getDefaults() {
                    return Object.assign({
                        frequency: 1,
                        units: "hertz"
                    }, ed.getDefaults());
                }
                get state() {
                    return this.getStateAtTime(this.now());
                }
                start(t1, e1) {
                    t1 = this.toSeconds(t1);
                    return "started" !== this._state.getValueAtTime(t1) && (this._state.setStateAtTime("started", t1), $u(e1) && this.setTicksAtTime(e1, t1)), this;
                }
                stop(t1) {
                    t1 = this.toSeconds(t1);
                    if ("stopped" === this._state.getValueAtTime(t1)) {
                        const e1 = this._state.get(t1);
                        e1 && 0 < e1.time && (this._tickOffset.cancel(e1.time), this._state.cancel(e1.time));
                    }
                    return this._state.cancel(t1), this._state.setStateAtTime("stopped", t1), this.setTicksAtTime(0, t1), this;
                }
                pause(t1) {
                    t1 = this.toSeconds(t1);
                    return "started" === this._state.getValueAtTime(t1) && this._state.setStateAtTime("paused", t1), this;
                }
                cancel(t1) {
                    return t1 = this.toSeconds(t1), this._state.cancel(t1), this._tickOffset.cancel(t1), this;
                }
                getTicksAtTime(t1) {
                    var e1 = this.toSeconds(t1), s = this._state.getLastState("stopped", e1), t1 = {
                        state: "paused",
                        time: e1
                    };
                    this._state.add(t1);
                    let n = s, i = 0;
                    return this._state.forEachBetween(s.time, e1 + this.sampleTime, (t1)=>{
                        let e1 = n.time;
                        var s = this._tickOffset.get(t1.time);
                        s && s.time >= n.time && (i = s.ticks, e1 = s.time), "started" === n.state && "started" !== t1.state && (i += this.frequency.getTicksAtTime(t1.time) - this.frequency.getTicksAtTime(e1)), n = t1;
                    }), this._state.remove(t1), i;
                }
                get ticks() {
                    return this.getTicksAtTime(this.now());
                }
                set ticks(t1) {
                    this.setTicksAtTime(t1, this.now());
                }
                get seconds() {
                    return this.getSecondsAtTime(this.now());
                }
                set seconds(t1) {
                    var e1 = this.now(), t1 = this.frequency.timeToTicks(t1, e1);
                    this.setTicksAtTime(t1, e1);
                }
                getSecondsAtTime(t1) {
                    t1 = this.toSeconds(t1);
                    var e1 = this._state.getLastState("stopped", t1), s = {
                        state: "paused",
                        time: t1
                    };
                    this._state.add(s);
                    let n = e1, i = 0;
                    return this._state.forEachBetween(e1.time, t1 + this.sampleTime, (t1)=>{
                        let e1 = n.time;
                        var s = this._tickOffset.get(t1.time);
                        s && s.time >= n.time && (i = s.seconds, e1 = s.time), "started" === n.state && "started" !== t1.state && (i += t1.time - e1), n = t1;
                    }), this._state.remove(s), i;
                }
                setTicksAtTime(t1, e1) {
                    return e1 = this.toSeconds(e1), this._tickOffset.cancel(e1), this._tickOffset.add({
                        seconds: this.frequency.getDurationOfTicks(t1, e1),
                        ticks: t1,
                        time: e1
                    }), this;
                }
                getStateAtTime(t1) {
                    return t1 = this.toSeconds(t1), this._state.getValueAtTime(t1);
                }
                getTimeOfTick(t1, e1 = this.now()) {
                    var s = this._tickOffset.get(e1), e1 = this._state.get(e1), e1 = Math.max(s.time, e1.time), s = this.frequency.getTicksAtTime(e1) + t1 - s.ticks;
                    return this.frequency.getTimeOfTick(s);
                }
                forEachTickBetween(s, n, i) {
                    let r = this._state.get(s);
                    this._state.forEachBetween(s, n, (t1)=>{
                        r && "started" === r.state && "started" !== t1.state && this.forEachTickBetween(Math.max(r.time, s), t1.time - this.sampleTime, i), r = t1;
                    });
                    let o = null;
                    if (r && "started" === r.state) {
                        var a = Math.max(r.time, s), h = this.frequency.getTicksAtTime(a), a = h - this.frequency.getTicksAtTime(r.time);
                        let t1 = Math.ceil(a) - a;
                        t1 = Tp(t1, 1) ? 0 : t1;
                        let e1 = this.frequency.getTimeOfTick(h + t1);
                        for(; e1 < n;){
                            try {
                                i(e1, Math.round(this.getTicksAtTime(e1)));
                            } catch (s) {
                                o = s;
                                break;
                            }
                            e1 += this.frequency.getDurationOfTicks(1, e1);
                        }
                    }
                    if (o) throw o;
                    return this;
                }
                dispose() {
                    return super.dispose(), this._state.dispose(), this._tickOffset.dispose(), this.frequency.dispose(), this;
                }
            }
            class md extends ed {
                constructor(){
                    super(_p(md.getDefaults(), arguments, [
                        "callback",
                        "frequency"
                    ])), this.name = "Clock", this.callback = Ip, this._lastUpdate = 0, this._state = new sd("stopped"), this._boundLoop = this._loop.bind(this);
                    var t1 = _p(md.getDefaults(), arguments, [
                        "callback",
                        "frequency"
                    ]);
                    this.callback = t1.callback, this._tickSource = new _d({
                        context: this.context,
                        frequency: t1.frequency,
                        units: t1.units
                    }), this._lastUpdate = 0, this.frequency = this._tickSource.frequency, qp(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.context.on("tick", this._boundLoop);
                }
                static getDefaults() {
                    return Object.assign(ed.getDefaults(), {
                        callback: Ip,
                        frequency: 1,
                        units: "hertz"
                    });
                }
                get state() {
                    return this._state.getValueAtTime(this.now());
                }
                start(t1, e1) {
                    Gu(this.context);
                    t1 = this.toSeconds(t1);
                    return this.log("start", t1), "started" !== this._state.getValueAtTime(t1) && (this._state.setStateAtTime("started", t1), this._tickSource.start(t1, e1), t1 < this._lastUpdate && this.emit("start", t1, e1)), this;
                }
                stop(t1) {
                    t1 = this.toSeconds(t1);
                    return this.log("stop", t1), this._state.cancel(t1), this._state.setStateAtTime("stopped", t1), this._tickSource.stop(t1), t1 < this._lastUpdate && this.emit("stop", t1), this;
                }
                pause(t1) {
                    t1 = this.toSeconds(t1);
                    return "started" === this._state.getValueAtTime(t1) && (this._state.setStateAtTime("paused", t1), this._tickSource.pause(t1), t1 < this._lastUpdate && this.emit("pause", t1)), this;
                }
                get ticks() {
                    return Math.ceil(this.getTicksAtTime(this.now()));
                }
                set ticks(t1) {
                    this._tickSource.ticks = t1;
                }
                get seconds() {
                    return this._tickSource.seconds;
                }
                set seconds(t1) {
                    this._tickSource.seconds = t1;
                }
                getSecondsAtTime(t1) {
                    return this._tickSource.getSecondsAtTime(t1);
                }
                setTicksAtTime(t1, e1) {
                    return this._tickSource.setTicksAtTime(t1, e1), this;
                }
                getTimeOfTick(t1, e1 = this.now()) {
                    return this._tickSource.getTimeOfTick(t1, e1);
                }
                getTicksAtTime(t1) {
                    return this._tickSource.getTicksAtTime(t1);
                }
                nextTickTime(t1, e1) {
                    var s = this.toSeconds(e1), e1 = this.getTicksAtTime(s);
                    return this._tickSource.getTimeOfTick(e1 + t1, s);
                }
                _loop() {
                    var t1 = this._lastUpdate, e1 = this.now();
                    this._lastUpdate = e1, this.log("loop", t1, e1), t1 !== e1 && (this._state.forEachBetween(t1, e1, (t1)=>{
                        switch(t1.state){
                            case "started":
                                var e1 = this._tickSource.getTicksAtTime(t1.time);
                                this.emit("start", t1.time, e1);
                                break;
                            case "stopped":
                                0 !== t1.time && this.emit("stop", t1.time);
                                break;
                            case "paused":
                                this.emit("pause", t1.time);
                        }
                    }), this._tickSource.forEachTickBetween(t1, e1, (t1, e1)=>{
                        this.callback(t1, e1);
                    }));
                }
                getStateAtTime(t1) {
                    t1 = this.toSeconds(t1);
                    return this._state.getValueAtTime(t1);
                }
                dispose() {
                    return super.dispose(), this.context.off("tick", this._boundLoop), this._tickSource.dispose(), this._state.dispose(), this;
                }
            }
            Mp.mixin(md);
            class gd extends id {
                constructor(){
                    super(_p(gd.getDefaults(), arguments, [
                        "delayTime",
                        "maxDelay"
                    ])), this.name = "Delay";
                    var t1 = _p(gd.getDefaults(), arguments, [
                        "delayTime",
                        "maxDelay"
                    ]), e1 = this.toSeconds(t1.maxDelay);
                    this._maxDelay = Math.max(e1, this.toSeconds(t1.delayTime)), this._delayNode = this.input = this.output = this.context.createDelay(e1), this.delayTime = new nd({
                        context: this.context,
                        param: this._delayNode.delayTime,
                        units: "time",
                        value: t1.delayTime,
                        minValue: 0,
                        maxValue: this.maxDelay
                    }), qp(this, "delayTime");
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        delayTime: 0,
                        maxDelay: 1
                    });
                }
                get maxDelay() {
                    return this._maxDelay;
                }
                dispose() {
                    return super.dispose(), this._delayNode.disconnect(), this.delayTime.dispose(), this;
                }
            }
            class vd extends vp {
                constructor(){
                    super(), this.name = "ToneAudioBuffers", this._buffers = new Map, this._loadingCount = 0;
                    const s = _p(vd.getDefaults(), arguments, [
                        "urls",
                        "onload",
                        "baseUrl"
                    ], "urls");
                    this.baseUrl = s.baseUrl, Object.keys(s.urls).forEach((t1)=>{
                        this._loadingCount++;
                        var e1 = s.urls[t1];
                        this.add(t1, e1, this._bufferLoaded.bind(this, s.onload), s.onerror);
                    });
                }
                static getDefaults() {
                    return {
                        baseUrl: "",
                        onerror: Ip,
                        onload: Ip,
                        urls: {}
                    };
                }
                has(t1) {
                    return this._buffers.has(t1.toString());
                }
                get(t1) {
                    return Bu(this.has(t1), `ToneAudioBuffers has no buffer named: ${t1}`), this._buffers.get(t1.toString());
                }
                _bufferLoaded(t1) {
                    this._loadingCount--, 0 === this._loadingCount && t1 && t1();
                }
                get loaded() {
                    return Array.from(this._buffers).every(([, t1])=>t1.loaded);
                }
                add(t1, e1, s = Ip, n = Ip) {
                    return sp(e1) ? (this.baseUrl && "data:audio/" === e1.trim().substring(0, 11).toLowerCase() && (this.baseUrl = ""), this._buffers.set(t1.toString(), new Vp(this.baseUrl + e1, s, n))) : this._buffers.set(t1.toString(), new Vp(e1, s, n)), this;
                }
                dispose() {
                    return super.dispose(), this._buffers.forEach((t1)=>t1.dispose()), this._buffers.clear(), this;
                }
            }
            class yd extends Hp {
                constructor(){
                    super(...arguments), this.name = "MidiClass", this.defaultUnits = "midi";
                }
                _frequencyToUnits(t1) {
                    return Qp(super._frequencyToUnits(t1));
                }
                _ticksToUnits(t1) {
                    return Qp(super._ticksToUnits(t1));
                }
                _beatsToUnits(t1) {
                    return Qp(super._beatsToUnits(t1));
                }
                _secondsToUnits(t1) {
                    return Qp(super._secondsToUnits(t1));
                }
                toMidi() {
                    return this.valueOf();
                }
                toFrequency() {
                    return Xp(this.toMidi());
                }
                transpose(t1) {
                    return new yd(this.context, this.toMidi() + t1);
                }
            }
            class xd extends td {
                constructor(){
                    super(...arguments), this.name = "Ticks", this.defaultUnits = "i";
                }
                _now() {
                    return this.context.transport.ticks;
                }
                _beatsToUnits(t1) {
                    return this._getPPQ() * t1;
                }
                _secondsToUnits(t1) {
                    return Math.floor(t1 / (60 / this._getBpm()) * this._getPPQ());
                }
                _ticksToUnits(t1) {
                    return t1;
                }
                toTicks() {
                    return this.valueOf();
                }
                toSeconds() {
                    return this.valueOf() / this._getPPQ() * (60 / this._getBpm());
                }
            }
            class wd extends ed {
                constructor(){
                    super(...arguments), this.name = "Draw", this.expiration = .25, this.anticipation = .008, this._events = new kp, this._boundDrawLoop = this._drawLoop.bind(this), this._animationFrame = -1;
                }
                schedule(t1, e1) {
                    return this._events.add({
                        callback: t1,
                        time: this.toSeconds(e1)
                    }), 1 === this._events.length && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)), this;
                }
                cancel(t1) {
                    return this._events.cancel(this.toSeconds(t1)), this;
                }
                _drawLoop() {
                    for(var t1 = this.context.currentTime; this._events.length && this._events.peek().time - this.anticipation <= t1;){
                        const e1 = this._events.shift();
                        e1 && t1 - e1.time <= this.expiration && e1.callback();
                    }
                    0 < this._events.length && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop));
                }
                dispose() {
                    return super.dispose(), this._events.dispose(), cancelAnimationFrame(this._animationFrame), this;
                }
            }
            Ap((t1)=>{
                t1.draw = new wd({
                    context: t1
                });
            }), Op((t1)=>{
                t1.draw.dispose();
            });
            class bd extends vp {
                constructor(){
                    super(...arguments), this.name = "IntervalTimeline", this._root = null, this._length = 0;
                }
                add(t1) {
                    Bu($u(t1.time), "Events must have a time property"), Bu($u(t1.duration), "Events must have a duration parameter"), t1.time = t1.time.valueOf();
                    let e1 = new Td(t1.time, t1.time + t1.duration, t1);
                    for(null === this._root ? this._root = e1 : this._root.insert(e1), this._length++; null !== e1;)e1.updateHeight(), e1.updateMax(), this._rebalance(e1), e1 = e1.parent;
                    return this;
                }
                remove(t1) {
                    if (null !== this._root) {
                        var e1 = [];
                        this._root.search(t1.time, e1);
                        for (const s of e1)if (s.event === t1) {
                            this._removeNode(s), this._length--;
                            break;
                        }
                    }
                    return this;
                }
                get length() {
                    return this._length;
                }
                cancel(t1) {
                    return this.forEachFrom(t1, (t1)=>this.remove(t1)), this;
                }
                _setRoot(t1) {
                    this._root = t1, null !== this._root && (this._root.parent = null);
                }
                _replaceNodeInParent(t1, e1) {
                    null !== t1.parent ? (t1.isLeftChild() ? t1.parent.left = e1 : t1.parent.right = e1, this._rebalance(t1.parent)) : this._setRoot(e1);
                }
                _removeNode(s) {
                    if (null === s.left && null === s.right) this._replaceNodeInParent(s, null);
                    else if (null === s.right) this._replaceNodeInParent(s, s.left);
                    else if (null === s.left) this._replaceNodeInParent(s, s.right);
                    else {
                        let t1, e1 = null;
                        if (0 < s.getBalance()) {
                            if (null === s.left.right) t1 = s.left, t1.right = s.right, e1 = t1;
                            else {
                                for(t1 = s.left.right; null !== t1.right;)t1 = t1.right;
                                t1.parent && (t1.parent.right = t1.left, e1 = t1.parent, t1.left = s.left, t1.right = s.right);
                            }
                        } else if (null === s.right.left) t1 = s.right, t1.left = s.left, e1 = t1;
                        else {
                            for(t1 = s.right.left; null !== t1.left;)t1 = t1.left;
                            t1.parent && (t1.parent.left = t1.right, e1 = t1.parent, t1.left = s.left, t1.right = s.right);
                        }
                        null !== s.parent ? s.isLeftChild() ? s.parent.left = t1 : s.parent.right = t1 : this._setRoot(t1), e1 && this._rebalance(e1);
                    }
                    s.dispose();
                }
                _rotateLeft(t1) {
                    const e1 = t1.parent, s = t1.isLeftChild(), n = t1.right;
                    n && (t1.right = n.left, n.left = t1), null !== e1 ? s ? e1.left = n : e1.right = n : this._setRoot(n);
                }
                _rotateRight(t1) {
                    const e1 = t1.parent, s = t1.isLeftChild(), n = t1.left;
                    n && (t1.left = n.right, n.right = t1), null !== e1 ? s ? e1.left = n : e1.right = n : this._setRoot(n);
                }
                _rebalance(t1) {
                    var e1 = t1.getBalance();
                    1 < e1 && t1.left ? t1.left.getBalance() < 0 ? this._rotateLeft(t1.left) : this._rotateRight(t1) : e1 < -1 && t1.right && (0 < t1.right.getBalance() ? this._rotateRight(t1.right) : this._rotateLeft(t1));
                }
                get(t1) {
                    if (null !== this._root) {
                        var s = [];
                        if (this._root.search(t1, s), 0 < s.length) {
                            let e1 = s[0];
                            for(let t1 = 1; t1 < s.length; t1++)s[t1].low > e1.low && (e1 = s[t1]);
                            return e1.event;
                        }
                    }
                    return null;
                }
                forEach(e1) {
                    if (null !== this._root) {
                        const s = [];
                        this._root.traverse((t1)=>s.push(t1)), s.forEach((t1)=>{
                            t1.event && e1(t1.event);
                        });
                    }
                    return this;
                }
                forEachAtTime(t1, e1) {
                    if (null !== this._root) {
                        const s = [];
                        this._root.search(t1, s), s.forEach((t1)=>{
                            t1.event && e1(t1.event);
                        });
                    }
                    return this;
                }
                forEachFrom(t1, e1) {
                    if (null !== this._root) {
                        const s = [];
                        this._root.searchAfter(t1, s), s.forEach((t1)=>{
                            t1.event && e1(t1.event);
                        });
                    }
                    return this;
                }
                dispose() {
                    return super.dispose(), null !== this._root && this._root.traverse((t1)=>t1.dispose()), this._root = null, this;
                }
            }
            class Td {
                constructor(t1, e1, s){
                    this._left = null, this._right = null, this.parent = null, this.height = 0, this.event = s, this.low = t1, this.high = e1, this.max = this.high;
                }
                insert(t1) {
                    t1.low <= this.low ? null === this.left ? this.left = t1 : this.left.insert(t1) : null === this.right ? this.right = t1 : this.right.insert(t1);
                }
                search(t1, e1) {
                    t1 > this.max || (null !== this.left && this.left.search(t1, e1), this.low <= t1 && this.high > t1 && e1.push(this), this.low > t1 || null !== this.right && this.right.search(t1, e1));
                }
                searchAfter(t1, e1) {
                    this.low >= t1 && (e1.push(this), null !== this.left && this.left.searchAfter(t1, e1)), null !== this.right && this.right.searchAfter(t1, e1);
                }
                traverse(t1) {
                    t1(this), null !== this.left && this.left.traverse(t1), null !== this.right && this.right.traverse(t1);
                }
                updateHeight() {
                    null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0;
                }
                updateMax() {
                    this.max = this.high, null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max));
                }
                getBalance() {
                    let t1 = 0;
                    return null !== this.left && null !== this.right ? t1 = this.left.height - this.right.height : null !== this.left ? t1 = this.left.height + 1 : null !== this.right && (t1 = -(this.right.height + 1)), t1;
                }
                isLeftChild() {
                    return null !== this.parent && this.parent.left === this;
                }
                get left() {
                    return this._left;
                }
                set left(t1) {
                    null !== (this._left = t1) && (t1.parent = this), this.updateHeight(), this.updateMax();
                }
                get right() {
                    return this._right;
                }
                set right(t1) {
                    null !== (this._right = t1) && (t1.parent = this), this.updateHeight(), this.updateMax();
                }
                dispose() {
                    this.parent = null, this._left = null, this._right = null, this.event = null;
                }
            }
            class Sd extends id {
                constructor(){
                    super(_p(Sd.getDefaults(), arguments, [
                        "volume"
                    ])), this.name = "Volume";
                    var t1 = _p(Sd.getDefaults(), arguments, [
                        "volume"
                    ]);
                    this.input = this.output = new hd({
                        context: this.context,
                        gain: t1.volume,
                        units: "decibels"
                    }), this.volume = this.output.gain, qp(this, "volume"), this._unmutedVolume = t1.volume, this.mute = t1.mute;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        mute: !1,
                        volume: 0
                    });
                }
                get mute() {
                    return this.volume.value === -1 / 0;
                }
                set mute(t1) {
                    !this.mute && t1 ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t1 && (this.volume.value = this._unmutedVolume);
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.volume.dispose(), this;
                }
            }
            class kd extends id {
                constructor(){
                    super(_p(kd.getDefaults(), arguments)), this.name = "Destination", this.input = new Sd({
                        context: this.context
                    }), this.output = new hd({
                        context: this.context
                    }), this.volume = this.input.volume;
                    var t1 = _p(kd.getDefaults(), arguments);
                    rd(this.input, this.output, this.context.rawContext.destination), this.mute = t1.mute, this._internalChannels = [
                        this.input,
                        this.context.rawContext.destination,
                        this.output
                    ];
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        mute: !1,
                        volume: 0
                    });
                }
                get mute() {
                    return this.input.mute;
                }
                set mute(t1) {
                    this.input.mute = t1;
                }
                chain(...t1) {
                    return this.input.disconnect(), t1.unshift(this.input), t1.push(this.output), rd(...t1), this;
                }
                get maxChannelCount() {
                    return this.context.rawContext.destination.maxChannelCount;
                }
                dispose() {
                    return super.dispose(), this.volume.dispose(), this;
                }
            }
            Ap((t1)=>{
                t1.destination = new kd({
                    context: t1
                });
            }), Op((t1)=>{
                t1.destination.dispose();
            });
            class Cd extends vp {
                constructor(t1){
                    super(), this.name = "TimelineValue", this._timeline = new kp({
                        memory: 10
                    }), this._initialValue = t1;
                }
                set(t1, e1) {
                    return this._timeline.add({
                        value: t1,
                        time: e1
                    }), this;
                }
                get(t1) {
                    t1 = this._timeline.get(t1);
                    return t1 ? t1.value : this._initialValue;
                }
            }
            class Ad {
                constructor(t1, e1){
                    this.id = Ad._eventId++, this._remainderTime = 0;
                    e1 = Object.assign(Ad.getDefaults(), e1);
                    this.transport = t1, this.callback = e1.callback, this._once = e1.once, this.time = Math.floor(e1.time), this._remainderTime = e1.time - this.time;
                }
                static getDefaults() {
                    return {
                        callback: Ip,
                        once: !1,
                        time: 0
                    };
                }
                get floatTime() {
                    return this.time + this._remainderTime;
                }
                invoke(t1) {
                    var e1;
                    this.callback && (e1 = this.transport.bpm.getDurationOfTicks(1, t1), this.callback(t1 + this._remainderTime * e1), this._once && this.transport.clear(this.id));
                }
                dispose() {
                    return this.callback = void 0, this;
                }
            }
            Ad._eventId = 0;
            class Dd extends Ad {
                constructor(t1, e1){
                    super(t1, e1), this._currentId = -1, this._nextId = -1, this._nextTick = this.time, this._boundRestart = this._restart.bind(this);
                    e1 = Object.assign(Dd.getDefaults(), e1);
                    this.duration = e1.duration, this._interval = e1.interval, this._nextTick = e1.time, this.transport.on("start", this._boundRestart), this.transport.on("loopStart", this._boundRestart), this.transport.on("ticks", this._boundRestart), this.context = this.transport.context, this._restart();
                }
                static getDefaults() {
                    return Object.assign({}, Ad.getDefaults(), {
                        duration: 1 / 0,
                        interval: 1,
                        once: !1
                    });
                }
                invoke(t1) {
                    this._createEvents(t1), super.invoke(t1);
                }
                _createEvent() {
                    return bp(this._nextTick, this.floatTime + this.duration) ? this.transport.scheduleOnce(this.invoke.bind(this), new xd(this.context, this._nextTick).toSeconds()) : -1;
                }
                _createEvents(t1) {
                    bp(this._nextTick + this._interval, this.floatTime + this.duration) && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new xd(this.context, this._nextTick).toSeconds()));
                }
                _restart(t1) {
                    this.transport.clear(this._currentId), this.transport.clear(this._nextId), this._nextTick = this.floatTime;
                    t1 = this.transport.getTicksAtTime(t1);
                    xp(t1, this.time) && (this._nextTick = this.floatTime + Math.ceil((t1 - this.floatTime) / this._interval) * this._interval), this._currentId = this._createEvent(), this._nextTick += this._interval, this._nextId = this._createEvent();
                }
                dispose() {
                    return super.dispose(), this.transport.clear(this._currentId), this.transport.clear(this._nextId), this.transport.off("start", this._boundRestart), this.transport.off("loopStart", this._boundRestart), this.transport.off("ticks", this._boundRestart), this;
                }
            }
            class Od extends ed {
                constructor(){
                    super(_p(Od.getDefaults(), arguments)), this.name = "Transport", this._loop = new Cd(!1), this._loopStart = 0, this._loopEnd = 0, this._scheduledEvents = {}, this._timeline = new kp, this._repeatedEvents = new bd, this._syncedSignals = [], this._swingAmount = 0;
                    var t1 = _p(Od.getDefaults(), arguments);
                    this._ppq = t1.ppq, this._clock = new md({
                        callback: this._processTick.bind(this),
                        context: this.context,
                        frequency: 0,
                        units: "bpm"
                    }), this._bindClockEvents(), this.bpm = this._clock.frequency, this._clock.frequency.multiplier = t1.ppq, this.bpm.setValueAtTime(t1.bpm, 0), qp(this, "bpm"), this._timeSignature = t1.timeSignature, this._swingTicks = t1.ppq / 2;
                }
                static getDefaults() {
                    return Object.assign(ed.getDefaults(), {
                        bpm: 120,
                        loopEnd: "4m",
                        loopStart: 0,
                        ppq: 192,
                        swing: 0,
                        swingSubdivision: "8n",
                        timeSignature: 4
                    });
                }
                _processTick(e1, t1) {
                    var s;
                    this._loop.get(e1) && t1 >= this._loopEnd && (this.emit("loopEnd", e1), this._clock.setTicksAtTime(this._loopStart, e1), t1 = this._loopStart, this.emit("loopStart", e1, this._clock.getSecondsAtTime(e1)), this.emit("loop", e1)), 0 < this._swingAmount && t1 % this._ppq != 0 && t1 % (2 * this._swingTicks) != 0 && (s = t1 % (2 * this._swingTicks) / (2 * this._swingTicks), s = Math.sin(s * Math.PI) * this._swingAmount, e1 += new xd(this.context, 2 * this._swingTicks / 3).toSeconds() * s), this._timeline.forEachAtTime(t1, (t1)=>t1.invoke(e1));
                }
                schedule(t1, e1) {
                    e1 = new Ad(this, {
                        callback: t1,
                        time: new td(this.context, e1).toTicks()
                    });
                    return this._addEvent(e1, this._timeline);
                }
                scheduleRepeat(t1, e1, s, n = 1 / 0) {
                    s = new Dd(this, {
                        callback: t1,
                        duration: new $p(this.context, n).toTicks(),
                        interval: new $p(this.context, e1).toTicks(),
                        time: new td(this.context, s).toTicks()
                    });
                    return this._addEvent(s, this._repeatedEvents);
                }
                scheduleOnce(t1, e1) {
                    e1 = new Ad(this, {
                        callback: t1,
                        once: !0,
                        time: new td(this.context, e1).toTicks()
                    });
                    return this._addEvent(e1, this._timeline);
                }
                clear(t1) {
                    if (this._scheduledEvents.hasOwnProperty(t1)) {
                        const e1 = this._scheduledEvents[t1.toString()];
                        e1.timeline.remove(e1.event), e1.event.dispose(), delete this._scheduledEvents[t1.toString()];
                    }
                    return this;
                }
                _addEvent(t1, e1) {
                    return this._scheduledEvents[t1.id.toString()] = {
                        event: t1,
                        timeline: e1
                    }, e1.add(t1), t1.id;
                }
                cancel(t1 = 0) {
                    t1 = this.toTicks(t1);
                    return this._timeline.forEachFrom(t1, (t1)=>this.clear(t1.id)), this._repeatedEvents.forEachFrom(t1, (t1)=>this.clear(t1.id)), this;
                }
                _bindClockEvents() {
                    this._clock.on("start", (t1, e1)=>{
                        e1 = new xd(this.context, e1).toSeconds(), this.emit("start", t1, e1);
                    }), this._clock.on("stop", (t1)=>{
                        this.emit("stop", t1);
                    }), this._clock.on("pause", (t1)=>{
                        this.emit("pause", t1);
                    });
                }
                get state() {
                    return this._clock.getStateAtTime(this.now());
                }
                start(t1, e1) {
                    let s;
                    return $u(e1) && (s = this.toTicks(e1)), this._clock.start(t1, s), this;
                }
                stop(t1) {
                    return this._clock.stop(t1), this;
                }
                pause(t1) {
                    return this._clock.pause(t1), this;
                }
                toggle(t1) {
                    return t1 = this.toSeconds(t1), "started" !== this._clock.getStateAtTime(t1) ? this.start(t1) : this.stop(t1), this;
                }
                get timeSignature() {
                    return this._timeSignature;
                }
                set timeSignature(t1) {
                    ep(t1) && (t1 = t1[0] / t1[1] * 4), this._timeSignature = t1;
                }
                get loopStart() {
                    return new $p(this.context, this._loopStart, "i").toSeconds();
                }
                set loopStart(t1) {
                    this._loopStart = this.toTicks(t1);
                }
                get loopEnd() {
                    return new $p(this.context, this._loopEnd, "i").toSeconds();
                }
                set loopEnd(t1) {
                    this._loopEnd = this.toTicks(t1);
                }
                get loop() {
                    return this._loop.get(this.now());
                }
                set loop(t1) {
                    this._loop.set(t1, this.now());
                }
                setLoopPoints(t1, e1) {
                    return this.loopStart = t1, this.loopEnd = e1, this;
                }
                get swing() {
                    return this._swingAmount;
                }
                set swing(t1) {
                    this._swingAmount = t1;
                }
                get swingSubdivision() {
                    return new xd(this.context, this._swingTicks).toNotation();
                }
                set swingSubdivision(t1) {
                    this._swingTicks = this.toTicks(t1);
                }
                get position() {
                    var t1 = this.now(), t1 = this._clock.getTicksAtTime(t1);
                    return new xd(this.context, t1).toBarsBeatsSixteenths();
                }
                set position(t1) {
                    t1 = this.toTicks(t1);
                    this.ticks = t1;
                }
                get seconds() {
                    return this._clock.seconds;
                }
                set seconds(t1) {
                    var e1 = this.now(), e1 = this._clock.frequency.timeToTicks(t1, e1);
                    this.ticks = e1;
                }
                get progress() {
                    if (this.loop) {
                        var t1 = this.now();
                        return (this._clock.getTicksAtTime(t1) - this._loopStart) / (this._loopEnd - this._loopStart);
                    }
                    return 0;
                }
                get ticks() {
                    return this._clock.ticks;
                }
                set ticks(t1) {
                    var e1, s;
                    this._clock.ticks !== t1 && (e1 = this.now(), "started" === this.state ? (s = this._clock.getTicksAtTime(e1), s = e1 + this._clock.frequency.getDurationOfTicks(Math.ceil(s) - s, e1), this.emit("stop", s), this._clock.setTicksAtTime(t1, s), this.emit("start", s, this._clock.getSecondsAtTime(s))) : (this.emit("ticks", e1), this._clock.setTicksAtTime(t1, e1)));
                }
                getTicksAtTime(t1) {
                    return this._clock.getTicksAtTime(t1);
                }
                getSecondsAtTime(t1) {
                    return this._clock.getSecondsAtTime(t1);
                }
                get PPQ() {
                    return this._clock.frequency.multiplier;
                }
                set PPQ(t1) {
                    this._clock.frequency.multiplier = t1;
                }
                nextSubdivision(t1) {
                    if (t1 = this.toTicks(t1), "started" !== this.state) return 0;
                    var e1 = this.now(), t1 = t1 - this.getTicksAtTime(e1) % t1;
                    return this._clock.nextTickTime(t1, e1);
                }
                syncSignal(t1, e1) {
                    if (!e1) {
                        const n = this.now();
                        var s;
                        e1 = 0 !== t1.getValueAtTime(n) ? (s = 1 / (60 / this.bpm.getValueAtTime(n) / this.PPQ), t1.getValueAtTime(n) / s) : 0;
                    }
                    const n = new hd(e1);
                    return this.bpm.connect(n), n.connect(t1._param), this._syncedSignals.push({
                        initial: t1.value,
                        ratio: n,
                        signal: t1
                    }), t1.value = 0, this;
                }
                unsyncSignal(e1) {
                    for(let t1 = this._syncedSignals.length - 1; 0 <= t1; t1--){
                        const s = this._syncedSignals[t1];
                        s.signal === e1 && (s.ratio.dispose(), s.signal.value = s.initial, this._syncedSignals.splice(t1, 1));
                    }
                    return this;
                }
                dispose() {
                    return super.dispose(), this._clock.dispose(), Fp(this, "bpm"), this._timeline.dispose(), this._repeatedEvents.dispose(), this;
                }
            }
            Mp.mixin(Od), Ap((t1)=>{
                t1.transport = new Od({
                    context: t1
                });
            }), Op((t1)=>{
                t1.transport.dispose();
            });
            class Md extends id {
                constructor(t1){
                    super(t1), this.input = void 0, this._state = new sd("stopped"), this._synced = !1, this._scheduled = [], this._syncedStart = Ip, this._syncedStop = Ip, this._state.memory = 100, this._state.increasing = !0, this._volume = this.output = new Sd({
                        context: this.context,
                        mute: t1.mute,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, qp(this, "volume"), this.onstop = t1.onstop;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        mute: !1,
                        onstop: Ip,
                        volume: 0
                    });
                }
                get state() {
                    return this._synced ? "started" === this.context.transport.state ? this._state.getValueAtTime(this.context.transport.seconds) : "stopped" : this._state.getValueAtTime(this.now());
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t1) {
                    this._volume.mute = t1;
                }
                _clampToCurrentTime(t1) {
                    return this._synced ? t1 : Math.max(t1, this.context.currentTime);
                }
                start(t1, e1, s) {
                    var n = Yu(t1) && this._synced ? this.context.transport.seconds : this.toSeconds(t1), n = this._clampToCurrentTime(n);
                    if (this._synced || "started" !== this._state.getValueAtTime(n)) {
                        if (this.log("start", n), this._state.setStateAtTime("started", n), this._synced) {
                            const i = this._state.get(n);
                            i && (i.offset = this.toSeconds(mp(e1, 0)), i.duration = s ? this.toSeconds(s) : void 0);
                            t1 = this.context.transport.schedule((t1)=>{
                                this._start(t1, e1, s);
                            }, n);
                            this._scheduled.push(t1), "started" === this.context.transport.state && this.context.transport.getSecondsAtTime(this.immediate()) > n && this._syncedStart(this.now(), this.context.transport.seconds);
                        } else Gu(this.context), this._start(n, e1, s);
                    } else Bu(xp(n, this._state.get(n).time), "Start time must be strictly greater than previous start time"), this._state.cancel(n), this._state.setStateAtTime("started", n), this.log("restart", n), this.restart(n, e1, s);
                    return this;
                }
                stop(t1) {
                    t1 = Yu(t1) && this._synced ? this.context.transport.seconds : this.toSeconds(t1), t1 = this._clampToCurrentTime(t1);
                    if ("started" === this._state.getValueAtTime(t1) || $u(this._state.getNextState("started", t1))) {
                        if (this.log("stop", t1), this._synced) {
                            const e1 = this.context.transport.schedule(this._stop.bind(this), t1);
                            this._scheduled.push(e1);
                        } else this._stop(t1);
                        this._state.cancel(t1), this._state.setStateAtTime("stopped", t1);
                    }
                    return this;
                }
                restart(t1, e1, s) {
                    return t1 = this.toSeconds(t1), "started" === this._state.getValueAtTime(t1) && (this._state.cancel(t1), this._restart(t1, e1, s)), this;
                }
                sync() {
                    return this._synced || (this._synced = !0, this._syncedStart = (e1, s)=>{
                        if (0 < s) {
                            var n = this._state.get(s);
                            if (n && "started" === n.state && n.time !== s) {
                                s = s - this.toSeconds(n.time);
                                let t1;
                                n.duration && (t1 = this.toSeconds(n.duration) - s), this._start(e1, this.toSeconds(n.offset) + s, t1);
                            }
                        }
                    }, this._syncedStop = (t1)=>{
                        var e1 = this.context.transport.getSecondsAtTime(Math.max(t1 - this.sampleTime, 0));
                        "started" === this._state.getValueAtTime(e1) && this._stop(t1);
                    }, this.context.transport.on("start", this._syncedStart), this.context.transport.on("loopStart", this._syncedStart), this.context.transport.on("stop", this._syncedStop), this.context.transport.on("pause", this._syncedStop), this.context.transport.on("loopEnd", this._syncedStop)), this;
                }
                unsync() {
                    return this._synced && (this.context.transport.off("stop", this._syncedStop), this.context.transport.off("pause", this._syncedStop), this.context.transport.off("loopEnd", this._syncedStop), this.context.transport.off("start", this._syncedStart), this.context.transport.off("loopStart", this._syncedStart)), this._synced = !1, this._scheduled.forEach((t1)=>this.context.transport.clear(t1)), this._scheduled = [], this._state.cancel(0), this._stop(0), this;
                }
                dispose() {
                    return super.dispose(), this.onstop = Ip, this.unsync(), this._volume.dispose(), this._state.dispose(), this;
                }
            }
            class Ed extends cd {
                constructor(){
                    super(_p(Ed.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "ToneBufferSource", this._source = this.context.createBufferSource(), this._internalChannels = [
                        this._source
                    ], this._sourceStarted = !1, this._sourceStopped = !1;
                    var t1 = _p(Ed.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    od(this._source, this._gainNode), this._source.onended = ()=>this._stopSource(), this.playbackRate = new nd({
                        context: this.context,
                        param: this._source.playbackRate,
                        units: "positive",
                        value: t1.playbackRate
                    }), this.loop = t1.loop, this.loopStart = t1.loopStart, this.loopEnd = t1.loopEnd, this._buffer = new Vp(t1.url, t1.onload, t1.onerror), this._internalChannels.push(this._source);
                }
                static getDefaults() {
                    return Object.assign(cd.getDefaults(), {
                        url: new Vp,
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        onload: Ip,
                        onerror: Ip,
                        playbackRate: 1
                    });
                }
                get fadeIn() {
                    return this._fadeIn;
                }
                set fadeIn(t1) {
                    this._fadeIn = t1;
                }
                get fadeOut() {
                    return this._fadeOut;
                }
                set fadeOut(t1) {
                    this._fadeOut = t1;
                }
                get curve() {
                    return this._curve;
                }
                set curve(t1) {
                    this._curve = t1;
                }
                start(t1, e1, s, n = 1) {
                    Bu(this.buffer.loaded, "buffer is either not set or not loaded");
                    t1 = this.toSeconds(t1);
                    this._startGain(t1, n), e1 = this.loop ? mp(e1, this.loopStart) : mp(e1, 0);
                    let i = Math.max(this.toSeconds(e1), 0);
                    if (this.loop) {
                        const r = this.toSeconds(this.loopEnd) || this.buffer.duration, e1 = this.toSeconds(this.loopStart), o = r - e1;
                        wp(i, r) && (i = (i - e1) % o + e1), Tp(i, this.buffer.duration) && (i = 0);
                    }
                    return this._source.buffer = this.buffer.get(), this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration, bp(i, this.buffer.duration) && (this._sourceStarted = !0, this._source.start(t1, i)), $u(s) && (s = this.toSeconds(s), s = Math.max(s, 0), this.stop(t1 + s)), this;
                }
                _stopSource(t1) {
                    !this._sourceStopped && this._sourceStarted && (this._sourceStopped = !0, this._source.stop(this.toSeconds(t1)), this._onended());
                }
                get loopStart() {
                    return this._source.loopStart;
                }
                set loopStart(t1) {
                    this._source.loopStart = this.toSeconds(t1);
                }
                get loopEnd() {
                    return this._source.loopEnd;
                }
                set loopEnd(t1) {
                    this._source.loopEnd = this.toSeconds(t1);
                }
                get buffer() {
                    return this._buffer;
                }
                set buffer(t1) {
                    this._buffer.set(t1);
                }
                get loop() {
                    return this._source.loop;
                }
                set loop(t1) {
                    this._source.loop = t1, this._sourceStarted && this.cancelStop();
                }
                dispose() {
                    return super.dispose(), this._source.onended = null, this._source.disconnect(), this._buffer.dispose(), this.playbackRate.dispose(), this;
                }
            }
            class Rd extends Md {
                constructor(){
                    super(_p(Rd.getDefaults(), arguments, [
                        "type"
                    ])), this.name = "Noise", this._source = null;
                    var t1 = _p(Rd.getDefaults(), arguments, [
                        "type"
                    ]);
                    this._playbackRate = t1.playbackRate, this.type = t1.type, this._fadeIn = t1.fadeIn, this._fadeOut = t1.fadeOut;
                }
                static getDefaults() {
                    return Object.assign(Md.getDefaults(), {
                        fadeIn: 0,
                        fadeOut: 0,
                        playbackRate: 1,
                        type: "white"
                    });
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    if (Bu(t1 in Id, "Noise: invalid type: " + t1), this._type !== t1 && (this._type = t1, "started" === this.state)) {
                        const t1 = this.now();
                        this._stop(t1), this._start(t1);
                    }
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t1) {
                    this._playbackRate = t1, this._source && (this._source.playbackRate.value = t1);
                }
                _start(t1) {
                    var e1 = Id[this._type];
                    this._source = new Ed({
                        url: e1,
                        context: this.context,
                        fadeIn: this._fadeIn,
                        fadeOut: this._fadeOut,
                        loop: !0,
                        onended: ()=>this.onstop(this),
                        playbackRate: this._playbackRate
                    }).connect(this.output), this._source.start(this.toSeconds(t1), Math.random() * (e1.duration - .001));
                }
                _stop(t1) {
                    this._source && (this._source.stop(this.toSeconds(t1)), this._source = null);
                }
                get fadeIn() {
                    return this._fadeIn;
                }
                set fadeIn(t1) {
                    this._fadeIn = t1, this._source && (this._source.fadeIn = this._fadeIn);
                }
                get fadeOut() {
                    return this._fadeOut;
                }
                set fadeOut(t1) {
                    this._fadeOut = t1, this._source && (this._source.fadeOut = this._fadeOut);
                }
                _restart(t1) {
                    this._stop(t1), this._start(t1);
                }
                dispose() {
                    return super.dispose(), this._source && this._source.disconnect(), this;
                }
            }
            const qd = 220500, Fd = {
                brown: null,
                pink: null,
                white: null
            }, Id = {
                get brown () {
                    if (!Fd.brown) {
                        const n = [];
                        for(let t1 = 0; t1 < 2; t1++){
                            const i = new Float32Array(qd);
                            n[t1] = i;
                            let e1 = 0;
                            for(let t1 = 0; t1 < qd; t1++){
                                var s1 = 2 * Math.random() - 1;
                                i[t1] = (e1 + .02 * s1) / 1.02, e1 = i[t1], i[t1] *= 3.5;
                            }
                        }
                        Fd.brown = (new Vp).fromArray(n);
                    }
                    return Fd.brown;
                },
                get pink () {
                    if (!Fd.pink) {
                        const c = [];
                        for(let t1 = 0; t1 < 2; t1++){
                            const l = new Float32Array(qd);
                            let e1, s, n, i, r, o, a;
                            c[t1] = l;
                            for(let t1 = e1 = s = n = i = r = o = a = 0; t1 < qd; t1++){
                                var h1 = 2 * Math.random() - 1;
                                e1 = .99886 * e1 + .0555179 * h1, s = .99332 * s + .0750759 * h1, n = .969 * n + .153852 * h1, i = .8665 * i + .3104856 * h1, r = .55 * r + .5329522 * h1, o = -0.7616 * o - .016898 * h1, l[t1] = e1 + s + n + i + r + o + a + .5362 * h1, l[t1] *= .11, a = .115926 * h1;
                            }
                        }
                        Fd.pink = (new Vp).fromArray(c);
                    }
                    return Fd.pink;
                },
                get white () {
                    if (!Fd.white) {
                        const e1 = [];
                        for(let t1 = 0; t1 < 2; t1++){
                            const s = new Float32Array(qd);
                            e1[t1] = s;
                            for(let t1 = 0; t1 < qd; t1++)s[t1] = 2 * Math.random() - 1;
                        }
                        Fd.white = (new Vp).fromArray(e1);
                    }
                    return Fd.white;
                }
            };
            class Vd extends id {
                constructor(){
                    super(_p(Vd.getDefaults(), arguments, [
                        "volume"
                    ])), this.name = "UserMedia";
                    var t1 = _p(Vd.getDefaults(), arguments, [
                        "volume"
                    ]);
                    this._volume = this.output = new Sd({
                        context: this.context,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, qp(this, "volume"), this.mute = t1.mute;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        mute: !1,
                        volume: 0
                    });
                }
                open(n) {
                    return ap(this, void 0, void 0, function*() {
                        Bu(Vd.supported, "UserMedia is not supported"), "started" === this.state && this.close();
                        const t1 = yield Vd.enumerateDevices();
                        Ju(n) ? this._device = t1[n] : (this._device = t1.find((t1)=>t1.label === n || t1.deviceId === n), !this._device && 0 < t1.length && (this._device = t1[0]), Bu($u(this._device), `No matching device ${n}`));
                        const e1 = {
                            audio: {
                                echoCancellation: !1,
                                sampleRate: this.context.sampleRate,
                                noiseSuppression: !1,
                                mozNoiseSuppression: !1
                            }
                        };
                        this._device && (e1.audio.deviceId = this._device.deviceId);
                        var s = yield navigator.mediaDevices.getUserMedia(e1);
                        if (!this._stream) {
                            this._stream = s;
                            const n = this.context.createMediaStreamSource(s);
                            od(n, this.output), this._mediaStream = n;
                        }
                        return this;
                    });
                }
                close() {
                    return this._stream && this._mediaStream && (this._stream.getAudioTracks().forEach((t1)=>{
                        t1.stop();
                    }), this._stream = void 0, this._mediaStream.disconnect(), this._mediaStream = void 0), this._device = void 0, this;
                }
                static enumerateDevices() {
                    return ap(this, void 0, void 0, function*() {
                        return (yield navigator.mediaDevices.enumerateDevices()).filter((t1)=>"audioinput" === t1.kind);
                    });
                }
                get state() {
                    return this._stream && this._stream.active ? "started" : "stopped";
                }
                get deviceId() {
                    return this._device ? this._device.deviceId : void 0;
                }
                get groupId() {
                    return this._device ? this._device.groupId : void 0;
                }
                get label() {
                    return this._device ? this._device.label : void 0;
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t1) {
                    this._volume.mute = t1;
                }
                dispose() {
                    return super.dispose(), this.close(), this._volume.dispose(), this.volume.dispose(), this;
                }
                static get supported() {
                    return $u(navigator.mediaDevices) && $u(navigator.mediaDevices.getUserMedia);
                }
            }
            function Nd(s, n) {
                return ap(this, void 0, void 0, function*() {
                    const t1 = n / s.context.sampleRate, e1 = new Np(1, t1, s.context.sampleRate);
                    return new s.constructor(Object.assign(s.get(), {
                        frequency: 2 / t1,
                        detune: 0,
                        context: e1
                    })).toDestination().start(0), (yield e1.render()).getChannelData(0);
                });
            }
            class Pd extends cd {
                constructor(){
                    super(_p(Pd.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "ToneOscillatorNode", this._oscillator = this.context.createOscillator(), this._internalChannels = [
                        this._oscillator
                    ];
                    var t1 = _p(Pd.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    od(this._oscillator, this._gainNode), this.type = t1.type, this.frequency = new nd({
                        context: this.context,
                        param: this._oscillator.frequency,
                        units: "frequency",
                        value: t1.frequency
                    }), this.detune = new nd({
                        context: this.context,
                        param: this._oscillator.detune,
                        units: "cents",
                        value: t1.detune
                    }), qp(this, [
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(cd.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        type: "sine"
                    });
                }
                start(t1) {
                    t1 = this.toSeconds(t1);
                    return this.log("start", t1), this._startGain(t1), this._oscillator.start(t1), this;
                }
                _stopSource(t1) {
                    this._oscillator.stop(t1);
                }
                setPeriodicWave(t1) {
                    return this._oscillator.setPeriodicWave(t1), this;
                }
                get type() {
                    return this._oscillator.type;
                }
                set type(t1) {
                    this._oscillator.type = t1;
                }
                dispose() {
                    return super.dispose(), "started" === this.state && this.stop(), this._oscillator.disconnect(), this.frequency.dispose(), this.detune.dispose(), this;
                }
            }
            class jd extends Md {
                constructor(){
                    super(_p(jd.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "Oscillator", this._oscillator = null;
                    const t1 = _p(jd.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this.frequency = new ud({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), qp(this, "frequency"), this.detune = new ud({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), qp(this, "detune"), this._partials = t1.partials, this._partialCount = t1.partialCount, this._type = t1.type, t1.partialCount && "custom" !== t1.type && (this._type = this.baseType + t1.partialCount.toString()), this.phase = t1.phase;
                }
                static getDefaults() {
                    return Object.assign(Md.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        partialCount: 0,
                        partials: [],
                        phase: 0,
                        type: "sine"
                    });
                }
                _start(t1) {
                    var e1 = this.toSeconds(t1), t1 = new Pd({
                        context: this.context,
                        onended: ()=>this.onstop(this)
                    });
                    this._oscillator = t1, this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.start(e1);
                }
                _stop(t1) {
                    t1 = this.toSeconds(t1);
                    this._oscillator && this._oscillator.stop(t1);
                }
                _restart(t1) {
                    t1 = this.toSeconds(t1);
                    return this.log("restart", t1), this._oscillator && this._oscillator.cancelStop(), this._state.cancel(t1), this;
                }
                syncFrequency() {
                    return this.context.transport.syncSignal(this.frequency), this;
                }
                unsyncFrequency() {
                    return this.context.transport.unsyncSignal(this.frequency), this;
                }
                _getCachedPeriodicWave() {
                    if ("custom" === this._type) return jd._periodicWaveCache.find((t1)=>{
                        var s;
                        return t1.phase === this._phase && (t1 = t1.partials, s = this._partials, t1.length === s.length && t1.every((t1, e1)=>s[e1] === t1));
                    });
                    var t1 = jd._periodicWaveCache.find((t1)=>t1.type === this._type && t1.phase === this._phase);
                    return this._partialCount = t1 ? t1.partialCount : this._partialCount, t1;
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    this._type = t1;
                    const e1 = -1 !== [
                        "sine",
                        "square",
                        "sawtooth",
                        "triangle"
                    ].indexOf(t1);
                    if (0 === this._phase && e1) this._wave = void 0, this._partialCount = 0, null !== this._oscillator && (this._oscillator.type = t1);
                    else {
                        const e1 = this._getCachedPeriodicWave();
                        if ($u(e1)) {
                            const { partials: t1, wave: s } = e1;
                            this._wave = s, this._partials = t1, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave);
                        } else {
                            const [e1, n] = this._getRealImaginary(t1, this._phase), i = this.context.createPeriodicWave(e1, n);
                            this._wave = i, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave), jd._periodicWaveCache.push({
                                imag: n,
                                partialCount: this._partialCount,
                                partials: this._partials,
                                phase: this._phase,
                                real: e1,
                                type: this._type,
                                wave: this._wave
                            }), 100 < jd._periodicWaveCache.length && jd._periodicWaveCache.shift();
                        }
                    }
                }
                get baseType() {
                    return this._type.replace(this.partialCount.toString(), "");
                }
                set baseType(t1) {
                    this.partialCount && "custom" !== this._type && "custom" !== t1 ? this.type = t1 + this.partialCount : this.type = t1;
                }
                get partialCount() {
                    return this._partialCount;
                }
                set partialCount(t1) {
                    Uu(t1, 0);
                    let s = this._type;
                    var e1 = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
                    if (e1 && (s = e1[1]), "custom" !== this._type) this.type = 0 === t1 ? s : s + t1.toString();
                    else {
                        const s = new Float32Array(t1);
                        this._partials.forEach((t1, e1)=>s[e1] = t1), this._partials = Array.from(s), this.type = this._type;
                    }
                }
                _getRealImaginary(s, n) {
                    let i = 2048;
                    const r = new Float32Array(i), o = new Float32Array(i);
                    let a = 1;
                    if ("custom" === s) {
                        if (a = this._partials.length + 1, this._partialCount = this._partials.length, i = a, 0 === this._partials.length) return [
                            r,
                            o
                        ];
                    } else {
                        const n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(s);
                        n ? (a = parseInt(n[2], 10) + 1, this._partialCount = parseInt(n[2], 10), s = n[1], a = Math.max(a, 2), i = a) : this._partialCount = 0, this._partials = [];
                    }
                    for(let e1 = 1; e1 < i; ++e1){
                        const i = 2 / (e1 * Math.PI);
                        let t1;
                        switch(s){
                            case "sine":
                                t1 = e1 <= a ? 1 : 0, this._partials[e1 - 1] = t1;
                                break;
                            case "square":
                                t1 = 1 & e1 ? 2 * i : 0, this._partials[e1 - 1] = t1;
                                break;
                            case "sawtooth":
                                t1 = i * (1 & e1 ? 1 : -1), this._partials[e1 - 1] = t1;
                                break;
                            case "triangle":
                                t1 = 1 & e1 ? i * i * 2 * (e1 - 1 >> 1 & 1 ? -1 : 1) : 0, this._partials[e1 - 1] = t1;
                                break;
                            case "custom":
                                t1 = this._partials[e1 - 1];
                                break;
                            default:
                                throw new TypeError("Oscillator: invalid type: " + s);
                        }
                        0 !== t1 ? (r[e1] = -t1 * Math.sin(n * e1), o[e1] = t1 * Math.cos(n * e1)) : (r[e1] = 0, o[e1] = 0);
                    }
                    return [
                        r,
                        o
                    ];
                }
                _inverseFFT(e1, s, n) {
                    let i = 0;
                    var r = e1.length;
                    for(let t1 = 0; t1 < r; t1++)i += e1[t1] * Math.cos(t1 * n) + s[t1] * Math.sin(t1 * n);
                    return i;
                }
                getInitialValue() {
                    var [e1, s] = this._getRealImaginary(this._type, 0);
                    let n = 0;
                    var i = 2 * Math.PI;
                    for(let t1 = 0; t1 < 32; t1++)n = Math.max(this._inverseFFT(e1, s, t1 / 32 * i), n);
                    return Sp(-this._inverseFFT(e1, s, this._phase) / n, -1, 1);
                }
                get partials() {
                    return this._partials.slice(0, this.partialCount);
                }
                set partials(t1) {
                    this._partials = t1, this._partialCount = this._partials.length, t1.length && (this.type = "custom");
                }
                get phase() {
                    return this._phase * (180 / Math.PI);
                }
                set phase(t1) {
                    this._phase = t1 * Math.PI / 180, this.type = this._type;
                }
                asArray(t1 = 1024) {
                    return ap(this, void 0, void 0, function*() {
                        return Nd(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), null !== this._oscillator && this._oscillator.dispose(), this._wave = void 0, this.frequency.dispose(), this.detune.dispose(), this;
                }
            }
            jd._periodicWaveCache = [];
            class Ld extends id {
                constructor(){
                    super(Object.assign(_p(Ld.getDefaults(), arguments, [
                        "context"
                    ])));
                }
                connect(t1, e1 = 0, s = 0) {
                    return pd(this, t1, e1, s), this;
                }
            }
            class zd extends Ld {
                constructor(){
                    super(Object.assign(_p(zd.getDefaults(), arguments, [
                        "mapping",
                        "length"
                    ]))), this.name = "WaveShaper", this._shaper = this.context.createWaveShaper(), this.input = this._shaper, this.output = this._shaper;
                    var t1 = _p(zd.getDefaults(), arguments, [
                        "mapping",
                        "length"
                    ]);
                    ep(t1.mapping) || t1.mapping instanceof Float32Array ? this.curve = Float32Array.from(t1.mapping) : Hu(t1.mapping) && this.setMap(t1.mapping, t1.length);
                }
                static getDefaults() {
                    return Object.assign(ud.getDefaults(), {
                        length: 1024
                    });
                }
                setMap(s, n = 1024) {
                    const i = new Float32Array(n);
                    for(let t1 = 0, e1 = n; t1 < e1; t1++){
                        const n = t1 / (e1 - 1) * 2 - 1;
                        i[t1] = s(n, t1);
                    }
                    return this.curve = i, this;
                }
                get curve() {
                    return this._shaper.curve;
                }
                set curve(t1) {
                    this._shaper.curve = t1;
                }
                get oversample() {
                    return this._shaper.oversample;
                }
                set oversample(e1) {
                    Bu([
                        "none",
                        "2x",
                        "4x"
                    ].some((t1)=>t1.includes(e1)), "oversampling must be either 'none', '2x', or '4x'"), this._shaper.oversample = e1;
                }
                dispose() {
                    return super.dispose(), this._shaper.disconnect(), this;
                }
            }
            class Wd extends Ld {
                constructor(){
                    super(...arguments), this.name = "AudioToGain", this._norm = new zd({
                        context: this.context,
                        mapping: (t1)=>(t1 + 1) / 2
                    }), this.input = this._norm, this.output = this._norm;
                }
                dispose() {
                    return super.dispose(), this._norm.dispose(), this;
                }
            }
            class Bd extends ud {
                constructor(){
                    super(Object.assign(_p(Bd.getDefaults(), arguments, [
                        "value"
                    ]))), this.name = "Multiply", this.override = !1;
                    var t1 = _p(Bd.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._mult = this.input = this.output = new hd({
                        context: this.context,
                        minValue: t1.minValue,
                        maxValue: t1.maxValue
                    }), this.factor = this._param = this._mult.gain, this.factor.setValueAtTime(t1.value, 0);
                }
                static getDefaults() {
                    return Object.assign(ud.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._mult.dispose(), this;
                }
            }
            class Ud extends Md {
                constructor(){
                    super(_p(Ud.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ])), this.name = "AMOscillator", this._modulationScale = new Wd({
                        context: this.context
                    }), this._modulationNode = new hd({
                        context: this.context
                    });
                    var t1 = _p(Ud.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ]);
                    this._carrier = new jd({
                        context: this.context,
                        detune: t1.detune,
                        frequency: t1.frequency,
                        onstop: ()=>this.onstop(this),
                        phase: t1.phase,
                        type: t1.type
                    }), this.frequency = this._carrier.frequency, this.detune = this._carrier.detune, this._modulator = new jd({
                        context: this.context,
                        phase: t1.phase,
                        type: t1.modulationType
                    }), this.harmonicity = new Bd({
                        context: this.context,
                        units: "positive",
                        value: t1.harmonicity
                    }), this.frequency.chain(this.harmonicity, this._modulator.frequency), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), qp(this, [
                        "frequency",
                        "detune",
                        "harmonicity"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(jd.getDefaults(), {
                        harmonicity: 1,
                        modulationType: "square"
                    });
                }
                _start(t1) {
                    this._modulator.start(t1), this._carrier.start(t1);
                }
                _stop(t1) {
                    this._modulator.stop(t1), this._carrier.stop(t1);
                }
                _restart(t1) {
                    this._modulator.restart(t1), this._carrier.restart(t1);
                }
                get type() {
                    return this._carrier.type;
                }
                set type(t1) {
                    this._carrier.type = t1;
                }
                get baseType() {
                    return this._carrier.baseType;
                }
                set baseType(t1) {
                    this._carrier.baseType = t1;
                }
                get partialCount() {
                    return this._carrier.partialCount;
                }
                set partialCount(t1) {
                    this._carrier.partialCount = t1;
                }
                get modulationType() {
                    return this._modulator.type;
                }
                set modulationType(t1) {
                    this._modulator.type = t1;
                }
                get phase() {
                    return this._carrier.phase;
                }
                set phase(t1) {
                    this._carrier.phase = t1, this._modulator.phase = t1;
                }
                get partials() {
                    return this._carrier.partials;
                }
                set partials(t1) {
                    this._carrier.partials = t1;
                }
                asArray(t1 = 1024) {
                    return ap(this, void 0, void 0, function*() {
                        return Nd(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this._modulationScale.dispose(), this;
                }
            }
            class Gd extends Md {
                constructor(){
                    super(_p(Gd.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ])), this.name = "FMOscillator", this._modulationNode = new hd({
                        context: this.context,
                        gain: 0
                    });
                    var t1 = _p(Gd.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ]);
                    this._carrier = new jd({
                        context: this.context,
                        detune: t1.detune,
                        frequency: 0,
                        onstop: ()=>this.onstop(this),
                        phase: t1.phase,
                        type: t1.type
                    }), this.detune = this._carrier.detune, this.frequency = new ud({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), this._modulator = new jd({
                        context: this.context,
                        phase: t1.phase,
                        type: t1.modulationType
                    }), this.harmonicity = new Bd({
                        context: this.context,
                        units: "positive",
                        value: t1.harmonicity
                    }), this.modulationIndex = new Bd({
                        context: this.context,
                        units: "positive",
                        value: t1.modulationIndex
                    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this.detune.connect(this._modulator.detune), qp(this, [
                        "modulationIndex",
                        "frequency",
                        "detune",
                        "harmonicity"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(jd.getDefaults(), {
                        harmonicity: 1,
                        modulationIndex: 2,
                        modulationType: "square"
                    });
                }
                _start(t1) {
                    this._modulator.start(t1), this._carrier.start(t1);
                }
                _stop(t1) {
                    this._modulator.stop(t1), this._carrier.stop(t1);
                }
                _restart(t1) {
                    return this._modulator.restart(t1), this._carrier.restart(t1), this;
                }
                get type() {
                    return this._carrier.type;
                }
                set type(t1) {
                    this._carrier.type = t1;
                }
                get baseType() {
                    return this._carrier.baseType;
                }
                set baseType(t1) {
                    this._carrier.baseType = t1;
                }
                get partialCount() {
                    return this._carrier.partialCount;
                }
                set partialCount(t1) {
                    this._carrier.partialCount = t1;
                }
                get modulationType() {
                    return this._modulator.type;
                }
                set modulationType(t1) {
                    this._modulator.type = t1;
                }
                get phase() {
                    return this._carrier.phase;
                }
                set phase(t1) {
                    this._carrier.phase = t1, this._modulator.phase = t1;
                }
                get partials() {
                    return this._carrier.partials;
                }
                set partials(t1) {
                    this._carrier.partials = t1;
                }
                asArray(t1 = 1024) {
                    return ap(this, void 0, void 0, function*() {
                        return Nd(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this.modulationIndex.dispose(), this;
                }
            }
            class Qd extends Md {
                constructor(){
                    super(_p(Qd.getDefaults(), arguments, [
                        "frequency",
                        "width"
                    ])), this.name = "PulseOscillator", this._widthGate = new hd({
                        context: this.context,
                        gain: 0
                    }), this._thresh = new zd({
                        context: this.context,
                        mapping: (t1)=>t1 <= 0 ? -1 : 1
                    });
                    var t1 = _p(Qd.getDefaults(), arguments, [
                        "frequency",
                        "width"
                    ]);
                    this.width = new ud({
                        context: this.context,
                        units: "audioRange",
                        value: t1.width
                    }), this._triangle = new jd({
                        context: this.context,
                        detune: t1.detune,
                        frequency: t1.frequency,
                        onstop: ()=>this.onstop(this),
                        phase: t1.phase,
                        type: "triangle"
                    }), this.frequency = this._triangle.frequency, this.detune = this._triangle.detune, this._triangle.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), qp(this, [
                        "width",
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Md.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        phase: 0,
                        type: "pulse",
                        width: .2
                    });
                }
                _start(t1) {
                    t1 = this.toSeconds(t1), this._triangle.start(t1), this._widthGate.gain.setValueAtTime(1, t1);
                }
                _stop(t1) {
                    t1 = this.toSeconds(t1), this._triangle.stop(t1), this._widthGate.gain.cancelScheduledValues(t1), this._widthGate.gain.setValueAtTime(0, t1);
                }
                _restart(t1) {
                    this._triangle.restart(t1), this._widthGate.gain.cancelScheduledValues(t1), this._widthGate.gain.setValueAtTime(1, t1);
                }
                get phase() {
                    return this._triangle.phase;
                }
                set phase(t1) {
                    this._triangle.phase = t1;
                }
                get type() {
                    return "pulse";
                }
                get baseType() {
                    return "pulse";
                }
                get partials() {
                    return [];
                }
                get partialCount() {
                    return 0;
                }
                set carrierType(t1) {
                    this._triangle.type = t1;
                }
                asArray(t1 = 1024) {
                    return ap(this, void 0, void 0, function*() {
                        return Nd(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this._triangle.dispose(), this.width.dispose(), this._widthGate.dispose(), this._thresh.dispose(), this;
                }
            }
            class Zd extends Md {
                constructor(){
                    super(_p(Zd.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "spread"
                    ])), this.name = "FatOscillator", this._oscillators = [];
                    var t1 = _p(Zd.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "spread"
                    ]);
                    this.frequency = new ud({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), this.detune = new ud({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), this._spread = t1.spread, this._type = t1.type, this._phase = t1.phase, this._partials = t1.partials, this._partialCount = t1.partialCount, this.count = t1.count, qp(this, [
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(jd.getDefaults(), {
                        count: 3,
                        spread: 20,
                        type: "sawtooth"
                    });
                }
                _start(e1) {
                    e1 = this.toSeconds(e1), this._forEach((t1)=>t1.start(e1));
                }
                _stop(e1) {
                    e1 = this.toSeconds(e1), this._forEach((t1)=>t1.stop(e1));
                }
                _restart(e1) {
                    this._forEach((t1)=>t1.restart(e1));
                }
                _forEach(e1) {
                    for(let t1 = 0; t1 < this._oscillators.length; t1++)e1(this._oscillators[t1], t1);
                }
                get type() {
                    return this._type;
                }
                set type(e1) {
                    this._type = e1, this._forEach((t1)=>t1.type = e1);
                }
                get spread() {
                    return this._spread;
                }
                set spread(t1) {
                    if (this._spread = t1, 1 < this._oscillators.length) {
                        const s = -t1 / 2, n = t1 / (this._oscillators.length - 1);
                        this._forEach((t1, e1)=>t1.detune.value = s + n * e1);
                    }
                }
                get count() {
                    return this._oscillators.length;
                }
                set count(e1) {
                    if (Uu(e1, 1), this._oscillators.length !== e1) {
                        this._forEach((t1)=>t1.dispose()), this._oscillators = [];
                        for(let t1 = 0; t1 < e1; t1++){
                            const s = new jd({
                                context: this.context,
                                volume: -6 - 1.1 * e1,
                                type: this._type,
                                phase: this._phase + t1 / e1 * 360,
                                partialCount: this._partialCount,
                                onstop: 0 === t1 ? ()=>this.onstop(this) : Ip
                            });
                            "custom" === this.type && (s.partials = this._partials), this.frequency.connect(s.frequency), this.detune.connect(s.detune), s.detune.overridden = !1, s.connect(this.output), this._oscillators[t1] = s;
                        }
                        this.spread = this._spread, "started" === this.state && this._forEach((t1)=>t1.start());
                    }
                }
                get phase() {
                    return this._phase;
                }
                set phase(t1) {
                    this._phase = t1, this._forEach((t1, e1)=>t1.phase = this._phase + e1 / this.count * 360);
                }
                get baseType() {
                    return this._oscillators[0].baseType;
                }
                set baseType(e1) {
                    this._forEach((t1)=>t1.baseType = e1), this._type = this._oscillators[0].type;
                }
                get partials() {
                    return this._oscillators[0].partials;
                }
                set partials(e1) {
                    this._partials = e1, this._partialCount = this._partials.length, e1.length && (this._type = "custom", this._forEach((t1)=>t1.partials = e1));
                }
                get partialCount() {
                    return this._oscillators[0].partialCount;
                }
                set partialCount(e1) {
                    this._partialCount = e1, this._forEach((t1)=>t1.partialCount = e1), this._type = this._oscillators[0].type;
                }
                asArray(t1 = 1024) {
                    return ap(this, void 0, void 0, function*() {
                        return Nd(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this._forEach((t1)=>t1.dispose()), this;
                }
            }
            class Xd extends Md {
                constructor(){
                    super(_p(Xd.getDefaults(), arguments, [
                        "frequency",
                        "modulationFrequency"
                    ])), this.name = "PWMOscillator", this.sourceType = "pwm", this._scale = new Bd({
                        context: this.context,
                        value: 2
                    });
                    var t1 = _p(Xd.getDefaults(), arguments, [
                        "frequency",
                        "modulationFrequency"
                    ]);
                    this._pulse = new Qd({
                        context: this.context,
                        frequency: t1.modulationFrequency
                    }), this._pulse.carrierType = "sine", this.modulationFrequency = this._pulse.frequency, this._modulator = new jd({
                        context: this.context,
                        detune: t1.detune,
                        frequency: t1.frequency,
                        onstop: ()=>this.onstop(this),
                        phase: t1.phase
                    }), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), qp(this, [
                        "modulationFrequency",
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Md.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        modulationFrequency: .4,
                        phase: 0,
                        type: "pwm"
                    });
                }
                _start(t1) {
                    t1 = this.toSeconds(t1), this._modulator.start(t1), this._pulse.start(t1);
                }
                _stop(t1) {
                    t1 = this.toSeconds(t1), this._modulator.stop(t1), this._pulse.stop(t1);
                }
                _restart(t1) {
                    this._modulator.restart(t1), this._pulse.restart(t1);
                }
                get type() {
                    return "pwm";
                }
                get baseType() {
                    return "pwm";
                }
                get partials() {
                    return [];
                }
                get partialCount() {
                    return 0;
                }
                get phase() {
                    return this._modulator.phase;
                }
                set phase(t1) {
                    this._modulator.phase = t1;
                }
                asArray(t1 = 1024) {
                    return ap(this, void 0, void 0, function*() {
                        return Nd(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this._pulse.dispose(), this._scale.dispose(), this._modulator.dispose(), this;
                }
            }
            const Yd = {
                am: Ud,
                fat: Zd,
                fm: Gd,
                oscillator: jd,
                pulse: Qd,
                pwm: Xd
            };
            class $d extends Md {
                constructor(){
                    super(_p($d.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "OmniOscillator";
                    var t1 = _p($d.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this.frequency = new ud({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), this.detune = new ud({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), qp(this, [
                        "frequency",
                        "detune"
                    ]), this.set(t1);
                }
                static getDefaults() {
                    return Object.assign(jd.getDefaults(), Gd.getDefaults(), Ud.getDefaults(), Zd.getDefaults(), Qd.getDefaults(), Xd.getDefaults());
                }
                _start(t1) {
                    this._oscillator.start(t1);
                }
                _stop(t1) {
                    this._oscillator.stop(t1);
                }
                _restart(t1) {
                    return this._oscillator.restart(t1), this;
                }
                get type() {
                    let t1 = "";
                    return [
                        "am",
                        "fm",
                        "fat"
                    ].some((t1)=>this._sourceType === t1) && (t1 = this._sourceType), t1 + this._oscillator.type;
                }
                set type(t1) {
                    "fm" === t1.substr(0, 2) ? (this._createNewOscillator("fm"), this._oscillator = this._oscillator, this._oscillator.type = t1.substr(2)) : "am" === t1.substr(0, 2) ? (this._createNewOscillator("am"), this._oscillator = this._oscillator, this._oscillator.type = t1.substr(2)) : "fat" === t1.substr(0, 3) ? (this._createNewOscillator("fat"), this._oscillator = this._oscillator, this._oscillator.type = t1.substr(3)) : "pwm" === t1 ? (this._createNewOscillator("pwm"), this._oscillator = this._oscillator) : "pulse" === t1 ? this._createNewOscillator("pulse") : (this._createNewOscillator("oscillator"), this._oscillator = this._oscillator, this._oscillator.type = t1);
                }
                get partials() {
                    return this._oscillator.partials;
                }
                set partials(t1) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partials = t1);
                }
                get partialCount() {
                    return this._oscillator.partialCount;
                }
                set partialCount(t1) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partialCount = t1);
                }
                set(t1) {
                    return Reflect.has(t1, "type") && t1.type && (this.type = t1.type), super.set(t1), this;
                }
                _createNewOscillator(t1) {
                    if (t1 !== this._sourceType) {
                        this._sourceType = t1;
                        const e1 = Yd[t1], s = this.now();
                        if (this._oscillator) {
                            const t1 = this._oscillator;
                            t1.stop(s), this.context.setTimeout(()=>t1.dispose(), this.blockTime);
                        }
                        this._oscillator = new e1({
                            context: this.context
                        }), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this._oscillator.onstop = ()=>this.onstop(this), "started" === this.state && this._oscillator.start(s);
                    }
                }
                get phase() {
                    return this._oscillator.phase;
                }
                set phase(t1) {
                    this._oscillator.phase = t1;
                }
                get sourceType() {
                    return this._sourceType;
                }
                set sourceType(t1) {
                    let e1 = "sine";
                    "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e1 = this._oscillator.type), "fm" === t1 ? this.type = "fm" + e1 : "am" === t1 ? this.type = "am" + e1 : "fat" === t1 ? this.type = "fat" + e1 : "oscillator" === t1 ? this.type = e1 : "pulse" === t1 ? this.type = "pulse" : "pwm" === t1 && (this.type = "pwm");
                }
                _getOscType(t1, e1) {
                    return t1 instanceof Yd[e1];
                }
                get baseType() {
                    return this._oscillator.baseType;
                }
                set baseType(t1) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || "pulse" === t1 || "pwm" === t1 || (this._oscillator.baseType = t1);
                }
                get width() {
                    return this._getOscType(this._oscillator, "pulse") ? this._oscillator.width : void 0;
                }
                get count() {
                    return this._getOscType(this._oscillator, "fat") ? this._oscillator.count : void 0;
                }
                set count(t1) {
                    this._getOscType(this._oscillator, "fat") && Ju(t1) && (this._oscillator.count = t1);
                }
                get spread() {
                    return this._getOscType(this._oscillator, "fat") ? this._oscillator.spread : void 0;
                }
                set spread(t1) {
                    this._getOscType(this._oscillator, "fat") && Ju(t1) && (this._oscillator.spread = t1);
                }
                get modulationType() {
                    return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.modulationType : void 0;
                }
                set modulationType(t1) {
                    (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && sp(t1) && (this._oscillator.modulationType = t1);
                }
                get modulationIndex() {
                    return this._getOscType(this._oscillator, "fm") ? this._oscillator.modulationIndex : void 0;
                }
                get harmonicity() {
                    return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.harmonicity : void 0;
                }
                get modulationFrequency() {
                    return this._getOscType(this._oscillator, "pwm") ? this._oscillator.modulationFrequency : void 0;
                }
                asArray(t1 = 1024) {
                    return ap(this, void 0, void 0, function*() {
                        return Nd(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this.detune.dispose(), this.frequency.dispose(), this._oscillator.dispose(), this;
                }
            }
            class Hd extends ud {
                constructor(){
                    super(Object.assign(_p(Hd.getDefaults(), arguments, [
                        "value"
                    ]))), this.override = !1, this.name = "Add", this._sum = new hd({
                        context: this.context
                    }), this.input = this._sum, this.output = this._sum, this.addend = this._param, rd(this._constantSource, this._sum);
                }
                static getDefaults() {
                    return Object.assign(ud.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._sum.dispose(), this;
                }
            }
            class Jd extends Ld {
                constructor(){
                    super(Object.assign(_p(Jd.getDefaults(), arguments, [
                        "min",
                        "max"
                    ]))), this.name = "Scale";
                    var t1 = _p(Jd.getDefaults(), arguments, [
                        "min",
                        "max"
                    ]);
                    this._mult = this.input = new Bd({
                        context: this.context,
                        value: t1.max - t1.min
                    }), this._add = this.output = new Hd({
                        context: this.context,
                        value: t1.min
                    }), this._min = t1.min, this._max = t1.max, this.input.connect(this.output);
                }
                static getDefaults() {
                    return Object.assign(Ld.getDefaults(), {
                        max: 1,
                        min: 0
                    });
                }
                get min() {
                    return this._min;
                }
                set min(t1) {
                    this._min = t1, this._setRange();
                }
                get max() {
                    return this._max;
                }
                set max(t1) {
                    this._max = t1, this._setRange();
                }
                _setRange() {
                    this._add.value = this._min, this._mult.value = this._max - this._min;
                }
                dispose() {
                    return super.dispose(), this._add.dispose(), this._mult.dispose(), this;
                }
            }
            class Kd extends Ld {
                constructor(){
                    super(Object.assign(_p(Kd.getDefaults(), arguments))), this.name = "Zero", this._gain = new hd({
                        context: this.context
                    }), this.output = this._gain, this.input = void 0, od(this.context.getConstant(0), this._gain);
                }
                dispose() {
                    return super.dispose(), ad(this.context.getConstant(0), this._gain), this;
                }
            }
            class tf extends id {
                constructor(){
                    super(_p(tf.getDefaults(), arguments, [
                        "frequency",
                        "min",
                        "max"
                    ])), this.name = "LFO", this._stoppedValue = 0, this._units = "number", this.convert = !0, this._fromType = nd.prototype._fromType, this._toType = nd.prototype._toType, this._is = nd.prototype._is, this._clampValue = nd.prototype._clampValue;
                    var t1 = _p(tf.getDefaults(), arguments, [
                        "frequency",
                        "min",
                        "max"
                    ]);
                    this._oscillator = new jd(t1), this.frequency = this._oscillator.frequency, this._amplitudeGain = new hd({
                        context: this.context,
                        gain: t1.amplitude,
                        units: "normalRange"
                    }), this.amplitude = this._amplitudeGain.gain, this._stoppedSignal = new ud({
                        context: this.context,
                        units: "audioRange",
                        value: 0
                    }), this._zeros = new Kd({
                        context: this.context
                    }), this._a2g = new Wd({
                        context: this.context
                    }), this._scaler = this.output = new Jd({
                        context: this.context,
                        max: t1.max,
                        min: t1.min
                    }), this.units = t1.units, this.min = t1.min, this.max = t1.max, this._oscillator.chain(this._amplitudeGain, this._a2g, this._scaler), this._zeros.connect(this._a2g), this._stoppedSignal.connect(this._a2g), qp(this, [
                        "amplitude",
                        "frequency"
                    ]), this.phase = t1.phase;
                }
                static getDefaults() {
                    return Object.assign(jd.getDefaults(), {
                        amplitude: 1,
                        frequency: "4n",
                        max: 1,
                        min: 0,
                        type: "sine",
                        units: "number"
                    });
                }
                start(t1) {
                    return t1 = this.toSeconds(t1), this._stoppedSignal.setValueAtTime(0, t1), this._oscillator.start(t1), this;
                }
                stop(t1) {
                    return t1 = this.toSeconds(t1), this._stoppedSignal.setValueAtTime(this._stoppedValue, t1), this._oscillator.stop(t1), this;
                }
                sync() {
                    return this._oscillator.sync(), this._oscillator.syncFrequency(), this;
                }
                unsync() {
                    return this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this;
                }
                _setStoppedValue() {
                    this._stoppedValue = this._oscillator.getInitialValue(), this._stoppedSignal.value = this._stoppedValue;
                }
                get min() {
                    return this._toType(this._scaler.min);
                }
                set min(t1) {
                    t1 = this._fromType(t1), this._scaler.min = t1;
                }
                get max() {
                    return this._toType(this._scaler.max);
                }
                set max(t1) {
                    t1 = this._fromType(t1), this._scaler.max = t1;
                }
                get type() {
                    return this._oscillator.type;
                }
                set type(t1) {
                    this._oscillator.type = t1, this._setStoppedValue();
                }
                get partials() {
                    return this._oscillator.partials;
                }
                set partials(t1) {
                    this._oscillator.partials = t1, this._setStoppedValue();
                }
                get phase() {
                    return this._oscillator.phase;
                }
                set phase(t1) {
                    this._oscillator.phase = t1, this._setStoppedValue();
                }
                get units() {
                    return this._units;
                }
                set units(t1) {
                    var e1 = this.min, s = this.max;
                    this._units = t1, this.min = e1, this.max = s;
                }
                get state() {
                    return this._oscillator.state;
                }
                connect(t1, e1, s) {
                    return (t1 instanceof nd || t1 instanceof ud) && (this.convert = t1.convert, this.units = t1.units), pd(this, t1, e1, s), this;
                }
                dispose() {
                    return super.dispose(), this._oscillator.dispose(), this._stoppedSignal.dispose(), this._zeros.dispose(), this._scaler.dispose(), this._a2g.dispose(), this._amplitudeGain.dispose(), this.amplitude.dispose(), this;
                }
            }
            function ef(s, n = 1 / 0) {
                const i = new WeakMap;
                return function(t1, e1) {
                    Reflect.defineProperty(t1, e1, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return i.get(this);
                        },
                        set: function(t1) {
                            Uu(t1, s, n), i.set(this, t1);
                        }
                    });
                };
            }
            function sf(s, n = 1 / 0) {
                const i = new WeakMap;
                return function(t1, e1) {
                    Reflect.defineProperty(t1, e1, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return i.get(this);
                        },
                        set: function(t1) {
                            Uu(this.toSeconds(t1), s, n), i.set(this, t1);
                        }
                    });
                };
            }
            class nf extends Md {
                constructor(){
                    super(_p(nf.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "Player", this._activeSources = new Set;
                    var t1 = _p(nf.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    this._buffer = new Vp({
                        onload: this._onload.bind(this, t1.onload),
                        onerror: t1.onerror,
                        reverse: t1.reverse,
                        url: t1.url
                    }), this.autostart = t1.autostart, this._loop = t1.loop, this._loopStart = t1.loopStart, this._loopEnd = t1.loopEnd, this._playbackRate = t1.playbackRate, this.fadeIn = t1.fadeIn, this.fadeOut = t1.fadeOut;
                }
                static getDefaults() {
                    return Object.assign(Md.getDefaults(), {
                        autostart: !1,
                        fadeIn: 0,
                        fadeOut: 0,
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        onload: Ip,
                        onerror: Ip,
                        playbackRate: 1,
                        reverse: !1
                    });
                }
                load(t1) {
                    return ap(this, void 0, void 0, function*() {
                        return yield this._buffer.load(t1), this._onload(), this;
                    });
                }
                _onload(t1 = Ip) {
                    t1(), this.autostart && this.start();
                }
                _onSourceEnd(t1) {
                    this.onstop(this), this._activeSources.delete(t1), 0 !== this._activeSources.size || this._synced || "started" !== this._state.getValueAtTime(this.now()) || (this._state.cancel(this.now()), this._state.setStateAtTime("stopped", this.now()));
                }
                start(t1, e1, s) {
                    return super.start(t1, e1, s), this;
                }
                _start(t1, e1, s) {
                    e1 = this._loop ? mp(e1, this._loopStart) : mp(e1, 0);
                    var n = this.toSeconds(e1), e1 = s;
                    s = mp(s, Math.max(this._buffer.duration - n, 0));
                    s = this.toSeconds(s);
                    s /= this._playbackRate, t1 = this.toSeconds(t1);
                    const i = new Ed({
                        url: this._buffer,
                        context: this.context,
                        fadeIn: this.fadeIn,
                        fadeOut: this.fadeOut,
                        loop: this._loop,
                        loopEnd: this._loopEnd,
                        loopStart: this._loopStart,
                        onended: this._onSourceEnd.bind(this),
                        playbackRate: this._playbackRate
                    }).connect(this.output);
                    this._loop || this._synced || (this._state.cancel(t1 + s), this._state.setStateAtTime("stopped", t1 + s, {
                        implicitEnd: !0
                    })), this._activeSources.add(i), this._loop && Yu(e1) ? i.start(t1, n) : i.start(t1, n, s - this.toSeconds(this.fadeOut));
                }
                _stop(t1) {
                    const e1 = this.toSeconds(t1);
                    this._activeSources.forEach((t1)=>t1.stop(e1));
                }
                restart(t1, e1, s) {
                    return super.restart(t1, e1, s), this;
                }
                _restart(t1, e1, s) {
                    this._stop(t1), this._start(t1, e1, s);
                }
                seek(t1, e1) {
                    e1 = this.toSeconds(e1);
                    if ("started" === this._state.getValueAtTime(e1)) {
                        const s = this.toSeconds(t1);
                        this._stop(e1), this._start(e1, s);
                    }
                    return this;
                }
                setLoopPoints(t1, e1) {
                    return this.loopStart = t1, this.loopEnd = e1, this;
                }
                get loopStart() {
                    return this._loopStart;
                }
                set loopStart(e1) {
                    this._loopStart = e1, this.buffer.loaded && Uu(this.toSeconds(e1), 0, this.buffer.duration), this._activeSources.forEach((t1)=>{
                        t1.loopStart = e1;
                    });
                }
                get loopEnd() {
                    return this._loopEnd;
                }
                set loopEnd(e1) {
                    this._loopEnd = e1, this.buffer.loaded && Uu(this.toSeconds(e1), 0, this.buffer.duration), this._activeSources.forEach((t1)=>{
                        t1.loopEnd = e1;
                    });
                }
                get buffer() {
                    return this._buffer;
                }
                set buffer(t1) {
                    this._buffer.set(t1);
                }
                get loop() {
                    return this._loop;
                }
                set loop(e1) {
                    if (this._loop !== e1 && (this._loop = e1, this._activeSources.forEach((t1)=>{
                        t1.loop = e1;
                    }), e1)) {
                        const e1 = this._state.getNextState("stopped", this.now());
                        e1 && this._state.cancel(e1.time);
                    }
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(e1) {
                    this._playbackRate = e1;
                    const s = this.now(), t1 = this._state.getNextState("stopped", s);
                    t1 && t1.implicitEnd && (this._state.cancel(t1.time), this._activeSources.forEach((t1)=>t1.cancelStop())), this._activeSources.forEach((t1)=>{
                        t1.playbackRate.setValueAtTime(e1, s);
                    });
                }
                get reverse() {
                    return this._buffer.reverse;
                }
                set reverse(t1) {
                    this._buffer.reverse = t1;
                }
                get loaded() {
                    return this._buffer.loaded;
                }
                dispose() {
                    return super.dispose(), this._activeSources.forEach((t1)=>t1.dispose()), this._activeSources.clear(), this._buffer.dispose(), this;
                }
            }
            op([
                sf(0)
            ], nf.prototype, "fadeIn", void 0), op([
                sf(0)
            ], nf.prototype, "fadeOut", void 0);
            class rf extends id {
                constructor(){
                    super(_p(rf.getDefaults(), arguments, [
                        "urls",
                        "onload"
                    ], "urls")), this.name = "Players", this.input = void 0, this._players = new Map;
                    var t1 = _p(rf.getDefaults(), arguments, [
                        "urls",
                        "onload"
                    ], "urls");
                    this._volume = this.output = new Sd({
                        context: this.context,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, qp(this, "volume"), this._buffers = new vd({
                        urls: t1.urls,
                        onload: t1.onload,
                        baseUrl: t1.baseUrl,
                        onerror: t1.onerror
                    }), this.mute = t1.mute, this._fadeIn = t1.fadeIn, this._fadeOut = t1.fadeOut;
                }
                static getDefaults() {
                    return Object.assign(Md.getDefaults(), {
                        baseUrl: "",
                        fadeIn: 0,
                        fadeOut: 0,
                        mute: !1,
                        onload: Ip,
                        onerror: Ip,
                        urls: {},
                        volume: 0
                    });
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t1) {
                    this._volume.mute = t1;
                }
                get fadeIn() {
                    return this._fadeIn;
                }
                set fadeIn(e1) {
                    this._fadeIn = e1, this._players.forEach((t1)=>{
                        t1.fadeIn = e1;
                    });
                }
                get fadeOut() {
                    return this._fadeOut;
                }
                set fadeOut(e1) {
                    this._fadeOut = e1, this._players.forEach((t1)=>{
                        t1.fadeOut = e1;
                    });
                }
                get state() {
                    return Array.from(this._players).some(([, t1])=>"started" === t1.state) ? "started" : "stopped";
                }
                has(t1) {
                    return this._buffers.has(t1);
                }
                player(t1) {
                    var e1;
                    return Bu(this.has(t1), `No Player with the name ${t1} exists on this object`), this._players.has(t1) || (e1 = new nf({
                        context: this.context,
                        fadeIn: this._fadeIn,
                        fadeOut: this._fadeOut,
                        url: this._buffers.get(t1)
                    }).connect(this.output), this._players.set(t1, e1)), this._players.get(t1);
                }
                get loaded() {
                    return this._buffers.loaded;
                }
                add(t1, e1, s) {
                    return Bu(!this._buffers.has(t1), "A buffer with that name already exists on this object"), this._buffers.add(t1, e1, s), this;
                }
                stopAll(e1) {
                    return this._players.forEach((t1)=>t1.stop(e1)), this;
                }
                dispose() {
                    return super.dispose(), this._volume.dispose(), this.volume.dispose(), this._players.forEach((t1)=>t1.dispose()), this._buffers.dispose(), this;
                }
            }
            class of extends Md {
                constructor(){
                    super(_p(of.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "GrainPlayer", this._loopStart = 0, this._loopEnd = 0, this._activeSources = [];
                    var t1 = _p(of.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    this.buffer = new Vp({
                        onload: t1.onload,
                        onerror: t1.onerror,
                        reverse: t1.reverse,
                        url: t1.url
                    }), this._clock = new md({
                        context: this.context,
                        callback: this._tick.bind(this),
                        frequency: 1 / t1.grainSize
                    }), this._playbackRate = t1.playbackRate, this._grainSize = t1.grainSize, this._overlap = t1.overlap, this.detune = t1.detune, this.overlap = t1.overlap, this.loop = t1.loop, this.playbackRate = t1.playbackRate, this.grainSize = t1.grainSize, this.loopStart = t1.loopStart, this.loopEnd = t1.loopEnd, this.reverse = t1.reverse, this._clock.on("stop", this._onstop.bind(this));
                }
                static getDefaults() {
                    return Object.assign(Md.getDefaults(), {
                        onload: Ip,
                        onerror: Ip,
                        overlap: .1,
                        grainSize: .2,
                        playbackRate: 1,
                        detune: 0,
                        loop: !1,
                        loopStart: 0,
                        loopEnd: 0,
                        reverse: !1
                    });
                }
                _start(t1, e1, s) {
                    e1 = mp(e1, 0), e1 = this.toSeconds(e1), t1 = this.toSeconds(t1);
                    var n = 1 / this._clock.frequency.getValueAtTime(t1);
                    this._clock.start(t1, e1 / n), s && this.stop(t1 + this.toSeconds(s));
                }
                restart(t1, e1, s) {
                    return super.restart(t1, e1, s), this;
                }
                _restart(t1, e1, s) {
                    this._stop(t1), this._start(t1, e1, s);
                }
                _stop(t1) {
                    this._clock.stop(t1);
                }
                _onstop(e1) {
                    this._activeSources.forEach((t1)=>{
                        t1.fadeOut = 0, t1.stop(e1);
                    }), this.onstop(this);
                }
                _tick(t1) {
                    var e1 = this._clock.getTicksAtTime(t1), s = e1 * this._grainSize;
                    if (this.log("offset", s), !this.loop && s > this.buffer.duration) this.stop(t1);
                    else {
                        const n = s < this._overlap ? 0 : this._overlap, i = new Ed({
                            context: this.context,
                            url: this.buffer,
                            fadeIn: n,
                            fadeOut: this._overlap,
                            loop: this.loop,
                            loopStart: this._loopStart,
                            loopEnd: this._loopEnd,
                            playbackRate: Up(this.detune / 100)
                        }).connect(this.output);
                        i.start(t1, this._grainSize * e1), i.stop(t1 + this._grainSize / this.playbackRate), this._activeSources.push(i), i.onended = ()=>{
                            var t1 = this._activeSources.indexOf(i);
                            -1 !== t1 && this._activeSources.splice(t1, 1);
                        };
                    }
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t1) {
                    Uu(t1, .001), this._playbackRate = t1, this.grainSize = this._grainSize;
                }
                get loopStart() {
                    return this._loopStart;
                }
                set loopStart(t1) {
                    this.buffer.loaded && Uu(this.toSeconds(t1), 0, this.buffer.duration), this._loopStart = this.toSeconds(t1);
                }
                get loopEnd() {
                    return this._loopEnd;
                }
                set loopEnd(t1) {
                    this.buffer.loaded && Uu(this.toSeconds(t1), 0, this.buffer.duration), this._loopEnd = this.toSeconds(t1);
                }
                get reverse() {
                    return this.buffer.reverse;
                }
                set reverse(t1) {
                    this.buffer.reverse = t1;
                }
                get grainSize() {
                    return this._grainSize;
                }
                set grainSize(t1) {
                    this._grainSize = this.toSeconds(t1), this._clock.frequency.setValueAtTime(this._playbackRate / this._grainSize, this.now());
                }
                get overlap() {
                    return this._overlap;
                }
                set overlap(t1) {
                    t1 = this.toSeconds(t1);
                    Uu(t1, 0), this._overlap = t1;
                }
                get loaded() {
                    return this.buffer.loaded;
                }
                dispose() {
                    return super.dispose(), this.buffer.dispose(), this._clock.dispose(), this._activeSources.forEach((t1)=>t1.dispose()), this;
                }
            }
            class af extends Ld {
                constructor(){
                    super(...arguments), this.name = "Abs", this._abs = new zd({
                        context: this.context,
                        mapping: (t1)=>Math.abs(t1) < .001 ? 0 : Math.abs(t1)
                    }), this.input = this._abs, this.output = this._abs;
                }
                dispose() {
                    return super.dispose(), this._abs.dispose(), this;
                }
            }
            class hf extends Ld {
                constructor(){
                    super(...arguments), this.name = "GainToAudio", this._norm = new zd({
                        context: this.context,
                        mapping: (t1)=>2 * Math.abs(t1) - 1
                    }), this.input = this._norm, this.output = this._norm;
                }
                dispose() {
                    return super.dispose(), this._norm.dispose(), this;
                }
            }
            class cf extends Ld {
                constructor(){
                    super(...arguments), this.name = "Negate", this._multiply = new Bd({
                        context: this.context,
                        value: -1
                    }), this.input = this._multiply, this.output = this._multiply;
                }
                dispose() {
                    return super.dispose(), this._multiply.dispose(), this;
                }
            }
            class lf extends ud {
                constructor(){
                    super(Object.assign(_p(lf.getDefaults(), arguments, [
                        "value"
                    ]))), this.override = !1, this.name = "Subtract", this._sum = new hd({
                        context: this.context
                    }), this.input = this._sum, this.output = this._sum, this._neg = new cf({
                        context: this.context
                    }), this.subtrahend = this._param, rd(this._constantSource, this._neg, this._sum);
                }
                static getDefaults() {
                    return Object.assign(ud.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._neg.dispose(), this._sum.dispose(), this;
                }
            }
            class uf extends Ld {
                constructor(){
                    super(Object.assign(_p(uf.getDefaults(), arguments))), this.name = "GreaterThanZero", this._thresh = this.output = new zd({
                        context: this.context,
                        length: 127,
                        mapping: (t1)=>t1 <= 0 ? 0 : 1
                    }), this._scale = this.input = new Bd({
                        context: this.context,
                        value: 1e4
                    }), this._scale.connect(this._thresh);
                }
                dispose() {
                    return super.dispose(), this._scale.dispose(), this._thresh.dispose(), this;
                }
            }
            class pf extends ud {
                constructor(){
                    super(Object.assign(_p(pf.getDefaults(), arguments, [
                        "value"
                    ]))), this.name = "GreaterThan", this.override = !1;
                    var t1 = _p(pf.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._subtract = this.input = new lf({
                        context: this.context,
                        value: t1.value
                    }), this._gtz = this.output = new uf({
                        context: this.context
                    }), this.comparator = this._param = this._subtract.subtrahend, qp(this, "comparator"), this._subtract.connect(this._gtz);
                }
                static getDefaults() {
                    return Object.assign(ud.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._gtz.dispose(), this._subtract.dispose(), this.comparator.dispose(), this;
                }
            }
            class df extends Ld {
                constructor(){
                    super(Object.assign(_p(df.getDefaults(), arguments, [
                        "value"
                    ]))), this.name = "Pow";
                    var t1 = _p(df.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._exponentScaler = this.input = this.output = new zd({
                        context: this.context,
                        mapping: this._expFunc(t1.value),
                        length: 8192
                    }), this._exponent = t1.value;
                }
                static getDefaults() {
                    return Object.assign(Ld.getDefaults(), {
                        value: 1
                    });
                }
                _expFunc(e1) {
                    return (t1)=>Math.pow(Math.abs(t1), e1);
                }
                get value() {
                    return this._exponent;
                }
                set value(t1) {
                    this._exponent = t1, this._exponentScaler.setMap(this._expFunc(this._exponent));
                }
                dispose() {
                    return super.dispose(), this._exponentScaler.dispose(), this;
                }
            }
            class ff extends Jd {
                constructor(){
                    super(Object.assign(_p(ff.getDefaults(), arguments, [
                        "min",
                        "max",
                        "exponent"
                    ]))), this.name = "ScaleExp";
                    var t1 = _p(ff.getDefaults(), arguments, [
                        "min",
                        "max",
                        "exponent"
                    ]);
                    this.input = this._exp = new df({
                        context: this.context,
                        value: t1.exponent
                    }), this._exp.connect(this._mult);
                }
                static getDefaults() {
                    return Object.assign(Jd.getDefaults(), {
                        exponent: 1
                    });
                }
                get exponent() {
                    return this._exp.value;
                }
                set exponent(t1) {
                    this._exp.value = t1;
                }
                dispose() {
                    return super.dispose(), this._exp.dispose(), this;
                }
            }
            class _f extends ud {
                constructor(){
                    super(_p(ud.getDefaults(), arguments, [
                        "value",
                        "units"
                    ])), this.name = "SyncedSignal", this.override = !1;
                    var t1 = _p(ud.getDefaults(), arguments, [
                        "value",
                        "units"
                    ]);
                    this._lastVal = t1.value, this._synced = this.context.transport.scheduleRepeat(this._onTick.bind(this), "1i"), this._syncedCallback = this._anchorValue.bind(this), this.context.transport.on("start", this._syncedCallback), this.context.transport.on("pause", this._syncedCallback), this.context.transport.on("stop", this._syncedCallback), this._constantSource.disconnect(), this._constantSource.stop(0), this._constantSource = this.output = new ld({
                        context: this.context,
                        offset: t1.value,
                        units: t1.units
                    }).start(0), this.setValueAtTime(t1.value, 0);
                }
                _onTick(t1) {
                    var e1 = super.getValueAtTime(this.context.transport.seconds);
                    this._lastVal !== e1 && (this._lastVal = e1, this._constantSource.offset.setValueAtTime(e1, t1));
                }
                _anchorValue(t1) {
                    var e1 = super.getValueAtTime(this.context.transport.seconds);
                    this._lastVal = e1, this._constantSource.offset.cancelAndHoldAtTime(t1), this._constantSource.offset.setValueAtTime(e1, t1);
                }
                getValueAtTime(t1) {
                    t1 = new td(this.context, t1).toSeconds();
                    return super.getValueAtTime(t1);
                }
                setValueAtTime(t1, e1) {
                    e1 = new td(this.context, e1).toSeconds();
                    return super.setValueAtTime(t1, e1), this;
                }
                linearRampToValueAtTime(t1, e1) {
                    e1 = new td(this.context, e1).toSeconds();
                    return super.linearRampToValueAtTime(t1, e1), this;
                }
                exponentialRampToValueAtTime(t1, e1) {
                    e1 = new td(this.context, e1).toSeconds();
                    return super.exponentialRampToValueAtTime(t1, e1), this;
                }
                setTargetAtTime(t1, e1, s) {
                    e1 = new td(this.context, e1).toSeconds();
                    return super.setTargetAtTime(t1, e1, s), this;
                }
                cancelScheduledValues(t1) {
                    t1 = new td(this.context, t1).toSeconds();
                    return super.cancelScheduledValues(t1), this;
                }
                setValueCurveAtTime(t1, e1, s, n) {
                    e1 = new td(this.context, e1).toSeconds();
                    return s = this.toSeconds(s), super.setValueCurveAtTime(t1, e1, s, n), this;
                }
                cancelAndHoldAtTime(t1) {
                    t1 = new td(this.context, t1).toSeconds();
                    return super.cancelAndHoldAtTime(t1), this;
                }
                setRampPoint(t1) {
                    t1 = new td(this.context, t1).toSeconds();
                    return super.setRampPoint(t1), this;
                }
                exponentialRampTo(t1, e1, s) {
                    s = new td(this.context, s).toSeconds();
                    return super.exponentialRampTo(t1, e1, s), this;
                }
                linearRampTo(t1, e1, s) {
                    s = new td(this.context, s).toSeconds();
                    return super.linearRampTo(t1, e1, s), this;
                }
                targetRampTo(t1, e1, s) {
                    s = new td(this.context, s).toSeconds();
                    return super.targetRampTo(t1, e1, s), this;
                }
                dispose() {
                    return super.dispose(), this.context.transport.clear(this._synced), this.context.transport.off("start", this._syncedCallback), this.context.transport.off("pause", this._syncedCallback), this.context.transport.off("stop", this._syncedCallback), this._constantSource.dispose(), this;
                }
            }
            class mf extends id {
                constructor(){
                    super(_p(mf.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ])), this.name = "Envelope", this._sig = new ud({
                        context: this.context,
                        value: 0
                    }), this.output = this._sig, this.input = void 0;
                    var t1 = _p(mf.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ]);
                    this.attack = t1.attack, this.decay = t1.decay, this.sustain = t1.sustain, this.release = t1.release, this.attackCurve = t1.attackCurve, this.releaseCurve = t1.releaseCurve, this.decayCurve = t1.decayCurve;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        attack: .01,
                        attackCurve: "linear",
                        decay: .1,
                        decayCurve: "exponential",
                        release: 1,
                        releaseCurve: "exponential",
                        sustain: .5
                    });
                }
                get value() {
                    return this.getValueAtTime(this.now());
                }
                _getCurve(e1, s) {
                    if (sp(e1)) return e1;
                    {
                        let t1;
                        for(t1 in gf)if (gf[t1][s] === e1) return t1;
                        return e1;
                    }
                }
                _setCurve(t1, e1, s) {
                    if (sp(s) && Reflect.has(gf, s)) {
                        var n = gf[s];
                        Ku(n) ? "_decayCurve" !== t1 && (this[t1] = n[e1]) : this[t1] = n;
                    } else {
                        if (!ep(s) || "_decayCurve" === t1) throw new Error("Envelope: invalid curve: " + s);
                        this[t1] = s;
                    }
                }
                get attackCurve() {
                    return this._getCurve(this._attackCurve, "In");
                }
                set attackCurve(t1) {
                    this._setCurve("_attackCurve", "In", t1);
                }
                get releaseCurve() {
                    return this._getCurve(this._releaseCurve, "Out");
                }
                set releaseCurve(t1) {
                    this._setCurve("_releaseCurve", "Out", t1);
                }
                get decayCurve() {
                    return this._decayCurve;
                }
                set decayCurve(e1) {
                    Bu([
                        "linear",
                        "exponential"
                    ].some((t1)=>t1 === e1), `Invalid envelope curve: ${e1}`), this._decayCurve = e1;
                }
                triggerAttack(t1, s = 1) {
                    this.log("triggerAttack", t1, s), t1 = this.toSeconds(t1);
                    let n = this.toSeconds(this.attack);
                    const e1 = this.toSeconds(this.decay), i = this.getValueAtTime(t1);
                    if (0 < i && (n = (1 - i) / (1 / n)), n < this.sampleTime) this._sig.cancelScheduledValues(t1), this._sig.setValueAtTime(s, t1);
                    else if ("linear" === this._attackCurve) this._sig.linearRampTo(s, n, t1);
                    else if ("exponential" === this._attackCurve) this._sig.targetRampTo(s, n, t1);
                    else {
                        this._sig.cancelAndHoldAtTime(t1);
                        let e1 = this._attackCurve;
                        for(let t1 = 1; t1 < e1.length; t1++)if (e1[t1 - 1] <= i && i <= e1[t1]) {
                            e1 = this._attackCurve.slice(t1), e1[0] = i;
                            break;
                        }
                        this._sig.setValueCurveAtTime(e1, t1, n, s);
                    }
                    if (e1 && this.sustain < 1) {
                        const i = s * this.sustain, r = t1 + n;
                        this.log("decay", r), "linear" === this._decayCurve ? this._sig.linearRampToValueAtTime(i, e1 + r) : this._sig.exponentialApproachValueAtTime(i, r, e1);
                    }
                    return this;
                }
                triggerRelease(t1) {
                    this.log("triggerRelease", t1), t1 = this.toSeconds(t1);
                    var e1, s = this.getValueAtTime(t1);
                    return 0 < s && ((e1 = this.toSeconds(this.release)) < this.sampleTime ? this._sig.setValueAtTime(0, t1) : "linear" === this._releaseCurve ? this._sig.linearRampTo(0, e1, t1) : "exponential" === this._releaseCurve ? this._sig.targetRampTo(0, e1, t1) : (Bu(ep(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array"), this._sig.cancelAndHoldAtTime(t1), this._sig.setValueCurveAtTime(this._releaseCurve, t1, e1, s))), this;
                }
                getValueAtTime(t1) {
                    return this._sig.getValueAtTime(t1);
                }
                triggerAttackRelease(t1, e1, s = 1) {
                    return e1 = this.toSeconds(e1), this.triggerAttack(e1, s), this.triggerRelease(e1 + this.toSeconds(t1)), this;
                }
                cancel(t1) {
                    return this._sig.cancelScheduledValues(this.toSeconds(t1)), this;
                }
                connect(t1, e1 = 0, s = 0) {
                    return pd(this, t1, e1, s), this;
                }
                asArray(a = 1024) {
                    return ap(this, void 0, void 0, function*() {
                        const t1 = a / this.context.sampleRate, e1 = new Np(1, t1, this.context.sampleRate), s = this.toSeconds(this.attack) + this.toSeconds(this.decay), n = s + this.toSeconds(this.release), i = .1 * n, r = n + i, o = new this.constructor(Object.assign(this.get(), {
                            attack: t1 * this.toSeconds(this.attack) / r,
                            decay: t1 * this.toSeconds(this.decay) / r,
                            release: t1 * this.toSeconds(this.release) / r,
                            context: e1
                        }));
                        return o._sig.toDestination(), o.triggerAttackRelease(t1 * (s + i) / r, 0), (yield e1.render()).getChannelData(0);
                    });
                }
                dispose() {
                    return super.dispose(), this._sig.dispose(), this;
                }
            }
            op([
                sf(0)
            ], mf.prototype, "attack", void 0), op([
                sf(0)
            ], mf.prototype, "decay", void 0), op([
                ef(0, 1)
            ], mf.prototype, "sustain", void 0), op([
                sf(0)
            ], mf.prototype, "release", void 0);
            const gf = (()=>{
                const t1 = 128;
                let e1, s;
                const n = [];
                for(e1 = 0; e1 < t1; e1++)n[e1] = Math.sin(e1 / 127 * (Math.PI / 2));
                const i = [];
                for(e1 = 0; e1 < 127; e1++){
                    s = e1 / 127;
                    const t1 = Math.sin(s * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                    i[e1] = t1 / 10 + .83 * s;
                }
                i[127] = 1;
                const r = [];
                for(e1 = 0; e1 < t1; e1++)r[e1] = Math.ceil(e1 / 127 * 5) / 5;
                const o = [];
                for(e1 = 0; e1 < t1; e1++)s = e1 / 127, o[e1] = .5 * (1 - Math.cos(Math.PI * s));
                const a = [];
                for(e1 = 0; e1 < t1; e1++){
                    s = e1 / 127;
                    const t1 = 4 * Math.pow(s, 3) + .2, n = Math.cos(t1 * Math.PI * 2 * s);
                    a[e1] = Math.abs(n * (1 - s));
                }
                function h(e1) {
                    const s = new Array(e1.length);
                    for(let t1 = 0; t1 < e1.length; t1++)s[t1] = 1 - e1[t1];
                    return s;
                }
                return {
                    bounce: {
                        In: h(a),
                        Out: a
                    },
                    cosine: {
                        In: n,
                        Out: n.slice(0).reverse()
                    },
                    exponential: "exponential",
                    linear: "linear",
                    ripple: {
                        In: i,
                        Out: h(i)
                    },
                    sine: {
                        In: o,
                        Out: h(o)
                    },
                    step: {
                        In: r,
                        Out: h(r)
                    }
                };
            })();
            class vf extends id {
                constructor(){
                    super(_p(vf.getDefaults(), arguments)), this._scheduledEvents = [], this._synced = !1, this._original_triggerAttack = this.triggerAttack, this._original_triggerRelease = this.triggerRelease;
                    var t1 = _p(vf.getDefaults(), arguments);
                    this._volume = this.output = new Sd({
                        context: this.context,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, qp(this, "volume");
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        volume: 0
                    });
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0)), this;
                }
                _syncState() {
                    let t1 = !1;
                    return this._synced || (this._synced = !0, t1 = !0), t1;
                }
                _syncMethod(t1, s) {
                    const n = this["_original_" + t1] = this[t1];
                    this[t1] = (...e1)=>{
                        var t1 = e1[s], t1 = this.context.transport.schedule((t1)=>{
                            e1[s] = t1, n.apply(this, e1);
                        }, t1);
                        this._scheduledEvents.push(t1);
                    };
                }
                unsync() {
                    return this._scheduledEvents.forEach((t1)=>this.context.transport.clear(t1)), this._scheduledEvents = [], this._synced && (this._synced = !1, this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease), this;
                }
                triggerAttackRelease(t1, e1, s, n) {
                    s = this.toSeconds(s), e1 = this.toSeconds(e1);
                    return this.triggerAttack(t1, s, n), this.triggerRelease(s + e1), this;
                }
                dispose() {
                    return super.dispose(), this._volume.dispose(), this.unsync(), this._scheduledEvents = [], this;
                }
            }
            class yf extends vf {
                constructor(){
                    super(_p(yf.getDefaults(), arguments));
                    var t1 = _p(yf.getDefaults(), arguments);
                    this.portamento = t1.portamento, this.onsilence = t1.onsilence;
                }
                static getDefaults() {
                    return Object.assign(vf.getDefaults(), {
                        detune: 0,
                        onsilence: Ip,
                        portamento: 0
                    });
                }
                triggerAttack(t1, e1, s = 1) {
                    this.log("triggerAttack", t1, e1, s);
                    e1 = this.toSeconds(e1);
                    return this._triggerEnvelopeAttack(e1, s), this.setNote(t1, e1), this;
                }
                triggerRelease(t1) {
                    this.log("triggerRelease", t1);
                    t1 = this.toSeconds(t1);
                    return this._triggerEnvelopeRelease(t1), this;
                }
                setNote(t1, e1) {
                    e1 = this.toSeconds(e1), t1 = t1 instanceof Hp ? t1.toFrequency() : t1;
                    if (0 < this.portamento && .05 < this.getLevelAtTime(e1)) {
                        const s = this.toSeconds(this.portamento);
                        this.frequency.exponentialRampTo(t1, s, e1);
                    } else this.frequency.setValueAtTime(t1, e1);
                    return this;
                }
            }
            op([
                sf(0)
            ], yf.prototype, "portamento", void 0);
            class xf extends mf {
                constructor(){
                    super(_p(xf.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ])), this.name = "AmplitudeEnvelope", this._gainNode = new hd({
                        context: this.context,
                        gain: 0
                    }), this.output = this._gainNode, this.input = this._gainNode, this._sig.connect(this._gainNode.gain), this.output = this._gainNode, this.input = this._gainNode;
                }
                dispose() {
                    return super.dispose(), this._gainNode.dispose(), this;
                }
            }
            class wf extends yf {
                constructor(){
                    super(_p(wf.getDefaults(), arguments)), this.name = "Synth";
                    var t1 = _p(wf.getDefaults(), arguments);
                    this.oscillator = new $d(Object.assign({
                        context: this.context,
                        detune: t1.detune,
                        onstop: ()=>this.onsilence(this)
                    }, t1.oscillator)), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new xf(Object.assign({
                        context: this.context
                    }, t1.envelope)), this.oscillator.chain(this.envelope, this.output), qp(this, [
                        "oscillator",
                        "frequency",
                        "detune",
                        "envelope"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(yf.getDefaults(), {
                        envelope: Object.assign(gp(mf.getDefaults(), Object.keys(id.getDefaults())), {
                            attack: .005,
                            decay: .1,
                            release: 1,
                            sustain: .3
                        }),
                        oscillator: Object.assign(gp($d.getDefaults(), [
                            ...Object.keys(Md.getDefaults()),
                            "frequency",
                            "detune"
                        ]), {
                            type: "triangle"
                        })
                    });
                }
                _triggerEnvelopeAttack(t1, e1) {
                    if (this.envelope.triggerAttack(t1, e1), this.oscillator.start(t1), 0 === this.envelope.sustain) {
                        const e1 = this.toSeconds(this.envelope.attack), s = this.toSeconds(this.envelope.decay);
                        this.oscillator.stop(t1 + e1 + s);
                    }
                }
                _triggerEnvelopeRelease(t1) {
                    this.envelope.triggerRelease(t1), this.oscillator.stop(t1 + this.toSeconds(this.envelope.release));
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.getValueAtTime(t1);
                }
                dispose() {
                    return super.dispose(), this.oscillator.dispose(), this.envelope.dispose(), this;
                }
            }
            class bf extends yf {
                constructor(){
                    super(_p(bf.getDefaults(), arguments)), this.name = "ModulationSynth";
                    var t1 = _p(bf.getDefaults(), arguments);
                    this._carrier = new wf({
                        context: this.context,
                        oscillator: t1.oscillator,
                        envelope: t1.envelope,
                        onsilence: ()=>this.onsilence(this),
                        volume: -10
                    }), this._modulator = new wf({
                        context: this.context,
                        oscillator: t1.modulation,
                        envelope: t1.modulationEnvelope,
                        volume: -10
                    }), this.oscillator = this._carrier.oscillator, this.envelope = this._carrier.envelope, this.modulation = this._modulator.oscillator, this.modulationEnvelope = this._modulator.envelope, this.frequency = new ud({
                        context: this.context,
                        units: "frequency"
                    }), this.detune = new ud({
                        context: this.context,
                        value: t1.detune,
                        units: "cents"
                    }), this.harmonicity = new Bd({
                        context: this.context,
                        value: t1.harmonicity,
                        minValue: 0
                    }), this._modulationNode = new hd({
                        context: this.context,
                        gain: 0
                    }), qp(this, [
                        "frequency",
                        "harmonicity",
                        "oscillator",
                        "envelope",
                        "modulation",
                        "modulationEnvelope",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(yf.getDefaults(), {
                        harmonicity: 3,
                        oscillator: Object.assign(gp($d.getDefaults(), [
                            ...Object.keys(Md.getDefaults()),
                            "frequency",
                            "detune"
                        ]), {
                            type: "sine"
                        }),
                        envelope: Object.assign(gp(mf.getDefaults(), Object.keys(id.getDefaults())), {
                            attack: .01,
                            decay: .01,
                            sustain: 1,
                            release: .5
                        }),
                        modulation: Object.assign(gp($d.getDefaults(), [
                            ...Object.keys(Md.getDefaults()),
                            "frequency",
                            "detune"
                        ]), {
                            type: "square"
                        }),
                        modulationEnvelope: Object.assign(gp(mf.getDefaults(), Object.keys(id.getDefaults())), {
                            attack: .5,
                            decay: 0,
                            sustain: 1,
                            release: .5
                        })
                    });
                }
                _triggerEnvelopeAttack(t1, e1) {
                    this._carrier._triggerEnvelopeAttack(t1, e1), this._modulator._triggerEnvelopeAttack(t1, e1);
                }
                _triggerEnvelopeRelease(t1) {
                    return this._carrier._triggerEnvelopeRelease(t1), this._modulator._triggerEnvelopeRelease(t1), this;
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.getValueAtTime(t1);
                }
                dispose() {
                    return super.dispose(), this._carrier.dispose(), this._modulator.dispose(), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._modulationNode.dispose(), this;
                }
            }
            class Tf extends bf {
                constructor(){
                    super(_p(Tf.getDefaults(), arguments)), this.name = "AMSynth", this._modulationScale = new Wd({
                        context: this.context
                    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output);
                }
                dispose() {
                    return super.dispose(), this._modulationScale.dispose(), this;
                }
            }
            class Sf extends id {
                constructor(){
                    super(_p(Sf.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "BiquadFilter";
                    var t1 = _p(Sf.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this._filter = this.context.createBiquadFilter(), this.input = this.output = this._filter, this.Q = new nd({
                        context: this.context,
                        units: "number",
                        value: t1.Q,
                        param: this._filter.Q
                    }), this.frequency = new nd({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency,
                        param: this._filter.frequency
                    }), this.detune = new nd({
                        context: this.context,
                        units: "cents",
                        value: t1.detune,
                        param: this._filter.detune
                    }), this.gain = new nd({
                        context: this.context,
                        units: "decibels",
                        convert: !1,
                        value: t1.gain,
                        param: this._filter.gain
                    }), this.type = t1.type;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        Q: 1,
                        type: "lowpass",
                        frequency: 350,
                        detune: 0,
                        gain: 0
                    });
                }
                get type() {
                    return this._filter.type;
                }
                set type(t1) {
                    Bu(-1 !== [
                        "lowpass",
                        "highpass",
                        "bandpass",
                        "lowshelf",
                        "highshelf",
                        "notch",
                        "allpass",
                        "peaking"
                    ].indexOf(t1), `Invalid filter type: ${t1}`), this._filter.type = t1;
                }
                getFrequencyResponse(e1 = 128) {
                    const s = new Float32Array(e1);
                    for(let t1 = 0; t1 < e1; t1++){
                        const n = 19980 * Math.pow(t1 / e1, 2) + 20;
                        s[t1] = n;
                    }
                    const t1 = new Float32Array(e1), n = new Float32Array(e1), i = this.context.createBiquadFilter();
                    return i.type = this.type, i.Q.value = this.Q.value, i.frequency.value = this.frequency.value, i.gain.value = this.gain.value, i.getFrequencyResponse(s, t1, n), t1;
                }
                dispose() {
                    return super.dispose(), this._filter.disconnect(), this.Q.dispose(), this.frequency.dispose(), this.gain.dispose(), this.detune.dispose(), this;
                }
            }
            class kf extends id {
                constructor(){
                    super(_p(kf.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "rolloff"
                    ])), this.name = "Filter", this.input = new hd({
                        context: this.context
                    }), this.output = new hd({
                        context: this.context
                    }), this._filters = [];
                    var t1 = _p(kf.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "rolloff"
                    ]);
                    this._filters = [], this.Q = new ud({
                        context: this.context,
                        units: "positive",
                        value: t1.Q
                    }), this.frequency = new ud({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), this.detune = new ud({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), this.gain = new ud({
                        context: this.context,
                        units: "decibels",
                        convert: !1,
                        value: t1.gain
                    }), this._type = t1.type, this.rolloff = t1.rolloff, qp(this, [
                        "detune",
                        "frequency",
                        "gain",
                        "Q"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        Q: 1,
                        detune: 0,
                        frequency: 350,
                        gain: 0,
                        rolloff: -12,
                        type: "lowpass"
                    });
                }
                get type() {
                    return this._type;
                }
                set type(e1) {
                    Bu(-1 !== [
                        "lowpass",
                        "highpass",
                        "bandpass",
                        "lowshelf",
                        "highshelf",
                        "notch",
                        "allpass",
                        "peaking"
                    ].indexOf(e1), `Invalid filter type: ${e1}`), this._type = e1, this._filters.forEach((t1)=>t1.type = e1);
                }
                get rolloff() {
                    return this._rolloff;
                }
                set rolloff(t1) {
                    const e1 = Ju(t1) ? t1 : parseInt(t1, 10), s = [
                        -12,
                        -24,
                        -48,
                        -96
                    ];
                    var n = s.indexOf(e1);
                    Bu(-1 !== n, `rolloff can only be ${s.join(", ")}`), n += 1, this._rolloff = e1, this.input.disconnect(), this._filters.forEach((t1)=>t1.disconnect()), this._filters = new Array(n);
                    for(let t1 = 0; t1 < n; t1++){
                        const e1 = new Sf({
                            context: this.context
                        });
                        e1.type = this._type, this.frequency.connect(e1.frequency), this.detune.connect(e1.detune), this.Q.connect(e1.Q), this.gain.connect(e1.gain), this._filters[t1] = e1;
                    }
                    this._internalChannels = this._filters, rd(this.input, ...this._internalChannels, this.output);
                }
                getFrequencyResponse(t1 = 128) {
                    const e1 = new Sf({
                        frequency: this.frequency.value,
                        gain: this.gain.value,
                        Q: this.Q.value,
                        type: this._type,
                        detune: this.detune.value
                    }), s = new Float32Array(t1).map(()=>1);
                    return this._filters.forEach(()=>{
                        e1.getFrequencyResponse(t1).forEach((t1, e1)=>s[e1] *= t1);
                    }), e1.dispose(), s;
                }
                dispose() {
                    return super.dispose(), this._filters.forEach((t1)=>{
                        t1.dispose();
                    }), Fp(this, [
                        "detune",
                        "frequency",
                        "gain",
                        "Q"
                    ]), this.frequency.dispose(), this.Q.dispose(), this.detune.dispose(), this.gain.dispose(), this;
                }
            }
            class Cf extends mf {
                constructor(){
                    super(_p(Cf.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ])), this.name = "FrequencyEnvelope";
                    var t1 = _p(Cf.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ]);
                    this._octaves = t1.octaves, this._baseFrequency = this.toFrequency(t1.baseFrequency), this._exponent = this.input = new df({
                        context: this.context,
                        value: t1.exponent
                    }), this._scale = this.output = new Jd({
                        context: this.context,
                        min: this._baseFrequency,
                        max: this._baseFrequency * Math.pow(2, this._octaves)
                    }), this._sig.chain(this._exponent, this._scale);
                }
                static getDefaults() {
                    return Object.assign(mf.getDefaults(), {
                        baseFrequency: 200,
                        exponent: 1,
                        octaves: 4
                    });
                }
                get baseFrequency() {
                    return this._baseFrequency;
                }
                set baseFrequency(t1) {
                    t1 = this.toFrequency(t1);
                    Uu(t1, 0), this._baseFrequency = t1, this._scale.min = this._baseFrequency, this.octaves = this._octaves;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1, this._scale.max = this._baseFrequency * Math.pow(2, t1);
                }
                get exponent() {
                    return this._exponent.value;
                }
                set exponent(t1) {
                    this._exponent.value = t1;
                }
                dispose() {
                    return super.dispose(), this._exponent.dispose(), this._scale.dispose(), this;
                }
            }
            class Af extends yf {
                constructor(){
                    super(_p(Af.getDefaults(), arguments)), this.name = "MonoSynth";
                    var t1 = _p(Af.getDefaults(), arguments);
                    this.oscillator = new $d(Object.assign(t1.oscillator, {
                        context: this.context,
                        detune: t1.detune,
                        onstop: ()=>this.onsilence(this)
                    })), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.filter = new kf(Object.assign(t1.filter, {
                        context: this.context
                    })), this.filterEnvelope = new Cf(Object.assign(t1.filterEnvelope, {
                        context: this.context
                    })), this.envelope = new xf(Object.assign(t1.envelope, {
                        context: this.context
                    })), this.oscillator.chain(this.filter, this.envelope, this.output), this.filterEnvelope.connect(this.filter.frequency), qp(this, [
                        "oscillator",
                        "frequency",
                        "detune",
                        "filter",
                        "filterEnvelope",
                        "envelope"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(yf.getDefaults(), {
                        envelope: Object.assign(gp(mf.getDefaults(), Object.keys(id.getDefaults())), {
                            attack: .005,
                            decay: .1,
                            release: 1,
                            sustain: .9
                        }),
                        filter: Object.assign(gp(kf.getDefaults(), Object.keys(id.getDefaults())), {
                            Q: 1,
                            rolloff: -12,
                            type: "lowpass"
                        }),
                        filterEnvelope: Object.assign(gp(Cf.getDefaults(), Object.keys(id.getDefaults())), {
                            attack: .6,
                            baseFrequency: 200,
                            decay: .2,
                            exponent: 2,
                            octaves: 3,
                            release: 2,
                            sustain: .5
                        }),
                        oscillator: Object.assign(gp($d.getDefaults(), Object.keys(Md.getDefaults())), {
                            type: "sawtooth"
                        })
                    });
                }
                _triggerEnvelopeAttack(t1, e1 = 1) {
                    if (this.envelope.triggerAttack(t1, e1), this.filterEnvelope.triggerAttack(t1), this.oscillator.start(t1), 0 === this.envelope.sustain) {
                        const e1 = this.toSeconds(this.envelope.attack), s = this.toSeconds(this.envelope.decay);
                        this.oscillator.stop(t1 + e1 + s);
                    }
                }
                _triggerEnvelopeRelease(t1) {
                    this.envelope.triggerRelease(t1), this.filterEnvelope.triggerRelease(t1), this.oscillator.stop(t1 + this.toSeconds(this.envelope.release));
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.getValueAtTime(t1);
                }
                dispose() {
                    return super.dispose(), this.oscillator.dispose(), this.envelope.dispose(), this.filterEnvelope.dispose(), this.filter.dispose(), this;
                }
            }
            class Df extends yf {
                constructor(){
                    super(_p(Df.getDefaults(), arguments)), this.name = "DuoSynth";
                    var t1 = _p(Df.getDefaults(), arguments);
                    this.voice0 = new Af(Object.assign(t1.voice0, {
                        context: this.context,
                        onsilence: ()=>this.onsilence(this)
                    })), this.voice1 = new Af(Object.assign(t1.voice1, {
                        context: this.context
                    })), this.harmonicity = new Bd({
                        context: this.context,
                        units: "positive",
                        value: t1.harmonicity
                    }), this._vibrato = new tf({
                        frequency: t1.vibratoRate,
                        context: this.context,
                        min: -50,
                        max: 50
                    }), this._vibrato.start(), this.vibratoRate = this._vibrato.frequency, this._vibratoGain = new hd({
                        context: this.context,
                        units: "normalRange",
                        gain: t1.vibratoAmount
                    }), this.vibratoAmount = this._vibratoGain.gain, this.frequency = new ud({
                        context: this.context,
                        units: "frequency",
                        value: 440
                    }), this.detune = new ud({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), this.frequency.connect(this.voice0.frequency), this.frequency.chain(this.harmonicity, this.voice1.frequency), this._vibrato.connect(this._vibratoGain), this._vibratoGain.fan(this.voice0.detune, this.voice1.detune), this.detune.fan(this.voice0.detune, this.voice1.detune), this.voice0.connect(this.output), this.voice1.connect(this.output), qp(this, [
                        "voice0",
                        "voice1",
                        "frequency",
                        "vibratoAmount",
                        "vibratoRate"
                    ]);
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.voice0.envelope.getValueAtTime(t1) + this.voice1.envelope.getValueAtTime(t1);
                }
                static getDefaults() {
                    return fp(yf.getDefaults(), {
                        vibratoAmount: .5,
                        vibratoRate: 5,
                        harmonicity: 1.5,
                        voice0: fp(gp(Af.getDefaults(), Object.keys(yf.getDefaults())), {
                            filterEnvelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            },
                            envelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            }
                        }),
                        voice1: fp(gp(Af.getDefaults(), Object.keys(yf.getDefaults())), {
                            filterEnvelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            },
                            envelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            }
                        })
                    });
                }
                _triggerEnvelopeAttack(t1, e1) {
                    this.voice0._triggerEnvelopeAttack(t1, e1), this.voice1._triggerEnvelopeAttack(t1, e1);
                }
                _triggerEnvelopeRelease(t1) {
                    return this.voice0._triggerEnvelopeRelease(t1), this.voice1._triggerEnvelopeRelease(t1), this;
                }
                dispose() {
                    return super.dispose(), this.voice0.dispose(), this.voice1.dispose(), this.frequency.dispose(), this.detune.dispose(), this._vibrato.dispose(), this.vibratoRate.dispose(), this._vibratoGain.dispose(), this.harmonicity.dispose(), this;
                }
            }
            class Of extends bf {
                constructor(){
                    super(_p(Of.getDefaults(), arguments)), this.name = "FMSynth";
                    var t1 = _p(Of.getDefaults(), arguments);
                    this.modulationIndex = new Bd({
                        context: this.context,
                        value: t1.modulationIndex
                    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output);
                }
                static getDefaults() {
                    return Object.assign(bf.getDefaults(), {
                        modulationIndex: 10
                    });
                }
                dispose() {
                    return super.dispose(), this.modulationIndex.dispose(), this;
                }
            }
            const Mf = [
                1,
                1.483,
                1.932,
                2.546,
                2.63,
                3.897
            ];
            class Ef extends yf {
                constructor(){
                    super(_p(Ef.getDefaults(), arguments)), this.name = "MetalSynth", this._oscillators = [], this._freqMultipliers = [];
                    var e1 = _p(Ef.getDefaults(), arguments);
                    this.detune = new ud({
                        context: this.context,
                        units: "cents",
                        value: e1.detune
                    }), this.frequency = new ud({
                        context: this.context,
                        units: "frequency"
                    }), this._amplitude = new hd({
                        context: this.context,
                        gain: 0
                    }).connect(this.output), this._highpass = new kf({
                        Q: 0,
                        context: this.context,
                        type: "highpass"
                    }).connect(this._amplitude);
                    for(let t1 = 0; t1 < Mf.length; t1++){
                        const n = new Gd({
                            context: this.context,
                            harmonicity: e1.harmonicity,
                            modulationIndex: e1.modulationIndex,
                            modulationType: "square",
                            onstop: 0 === t1 ? ()=>this.onsilence(this) : Ip,
                            type: "square"
                        });
                        n.connect(this._highpass), this._oscillators[t1] = n;
                        var s = new Bd({
                            context: this.context,
                            value: Mf[t1]
                        });
                        this._freqMultipliers[t1] = s, this.frequency.chain(s, n.frequency), this.detune.connect(n.detune);
                    }
                    this._filterFreqScaler = new Jd({
                        context: this.context,
                        max: 7e3,
                        min: this.toFrequency(e1.resonance)
                    }), this.envelope = new mf({
                        attack: e1.envelope.attack,
                        attackCurve: "linear",
                        context: this.context,
                        decay: e1.envelope.decay,
                        release: e1.envelope.release,
                        sustain: 0
                    }), this.envelope.chain(this._filterFreqScaler, this._highpass.frequency), this.envelope.connect(this._amplitude.gain), this._octaves = e1.octaves, this.octaves = e1.octaves;
                }
                static getDefaults() {
                    return fp(yf.getDefaults(), {
                        envelope: Object.assign(gp(mf.getDefaults(), Object.keys(id.getDefaults())), {
                            attack: .001,
                            decay: 1.4,
                            release: .2
                        }),
                        harmonicity: 5.1,
                        modulationIndex: 32,
                        octaves: 1.5,
                        resonance: 4e3
                    });
                }
                _triggerEnvelopeAttack(e1, t1 = 1) {
                    return this.envelope.triggerAttack(e1, t1), this._oscillators.forEach((t1)=>t1.start(e1)), 0 === this.envelope.sustain && this._oscillators.forEach((t1)=>{
                        t1.stop(e1 + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay));
                    }), this;
                }
                _triggerEnvelopeRelease(e1) {
                    return this.envelope.triggerRelease(e1), this._oscillators.forEach((t1)=>t1.stop(e1 + this.toSeconds(this.envelope.release))), this;
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.getValueAtTime(t1);
                }
                get modulationIndex() {
                    return this._oscillators[0].modulationIndex.value;
                }
                set modulationIndex(e1) {
                    this._oscillators.forEach((t1)=>t1.modulationIndex.value = e1);
                }
                get harmonicity() {
                    return this._oscillators[0].harmonicity.value;
                }
                set harmonicity(e1) {
                    this._oscillators.forEach((t1)=>t1.harmonicity.value = e1);
                }
                get resonance() {
                    return this._filterFreqScaler.min;
                }
                set resonance(t1) {
                    this._filterFreqScaler.min = this.toFrequency(t1), this.octaves = this._octaves;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1, this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t1);
                }
                dispose() {
                    return super.dispose(), this._oscillators.forEach((t1)=>t1.dispose()), this._freqMultipliers.forEach((t1)=>t1.dispose()), this.frequency.dispose(), this.detune.dispose(), this._filterFreqScaler.dispose(), this._amplitude.dispose(), this.envelope.dispose(), this._highpass.dispose(), this;
                }
            }
            class Rf extends wf {
                constructor(){
                    super(_p(Rf.getDefaults(), arguments)), this.name = "MembraneSynth", this.portamento = 0;
                    var t1 = _p(Rf.getDefaults(), arguments);
                    this.pitchDecay = t1.pitchDecay, this.octaves = t1.octaves, qp(this, [
                        "oscillator",
                        "envelope"
                    ]);
                }
                static getDefaults() {
                    return fp(yf.getDefaults(), wf.getDefaults(), {
                        envelope: {
                            attack: .001,
                            attackCurve: "exponential",
                            decay: .4,
                            release: 1.4,
                            sustain: .01
                        },
                        octaves: 10,
                        oscillator: {
                            type: "sine"
                        },
                        pitchDecay: .05
                    });
                }
                setNote(t1, e1) {
                    var s = this.toSeconds(e1), e1 = this.toFrequency(t1 instanceof Hp ? t1.toFrequency() : t1), t1 = e1 * this.octaves;
                    return this.oscillator.frequency.setValueAtTime(t1, s), this.oscillator.frequency.exponentialRampToValueAtTime(e1, s + this.toSeconds(this.pitchDecay)), this;
                }
                dispose() {
                    return super.dispose(), this;
                }
            }
            op([
                ef(0)
            ], Rf.prototype, "octaves", void 0), op([
                sf(0)
            ], Rf.prototype, "pitchDecay", void 0);
            class qf extends vf {
                constructor(){
                    super(_p(qf.getDefaults(), arguments)), this.name = "NoiseSynth";
                    var t1 = _p(qf.getDefaults(), arguments);
                    this.noise = new Rd(Object.assign({
                        context: this.context
                    }, t1.noise)), this.envelope = new xf(Object.assign({
                        context: this.context
                    }, t1.envelope)), this.noise.chain(this.envelope, this.output);
                }
                static getDefaults() {
                    return Object.assign(vf.getDefaults(), {
                        envelope: Object.assign(gp(mf.getDefaults(), Object.keys(id.getDefaults())), {
                            decay: .1,
                            sustain: 0
                        }),
                        noise: Object.assign(gp(Rd.getDefaults(), Object.keys(Md.getDefaults())), {
                            type: "white"
                        })
                    });
                }
                triggerAttack(t1, e1 = 1) {
                    return t1 = this.toSeconds(t1), this.envelope.triggerAttack(t1, e1), this.noise.start(t1), 0 === this.envelope.sustain && this.noise.stop(t1 + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay)), this;
                }
                triggerRelease(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.triggerRelease(t1), this.noise.stop(t1 + this.toSeconds(this.envelope.release)), this;
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0)), this;
                }
                triggerAttackRelease(t1, e1, s = 1) {
                    return e1 = this.toSeconds(e1), t1 = this.toSeconds(t1), this.triggerAttack(e1, s), this.triggerRelease(e1 + t1), this;
                }
                dispose() {
                    return super.dispose(), this.noise.dispose(), this.envelope.dispose(), this;
                }
            }
            const Ff = new Set;
            function If(t1) {
                Ff.add(t1);
            }
            function Vf(t1, e1) {
                e1 = `registerProcessor("${t1}", ${e1})`;
                Ff.add(e1);
            }
            class Nf extends id {
                constructor(t1){
                    super(t1), this.name = "ToneAudioWorklet", this.workletOptions = {}, this.onprocessorerror = Ip;
                    const e1 = URL.createObjectURL(new Blob([
                        Array.from(Ff).join("\n")
                    ], {
                        type: "text/javascript"
                    })), s = this._audioWorkletName();
                    this._dummyGain = this.context.createGain(), this._dummyParam = this._dummyGain.gain, this.context.addAudioWorkletModule(e1, s).then(()=>{
                        this.disposed || (this._worklet = this.context.createAudioWorkletNode(s, this.workletOptions), this._worklet.onprocessorerror = this.onprocessorerror.bind(this), this.onReady(this._worklet));
                    });
                }
                dispose() {
                    return super.dispose(), this._dummyGain.disconnect(), this._worklet && (this._worklet.port.postMessage("dispose"), this._worklet.disconnect()), this;
                }
            }
            If('\n	/**\n	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. \n	 */\n	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {\n\n		constructor(options) {\n			\n			super(options);\n			/**\n			 * If the processor was disposed or not. Keep alive until it\'s disposed.\n			 */\n			this.disposed = false;\n		   	/** \n			 * The number of samples in the processing block\n			 */\n			this.blockSize = 128;\n			/**\n			 * the sample rate\n			 */\n			this.sampleRate = sampleRate;\n\n			this.port.onmessage = (event) => {\n				// when it receives a dispose \n				if (event.data === "dispose") {\n					this.disposed = true;\n				}\n			};\n		}\n	}\n'), If("\n	/**\n	 * Abstract class for a single input/output processor. \n	 * has a 'generate' function which processes one sample at a time\n	 */\n	class SingleIOProcessor extends ToneAudioWorkletProcessor {\n\n		constructor(options) {\n			super(Object.assign(options, {\n				numberOfInputs: 1,\n				numberOfOutputs: 1\n			}));\n			/**\n			 * Holds the name of the parameter and a single value of that\n			 * parameter at the current sample\n			 * @type { [name: string]: number }\n			 */\n			this.params = {}\n		}\n\n		/**\n		 * Generate an output sample from the input sample and parameters\n		 * @abstract\n		 * @param input number\n		 * @param channel number\n		 * @param parameters { [name: string]: number }\n		 * @returns number\n		 */\n		generate(){}\n\n		/**\n		 * Update the private params object with the \n		 * values of the parameters at the given index\n		 * @param parameters { [name: string]: Float32Array },\n		 * @param index number\n		 */\n		updateParams(parameters, index) {\n			for (const paramName in parameters) {\n				const param = parameters[paramName];\n				if (param.length > 1) {\n					this.params[paramName] = parameters[paramName][index];\n				} else {\n					this.params[paramName] = parameters[paramName][0];\n				}\n			}\n		}\n\n		/**\n		 * Process a single frame of the audio\n		 * @param inputs Float32Array[][]\n		 * @param outputs Float32Array[][]\n		 */\n		process(inputs, outputs, parameters) {\n			const input = inputs[0];\n			const output = outputs[0];\n			// get the parameter values\n			const channelCount = Math.max(input && input.length || 0, output.length);\n			for (let sample = 0; sample < this.blockSize; sample++) {\n				this.updateParams(parameters, sample);\n				for (let channel = 0; channel < channelCount; channel++) {\n					const inputSample = input && input.length ? input[channel][sample] : 0;\n					output[channel][sample] = this.generate(inputSample, channel, this.params);\n				}\n			}\n			return !this.disposed;\n		}\n	};\n"), If("\n	/**\n	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line\n	 */\n	class DelayLine {\n		\n		constructor(size, channels) {\n			this.buffer = [];\n			this.writeHead = []\n			this.size = size;\n\n			// create the empty channels\n			for (let i = 0; i < channels; i++) {\n				this.buffer[i] = new Float32Array(this.size);\n				this.writeHead[i] = 0;\n			}\n		}\n\n		/**\n		 * Push a value onto the end\n		 * @param channel number\n		 * @param value number\n		 */\n		push(channel, value) {\n			this.writeHead[channel] += 1;\n			if (this.writeHead[channel] > this.size) {\n				this.writeHead[channel] = 0;\n			}\n			this.buffer[channel][this.writeHead[channel]] = value;\n		}\n\n		/**\n		 * Get the recorded value of the channel given the delay\n		 * @param channel number\n		 * @param delay number delay samples\n		 */\n		get(channel, delay) {\n			let readHead = this.writeHead[channel] - Math.floor(delay);\n			if (readHead < 0) {\n				readHead += this.size;\n			}\n			return this.buffer[channel][readHead];\n		}\n	}\n");
            const Pf = "feedback-comb-filter";
            Vf(Pf, '\n	class FeedbackCombFilterWorklet extends SingleIOProcessor {\n\n		constructor(options) {\n			super(options);\n			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);\n		}\n\n		static get parameterDescriptors() {\n			return [{\n				name: "delayTime",\n				defaultValue: 0.1,\n				minValue: 0,\n				maxValue: 1,\n				automationRate: "k-rate"\n			}, {\n				name: "feedback",\n				defaultValue: 0.5,\n				minValue: 0,\n				maxValue: 0.9999,\n				automationRate: "k-rate"\n			}];\n		}\n\n		generate(input, channel, parameters) {\n			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);\n			this.delayLine.push(channel, input + delayedSample * parameters.feedback);\n			return delayedSample;\n		}\n	}\n');
            class jf extends Nf {
                constructor(){
                    super(_p(jf.getDefaults(), arguments, [
                        "delayTime",
                        "resonance"
                    ])), this.name = "FeedbackCombFilter";
                    var t1 = _p(jf.getDefaults(), arguments, [
                        "delayTime",
                        "resonance"
                    ]);
                    this.input = new hd({
                        context: this.context
                    }), this.output = new hd({
                        context: this.context
                    }), this.delayTime = new nd({
                        context: this.context,
                        value: t1.delayTime,
                        units: "time",
                        minValue: 0,
                        maxValue: 1,
                        param: this._dummyParam,
                        swappable: !0
                    }), this.resonance = new nd({
                        context: this.context,
                        value: t1.resonance,
                        units: "normalRange",
                        param: this._dummyParam,
                        swappable: !0
                    }), qp(this, [
                        "resonance",
                        "delayTime"
                    ]);
                }
                _audioWorkletName() {
                    return Pf;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        delayTime: .1,
                        resonance: .5
                    });
                }
                onReady(t1) {
                    rd(this.input, t1, this.output);
                    var e1 = t1.parameters.get("delayTime");
                    this.delayTime.setParam(e1);
                    t1 = t1.parameters.get("feedback");
                    this.resonance.setParam(t1);
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this.delayTime.dispose(), this.resonance.dispose(), this;
                }
            }
            class Lf extends id {
                constructor(){
                    super(_p(Lf.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "OnePoleFilter";
                    var t1 = _p(Lf.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this._frequency = t1.frequency, this._type = t1.type, this.input = new hd({
                        context: this.context
                    }), this.output = new hd({
                        context: this.context
                    }), this._createFilter();
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        frequency: 880,
                        type: "lowpass"
                    });
                }
                _createFilter() {
                    const t1 = this._filter, e1 = this.toFrequency(this._frequency), s = 1 / (2 * Math.PI * e1);
                    if ("lowpass" === this._type) {
                        const t1 = 1 / (s * this.context.sampleRate), e1 = t1 - 1;
                        this._filter = this.context.createIIRFilter([
                            t1,
                            0
                        ], [
                            1,
                            e1
                        ]);
                    } else {
                        const t1 = 1 / (s * this.context.sampleRate) - 1;
                        this._filter = this.context.createIIRFilter([
                            1,
                            -1
                        ], [
                            1,
                            t1
                        ]);
                    }
                    this.input.chain(this._filter, this.output), t1 && this.context.setTimeout(()=>{
                        this.disposed || (this.input.disconnect(t1), t1.disconnect());
                    }, this.blockTime);
                }
                get frequency() {
                    return this._frequency;
                }
                set frequency(t1) {
                    this._frequency = t1, this._createFilter();
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    this._type = t1, this._createFilter();
                }
                getFrequencyResponse(e1 = 128) {
                    const s = new Float32Array(e1);
                    for(let t1 = 0; t1 < e1; t1++){
                        const n = 19980 * Math.pow(t1 / e1, 2) + 20;
                        s[t1] = n;
                    }
                    const t1 = new Float32Array(e1), n = new Float32Array(e1);
                    return this._filter.getFrequencyResponse(s, t1, n), t1;
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this._filter.disconnect(), this;
                }
            }
            class zf extends id {
                constructor(){
                    super(_p(zf.getDefaults(), arguments, [
                        "delayTime",
                        "resonance",
                        "dampening"
                    ])), this.name = "LowpassCombFilter";
                    var t1 = _p(zf.getDefaults(), arguments, [
                        "delayTime",
                        "resonance",
                        "dampening"
                    ]);
                    this._combFilter = this.output = new jf({
                        context: this.context,
                        delayTime: t1.delayTime,
                        resonance: t1.resonance
                    }), this.delayTime = this._combFilter.delayTime, this.resonance = this._combFilter.resonance, this._lowpass = this.input = new Lf({
                        context: this.context,
                        frequency: t1.dampening,
                        type: "lowpass"
                    }), this._lowpass.connect(this._combFilter);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        dampening: 3e3,
                        delayTime: .1,
                        resonance: .5
                    });
                }
                get dampening() {
                    return this._lowpass.frequency;
                }
                set dampening(t1) {
                    this._lowpass.frequency = t1;
                }
                dispose() {
                    return super.dispose(), this._combFilter.dispose(), this._lowpass.dispose(), this;
                }
            }
            class Wf extends vf {
                constructor(){
                    super(_p(Wf.getDefaults(), arguments)), this.name = "PluckSynth";
                    var t1 = _p(Wf.getDefaults(), arguments);
                    this._noise = new Rd({
                        context: this.context,
                        type: "pink"
                    }), this.attackNoise = t1.attackNoise, this._lfcf = new zf({
                        context: this.context,
                        dampening: t1.dampening,
                        resonance: t1.resonance
                    }), this.resonance = t1.resonance, this.release = t1.release, this._noise.connect(this._lfcf), this._lfcf.connect(this.output);
                }
                static getDefaults() {
                    return fp(vf.getDefaults(), {
                        attackNoise: 1,
                        dampening: 4e3,
                        resonance: .7,
                        release: 1
                    });
                }
                get dampening() {
                    return this._lfcf.dampening;
                }
                set dampening(t1) {
                    this._lfcf.dampening = t1;
                }
                triggerAttack(t1, e1) {
                    t1 = this.toFrequency(t1);
                    e1 = this.toSeconds(e1);
                    t1 = 1 / t1;
                    return this._lfcf.delayTime.setValueAtTime(t1, e1), this._noise.start(e1), this._noise.stop(e1 + t1 * this.attackNoise), this._lfcf.resonance.cancelScheduledValues(e1), this._lfcf.resonance.setValueAtTime(this.resonance, e1), this;
                }
                triggerRelease(t1) {
                    return this._lfcf.resonance.linearRampTo(0, this.release, t1), this;
                }
                dispose() {
                    return super.dispose(), this._noise.dispose(), this._lfcf.dispose(), this;
                }
            }
            class Bf extends vf {
                constructor(){
                    super(_p(Bf.getDefaults(), arguments, [
                        "voice",
                        "options"
                    ])), this.name = "PolySynth", this._availableVoices = [], this._activeVoices = [], this._voices = [], this._gcTimeout = -1, this._averageActiveVoices = 0;
                    const t1 = _p(Bf.getDefaults(), arguments, [
                        "voice",
                        "options"
                    ]);
                    Bu(!Ju(t1.voice), "DEPRECATED: The polyphony count is no longer the first argument.");
                    var e1 = t1.voice.getDefaults();
                    this.options = Object.assign(e1, t1.options), this.voice = t1.voice, this.maxPolyphony = t1.maxPolyphony, this._dummyVoice = this._getNextAvailableVoice();
                    e1 = this._voices.indexOf(this._dummyVoice);
                    this._voices.splice(e1, 1), this._gcTimeout = this.context.setInterval(this._collectGarbage.bind(this), 1);
                }
                static getDefaults() {
                    return Object.assign(vf.getDefaults(), {
                        maxPolyphony: 32,
                        options: {},
                        voice: wf
                    });
                }
                get activeVoices() {
                    return this._activeVoices.length;
                }
                _makeVoiceAvailable(e1) {
                    this._availableVoices.push(e1);
                    var t1 = this._activeVoices.findIndex((t1)=>t1.voice === e1);
                    this._activeVoices.splice(t1, 1);
                }
                _getNextAvailableVoice() {
                    if (this._availableVoices.length) return this._availableVoices.shift();
                    if (this._voices.length < this.maxPolyphony) {
                        const t1 = new this.voice(Object.assign(this.options, {
                            context: this.context,
                            onsilence: this._makeVoiceAvailable.bind(this)
                        }));
                        return Bu(t1 instanceof yf, "Voice must extend Monophonic class"), t1.connect(this.output), this._voices.push(t1), t1;
                    }
                    Xu("Max polyphony exceeded. Note dropped.");
                }
                _collectGarbage() {
                    if (this._averageActiveVoices = Math.max(.95 * this._averageActiveVoices, this.activeVoices), this._availableVoices.length && this._voices.length > Math.ceil(this._averageActiveVoices + 1)) {
                        const t1 = this._availableVoices.shift(), e1 = this._voices.indexOf(t1);
                        this._voices.splice(e1, 1), this.context.isOffline || t1.dispose();
                    }
                }
                _triggerAttack(t1, n, i) {
                    t1.forEach((t1)=>{
                        const e1 = new yd(this.context, t1).toMidi(), s = this._getNextAvailableVoice();
                        s && (s.triggerAttack(t1, n, i), this._activeVoices.push({
                            midi: e1,
                            voice: s,
                            released: !1
                        }), this.log("triggerAttack", t1, n));
                    });
                }
                _triggerRelease(t1, n) {
                    t1.forEach((t1)=>{
                        const s = new yd(this.context, t1).toMidi(), e1 = this._activeVoices.find(({ midi: t1, released: e1 })=>t1 === s && !e1);
                        e1 && (e1.voice.triggerRelease(n), e1.released = !0, this.log("triggerRelease", t1, n));
                    });
                }
                _scheduleEvent(t1, e1, s, n) {
                    Bu(!this.disposed, "Synth was already disposed"), s <= this.now() ? "attack" === t1 ? this._triggerAttack(e1, s, n) : this._triggerRelease(e1, s) : this.context.setTimeout(()=>{
                        this.disposed || this._scheduleEvent(t1, e1, s, n);
                    }, s - this.now());
                }
                triggerAttack(t1, e1, s) {
                    Array.isArray(t1) || (t1 = [
                        t1
                    ]);
                    e1 = this.toSeconds(e1);
                    return this._scheduleEvent("attack", t1, e1, s), this;
                }
                triggerRelease(t1, e1) {
                    Array.isArray(t1) || (t1 = [
                        t1
                    ]);
                    e1 = this.toSeconds(e1);
                    return this._scheduleEvent("release", t1, e1), this;
                }
                triggerAttackRelease(e1, s, t1, n) {
                    var i = this.toSeconds(t1);
                    if (this.triggerAttack(e1, i, n), ep(s)) {
                        Bu(ep(e1), "If the duration is an array, the notes must also be an array");
                        for(let t1 = 0; t1 < e1.length; t1++){
                            const n = s[Math.min(t1, s.length - 1)], r = this.toSeconds(n);
                            Bu(0 < r, "The duration must be greater than 0"), this.triggerRelease(e1[t1], i + r);
                        }
                    } else {
                        const t1 = this.toSeconds(s);
                        Bu(0 < t1, "The duration must be greater than 0"), this.triggerRelease(e1, i + t1);
                    }
                    return this;
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1)), this;
                }
                set(t1) {
                    const e1 = gp(t1, [
                        "onsilence",
                        "context"
                    ]);
                    return this.options = fp(this.options, e1), this._voices.forEach((t1)=>t1.set(e1)), this._dummyVoice.set(e1), this;
                }
                get() {
                    return this._dummyVoice.get();
                }
                releaseAll(t1) {
                    const e1 = this.toSeconds(t1);
                    return this._activeVoices.forEach(({ voice: t1 })=>{
                        t1.triggerRelease(e1);
                    }), this;
                }
                dispose() {
                    return super.dispose(), this._dummyVoice.dispose(), this._voices.forEach((t1)=>t1.dispose()), this._activeVoices = [], this._availableVoices = [], this.context.clearInterval(this._gcTimeout), this;
                }
            }
            class Uf extends vf {
                constructor(){
                    super(_p(Uf.getDefaults(), arguments, [
                        "urls",
                        "onload",
                        "baseUrl"
                    ], "urls")), this.name = "Sampler", this._activeSources = new Map;
                    const s = _p(Uf.getDefaults(), arguments, [
                        "urls",
                        "onload",
                        "baseUrl"
                    ], "urls"), n = {};
                    Object.keys(s.urls).forEach((t1)=>{
                        const e1 = parseInt(t1, 10);
                        if (Bu(np(t1) || Ju(e1) && isFinite(e1), `url key is neither a note or midi pitch: ${t1}`), np(t1)) {
                            const e1 = new Hp(this.context, t1).toMidi();
                            n[e1] = s.urls[t1];
                        } else Ju(e1) && isFinite(e1) && (n[e1] = s.urls[e1]);
                    }), this._buffers = new vd({
                        urls: n,
                        onload: s.onload,
                        baseUrl: s.baseUrl,
                        onerror: s.onerror
                    }), this.attack = s.attack, this.release = s.release, this.curve = s.curve, this._buffers.loaded && Promise.resolve().then(s.onload);
                }
                static getDefaults() {
                    return Object.assign(vf.getDefaults(), {
                        attack: 0,
                        baseUrl: "",
                        curve: "exponential",
                        onload: Ip,
                        onerror: Ip,
                        release: .1,
                        urls: {}
                    });
                }
                _findClosest(t1) {
                    let e1 = 0;
                    for(; e1 < 96;){
                        if (this._buffers.has(t1 + e1)) return -e1;
                        if (this._buffers.has(t1 - e1)) return e1;
                        e1++;
                    }
                    throw new Error(`No available buffers for note: ${t1}`);
                }
                triggerAttack(t1, c, l = 1) {
                    return this.log("triggerAttack", t1, c, l), (t1 = !Array.isArray(t1) ? [
                        t1
                    ] : t1).forEach((t1)=>{
                        const e1 = Zp(new Hp(this.context, t1).toFrequency()), s = Math.round(e1), n = e1 - s, i = this._findClosest(s), r = s - i, o = this._buffers.get(r), a = Up(i + n), h = new Ed({
                            url: o,
                            context: this.context,
                            curve: this.curve,
                            fadeIn: this.attack,
                            fadeOut: this.release,
                            playbackRate: a
                        }).connect(this.output);
                        h.start(c, 0, o.duration / a, l), ep(this._activeSources.get(s)) || this._activeSources.set(s, []), this._activeSources.get(s).push(h), h.onended = ()=>{
                            if (this._activeSources && this._activeSources.has(s)) {
                                const t1 = this._activeSources.get(s), e1 = t1.indexOf(h);
                                -1 !== e1 && t1.splice(e1, 1);
                            }
                        };
                    }), this;
                }
                triggerRelease(t1, s) {
                    return this.log("triggerRelease", t1, s), (t1 = !Array.isArray(t1) ? [
                        t1
                    ] : t1).forEach((t1)=>{
                        t1 = new Hp(this.context, t1).toMidi();
                        if (this._activeSources.has(t1) && this._activeSources.get(t1).length) {
                            const e1 = this._activeSources.get(t1);
                            s = this.toSeconds(s), e1.forEach((t1)=>{
                                t1.stop(s);
                            }), this._activeSources.set(t1, []);
                        }
                    }), this;
                }
                releaseAll(t1) {
                    const e1 = this.toSeconds(t1);
                    return this._activeSources.forEach((t1)=>{
                        for(; t1.length;)t1.shift().stop(e1);
                    }), this;
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1)), this;
                }
                triggerAttackRelease(t1, s, e1, n = 1) {
                    const i = this.toSeconds(e1);
                    return this.triggerAttack(t1, i, n), ep(s) ? (Bu(ep(t1), "notes must be an array when duration is array"), t1.forEach((t1, e1)=>{
                        e1 = s[Math.min(e1, s.length - 1)];
                        this.triggerRelease(t1, i + this.toSeconds(e1));
                    })) : this.triggerRelease(t1, i + this.toSeconds(s)), this;
                }
                add(t1, e1, s) {
                    var n;
                    return Bu(np(t1) || isFinite(t1), `note must be a pitch or midi: ${t1}`), np(t1) ? (n = new Hp(this.context, t1).toMidi(), this._buffers.add(n, e1, s)) : this._buffers.add(t1, e1, s), this;
                }
                get loaded() {
                    return this._buffers.loaded;
                }
                dispose() {
                    return super.dispose(), this._buffers.dispose(), this._activeSources.forEach((t1)=>{
                        t1.forEach((t1)=>t1.dispose());
                    }), this._activeSources.clear(), this;
                }
            }
            op([
                sf(0)
            ], Uf.prototype, "attack", void 0), op([
                sf(0)
            ], Uf.prototype, "release", void 0);
            class Gf extends ed {
                constructor(){
                    super(_p(Gf.getDefaults(), arguments, [
                        "callback",
                        "value"
                    ])), this.name = "ToneEvent", this._state = new sd("stopped"), this._startOffset = 0;
                    var t1 = _p(Gf.getDefaults(), arguments, [
                        "callback",
                        "value"
                    ]);
                    this._loop = t1.loop, this.callback = t1.callback, this.value = t1.value, this._loopStart = this.toTicks(t1.loopStart), this._loopEnd = this.toTicks(t1.loopEnd), this._playbackRate = t1.playbackRate, this._probability = t1.probability, this._humanize = t1.humanize, this.mute = t1.mute, this._playbackRate = t1.playbackRate, this._state.increasing = !0, this._rescheduleEvents();
                }
                static getDefaults() {
                    return Object.assign(ed.getDefaults(), {
                        callback: Ip,
                        humanize: !1,
                        loop: !1,
                        loopEnd: "1m",
                        loopStart: 0,
                        mute: !1,
                        playbackRate: 1,
                        probability: 1,
                        value: null
                    });
                }
                _rescheduleEvents(t1 = -1) {
                    this._state.forEachFrom(t1, (t1)=>{
                        let e1;
                        var s, n;
                        "started" === t1.state && (-1 !== t1.id && this.context.transport.clear(t1.id), s = t1.time + Math.round(this.startOffset / this._playbackRate), !0 === this._loop || Ju(this._loop) && 1 < this._loop ? (e1 = 1 / 0, Ju(this._loop) && (e1 = this._loop * this._getLoopDuration()), null !== (n = this._state.getAfter(s)) && (e1 = Math.min(e1, n.time - s)), e1 !== 1 / 0 && (e1 = new xd(this.context, e1)), n = new xd(this.context, this._getLoopDuration()), t1.id = this.context.transport.scheduleRepeat(this._tick.bind(this), n, new xd(this.context, s), e1)) : t1.id = this.context.transport.schedule(this._tick.bind(this), new xd(this.context, s)));
                    });
                }
                get state() {
                    return this._state.getValueAtTime(this.context.transport.ticks);
                }
                get startOffset() {
                    return this._startOffset;
                }
                set startOffset(t1) {
                    this._startOffset = t1;
                }
                get probability() {
                    return this._probability;
                }
                set probability(t1) {
                    this._probability = t1;
                }
                get humanize() {
                    return this._humanize;
                }
                set humanize(t1) {
                    this._humanize = t1;
                }
                start(t1) {
                    t1 = this.toTicks(t1);
                    return "stopped" === this._state.getValueAtTime(t1) && (this._state.add({
                        id: -1,
                        state: "started",
                        time: t1
                    }), this._rescheduleEvents(t1)), this;
                }
                stop(e1) {
                    this.cancel(e1);
                    e1 = this.toTicks(e1);
                    if ("started" === this._state.getValueAtTime(e1)) {
                        this._state.setStateAtTime("stopped", e1, {
                            id: -1
                        });
                        const s = this._state.getBefore(e1);
                        let t1 = e1;
                        null !== s && (t1 = s.time), this._rescheduleEvents(t1);
                    }
                    return this;
                }
                cancel(t1) {
                    t1 = mp(t1, -1 / 0);
                    t1 = this.toTicks(t1);
                    return this._state.forEachFrom(t1, (t1)=>{
                        this.context.transport.clear(t1.id);
                    }), this._state.cancel(t1), this;
                }
                _tick(e1) {
                    var t1 = this.context.transport.getTicksAtTime(e1);
                    if (!(this.mute || "started" !== this._state.getValueAtTime(t1) || this.probability < 1 && Math.random() > this.probability)) {
                        if (this.humanize) {
                            let t1 = .02;
                            tp(this.humanize) || (t1 = this.toSeconds(this.humanize)), e1 += (2 * Math.random() - 1) * t1;
                        }
                        this.callback(e1, this.value);
                    }
                }
                _getLoopDuration() {
                    return (this._loopEnd - this._loopStart) / this._playbackRate;
                }
                get loop() {
                    return this._loop;
                }
                set loop(t1) {
                    this._loop = t1, this._rescheduleEvents();
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t1) {
                    this._playbackRate = t1, this._rescheduleEvents();
                }
                get loopEnd() {
                    return new xd(this.context, this._loopEnd).toSeconds();
                }
                set loopEnd(t1) {
                    this._loopEnd = this.toTicks(t1), this._loop && this._rescheduleEvents();
                }
                get loopStart() {
                    return new xd(this.context, this._loopStart).toSeconds();
                }
                set loopStart(t1) {
                    this._loopStart = this.toTicks(t1), this._loop && this._rescheduleEvents();
                }
                get progress() {
                    if (this._loop) {
                        var t1 = this.context.transport.ticks, e1 = this._state.get(t1);
                        if (null === e1 || "started" !== e1.state) return 0;
                        var s = this._getLoopDuration();
                        return (t1 - e1.time) % s / s;
                    }
                    return 0;
                }
                dispose() {
                    return super.dispose(), this.cancel(), this._state.dispose(), this;
                }
            }
            class Qf extends ed {
                constructor(){
                    super(_p(Qf.getDefaults(), arguments, [
                        "callback",
                        "interval"
                    ])), this.name = "Loop";
                    var t1 = _p(Qf.getDefaults(), arguments, [
                        "callback",
                        "interval"
                    ]);
                    this._event = new Gf({
                        context: this.context,
                        callback: this._tick.bind(this),
                        loop: !0,
                        loopEnd: t1.interval,
                        playbackRate: t1.playbackRate,
                        probability: t1.probability
                    }), this.callback = t1.callback, this.iterations = t1.iterations;
                }
                static getDefaults() {
                    return Object.assign(ed.getDefaults(), {
                        interval: "4n",
                        callback: Ip,
                        playbackRate: 1,
                        iterations: 1 / 0,
                        probability: 1,
                        mute: !1,
                        humanize: !1
                    });
                }
                start(t1) {
                    return this._event.start(t1), this;
                }
                stop(t1) {
                    return this._event.stop(t1), this;
                }
                cancel(t1) {
                    return this._event.cancel(t1), this;
                }
                _tick(t1) {
                    this.callback(t1);
                }
                get state() {
                    return this._event.state;
                }
                get progress() {
                    return this._event.progress;
                }
                get interval() {
                    return this._event.loopEnd;
                }
                set interval(t1) {
                    this._event.loopEnd = t1;
                }
                get playbackRate() {
                    return this._event.playbackRate;
                }
                set playbackRate(t1) {
                    this._event.playbackRate = t1;
                }
                get humanize() {
                    return this._event.humanize;
                }
                set humanize(t1) {
                    this._event.humanize = t1;
                }
                get probability() {
                    return this._event.probability;
                }
                set probability(t1) {
                    this._event.probability = t1;
                }
                get mute() {
                    return this._event.mute;
                }
                set mute(t1) {
                    this._event.mute = t1;
                }
                get iterations() {
                    return !0 === this._event.loop ? 1 / 0 : this._event.loop;
                }
                set iterations(t1) {
                    this._event.loop = t1 === 1 / 0 || t1;
                }
                dispose() {
                    return super.dispose(), this._event.dispose(), this;
                }
            }
            class Zf extends Gf {
                constructor(){
                    super(_p(Zf.getDefaults(), arguments, [
                        "callback",
                        "events"
                    ])), this.name = "Part", this._state = new sd("stopped"), this._events = new Set;
                    const t1 = _p(Zf.getDefaults(), arguments, [
                        "callback",
                        "events"
                    ]);
                    this._state.increasing = !0, t1.events.forEach((t1)=>{
                        ep(t1) ? this.add(t1[0], t1[1]) : this.add(t1);
                    });
                }
                static getDefaults() {
                    return Object.assign(Gf.getDefaults(), {
                        events: []
                    });
                }
                start(e1, t1) {
                    const s = this.toTicks(e1);
                    if ("started" !== this._state.getValueAtTime(s)) {
                        t1 = mp(t1, this._loop ? this._loopStart : 0), t1 = this._loop ? mp(t1, this._loopStart) : mp(t1, 0);
                        const e1 = this.toTicks(t1);
                        this._state.add({
                            id: -1,
                            offset: e1,
                            state: "started",
                            time: s
                        }), this._forEach((t1)=>{
                            this._startNote(t1, s, e1);
                        });
                    }
                    return this;
                }
                _startNote(t1, e1, s) {
                    e1 -= s, this._loop ? t1.startOffset >= this._loopStart && t1.startOffset < this._loopEnd ? (t1.startOffset < s && (e1 += this._getLoopDuration()), t1.start(new xd(this.context, e1))) : t1.startOffset < this._loopStart && t1.startOffset >= s && (t1.loop = !1, t1.start(new xd(this.context, e1))) : t1.startOffset >= s && t1.start(new xd(this.context, e1));
                }
                get startOffset() {
                    return this._startOffset;
                }
                set startOffset(t1) {
                    this._startOffset = t1, this._forEach((t1)=>{
                        t1.startOffset += this._startOffset;
                    });
                }
                stop(e1) {
                    var t1 = this.toTicks(e1);
                    return this._state.cancel(t1), this._state.setStateAtTime("stopped", t1), this._forEach((t1)=>{
                        t1.stop(e1);
                    }), this;
                }
                at(t1, e1) {
                    const s = new td(this.context, t1).toTicks(), n = new xd(this.context, 1).toSeconds(), i = this._events.values();
                    let r = i.next();
                    for(; !r.done;){
                        const t1 = r.value;
                        if (Math.abs(s - t1.startOffset) < n) return $u(e1) && (t1.value = e1), t1;
                        r = i.next();
                    }
                    return $u(e1) ? (this.add(t1, e1), this.at(t1)) : null;
                }
                add(t1, e1) {
                    t1 instanceof Object && Reflect.has(t1, "time") && (t1 = (e1 = t1).time);
                    t1 = this.toTicks(t1);
                    let s;
                    return e1 instanceof Gf ? (s = e1, s.callback = this._tick.bind(this)) : s = new Gf({
                        callback: this._tick.bind(this),
                        context: this.context,
                        value: e1
                    }), s.startOffset = t1, s.set({
                        humanize: this.humanize,
                        loop: this.loop,
                        loopEnd: this.loopEnd,
                        loopStart: this.loopStart,
                        playbackRate: this.playbackRate,
                        probability: this.probability
                    }), this._events.add(s), this._restartEvent(s), this;
                }
                _restartEvent(e1) {
                    this._state.forEach((t1)=>{
                        "started" === t1.state ? this._startNote(e1, t1.time, t1.offset) : e1.stop(new xd(this.context, t1.time));
                    });
                }
                remove(e1, s) {
                    return Ku(e1) && e1.hasOwnProperty("time") && (e1 = (s = e1).time), e1 = this.toTicks(e1), this._events.forEach((t1)=>{
                        t1.startOffset === e1 && (Yu(s) || $u(s) && t1.value === s) && (this._events.delete(t1), t1.dispose());
                    }), this;
                }
                clear() {
                    return this._forEach((t1)=>t1.dispose()), this._events.clear(), this;
                }
                cancel(e1) {
                    return this._forEach((t1)=>t1.cancel(e1)), this._state.cancel(this.toTicks(e1)), this;
                }
                _forEach(e1) {
                    return this._events && this._events.forEach((t1)=>{
                        t1 instanceof Zf ? t1._forEach(e1) : e1(t1);
                    }), this;
                }
                _setAll(e1, s) {
                    this._forEach((t1)=>{
                        t1[e1] = s;
                    });
                }
                _tick(t1, e1) {
                    this.mute || this.callback(t1, e1);
                }
                _testLoopBoundries(t1) {
                    this._loop && (t1.startOffset < this._loopStart || t1.startOffset >= this._loopEnd) ? t1.cancel(0) : "stopped" === t1.state && this._restartEvent(t1);
                }
                get probability() {
                    return this._probability;
                }
                set probability(t1) {
                    this._probability = t1, this._setAll("probability", t1);
                }
                get humanize() {
                    return this._humanize;
                }
                set humanize(t1) {
                    this._humanize = t1, this._setAll("humanize", t1);
                }
                get loop() {
                    return this._loop;
                }
                set loop(e1) {
                    this._loop = e1, this._forEach((t1)=>{
                        t1.loopStart = this.loopStart, t1.loopEnd = this.loopEnd, t1.loop = e1, this._testLoopBoundries(t1);
                    });
                }
                get loopEnd() {
                    return new xd(this.context, this._loopEnd).toSeconds();
                }
                set loopEnd(e1) {
                    this._loopEnd = this.toTicks(e1), this._loop && this._forEach((t1)=>{
                        t1.loopEnd = e1, this._testLoopBoundries(t1);
                    });
                }
                get loopStart() {
                    return new xd(this.context, this._loopStart).toSeconds();
                }
                set loopStart(t1) {
                    this._loopStart = this.toTicks(t1), this._loop && this._forEach((t1)=>{
                        t1.loopStart = this.loopStart, this._testLoopBoundries(t1);
                    });
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t1) {
                    this._playbackRate = t1, this._setAll("playbackRate", t1);
                }
                get length() {
                    return this._events.size;
                }
                dispose() {
                    return super.dispose(), this.clear(), this;
                }
            }
            function* Xf(t1) {
                let e1 = 0;
                for(; e1 < t1.length;)e1 = Hf(e1, t1), yield t1[e1], e1++;
            }
            function* Yf(t1) {
                let e1 = t1.length - 1;
                for(; 0 <= e1;)e1 = Hf(e1, t1), yield t1[e1], e1--;
            }
            function* $f(t1, e1) {
                for(;;)yield* e1(t1);
            }
            function Hf(t1, e1) {
                return Sp(t1, 0, e1.length - 1);
            }
            function* Jf(t1, e1) {
                let s = e1 ? 0 : t1.length - 1;
                for(;;)s = Hf(s, t1), yield t1[s], e1 ? (s++, s >= t1.length - 1 && (e1 = !1)) : (s--, s <= 0 && (e1 = !0));
            }
            function* Kf(t1) {
                let e1 = 0, s = 0;
                for(; e1 < t1.length;)e1 = Hf(e1, t1), yield t1[e1], s++, e1 += s % 2 ? 2 : -1;
            }
            function* t_(t1) {
                let e1 = t1.length - 1, s = 0;
                for(; 0 <= e1;)e1 = Hf(e1, t1), yield t1[e1], s++, e1 += s % 2 ? -2 : 1;
            }
            function* e_(e1) {
                const s = [];
                for(let t1 = 0; t1 < e1.length; t1++)s.push(t1);
                for(; 0 < s.length;)yield e1[Hf(s.splice(Math.floor(s.length * Math.random()), 1)[0], e1)];
            }
            function* s_(t1, e1 = "up") {
                switch(Bu(0 < t1.length, "The array must have more than one value in it"), e1){
                    case "up":
                        yield* $f(t1, Xf);
                    case "down":
                        yield* $f(t1, Yf);
                    case "upDown":
                        yield* Jf(t1, !0);
                    case "downUp":
                        yield* Jf(t1, !1);
                    case "alternateUp":
                        yield* $f(t1, Kf);
                    case "alternateDown":
                        yield* $f(t1, t_);
                    case "random":
                        yield* function*(t1) {
                            for(;;)yield t1[Math.floor(Math.random() * t1.length)];
                        }(t1);
                    case "randomOnce":
                        yield* $f(t1, e_);
                    case "randomWalk":
                        yield* function*(t1) {
                            let e1 = Math.floor(Math.random() * t1.length);
                            for(;;)0 !== e1 && (e1 === t1.length - 1 || Math.random() < .5) ? e1-- : e1++, yield t1[e1];
                        }(t1);
                }
            }
            class n_ extends Qf {
                constructor(){
                    super(_p(n_.getDefaults(), arguments, [
                        "callback",
                        "values",
                        "pattern"
                    ])), this.name = "Pattern";
                    var t1 = _p(n_.getDefaults(), arguments, [
                        "callback",
                        "values",
                        "pattern"
                    ]);
                    this.callback = t1.callback, this._values = t1.values, this._pattern = s_(t1.values, t1.pattern), this._type = t1.pattern;
                }
                static getDefaults() {
                    return Object.assign(Qf.getDefaults(), {
                        pattern: "up",
                        values: [],
                        callback: Ip
                    });
                }
                _tick(t1) {
                    var e1 = this._pattern.next();
                    this._value = e1.value, this.callback(t1, this._value);
                }
                get values() {
                    return this._values;
                }
                set values(t1) {
                    this._values = t1, this.pattern = this._type;
                }
                get value() {
                    return this._value;
                }
                get pattern() {
                    return this._type;
                }
                set pattern(t1) {
                    this._type = t1, this._pattern = s_(this._values, this._type);
                }
            }
            class i_ extends Gf {
                constructor(){
                    super(_p(i_.getDefaults(), arguments, [
                        "callback",
                        "events",
                        "subdivision"
                    ])), this.name = "Sequence", this._part = new Zf({
                        callback: this._seqCallback.bind(this),
                        context: this.context
                    }), this._events = [], this._eventsArray = [];
                    var t1 = _p(i_.getDefaults(), arguments, [
                        "callback",
                        "events",
                        "subdivision"
                    ]);
                    this._subdivision = this.toTicks(t1.subdivision), this.events = t1.events, this.loop = t1.loop, this.loopStart = t1.loopStart, this.loopEnd = t1.loopEnd, this.playbackRate = t1.playbackRate, this.probability = t1.probability, this.humanize = t1.humanize, this.mute = t1.mute, this.playbackRate = t1.playbackRate;
                }
                static getDefaults() {
                    return Object.assign(gp(Gf.getDefaults(), [
                        "value"
                    ]), {
                        events: [],
                        loop: !0,
                        loopEnd: 0,
                        loopStart: 0,
                        subdivision: "8n"
                    });
                }
                _seqCallback(t1, e1) {
                    null === e1 || this.mute || this.callback(t1, e1);
                }
                get events() {
                    return this._events;
                }
                set events(t1) {
                    this.clear(), this._eventsArray = t1, this._events = this._createSequence(this._eventsArray), this._eventsUpdated();
                }
                start(t1, e1) {
                    return this._part.start(t1, e1 && this._indexTime(e1)), this;
                }
                stop(t1) {
                    return this._part.stop(t1), this;
                }
                get subdivision() {
                    return new xd(this.context, this._subdivision).toSeconds();
                }
                _createSequence(t1) {
                    return new Proxy(t1, {
                        get: (t1, e1)=>t1[e1],
                        set: (t1, e1, s)=>(sp(e1) && isFinite(parseInt(e1, 10)) && ep(s) ? t1[e1] = this._createSequence(s) : t1[e1] = s, this._eventsUpdated(), !0)
                    });
                }
                _eventsUpdated() {
                    this._part.clear(), this._rescheduleSequence(this._eventsArray, this._subdivision, this.startOffset), this.loopEnd = this.loopEnd;
                }
                _rescheduleSequence(t1, s, n) {
                    t1.forEach((t1, e1)=>{
                        e1 = e1 * s + n;
                        if (ep(t1)) this._rescheduleSequence(t1, s / t1.length, e1);
                        else {
                            const s = new xd(this.context, e1, "i").toSeconds();
                            this._part.add(s, t1);
                        }
                    });
                }
                _indexTime(t1) {
                    return new xd(this.context, t1 * this._subdivision + this.startOffset).toSeconds();
                }
                clear() {
                    return this._part.clear(), this;
                }
                dispose() {
                    return super.dispose(), this._part.dispose(), this;
                }
                get loop() {
                    return this._part.loop;
                }
                set loop(t1) {
                    this._part.loop = t1;
                }
                get loopStart() {
                    return this._loopStart;
                }
                set loopStart(t1) {
                    this._loopStart = t1, this._part.loopStart = this._indexTime(t1);
                }
                get loopEnd() {
                    return this._loopEnd;
                }
                set loopEnd(t1) {
                    this._loopEnd = t1, this._part.loopEnd = 0 === t1 ? this._indexTime(this._eventsArray.length) : this._indexTime(t1);
                }
                get startOffset() {
                    return this._part.startOffset;
                }
                set startOffset(t1) {
                    this._part.startOffset = t1;
                }
                get playbackRate() {
                    return this._part.playbackRate;
                }
                set playbackRate(t1) {
                    this._part.playbackRate = t1;
                }
                get probability() {
                    return this._part.probability;
                }
                set probability(t1) {
                    this._part.probability = t1;
                }
                get progress() {
                    return this._part.progress;
                }
                get humanize() {
                    return this._part.humanize;
                }
                set humanize(t1) {
                    this._part.humanize = t1;
                }
                get length() {
                    return this._part.length;
                }
            }
            class r_ extends id {
                constructor(){
                    super(Object.assign(_p(r_.getDefaults(), arguments, [
                        "fade"
                    ]))), this.name = "CrossFade", this._panner = this.context.createStereoPanner(), this._split = this.context.createChannelSplitter(2), this._g2a = new hf({
                        context: this.context
                    }), this.a = new hd({
                        context: this.context,
                        gain: 0
                    }), this.b = new hd({
                        context: this.context,
                        gain: 0
                    }), this.output = new hd({
                        context: this.context
                    }), this._internalChannels = [
                        this.a,
                        this.b
                    ];
                    var t1 = _p(r_.getDefaults(), arguments, [
                        "fade"
                    ]);
                    this.fade = new ud({
                        context: this.context,
                        units: "normalRange",
                        value: t1.fade
                    }), qp(this, "fade"), this.context.getConstant(1).connect(this._panner), this._panner.connect(this._split), this._panner.channelCount = 1, this._panner.channelCountMode = "explicit", od(this._split, this.a.gain, 0), od(this._split, this.b.gain, 1), this.fade.chain(this._g2a, this._panner.pan), this.a.connect(this.output), this.b.connect(this.output);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        fade: .5
                    });
                }
                dispose() {
                    return super.dispose(), this.a.dispose(), this.b.dispose(), this.output.dispose(), this.fade.dispose(), this._g2a.dispose(), this._panner.disconnect(), this._split.disconnect(), this;
                }
            }
            class o_ extends id {
                constructor(t1){
                    super(t1), this.name = "Effect", this._dryWet = new r_({
                        context: this.context
                    }), this.wet = this._dryWet.fade, this.effectSend = new hd({
                        context: this.context
                    }), this.effectReturn = new hd({
                        context: this.context
                    }), this.input = new hd({
                        context: this.context
                    }), this.output = this._dryWet, this.input.fan(this._dryWet.a, this.effectSend), this.effectReturn.connect(this._dryWet.b), this.wet.setValueAtTime(t1.wet, 0), this._internalChannels = [
                        this.effectReturn,
                        this.effectSend
                    ], qp(this, "wet");
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        wet: 1
                    });
                }
                connectEffect(t1) {
                    return this._internalChannels.push(t1), this.effectSend.chain(t1, this.effectReturn), this;
                }
                dispose() {
                    return super.dispose(), this._dryWet.dispose(), this.effectSend.dispose(), this.effectReturn.dispose(), this.wet.dispose(), this;
                }
            }
            class a_ extends o_ {
                constructor(t1){
                    super(t1), this.name = "LFOEffect", this._lfo = new tf({
                        context: this.context,
                        frequency: t1.frequency,
                        amplitude: t1.depth
                    }), this.depth = this._lfo.amplitude, this.frequency = this._lfo.frequency, this.type = t1.type, qp(this, [
                        "frequency",
                        "depth"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(o_.getDefaults(), {
                        frequency: 1,
                        type: "sine",
                        depth: 1
                    });
                }
                start(t1) {
                    return this._lfo.start(t1), this;
                }
                stop(t1) {
                    return this._lfo.stop(t1), this;
                }
                sync() {
                    return this._lfo.sync(), this;
                }
                unsync() {
                    return this._lfo.unsync(), this;
                }
                get type() {
                    return this._lfo.type;
                }
                set type(t1) {
                    this._lfo.type = t1;
                }
                dispose() {
                    return super.dispose(), this._lfo.dispose(), this.frequency.dispose(), this.depth.dispose(), this;
                }
            }
            class h_ extends a_ {
                constructor(){
                    super(_p(h_.getDefaults(), arguments, [
                        "frequency",
                        "baseFrequency",
                        "octaves"
                    ])), this.name = "AutoFilter";
                    var t1 = _p(h_.getDefaults(), arguments, [
                        "frequency",
                        "baseFrequency",
                        "octaves"
                    ]);
                    this.filter = new kf(Object.assign(t1.filter, {
                        context: this.context
                    })), this.connectEffect(this.filter), this._lfo.connect(this.filter.frequency), this.octaves = t1.octaves, this.baseFrequency = t1.baseFrequency;
                }
                static getDefaults() {
                    return Object.assign(a_.getDefaults(), {
                        baseFrequency: 200,
                        octaves: 2.6,
                        filter: {
                            type: "lowpass",
                            rolloff: -12,
                            Q: 1
                        }
                    });
                }
                get baseFrequency() {
                    return this._lfo.min;
                }
                set baseFrequency(t1) {
                    this._lfo.min = this.toFrequency(t1), this.octaves = this._octaves;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1, this._lfo.max = this._lfo.min * Math.pow(2, t1);
                }
                dispose() {
                    return super.dispose(), this.filter.dispose(), this;
                }
            }
            class c_ extends id {
                constructor(){
                    super(Object.assign(_p(c_.getDefaults(), arguments, [
                        "pan"
                    ]))), this.name = "Panner", this._panner = this.context.createStereoPanner(), this.input = this._panner, this.output = this._panner;
                    var t1 = _p(c_.getDefaults(), arguments, [
                        "pan"
                    ]);
                    this.pan = new nd({
                        context: this.context,
                        param: this._panner.pan,
                        value: t1.pan,
                        minValue: -1,
                        maxValue: 1
                    }), this._panner.channelCount = t1.channelCount, this._panner.channelCountMode = "explicit", qp(this, "pan");
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        pan: 0,
                        channelCount: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._panner.disconnect(), this.pan.dispose(), this;
                }
            }
            class l_ extends a_ {
                constructor(){
                    super(_p(l_.getDefaults(), arguments, [
                        "frequency"
                    ])), this.name = "AutoPanner";
                    var t1 = _p(l_.getDefaults(), arguments, [
                        "frequency"
                    ]);
                    this._panner = new c_({
                        context: this.context,
                        channelCount: t1.channelCount
                    }), this.connectEffect(this._panner), this._lfo.connect(this._panner.pan), this._lfo.min = -1, this._lfo.max = 1;
                }
                static getDefaults() {
                    return Object.assign(a_.getDefaults(), {
                        channelCount: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._panner.dispose(), this;
                }
            }
            class u_ extends id {
                constructor(){
                    super(_p(u_.getDefaults(), arguments, [
                        "smoothing"
                    ])), this.name = "Follower";
                    var t1 = _p(u_.getDefaults(), arguments, [
                        "smoothing"
                    ]);
                    this._abs = this.input = new af({
                        context: this.context
                    }), this._lowpass = this.output = new Lf({
                        context: this.context,
                        frequency: 1 / this.toSeconds(t1.smoothing),
                        type: "lowpass"
                    }), this._abs.connect(this._lowpass), this._smoothing = t1.smoothing;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        smoothing: .05
                    });
                }
                get smoothing() {
                    return this._smoothing;
                }
                set smoothing(t1) {
                    this._smoothing = t1, this._lowpass.frequency = 1 / this.toSeconds(this.smoothing);
                }
                dispose() {
                    return super.dispose(), this._abs.dispose(), this._lowpass.dispose(), this;
                }
            }
            class p_ extends o_ {
                constructor(){
                    super(_p(p_.getDefaults(), arguments, [
                        "baseFrequency",
                        "octaves",
                        "sensitivity"
                    ])), this.name = "AutoWah";
                    var t1 = _p(p_.getDefaults(), arguments, [
                        "baseFrequency",
                        "octaves",
                        "sensitivity"
                    ]);
                    this._follower = new u_({
                        context: this.context,
                        smoothing: t1.follower
                    }), this._sweepRange = new ff({
                        context: this.context,
                        min: 0,
                        max: 1,
                        exponent: .5
                    }), this._baseFrequency = this.toFrequency(t1.baseFrequency), this._octaves = t1.octaves, this._inputBoost = new hd({
                        context: this.context
                    }), this._bandpass = new kf({
                        context: this.context,
                        rolloff: -48,
                        frequency: 0,
                        Q: t1.Q
                    }), this._peaking = new kf({
                        context: this.context,
                        type: "peaking"
                    }), this._peaking.gain.value = t1.gain, this.gain = this._peaking.gain, this.Q = this._bandpass.Q, this.effectSend.chain(this._inputBoost, this._follower, this._sweepRange), this._sweepRange.connect(this._bandpass.frequency), this._sweepRange.connect(this._peaking.frequency), this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn), this._setSweepRange(), this.sensitivity = t1.sensitivity, qp(this, [
                        "gain",
                        "Q"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(o_.getDefaults(), {
                        baseFrequency: 100,
                        octaves: 6,
                        sensitivity: 0,
                        Q: 2,
                        gain: 2,
                        follower: .2
                    });
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1, this._setSweepRange();
                }
                get follower() {
                    return this._follower.smoothing;
                }
                set follower(t1) {
                    this._follower.smoothing = t1;
                }
                get baseFrequency() {
                    return this._baseFrequency;
                }
                set baseFrequency(t1) {
                    this._baseFrequency = this.toFrequency(t1), this._setSweepRange();
                }
                get sensitivity() {
                    return Bp(1 / this._inputBoost.gain.value);
                }
                set sensitivity(t1) {
                    this._inputBoost.gain.value = 1 / Wp(t1);
                }
                _setSweepRange() {
                    this._sweepRange.min = this._baseFrequency, this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2);
                }
                dispose() {
                    return super.dispose(), this._follower.dispose(), this._sweepRange.dispose(), this._bandpass.dispose(), this._peaking.dispose(), this._inputBoost.dispose(), this;
                }
            }
            const d_ = "bit-crusher";
            Vf(d_, "\n	class BitCrusherWorklet extends SingleIOProcessor {\n\n		static get parameterDescriptors() {\n			return [{\n				name: \"bits\",\n				defaultValue: 12,\n				minValue: 1,\n				maxValue: 16,\n				automationRate: 'k-rate'\n			}];\n		}\n\n		generate(input, _channel, parameters) {\n			const step = Math.pow(0.5, parameters.bits - 1);\n			const val = step * Math.floor(input / step + 0.5);\n			return val;\n		}\n	}\n");
            class f_ extends o_ {
                constructor(){
                    super(_p(f_.getDefaults(), arguments, [
                        "bits"
                    ])), this.name = "BitCrusher";
                    var t1 = _p(f_.getDefaults(), arguments, [
                        "bits"
                    ]);
                    this._bitCrusherWorklet = new __({
                        context: this.context,
                        bits: t1.bits
                    }), this.connectEffect(this._bitCrusherWorklet), this.bits = this._bitCrusherWorklet.bits;
                }
                static getDefaults() {
                    return Object.assign(o_.getDefaults(), {
                        bits: 4
                    });
                }
                dispose() {
                    return super.dispose(), this._bitCrusherWorklet.dispose(), this;
                }
            }
            class __ extends Nf {
                constructor(){
                    super(_p(__.getDefaults(), arguments)), this.name = "BitCrusherWorklet";
                    var t1 = _p(__.getDefaults(), arguments);
                    this.input = new hd({
                        context: this.context
                    }), this.output = new hd({
                        context: this.context
                    }), this.bits = new nd({
                        context: this.context,
                        value: t1.bits,
                        units: "positive",
                        minValue: 1,
                        maxValue: 16,
                        param: this._dummyParam,
                        swappable: !0
                    });
                }
                static getDefaults() {
                    return Object.assign(Nf.getDefaults(), {
                        bits: 12
                    });
                }
                _audioWorkletName() {
                    return d_;
                }
                onReady(t1) {
                    rd(this.input, t1, this.output);
                    t1 = t1.parameters.get("bits");
                    this.bits.setParam(t1);
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this.bits.dispose(), this;
                }
            }
            class m_ extends o_ {
                constructor(){
                    super(_p(m_.getDefaults(), arguments, [
                        "order"
                    ])), this.name = "Chebyshev";
                    var t1 = _p(m_.getDefaults(), arguments, [
                        "order"
                    ]);
                    this._shaper = new zd({
                        context: this.context,
                        length: 4096
                    }), this._order = t1.order, this.connectEffect(this._shaper), this.order = t1.order, this.oversample = t1.oversample;
                }
                static getDefaults() {
                    return Object.assign(o_.getDefaults(), {
                        order: 1,
                        oversample: "none"
                    });
                }
                _getCoefficient(t1, e1, s) {
                    return s.has(e1) || (0 === e1 ? s.set(e1, 0) : 1 === e1 ? s.set(e1, t1) : s.set(e1, 2 * t1 * this._getCoefficient(t1, e1 - 1, s) - this._getCoefficient(t1, e1 - 2, s))), s.get(e1);
                }
                get order() {
                    return this._order;
                }
                set order(e1) {
                    Bu(Number.isInteger(e1), "'order' must be an integer"), this._order = e1, this._shaper.setMap((t1)=>this._getCoefficient(t1, e1, new Map));
                }
                get oversample() {
                    return this._shaper.oversample;
                }
                set oversample(t1) {
                    this._shaper.oversample = t1;
                }
                dispose() {
                    return super.dispose(), this._shaper.dispose(), this;
                }
            }
            class g_ extends id {
                constructor(){
                    super(_p(g_.getDefaults(), arguments, [
                        "channels"
                    ])), this.name = "Split";
                    var t1 = _p(g_.getDefaults(), arguments, [
                        "channels"
                    ]);
                    this._splitter = this.input = this.output = this.context.createChannelSplitter(t1.channels), this._internalChannels = [
                        this._splitter
                    ];
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        channels: 2
                    });
                }
                dispose() {
                    return super.dispose(), this._splitter.disconnect(), this;
                }
            }
            class v_ extends id {
                constructor(){
                    super(_p(v_.getDefaults(), arguments, [
                        "channels"
                    ])), this.name = "Merge";
                    var t1 = _p(v_.getDefaults(), arguments, [
                        "channels"
                    ]);
                    this._merger = this.output = this.input = this.context.createChannelMerger(t1.channels);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        channels: 2
                    });
                }
                dispose() {
                    return super.dispose(), this._merger.disconnect(), this;
                }
            }
            class y_ extends id {
                constructor(t1){
                    super(t1), this.name = "StereoEffect", this.input = new hd({
                        context: this.context
                    }), this.input.channelCount = 2, this.input.channelCountMode = "explicit", this._dryWet = this.output = new r_({
                        context: this.context,
                        fade: t1.wet
                    }), this.wet = this._dryWet.fade, this._split = new g_({
                        context: this.context,
                        channels: 2
                    }), this._merge = new v_({
                        context: this.context,
                        channels: 2
                    }), this.input.connect(this._split), this.input.connect(this._dryWet.a), this._merge.connect(this._dryWet.b), qp(this, [
                        "wet"
                    ]);
                }
                connectEffectLeft(...t1) {
                    this._split.connect(t1[0], 0, 0), rd(...t1), od(t1[t1.length - 1], this._merge, 0, 0);
                }
                connectEffectRight(...t1) {
                    this._split.connect(t1[0], 1, 0), rd(...t1), od(t1[t1.length - 1], this._merge, 0, 1);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        wet: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._dryWet.dispose(), this._split.dispose(), this._merge.dispose(), this;
                }
            }
            class x_ extends y_ {
                constructor(t1){
                    super(t1), this.feedback = new ud({
                        context: this.context,
                        value: t1.feedback,
                        units: "normalRange"
                    }), this._feedbackL = new hd({
                        context: this.context
                    }), this._feedbackR = new hd({
                        context: this.context
                    }), this._feedbackSplit = new g_({
                        context: this.context,
                        channels: 2
                    }), this._feedbackMerge = new v_({
                        context: this.context,
                        channels: 2
                    }), this._merge.connect(this._feedbackSplit), this._feedbackMerge.connect(this._split), this._feedbackSplit.connect(this._feedbackL, 0, 0), this._feedbackL.connect(this._feedbackMerge, 0, 0), this._feedbackSplit.connect(this._feedbackR, 1, 0), this._feedbackR.connect(this._feedbackMerge, 0, 1), this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain), qp(this, [
                        "feedback"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(y_.getDefaults(), {
                        feedback: .5
                    });
                }
                dispose() {
                    return super.dispose(), this.feedback.dispose(), this._feedbackL.dispose(), this._feedbackR.dispose(), this._feedbackSplit.dispose(), this._feedbackMerge.dispose(), this;
                }
            }
            class w_ extends x_ {
                constructor(){
                    super(_p(w_.getDefaults(), arguments, [
                        "frequency",
                        "delayTime",
                        "depth"
                    ])), this.name = "Chorus";
                    var t1 = _p(w_.getDefaults(), arguments, [
                        "frequency",
                        "delayTime",
                        "depth"
                    ]);
                    this._depth = t1.depth, this._delayTime = t1.delayTime / 1e3, this._lfoL = new tf({
                        context: this.context,
                        frequency: t1.frequency,
                        min: 0,
                        max: 1
                    }), this._lfoR = new tf({
                        context: this.context,
                        frequency: t1.frequency,
                        min: 0,
                        max: 1,
                        phase: 180
                    }), this._delayNodeL = new gd({
                        context: this.context
                    }), this._delayNodeR = new gd({
                        context: this.context
                    }), this.frequency = this._lfoL.frequency, qp(this, [
                        "frequency"
                    ]), this._lfoL.frequency.connect(this._lfoR.frequency), this.connectEffectLeft(this._delayNodeL), this.connectEffectRight(this._delayNodeR), this._lfoL.connect(this._delayNodeL.delayTime), this._lfoR.connect(this._delayNodeR.delayTime), this.depth = this._depth, this.type = t1.type, this.spread = t1.spread;
                }
                static getDefaults() {
                    return Object.assign(x_.getDefaults(), {
                        frequency: 1.5,
                        delayTime: 3.5,
                        depth: .7,
                        type: "sine",
                        spread: 180,
                        feedback: 0,
                        wet: .5
                    });
                }
                get depth() {
                    return this._depth;
                }
                set depth(t1) {
                    this._depth = t1;
                    t1 = this._delayTime * t1;
                    this._lfoL.min = Math.max(this._delayTime - t1, 0), this._lfoL.max = this._delayTime + t1, this._lfoR.min = Math.max(this._delayTime - t1, 0), this._lfoR.max = this._delayTime + t1;
                }
                get delayTime() {
                    return 1e3 * this._delayTime;
                }
                set delayTime(t1) {
                    this._delayTime = t1 / 1e3, this.depth = this._depth;
                }
                get type() {
                    return this._lfoL.type;
                }
                set type(t1) {
                    this._lfoL.type = t1, this._lfoR.type = t1;
                }
                get spread() {
                    return this._lfoR.phase - this._lfoL.phase;
                }
                set spread(t1) {
                    this._lfoL.phase = 90 - t1 / 2, this._lfoR.phase = t1 / 2 + 90;
                }
                start(t1) {
                    return this._lfoL.start(t1), this._lfoR.start(t1), this;
                }
                stop(t1) {
                    return this._lfoL.stop(t1), this._lfoR.stop(t1), this;
                }
                sync() {
                    return this._lfoL.sync(), this._lfoR.sync(), this;
                }
                unsync() {
                    return this._lfoL.unsync(), this._lfoR.unsync(), this;
                }
                dispose() {
                    return super.dispose(), this._lfoL.dispose(), this._lfoR.dispose(), this._delayNodeL.dispose(), this._delayNodeR.dispose(), this.frequency.dispose(), this;
                }
            }
            class b_ extends o_ {
                constructor(){
                    super(_p(b_.getDefaults(), arguments, [
                        "distortion"
                    ])), this.name = "Distortion";
                    var t1 = _p(b_.getDefaults(), arguments, [
                        "distortion"
                    ]);
                    this._shaper = new zd({
                        context: this.context,
                        length: 4096
                    }), this._distortion = t1.distortion, this.connectEffect(this._shaper), this.distortion = t1.distortion, this.oversample = t1.oversample;
                }
                static getDefaults() {
                    return Object.assign(o_.getDefaults(), {
                        distortion: .4,
                        oversample: "none"
                    });
                }
                get distortion() {
                    return this._distortion;
                }
                set distortion(t1) {
                    const e1 = 100 * (this._distortion = t1), s = Math.PI / 180;
                    this._shaper.setMap((t1)=>Math.abs(t1) < .001 ? 0 : (3 + e1) * t1 * 20 * s / (Math.PI + e1 * Math.abs(t1)));
                }
                get oversample() {
                    return this._shaper.oversample;
                }
                set oversample(t1) {
                    this._shaper.oversample = t1;
                }
                dispose() {
                    return super.dispose(), this._shaper.dispose(), this;
                }
            }
            class T_ extends o_ {
                constructor(t1){
                    super(t1), this.name = "FeedbackEffect", this._feedbackGain = new hd({
                        context: this.context,
                        gain: t1.feedback,
                        units: "normalRange"
                    }), this.feedback = this._feedbackGain.gain, qp(this, "feedback"), this.effectReturn.chain(this._feedbackGain, this.effectSend);
                }
                static getDefaults() {
                    return Object.assign(o_.getDefaults(), {
                        feedback: .125
                    });
                }
                dispose() {
                    return super.dispose(), this._feedbackGain.dispose(), this.feedback.dispose(), this;
                }
            }
            class S_ extends T_ {
                constructor(){
                    super(_p(S_.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ])), this.name = "FeedbackDelay";
                    var t1 = _p(S_.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ]);
                    this._delayNode = new gd({
                        context: this.context,
                        delayTime: t1.delayTime,
                        maxDelay: t1.maxDelay
                    }), this.delayTime = this._delayNode.delayTime, this.connectEffect(this._delayNode), qp(this, "delayTime");
                }
                static getDefaults() {
                    return Object.assign(T_.getDefaults(), {
                        delayTime: .25,
                        maxDelay: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._delayNode.dispose(), this.delayTime.dispose(), this;
                }
            }
            class k_ extends id {
                constructor(t1){
                    super(t1), this.name = "PhaseShiftAllpass", this.input = new hd({
                        context: this.context
                    }), this.output = new hd({
                        context: this.context
                    }), this.offset90 = new hd({
                        context: this.context
                    }), this._bank0 = this._createAllPassFilterBank([
                        .6923878,
                        .9360654322959,
                        .988229522686,
                        .9987488452737
                    ]), this._bank1 = this._createAllPassFilterBank([
                        .4021921162426,
                        .856171088242,
                        .9722909545651,
                        .9952884791278
                    ]), this._oneSampleDelay = this.context.createIIRFilter([
                        0,
                        1
                    ], [
                        1,
                        0
                    ]), rd(this.input, ...this._bank0, this._oneSampleDelay, this.output), rd(this.input, ...this._bank1, this.offset90);
                }
                _createAllPassFilterBank(t1) {
                    return t1.map((t1)=>{
                        t1 = [
                            [
                                t1 * t1,
                                0,
                                -1
                            ],
                            [
                                1,
                                0,
                                -t1 * t1
                            ]
                        ];
                        return this.context.createIIRFilter(t1[0], t1[1]);
                    });
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this.offset90.dispose(), this._bank0.forEach((t1)=>t1.disconnect()), this._bank1.forEach((t1)=>t1.disconnect()), this._oneSampleDelay.disconnect(), this;
                }
            }
            class C_ extends o_ {
                constructor(){
                    super(_p(C_.getDefaults(), arguments, [
                        "frequency"
                    ])), this.name = "FrequencyShifter";
                    var t1 = _p(C_.getDefaults(), arguments, [
                        "frequency"
                    ]);
                    this.frequency = new ud({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency,
                        minValue: -this.context.sampleRate / 2,
                        maxValue: this.context.sampleRate / 2
                    }), this._sine = new Pd({
                        context: this.context,
                        type: "sine"
                    }), this._cosine = new jd({
                        context: this.context,
                        phase: -90,
                        type: "sine"
                    }), this._sineMultiply = new Bd({
                        context: this.context
                    }), this._cosineMultiply = new Bd({
                        context: this.context
                    }), this._negate = new cf({
                        context: this.context
                    }), this._add = new Hd({
                        context: this.context
                    }), this._phaseShifter = new k_({
                        context: this.context
                    }), this.effectSend.connect(this._phaseShifter), this.frequency.fan(this._sine.frequency, this._cosine.frequency), this._phaseShifter.offset90.connect(this._cosineMultiply), this._cosine.connect(this._cosineMultiply.factor), this._phaseShifter.connect(this._sineMultiply), this._sine.connect(this._sineMultiply.factor), this._sineMultiply.connect(this._negate), this._cosineMultiply.connect(this._add), this._negate.connect(this._add.addend), this._add.connect(this.effectReturn);
                    t1 = this.immediate();
                    this._sine.start(t1), this._cosine.start(t1);
                }
                static getDefaults() {
                    return Object.assign(o_.getDefaults(), {
                        frequency: 0
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this._add.dispose(), this._cosine.dispose(), this._cosineMultiply.dispose(), this._negate.dispose(), this._phaseShifter.dispose(), this._sine.dispose(), this._sineMultiply.dispose(), this;
                }
            }
            const A_ = [
                1557 / 44100,
                1617 / 44100,
                1491 / 44100,
                1422 / 44100,
                1277 / 44100,
                1356 / 44100,
                1188 / 44100,
                1116 / 44100
            ], D_ = [
                225,
                556,
                441,
                341
            ];
            class O_ extends y_ {
                constructor(){
                    super(_p(O_.getDefaults(), arguments, [
                        "roomSize",
                        "dampening"
                    ])), this.name = "Freeverb", this._combFilters = [], this._allpassFiltersL = [], this._allpassFiltersR = [];
                    const s = _p(O_.getDefaults(), arguments, [
                        "roomSize",
                        "dampening"
                    ]);
                    this.roomSize = new ud({
                        context: this.context,
                        value: s.roomSize,
                        units: "normalRange"
                    }), this._allpassFiltersL = D_.map((t1)=>{
                        const e1 = this.context.createBiquadFilter();
                        return e1.type = "allpass", e1.frequency.value = t1, e1;
                    }), this._allpassFiltersR = D_.map((t1)=>{
                        const e1 = this.context.createBiquadFilter();
                        return e1.type = "allpass", e1.frequency.value = t1, e1;
                    }), this._combFilters = A_.map((t1, e1)=>{
                        t1 = new zf({
                            context: this.context,
                            dampening: s.dampening,
                            delayTime: t1
                        });
                        return e1 < A_.length / 2 ? this.connectEffectLeft(t1, ...this._allpassFiltersL) : this.connectEffectRight(t1, ...this._allpassFiltersR), this.roomSize.connect(t1.resonance), t1;
                    }), qp(this, [
                        "roomSize"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(y_.getDefaults(), {
                        roomSize: .7,
                        dampening: 3e3
                    });
                }
                get dampening() {
                    return this._combFilters[0].dampening;
                }
                set dampening(e1) {
                    this._combFilters.forEach((t1)=>t1.dampening = e1);
                }
                dispose() {
                    return super.dispose(), this._allpassFiltersL.forEach((t1)=>t1.disconnect()), this._allpassFiltersR.forEach((t1)=>t1.disconnect()), this._combFilters.forEach((t1)=>t1.dispose()), this.roomSize.dispose(), this;
                }
            }
            const M_ = [
                .06748,
                .06404,
                .08212,
                .09004
            ], E_ = [
                .773,
                .802,
                .753,
                .733
            ], R_ = [
                347,
                113,
                37
            ];
            class q_ extends y_ {
                constructor(){
                    super(_p(q_.getDefaults(), arguments, [
                        "roomSize"
                    ])), this.name = "JCReverb", this._allpassFilters = [], this._feedbackCombFilters = [];
                    var t1 = _p(q_.getDefaults(), arguments, [
                        "roomSize"
                    ]);
                    this.roomSize = new ud({
                        context: this.context,
                        value: t1.roomSize,
                        units: "normalRange"
                    }), this._scaleRoomSize = new Jd({
                        context: this.context,
                        min: -0.733,
                        max: .197
                    }), this._allpassFilters = R_.map((t1)=>{
                        const e1 = this.context.createBiquadFilter();
                        return e1.type = "allpass", e1.frequency.value = t1, e1;
                    }), this._feedbackCombFilters = M_.map((t1, e1)=>{
                        const s = new jf({
                            context: this.context,
                            delayTime: t1
                        });
                        return this._scaleRoomSize.connect(s.resonance), s.resonance.value = E_[e1], e1 < M_.length / 2 ? this.connectEffectLeft(...this._allpassFilters, s) : this.connectEffectRight(...this._allpassFilters, s), s;
                    }), this.roomSize.connect(this._scaleRoomSize), qp(this, [
                        "roomSize"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(y_.getDefaults(), {
                        roomSize: .5
                    });
                }
                dispose() {
                    return super.dispose(), this._allpassFilters.forEach((t1)=>t1.disconnect()), this._feedbackCombFilters.forEach((t1)=>t1.dispose()), this.roomSize.dispose(), this._scaleRoomSize.dispose(), this;
                }
            }
            class F_ extends x_ {
                constructor(t1){
                    super(t1), this._feedbackL.disconnect(), this._feedbackL.connect(this._feedbackMerge, 0, 1), this._feedbackR.disconnect(), this._feedbackR.connect(this._feedbackMerge, 0, 0), qp(this, [
                        "feedback"
                    ]);
                }
            }
            class I_ extends F_ {
                constructor(){
                    super(_p(I_.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ])), this.name = "PingPongDelay";
                    var t1 = _p(I_.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ]);
                    this._leftDelay = new gd({
                        context: this.context,
                        maxDelay: t1.maxDelay
                    }), this._rightDelay = new gd({
                        context: this.context,
                        maxDelay: t1.maxDelay
                    }), this._rightPreDelay = new gd({
                        context: this.context,
                        maxDelay: t1.maxDelay
                    }), this.delayTime = new ud({
                        context: this.context,
                        units: "time",
                        value: t1.delayTime
                    }), this.connectEffectLeft(this._leftDelay), this.connectEffectRight(this._rightPreDelay, this._rightDelay), this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime), this._feedbackL.disconnect(), this._feedbackL.connect(this._rightDelay), qp(this, [
                        "delayTime"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(F_.getDefaults(), {
                        delayTime: .25,
                        maxDelay: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._leftDelay.dispose(), this._rightDelay.dispose(), this._rightPreDelay.dispose(), this.delayTime.dispose(), this;
                }
            }
            class V_ extends T_ {
                constructor(){
                    super(_p(V_.getDefaults(), arguments, [
                        "pitch"
                    ])), this.name = "PitchShift";
                    var t1 = _p(V_.getDefaults(), arguments, [
                        "pitch"
                    ]);
                    this._frequency = new ud({
                        context: this.context
                    }), this._delayA = new gd({
                        maxDelay: 1,
                        context: this.context
                    }), this._lfoA = new tf({
                        context: this.context,
                        min: 0,
                        max: .1,
                        type: "sawtooth"
                    }).connect(this._delayA.delayTime), this._delayB = new gd({
                        maxDelay: 1,
                        context: this.context
                    }), this._lfoB = new tf({
                        context: this.context,
                        min: 0,
                        max: .1,
                        type: "sawtooth",
                        phase: 180
                    }).connect(this._delayB.delayTime), this._crossFade = new r_({
                        context: this.context
                    }), this._crossFadeLFO = new tf({
                        context: this.context,
                        min: 0,
                        max: 1,
                        type: "triangle",
                        phase: 90
                    }).connect(this._crossFade.fade), this._feedbackDelay = new gd({
                        delayTime: t1.delayTime,
                        context: this.context
                    }), this.delayTime = this._feedbackDelay.delayTime, qp(this, "delayTime"), this._pitch = t1.pitch, this._windowSize = t1.windowSize, this._delayA.connect(this._crossFade.a), this._delayB.connect(this._crossFade.b), this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency), this.effectSend.fan(this._delayA, this._delayB), this._crossFade.chain(this._feedbackDelay, this.effectReturn);
                    t1 = this.now();
                    this._lfoA.start(t1), this._lfoB.start(t1), this._crossFadeLFO.start(t1), this.windowSize = this._windowSize;
                }
                static getDefaults() {
                    return Object.assign(T_.getDefaults(), {
                        pitch: 0,
                        windowSize: .1,
                        delayTime: 0,
                        feedback: 0
                    });
                }
                get pitch() {
                    return this._pitch;
                }
                set pitch(t1) {
                    this._pitch = t1;
                    let e1 = 0;
                    e1 = t1 < 0 ? (this._lfoA.min = 0, this._lfoA.max = this._windowSize, this._lfoB.min = 0, this._lfoB.max = this._windowSize, Up(t1 - 1) + 1) : (this._lfoA.min = this._windowSize, this._lfoA.max = 0, this._lfoB.min = this._windowSize, this._lfoB.max = 0, Up(t1) - 1), this._frequency.value = e1 * (1.2 / this._windowSize);
                }
                get windowSize() {
                    return this._windowSize;
                }
                set windowSize(t1) {
                    this._windowSize = this.toSeconds(t1), this.pitch = this._pitch;
                }
                dispose() {
                    return super.dispose(), this._frequency.dispose(), this._delayA.dispose(), this._delayB.dispose(), this._lfoA.dispose(), this._lfoB.dispose(), this._crossFade.dispose(), this._crossFadeLFO.dispose(), this._feedbackDelay.dispose(), this;
                }
            }
            class N_ extends y_ {
                constructor(){
                    super(_p(N_.getDefaults(), arguments, [
                        "frequency",
                        "octaves",
                        "baseFrequency"
                    ])), this.name = "Phaser";
                    var t1 = _p(N_.getDefaults(), arguments, [
                        "frequency",
                        "octaves",
                        "baseFrequency"
                    ]);
                    this._lfoL = new tf({
                        context: this.context,
                        frequency: t1.frequency,
                        min: 0,
                        max: 1
                    }), this._lfoR = new tf({
                        context: this.context,
                        frequency: t1.frequency,
                        min: 0,
                        max: 1,
                        phase: 180
                    }), this._baseFrequency = this.toFrequency(t1.baseFrequency), this._octaves = t1.octaves, this.Q = new ud({
                        context: this.context,
                        value: t1.Q,
                        units: "positive"
                    }), this._filtersL = this._makeFilters(t1.stages, this._lfoL), this._filtersR = this._makeFilters(t1.stages, this._lfoR), this.frequency = this._lfoL.frequency, this.frequency.value = t1.frequency, this.connectEffectLeft(...this._filtersL), this.connectEffectRight(...this._filtersR), this._lfoL.frequency.connect(this._lfoR.frequency), this.baseFrequency = t1.baseFrequency, this.octaves = t1.octaves, this._lfoL.start(), this._lfoR.start(), qp(this, [
                        "frequency",
                        "Q"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(y_.getDefaults(), {
                        frequency: .5,
                        octaves: 3,
                        stages: 10,
                        Q: 10,
                        baseFrequency: 350
                    });
                }
                _makeFilters(e1, s) {
                    const n = [];
                    for(let t1 = 0; t1 < e1; t1++){
                        const e1 = this.context.createBiquadFilter();
                        e1.type = "allpass", this.Q.connect(e1.Q), s.connect(e1.frequency), n.push(e1);
                    }
                    return n;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1;
                    t1 = this._baseFrequency * Math.pow(2, t1);
                    this._lfoL.max = t1, this._lfoR.max = t1;
                }
                get baseFrequency() {
                    return this._baseFrequency;
                }
                set baseFrequency(t1) {
                    this._baseFrequency = this.toFrequency(t1), this._lfoL.min = this._baseFrequency, this._lfoR.min = this._baseFrequency, this.octaves = this._octaves;
                }
                dispose() {
                    return super.dispose(), this.Q.dispose(), this._lfoL.dispose(), this._lfoR.dispose(), this._filtersL.forEach((t1)=>t1.disconnect()), this._filtersR.forEach((t1)=>t1.disconnect()), this.frequency.dispose(), this;
                }
            }
            class P_ extends o_ {
                constructor(){
                    super(_p(P_.getDefaults(), arguments, [
                        "decay"
                    ])), this.name = "Reverb", this._convolver = this.context.createConvolver(), this.ready = Promise.resolve();
                    var t1 = _p(P_.getDefaults(), arguments, [
                        "decay"
                    ]);
                    this._decay = t1.decay, this._preDelay = t1.preDelay, this.generate(), this.connectEffect(this._convolver);
                }
                static getDefaults() {
                    return Object.assign(o_.getDefaults(), {
                        decay: 1.5,
                        preDelay: .01
                    });
                }
                get decay() {
                    return this._decay;
                }
                set decay(t1) {
                    Uu(t1 = this.toSeconds(t1), .001), this._decay = t1, this.generate();
                }
                get preDelay() {
                    return this._preDelay;
                }
                set preDelay(t1) {
                    Uu(t1 = this.toSeconds(t1), 0), this._preDelay = t1, this.generate();
                }
                generate() {
                    return ap(this, void 0, void 0, function*() {
                        const t1 = this.ready, e1 = new Np(2, this._decay + this._preDelay, this.context.sampleRate), s = new Rd({
                            context: e1
                        }), n = new Rd({
                            context: e1
                        }), i = new v_({
                            context: e1
                        });
                        s.connect(i, 0, 0), n.connect(i, 0, 1);
                        const r = new hd({
                            context: e1
                        }).toDestination();
                        i.connect(r), s.start(0), n.start(0), r.gain.setValueAtTime(0, 0), r.gain.setValueAtTime(1, this._preDelay), r.gain.exponentialApproachValueAtTime(0, this._preDelay, this.decay);
                        const o = e1.render();
                        return this.ready = o.then(Ip), yield t1, this._convolver.buffer = (yield o).get(), this;
                    });
                }
                dispose() {
                    return super.dispose(), this._convolver.disconnect(), this;
                }
            }
            class j_ extends id {
                constructor(){
                    super(_p(j_.getDefaults(), arguments)), this.name = "MidSideSplit", this._split = this.input = new g_({
                        channels: 2,
                        context: this.context
                    }), this._midAdd = new Hd({
                        context: this.context
                    }), this.mid = new Bd({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._sideSubtract = new lf({
                        context: this.context
                    }), this.side = new Bd({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._split.connect(this._midAdd, 0), this._split.connect(this._midAdd.addend, 1), this._split.connect(this._sideSubtract, 0), this._split.connect(this._sideSubtract.subtrahend, 1), this._midAdd.connect(this.mid), this._sideSubtract.connect(this.side);
                }
                dispose() {
                    return super.dispose(), this.mid.dispose(), this.side.dispose(), this._midAdd.dispose(), this._sideSubtract.dispose(), this._split.dispose(), this;
                }
            }
            class L_ extends id {
                constructor(){
                    super(_p(L_.getDefaults(), arguments)), this.name = "MidSideMerge", this.mid = new hd({
                        context: this.context
                    }), this.side = new hd({
                        context: this.context
                    }), this._left = new Hd({
                        context: this.context
                    }), this._leftMult = new Bd({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._right = new lf({
                        context: this.context
                    }), this._rightMult = new Bd({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._merge = this.output = new v_({
                        context: this.context
                    }), this.mid.fan(this._left), this.side.connect(this._left.addend), this.mid.connect(this._right), this.side.connect(this._right.subtrahend), this._left.connect(this._leftMult), this._right.connect(this._rightMult), this._leftMult.connect(this._merge, 0, 0), this._rightMult.connect(this._merge, 0, 1);
                }
                dispose() {
                    return super.dispose(), this.mid.dispose(), this.side.dispose(), this._leftMult.dispose(), this._rightMult.dispose(), this._left.dispose(), this._right.dispose(), this;
                }
            }
            class z_ extends o_ {
                constructor(t1){
                    super(t1), this.name = "MidSideEffect", this._midSideMerge = new L_({
                        context: this.context
                    }), this._midSideSplit = new j_({
                        context: this.context
                    }), this._midSend = this._midSideSplit.mid, this._sideSend = this._midSideSplit.side, this._midReturn = this._midSideMerge.mid, this._sideReturn = this._midSideMerge.side, this.effectSend.connect(this._midSideSplit), this._midSideMerge.connect(this.effectReturn);
                }
                connectEffectMid(...t1) {
                    this._midSend.chain(...t1, this._midReturn);
                }
                connectEffectSide(...t1) {
                    this._sideSend.chain(...t1, this._sideReturn);
                }
                dispose() {
                    return super.dispose(), this._midSideSplit.dispose(), this._midSideMerge.dispose(), this._midSend.dispose(), this._sideSend.dispose(), this._midReturn.dispose(), this._sideReturn.dispose(), this;
                }
            }
            class W_ extends z_ {
                constructor(){
                    super(_p(W_.getDefaults(), arguments, [
                        "width"
                    ])), this.name = "StereoWidener";
                    var t1 = _p(W_.getDefaults(), arguments, [
                        "width"
                    ]);
                    this.width = new ud({
                        context: this.context,
                        value: t1.width,
                        units: "normalRange"
                    }), qp(this, [
                        "width"
                    ]), this._twoTimesWidthMid = new Bd({
                        context: this.context,
                        value: 2
                    }), this._twoTimesWidthSide = new Bd({
                        context: this.context,
                        value: 2
                    }), this._midMult = new Bd({
                        context: this.context
                    }), this._twoTimesWidthMid.connect(this._midMult.factor), this.connectEffectMid(this._midMult), this._oneMinusWidth = new lf({
                        context: this.context
                    }), this._oneMinusWidth.connect(this._twoTimesWidthMid), od(this.context.getConstant(1), this._oneMinusWidth), this.width.connect(this._oneMinusWidth.subtrahend), this._sideMult = new Bd({
                        context: this.context
                    }), this.width.connect(this._twoTimesWidthSide), this._twoTimesWidthSide.connect(this._sideMult.factor), this.connectEffectSide(this._sideMult);
                }
                static getDefaults() {
                    return Object.assign(z_.getDefaults(), {
                        width: .5
                    });
                }
                dispose() {
                    return super.dispose(), this.width.dispose(), this._midMult.dispose(), this._sideMult.dispose(), this._twoTimesWidthMid.dispose(), this._twoTimesWidthSide.dispose(), this._oneMinusWidth.dispose(), this;
                }
            }
            class B_ extends y_ {
                constructor(){
                    super(_p(B_.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ])), this.name = "Tremolo";
                    var t1 = _p(B_.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ]);
                    this._lfoL = new tf({
                        context: this.context,
                        type: t1.type,
                        min: 1,
                        max: 0
                    }), this._lfoR = new tf({
                        context: this.context,
                        type: t1.type,
                        min: 1,
                        max: 0
                    }), this._amplitudeL = new hd({
                        context: this.context
                    }), this._amplitudeR = new hd({
                        context: this.context
                    }), this.frequency = new ud({
                        context: this.context,
                        value: t1.frequency,
                        units: "frequency"
                    }), this.depth = new ud({
                        context: this.context,
                        value: t1.depth,
                        units: "normalRange"
                    }), qp(this, [
                        "frequency",
                        "depth"
                    ]), this.connectEffectLeft(this._amplitudeL), this.connectEffectRight(this._amplitudeR), this._lfoL.connect(this._amplitudeL.gain), this._lfoR.connect(this._amplitudeR.gain), this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency), this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude), this.spread = t1.spread;
                }
                static getDefaults() {
                    return Object.assign(y_.getDefaults(), {
                        frequency: 10,
                        type: "sine",
                        depth: .5,
                        spread: 180
                    });
                }
                start(t1) {
                    return this._lfoL.start(t1), this._lfoR.start(t1), this;
                }
                stop(t1) {
                    return this._lfoL.stop(t1), this._lfoR.stop(t1), this;
                }
                sync() {
                    return this._lfoL.sync(), this._lfoR.sync(), this.context.transport.syncSignal(this.frequency), this;
                }
                unsync() {
                    return this._lfoL.unsync(), this._lfoR.unsync(), this.context.transport.unsyncSignal(this.frequency), this;
                }
                get type() {
                    return this._lfoL.type;
                }
                set type(t1) {
                    this._lfoL.type = t1, this._lfoR.type = t1;
                }
                get spread() {
                    return this._lfoR.phase - this._lfoL.phase;
                }
                set spread(t1) {
                    this._lfoL.phase = 90 - t1 / 2, this._lfoR.phase = t1 / 2 + 90;
                }
                dispose() {
                    return super.dispose(), this._lfoL.dispose(), this._lfoR.dispose(), this._amplitudeL.dispose(), this._amplitudeR.dispose(), this.frequency.dispose(), this.depth.dispose(), this;
                }
            }
            class U_ extends o_ {
                constructor(){
                    super(_p(U_.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ])), this.name = "Vibrato";
                    var t1 = _p(U_.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ]);
                    this._delayNode = new gd({
                        context: this.context,
                        delayTime: 0,
                        maxDelay: t1.maxDelay
                    }), this._lfo = new tf({
                        context: this.context,
                        type: t1.type,
                        min: 0,
                        max: t1.maxDelay,
                        frequency: t1.frequency,
                        phase: -90
                    }).start().connect(this._delayNode.delayTime), this.frequency = this._lfo.frequency, this.depth = this._lfo.amplitude, this.depth.value = t1.depth, qp(this, [
                        "frequency",
                        "depth"
                    ]), this.effectSend.chain(this._delayNode, this.effectReturn);
                }
                static getDefaults() {
                    return Object.assign(o_.getDefaults(), {
                        maxDelay: .005,
                        frequency: 5,
                        depth: .1,
                        type: "sine"
                    });
                }
                get type() {
                    return this._lfo.type;
                }
                set type(t1) {
                    this._lfo.type = t1;
                }
                dispose() {
                    return super.dispose(), this._delayNode.dispose(), this._lfo.dispose(), this.frequency.dispose(), this.depth.dispose(), this;
                }
            }
            class G_ extends id {
                constructor(){
                    super(_p(G_.getDefaults(), arguments, [
                        "type",
                        "size"
                    ])), this.name = "Analyser", this._analysers = [], this._buffers = [];
                    var e1 = _p(G_.getDefaults(), arguments, [
                        "type",
                        "size"
                    ]);
                    this.input = this.output = this._gain = new hd({
                        context: this.context
                    }), this._split = new g_({
                        context: this.context,
                        channels: e1.channels
                    }), this.input.connect(this._split), Uu(e1.channels, 1);
                    for(let t1 = 0; t1 < e1.channels; t1++)this._analysers[t1] = this.context.createAnalyser(), this._split.connect(this._analysers[t1], t1, 0);
                    this.size = e1.size, this.type = e1.type, this.smoothing = e1.smoothing;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        size: 1024,
                        smoothing: .8,
                        type: "fft",
                        channels: 1
                    });
                }
                getValue() {
                    return this._analysers.forEach((t1, e1)=>{
                        e1 = this._buffers[e1];
                        "fft" === this._type ? t1.getFloatFrequencyData(e1) : "waveform" === this._type && t1.getFloatTimeDomainData(e1);
                    }), 1 === this.channels ? this._buffers[0] : this._buffers;
                }
                get size() {
                    return this._analysers[0].frequencyBinCount;
                }
                set size(s) {
                    this._analysers.forEach((t1, e1)=>{
                        t1.fftSize = 2 * s, this._buffers[e1] = new Float32Array(s);
                    });
                }
                get channels() {
                    return this._analysers.length;
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    Bu("waveform" === t1 || "fft" === t1, `Analyser: invalid type: ${t1}`), this._type = t1;
                }
                get smoothing() {
                    return this._analysers[0].smoothingTimeConstant;
                }
                set smoothing(e1) {
                    this._analysers.forEach((t1)=>t1.smoothingTimeConstant = e1);
                }
                dispose() {
                    return super.dispose(), this._analysers.forEach((t1)=>t1.disconnect()), this._split.dispose(), this._gain.dispose(), this;
                }
            }
            class Q_ extends id {
                constructor(){
                    super(_p(Q_.getDefaults(), arguments)), this.name = "MeterBase", this.input = this.output = this._analyser = new G_({
                        context: this.context,
                        size: 256,
                        type: "waveform"
                    });
                }
                dispose() {
                    return super.dispose(), this._analyser.dispose(), this;
                }
            }
            class Z_ extends Q_ {
                constructor(){
                    super(_p(Z_.getDefaults(), arguments, [
                        "smoothing"
                    ])), this.name = "Meter", this._rms = 0;
                    var t1 = _p(Z_.getDefaults(), arguments, [
                        "smoothing"
                    ]);
                    this.input = this.output = this._analyser = new G_({
                        context: this.context,
                        size: 256,
                        type: "waveform",
                        channels: t1.channelCount
                    }), this.smoothing = t1.smoothing, this.normalRange = t1.normalRange;
                }
                static getDefaults() {
                    return Object.assign(Q_.getDefaults(), {
                        smoothing: .8,
                        normalRange: !1,
                        channelCount: 1
                    });
                }
                getLevel() {
                    return Xu("'getLevel' has been changed to 'getValue'"), this.getValue();
                }
                getValue() {
                    const t1 = this._analyser.getValue(), e1 = (1 === this.channels ? [
                        t1
                    ] : t1).map((t1)=>{
                        var e1 = t1.reduce((t1, e1)=>t1 + e1 * e1, 0), t1 = Math.sqrt(e1 / t1.length);
                        return this._rms = Math.max(t1, this._rms * this.smoothing), this.normalRange ? this._rms : Bp(this._rms);
                    });
                    return 1 === this.channels ? e1[0] : e1;
                }
                get channels() {
                    return this._analyser.channels;
                }
                dispose() {
                    return super.dispose(), this._analyser.dispose(), this;
                }
            }
            class X_ extends Q_ {
                constructor(){
                    super(_p(X_.getDefaults(), arguments, [
                        "size"
                    ])), this.name = "FFT";
                    var t1 = _p(X_.getDefaults(), arguments, [
                        "size"
                    ]);
                    this.normalRange = t1.normalRange, this._analyser.type = "fft", this.size = t1.size;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        normalRange: !1,
                        size: 1024,
                        smoothing: .8
                    });
                }
                getValue() {
                    return this._analyser.getValue().map((t1)=>this.normalRange ? Wp(t1) : t1);
                }
                get size() {
                    return this._analyser.size;
                }
                set size(t1) {
                    this._analyser.size = t1;
                }
                get smoothing() {
                    return this._analyser.smoothing;
                }
                set smoothing(t1) {
                    this._analyser.smoothing = t1;
                }
                getFrequencyOfIndex(t1) {
                    return Bu(0 <= t1 && t1 < this.size, `index must be greater than or equal to 0 and less than ${this.size}`), t1 * this.context.sampleRate / (2 * this.size);
                }
            }
            class Y_ extends Q_ {
                constructor(){
                    super(_p(Y_.getDefaults(), arguments)), this.name = "DCMeter", this._analyser.type = "waveform", this._analyser.size = 256;
                }
                getValue() {
                    return this._analyser.getValue()[0];
                }
            }
            class $_ extends Q_ {
                constructor(){
                    super(_p($_.getDefaults(), arguments, [
                        "size"
                    ])), this.name = "Waveform";
                    var t1 = _p($_.getDefaults(), arguments, [
                        "size"
                    ]);
                    this._analyser.type = "waveform", this.size = t1.size;
                }
                static getDefaults() {
                    return Object.assign(Q_.getDefaults(), {
                        size: 1024
                    });
                }
                getValue() {
                    return this._analyser.getValue();
                }
                get size() {
                    return this._analyser.size;
                }
                set size(t1) {
                    this._analyser.size = t1;
                }
            }
            class H_ extends id {
                constructor(){
                    super(_p(H_.getDefaults(), arguments, [
                        "solo"
                    ])), this.name = "Solo";
                    var t1 = _p(H_.getDefaults(), arguments, [
                        "solo"
                    ]);
                    this.input = this.output = new hd({
                        context: this.context
                    }), H_._allSolos.has(this.context) || H_._allSolos.set(this.context, new Set), H_._allSolos.get(this.context).add(this), this.solo = t1.solo;
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        solo: !1
                    });
                }
                get solo() {
                    return this._isSoloed();
                }
                set solo(t1) {
                    t1 ? this._addSolo() : this._removeSolo(), H_._allSolos.get(this.context).forEach((t1)=>t1._updateSolo());
                }
                get muted() {
                    return 0 === this.input.gain.value;
                }
                _addSolo() {
                    H_._soloed.has(this.context) || H_._soloed.set(this.context, new Set), H_._soloed.get(this.context).add(this);
                }
                _removeSolo() {
                    H_._soloed.has(this.context) && H_._soloed.get(this.context).delete(this);
                }
                _isSoloed() {
                    return H_._soloed.has(this.context) && H_._soloed.get(this.context).has(this);
                }
                _noSolos() {
                    return !H_._soloed.has(this.context) || H_._soloed.has(this.context) && 0 === H_._soloed.get(this.context).size;
                }
                _updateSolo() {
                    this._isSoloed() || this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0;
                }
                dispose() {
                    return super.dispose(), H_._allSolos.get(this.context).delete(this), this._removeSolo(), this;
                }
            }
            H_._allSolos = new Map, H_._soloed = new Map;
            class J_ extends id {
                constructor(){
                    super(_p(J_.getDefaults(), arguments, [
                        "pan",
                        "volume"
                    ])), this.name = "PanVol";
                    var t1 = _p(J_.getDefaults(), arguments, [
                        "pan",
                        "volume"
                    ]);
                    this._panner = this.input = new c_({
                        context: this.context,
                        pan: t1.pan,
                        channelCount: t1.channelCount
                    }), this.pan = this._panner.pan, this._volume = this.output = new Sd({
                        context: this.context,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, this._panner.connect(this._volume), this.mute = t1.mute, qp(this, [
                        "pan",
                        "volume"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        mute: !1,
                        pan: 0,
                        volume: 0,
                        channelCount: 1
                    });
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t1) {
                    this._volume.mute = t1;
                }
                dispose() {
                    return super.dispose(), this._panner.dispose(), this.pan.dispose(), this._volume.dispose(), this.volume.dispose(), this;
                }
            }
            class K_ extends id {
                constructor(){
                    super(_p(K_.getDefaults(), arguments, [
                        "volume",
                        "pan"
                    ])), this.name = "Channel";
                    var t1 = _p(K_.getDefaults(), arguments, [
                        "volume",
                        "pan"
                    ]);
                    this._solo = this.input = new H_({
                        solo: t1.solo,
                        context: this.context
                    }), this._panVol = this.output = new J_({
                        context: this.context,
                        pan: t1.pan,
                        volume: t1.volume,
                        mute: t1.mute,
                        channelCount: t1.channelCount
                    }), this.pan = this._panVol.pan, this.volume = this._panVol.volume, this._solo.connect(this._panVol), qp(this, [
                        "pan",
                        "volume"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        pan: 0,
                        volume: 0,
                        mute: !1,
                        solo: !1,
                        channelCount: 1
                    });
                }
                get solo() {
                    return this._solo.solo;
                }
                set solo(t1) {
                    this._solo.solo = t1;
                }
                get muted() {
                    return this._solo.muted || this.mute;
                }
                get mute() {
                    return this._panVol.mute;
                }
                set mute(t1) {
                    this._panVol.mute = t1;
                }
                _getBus(t1) {
                    return K_.buses.has(t1) || K_.buses.set(t1, new hd({
                        context: this.context
                    })), K_.buses.get(t1);
                }
                send(t1, e1 = 0) {
                    const s = this._getBus(t1), n = new hd({
                        context: this.context,
                        units: "decibels",
                        gain: e1
                    });
                    return this.connect(n), n.connect(s), n;
                }
                receive(t1) {
                    return this._getBus(t1).connect(this), this;
                }
                dispose() {
                    return super.dispose(), this._panVol.dispose(), this.pan.dispose(), this.volume.dispose(), this._solo.dispose(), this;
                }
            }
            K_.buses = new Map;
            class tm extends id {
                constructor(){
                    super(_p(tm.getDefaults(), arguments)), this.name = "Mono", this.input = new hd({
                        context: this.context
                    }), this._merge = this.output = new v_({
                        channels: 2,
                        context: this.context
                    }), this.input.connect(this._merge, 0, 0), this.input.connect(this._merge, 0, 1);
                }
                dispose() {
                    return super.dispose(), this._merge.dispose(), this.input.dispose(), this;
                }
            }
            class em extends id {
                constructor(){
                    super(_p(em.getDefaults(), arguments, [
                        "lowFrequency",
                        "highFrequency"
                    ])), this.name = "MultibandSplit", this.input = new hd({
                        context: this.context
                    }), this.output = void 0, this.low = new kf({
                        context: this.context,
                        frequency: 0,
                        type: "lowpass"
                    }), this._lowMidFilter = new kf({
                        context: this.context,
                        frequency: 0,
                        type: "highpass"
                    }), this.mid = new kf({
                        context: this.context,
                        frequency: 0,
                        type: "lowpass"
                    }), this.high = new kf({
                        context: this.context,
                        frequency: 0,
                        type: "highpass"
                    }), this._internalChannels = [
                        this.low,
                        this.mid,
                        this.high
                    ];
                    var t1 = _p(em.getDefaults(), arguments, [
                        "lowFrequency",
                        "highFrequency"
                    ]);
                    this.lowFrequency = new ud({
                        context: this.context,
                        units: "frequency",
                        value: t1.lowFrequency
                    }), this.highFrequency = new ud({
                        context: this.context,
                        units: "frequency",
                        value: t1.highFrequency
                    }), this.Q = new ud({
                        context: this.context,
                        units: "positive",
                        value: t1.Q
                    }), this.input.fan(this.low, this.high), this.input.chain(this._lowMidFilter, this.mid), this.lowFrequency.fan(this.low.frequency, this._lowMidFilter.frequency), this.highFrequency.fan(this.mid.frequency, this.high.frequency), this.Q.connect(this.low.Q), this.Q.connect(this._lowMidFilter.Q), this.Q.connect(this.mid.Q), this.Q.connect(this.high.Q), qp(this, [
                        "high",
                        "mid",
                        "low",
                        "highFrequency",
                        "lowFrequency"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        Q: 1,
                        highFrequency: 2500,
                        lowFrequency: 400
                    });
                }
                dispose() {
                    return super.dispose(), Fp(this, [
                        "high",
                        "mid",
                        "low",
                        "highFrequency",
                        "lowFrequency"
                    ]), this.low.dispose(), this._lowMidFilter.dispose(), this.mid.dispose(), this.high.dispose(), this.lowFrequency.dispose(), this.highFrequency.dispose(), this.Q.dispose(), this;
                }
            }
            class sm extends id {
                constructor(){
                    super(...arguments), this.name = "Listener", this.positionX = new nd({
                        context: this.context,
                        param: this.context.rawContext.listener.positionX
                    }), this.positionY = new nd({
                        context: this.context,
                        param: this.context.rawContext.listener.positionY
                    }), this.positionZ = new nd({
                        context: this.context,
                        param: this.context.rawContext.listener.positionZ
                    }), this.forwardX = new nd({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardX
                    }), this.forwardY = new nd({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardY
                    }), this.forwardZ = new nd({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardZ
                    }), this.upX = new nd({
                        context: this.context,
                        param: this.context.rawContext.listener.upX
                    }), this.upY = new nd({
                        context: this.context,
                        param: this.context.rawContext.listener.upY
                    }), this.upZ = new nd({
                        context: this.context,
                        param: this.context.rawContext.listener.upZ
                    });
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        positionX: 0,
                        positionY: 0,
                        positionZ: 0,
                        forwardX: 0,
                        forwardY: 0,
                        forwardZ: -1,
                        upX: 0,
                        upY: 1,
                        upZ: 0
                    });
                }
                dispose() {
                    return super.dispose(), this.positionX.dispose(), this.positionY.dispose(), this.positionZ.dispose(), this.forwardX.dispose(), this.forwardY.dispose(), this.forwardZ.dispose(), this.upX.dispose(), this.upY.dispose(), this.upZ.dispose(), this;
                }
            }
            Ap((t1)=>{
                t1.listener = new sm({
                    context: t1
                });
            }), Op((t1)=>{
                t1.listener.dispose();
            });
            class nm extends id {
                constructor(){
                    super(_p(nm.getDefaults(), arguments, [
                        "positionX",
                        "positionY",
                        "positionZ"
                    ])), this.name = "Panner3D";
                    var t1 = _p(nm.getDefaults(), arguments, [
                        "positionX",
                        "positionY",
                        "positionZ"
                    ]);
                    this._panner = this.input = this.output = this.context.createPanner(), this.panningModel = t1.panningModel, this.maxDistance = t1.maxDistance, this.distanceModel = t1.distanceModel, this.coneOuterGain = t1.coneOuterGain, this.coneOuterAngle = t1.coneOuterAngle, this.coneInnerAngle = t1.coneInnerAngle, this.refDistance = t1.refDistance, this.rolloffFactor = t1.rolloffFactor, this.positionX = new nd({
                        context: this.context,
                        param: this._panner.positionX,
                        value: t1.positionX
                    }), this.positionY = new nd({
                        context: this.context,
                        param: this._panner.positionY,
                        value: t1.positionY
                    }), this.positionZ = new nd({
                        context: this.context,
                        param: this._panner.positionZ,
                        value: t1.positionZ
                    }), this.orientationX = new nd({
                        context: this.context,
                        param: this._panner.orientationX,
                        value: t1.orientationX
                    }), this.orientationY = new nd({
                        context: this.context,
                        param: this._panner.orientationY,
                        value: t1.orientationY
                    }), this.orientationZ = new nd({
                        context: this.context,
                        param: this._panner.orientationZ,
                        value: t1.orientationZ
                    });
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        coneInnerAngle: 360,
                        coneOuterAngle: 360,
                        coneOuterGain: 0,
                        distanceModel: "inverse",
                        maxDistance: 1e4,
                        orientationX: 0,
                        orientationY: 0,
                        orientationZ: 0,
                        panningModel: "equalpower",
                        positionX: 0,
                        positionY: 0,
                        positionZ: 0,
                        refDistance: 1,
                        rolloffFactor: 1
                    });
                }
                setPosition(t1, e1, s) {
                    return this.positionX.value = t1, this.positionY.value = e1, this.positionZ.value = s, this;
                }
                setOrientation(t1, e1, s) {
                    return this.orientationX.value = t1, this.orientationY.value = e1, this.orientationZ.value = s, this;
                }
                get panningModel() {
                    return this._panner.panningModel;
                }
                set panningModel(t1) {
                    this._panner.panningModel = t1;
                }
                get refDistance() {
                    return this._panner.refDistance;
                }
                set refDistance(t1) {
                    this._panner.refDistance = t1;
                }
                get rolloffFactor() {
                    return this._panner.rolloffFactor;
                }
                set rolloffFactor(t1) {
                    this._panner.rolloffFactor = t1;
                }
                get distanceModel() {
                    return this._panner.distanceModel;
                }
                set distanceModel(t1) {
                    this._panner.distanceModel = t1;
                }
                get coneInnerAngle() {
                    return this._panner.coneInnerAngle;
                }
                set coneInnerAngle(t1) {
                    this._panner.coneInnerAngle = t1;
                }
                get coneOuterAngle() {
                    return this._panner.coneOuterAngle;
                }
                set coneOuterAngle(t1) {
                    this._panner.coneOuterAngle = t1;
                }
                get coneOuterGain() {
                    return this._panner.coneOuterGain;
                }
                set coneOuterGain(t1) {
                    this._panner.coneOuterGain = t1;
                }
                get maxDistance() {
                    return this._panner.maxDistance;
                }
                set maxDistance(t1) {
                    this._panner.maxDistance = t1;
                }
                dispose() {
                    return super.dispose(), this._panner.disconnect(), this.orientationX.dispose(), this.orientationY.dispose(), this.orientationZ.dispose(), this.positionX.dispose(), this.positionY.dispose(), this.positionZ.dispose(), this;
                }
            }
            class im extends id {
                constructor(){
                    super(_p(im.getDefaults(), arguments)), this.name = "Recorder";
                    var t1 = _p(im.getDefaults(), arguments);
                    this.input = new hd({
                        context: this.context
                    }), Bu(im.supported, "Media Recorder API is not available"), this._stream = this.context.createMediaStreamDestination(), this.input.connect(this._stream), this._recorder = new MediaRecorder(this._stream.stream, {
                        mimeType: t1.mimeType
                    });
                }
                static getDefaults() {
                    return id.getDefaults();
                }
                get mimeType() {
                    return this._recorder.mimeType;
                }
                static get supported() {
                    return null !== ip && Reflect.has(ip, "MediaRecorder");
                }
                get state() {
                    return "inactive" === this._recorder.state ? "stopped" : "paused" === this._recorder.state ? "paused" : "started";
                }
                start() {
                    return ap(this, void 0, void 0, function*() {
                        Bu("started" !== this.state, "Recorder is already started");
                        var t1 = new Promise((t1)=>{
                            const e1 = ()=>{
                                this._recorder.removeEventListener("start", e1, !1), t1();
                            };
                            this._recorder.addEventListener("start", e1, !1);
                        });
                        return this._recorder.start(), yield t1;
                    });
                }
                stop() {
                    return ap(this, void 0, void 0, function*() {
                        Bu("stopped" !== this.state, "Recorder is not started");
                        var t1 = new Promise((e1)=>{
                            const s = (t1)=>{
                                this._recorder.removeEventListener("dataavailable", s, !1), e1(t1.data);
                            };
                            this._recorder.addEventListener("dataavailable", s, !1);
                        });
                        return this._recorder.stop(), yield t1;
                    });
                }
                pause() {
                    return Bu("started" === this.state, "Recorder must be started"), this._recorder.pause(), this;
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this._stream.disconnect(), this;
                }
            }
            class rm extends id {
                constructor(){
                    super(_p(rm.getDefaults(), arguments, [
                        "threshold",
                        "ratio"
                    ])), this.name = "Compressor", this._compressor = this.context.createDynamicsCompressor(), this.input = this._compressor, this.output = this._compressor;
                    var t1 = _p(rm.getDefaults(), arguments, [
                        "threshold",
                        "ratio"
                    ]);
                    this.threshold = new nd({
                        minValue: this._compressor.threshold.minValue,
                        maxValue: this._compressor.threshold.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.threshold,
                        units: "decibels",
                        value: t1.threshold
                    }), this.attack = new nd({
                        minValue: this._compressor.attack.minValue,
                        maxValue: this._compressor.attack.maxValue,
                        context: this.context,
                        param: this._compressor.attack,
                        units: "time",
                        value: t1.attack
                    }), this.release = new nd({
                        minValue: this._compressor.release.minValue,
                        maxValue: this._compressor.release.maxValue,
                        context: this.context,
                        param: this._compressor.release,
                        units: "time",
                        value: t1.release
                    }), this.knee = new nd({
                        minValue: this._compressor.knee.minValue,
                        maxValue: this._compressor.knee.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.knee,
                        units: "decibels",
                        value: t1.knee
                    }), this.ratio = new nd({
                        minValue: this._compressor.ratio.minValue,
                        maxValue: this._compressor.ratio.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.ratio,
                        units: "positive",
                        value: t1.ratio
                    }), qp(this, [
                        "knee",
                        "release",
                        "attack",
                        "ratio",
                        "threshold"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        attack: .003,
                        knee: 30,
                        ratio: 12,
                        release: .25,
                        threshold: -24
                    });
                }
                get reduction() {
                    return this._compressor.reduction;
                }
                dispose() {
                    return super.dispose(), this._compressor.disconnect(), this.attack.dispose(), this.release.dispose(), this.threshold.dispose(), this.ratio.dispose(), this.knee.dispose(), this;
                }
            }
            class om extends id {
                constructor(){
                    super(Object.assign(_p(om.getDefaults(), arguments, [
                        "threshold",
                        "smoothing"
                    ]))), this.name = "Gate";
                    var t1 = _p(om.getDefaults(), arguments, [
                        "threshold",
                        "smoothing"
                    ]);
                    this._follower = new u_({
                        context: this.context,
                        smoothing: t1.smoothing
                    }), this._gt = new pf({
                        context: this.context,
                        value: Wp(t1.threshold)
                    }), this.input = new hd({
                        context: this.context
                    }), this._gate = this.output = new hd({
                        context: this.context
                    }), this.input.connect(this._gate), this.input.chain(this._follower, this._gt, this._gate.gain);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        smoothing: .1,
                        threshold: -40
                    });
                }
                get threshold() {
                    return Bp(this._gt.value);
                }
                set threshold(t1) {
                    this._gt.value = Wp(t1);
                }
                get smoothing() {
                    return this._follower.smoothing;
                }
                set smoothing(t1) {
                    this._follower.smoothing = t1;
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this._follower.dispose(), this._gt.dispose(), this._gate.dispose(), this;
                }
            }
            class am extends id {
                constructor(){
                    super(Object.assign(_p(am.getDefaults(), arguments, [
                        "threshold"
                    ]))), this.name = "Limiter";
                    var t1 = _p(am.getDefaults(), arguments, [
                        "threshold"
                    ]);
                    this._compressor = this.input = this.output = new rm({
                        context: this.context,
                        ratio: 20,
                        attack: .003,
                        release: .01,
                        threshold: t1.threshold
                    }), this.threshold = this._compressor.threshold, qp(this, "threshold");
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        threshold: -12
                    });
                }
                get reduction() {
                    return this._compressor.reduction;
                }
                dispose() {
                    return super.dispose(), this._compressor.dispose(), this.threshold.dispose(), this;
                }
            }
            class hm extends id {
                constructor(){
                    super(Object.assign(_p(hm.getDefaults(), arguments))), this.name = "MidSideCompressor";
                    var t1 = _p(hm.getDefaults(), arguments);
                    this._midSideSplit = this.input = new j_({
                        context: this.context
                    }), this._midSideMerge = this.output = new L_({
                        context: this.context
                    }), this.mid = new rm(Object.assign(t1.mid, {
                        context: this.context
                    })), this.side = new rm(Object.assign(t1.side, {
                        context: this.context
                    })), this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid), this._midSideSplit.side.chain(this.side, this._midSideMerge.side), qp(this, [
                        "mid",
                        "side"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        mid: {
                            ratio: 3,
                            threshold: -24,
                            release: .03,
                            attack: .02,
                            knee: 16
                        },
                        side: {
                            ratio: 6,
                            threshold: -30,
                            release: .25,
                            attack: .03,
                            knee: 10
                        }
                    });
                }
                dispose() {
                    return super.dispose(), this.mid.dispose(), this.side.dispose(), this._midSideSplit.dispose(), this._midSideMerge.dispose(), this;
                }
            }
            class cm extends id {
                constructor(){
                    super(Object.assign(_p(cm.getDefaults(), arguments))), this.name = "MultibandCompressor";
                    var t1 = _p(cm.getDefaults(), arguments);
                    this._splitter = this.input = new em({
                        context: this.context,
                        lowFrequency: t1.lowFrequency,
                        highFrequency: t1.highFrequency
                    }), this.lowFrequency = this._splitter.lowFrequency, this.highFrequency = this._splitter.highFrequency, this.output = new hd({
                        context: this.context
                    }), this.low = new rm(Object.assign(t1.low, {
                        context: this.context
                    })), this.mid = new rm(Object.assign(t1.mid, {
                        context: this.context
                    })), this.high = new rm(Object.assign(t1.high, {
                        context: this.context
                    })), this._splitter.low.chain(this.low, this.output), this._splitter.mid.chain(this.mid, this.output), this._splitter.high.chain(this.high, this.output), qp(this, [
                        "high",
                        "mid",
                        "low",
                        "highFrequency",
                        "lowFrequency"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        lowFrequency: 250,
                        highFrequency: 2e3,
                        low: {
                            ratio: 6,
                            threshold: -30,
                            release: .25,
                            attack: .03,
                            knee: 10
                        },
                        mid: {
                            ratio: 3,
                            threshold: -24,
                            release: .03,
                            attack: .02,
                            knee: 16
                        },
                        high: {
                            ratio: 3,
                            threshold: -24,
                            release: .03,
                            attack: .02,
                            knee: 16
                        }
                    });
                }
                dispose() {
                    return super.dispose(), this._splitter.dispose(), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this.output.dispose(), this;
                }
            }
            class lm extends id {
                constructor(){
                    super(_p(lm.getDefaults(), arguments, [
                        "low",
                        "mid",
                        "high"
                    ])), this.name = "EQ3", this.output = new hd({
                        context: this.context
                    }), this._internalChannels = [];
                    var t1 = _p(lm.getDefaults(), arguments, [
                        "low",
                        "mid",
                        "high"
                    ]);
                    this.input = this._multibandSplit = new em({
                        context: this.context,
                        highFrequency: t1.highFrequency,
                        lowFrequency: t1.lowFrequency
                    }), this._lowGain = new hd({
                        context: this.context,
                        gain: t1.low,
                        units: "decibels"
                    }), this._midGain = new hd({
                        context: this.context,
                        gain: t1.mid,
                        units: "decibels"
                    }), this._highGain = new hd({
                        context: this.context,
                        gain: t1.high,
                        units: "decibels"
                    }), this.low = this._lowGain.gain, this.mid = this._midGain.gain, this.high = this._highGain.gain, this.Q = this._multibandSplit.Q, this.lowFrequency = this._multibandSplit.lowFrequency, this.highFrequency = this._multibandSplit.highFrequency, this._multibandSplit.low.chain(this._lowGain, this.output), this._multibandSplit.mid.chain(this._midGain, this.output), this._multibandSplit.high.chain(this._highGain, this.output), qp(this, [
                        "low",
                        "mid",
                        "high",
                        "lowFrequency",
                        "highFrequency"
                    ]), this._internalChannels = [
                        this._multibandSplit
                    ];
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        high: 0,
                        highFrequency: 2500,
                        low: 0,
                        lowFrequency: 400,
                        mid: 0
                    });
                }
                dispose() {
                    return super.dispose(), Fp(this, [
                        "low",
                        "mid",
                        "high",
                        "lowFrequency",
                        "highFrequency"
                    ]), this._multibandSplit.dispose(), this.lowFrequency.dispose(), this.highFrequency.dispose(), this._lowGain.dispose(), this._midGain.dispose(), this._highGain.dispose(), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this.Q.dispose(), this;
                }
            }
            class um extends id {
                constructor(){
                    super(_p(um.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "Convolver", this._convolver = this.context.createConvolver();
                    const e1 = _p(um.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    this._buffer = new Vp(e1.url, (t1)=>{
                        this.buffer = t1, e1.onload();
                    }), this.input = new hd({
                        context: this.context
                    }), this.output = new hd({
                        context: this.context
                    }), this._buffer.loaded && (this.buffer = this._buffer), this.normalize = e1.normalize, this.input.chain(this._convolver, this.output);
                }
                static getDefaults() {
                    return Object.assign(id.getDefaults(), {
                        normalize: !0,
                        onload: Ip
                    });
                }
                load(t1) {
                    return ap(this, void 0, void 0, function*() {
                        this.buffer = yield this._buffer.load(t1);
                    });
                }
                get buffer() {
                    return this._buffer.length ? this._buffer : null;
                }
                set buffer(t1) {
                    t1 && this._buffer.set(t1), this._convolver.buffer && (this.input.disconnect(), this._convolver.disconnect(), this._convolver = this.context.createConvolver(), this.input.chain(this._convolver, this.output));
                    t1 = this._buffer.get();
                    this._convolver.buffer = t1 || null;
                }
                get normalize() {
                    return this._convolver.normalize;
                }
                set normalize(t1) {
                    this._convolver.normalize = t1;
                }
                dispose() {
                    return super.dispose(), this._buffer.dispose(), this._convolver.disconnect(), this;
                }
            }
            const pm = Lp().transport;
            const dm = Lp().destination, fm = Lp().destination;
            const _m = Lp().listener;
            const mm = Lp().draw;
            const gm = Lp();
            const vm = Vp, ym = vd, xm = Ed;
        })(), bm;
    })();
});

//# sourceMappingURL=index.d19c7c05.js.map
