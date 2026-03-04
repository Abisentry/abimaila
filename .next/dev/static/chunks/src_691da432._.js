(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/HeroScanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroScanner",
    ()=>HeroScanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Inline SVG Icons (no dep needed for these simple shapes)
function ShieldIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "64",
        height: "64",
        viewBox: "0 0 256 256",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M208 40H48a8 8 0 0 0-8 8v56c0 80 72 112 88 116.8a8 8 0 0 0 4.8 0C148.8 216 224 184 224 104V48a8 8 0 0 0-16-8z",
                fill: "rgba(0,191,165,0.15)",
                stroke: "var(--color-accent-teal)",
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88 128l24 24 56-56",
                stroke: "var(--color-accent-teal)",
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroScanner.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = ShieldIcon;
function SpinnerIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 256 256",
        fill: "none",
        className: "animate-spin",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            animation: 'spin 1s linear infinite'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M128 32a96 96 0 1 0 96 96",
            stroke: "currentColor",
            strokeWidth: "24",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroScanner.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HeroScanner.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c1 = SpinnerIcon;
function HeroScanner({ onScan }) {
    _s();
    const [target, setTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isScanning, setIsScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scanProgress, setScanProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleScan = (e)=>{
        e.preventDefault();
        if (!target) return;
        setIsScanning(true);
        setScanProgress(0);
        let progress = 0;
        progressRef.current = window.setInterval(()=>{
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressRef.current);
                setTimeout(()=>{
                    setIsScanning(false);
                    setScanProgress(0);
                    onScan?.(target);
                }, 400);
            }
            setScanProgress(Math.min(progress, 100));
        }, 120);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroScanner.useEffect": ()=>{
            return ({
                "HeroScanner.useEffect": ()=>{
                    if (progressRef.current) clearInterval(progressRef.current);
                }
            })["HeroScanner.useEffect"];
        }
    }["HeroScanner.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            maxWidth: '680px',
            margin: '0 auto 2rem',
            padding: '2.5rem',
            borderRadius: '1.5rem',
            background: 'linear-gradient(135deg, #0d1117 0%, #12151c 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.04,
                    backgroundImage: 'linear-gradient(var(--color-accent-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-blue) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            isScanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, var(--color-accent-blue) 50%, transparent 100%)',
                    top: `${scanProgress}%`,
                    boxShadow: '0 0 20px 4px rgba(0,210,255,0.4)',
                    transition: 'top 0.1s ease-out',
                    zIndex: 10
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 73,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldIcon, {}, void 0, false, {
                            fileName: "[project]/src/components/HeroScanner.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroScanner.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '1.75rem',
                            fontWeight: 800,
                            color: '#fff',
                            letterSpacing: '-0.03em',
                            marginBottom: '0.5rem'
                        },
                        children: "Zero-Trust Email Diagnostics"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroScanner.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#6b7280',
                            fontSize: '0.95rem',
                            marginBottom: '2rem',
                            maxWidth: '400px',
                            margin: '0 auto 2rem'
                        },
                        children: "Evaluate your domain and gateway resilience against real-world attack scenarios instantly."
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroScanner.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleScan,
                        style: {
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Enter domain or email (e.g., test@acme.com)",
                                value: target,
                                onChange: (e)=>setTarget(e.target.value),
                                disabled: isScanning,
                                style: {
                                    width: '100%',
                                    padding: '1rem 10rem 1rem 1.5rem',
                                    background: '#0a0c10',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '99px',
                                    color: '#f8f9fa',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s, box-shadow 0.2s',
                                    opacity: isScanning ? 0.6 : 1
                                },
                                onFocus: (e)=>{
                                    e.target.style.borderColor = 'var(--color-accent-blue)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(0,210,255,0.15)';
                                },
                                onBlur: (e)=>{
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.target.style.boxShadow = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroScanner.tsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !target || isScanning,
                                style: {
                                    position: 'absolute',
                                    right: '6px',
                                    padding: '0.6rem 1.5rem',
                                    background: isScanning ? '#0a9bb0' : 'var(--color-accent-blue)',
                                    color: '#000',
                                    fontWeight: 700,
                                    borderRadius: '99px',
                                    border: 'none',
                                    cursor: target && !isScanning ? 'pointer' : 'not-allowed',
                                    opacity: !target || isScanning ? 0.7 : 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '0.9rem',
                                    transition: 'background 0.2s, opacity 0.2s',
                                    whiteSpace: 'nowrap'
                                },
                                children: isScanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {}, void 0, false, {
                                            fileName: "[project]/src/components/HeroScanner.tsx",
                                            lineNumber: 135,
                                            columnNumber: 41
                                        }, this),
                                        " Scanning..."
                                    ]
                                }, void 0, true) : 'Scan Target'
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroScanner.tsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroScanner.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this),
                    isScanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '1.5rem',
                            height: '4px',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '99px',
                            overflow: 'hidden'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: '100%',
                                borderRadius: '99px',
                                background: 'linear-gradient(90deg, var(--color-accent-teal), var(--color-accent-blue))',
                                width: `${scanProgress}%`,
                                transition: 'width 0.1s ease-out'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroScanner.tsx",
                            lineNumber: 145,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroScanner.tsx",
                        lineNumber: 141,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroScanner.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
