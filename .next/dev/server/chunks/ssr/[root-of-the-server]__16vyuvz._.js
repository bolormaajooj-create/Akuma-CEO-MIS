module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/delivery/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeliveryMIS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const WEBHOOK = 'https://akuma.bitrix24.com/rest/61022/y7fjd5sjeb7e5bhx';
const CATEGORY_ID = 10;
const STAGES = [
    {
        id: 'NEW',
        label: 'Шинэ хүргэлт',
        color: '#60A5FA',
        bg: '#EFF6FF'
    },
    {
        id: 'PREPARATION',
        label: 'Хойшилсон',
        color: '#FBBF24',
        bg: '#FFFBEB'
    },
    {
        id: 'EXECUTING',
        label: 'Хүргэлтэнд гарсан',
        color: '#818CF8',
        bg: '#EEF2FF'
    },
    {
        id: 'LOSE',
        label: 'Амжилтгүй',
        color: '#F87171',
        bg: '#FEF2F2'
    },
    {
        id: 'WON',
        label: 'Хүргэлт амжилттай',
        color: '#34D399',
        bg: '#ECFDF5'
    }
];
const CHART_PERIODS = [
    {
        key: 'today',
        label: 'Өнөөдөр'
    },
    {
        key: 'week',
        label: '7 хоног'
    },
    {
        key: 'month',
        label: 'Сар'
    },
    {
        key: 'custom',
        label: 'Захиалгат'
    }
];
const CHART_TYPES = [
    {
        key: 'area',
        label: 'Area'
    },
    {
        key: 'bar',
        label: 'Bar'
    },
    {
        key: 'line',
        label: 'Line'
    }
];
function fmt(n) {
    return Number(n || 0).toLocaleString('mn-MN');
}
function fmtMoney(n) {
    return `${fmt(Math.round(n / 1000))}K ₮`;
}
// ── API helpers ──────────────────────────────────────────────────────────────
async function fetchAll(method, params = {}) {
    let all = [], start = 0;
    while(true){
        const url = `${WEBHOOK}/${method}.json`;
        const body = {
            ...params,
            start
        };
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();
        if (!data.result) break;
        const items = Array.isArray(data.result) ? data.result : Object.values(data.result);
        all = all.concat(items);
        if (!data.next) break;
        start = data.next;
    }
    return all;
}
async function fetchDeals(filter = {}) {
    return fetchAll('crm.deal.list', {
        filter: {
            CATEGORY_ID,
            ...filter
        },
        select: [
            'ID',
            'TITLE',
            'STAGE_ID',
            'OPPORTUNITY',
            'ASSIGNED_BY_ID',
            'DATE_CREATE',
            'CLOSEDATE',
            'MOVED_TIME'
        ]
    });
}
async function fetchStages() {
    const raw = await fetchAll('crm.dealcategory.stage.list', {
        id: CATEGORY_ID
    });
    return raw;
}
async function fetchUsers(ids) {
    if (!ids.length) return {};
    const res = await fetchAll('user.get', {
        filter: {
            ID: ids
        }
    });
    return Object.fromEntries(res.map((u)=>[
            u.ID,
            `${u.NAME} ${u.LAST_NAME || ''}`.trim()
        ]));
}
// ── Date helpers ─────────────────────────────────────────────────────────────
function periodFilter(period, custom) {
    const now = new Date();
    if (period === 'today') {
        const start = new Date(now);
        start.setHours(0, 0, 0, 0);
        return {
            '>=DATE_CREATE': start.toISOString(),
            '<=DATE_CREATE': now.toISOString()
        };
    }
    if (period === 'week') {
        const start = new Date(now);
        start.setDate(now.getDate() - 6);
        start.setHours(0, 0, 0, 0);
        return {
            '>=DATE_CREATE': start.toISOString(),
            '<=DATE_CREATE': now.toISOString()
        };
    }
    if (period === 'month') {
        const start = new Date(now);
        start.setDate(1);
        start.setHours(0, 0, 0, 0);
        return {
            '>=DATE_CREATE': start.toISOString(),
            '<=DATE_CREATE': now.toISOString()
        };
    }
    if (period === 'custom' && custom.from && custom.to) {
        return {
            '>=DATE_CREATE': new Date(custom.from).toISOString(),
            '<=DATE_CREATE': new Date(custom.to + 'T23:59:59').toISOString()
        };
    }
    return {};
}
function groupByDay(deals, field = 'DATE_CREATE') {
    const map = {};
    deals.forEach((d)=>{
        const day = (d[field] || '').slice(0, 10);
        if (!day) return;
        if (!map[day]) map[day] = {
            date: day,
            амжилттай: 0,
            амжилтгүй: 0,
            нийт: 0,
            дүн: 0
        };
        map[day].нийт++;
        map[day].дүн += Number(d.OPPORTUNITY || 0);
        if (d.STAGE_ID && d.STAGE_ID.includes('WON')) map[day].амжилттай++;
        if (d.STAGE_ID && d.STAGE_ID.includes('LOSE')) map[day].амжилтгүй++;
    });
    return Object.values(map).sort((a, b)=>a.date.localeCompare(b.date));
}
// ── Sub-components ───────────────────────────────────────────────────────────
function Skeleton({ h = 80 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: h,
            borderRadius: 10,
            background: 'linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)',
            backgroundSize: '200%',
            animation: 'shimmer 1.4s infinite'
        }
    }, void 0, false, {
        fileName: "[project]/src/app/delivery/page.jsx",
        lineNumber: 113,
        columnNumber: 10
    }, this);
}
function KpiCard({ label, value, sub, color, bg, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: bg || '#F7F8FA',
            borderRadius: 14,
            padding: '18px 20px',
            border: '1px solid #E5E7EB',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 12,
                            color: '#6B7280',
                            fontWeight: 500,
                            letterSpacing: 0.3
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 20
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 121,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 26,
                    fontWeight: 700,
                    color: color || '#111827',
                    lineHeight: 1.1
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12,
                    color: '#9CA3AF'
                },
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 124,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/delivery/page.jsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
function SectionHeader({ title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 16
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    margin: 0,
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#111827'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    margin: '2px 0 0',
                    fontSize: 13,
                    color: '#6B7280'
                },
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 133,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/delivery/page.jsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
function DeliveryMIS() {
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('week');
    const [custom, setCustom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        from: '',
        to: ''
    });
    const [chartType, setChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('area');
    const [chartMetric, setChartMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('нийт');
    const [deals, setDeals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dealSearch, setDealSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [dealStageFilter, setDealStageFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const [dealSort, setDealSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        key: 'DATE_CREATE',
        dir: -1
    });
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const filter = periodFilter(period, custom);
            const raw = await fetchDeals(filter);
            const uids = [
                ...new Set(raw.map((d)=>d.ASSIGNED_BY_ID).filter(Boolean))
            ];
            const umap = await fetchUsers(uids);
            setDeals(raw);
            setUsers(umap);
        } catch (e) {
            setError('API холболт амжилтгүй: ' + e.message);
        } finally{
            setLoading(false);
        }
    }, [
        period,
        custom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    }, [
        load
    ]);
    // ── Derived stats ──────────────────────────────────────────────────────────
    const stageMap = {};
    STAGES.forEach((s)=>{
        stageMap[s.id] = {
            count: 0,
            amount: 0
        };
    });
    deals.forEach((d)=>{
        const sid = d.STAGE_ID?.replace(/^C10:/, '') || 'NEW';
        const key = STAGES.find((s)=>sid.includes(s.id))?.id;
        if (key) {
            stageMap[key].count++;
            stageMap[key].amount += Number(d.OPPORTUNITY || 0);
        }
    });
    const total = deals.length;
    const won = stageMap['WON'].count;
    const lost = stageMap['LOSE'].count;
    const active = (stageMap['NEW'].count || 0) + (stageMap['PREPARATION'].count || 0) + (stageMap['EXECUTING'].count || 0);
    const totalAmount = deals.reduce((s, d)=>s + Number(d.OPPORTUNITY || 0), 0);
    const wonAmount = stageMap['WON'].amount;
    const successRate = total ? Math.round(won / total * 100) : 0;
    // funnel data
    const funnelData = STAGES.map((s)=>({
            name: s.label,
            value: stageMap[s.id].count,
            fill: s.color
        }));
    // trend data
    const trendData = groupByDay(deals);
    // agent stats
    const agentMap = {};
    deals.forEach((d)=>{
        const uid = d.ASSIGNED_BY_ID;
        if (!uid) return;
        if (!agentMap[uid]) agentMap[uid] = {
            name: users[uid] || `#${uid}`,
            нийт: 0,
            амжилттай: 0,
            амжилтгүй: 0,
            дүн: 0
        };
        agentMap[uid].нийт++;
        agentMap[uid].дүн += Number(d.OPPORTUNITY || 0);
        const sid = d.STAGE_ID?.replace(/^C10:/, '') || '';
        if (sid.includes('WON')) agentMap[uid].амжилттай++;
        if (sid.includes('LOSE')) agentMap[uid].амжилтгүй++;
    });
    const agentList = Object.values(agentMap).sort((a, b)=>b.нийт - a.нийт);
    // deal list
    const filteredDeals = deals.filter((d)=>{
        const sid = d.STAGE_ID?.replace(/^C10:/, '') || '';
        const stageMatch = dealStageFilter === 'ALL' || sid.includes(dealStageFilter);
        const search = dealSearch.toLowerCase();
        const searchMatch = !search || d.TITLE?.toLowerCase().includes(search) || d.ID?.includes(search);
        return stageMatch && searchMatch;
    }).sort((a, b)=>{
        const av = a[dealSort.key] || '';
        const bv = b[dealSort.key] || '';
        return av < bv ? -dealSort.dir : av > bv ? dealSort.dir : 0;
    });
    // pie data
    const pieData = [
        {
            name: 'Амжилттай',
            value: won,
            color: '#34D399'
        },
        {
            name: 'Амжилтгүй',
            value: lost,
            color: '#F87171'
        },
        {
            name: 'Идэвхтэй',
            value: active,
            color: '#60A5FA'
        }
    ];
    const ChartComp = chartType === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"] : chartType === 'line' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"];
    const DataComp = chartType === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"] : chartType === 'line' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"];
    const periodLabel = period === 'custom' ? custom.from && custom.to ? `${custom.from} — ${custom.to}` : 'Огноо сонгоно уу' : CHART_PERIODS.find((p)=>p.key === period)?.label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
            background: '#F7F8FA',
            minHeight: '100vh',
            padding: '28px 24px',
            maxWidth: 1200,
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .mis-card { animation: fadeUp 0.4s ease both; }
        .mis-btn { border: 1px solid #E5E7EB; background: #fff; border-radius: 8px; padding: 6px 14px; font-size: 13px; cursor: pointer; color: #374151; transition: all 0.15s; }
        .mis-btn:hover { background: #F3F4F6; }
        .mis-btn.active { background: #111827; color: #fff; border-color: #111827; }
        .mis-table th { background: #F9FAFB; font-size: 12px; color: #6B7280; font-weight: 600; padding: 10px 14px; text-align: left; border-bottom: 1px solid #E5E7EB; cursor: pointer; }
        .mis-table td { font-size: 13px; color: #374151; padding: 10px 14px; border-bottom: 1px solid #F3F4F6; }
        .mis-table tr:hover td { background: #F9FAFB; }
        .stage-pill { font-size: 11px; padding: 3px 9px; border-radius: 20px; font-weight: 500; display: inline-block; }
        .mis-input { border: 1px solid #E5E7EB; border-radius: 8px; padding: 7px 12px; font-size: 13px; color: #111827; background: #fff; outline: none; }
        .mis-input:focus { border-color: #9CA3AF; }
        .funnel-bar { transition: width 0.6s cubic-bezier(0.34,1.56,0.64,1); }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: 28,
                    flexWrap: 'wrap',
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: 0,
                                    fontSize: 24,
                                    fontWeight: 800,
                                    color: '#111827',
                                    letterSpacing: -0.5
                                },
                                children: "Хүргэлт MIS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '4px 0 0',
                                    fontSize: 13,
                                    color: '#6B7280'
                                },
                                children: [
                                    "Bitrix24 · Хүргэлт пайплайн · ",
                                    periodLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            flexWrap: 'wrap'
                        },
                        children: [
                            CHART_PERIODS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `mis-btn${period === p.key ? ' active' : ''}`,
                                    onClick: ()=>setPeriod(p.key),
                                    children: p.label
                                }, p.key, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mis-btn",
                                onClick: load,
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 4
                                },
                                children: "↻ Шинэчлэх"
                            }, void 0, false, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            period === 'custom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 10,
                    marginBottom: 20,
                    alignItems: 'center',
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        className: "mis-input",
                        value: custom.from,
                        onChange: (e)=>setCustom((c)=>({
                                    ...c,
                                    from: e.target.value
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#9CA3AF'
                        },
                        children: "—"
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        className: "mis-input",
                        value: custom.to,
                        onChange: (e)=>setCustom((c)=>({
                                    ...c,
                                    to: e.target.value
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mis-btn active",
                        onClick: load,
                        children: "Хайх"
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 274,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: 10,
                    padding: '12px 16px',
                    color: '#B91C1C',
                    fontSize: 13,
                    marginBottom: 20
                },
                children: [
                    "⚠ ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 283,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mis-card",
                style: {
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "01 · Нийт тойм",
                        subtitle: "Тухайн хугацааны үндсэн үзүүлэлтүүд"
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gap: 12
                        },
                        children: loading ? Array(6).fill(0).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                h: 90
                            }, i, false, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 292,
                                columnNumber: 53
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                    label: "Нийт хүргэлт",
                                    value: fmt(total),
                                    icon: "📦",
                                    color: "#111827",
                                    bg: "#fff"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                    label: "Амжилттай",
                                    value: fmt(won),
                                    sub: `${successRate}% амжилтын хувь`,
                                    color: "#059669",
                                    bg: "#ECFDF5",
                                    icon: "✅"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                    label: "Амжилтгүй",
                                    value: fmt(lost),
                                    sub: `${total ? Math.round(lost / total * 100) : 0}%`,
                                    color: "#DC2626",
                                    bg: "#FEF2F2",
                                    icon: "❌"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                    label: "Идэвхтэй",
                                    value: fmt(active),
                                    sub: "Одоогоор явагдаж байна",
                                    color: "#2563EB",
                                    bg: "#EFF6FF",
                                    icon: "🚚"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                    label: "Нийт дүн",
                                    value: fmtMoney(totalAmount),
                                    color: "#7C3AED",
                                    bg: "#F5F3FF",
                                    icon: "💰"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                    label: "Амжилттай дүн",
                                    value: fmtMoney(wonAmount),
                                    sub: "Хаагдсан орлого",
                                    color: "#0D9488",
                                    bg: "#F0FDFA",
                                    icon: "🏆"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mis-card",
                style: {
                    background: '#fff',
                    borderRadius: 14,
                    border: '1px solid #E5E7EB',
                    padding: '20px 24px',
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "02 · Пайплайн дамжлага",
                        subtitle: "Stage тус бүрийн хүргэлтийн тоо ба дүн"
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        h: 160
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 306,
                        columnNumber: 20
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        },
                        children: STAGES.map((s, i)=>{
                            const cnt = stageMap[s.id].count;
                            const pct = total ? Math.round(cnt / total * 100) : 0;
                            const width = Math.max(pct, 3);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 160,
                                            fontSize: 12,
                                            color: '#6B7280',
                                            fontWeight: 500,
                                            flexShrink: 0
                                        },
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 314,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            height: 32,
                                            background: '#F3F4F6',
                                            borderRadius: 8,
                                            overflow: 'hidden',
                                            position: 'relative'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "funnel-bar",
                                            style: {
                                                height: '100%',
                                                width: `${width}%`,
                                                background: s.color,
                                                borderRadius: 8,
                                                display: 'flex',
                                                alignItems: 'center',
                                                paddingLeft: 12,
                                                boxSizing: 'border-box'
                                            },
                                            children: cnt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: '#fff',
                                                    whiteSpace: 'nowrap'
                                                },
                                                children: cnt
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 317,
                                                columnNumber: 35
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/delivery/page.jsx",
                                            lineNumber: 316,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 315,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 100,
                                            fontSize: 12,
                                            color: '#6B7280',
                                            textAlign: 'right',
                                            flexShrink: 0
                                        },
                                        children: fmtMoney(stageMap[s.id].amount)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 320,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 40,
                                            fontSize: 12,
                                            color: '#9CA3AF',
                                            textAlign: 'right',
                                            flexShrink: 0
                                        },
                                        children: [
                                            pct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 323,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, s.id, true, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 313,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mis-card",
                style: {
                    background: '#fff',
                    borderRadius: 14,
                    border: '1px solid #E5E7EB',
                    padding: '20px 24px',
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            marginBottom: 16,
                            flexWrap: 'wrap',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                title: "03 · Трэнд график",
                                subtitle: "Хугацааны явц"
                            }, void 0, false, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 8,
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 4
                                        },
                                        children: [
                                            'нийт',
                                            'амжилттай',
                                            'амжилтгүй'
                                        ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `mis-btn${chartMetric === m ? ' active' : ''}`,
                                                onClick: ()=>setChartMetric(m),
                                                style: {
                                                    fontSize: 12,
                                                    padding: '5px 10px'
                                                },
                                                children: m
                                            }, m, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 4
                                        },
                                        children: CHART_TYPES.map((ct)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `mis-btn${chartType === ct.key ? ' active' : ''}`,
                                                onClick: ()=>setChartType(ct.key),
                                                style: {
                                                    fontSize: 12,
                                                    padding: '5px 10px'
                                                },
                                                children: ct.label
                                            }, ct.key, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        h: 260
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 348,
                        columnNumber: 20
                    }, this) : trendData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 260,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#9CA3AF',
                            fontSize: 14
                        },
                        children: "Өгөгдөл байхгүй байна"
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 260,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartComp, {
                            data: trendData,
                            margin: {
                                top: 4,
                                right: 16,
                                bottom: 0,
                                left: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "#F3F4F6"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "date",
                                    tick: {
                                        fontSize: 11,
                                        fill: '#9CA3AF'
                                    },
                                    tickLine: false
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                    tick: {
                                        fontSize: 11,
                                        fill: '#9CA3AF'
                                    },
                                    tickLine: false,
                                    axisLine: false
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    contentStyle: {
                                        borderRadius: 10,
                                        border: '1px solid #E5E7EB',
                                        fontSize: 12
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this),
                                chartType === 'area' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DataComp, {
                                    type: "monotone",
                                    dataKey: chartMetric,
                                    stroke: "#6366F1",
                                    fill: "#EEF2FF",
                                    strokeWidth: 2,
                                    dot: false
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 358,
                                    columnNumber: 17
                                }, this),
                                chartType === 'bar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DataComp, {
                                    dataKey: chartMetric,
                                    fill: "#6366F1",
                                    radius: [
                                        4,
                                        4,
                                        0,
                                        0
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 361,
                                    columnNumber: 17
                                }, this),
                                chartType === 'line' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DataComp, {
                                    type: "monotone",
                                    dataKey: chartMetric,
                                    stroke: "#6366F1",
                                    strokeWidth: 2,
                                    dot: {
                                        r: 3,
                                        fill: '#6366F1'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/delivery/page.jsx",
                            lineNumber: 352,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mis-card",
                style: {
                    background: '#fff',
                    borderRadius: 14,
                    border: '1px solid #E5E7EB',
                    padding: '20px 24px',
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            marginBottom: 16,
                            flexWrap: 'wrap',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                title: "04 · Хүргэлтчний тайлан",
                                subtitle: `${agentList.length} хүргэлтч`
                            }, void 0, false, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            agentList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 12,
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: 160,
                                        height: 120,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                                    data: pieData,
                                                    cx: "50%",
                                                    cy: "50%",
                                                    innerRadius: 35,
                                                    outerRadius: 55,
                                                    paddingAngle: 2,
                                                    dataKey: "value",
                                                    children: pieData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                                            fill: entry.color
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/delivery/page.jsx",
                                                            lineNumber: 380,
                                                            columnNumber: 48
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    contentStyle: {
                                                        fontSize: 11,
                                                        borderRadius: 8
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/delivery/page.jsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 6
                                        },
                                        children: pieData.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 6,
                                                    fontSize: 12,
                                                    color: '#374151'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 10,
                                                            height: 10,
                                                            borderRadius: 3,
                                                            background: p.color,
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 388,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 389,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 600,
                                                            marginLeft: 'auto',
                                                            paddingLeft: 8
                                                        },
                                                        children: p.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, p.name, true, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 387,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        h: 160
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 397,
                        columnNumber: 20
                    }, this) : agentList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#9CA3AF',
                            padding: '32px 0',
                            fontSize: 14
                        },
                        children: "Хүргэлтч байхгүй байна"
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflowX: 'auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "mis-table",
                            style: {
                                width: '100%',
                                borderCollapse: 'collapse'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "#"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 404,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Хүргэлтч"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 405,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Нийт"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 406,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Амжилттай"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 407,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Амжилтгүй"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Амжилтын %"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Нийт дүн"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 410,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 403,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: agentList.map((a, i)=>{
                                        const rate = a.нийт ? Math.round(a.амжилттай / a.нийт * 100) : 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        color: '#9CA3AF'
                                                    },
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 418,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        fontWeight: 500,
                                                        color: '#111827'
                                                    },
                                                    children: a.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 419,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: fmt(a.нийт)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 420,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        color: '#059669'
                                                    },
                                                    children: fmt(a.амжилттай)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 421,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        color: '#DC2626'
                                                    },
                                                    children: fmt(a.амжилтгүй)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 422,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flex: 1,
                                                                    height: 6,
                                                                    background: '#F3F4F6',
                                                                    borderRadius: 4,
                                                                    overflow: 'hidden',
                                                                    minWidth: 60
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        height: '100%',
                                                                        width: `${rate}%`,
                                                                        background: rate >= 70 ? '#34D399' : rate >= 40 ? '#FBBF24' : '#F87171',
                                                                        borderRadius: 4
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                                    lineNumber: 426,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                                lineNumber: 425,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 12,
                                                                    color: '#6B7280',
                                                                    minWidth: 32
                                                                },
                                                                children: [
                                                                    rate,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                                lineNumber: 428,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 424,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 423,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: fmtMoney(a.дүн)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 431,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/delivery/page.jsx",
                                            lineNumber: 417,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/delivery/page.jsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/delivery/page.jsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mis-card",
                style: {
                    background: '#fff',
                    borderRadius: 14,
                    border: '1px solid #E5E7EB',
                    padding: '20px 24px',
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "05 · Deal жагсаалт",
                        subtitle: `Нийт ${fmt(filteredDeals.length)} хүргэлт`
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 10,
                            marginBottom: 14,
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "mis-input",
                                placeholder: "Хайх (ID, нэр...)",
                                value: dealSearch,
                                onChange: (e)=>setDealSearch(e.target.value),
                                style: {
                                    flex: 1,
                                    minWidth: 160
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "mis-input",
                                value: dealStageFilter,
                                onChange: (e)=>setDealStageFilter(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ALL",
                                        children: "Бүх stage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    STAGES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: s.id,
                                            children: s.label
                                        }, s.id, false, {
                                            fileName: "[project]/src/app/delivery/page.jsx",
                                            lineNumber: 458,
                                            columnNumber: 30
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        h: 200
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 461,
                        columnNumber: 20
                    }, this) : filteredDeals.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#9CA3AF',
                            padding: '32px 0',
                            fontSize: 14
                        },
                        children: "Үр дүн олдсонгүй"
                    }, void 0, false, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 462,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflowX: 'auto',
                            maxHeight: 400,
                            overflowY: 'auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "mis-table",
                                style: {
                                    width: '100%',
                                    borderCollapse: 'collapse'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        style: {
                                            position: 'sticky',
                                            top: 0,
                                            zIndex: 1
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                {
                                                    key: 'ID',
                                                    label: 'ID'
                                                },
                                                {
                                                    key: 'TITLE',
                                                    label: 'Гарчиг'
                                                },
                                                {
                                                    key: 'STAGE_ID',
                                                    label: 'Stage'
                                                },
                                                {
                                                    key: 'OPPORTUNITY',
                                                    label: 'Дүн'
                                                },
                                                {
                                                    key: 'ASSIGNED_BY_ID',
                                                    label: 'Хүргэлтч'
                                                },
                                                {
                                                    key: 'DATE_CREATE',
                                                    label: 'Огноо'
                                                }
                                            ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    onClick: ()=>setDealSort((s)=>({
                                                                key: col.key,
                                                                dir: s.key === col.key ? -s.dir : -1
                                                            })),
                                                    children: [
                                                        col.label,
                                                        " ",
                                                        dealSort.key === col.key ? dealSort.dir === -1 ? '↓' : '↑' : ''
                                                    ]
                                                }, col.key, true, {
                                                    fileName: "[project]/src/app/delivery/page.jsx",
                                                    lineNumber: 476,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/delivery/page.jsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: filteredDeals.slice(0, 100).map((d)=>{
                                            const sid = d.STAGE_ID?.replace(/^C10:/, '') || '';
                                            const stage = STAGES.find((s)=>sid.includes(s.id)) || STAGES[0];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            color: '#9CA3AF',
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: d.ID
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 488,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            fontWeight: 500,
                                                            color: '#111827',
                                                            maxWidth: 200,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: d.TITLE || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 489,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stage-pill",
                                                            style: {
                                                                background: stage.bg,
                                                                color: stage.color
                                                            },
                                                            children: stage.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/delivery/page.jsx",
                                                            lineNumber: 491,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 490,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            fontWeight: 500
                                                        },
                                                        children: fmtMoney(Number(d.OPPORTUNITY || 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 493,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: users[d.ASSIGNED_BY_ID] || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 494,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            color: '#6B7280'
                                                        },
                                                        children: (d.DATE_CREATE || '').slice(0, 10)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/delivery/page.jsx",
                                                        lineNumber: 495,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, d.ID, true, {
                                                fileName: "[project]/src/app/delivery/page.jsx",
                                                lineNumber: 487,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/delivery/page.jsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this),
                            filteredDeals.length > 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: '10px',
                                    fontSize: 12,
                                    color: '#9CA3AF'
                                },
                                children: [
                                    "Эхний 100 бичлэг харагдаж байна · Нийт ",
                                    fmt(filteredDeals.length)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/delivery/page.jsx",
                                lineNumber: 502,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/delivery/page.jsx",
                        lineNumber: 464,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '16px 0',
                    fontSize: 11,
                    color: '#D1D5DB'
                },
                children: "Akuma CEO Dashboard · Хүргэлт MIS · Bitrix24 category/10"
            }, void 0, false, {
                fileName: "[project]/src/app/delivery/page.jsx",
                lineNumber: 510,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/delivery/page.jsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16vyuvz._.js.map