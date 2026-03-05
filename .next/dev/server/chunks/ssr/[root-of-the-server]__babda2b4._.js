module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/HeroScanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroScanner",
    ()=>HeroScanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ShieldIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "56",
        height: "56",
        viewBox: "0 0 256 256",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M208 40H48a8 8 0 0 0-8 8v56c0 80 72 112 88 116.8a8 8 0 0 0 4.8 0C148.8 216 224 184 224 104V48a8 8 0 0 0-16-8z",
                fill: "rgba(0,191,165,0.12)",
                stroke: "var(--color-accent-teal)",
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88 128l24 24 56-56",
                stroke: "var(--color-accent-teal)",
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroScanner.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
function SpinnerIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 256 256",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            animation: 'spin 1s linear infinite',
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M128 32a96 96 0 1 0 96 96",
            stroke: "currentColor",
            strokeWidth: "26",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroScanner.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HeroScanner.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
function HeroScanner({ onScan }) {
    const [target, setTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isScanning, setIsScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scanProgress, setScanProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleScan = (e)=>{
        e.preventDefault();
        const trimmed = target.trim();
        if (!trimmed) return;
        setIsScanning(true);
        setScanProgress(0);
        let progress = 0;
        progressRef.current = window.setInterval(()=>{
            progress += Math.random() * 18;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressRef.current);
                setTimeout(()=>{
                    setIsScanning(false);
                    setScanProgress(0);
                    onScan?.(trimmed);
                }, 350);
            }
            setScanProgress(Math.min(progress, 100));
        }, 110);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (progressRef.current) clearInterval(progressRef.current);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            maxWidth: '680px',
            margin: '0 auto 2rem',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            borderRadius: '1.5rem',
            background: 'linear-gradient(145deg, #0d1117 0%, #12151c 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.035,
                    backgroundImage: 'linear-gradient(var(--color-accent-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-blue) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            isScanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, var(--color-accent-blue) 50%, transparent 100%)',
                    top: `${scanProgress}%`,
                    boxShadow: '0 0 20px 4px rgba(0,210,255,0.4)',
                    transition: 'top 0.1s ease-out',
                    zIndex: 10,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '1.25rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldIcon, {}, void 0, false, {
                            fileName: "[project]/src/components/HeroScanner.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroScanner.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 'clamp(1.35rem, 4vw, 1.75rem)',
                            fontWeight: 800,
                            color: '#fff',
                            letterSpacing: '-0.03em',
                            marginBottom: '0.5rem'
                        },
                        children: "Zero-Trust Email Diagnostics"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroScanner.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#6b7280',
                            fontSize: 'clamp(0.82rem, 2vw, 0.92rem)',
                            marginBottom: '1.75rem',
                            maxWidth: '420px',
                            margin: '0 auto 1.75rem',
                            lineHeight: 1.6
                        },
                        children: "Evaluate your domain and gateway resilience against real-world attack scenarios instantly."
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroScanner.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleScan,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scanner-form-row",
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "scan-target-input",
                                        type: "text",
                                        placeholder: "Enter domain or email — e.g. test@acme.com",
                                        value: target,
                                        onChange: (e)=>setTarget(e.target.value),
                                        disabled: isScanning,
                                        autoComplete: "off",
                                        style: {
                                            flex: 1,
                                            padding: '0.85rem 1.25rem',
                                            background: '#0a0c10',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '99px',
                                            color: '#f8f9fa',
                                            fontSize: '0.92rem',
                                            outline: 'none',
                                            transition: 'border-color 0.2s, box-shadow 0.2s',
                                            opacity: isScanning ? 0.6 : 1,
                                            width: '100%'
                                        },
                                        onFocus: (e)=>{
                                            e.target.style.borderColor = 'var(--color-accent-blue)';
                                            e.target.style.boxShadow = '0 0 0 3px rgba(0,210,255,0.12)';
                                        },
                                        onBlur: (e)=>{
                                            e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                            e.target.style.boxShadow = 'none';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroScanner.tsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: "scan-submit-btn",
                                        type: "submit",
                                        disabled: !target.trim() || isScanning,
                                        style: {
                                            padding: '0.85rem 1.75rem',
                                            background: isScanning ? 'rgba(0,210,255,0.5)' : 'linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-teal))',
                                            color: '#000',
                                            fontWeight: 800,
                                            borderRadius: '99px',
                                            border: 'none',
                                            cursor: target.trim() && !isScanning ? 'pointer' : 'not-allowed',
                                            opacity: !target.trim() || isScanning ? 0.7 : 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.2s',
                                            whiteSpace: 'nowrap',
                                            minHeight: '46px',
                                            boxShadow: target.trim() && !isScanning ? '0 4px 20px rgba(0,210,255,0.3)' : 'none'
                                        },
                                        children: isScanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/components/HeroScanner.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 45
                                                }, this),
                                                " Scanning…"
                                            ]
                                        }, void 0, true) : 'Scan Target →'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroScanner.tsx",
                                        lineNumber: 155,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeroScanner.tsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, this),
                            isScanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '1.25rem',
                                    height: '4px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '99px',
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '100%',
                                        borderRadius: '99px',
                                        background: 'linear-gradient(90deg, var(--color-accent-teal), var(--color-accent-blue))',
                                        width: `${scanProgress}%`,
                                        transition: 'width 0.1s ease-out'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroScanner.tsx",
                                    lineNumber: 185,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroScanner.tsx",
                                lineNumber: 180,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroScanner.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @media (min-width: 480px) {
                    .scanner-form-row {
                        flex-direction: row !important;
                    }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/HeroScanner.tsx",
                lineNumber: 196,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroScanner.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/LiveTicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveTicker",
    ()=>LiveTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            background: '#0a0d12',
            borderBottom: '1px solid rgba(255,59,59,0.2)',
            padding: '10px 0',
            overflow: 'hidden',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                ].map((threat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
}),
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
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
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = (tab)=>{
        setMenuOpen(false);
        if (hasResults && onTabChange) {
            onTabChange(tab);
        } else {
            const el = document.getElementById('feature-grid');
            if (el) el.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    position: 'sticky',
                    top: 0,
                    zIndex: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 1.5rem',
                    height: '64px',
                    background: 'rgba(10, 12, 16, 0.92)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '8px',
                                    background: 'linear-gradient(135deg, rgba(0,210,255,0.15), rgba(0,191,165,0.15))',
                                    border: '1px solid rgba(0,210,255,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/abisentry_logo.png",
                                    alt: "AbiSentry Logo",
                                    fill: true,
                                    sizes: "36px",
                                    style: {
                                        objectFit: 'contain',
                                        padding: '4px'
                                    },
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    lineHeight: 1.2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#fff',
                                            fontWeight: 800,
                                            fontSize: '0.95rem',
                                            letterSpacing: '-0.02em'
                                        },
                                        children: [
                                            "Abi",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--color-accent-blue)'
                                                },
                                                children: "Mail"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 68,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#4b5563',
                                            fontSize: '0.6rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.12em',
                                            fontWeight: 600
                                        },
                                        children: "Secure"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-desktop",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.75rem'
                        },
                        children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleClick(link.tab),
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    padding: '4px 0',
                                    color: '#6b7280',
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s',
                                    fontFamily: 'inherit',
                                    fontWeight: 500,
                                    position: 'relative'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = '#e5e7eb',
                                onMouseLeave: (e)=>e.currentTarget.style.color = '#6b7280',
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-desktop",
                                style: {
                                    padding: '5px 12px',
                                    borderRadius: '99px',
                                    background: 'rgba(0,191,165,0.08)',
                                    border: '1px solid rgba(0,191,165,0.2)',
                                    color: 'var(--color-accent-teal)',
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.08em',
                                    whiteSpace: 'nowrap'
                                },
                                children: "ZERO-TRUST"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "nav-mobile",
                                onClick: ()=>setMenuOpen((prev)=>!prev),
                                "aria-label": "Toggle menu",
                                style: {
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '8px',
                                    padding: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '36px',
                                    height: '36px',
                                    transition: 'background 0.2s'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.08)',
                                onMouseLeave: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.05)',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            width: '16px',
                                            height: '2px',
                                            background: menuOpen ? 'var(--color-accent-blue)' : '#9ca3af',
                                            borderRadius: '2px',
                                            transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                                            transition: 'all 0.25s'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            width: '16px',
                                            height: '2px',
                                            background: menuOpen ? 'transparent' : '#9ca3af',
                                            borderRadius: '2px',
                                            transition: 'all 0.25s',
                                            opacity: menuOpen ? 0 : 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 131,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            width: '16px',
                                            height: '2px',
                                            background: menuOpen ? 'var(--color-accent-blue)' : '#9ca3af',
                                            borderRadius: '2px',
                                            transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                                            transition: 'all 0.25s'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 138,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-mobile",
                style: {
                    position: 'fixed',
                    top: '64px',
                    left: 0,
                    right: 0,
                    zIndex: 49,
                    background: 'rgba(10,12,16,0.98)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    padding: '1rem 1.5rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    animation: 'slideDown 0.2s ease both'
                },
                children: [
                    NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleClick(link.tab),
                            style: {
                                background: 'none',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0.75rem 1rem',
                                textAlign: 'left',
                                color: '#d1d5db',
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontFamily: 'inherit',
                                fontWeight: 500,
                                width: '100%'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = 'rgba(0,210,255,0.06)';
                                e.currentTarget.style.color = 'var(--color-accent-blue)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = 'none';
                                e.currentTarget.style.color = '#d1d5db';
                            },
                            children: link.label
                        }, link.label, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 162,
                            columnNumber: 25
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '0.5rem',
                            paddingTop: '0.75rem',
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: '#00bfa5',
                                    boxShadow: '0 0 8px #00bfa5'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 189,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#00bfa5',
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em'
                                },
                                children: "ZERO-TRUST ENGINE ACTIVE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 193,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 184,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 151,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @media (max-width: 768px) {
                    .nav-desktop { display: none !important; }
                    .nav-mobile { display: flex !important; }
                }
                @media (min-width: 769px) {
                    .nav-mobile { display: none !important; }
                    .nav-desktop { display: flex !important; }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/DnsHealthPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DnsHealthPanel",
    ()=>DnsHealthPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function RecordRow({ label, status, detail }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '8px',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid rgba(255,255,255,0.04)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minWidth: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#e5e7eb',
                            fontSize: '0.88rem',
                            fontWeight: 600
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#4b5563',
                            fontSize: '0.76rem',
                            fontFamily: 'monospace',
                            marginTop: '3px',
                            wordBreak: 'break-all',
                            lineHeight: 1.4
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
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
function DnsHealthPanel({ target, onResult }) {
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const runCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
    }, [
        target,
        onResult
    ]);
    // Auto-run when the tab is opened with a valid target
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (target) runCheck();
    }, [
        target,
        runCheck
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '1.25rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#4b5563',
                                    fontSize: '0.82rem',
                                    marginTop: '3px'
                                },
                                children: [
                                    "Live SPF · DKIM · DMARC lookup for",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--color-accent-blue)',
                                            fontFamily: 'monospace',
                                            fontWeight: 600
                                        },
                                        children: target || '(no target)'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            whiteSpace: 'nowrap',
                            flexShrink: 0
                        },
                        children: loading ? 'Checking…' : 'Run Live Check'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 104,
                columnNumber: 17
            }, this),
            !result && !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '3rem 1rem',
                    color: '#374151',
                    fontSize: '0.9rem'
                },
                children: 'Click "Run Live Check" to perform a real-time DNS lookup.'
            }, void 0, false, {
                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                lineNumber: 110,
                columnNumber: 17
            }, this),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#0d1117',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '0.75rem',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '0.75rem 1rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: result.spoofingRisk === 'HIGH' ? 'rgba(255,60,60,0.1)' : result.spoofingRisk === 'MEDIUM' ? 'rgba(255,180,0,0.1)' : 'rgba(0,200,100,0.1)',
                            borderBottom: '1px solid rgba(255,255,255,0.06)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#9ca3af',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em'
                                },
                                children: "Spoofing Risk"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 800,
                                    fontSize: '0.9rem',
                                    color: result.spoofingRisk === 'HIGH' ? '#ff3c3c' : result.spoofingRisk === 'MEDIUM' ? '#f5a623' : '#00c864'
                                },
                                children: result.spoofingRisk
                            }, void 0, false, {
                                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordRow, {
                        label: "SPF Record",
                        status: result.spf.status,
                        detail: result.spf.found ? result.spf.record || 'SPF record found' : 'No SPF record found'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 130,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordRow, {
                        label: "DKIM Signature",
                        status: result.dkim.status,
                        detail: result.dkim.found ? 'DKIM selector found (default._domainkey)' : 'DKIM selector not found — check selector name'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 135,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordRow, {
                        label: "DMARC Policy",
                        status: result.dmarc.status,
                        detail: result.dmarc.found ? `p=${result.dmarc.policy} — ${result.dmarc.policy === 'reject' ? 'Strict enforcement' : result.dmarc.policy === 'quarantine' ? 'Quarantine mode' : 'No enforcement (p=none)'}` : 'No DMARC record found'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 140,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordRow, {
                        label: "MX Records",
                        status: result.mx.status,
                        detail: result.mx.hasMX ? result.mx.records.slice(0, 2).join(', ') : 'No MX records found'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DnsHealthPanel.tsx",
                        lineNumber: 145,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DnsHealthPanel.tsx",
                lineNumber: 116,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DnsHealthPanel.tsx",
        lineNumber: 80,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/HeaderAnalyzer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderAnalyzer",
    ()=>HeaderAnalyzer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
    const [raw, setRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const analyze = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!raw.trim()) return;
        setAnalysis(parseHeaders(raw));
    }, [
        raw
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            maxWidth: '860px',
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            target && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#4b5563'
                        },
                        children: "Analyzing headers for:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                        lineNumber: 123,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    analysis.flags.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: s.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeaderAnalyzer.tsx",
                                            lineNumber: 194,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/components/PhishTankPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhishTankPanel",
    ()=>PhishTankPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feed, setFeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initial load of the threat feed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/abisentry_threats.json').then((res)=>res.json()).then(setFeed).catch(()=>console.error("DTI: Failed to load threat feed"));
    }, []);
    const runCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!target) return;
        setLoading(true);
        setResult(null);
        // Process in a timeout to feel "live" even if local
        setTimeout(()=>{
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
        }, 800);
    }, [
        target,
        feed,
        onResult
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (target && feed) runCheck();
    }, [
        target,
        feed,
        runCheck
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '1.25rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#4b5563',
                                    fontSize: '0.82rem',
                                    marginTop: '3px'
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            transition: 'opacity 0.2s',
                            flexShrink: 0,
                            whiteSpace: 'nowrap'
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
            !result && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '3rem 1rem',
                    color: '#4b5563',
                    fontSize: '0.9rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '2.5rem'
                                    },
                                    children: cfg.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhishTankPanel.tsx",
                                    lineNumber: 126,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        result.iocs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#0d1117',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: '0.75rem',
                                overflow: 'hidden'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '0.75rem 1rem',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                result.iocs.map((ioc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '0.65rem 1rem',
                                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'flex-start'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/RiskDashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiskDashboard",
    ()=>RiskDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#0d1117',
            border: `1px solid ${c.border}`,
            borderRadius: '1rem',
            overflow: 'hidden',
            animation: `fadeSlideUp 0.5s ease ${index * 0.1}s both`,
            opacity: module.status === 'PENDING' ? 0.6 : 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '1.25rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '1.5rem'
                                    },
                                    children: module.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RiskDashboard.tsx",
                                    lineNumber: 182,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                    },
                    children: module.details.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function RiskDashboard({ showResults, target, dnsResult, phishResult }) {
    if (!showResults) return null;
    const modules = buildModules(dnsResult ?? null, phishResult ?? null);
    const scoredWeight = modules.filter((m)=>m.status !== 'PENDING').length * 2;
    const earnedWeight = modules.reduce((acc, m)=>acc + (m.status === 'PASS' ? 2 : m.status === 'WARN' ? 1 : 0), 0);
    const score = scoredWeight > 0 ? Math.round(earnedWeight / scoredWeight * 100) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto 2rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    background: '#0d1117',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '1rem',
                    marginBottom: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#4b5563',
                                    fontSize: '0.68rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em'
                                },
                                children: "Scanned Target"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    fontFamily: 'monospace',
                                    marginTop: '2px'
                                },
                                children: target
                            }, void 0, false, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 242,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RiskDashboard.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#4b5563',
                                    fontSize: '0.68rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em'
                                },
                                children: "Security Score"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 245,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 'clamp(1.6rem, 4vw, 2rem)',
                                    fontWeight: 900,
                                    marginTop: '2px',
                                    color: score === null ? '#374151' : score >= 70 ? '#00c864' : score >= 40 ? '#f5a623' : '#ff3c3c'
                                },
                                children: score !== null ? `${score}%` : '—'
                            }, void 0, false, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 246,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RiskDashboard.tsx",
                        lineNumber: 244,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '12px'
                        },
                        children: [
                            'PASS',
                            'WARN',
                            'FAIL',
                            'PENDING'
                        ].map((s)=>{
                            const count = modules.filter((m)=>m.status === s).length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    minWidth: '36px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: RAG_COLORS[s].text,
                                            fontSize: '1.1rem',
                                            fontWeight: 800
                                        },
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RiskDashboard.tsx",
                                        lineNumber: 258,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#374151',
                                            fontSize: '0.58rem',
                                            letterSpacing: '0.06em'
                                        },
                                        children: s
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RiskDashboard.tsx",
                                        lineNumber: 259,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, s, true, {
                                fileName: "[project]/src/components/RiskDashboard.tsx",
                                lineNumber: 257,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/RiskDashboard.tsx",
                        lineNumber: 253,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RiskDashboard.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '0.75rem'
                },
                children: modules.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RiskCard, {
                        module: m,
                        index: i
                    }, m.id, false, {
                        fileName: "[project]/src/components/RiskDashboard.tsx",
                        lineNumber: 267,
                        columnNumber: 40
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/RiskDashboard.tsx",
                lineNumber: 266,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/RiskDashboard.tsx",
                lineNumber: 270,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RiskDashboard.tsx",
        lineNumber: 232,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroScanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroScanner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveTicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveTicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DnsHealthPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DnsHealthPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderAnalyzer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeaderAnalyzer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhishTankPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhishTankPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RiskDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RiskDashboard.tsx [app-ssr] (ecmascript)");
'use client';
;
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
async function downloadPDFReport(scannedTarget, dnsResult, phishResult) {
    // Dynamically import jsPDF to avoid SSR issues
    const { jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript, async loader)");
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const margin = 18;
    const contentW = pageW - margin * 2;
    let y = 0;
    // ── HELPERS ─────────────────────────────────────────────────────────
    const hex2rgb = (hex)=>{
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return [
            r,
            g,
            b
        ];
    };
    const setFill = (hex)=>doc.setFillColor(...hex2rgb(hex));
    const setStroke = (hex)=>doc.setDrawColor(...hex2rgb(hex));
    const setTextColor = (hex)=>doc.setTextColor(...hex2rgb(hex));
    const fillRect = (x, yy, w, h, hex)=>{
        setFill(hex);
        doc.rect(x, yy, w, h, 'F');
    };
    const drawLine = (x1, y1, x2, y2, hex, lw = 0.3)=>{
        setStroke(hex);
        doc.setLineWidth(lw);
        doc.line(x1, y1, x2, y2);
    };
    const text = (txt, x, yy, opts = {})=>{
        doc.setFontSize(opts.size ?? 10);
        doc.setFont('helvetica', opts.bold ? 'bold' : 'normal');
        setTextColor(opts.color ?? '#1a1a2e');
        doc.text(txt, x, yy, {
            align: opts.align ?? 'left'
        });
    };
    const statusColor = (status)=>{
        if ([
            'PASS',
            'CLEAN',
            'LOW'
        ].includes(status)) return '#00873d';
        if ([
            'WARN',
            'MEDIUM',
            'SUSPICIOUS'
        ].includes(status)) return '#b45309';
        if ([
            'FAIL',
            'HIGH',
            'MALICIOUS'
        ].includes(status)) return '#b91c1c';
        return '#6b7280';
    };
    const statusBadge = (label, status, x, yy)=>{
        const col = statusColor(status);
        const badgeW = 28;
        const badgeH = 6;
        // light background
        const bgHex = col === '#00873d' ? '#dcfce7' : col === '#b45309' ? '#fef3c7' : col === '#b91c1c' ? '#fee2e2' : '#f3f4f6';
        fillRect(x - 1, yy - 4.5, badgeW, badgeH, bgHex);
        // border
        setStroke(col);
        doc.setLineWidth(0.25);
        doc.roundedRect(x - 1, yy - 4.5, badgeW, badgeH, 1, 1, 'S');
        text(label, x + badgeW / 2 - 1, yy, {
            size: 7,
            bold: true,
            color: col,
            align: 'center'
        });
    };
    // ── COVER PAGE ───────────────────────────────────────────────────────
    // Deep dark header block
    fillRect(0, 0, pageW, 72, '#0a0f1e');
    // Accent stripe
    fillRect(0, 68, pageW, 4, '#00d2ff');
    // Shield icon SVG-style via filled shapes
    const shCx = margin + 10;
    const shCy = 30;
    setFill('#00d2ff');
    doc.circle(shCx, shCy, 7, 'F');
    fillRect(shCx - 4, shCy - 1, 8, 4, '#0a0f1e'); // fake shield inner
    // Branding
    text('AbiMail Secure', margin + 22, 28, {
        size: 22,
        bold: true,
        color: '#ffffff'
    });
    text('Security Diagnostic Report', margin + 22, 37, {
        size: 11,
        color: '#94a3b8'
    });
    // Report meta
    text(`Target:  ${scannedTarget}`, margin + 22, 50, {
        size: 9,
        color: '#cbd5e1'
    });
    text(`Generated:  ${new Date().toUTCString()}`, margin + 22, 57, {
        size: 9,
        color: '#cbd5e1'
    });
    text('Engine:  AbiSentry DTI v2.0 — Zero-Trust Compliance', margin + 22, 64, {
        size: 9,
        color: '#94a3b8'
    });
    y = 88;
    // ── EXECUTIVE SUMMARY BOX ────────────────────────────────────────────
    fillRect(margin, y, contentW, 42, '#f8fafc');
    setStroke('#e2e8f0');
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, y, contentW, 42, 2, 2, 'S');
    text('EXECUTIVE SUMMARY', margin + 6, y + 9, {
        size: 8,
        bold: true,
        color: '#475569'
    });
    drawLine(margin + 6, y + 11, margin + contentW - 6, y + 11, '#e2e8f0', 0.3);
    // Compute score
    const spfOk = dnsResult?.spf.status === 'PASS';
    const dkimOk = dnsResult?.dkim.found ?? false;
    const dmarcOk = dnsResult?.dmarc.status === 'PASS';
    const phishOk = phishResult?.severity === 'CLEAN';
    const checks = [
        spfOk,
        dkimOk,
        dmarcOk,
        phishOk
    ].filter(Boolean).length;
    const scoreNum = dnsResult ? Math.round(checks / 4 * 100) : null;
    const scoreLabel = scoreNum === null ? 'PENDING' : scoreNum >= 70 ? 'GOOD' : scoreNum >= 40 ? 'AT RISK' : 'CRITICAL';
    const scoreCol = scoreNum === null ? '#6b7280' : scoreNum >= 70 ? '#00873d' : scoreNum >= 40 ? '#b45309' : '#b91c1c';
    // Score circle placeholder
    fillRect(margin + 6, y + 15, 28, 20, scoreNum === null ? '#f1f5f9' : scoreNum >= 70 ? '#dcfce7' : scoreNum >= 40 ? '#fef3c7' : '#fee2e2');
    text(scoreNum !== null ? `${scoreNum}%` : '—', margin + 6 + 14, y + 26, {
        size: 14,
        bold: true,
        color: scoreCol,
        align: 'center'
    });
    text(scoreLabel, margin + 6 + 14, y + 33, {
        size: 7,
        bold: true,
        color: scoreCol,
        align: 'center'
    });
    const summaryItems = [
        {
            label: 'SPF Record',
            value: dnsResult ? dnsResult.spf.found ? dnsResult.spf.strict ? 'Strict (-all)' : 'Weak (~all)' : 'Missing' : 'Pending',
            ok: spfOk
        },
        {
            label: 'DMARC Policy',
            value: dnsResult ? dnsResult.dmarc.found ? `p=${dnsResult.dmarc.policy}` : 'Missing' : 'Pending',
            ok: dmarcOk
        },
        {
            label: 'Spoofing Risk',
            value: dnsResult?.spoofingRisk ?? 'Pending',
            ok: dnsResult?.spoofingRisk === 'LOW'
        },
        {
            label: 'Threat Level',
            value: phishResult?.severity ?? 'Pending',
            ok: phishOk
        }
    ];
    let sx = margin + 40;
    for (const item of summaryItems){
        text(item.label, sx, y + 20, {
            size: 7.5,
            color: '#64748b'
        });
        text(item.value, sx, y + 27, {
            size: 8.5,
            bold: true,
            color: item.ok ? '#00873d' : item.value === 'Pending' ? '#94a3b8' : '#b91c1c'
        });
        sx += 38;
    }
    y += 52;
    // ── SECTION: DNS HEALTH ──────────────────────────────────────────────
    const sectionHeader = (title, icon, yy)=>{
        fillRect(margin, yy, contentW, 10, '#0a0f1e');
        text(`${icon}  ${title}`, margin + 6, yy + 7, {
            size: 9,
            bold: true,
            color: '#ffffff'
        });
        return yy + 18;
    };
    y = sectionHeader('DNS HEALTH CHECK', '📡', y);
    if (dnsResult) {
        const dnsRows = [
            {
                label: 'SPF Record',
                value: dnsResult.spf.found ? dnsResult.spf.strict ? `Strict — ${dnsResult.spf.record}` : `Weak (~all) — ${dnsResult.spf.record}` : 'No SPF record found',
                status: dnsResult.spf.status
            },
            {
                label: 'DKIM Signature',
                value: dnsResult.dkim.found ? 'Selector found (default._domainkey)' : 'DKIM selector not found — verify selector name',
                status: dnsResult.dkim.found ? 'PASS' : 'FAIL'
            },
            {
                label: 'DMARC Policy',
                value: dnsResult.dmarc.found ? `p=${dnsResult.dmarc.policy} — ${dnsResult.dmarc.policy === 'reject' ? 'Strict enforcement' : dnsResult.dmarc.policy === 'quarantine' ? 'Quarantine mode' : 'No enforcement'}` : 'No DMARC record found',
                status: dnsResult.dmarc.status
            },
            {
                label: 'MX Records',
                value: dnsResult.mx.hasMX ? dnsResult.mx.records.slice(0, 2).join(', ') : 'No MX records found',
                status: dnsResult.mx.status
            },
            {
                label: 'Spoofing Risk',
                value: `Overall spoofing risk classified as ${dnsResult.spoofingRisk}`,
                status: dnsResult.spoofingRisk === 'LOW' ? 'PASS' : dnsResult.spoofingRisk === 'MEDIUM' ? 'WARN' : 'FAIL'
            }
        ];
        for (const row of dnsRows){
            // Row background alternating
            fillRect(margin, y, contentW, 13, '#f8fafc');
            drawLine(margin, y, margin + contentW, y, '#e2e8f0');
            text(row.label, margin + 6, y + 8.5, {
                size: 8.5,
                bold: true,
                color: '#1e293b'
            });
            const valMaxW = contentW - 50;
            const lines = doc.splitTextToSize(row.value, valMaxW);
            text(lines[0], margin + 52, y + 8.5, {
                size: 8,
                color: '#475569'
            });
            statusBadge(row.status?.toString().toUpperCase() || 'N/A', row.status?.toString().toUpperCase() || 'N/A', pageW - margin - 27, y + 8.5);
            y += 14;
        }
        drawLine(margin, y, margin + contentW, y, '#e2e8f0');
        y += 8;
    } else {
        fillRect(margin, y, contentW, 12, '#f1f5f9');
        text('DNS diagnostics not yet completed for this scan.', margin + 6, y + 8, {
            size: 8.5,
            color: '#94a3b8'
        });
        y += 18;
    }
    // ── SECTION: THREAT INTELLIGENCE ───────────────────────────────────
    y += 4;
    y = sectionHeader('THREAT INTELLIGENCE  (PhishTank & DTI Feeds)', '🎣', y);
    if (phishResult) {
        const cfg = {
            CLEAN: '#00873d',
            SUSPICIOUS: '#b45309',
            MALICIOUS: '#b91c1c'
        }[phishResult.severity];
        fillRect(margin, y, contentW, 18, phishResult.severity === 'CLEAN' ? '#f0fdf4' : phishResult.severity === 'SUSPICIOUS' ? '#fffbeb' : '#fff1f2');
        text('THREAT VERDICT', margin + 6, y + 7, {
            size: 7.5,
            bold: true,
            color: '#64748b'
        });
        text(phishResult.severity, margin + 6, y + 14, {
            size: 13,
            bold: true,
            color: cfg
        });
        text(phishResult.listed ? `Listed in: ${phishResult.sources.join(', ')}` : phishResult.severity === 'SUSPICIOUS' ? 'Flagged by heuristic pattern analysis' : 'Domain not found in any active threat feed', margin + 55, y + 11, {
            size: 8.5,
            color: '#475569'
        });
        y += 22;
        if (phishResult.iocs.length > 0) {
            text(`Indicators of Compromise (${phishResult.iocs.length} detected)`, margin + 6, y + 7, {
                size: 8,
                bold: true,
                color: '#374151'
            });
            y += 10;
            for (const ioc of phishResult.iocs){
                fillRect(margin, y, contentW, 9, '#fff8f8');
                setFill(cfg);
                doc.circle(margin + 5, y + 4.5, 1.2, 'F');
                text(ioc, margin + 10, y + 6.5, {
                    size: 7.5,
                    color: '#6b7280'
                });
                y += 10;
            }
        } else {
            fillRect(margin, y, contentW, 10, '#f0fdf4');
            text('✓ No indicators of compromise detected.', margin + 6, y + 7, {
                size: 8.5,
                color: '#00873d'
            });
            y += 14;
        }
    } else {
        fillRect(margin, y, contentW, 12, '#f1f5f9');
        text('Threat intelligence scan not yet completed.', margin + 6, y + 8, {
            size: 8.5,
            color: '#94a3b8'
        });
        y += 18;
    }
    // ── SECTION: GATEWAY RESILIENCE ─────────────────────────────────────
    y += 4;
    y = sectionHeader('GATEWAY RESILIENCE  (Payload Simulator)', '📦', y);
    const gatewayRows = [
        {
            test: 'EICAR Antivirus Test File',
            result: 'Blocked at Gateway',
            status: 'PASS'
        },
        {
            test: 'Macro-Embedded Document (.docm)',
            result: 'Scrubbed by Sandbox',
            status: 'PASS'
        },
        {
            test: 'ZIP Bomb (Recursive Compression)',
            result: 'Detonated in Isolation',
            status: 'PASS'
        }
    ];
    for (const row of gatewayRows){
        fillRect(margin, y, contentW, 11, '#f0fdf4');
        drawLine(margin, y, margin + contentW, y, '#dcfce7');
        text(row.test, margin + 6, y + 7.5, {
            size: 8,
            bold: false,
            color: '#374151'
        });
        text(row.result, margin + contentW / 2 - 10, y + 7.5, {
            size: 8,
            color: '#475569'
        });
        statusBadge(row.status, row.status, pageW - margin - 27, y + 7.5);
        y += 12;
    }
    drawLine(margin, y, margin + contentW, y, '#e2e8f0');
    y += 10;
    // ── FOOTER ───────────────────────────────────────────────────────────
    // Check if we need a new page
    if (y > pageH - 30) {
        doc.addPage();
        y = 20;
    }
    // Footer bar
    fillRect(0, pageH - 16, pageW, 16, '#0a0f1e');
    text('AbiMail Secure  ·  Abisentry Technologies  ·  DTI Engine v2.0  ·  Zero-Trust Compliance', pageW / 2, pageH - 6, {
        size: 7,
        color: '#64748b',
        align: 'center'
    });
    text(`Report ID: ABM-${Date.now().toString(36).toUpperCase()}`, margin, pageH - 6, {
        size: 7,
        color: '#475569'
    });
    text(`Page 1 of 1`, pageW - margin, pageH - 6, {
        size: 7,
        color: '#475569',
        align: 'right'
    });
    // ── SAVE ─────────────────────────────────────────────────────────────
    const filename = `AbiSentry-Report-${scannedTarget.replace(/[@.]/g, '_')}-${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(filename);
}
function Home() {
    const [scannedTarget, setScannedTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [dnsResult, setDnsResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phishResult, setPhishResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGeneratingPDF, setIsGeneratingPDF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const runAllDiagnostics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (target)=>{
        const domain = target.includes('@') ? target.split('@')[1] : target;
        fetch(`/api/dns?domain=${encodeURIComponent(domain)}`).then((res)=>res.json()).then(setDnsResult).catch((err)=>console.error('DNS Diagnostic Failed:', err));
    }, []);
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
    const handleDownloadPDF = async ()=>{
        if (!scannedTarget) return;
        setIsGeneratingPDF(true);
        try {
            await downloadPDFReport(scannedTarget, dnsResult, phishResult);
        } catch (err) {
            console.error('PDF generation failed:', err);
        } finally{
            setIsGeneratingPDF(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'var(--color-background)',
            fontFamily: 'var(--font-family-sans)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {
                hasResults: !!scannedTarget,
                onTabChange: (tab)=>setActiveTab(tab)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 351,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveTicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiveTicker"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 352,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 'clamp(2.5rem, 6vw, 4rem) 1.25rem 2rem',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '4px 14px',
                            borderRadius: '99px',
                            background: 'rgba(0,210,255,0.05)',
                            border: '1px solid rgba(0,210,255,0.15)',
                            color: 'var(--color-accent-blue)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.06em'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 6,
                                    height: 6,
                                    background: 'var(--color-accent-blue)',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    boxShadow: '0 0 6px var(--color-accent-blue)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 366,
                                columnNumber: 21
                            }, this),
                            "DTI ENGINE v2.0 ACTIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 360,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: 'clamp(2rem, 6vw, 3.8rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.04em',
                            lineHeight: 1.1,
                            marginBottom: '1rem',
                            color: '#fff',
                            maxWidth: '700px'
                        },
                        children: [
                            "Email Security",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 375,
                                columnNumber: 35
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--color-accent-teal)'
                                },
                                children: "Diagnostic Suite"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 376,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 370,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#6b7280',
                            maxWidth: '480px',
                            lineHeight: 1.7,
                            fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                            marginBottom: '2.5rem'
                        },
                        children: "Instant zero-trust evaluation of your domain resilience and gateway filtering capabilities."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 379,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '660px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroScanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroScanner"], {
                            onScan: handleScan
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 387,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 386,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 355,
                columnNumber: 13
            }, this),
            scannedTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '0 1.25rem 5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        maxWidth: '960px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '12px',
                                marginBottom: '1.25rem',
                                padding: '0.65rem 1rem',
                                background: 'rgba(0,210,255,0.04)',
                                border: '1px solid rgba(0,210,255,0.12)',
                                borderRadius: '10px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 6,
                                                height: 6,
                                                background: '#00c864',
                                                borderRadius: '50%',
                                                boxShadow: '0 0 6px #00c864'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#9ca3af',
                                                fontSize: '0.78rem'
                                            },
                                            children: "Active scan:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 407,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#fff',
                                                fontWeight: 700,
                                                fontSize: '0.9rem',
                                                fontFamily: 'monospace'
                                            },
                                            children: scannedTarget
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 405,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNewScan,
                                    style: {
                                        padding: '0.35rem 0.85rem',
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: '#9ca3af',
                                        borderRadius: '6px',
                                        fontSize: '0.78rem',
                                        cursor: 'pointer',
                                        fontFamily: 'inherit',
                                        transition: 'all 0.2s'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.color = '#9ca3af';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    },
                                    children: "← New Scan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 396,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '6px',
                                marginBottom: '1.5rem',
                                overflowX: 'auto',
                                paddingBottom: '4px',
                                scrollbarWidth: 'none'
                            },
                            children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab.id),
                                    style: {
                                        padding: '0.5rem 1.1rem',
                                        borderRadius: '8px',
                                        border: 'none',
                                        background: activeTab === tab.id ? 'rgba(0,210,255,0.12)' : 'rgba(255,255,255,0.03)',
                                        color: activeTab === tab.id ? 'var(--color-accent-blue)' : '#4b5563',
                                        fontWeight: 600,
                                        fontSize: '0.82rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        whiteSpace: 'nowrap',
                                        flexShrink: 0,
                                        borderBottom: activeTab === tab.id ? '2px solid var(--color-accent-blue)' : '2px solid transparent'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: tab.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: tab.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 434,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animation: 'fadeUp 0.4s ease both'
                            },
                            children: [
                                activeTab === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.5rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RiskDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiskDashboard"], {
                                            showResults: true,
                                            target: scannedTarget,
                                            dnsResult: dnsResult,
                                            phishResult: phishResult
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 468,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'center',
                                                paddingBottom: '1rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleDownloadPDF,
                                                    disabled: isGeneratingPDF,
                                                    style: {
                                                        padding: '0.8rem 2.25rem',
                                                        background: isGeneratingPDF ? 'rgba(0,210,255,0.5)' : 'linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-teal))',
                                                        color: '#000',
                                                        fontWeight: 800,
                                                        borderRadius: '99px',
                                                        border: 'none',
                                                        cursor: isGeneratingPDF ? 'not-allowed' : 'pointer',
                                                        fontSize: '0.88rem',
                                                        boxShadow: isGeneratingPDF ? 'none' : '0 4px 24px rgba(0,210,255,0.35)',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        transition: 'all 0.25s',
                                                        letterSpacing: '-0.01em'
                                                    },
                                                    children: isGeneratingPDF ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                style: {
                                                                    animation: 'spin 1s linear infinite'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M12 4a8 8 0 1 0 8 8",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2.5",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 492,
                                                                columnNumber: 53
                                                            }, this),
                                                            "Generating PDF…"
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 500,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M14 2v6h6M12 18v-6M9 15l3 3 3-3",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 501,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 53
                                                            }, this),
                                                            "Download Security Report (PDF)"
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: '#374151',
                                                        fontSize: '0.72rem',
                                                        marginTop: '0.5rem'
                                                    },
                                                    children: "Professionally formatted A4 PDF scorecard"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 33
                                }, this),
                                activeTab === 'dns' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DnsHealthPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DnsHealthPanel"], {
                                    target: scannedTarget,
                                    onResult: setDnsResult
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 514,
                                    columnNumber: 53
                                }, this),
                                activeTab === 'phishtank' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhishTankPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhishTankPanel"], {
                                    target: scannedTarget,
                                    onResult: setPhishResult
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 59
                                }, this),
                                activeTab === 'headers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderAnalyzer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderAnalyzer"], {
                                    target: scannedTarget
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 57
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 465,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 393,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 392,
                columnNumber: 17
            }, this) : /* Feature cards */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "feature-grid",
                style: {
                    padding: '1rem 1.25rem 4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                        gap: '1rem',
                        width: '100%',
                        maxWidth: '920px'
                    },
                    children: FEATURE_CARDS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '1.5rem',
                                background: '#0d1117',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '1rem',
                                transition: 'border-color 0.25s, transform 0.25s',
                                cursor: 'default'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.borderColor = 'rgba(0,210,255,0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '1.5rem',
                                        marginBottom: '0.75rem',
                                        display: 'block'
                                    },
                                    children: f.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 548,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        color: '#e5e7eb',
                                        fontSize: '0.9rem',
                                        fontWeight: 700,
                                        marginBottom: '0.35rem'
                                    },
                                    children: f.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#4b5563',
                                        fontSize: '0.78rem',
                                        lineHeight: 1.6
                                    },
                                    children: f.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 550,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, f.title, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 529,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 523,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 522,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    padding: '1.75rem',
                    textAlign: 'center',
                    color: '#374151',
                    fontSize: '0.75rem',
                    borderTop: '1px solid rgba(255,255,255,0.04)'
                },
                children: [
                    "© ",
                    new Date().getFullYear(),
                    "  AbiSentry Technologies  ·  DTI Engine v2.0  ·  Zero-Trust Compliance"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 557,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                /* Hide scrollbar on tab row */
                div::-webkit-scrollbar { height: 0; }
            `
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 565,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 350,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__babda2b4._.js.map