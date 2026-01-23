module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/poradnik/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PoradnikPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-rsc] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-rsc] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-rsc] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
;
;
// --- Główne dane poradnika ---
const sections = [
    {
        id: 'wstęp',
        title: 'Wstęp: po co w ogóle obligacje?',
        paragraphs: [
            `Obligacje to fundament konserwatywnej części portfela inwestora. Dają stabilność, przewidywalny dochód i są narzędziem do ochrony kapitału — zwłaszcza jeśli porównamy je z akcjami czy kryptowalutami. Nie są to jednak „bezmyślne” lokaty: wystarczy zrozumieć kilka prostych zasad, żeby użyć ich bardziej inteligentnie niż przeciętny inwestor.`,
            `Ten poradnik to jeden, długi dokument — bez podstron — zoptymalizowany pod płynne ładowanie treści. Sekcje działają w trybie akordeonu (rozwijania/zwijania), co poprawia czytelność na małych ekranach.`
        ]
    },
    {
        id: 'jak-to-dziala',
        title: 'Jak działa obligacja — najprościej',
        paragraphs: [
            `Obligacja to po prostu dług: pożyczasz pieniądze emitentowi (państwu, firmie lub samorządowi), a emitent zobowiązuje się zwrócić kapitał po określonym czasie oraz zapłacić odsetki. W obligacjach skarbowych emitentem jest państwo, dlatego są one zwykle uważane za jedne z najbezpieczniejszych instrumentów. [Image of Bond structure]`,
            `Ważne elementy: nominał (kwota, którą otrzymasz na koniec), kupon (oprocentowanie lub sposób wyliczania odsetek), termin wykupu (kiedy dostaniesz z powrotem kapitał) oraz ewentualna indeksacja względem inflacji.`
        ]
    },
    {
        id: 'rodzaje',
        title: 'Rodzaje obligacji (przydatne rozróżnienia)',
        paragraphs: [
            `1) Obligacje stałokuponowe — płacą stały kupon przez cały czas trwania obligacji. Są przewidywalne, ale tracą na atrakcyjności, gdy rosną stopy procentowe.`,
            `2) Obligacje zerokuponowe — nie wypłacają odsetek w trakcie, lecz są sprzedawane z dyskontem i wykupowane po wartości nominalnej.`,
            `3) Obligacje indeksowane inflacją — kupon (lub część wartości) jest powiązany z wskaźnikiem inflacji. Chronią realną wartość kapitału.`,
            `4) Obligacje zmiennokuponowe — kupon odnawiany jest według określonego wskaźnika referencyjnego.`
        ]
    },
    {
        id: 'oprocentowanie',
        title: 'Oprocentowanie i jak je czytać',
        paragraphs: [
            `Gdy widzisz informację "oprocentowanie 3%" — dopytaj: czy to oprocentowanie brutto, netto, roczne, a może to jest oprocentowanie tylko pierwszego roku? W obligacjach rządowych często spotkasz konstrukcję: pierwszy rok stały X%, kolejne lata indeksowane inflacją + marża.`,
            `Realna stopa zwrotu to oprocentowanie nominalne minus inflacja. W praktyce interesuje Cię zawsze zysk realny (czy Twoje pieniądze faktycznie zyskują siłę nabywczą).`,
            `Podatek Belki (19%) odejmuje się od odsetek, więc pamiętaj, by uwzględnić go przy kalkulacjach zysków netto.`
        ]
    },
    {
        id: 'ryzyko',
        title: 'Jakie są ryzyka?',
        paragraphs: [
            `1) Ryzyko stopy procentowej — jeśli kupujesz obligacje o stałym kuponie, a stopy rynkowe rosną, cena Twojej obligacji spadnie na rynku wtórnym.`,
            `2) Ryzyko inflacji — bez indeksacji inflacja zje realną wartość odsetek i kapitału.`,
            `3) Ryzyko kredytowe (emitenta) — w przypadku obligacji korporacyjnych emitent może nie wywiązać się z płatności.`,
            `4) Ryzyko płynności — obligacje mogą być trudne do sprzedania w niektórych okresach lub wymagać sprzedaży ze stratą.`
        ]
    },
    {
        id: 'strategia-drabinka',
        title: 'Strategia drabinkowa (laddering) — dlaczego działa',
        paragraphs: [
            `Drabinka (ladder) to kupowanie obligacji o różnych terminach wykupu — np. 1 rok, 3 lata, 5 lat, 10 lat. Gdy krótka obligacja dojrzeje, reinwestujesz środki w nową obligację o długim terminie lub o lepszych warunkach.`,
            `Zalety: regularny dostęp do kapitału, mniejsze ryzyko błędnego timing'u stóp procentowych, dywersyfikacja terminowa. To popularna technika dla inwestorów, którzy chcą łączyć bezpieczeństwo z elastycznością.`
        ]
    },
    {
        id: 'podatki',
        title: 'Podatki i koszty ukryte',
        paragraphs: [
            `W Polsce od zysków kapitałowych obowiązuje podatek Belki (19%). Często jest on automatycznie potrącany przy rozliczeniach w biurach maklerskich lub przez instytucję finansową.`,
            `Dodatkowo zwróć uwagę na: prowizje platformy, opłaty za wcześniejszy wykup (jeśli obowiązują), spread przy sprzedaży na rynku wtórnym oraz ewentualne opłaty za przechowanie w systemie depozytowym.`
        ]
    },
    {
        id: 'płynność',
        title: 'Płynność i rynek wtórny',
        paragraphs: [
            `Nie wszystkie obligacje mają aktywny rynek wtórny. Obligacje skarbowe emitowane przez państwo zwykle są łatwiej zbywalne niż małe emisje korporacyjne.`,
            `Jeżeli planujesz możliwość wcześniejszej sprzedaży, sprawdź: czy emitent udostępnia oficjalny buy-back, jak wygląda obłożenie rynku i jakie są typowe spready.`
        ]
    },
    {
        id: 'jak-liczyc',
        title: 'Jak liczyć zyski — proste wzory i intuicja',
        paragraphs: [
            `Najprostsze: zysk nominalny = (wartość końcowa - wartość początkowa). Zysk netto = zysk nominalny - podatek Belki.`,
            `W obligacjach z kuponem: obliczasz sumę wypłaconych kuponów (po opodatkowaniu) oraz ewentualną różnicę między ceną zakupu a wartością nominalną przy wykupie.`,
            `Możesz użyć prostego przykładu: 10 000 PLN, kupon 4% rocznie → 400 PLN brutto rocznie → 324 PLN netto po podatku (400 \times 0.81).`
        ]
    },
    {
        id: 'najczestsze-bledy',
        title: 'Najczęstsze błędy początkujących',
        paragraphs: [
            `• Ignorowanie inflacji — patrzenie tylko na procent bez uwzględnienia siły nabywczej.`,
            `• Kupowanie jednego instrumentu na całą kwotę — brak dywersyfikacji terminowej i emitentów.`,
            `• Nieczytanie warunków emisji — szczegóły o wcześniejszym wykupie, indeksacji czy prowizjach mogą znacząco zmienić wynik.`,
            `• Próbując "złapać timing" rynku stóp procentowych, możesz sprzedać za wcześnie lub kupić w niekorzystnym momencie.`
        ]
    }
];
function deepTextBlock1() {
    const txt = [];
    txt.push(`Przykład 1 — defenzyna drabinka: Jan ma 40 000 PLN i chce bezpiecznie zarabiać, jednocześnie zachowując dostęp do części kapitału co roku. Tworzy drabinkę: 10k na 1 rok, 10k na 3 lata, 10k na 5 lat, 10k na 10 lat. Każdego roku jedna z krótszych obligacji dojrzewa — Jan reinwestuje część lub całość środków w nową serię na 10 lat lub w krótszą, zależnie od sytuacji rynkowej.`);
    txt.push(`Przykład 2 — ochrona przed inflacją: Maria inwestuje głównie w obligacje indeksowane inflacją, bo oczekuje, że inflacja w najbliższych latach utrzyma się powyżej stopy nominalnej rynku. Jej cel to zachowanie siły nabywczej przy umiarkowanym realnym zysku.`);
    txt.push(`Przykład 3 — agresywnie konserwatywny: Piotr łączy obligacje korporacyjne o wyższej stopie z bezpiecznymi obligacjami skarbowymi, obniżając ogólne ryzyko kredytowe przez dywersyfikację emitentów.`);
    return txt;
}
// --- Komponent AccordionSection: rozwijana sekcja (bez lazy loading, bo mamy dużo sekcji) ---
function AccordionSection({ id, title, paragraphs, index }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    // Używamy scrollHeight dla płynnej animacji rozwijania
    const height = isOpen ? contentRef.current?.scrollHeight : 0;
    // Stały, jasny niebieski dla zamkniętego kafelka
    const closedBackground = '#E0F0FF';
    const openBackground = '#fff';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        style: {
            paddingTop: '10px',
            paddingBottom: '10px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: isOpen ? openBackground : closedBackground,
                padding: '26px',
                borderRadius: '18px',
                // Cień bardziej widoczny, gdy kafelek jest aktywny
                boxShadow: isOpen ? '0 8px 30px rgba(0, 113, 227, 0.15)' : '0 4px 15px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                boxSizing: 'border-box',
                transition: 'background 0.3s, box-shadow 0.3s'
            },
            onClick: ()=>setIsOpen(!isOpen),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: '#1D1D1F',
                        marginBottom: isOpen ? '15px' : '0',
                        transition: 'margin-bottom 0.3s ease-in-out'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
                                fontWeight: 700,
                                margin: 0,
                                paddingRight: '15px'
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/poradnik/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transition: 'transform 0.3s ease-in-out',
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                color: '#0071E3'
                            },
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                size: 24,
                                style: {
                                    minWidth: '24px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/poradnik/page.tsx",
                                lineNumber: 153,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 24,
                                style: {
                                    minWidth: '24px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/poradnik/page.tsx",
                                lineNumber: 154,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/poradnik/page.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/poradnik/page.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: contentRef,
                    style: {
                        overflow: 'hidden',
                        height: height || 0,
                        transition: 'height 0.3s ease-in-out',
                        color: '#333'
                    },
                    children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            lineHeight: 1.65
                        },
                        children: paragraphs.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0
                                },
                                children: p
                            }, i, false, {
                                fileName: "[project]/app/poradnik/page.tsx",
                                lineNumber: 173,
                                columnNumber: 21
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/poradnik/page.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/poradnik/page.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/poradnik/page.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/poradnik/page.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
function PoradnikPage() {
    // Mockowe dane do pokazania pięknego kafelka z gradientem
    const mockWyniki = {
        total: 34500.55,
        duration: 5
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", sans-serif',
            color: '#1D1D1F',
            backgroundColor: '#F5F5F7',
            minHeight: '100vh',
            paddingBottom: '120px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    padding: '18px',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'sticky',
                    top: 0,
                    zIndex: 120,
                    background: 'rgba(255,255,255,0.88)',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    backdropFilter: 'blur(14px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        maxWidth: '980px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            style: {
                                textDecoration: 'none',
                                color: '#1D1D1F',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.95rem',
                                fontWeight: 600
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    size: 18,
                                    color: "#0071E3"
                                }, void 0, false, {
                                    fileName: "[project]/app/poradnik/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                " Obligacje.tech"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/poradnik/page.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#86868b',
                                    fontSize: '0.9rem'
                                },
                                children: "Przewodnik — akordeon"
                            }, void 0, false, {
                                fileName: "[project]/app/poradnik/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/poradnik/page.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/poradnik/page.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/poradnik/page.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    maxWidth: '900px',
                    margin: '36px auto',
                    padding: '0 20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '28px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                                    fontWeight: 700
                                },
                                children: "Interaktywny poradnik o obligacjach"
                            }, void 0, false, {
                                fileName: "[project]/app/poradnik/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#86868b',
                                    marginTop: '8px',
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                                },
                                children: "Kliknij, aby rozwinąć sekcję i dowiedzieć się więcej."
                            }, void 0, false, {
                                fileName: "[project]/app/poradnik/page.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/poradnik/page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        },
                        children: sections.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {
                                id: s.id,
                                title: s.title,
                                paragraphs: s.paragraphs,
                                index: i
                            }, s.id, false, {
                                fileName: "[project]/app/poradnik/page.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/poradnik/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {
                        id: "deep-1",
                        title: "Rynek obligacji w praktyce — case studies",
                        paragraphs: deepTextBlock1(),
                        index: sections.length
                    }, void 0, false, {
                        fileName: "[project]/app/poradnik/page.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '40px',
                            textAlign: 'center',
                            background: 'linear-gradient(180deg, rgba(245,245,247,0) 0%, #F5F5F7 20%, #F5F5F7 100%)',
                            paddingTop: '60px',
                            paddingBottom: '20px',
                            position: 'sticky',
                            bottom: 0,
                            zIndex: 100
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                onClick: (e)=>e.preventDefault(),
                                style: {
                                    textDecoration: 'none'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'inline-block',
                                        padding: '16px 32px',
                                        borderRadius: '14px',
                                        // Nowy, wyraźny gradient dla przycisku
                                        background: 'linear-gradient(135deg, #0071E3 0%, #00C7BE 100%)',
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        boxShadow: '0 8px 25px rgba(0, 113, 227, 0.4)',
                                        transition: 'transform 0.2s'
                                    },
                                    onMouseOver: (e)=>e.currentTarget.style.transform = 'scale(1.02)',
                                    onMouseOut: (e)=>e.currentTarget.style.transform = 'scale(1)',
                                    children: [
                                        "Przejdź do kalkulatora",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 18,
                                            style: {
                                                marginLeft: '12px',
                                                verticalAlign: 'middle'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/poradnik/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/poradnik/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/poradnik/page.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#86868b',
                                    marginTop: '12px',
                                    fontSize: '0.95rem'
                                },
                                children: "Zacznij od razu i sprawdź potencjał swojego kapitału."
                            }, void 0, false, {
                                fileName: "[project]/app/poradnik/page.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/poradnik/page.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/poradnik/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/poradnik/page.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/poradnik/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/poradnik/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f770bdb7._.js.map