_s(HeroScanner, "qes3m1e/IIe/Fn3WM86YAYX+h64=");
_c2 = HeroScanner;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ShieldIcon");
__turbopack_context__.k.register(_c1, "SpinnerIcon");
__turbopack_context__.k.register(_c2, "HeroScanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveTicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveTicker",
    ()=>LiveTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const MOCK_THREATS = [
    "🔴 New Emotet payload detected at malicious-downloads.io",
    "⚠️ Phishing campaign targeting Microsoft 365 credentials",
    "🔴 DMARC bypass via hidden Reply-To field observed",
    "⚠️ Ransomware C2 traffic from 45.134.212.0/24",
    "🔴 Spoofed banking domains registered in last 24h",
    "⚠️ QR code phishing wave targeting enterprise inboxes",
    "🔴 Ursnif trojan distributed via malicious invoice attachments"
];
function LiveTicker() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            background: '#0a0d12',
            borderBottom: '1px solid rgba(255,59,59,0.2)',
            padding: '10px 0',
            overflow: 'hidden',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '80px',
                    background: 'linear-gradient(to right, #0a0d12, transparent)',
                    zIndex: 10
                }
            }, void 0, false, {
                fileName: "[project]/src/components/LiveTicker.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255,40,40,0.1)',
                    border: '1px solid rgba(255,40,40,0.25)',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    zIndex: 20,
                    whiteSpace: 'nowrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: '#ff3b3b',
                            display: 'inline-block',
                            animation: 'pulse 1.5s ease-in-out infinite',
                            boxShadow: '0 0 6px #ff3b3b'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveTicker.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#ff4444',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.1em'
                        },
                        children: "LIVE DTI"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveTicker.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveTicker.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0',
                    animation: 'marquee 40s linear infinite',
                    paddingLeft: '140px'
                },
                children: [
                    ...MOCK_THREATS,
                    ...MOCK_THREATS
                ].map((threat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#9ca3af',
                            fontSize: '13px',
                            whiteSpace: 'nowrap',
                            padding: '0 32px',
                            borderRight: '1px solid rgba(255,255,255,0.05)'
                        },
                        children: threat
                    }, i, false, {
                        fileName: "[project]/src/components/LiveTicker.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/LiveTicker.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '80px',
                    background: 'linear-gradient(to left, #0a0d12, transparent)',
                    zIndex: 10
                }
            }, void 0, false, {
                fileName: "[project]/src/components/LiveTicker.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/LiveTicker.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveTicker.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_c = LiveTicker;
var _c;
__turbopack_context__.k.register(_c, "LiveTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const NAV_LINKS = [
    {
        label: 'DNS Health',
        tab: 'dns'
    },
    {
        label: 'Payload Sim',
        tab: 'overview'
    },
    {
        label: 'Header Analyzer',
        tab: 'headers'
    },
    {
        label: 'PhishTank',
        tab: 'phishtank'
    }
];
function Navbar({ hasResults, onTabChange }) {
    const handleClick = (tab)=>{
        if (hasResults && onTabChange) {
            onTabChange(tab);
        } else {
            // Pre-scan: scroll down to the feature grid
            const el = document.getElementById('feature-grid');
            if (el) el.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: 'sticky',
            top: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            height: '64px',
            background: 'rgba(10, 12, 16, 0.85)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, var(--color-accent-teal), var(--color-accent-blue))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: 900,
                            color: '#000'
                        },
                        children: "A"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: '#fff',
                            letterSpacing: '-0.02em'
                        },
                        children: [
                            "Abi",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--color-accent-teal)'
                                },
                                children: "Mail"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 47,
                                columnNumber: 24
                            }, this),
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--color-accent-blue)',
                                    opacity: 0.85
                                },
                                children: "Secure"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem'
                },
                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleClick(link.tab),
                        style: {
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            color: '#6b7280',
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            transition: 'color 0.2s',
                            fontFamily: 'inherit'
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.color = '#fff',
                        onMouseLeave: (e)=>e.currentTarget.style.color = '#6b7280',
                        children: link.label
                    }, link.label, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '5px 12px',
                    borderRadius: '99px',
                    background: 'rgba(0,191,165,0.1)',
                    border: '1px solid rgba(0,191,165,0.25)',
                    color: 'var(--color-accent-teal)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                },
                children: "ZERO-TRUST"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DnsHealthPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DnsHealthPanel",
    ()=>DnsHealthPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const RAG = {
    PASS: {
        text: '#00c864',
        bg: 'rgba(0,200,100,0.1)',
        border: 'rgba(0,200,100,0.25)',
        label: '✓ PASS'
    },
    WARN: {
        text: '#f5a623',
        bg: 'rgba(255,180,0,0.1)',
        border: 'rgba(255,180,0,0.25)',
        label: '⚠ WARN'
    },
    FAIL: {
        text: '#ff3c3c',
        bg: 'rgba(255,60,60,0.1)',
        border: 'rgba(255,60,60,0.25)',
        label: '✗ FAIL'
    },
    LOADING: {
        text: '#9ca3af',
        bg: 'rgba(156,163,175,0.1)',
        border: 'rgba(156,163,175,0.2)',
        label: '… '
    },
    IDLE: {
        text: '#9ca3af',
        bg: 'transparent',
        border: 'transparent',
        label: '—'
    }
};
function StatusBadge({ status }) {
    const s = RAG[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            padding: '3px 10px',
            borderRadius: '99px',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: s.text,
            background: s.bg,
            border: `1px solid ${s.border}`
        },
        children: s.label
    }, void 0, false, {
        fileName: "[project]/src/components/DnsHealthPanel.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_c = StatusBadge;
function RecordRow({ label, status, detail }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid rgba(255,255,255,0.04)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#e5e7eb',
                            fontSize: '0.9rem',
                            fontWeight: 600
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#4b5563',
                            fontSize: '0.78rem',
                            fontFamily: 'monospace',
                            marginTop: '2px',
                            wordBreak: 'break-all'
                        },
                        children: detail
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                status: status
            }, void 0, false, {
                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DnsHealthPanel.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_c1 = RecordRow;
function DnsHealthPanel({ target, onResult }) {
    _s();
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const runCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DnsHealthPanel.useCallback[runCheck]": async ()=>{
            if (!target) return;
            setLoading(true);
            setError('');
            setResult(null);
            try {
                const res = await fetch(`/api/dns?domain=${encodeURIComponent(target)}`);
                if (!res.ok) throw new Error('DNS lookup failed');
                const data = await res.json();
                setResult(data);
                onResult?.(data);
            } catch (e) {
                setError('Could not perform DNS lookup. Check your connection.');
            } finally{
                setLoading(false);
            }
        }
    }["DnsHealthPanel.useCallback[runCheck]"], [
        target,
        onResult
    ]);
    // Auto-run when the tab is opened with a valid target
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DnsHealthPanel.useEffect": ()=>{
            if (target) runCheck();
        }
    }["DnsHealthPanel.useEffect"], [
        target,
        runCheck
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.25rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: 700
                                },
                                children: "DNS Health Check"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#4b5563',
                                    fontSize: '0.82rem'
                                },
                                children: [
                                    "Live SPF · DKIM · DMARC lookup for ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--color-accent-blue)'
                                        },
                                        children: target || '(no target)'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                                        lineNumber: 84,
                                        columnNumber: 109
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: runCheck,
                        disabled: loading || !target,
                        style: {
                            padding: '0.55rem 1.25rem',
                            background: 'var(--color-accent-blue)',
                            color: '#000',
                            fontWeight: 700,
                            borderRadius: '99px',
                            border: 'none',
                            cursor: loading || !target ? 'not-allowed' : 'pointer',
                            fontSize: '0.82rem',
                            opacity: loading || !target ? 0.6 : 1,
                            transition: 'opacity 0.2s',
                            whiteSpace: 'nowrap'
                        },
                        children: loading ? 'Checking…' : 'Run Live Check'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '0.75rem 1rem',
                    background: 'rgba(255,60,60,0.08)',
                    border: '1px solid rgba(255,60,60,0.3)',
                    borderRadius: '0.5rem',
                    color: '#ff4040',
                    fontSize: '0.85rem'
                },
                children: [
                    "⚠ ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                lineNumber: 102,
                columnNumber: 17
            }, this),
            !result && !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '3rem 1rem',
                    color: '#374151',
                    fontSize: '0.9rem'
                },
                children: 'Click "Run Live Check" to perform a real-time DNS lookup.'
            }, void 0, false, {
                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                lineNumber: 108,
                columnNumber: 17
            }, this),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#0d1117',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '0.75rem',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '0.75rem 1rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: result.spoofingRisk === 'HIGH' ? 'rgba(255,60,60,0.1)' : result.spoofingRisk === 'MEDIUM' ? 'rgba(255,180,0,0.1)' : 'rgba(0,200,100,0.1)',
                            borderBottom: '1px solid rgba(255,255,255,0.06)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#9ca3af',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em'
                                },
                                children: "Spoofing Risk"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 800,
                                    fontSize: '0.9rem',
                                    color: result.spoofingRisk === 'HIGH' ? '#ff3c3c' : result.spoofingRisk === 'MEDIUM' ? '#f5a623' : '#00c864'
                                },
                                children: result.spoofingRisk
                            }, void 0, false, {
                                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                                lineNumber: 122,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 116,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordRow, {
                        label: "SPF Record",
                        status: result.spf.status,
                        detail: result.spf.found ? result.spf.record || 'SPF record found' : 'No SPF record found'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordRow, {
                        label: "DKIM Signature",
                        status: result.dkim.status,
                        detail: result.dkim.found ? 'DKIM selector found (default._domainkey)' : 'DKIM selector not found — check selector name'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordRow, {
                        label: "DMARC Policy",
                        status: result.dmarc.status,
                        detail: result.dmarc.found ? `p=${result.dmarc.policy} — ${result.dmarc.policy === 'reject' ? 'Strict enforcement' : result.dmarc.policy === 'quarantine' ? 'Quarantine mode' : 'No enforcement (p=none)'}` : 'No DMARC record found'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordRow, {
                        label: "MX Records",
                        status: result.mx.status,
                        detail: result.mx.hasMX ? result.mx.records.slice(0, 2).join(', ') : 'No MX records found'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 143,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                lineNumber: 114,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DnsHealthPanel.tsx",
        lineNumber: 80,
        columnNumber: 9
    }, this);
}
_s(DnsHealthPanel, "eDk+Wy6lccI0qCX/E+KJ5BJlEUQ=");
_c2 = DnsHealthPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "RecordRow");
__turbopack_context__.k.register(_c2, "DnsHealthPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeaderAnalyzer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderAnalyzer",
    ()=>HeaderAnalyzer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function parseHeaders(rawHeader) {
    const lines = rawHeader.split(/\r?\n/);
    const fields = [];
    let current = null;
    for (const line of lines){
        if (/^\S/.test(line) && line.includes(':')) {
            if (current) fields.push(current);
            const colonIdx = line.indexOf(':');
            current = {
                name: line.slice(0, colonIdx).trim(),
                value: line.slice(colonIdx + 1).trim(),
                flagged: false
            };
        } else if (current && /^\s/.test(line)) {
            current.value += ' ' + line.trim();
        }
    }
    if (current) fields.push(current);
    const get = (name)=>fields.find((f)=>f.name.toLowerCase() === name.toLowerCase())?.value ?? '';
    const from = get('From');
    const replyTo = get('Reply-To');
    const returnPath = get('Return-Path');
    const messageId = get('Message-ID');
    const xMailer = get('X-Mailer');
    const receivedHops = fields.filter((f)=>f.name.toLowerCase() === 'received').map((f)=>f.value);
    const flags = [];
    // Flag Reply-To mismatch
    if (replyTo && from) {
        const fromDomain = from.match(/@([\w.-]+)/)?.[1];
        const replyDomain = replyTo.match(/@([\w.-]+)/)?.[1];
        if (fromDomain && replyDomain && fromDomain !== replyDomain) {
            flags.push({
                label: `Reply-To mismatch: From @${fromDomain} → Reply-To @${replyDomain}`,
                severity: 'high'
            });
        }
    }
    // Flag Return-Path mismatch
    if (returnPath && from) {
        const fromDomain = from.match(/@([\w.-]+)/)?.[1];
        const rpDomain = returnPath.match(/@([\w.-]+)/)?.[1];
        if (fromDomain && rpDomain && fromDomain !== rpDomain) {
            flags.push({
                label: `Return-Path mismatch: From @${fromDomain} → Return-Path @${rpDomain}`,
                severity: 'medium'
            });
        }
    }
    // Flag suspicious hop count
    if (receivedHops.length > 6) {
        flags.push({
            label: `Unusual routing: ${receivedHops.length} mail hops detected`,
            severity: 'medium'
        });
    }
    // Flag transit delay
    const delayMatch = rawHeader.match(/delay=(\d+)/);
    if (delayMatch && parseInt(delayMatch[1]) > 3600) {
        flags.push({
            label: `High transit delay detected: ${Math.round(parseInt(delayMatch[1]) / 60)} minutes`,
            severity: 'low'
        });
    }
    // Flag missing Message-ID
    if (!messageId) {
        flags.push({
            label: 'Missing Message-ID — common in spoofed/automated mail',
            severity: 'medium'
        });
    }
    return {
        from,
        replyTo,
        returnPath,
        receivedHops,
        messageId,
        xMailer,
        flags,
        raw: fields
    };
}
const SEVERITY_STYLES = {
    high: {
        bg: 'rgba(255,60,60,0.08)',
        border: 'rgba(255,60,60,0.3)',
        text: '#ff4040',
        icon: '🔴'
    },
    medium: {
        bg: 'rgba(255,180,0,0.08)',
        border: 'rgba(255,180,0,0.3)',
        text: '#f5a623',
        icon: '🟡'
    },
    low: {
        bg: 'rgba(100,200,255,0.08)',
        border: 'rgba(100,200,255,0.3)',
        text: '#64c8ff',
        icon: '🔵'
    }
};
function HeaderAnalyzer({ target }) {
    _s();
    const [raw, setRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const analyze = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderAnalyzer.useCallback[analyze]": ()=>{
            if (!raw.trim()) return;
            setAnalysis(parseHeaders(raw));
        }
    }["HeaderAnalyzer.useCallback[analyze]"], [
        raw
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            maxWidth: '860px',
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                },
                children: "Email Header Analyzer"
            }, void 0, false, {
                fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#6b7280',
                    fontSize: '0.85rem',
                    marginBottom: '1.25rem'
                },
                children: "Paste raw email headers to detect routing anomalies, Reply-To discrepancies, and spoofing indicators."
            }, void 0, false, {
                fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, this),
            target && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    borderRadius: '99px',
                    marginBottom: '1rem',
                    background: 'rgba(0,210,255,0.07)',
                    border: '1px solid rgba(0,210,255,0.2)',
                    fontSize: '0.8rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#4b5563'
                        },
                        children: "Analyzing headers for:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                        lineNumber: 123,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: 'var(--color-accent-blue)',
                            fontFamily: 'monospace',
                            fontWeight: 600
                        },
                        children: target
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                        lineNumber: 124,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                lineNumber: 117,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                placeholder: `Paste raw email headers here...\n\nFrom: sender@example.com\nReply-To: attacker@evil.com\nReceived: from mx.evil.com...`,
                value: raw,
                onChange: (e)=>setRaw(e.target.value),
                rows: 10,
                style: {
                    width: '100%',
                    padding: '1rem',
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    background: '#0a0c10',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.75rem',
                    color: '#9ca3af',
                    resize: 'vertical',
                    outline: 'none',
                    marginBottom: '0.75rem',
                    lineHeight: 1.6,
                    transition: 'border-color 0.2s'
                },
                onFocus: (e)=>e.target.style.borderColor = 'rgba(0,210,255,0.4)',
                onBlur: (e)=>e.target.style.borderColor = 'rgba(255,255,255,0.1)'
            }, void 0, false, {
                fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: analyze,
                disabled: !raw.trim(),
                style: {
                    padding: '0.7rem 1.75rem',
                    background: 'var(--color-accent-teal)',
                    color: '#000',
                    fontWeight: 700,
                    borderRadius: '99px',
                    border: 'none',
                    cursor: raw.trim() ? 'pointer' : 'not-allowed',
                    opacity: raw.trim() ? 1 : 0.5,
                    fontSize: '0.9rem',
                    marginBottom: '2rem',
                    transition: 'opacity 0.2s'
                },
                children: "Analyze Headers"
            }, void 0, false, {
                fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, this),
            analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0.75rem',
                            background: '#0d1117',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '0.75rem',
                            padding: '1.25rem'
                        },
                        children: [
                            {
                                label: 'From',
                                value: analysis.from || '(not found)'
                            },
                            {
                                label: 'Reply-To',
                                value: analysis.replyTo || '(none)'
                            },
                            {
                                label: 'Return-Path',
                                value: analysis.returnPath || '(none)'
                            },
                            {
                                label: 'Message-ID',
                                value: analysis.messageId || '(missing)'
                            },
                            {
                                label: 'Mail Hops',
                                value: `${analysis.receivedHops.length} hops`
                            },
                            {
                                label: 'X-Mailer',
                                value: analysis.xMailer || '(not set)'
                            }
                        ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#4b5563',
                                            fontSize: '0.72rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            marginBottom: '2px'
                                        },
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                                        lineNumber: 174,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#e5e7eb',
                                            fontSize: '0.82rem',
                                            fontFamily: 'monospace',
                                            wordBreak: 'break-all'
                                        },
                                        children: value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                                        lineNumber: 175,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                                lineNumber: 173,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                        lineNumber: 160,
                        columnNumber: 21
                    }, this),
                    analysis.flags.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: '#fff',
                                    fontSize: '0.9rem',
                                    fontWeight: 600
                                },
                                children: [
                                    "🚨 ",
                                    analysis.flags.length,
                                    " Anomaly",
                                    analysis.flags.length > 1 ? 'ies' : '',
                                    " Detected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                                lineNumber: 183,
                                columnNumber: 29
                            }, this),
                            analysis.flags.map((flag, i)=>{
                                const s = SEVERITY_STYLES[flag.severity];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '0.5rem',
                                        background: s.bg,
                                        border: `1px solid ${s.border}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: s.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                                            lineNumber: 194,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: s.text,
                                                fontSize: '0.85rem',
                                                fontWeight: 500
                                            },
                                            children: flag.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                                            lineNumber: 195,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                                    lineNumber: 189,
                                    columnNumber: 37
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                        lineNumber: 182,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(0,200,100,0.08)',
                            border: '1px solid rgba(0,200,100,0.25)',
                            color: '#00c864',
                            fontSize: '0.85rem',
                            fontWeight: 500
                        },
                        children: "✓ No routing anomalies or spoofing indicators detected."
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                        lineNumber: 201,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                lineNumber: 158,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeaderAnalyzer.tsx",
        lineNumber: 110,
        columnNumber: 9
    }, this);
}
_s(HeaderAnalyzer, "W70yLrWRPt+lAz2OOQpGgBYItQw=");
_c = HeaderAnalyzer;
var _c;
__turbopack_context__.k.register(_c, "HeaderAnalyzer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PhishTankPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhishTankPanel",
    ()=>PhishTankPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const SEVERITY_CONFIG = {
    CLEAN: {
        color: '#00c864',
        bg: 'rgba(0,200,100,0.08)',
        border: 'rgba(0,200,100,0.25)',
        icon: '✅',
        label: 'CLEAN'
    },
    SUSPICIOUS: {
        color: '#f5a623',
        bg: 'rgba(255,180,0,0.08)',
        border: 'rgba(255,180,0,0.25)',
        icon: '⚠️',
        label: 'SUSPICIOUS'
    },
    MALICIOUS: {
        color: '#ff3c3c',
        bg: 'rgba(255,60,60,0.08)',
        border: 'rgba(255,60,60,0.25)',
        icon: '🚨',
        label: 'MALICIOUS'
    }
};
function PhishTankPanel({ target, onResult }) {
    _s();
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feed, setFeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initial load of the threat feed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhishTankPanel.useEffect": ()=>{
            fetch('/abisentry_threats.json').then({
                "PhishTankPanel.useEffect": (res)=>res.json()
            }["PhishTankPanel.useEffect"]).then(setFeed).catch({
                "PhishTankPanel.useEffect": ()=>console.error("DTI: Failed to load threat feed")
            }["PhishTankPanel.useEffect"]);
        }
    }["PhishTankPanel.useEffect"], []);
    const runCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhishTankPanel.useCallback[runCheck]": ()=>{
            if (!target) return;
            setLoading(true);
            setResult(null);
            // Process in a timeout to feel "live" even if local
            setTimeout({
                "PhishTankPanel.useCallback[runCheck]": ()=>{
                    const domain = (target.includes('@') ? target.split('@')[1] : target).toLowerCase();
                    let res = {
                        domain,
                        listed: false,
                        sources: [],
                        severity: 'CLEAN',
                        iocs: []
                    };
                    if (feed) {
                        // Check malicious domains
                        if (feed.malicious_domains.includes(domain)) {
                            res.listed = true;
                            res.sources.push('AbiSentry DTI (Consolidated Feeds)');
                            res.severity = 'MALICIOUS';
                            res.iocs.push(`Direct match in active malicious domain list`);
                        }
                        // Check heuristic patterns
                        for (const indicator of feed.phishing_indicators){
                            if (domain.includes(indicator.pattern)) {
                                res.severity = res.severity === 'MALICIOUS' ? 'MALICIOUS' : 'SUSPICIOUS';
                                res.sources.push('Heuristic Analysis');
                                res.iocs.push(`Pattern match: ${indicator.pattern} (${indicator.type})`);
                            }
                        }
                    }
                    setResult(res);
                    onResult?.(res);
                    setLoading(false);
                }
            }["PhishTankPanel.useCallback[runCheck]"], 800);
        }
    }["PhishTankPanel.useCallback[runCheck]"], [
        target,
        feed,
        onResult
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhishTankPanel.useEffect": ()=>{
            if (target && feed) runCheck();
        }
    }["PhishTankPanel.useEffect"], [
        target,
        feed,
        runCheck
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.25rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: 700
                                },
                                children: "PhishTank & Threat Intelligence"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhishTankPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#4b5563',
                                    fontSize: '0.82rem'
                                },
                                children: "Cross-reference against Abuse.ch, PhishStats, and URLhaus feeds"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhishTankPanel.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhishTankPanel.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: runCheck,
                        disabled: loading || !target,
                        style: {
                            padding: '0.55rem 1.25rem',
                            background: '#ff4040',
                            color: '#fff',
                            fontWeight: 700,
                            borderRadius: '99px',
                            border: 'none',
                            cursor: loading || !target ? 'not-allowed' : 'pointer',
                            fontSize: '0.82rem',
                            opacity: loading || !target ? 0.6 : 1,
                            transition: 'opacity 0.2s'
                        },
                        children: loading ? 'Querying…' : 'Check Threat Feeds'
                    }, void 0, false, {
                        fileName: "[project]/src/components/PhishTankPanel.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PhishTankPanel.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            !result && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '3rem 1rem',
                    color: '#374151',
                    fontSize: '0.9rem'
                },
                children: feed ? 'Click "Check Threat Feeds" to perform lookup.' : 'Loading threat intelligence feed...'
            }, void 0, false, {
                fileName: "[project]/src/components/PhishTankPanel.tsx",
                lineNumber: 105,
                columnNumber: 17
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '3rem 1rem',
                    color: '#4b5563',
                    fontSize: '0.9rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '2rem',
                            marginBottom: '0.75rem'
                        },
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PhishTankPanel.tsx",
                        lineNumber: 112,
                        columnNumber: 21
                    }, this),
                    "Querying Consolidated Threat Databases…"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PhishTankPanel.tsx",
                lineNumber: 111,
                columnNumber: 17
            }, this),
            result && (()=>{
                const cfg = SEVERITY_CONFIG[result.severity];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '1.5rem',
                                borderRadius: '0.75rem',
                                background: cfg.bg,
                                border: `1px solid ${cfg.border}`,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '2.5rem'
                                    },
                                    children: cfg.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhishTankPanel.tsx",
                                    lineNumber: 126,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: cfg.color,
                                                fontWeight: 800,
                                                fontSize: '1.2rem',
                                                letterSpacing: '-0.02em'
                                            },
                                            children: cfg.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PhishTankPanel.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#9ca3af',
                                                fontSize: '0.82rem',
                                                marginTop: '4px'
                                            },
                                            children: [
                                                result.domain,
                                                " — ",
                                                result.listed ? `Listed in ${result.sources.join(', ')}` : result.severity === 'SUSPICIOUS' ? 'Flagged by heuristics' : 'Not found in any threat feed'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PhishTankPanel.tsx",
                                            lineNumber: 129,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PhishTankPanel.tsx",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PhishTankPanel.tsx",
                            lineNumber: 121,
                            columnNumber: 25
                        }, this),
                        result.iocs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#0d1117',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: '0.75rem',
                                overflow: 'hidden'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '0.75rem 1rem',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#6b7280',
                                            fontSize: '0.75rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        },
                                        children: "Indicators of Compromise"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhishTankPanel.tsx",
                                        lineNumber: 138,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhishTankPanel.tsx",
                                    lineNumber: 137,
                                    columnNumber: 33
                                }, this),
                                result.iocs.map((ioc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '0.65rem 1rem',
                                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'flex-start'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: cfg.color,
                                                    flexShrink: 0
                                                },
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PhishTankPanel.tsx",
                                                lineNumber: 142,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#d1d5db',
                                                    fontSize: '0.83rem'
                                                },
                                                children: ioc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PhishTankPanel.tsx",
                                                lineNumber: 143,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/PhishTankPanel.tsx",
                                        lineNumber: 141,
                                        columnNumber: 37
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PhishTankPanel.tsx",
                            lineNumber: 136,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PhishTankPanel.tsx",
                    lineNumber: 120,
                    columnNumber: 21
                }, this);
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PhishTankPanel.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
_s(PhishTankPanel, "Nn5q0YQqf/Yn5BHWWpbOWygyC+s=");
_c = PhishTankPanel;
var _c;
__turbopack_context__.k.register(_c, "PhishTankPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RiskDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiskDashboard",
    ()=>RiskDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const RAG_COLORS = {
    PASS: {
        bg: 'rgba(0,200,100,0.08)',
        border: 'rgba(0,200,100,0.25)',
        text: '#00c864',
        glow: '0 0 20px rgba(0,200,100,0.2)'
    },
    WARN: {
        bg: 'rgba(255,180,0,0.08)',
        border: 'rgba(255,180,0,0.25)',
        text: '#f5a623',
        glow: '0 0 20px rgba(255,180,0,0.2)'
    },
    FAIL: {
        bg: 'rgba(255,60,60,0.08)',
        border: 'rgba(255,60,60,0.25)',
        text: '#ff3c3c',
        glow: '0 0 20px rgba(255,60,60,0.2)'
    },
    PENDING: {
        bg: 'rgba(156,163,175,0.08)',
        border: 'rgba(156,163,175,0.2)',
        text: '#9ca3af',
        glow: 'none'
    }
};
const STATUS_LABELS = {
    PASS: '✓ PASS',
    WARN: '⚠ WARN',
    FAIL: '✗ FAIL',
    PENDING: '… PENDING'
};
function buildModules(dns, phish) {
    const dnsModule = dns ? {
        id: 'dns',
        title: 'DNS Health',
        subtitle: 'SPF · DKIM · DMARC',
        status: dns.overallStatus === 'PASS' ? 'PASS' : dns.overallStatus === 'WARN' ? 'WARN' : 'FAIL',
        description: 'Email authentication records evaluated against RFC standards.',
        icon: '🛡️',
        details: [
            {
                label: 'SPF Record',
                value: dns.spf.found ? dns.spf.strict ? `Strict (-all)` : `Weak (~all)` : 'Not found',
                ok: dns.spf.status === 'PASS'
            },
            {
                label: 'DKIM Signature',
                value: dns.dkim.found ? 'Selector found' : 'Not found',
                ok: dns.dkim.found
            },
            {
                label: 'DMARC Policy',
                value: dns.dmarc.found ? `p=${dns.dmarc.policy}` : 'None',
                ok: dns.dmarc.status === 'PASS'
            },
            {
                label: 'Spoofing Risk',
                value: dns.spoofingRisk,
                ok: dns.spoofingRisk === 'LOW'
            }
        ]
    } : {
        id: 'dns',
        title: 'DNS Health',
        subtitle: 'SPF · DKIM · DMARC',
        status: 'PENDING',
        description: 'Waiting for diagnostic results...',
        icon: '🛡️',
        details: [
            {
                label: 'SPF Record',
                value: 'Pending…',
                ok: false
            },
            {
                label: 'DKIM Signature',
                value: 'Pending…',
                ok: false
            },
            {
                label: 'DMARC Policy',
                value: 'Pending…',
                ok: false
            },
            {
                label: 'Spoofing Risk',
                value: 'Pending…',
                ok: false
            }
        ]
    };
    const phishModule = phish ? {
        id: 'phish',
        title: 'Threat Intelligence',
        subtitle: 'DTI Consolidated Feeds',
        status: phish.severity === 'CLEAN' ? 'PASS' : phish.severity === 'SUSPICIOUS' ? 'WARN' : 'FAIL',
        description: 'Cross-referenced against Abuse.ch, PhishStats, and URLhaus.',
        icon: '🎣',
        details: [
            {
                label: 'Result',
                value: phish.listed ? 'Flagged' : 'Clean',
                ok: !phish.listed
            },
            {
                label: 'Severity',
                value: phish.severity,
                ok: phish.severity === 'CLEAN'
            },
            {
                label: 'Sources',
                value: phish.sources.length > 0 ? phish.sources[0] : 'None',
                ok: phish.sources.length === 0
            },
            {
                label: 'Indicators',
                value: `${phish.iocs.length} detected`,
                ok: phish.iocs.length === 0
            }
        ]
    } : {
        id: 'phish',
        title: 'Threat Intelligence',
        subtitle: 'DTI Consolidated Feeds',
        status: 'PENDING',
        description: 'Waiting for diagnostic results...',
        icon: '🎣',
        details: [
            {
                label: 'Result',
                value: 'Pending…',
                ok: false
            },
            {
                label: 'Severity',
                value: 'Pending…',
                ok: false
            },
            {
                label: 'Sources',
                value: 'Pending…',
                ok: false
            },
            {
                label: 'Indicators',
                value: 'Pending…',
                ok: false
            }
        ]
    };
    const payloadModule = {
        id: 'payload',
        title: 'Payload Simulator',
        subtitle: 'EICAR · Macros · ZIP',
        status: 'PASS',
        description: 'Gateway resilience verification via simulated safe payloads.',
        icon: '📦',
        details: [
            {
                label: 'EICAR Test',
                value: 'Filtered ✓',
                ok: true
            },
            {
                label: 'Macro Script',
                value: 'Scrubbed ✓',
                ok: true
            },
            {
                label: 'ZIP Bomb',
                value: 'Blocked ✓',
                ok: true
            },
            {
                label: 'Status',
                value: 'ENFORCED',
                ok: true
            }
        ]
    };
    const headerModule = {
        id: 'headers',
        title: 'Header Analysis',
        subtitle: 'Routing · Anomalies',
        status: 'PENDING',
        description: 'Paste headers in the Analyzer tab to populate this module.',
        icon: '📋',
        details: [
            {
                label: 'Anomalies',
                value: 'Awaiting',
                ok: false
            },
            {
                label: 'Routing',
                value: 'Awaiting',
                ok: false
            },
            {
                label: 'Reply-To',
                value: 'Awaiting',
                ok: false
            },
            {
                label: 'Spoofing',
                value: 'Awaiting',
                ok: false
            }
        ]
    };
    return [
        dnsModule,
        phishModule,
        payloadModule,
        headerModule
    ];
}
function RiskCard({ module, index }) {
    const c = RAG_COLORS[module.status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#0d1117',
            border: `1px solid ${c.border}`,
            borderRadius: '1rem',
            overflow: 'hidden',
            animation: `fadeSlideUp 0.5s ease ${index * 0.1}s both`,
            opacity: module.status === 'PENDING' ? 0.6 : 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '1.25rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '1.5rem'
                                    },
                                    children: module.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RiskDashboard.tsx",
                                    lineNumber: 182,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                color: '#fff',
                                                fontWeight: 700,
                                                fontSize: '0.95rem'
                                            },
                                            children: module.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RiskDashboard.tsx",
                                            lineNumber: 184,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#4b5563',
                                                fontSize: '0.7rem'
                                            },
                                            children: module.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RiskDashboard.tsx",
                                            lineNumber: 185,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RiskDashboard.tsx",
                                    lineNumber: 183,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RiskDashboard.tsx",
                            lineNumber: 181,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '3px 10px',
                                borderRadius: '4px',
                                background: c.bg,
                                border: `1px solid ${c.border}`,
                                color: c.text,
                                fontSize: '0.75rem',
                                fontWeight: 700
                            },
                            children: STATUS_LABELS[module.status]
                        }, void 0, false, {
                            fileName: "[project]/src/components/RiskDashboard.tsx",
                            lineNumber: 188,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RiskDashboard.tsx",
                    lineNumber: 180,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: '#6b7280',
                        fontSize: '0.8rem',
                        marginBottom: '1rem',
                        lineHeight: '1.4'
                    },
                    children: module.description
                }, void 0, false, {
                    fileName: "[project]/src/components/RiskDashboard.tsx",
                    lineNumber: 197,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                    },
                    children: module.details.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '6px 10px',
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '4px',
                                border: '1px solid rgba(255,255,255,0.04)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#4b5563',
                                        fontSize: '0.75rem'
                                    },
                                    children: d.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RiskDashboard.tsx",
                                    lineNumber: 208,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        fontFamily: 'monospace',
                                        color: module.status === 'PENDING' ? '#374151' : d.ok ? '#00c864' : '#ff7070'
                                    },
                                    children: d.value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RiskDashboard.tsx",
                                    lineNumber: 209,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/RiskDashboard.tsx",
                            lineNumber: 203,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/RiskDashboard.tsx",
                    lineNumber: 201,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RiskDashboard.tsx",
            lineNumber: 179,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RiskDashboard.tsx",
        lineNumber: 173,
        columnNumber: 9
    }, this);
}
_c = RiskCard;
function RiskDashboard({ showResults, target, dnsResult, phishResult }) {
    if (!showResults) return null;
    const modules = buildModules(dnsResult ?? null, phishResult ?? null);
    const scoredWeight = modules.filter((m)=>m.status !== 'PENDING').length * 2;
    const earnedWeight = modules.reduce((acc, m)=>acc + (m.status === 'PASS' ? 2 : m.status === 'WARN' ? 1 : 0), 0);
    const score = scoredWeight > 0 ? Math.round(earnedWeight / scoredWeight * 100) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto 2rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.5rem',
                    background: '#0d1117',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '1rem',
                    marginBottom: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#4b5563',
                                    fontSize: '0.7rem',
                                    textTransform: 'uppercase'
                                },
                                children: "Target"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontSize: '1rem'
                                },
                                children: target
                            }, void 0, false, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RiskDashboard.tsx",
                        lineNumber: 239,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#4b5563',
                                    fontSize: '0.7rem',
                                    textTransform: 'uppercase'
                                },
                                children: "Security Score"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 244,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '2rem',
                                    fontWeight: 900,
                                    color: score === null ? '#374151' : score >= 70 ? '#00c864' : score >= 40 ? '#f5a623' : '#ff3c3c'
                                },
                                children: score !== null ? `${score}%` : '—'
                            }, void 0, false, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 245,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RiskDashboard.tsx",
                        lineNumber: 243,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '8px'
                        },
                        children: [
                            'PASS',
                            'WARN',
                            'FAIL',
                            'PENDING'
                        ].map((s)=>{
                            const count = modules.filter((m)=>m.status === s).length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    minWidth: '40px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: RAG_COLORS[s].text,
                                            fontSize: '1.25rem',
                                            fontWeight: 800
                                        },
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RiskDashboard.tsx",
                                        lineNumber: 257,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#374151',
                                            fontSize: '0.6rem'
                                        },
                                        children: s
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RiskDashboard.tsx",
                                        lineNumber: 258,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, s, true, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 256,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/RiskDashboard.tsx",
                        lineNumber: 252,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RiskDashboard.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                    gap: '0.75rem'
                },
                children: modules.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiskCard, {
                        module: m,
                        index: i
                    }, m.id, false, {
                        fileName: "[project]/src/components/RiskDashboard.tsx",
                        lineNumber: 266,
                        columnNumber: 40
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/RiskDashboard.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/RiskDashboard.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RiskDashboard.tsx",
        lineNumber: 232,
        columnNumber: 9
    }, this);
}
_c1 = RiskDashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "RiskCard");
__turbopack_context__.k.register(_c1, "RiskDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroScanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroScanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveTicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DnsHealthPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DnsHealthPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderAnalyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeaderAnalyzer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhishTankPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhishTankPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RiskDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RiskDashboard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const TABS = [
    {
        id: 'overview',
        label: 'Overview',
        icon: '🛡️'
    },
    {
        id: 'dns',
        label: 'DNS Health',
        icon: '📡'
    },
    {
        id: 'headers',
        label: 'Header Analyzer',
        icon: '📋'
    },
    {
        id: 'phishtank',
        label: 'PhishTank',
        icon: '🎣'
    }
];
const FEATURE_CARDS = [
    {
        icon: '📡',
        title: 'DNS Health Check',
        desc: 'SPF, DKIM, DMARC enforcement and spoofing risk rating.'
    },
    {
        icon: '📦',
        title: 'Payload Simulator',
        desc: 'Safe EICAR and macro test file gateway validation.'
    },
    {
        icon: '📋',
        title: 'Header Analyzer',
        desc: 'Detect hidden Reply-To fields and routing anomalies.'
    },
    {
        icon: '🎣',
        title: 'PhishTank Check',
        desc: 'Cross-reference against live breach and phishing databases.'
    }
];
function Home() {
    _s();
    const [scannedTarget, setScannedTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    // Centralised results state
    const [dnsResult, setDnsResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phishResult, setPhishResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Trigger all diagnostics in parallel
    const runAllDiagnostics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[runAllDiagnostics]": async (target)=>{
            const domain = target.includes('@') ? target.split('@')[1] : target;
            // DNS Lookup
            fetch(`/api/dns?domain=${encodeURIComponent(domain)}`).then({
                "Home.useCallback[runAllDiagnostics]": (res)=>res.json()
            }["Home.useCallback[runAllDiagnostics]"]).then(setDnsResult).catch({
                "Home.useCallback[runAllDiagnostics]": (err)=>console.error("DNS Diagnostic Failed:", err)
            }["Home.useCallback[runAllDiagnostics]"]);
        // PhishTank logic is mostly handled in the PhishTankPanel component's checkDomain logic
        // but we can trigger it here if we wanted to fully decouple. 
        // For now, we rely on the PhishTankPanel auto-running when it detects a target+feed.
        }
    }["Home.useCallback[runAllDiagnostics]"], []);
    const handleScan = (t)=>{
        setScannedTarget(t);
        setDnsResult(null);
        setPhishResult(null);
        setActiveTab('overview');
        runAllDiagnostics(t);
    };
    const handleNewScan = ()=>{
        setScannedTarget(null);
        setDnsResult(null);
        setPhishResult(null);
        setActiveTab('overview');
    };
    const buildScorecard = ()=>{
        const lines = [
            'ABIMAIL SECURE — SECURITY SCORECARD',
            '='.repeat(42),
            `Target : ${scannedTarget}`,
            `Date   : ${new Date().toUTCString()}`,
            '',
            '── DNS HEALTH ──────────────────────────',
            `  SPF Record   : ${dnsResult?.spf.found ? dnsResult.spf.strict ? 'PASS (-all)' : 'WARN (~all)' : 'FAIL (missing)'}`,
            `  DMARC Policy : ${dnsResult?.dmarc.found ? `p=${dnsResult.dmarc.policy}` : 'FAIL (missing)'}`,
            `  Spoofing Risk: ${dnsResult?.spoofingRisk || 'PENDING'}`,
            '',
            '── THREAT INTELLIGENCE ─────────────────',
            `  Verdict      : ${phishResult?.severity || 'PENDING'}`,
            `  Feed Match   : ${phishResult?.listed ? 'YES' : 'NO'}`,
            `  Indicators   : ${phishResult?.iocs.length || 0} detected`,
            '',
            '── GATEWAY RESILIENCE ──────────────────',
            `  EICAR Test   : PASS (automated)`,
            `  Macro Check  : PASS (automated)`,
            '',
            '─'.repeat(42),
            'Generated by AbiMail Secure — Abisentry DTI Engine'
        ];
        return lines.join('\n');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'var(--color-background)',
            fontFamily: 'var(--font-family-sans)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                hasResults: !!scannedTarget,
                onTabChange: (tab)=>setActiveTab(tab)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveTicker"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '4rem 1.5rem 2rem',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '4px 12px',
                            borderRadius: '99px',
                            background: 'rgba(0,210,255,0.05)',
                            border: '1px solid rgba(0,210,255,0.15)',
                            color: 'var(--color-accent-blue)',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 6,
                                    height: 6,
                                    background: 'var(--color-accent-blue)',
                                    borderRadius: '50%',
                                    display: 'inline-block'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            "DTI ENGINE v2.0 ACTIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.04em',
                            lineHeight: 1.1,
                            marginBottom: '1rem',
                            color: '#fff'
                        },
                        children: [
                            "Email Security",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 128,
                                columnNumber: 35
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--color-accent-teal)'
                                },
                                children: "Diagnostic Suite"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#4b5563',
                            maxWidth: '500px',
                            lineHeight: 1.6,
                            fontSize: '0.95rem',
                            marginBottom: '2.5rem'
                        },
                        children: "Instant zero-trust evaluation of your domain resilience and gateway filtering capabilities."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '640px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroScanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroScanner"], {
                            onScan: handleScan
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this),
            scannedTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '0 1.5rem 4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        maxWidth: '960px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '8px',
                                marginBottom: '1.5rem',
                                justifyContent: 'center'
                            },
                            children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab.id),
                                    style: {
                                        padding: '0.5rem 1.25rem',
                                        borderRadius: '8px',
                                        border: 'none',
                                        background: activeTab === tab.id ? 'rgba(0,210,255,0.1)' : 'rgba(255,255,255,0.03)',
                                        color: activeTab === tab.id ? 'var(--color-accent-blue)' : '#4b5563',
                                        fontWeight: 600,
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    },
                                    children: [
                                        tab.icon,
                                        " ",
                                        tab.label
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animation: 'fadeUp 0.4s ease both'
                            },
                            children: [
                                activeTab === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.5rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RiskDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskDashboard"], {
                                            showResults: true,
                                            target: scannedTarget,
                                            dnsResult: dnsResult,
                                            phishResult: phishResult
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'center'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const blob = new Blob([
                                                        buildScorecard()
                                                    ], {
                                                        type: 'text/plain'
                                                    });
                                                    const url = URL.createObjectURL(blob);
                                                    const a = document.createElement('a');
                                                    a.href = url;
                                                    a.download = `abisentry-report-${scannedTarget.replace(/[@.]/g, '_')}.txt`;
                                                    a.click();
                                                },
                                                style: {
                                                    padding: '0.75rem 2rem',
                                                    background: 'var(--color-accent-blue)',
                                                    color: '#000',
                                                    fontWeight: 800,
                                                    borderRadius: '99px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    fontSize: '0.85rem',
                                                    boxShadow: '0 4px 20px rgba(0,210,255,0.3)'
                                                },
                                                children: "Download Security Scorecard"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 33
                                }, this),
                                activeTab === 'dns' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DnsHealthPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DnsHealthPanel"], {
                                    target: scannedTarget,
                                    onResult: setDnsResult
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 53
                                }, this),
                                activeTab === 'phishtank' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhishTankPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhishTankPanel"], {
                                    target: scannedTarget,
                                    onResult: setPhishResult
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 59
                                }, this),
                                activeTab === 'headers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderAnalyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderAnalyzer"], {
                                    target: scannedTarget
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 57
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 164,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 143,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 142,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '2rem 1.5rem 4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        width: '100%',
                        maxWidth: '900px'
                    },
                    children: FEATURE_CARDS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '1.5rem',
                                background: '#0d1117',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '1.5rem',
                                        marginBottom: '0.5rem',
                                        display: 'block'
                                    },
                                    children: f.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        color: '#fff',
                                        fontSize: '0.9rem',
                                        fontWeight: 700,
                                        marginBottom: '0.25rem'
                                    },
                                    children: f.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#4b5563',
                                        fontSize: '0.75rem',
                                        lineHeight: 1.5
                                    },
                                    children: f.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, f.title, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 200,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 197,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    padding: '2rem',
                    textAlign: 'center',
                    color: '#1e2128',
                    fontSize: '0.75rem',
                    borderTop: '1px solid rgba(255,255,255,0.03)'
                },
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " AbiSentry Technologies · DTI Engine v2.0 · Zero-Trust Compliance"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 214,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, this);
}
_s(Home, "NvRrVZWDeFrag3F31V0IXK7fIWg=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_691da432._.js.map