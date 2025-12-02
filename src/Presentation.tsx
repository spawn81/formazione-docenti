import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, AlertTriangle, Target, Lightbulb, GraduationCap } from 'lucide-react';

const Presentation = ({ handleDownload }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Prompt Efficaci per la Didattica",
            subtitle: "Competenza professionale per l'uso responsabile dell'IA",
            icon: BookOpen,
            content: null
        },
        {
            title: "Perché i prompt efficaci sono essenziali",
            icon: AlertTriangle,
            content: (
                <div className="space-y-4">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50">
                        <p className="font-semibold text-red-800">Le IA non sono perfette!</p>
                        <p className="mt-2 text-red-700">Hanno limiti intrinseci che possono produrre risultati problematici</p>
                    </div>
                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                        <p className="font-semibold text-blue-800">Il prompt efficace è:</p>
                        <ul className="mt-2 space-y-1 text-blue-700 list-disc list-inside">
                            <li>Una competenza professionale essenziale</li>
                            <li>Un filtro di qualità pedagogica</li>
                            <li>Uno strumento di controllo e responsabilità</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Difetto #1: Allucinazioni",
            icon: AlertTriangle,
            content: (
                <div className="space-y-4">
                    <div className="p-4 rounded bg-yellow-50">
                        <p className="font-semibold text-yellow-900">Il problema:</p>
                        <p className="text-yellow-800">L'IA può inventare date, fatti storici, citazioni, dati statistici</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-red-100 rounded">
                            <p className="mb-2 font-semibold text-red-800">❌ Prompt generico:</p>
                            <p className="text-sm text-red-700">"Parlami della riforma scolastica del 2015"</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded">
                            <p className="mb-2 font-semibold text-green-800">✅ Prompt efficace:</p>
                            <p className="text-sm text-green-700">"Analizza la Legge 107/2015. Se non ricordi dettagli specifici, indicalo chiaramente"</p>
                        </div>
                    </div>
                    <div className="p-3 rounded bg-blue-50">
                        <p className="font-semibold text-blue-900">Strategie:</p>
                        <ul className="space-y-1 text-sm text-blue-800 list-disc list-inside">
                            <li>Chiedi di citare quando non è certa</li>
                            <li>Richiedi fonti verificabili</li>
                            <li>VERIFICA SEMPRE prima di usare con studenti</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Difetto #2: Mancanza di contesto",
            icon: AlertTriangle,
            content: (
                <div className="space-y-4">
                    <div className="p-4 rounded bg-yellow-50">
                        <p className="font-semibold text-yellow-900">Il problema:</p>
                        <p className="text-yellow-800">L'IA non conosce il tuo contesto specifico, il livello della classe, le dinamiche, le risorse disponibili</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-red-100 rounded">
                            <p className="mb-2 font-semibold text-red-800">❌ Generico:</p>
                            <p className="text-sm text-red-700">"Crea una lezione sulla Divina Commedia"</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded">
                            <p className="mb-2 font-semibold text-green-800">✅ Contestualizzato:</p>
                            <p className="text-sm text-green-700">"Lezione per liceo professionale, terza classe con difficoltà di lettura, 2 ore, con LIM, pochi libri"</p>
                        </div>
                    </div>
                    <div className="p-3 mt-4 rounded bg-blue-50">
                        <p className="font-bold text-blue-900">Il contesto dettagliato trasforma risposte generiche in materiali utilizzabili</p>
                    </div>
                </div>
            )
        },
        {
            title: "Difetto #3: Bias e stereotipi",
            icon: AlertTriangle,
            content: (
                <div className="space-y-4">
                    <div className="p-4 rounded bg-yellow-50">
                        <p className="font-semibold text-yellow-900">Il problema:</p>
                        <p className="text-yellow-800">L'IA può riprodurre stereotipi di genere, rappresentazioni culturali limitate, linguaggio non inclusivo</p>
                    </div>
                    <div className="p-4 bg-green-100 rounded">
                        <p className="mb-2 font-semibold text-green-800">✅ Prompt inclusivo:</p>
                        <p className="text-sm text-green-700">"Crea esempi assicurandoti di:</p>
                        <ul className="mt-2 ml-4 space-y-1 text-sm text-green-700 list-disc list-inside">
                            <li>Rappresentare generi in ruoli diversificati</li>
                            <li>Includere nomi di diverse origini</li>
                            <li>Evitare stereotipi</li>
                            <li>Mostrare diverse configurazioni familiari"</li>
                        </ul>
                    </div>
                    <div className="p-3 rounded bg-blue-50">
                        <p className="font-bold text-blue-900">Chiedere esplicitamente inclusività fa la differenza</p>
                    </div>
                </div>
            )
        },
        {
            title: "Difetto #4: Assenza di giudizio pedagogico",
            icon: AlertTriangle,
            content: (
                <div className="space-y-4">
                    <div className="p-4 rounded bg-yellow-50">
                        <p className="font-semibold text-yellow-900">Il problema:</p>
                        <p className="text-yellow-800">L'IA non sa valutare appropriatezza per età, tempi realistici, difficoltà graduata, principi pedagogici</p>
                    </div>
                    <div className="p-4 bg-green-100 rounded">
                        <p className="mb-2 font-semibold text-green-800">✅ Con expertise pedagogica:</p>
                        <p className="text-sm text-green-700">"Attività sulle frazioni per quarta primaria considerando che:</p>
                        <ul className="mt-2 ml-4 space-y-1 text-sm text-green-700 list-disc list-inside">
                            <li>Prima lezione sull'argomento</li>
                            <li>Conoscono già i decimali</li>
                            <li>50 minuti effettivi</li>
                            <li>Serve manipolazione prima dell'astrazione"</li>
                        </ul>
                    </div>
                    <div className="p-3 rounded bg-blue-50">
                        <p className="font-bold text-blue-900">TU apporti l'expertise pedagogica che l'IA non ha</p>
                    </div>
                </div>
            )
        },
        {
            title: "Difetto #5: Superficialità",
            icon: AlertTriangle,
            content: (
                <div className="space-y-4">
                    <div className="p-4 rounded bg-yellow-50">
                        <p className="font-semibold text-yellow-900">Il problema:</p>
                        <p className="text-yellow-800">Contenuti prevedibili, spiegazioni standardizzate, attività poco coinvolgenti</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-red-100 rounded">
                            <p className="mb-2 font-semibold text-red-800">❌ Superficiale:</p>
                            <p className="text-sm text-red-700">"Spiega la fotosintesi"</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded">
                            <p className="mb-2 font-semibold text-green-800">✅ Specifico e profondo:</p>
                            <p className="text-sm text-green-700">"Spiega con analogia di una fabbrica, specificando materie prime, processi, prodotti. Poi 3 domande di pensiero critico"</p>
                        </div>
                    </div>
                    <div className="p-3 mt-4 rounded bg-blue-50">
                        <p className="font-bold text-blue-900">La specificità genera qualità</p>
                    </div>
                </div>
            )
        },
        {
            title: "Il prompt come filtro professionale",
            icon: Target,
            content: (
                <div className="space-y-6">
                    <div className="p-6 rounded-lg bg-linear-to-r from-blue-50 to-purple-50">
                        <div className="flex items-center justify-center space-x-4 text-lg font-semibold">
                            <span className="px-4 py-2 bg-red-100 rounded">INPUT GREZZO (IA)</span>
                            <span>→</span>
                            <span className="px-4 py-2 bg-yellow-100 rounded">FILTRO (Prompt)</span>
                            <span>→</span>
                            <span className="px-4 py-2 bg-green-100 rounded">OUTPUT PEDAGOGICO</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded bg-red-50">
                            <p className="mb-2 font-semibold text-red-800">Senza filtro passano:</p>
                            <ul className="space-y-1 text-red-700 list-disc list-inside">
                                <li>Imprecisioni</li>
                                <li>Stereotipi</li>
                                <li>Superficialità</li>
                                <li>Materiali inadeguati</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded bg-green-50">
                            <p className="mb-2 font-semibold text-green-800">Con filtro passano:</p>
                            <ul className="space-y-1 text-green-700 list-disc list-inside">
                                <li>Contenuti verificabili</li>
                                <li>Materiali contestualizzati</li>
                                <li>Approcci inclusivi</li>
                                <li>Attività pedagogiche</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Tre regole d'oro per docenti",
            icon: GraduationCap,
            content: (
                <div className="space-y-4">
                    <div className="p-4 bg-blue-100 border-l-4 border-blue-600">
                        <p className="text-lg font-bold text-blue-900">1. Non delegare il pensiero pedagogico</p>
                        <p className="mt-2 text-blue-800">L'IA genera, tu decidi. Il prompt deve contenere la tua expertise, non sostituirla</p>
                    </div>
                    <div className="p-4 bg-green-100 border-l-4 border-green-600">
                        <p className="text-lg font-bold text-green-900">2. Verifica sempre</p>
                        <p className="mt-2 text-green-800">Anche il miglior prompt non garantisce perfezione. Controlla fatti, adeguatezza, inclusività</p>
                    </div>
                    <div className="p-4 bg-purple-100 border-l-4 border-purple-600">
                        <p className="text-lg font-bold text-purple-900">3. Itera e personalizza</p>
                        <p className="mt-2 text-purple-800">La prima risposta è una bozza. Raffina, adatta, rendi tuo il materiale</p>
                    </div>
                </div>
            )
        },
        {
            title: "Principi base dei prompt efficaci",
            icon: Lightbulb,
            content: (
                <div className="space-y-3">
                    <div className="p-3 rounded bg-blue-50">
                        <p className="font-semibold text-blue-900">1. Sii chiaro e specifico</p>
                        <p className="text-sm text-blue-800">Evita ambiguità, specifica formato e lunghezza desiderata</p>
                    </div>
                    <div className="p-3 rounded bg-green-50">
                        <p className="font-semibold text-green-900">2. Fornisci contesto</p>
                        <p className="text-sm text-green-800">Spiega perché, indica il pubblico, specifica il tono</p>
                    </div>
                    <div className="p-3 rounded bg-purple-50">
                        <p className="font-semibold text-purple-900">3. Usa esempi</p>
                        <p className="text-sm text-purple-800">Gli esempi guidano l'IA meglio delle descrizioni astratte</p>
                    </div>
                    <div className="p-3 rounded bg-yellow-50">
                        <p className="font-semibold text-yellow-900">4. Chiedi ragionamento passo-passo</p>
                        <p className="text-sm text-yellow-800">Migliora la qualità delle risposte complesse</p>
                    </div>
                    <div className="p-3 rounded bg-pink-50">
                        <p className="font-semibold text-pink-900">5. Itera e raffina</p>
                        <p className="text-sm text-pink-800">Chiedi modifiche specifiche invece di giudizi generici</p>
                    </div>
                </div>
            )
        },
        {
            title: "Tecniche avanzate",
            icon: Target,
            content: (
                <div className="space-y-3">
                    <div className="p-3 rounded bg-indigo-50">
                        <p className="font-semibold text-indigo-900">Prompt a catena (Chain-of-thought)</p>
                        <p className="text-sm italic text-indigo-800">"Prima analizza X, poi considera Y, infine conclude con Z"</p>
                    </div>
                    <div className="p-3 rounded bg-teal-50">
                        <p className="font-semibold text-teal-900">Assegnazione di ruoli</p>
                        <p className="text-sm italic text-teal-800">"Agisci come un esperto di biologia marina con 20 anni di esperienza..."</p>
                    </div>
                    <div className="p-3 rounded bg-orange-50">
                        <p className="font-semibold text-orange-900">Vincoli creativi</p>
                        <p className="text-sm italic text-orange-800">"Scrivi una spiegazione usando solo analogie tratte dallo sport"</p>
                    </div>
                    <div className="p-3 rounded bg-red-50">
                        <p className="font-semibold text-red-900">Prompt negativi</p>
                        <p className="text-sm italic text-red-800">"Spiega senza usare termini tecnici"</p>
                    </div>
                </div>
            )
        },
        {
            title: "Prompt per creare lezioni",
            icon: BookOpen,
            content: (
                <div className="p-4 rounded-lg bg-linear-to-brrom-blue-50 to-indigo-50">
                    <p className="mb-3 font-semibold text-gray-800">Template completo:</p>
                    <div className="p-4 text-sm bg-white border-l-4 border-blue-500 rounded">
                        <p className="font-mono text-gray-700">"Crea una lezione di 45 minuti su [argomento] per studenti di [età/livello].</p>
                        <p className="mt-2 font-mono text-gray-700">Includi:</p>
                        <ul className="mt-2 ml-4 space-y-1 font-mono text-gray-600 list-disc list-inside">
                            <li>Obiettivi di apprendimento chiari</li>
                            <li>Attività di warm-up (5 min)</li>
                            <li>Spiegazione principale (20 min)</li>
                            <li>Attività pratica (15 min)</li>
                            <li>Verifica finale (5 min)"</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Prompt per differenziare",
            icon: BookOpen,
            content: (
                <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-linear-to-br from-green-50 to-emerald-50">
                        <p className="mb-3 font-semibold text-gray-800">Per diversi livelli:</p>
                        <div className="p-4 text-sm bg-white border-l-4 border-green-500 rounded">
                            <p className="font-mono text-gray-700">"Spiega [concetto] in tre versioni:</p>
                            <ul className="mt-2 ml-4 space-y-1 font-mono text-gray-600 list-decimal list-inside">
                                <li>Base - per studenti con difficoltà</li>
                                <li>Intermedio - livello standard</li>
                                <li>Avanzato - per studenti eccellenti"</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-3 rounded bg-purple-50">
                        <p className="font-semibold text-purple-900">Per studenti BES/DSA:</p>
                        <p className="mt-1 text-sm text-purple-800">Specifica: frasi brevi, concetti chiave evidenziati, supporti visivi, strumenti compensativi</p>
                    </div>
                </div>
            )
        },
        {
            title: "Prompt per verifiche",
            icon: BookOpen,
            content: (
                <div className="p-4 rounded-lg bg-linear-to-brrom-yellow-50 to-amber-50">
                    <p className="mb-3 font-semibold text-gray-800">Template per valutazione:</p>
                    <div className="p-4 text-sm bg-white border-l-4 border-yellow-500 rounded">
                        <p className="font-mono text-gray-700">"Crea 5 domande su [argomento]:</p>
                        <ul className="mt-2 ml-4 space-y-1 font-mono text-gray-600 list-disc list-inside">
                            <li>2 a risposta multipla (livello conoscenza)</li>
                            <li>2 a risposta breve (livello comprensione)</li>
                            <li>1 aperta (livello analisi/sintesi)</li>
                        </ul>
                        <p className="mt-2 font-mono text-gray-700">Include le risposte corrette e i criteri di valutazione"</p>
                    </div>
                </div>
            )
        },
        {
            title: "Prompt per attività collaborative",
            icon: BookOpen,
            content: (
                <div className="p-4 rounded-lg bg-linear-to-br from-teal-50 to-cyan-50">
                    <p className="mb-3 font-semibold text-gray-800">Per lavoro di gruppo:</p>
                    <div className="p-4 text-sm bg-white border-l-4 border-teal-500 rounded">
                        <p className="font-mono text-gray-700">"Progetta un'attività di gruppo su [tema] per 4 studenti che richieda:</p>
                        <ul className="mt-2 ml-4 space-y-1 font-mono text-gray-600 list-disc list-inside">
                            <li>Ruoli specifici per ciascuno</li>
                            <li>Un problema reale da risolvere</li>
                            <li>Durata 30 minuti</li>
                            <li>Un prodotto finale concreto"</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Esempio pratico completo",
            icon: GraduationCap,
            content: (
                <div className="p-4 rounded-lg bg-linear-to-br from-indigo-50 to-purple-50">
                    <div className="p-4 bg-white rounded shadow-md">
                        <p className="text-sm leading-relaxed text-gray-800">
                            <span className="font-semibold">"Sono un insegnante di storia del biennio superiore.</span> Devo introdurre la Rivoluzione Industriale a una classe seconda con 2 studenti BES (con difficoltà di comprensione del testo), 3 studenti non italofoni (livello A2-B1), e livelli molto eterogenei. Ho a disposizione 2 ore consecutive e una LIM.
                        </p>
                        <p className="mt-3 text-sm font-semibold text-gray-800">Crea:</p>
                        <ul className="mt-2 ml-4 space-y-2 text-sm text-gray-700 list-decimal list-inside">
                            <li>Un'attività di aggancio iniziale (15 min) visuale che colleghi la rivoluzione industriale a oggetti/tecnologie di oggi</li>
                            <li>Una spiegazione multilivello con: mappa concettuale semplificata, glossario essenziale, fonti primarie con linguaggio adattato</li>
                            <li>Un'attività di gruppo (40 min) con ruoli chiari dove analizzare aspetti diversi tramite immagini, grafici e brevi testi</li>
                            <li>Materiali differenziati per BES (schemi guidati) e non italofoni (glossario bilingue suggerito)</li>
                            <li>Griglia di valutazione che valorizzi competenze diverse (verbale, visuale, collaborativa)"</li>
                        </ul>
                    </div>
                    <div className="p-3 mt-4 bg-blue-100 rounded">
                        <p className="text-sm font-semibold text-blue-900">Questo prompt include: livello scolastico, BES e non italofoni, tempi reali, supporti visivi, differenziazione inclusiva, valutazione equa</p>
                    </div>
                </div>
            )
        },
        {
            title: "Conclusione",
            icon: Target,
            content: (
                <div className="space-y-4">
                    <div className="p-6 rounded-lg bg-linear-to-r from-blue-100 to-purple-100">
                        <p className="mb-4 text-xl font-bold text-center text-gray-800">Il prompt efficace è dove si esprime la vostra maestria professionale</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded bg-yellow-50">
                            <p className="font-semibold text-yellow-900">L'IA è uno strumento:</p>
                            <ul className="mt-2 space-y-1 text-sm text-yellow-800 list-disc list-inside">
                                <li>Potente ma grezzo</li>
                                <li>Ha bisogno di guida</li>
                                <li>Non sostituisce il docente</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded bg-green-50">
                            <p className="font-semibold text-green-900">Il docente è essenziale per:</p>
                            <ul className="mt-2 space-y-1 text-sm text-green-800 list-disc list-inside">
                                <li>Giudizio pedagogico</li>
                                <li>Contestualizzazione</li>
                                <li>Verifica e qualità</li>
                                <li>Dimensione umana</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 text-center text-white bg-blue-600 rounded-lg">
                        <p className="text-lg font-bold">Trucco finale: chiedi all'IA come migliorare i tuoi prompt!</p>
                    </div>
                </div>
            )
        },
        {
            title: "Grazie per l'attenzione!",
            icon: GraduationCap,
            content: (
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <div className="space-y-4 text-center">
                        <p className="text-2xl font-bold text-gray-800">
                            Grazie per aver partecipato!
                        </p>
                        <p className="text-xl text-gray-600">
                            Continuate a sperimentare con i prompt e ricordate: la vostra esperienza pedagogica è insostituibile
                        </p>
                    </div>

                    <div className="p-8 shadow-lg bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl">
                        <p className="mb-4 text-lg font-semibold text-center text-gray-800">
                            Scarica la guida completa con esempi di prompt
                        </p>
                        <button
                            onClick={handleDownload}
                            className="flex items-center justify-center w-full gap-3 px-8 py-4 text-lg font-semibold text-white transition-colors bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Scarica "suggerimentiPrompt.pdf"
                        </button>
                    </div>

                    <div className="text-sm text-center text-gray-500">
                        <p>Per domande o approfondimenti, non esitate a contattarci</p>
                    </div>
                </div>
            )
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const CurrentIcon = slides[currentSlide].icon;

    return (
        <div className="min-h-screen p-4 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="max-w-5xl mx-auto">
                {/* Slide principale */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 min-h-[500px] flex flex-col">
                    {/* Header slide */}
                    <div className="flex items-center gap-4 pb-4 mb-6 border-b-2 border-gray-200">
                        {CurrentIcon && <CurrentIcon className="w-10 h-10 text-indigo-600" />}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-800">{slides[currentSlide].title}</h1>
                            {slides[currentSlide].subtitle && (
                                <p className="mt-1 text-lg text-gray-600">{slides[currentSlide].subtitle}</p>
                            )}
                        </div>
                        <div className="text-sm font-semibold text-gray-500">
                            {currentSlide + 1} / {slides.length}
                        </div>
                    </div>

                    {/* Contenuto slide */}
                    <div className="flex-1 overflow-y-auto">
                        {slides[currentSlide].content}
                    </div>
                </div>

                {/* Controlli navigazione */}
                <div className="flex items-center justify-between gap-4">
                    <button
                        onClick={prevSlide}
                        className="flex items-center gap-2 px-6 py-3 text-white transition-colors bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentSlide === 0}
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Precedente
                    </button>

                    {/* Indicatori slide */}
                    <div className="flex max-w-md gap-2 overflow-x-auto">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                                    ? 'bg-indigo-600 w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Vai alla slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="flex items-center gap-2 px-6 py-3 text-white transition-colors bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentSlide === slides.length - 1}
                    >
                        Successiva
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Info footer */}
                <div className="mt-4 text-sm text-center text-gray-600">
                    Usa le frecce o clicca sui pallini per navigare • Premi ESC per uscire dalla modalità presentazione
                </div>
            </div>
        </div>
    );
};

export default Presentation;