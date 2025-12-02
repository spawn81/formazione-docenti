import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, AlertTriangle, Target, Lightbulb, GraduationCap } from 'lucide-react';

const Presentation = () => {
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
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="font-semibold text-red-800">Le IA non sono perfette!</p>
            <p className="text-red-700 mt-2">Hanno limiti intrinseci che possono produrre risultati problematici</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold text-blue-800">Il prompt efficace è:</p>
            <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
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
          <div className="bg-yellow-50 p-4 rounded">
            <p className="font-semibold text-yellow-900">Il problema:</p>
            <p className="text-yellow-800">L'IA può inventare date, fatti storici, citazioni, dati statistici</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-100 p-3 rounded">
              <p className="text-red-800 font-semibold mb-2">❌ Prompt generico:</p>
              <p className="text-sm text-red-700">"Parlami della riforma scolastica del 2015"</p>
            </div>
            <div className="bg-green-100 p-3 rounded">
              <p className="text-green-800 font-semibold mb-2">✅ Prompt efficace:</p>
              <p className="text-sm text-green-700">"Analizza la Legge 107/2015. Se non ricordi dettagli specifici, indicalo chiaramente"</p>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <p className="font-semibold text-blue-900">Strategie:</p>
            <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
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
          <div className="bg-yellow-50 p-4 rounded">
            <p className="font-semibold text-yellow-900">Il problema:</p>
            <p className="text-yellow-800">L'IA non conosce il tuo contesto specifico, il livello della classe, le dinamiche, le risorse disponibili</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-100 p-3 rounded">
              <p className="text-red-800 font-semibold mb-2">❌ Generico:</p>
              <p className="text-sm text-red-700">"Crea una lezione sulla Divina Commedia"</p>
            </div>
            <div className="bg-green-100 p-3 rounded">
              <p className="text-green-800 font-semibold mb-2">✅ Contestualizzato:</p>
              <p className="text-sm text-green-700">"Lezione per liceo professionale, terza classe con difficoltà di lettura, 2 ore, con LIM, pochi libri"</p>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded mt-4">
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
          <div className="bg-yellow-50 p-4 rounded">
            <p className="font-semibold text-yellow-900">Il problema:</p>
            <p className="text-yellow-800">L'IA può riprodurre stereotipi di genere, rappresentazioni culturali limitate, linguaggio non inclusivo</p>
          </div>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-800 font-semibold mb-2">✅ Prompt inclusivo:</p>
            <p className="text-sm text-green-700">"Crea esempi assicurandoti di:</p>
            <ul className="list-disc list-inside text-green-700 text-sm ml-4 mt-2 space-y-1">
              <li>Rappresentare generi in ruoli diversificati</li>
              <li>Includere nomi di diverse origini</li>
              <li>Evitare stereotipi</li>
              <li>Mostrare diverse configurazioni familiari"</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-3 rounded">
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
          <div className="bg-yellow-50 p-4 rounded">
            <p className="font-semibold text-yellow-900">Il problema:</p>
            <p className="text-yellow-800">L'IA non sa valutare appropriatezza per età, tempi realistici, difficoltà graduata, principi pedagogici</p>
          </div>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-800 font-semibold mb-2">✅ Con expertise pedagogica:</p>
            <p className="text-sm text-green-700">"Attività sulle frazioni per quarta primaria considerando che:</p>
            <ul className="list-disc list-inside text-green-700 text-sm ml-4 mt-2 space-y-1">
              <li>Prima lezione sull'argomento</li>
              <li>Conoscono già i decimali</li>
              <li>50 minuti effettivi</li>
              <li>Serve manipolazione prima dell'astrazione"</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-3 rounded">
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
          <div className="bg-yellow-50 p-4 rounded">
            <p className="font-semibold text-yellow-900">Il problema:</p>
            <p className="text-yellow-800">Contenuti prevedibili, spiegazioni standardizzate, attività poco coinvolgenti</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-100 p-3 rounded">
              <p className="text-red-800 font-semibold mb-2">❌ Superficiale:</p>
              <p className="text-sm text-red-700">"Spiega la fotosintesi"</p>
            </div>
            <div className="bg-green-100 p-3 rounded">
              <p className="text-green-800 font-semibold mb-2">✅ Specifico e profondo:</p>
              <p className="text-sm text-green-700">"Spiega con analogia di una fabbrica, specificando materie prime, processi, prodotti. Poi 3 domande di pensiero critico"</p>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded mt-4">
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
          <div className="bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <div className="flex items-center justify-center space-x-4 text-lg font-semibold">
              <span className="bg-red-100 px-4 py-2 rounded">INPUT GREZZO (IA)</span>
              <span>→</span>
              <span className="bg-yellow-100 px-4 py-2 rounded">FILTRO (Prompt)</span>
              <span>→</span>
              <span className="bg-green-100 px-4 py-2 rounded">OUTPUT PEDAGOGICO</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">Senza filtro passano:</p>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li>Imprecisioni</li>
                <li>Stereotipi</li>
                <li>Superficialità</li>
                <li>Materiali inadeguati</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">Con filtro passano:</p>
              <ul className="list-disc list-inside text-green-700 space-y-1">
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
          <div className="bg-blue-100 border-l-4 border-blue-600 p-4">
            <p className="font-bold text-blue-900 text-lg">1. Non delegare il pensiero pedagogico</p>
            <p className="text-blue-800 mt-2">L'IA genera, tu decidi. Il prompt deve contenere la tua expertise, non sostituirla</p>
          </div>
          <div className="bg-green-100 border-l-4 border-green-600 p-4">
            <p className="font-bold text-green-900 text-lg">2. Verifica sempre</p>
            <p className="text-green-800 mt-2">Anche il miglior prompt non garantisce perfezione. Controlla fatti, adeguatezza, inclusività</p>
          </div>
          <div className="bg-purple-100 border-l-4 border-purple-600 p-4">
            <p className="font-bold text-purple-900 text-lg">3. Itera e personalizza</p>
            <p className="text-purple-800 mt-2">La prima risposta è una bozza. Raffina, adatta, rendi tuo il materiale</p>
          </div>
        </div>
      )
    },
    {
      title: "Principi base dei prompt efficaci",
      icon: Lightbulb,
      content: (
        <div className="space-y-3">
          <div className="bg-blue-50 p-3 rounded">
            <p className="font-semibold text-blue-900">1. Sii chiaro e specifico</p>
            <p className="text-sm text-blue-800">Evita ambiguità, specifica formato e lunghezza desiderata</p>
          </div>
          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-900">2. Fornisci contesto</p>
            <p className="text-sm text-green-800">Spiega perché, indica il pubblico, specifica il tono</p>
          </div>
          <div className="bg-purple-50 p-3 rounded">
            <p className="font-semibold text-purple-900">3. Usa esempi</p>
            <p className="text-sm text-purple-800">Gli esempi guidano l'IA meglio delle descrizioni astratte</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded">
            <p className="font-semibold text-yellow-900">4. Chiedi ragionamento passo-passo</p>
            <p className="text-sm text-yellow-800">Migliora la qualità delle risposte complesse</p>
          </div>
          <div className="bg-pink-50 p-3 rounded">
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
          <div className="bg-indigo-50 p-3 rounded">
            <p className="font-semibold text-indigo-900">Prompt a catena (Chain-of-thought)</p>
            <p className="text-sm text-indigo-800 italic">"Prima analizza X, poi considera Y, infine conclude con Z"</p>
          </div>
          <div className="bg-teal-50 p-3 rounded">
            <p className="font-semibold text-teal-900">Assegnazione di ruoli</p>
            <p className="text-sm text-teal-800 italic">"Agisci come un esperto di biologia marina con 20 anni di esperienza..."</p>
          </div>
          <div className="bg-orange-50 p-3 rounded">
            <p className="font-semibold text-orange-900">Vincoli creativi</p>
            <p className="text-sm text-orange-800 italic">"Scrivi una spiegazione usando solo analogie tratte dallo sport"</p>
          </div>
          <div className="bg-red-50 p-3 rounded">
            <p className="font-semibold text-red-900">Prompt negativi</p>
            <p className="text-sm text-red-800 italic">"Spiega senza usare termini tecnici"</p>
          </div>
        </div>
      )
    },
    {
      title: "Prompt per creare lezioni",
      icon: BookOpen,
      content: (
        <div className="bg-linear-to-brrom-blue-50 to-indigo-50 p-4 rounded-lg">
          <p className="font-semibold text-gray-800 mb-3">Template completo:</p>
          <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-sm">
            <p className="font-mono text-gray-700">"Crea una lezione di 45 minuti su [argomento] per studenti di [età/livello].</p>
            <p className="font-mono text-gray-700 mt-2">Includi:</p>
            <ul className="list-disc list-inside font-mono text-gray-600 ml-4 mt-2 space-y-1">
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
          <div className="bg-linear-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800 mb-3">Per diversi livelli:</p>
            <div className="bg-white p-4 rounded border-l-4 border-green-500 text-sm">
              <p className="font-mono text-gray-700">"Spiega [concetto] in tre versioni:</p>
              <ul className="list-decimal list-inside font-mono text-gray-600 ml-4 mt-2 space-y-1">
                <li>Base - per studenti con difficoltà</li>
                <li>Intermedio - livello standard</li>
                <li>Avanzato - per studenti eccellenti"</li>
              </ul>
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded">
            <p className="font-semibold text-purple-900">Per studenti BES/DSA:</p>
            <p className="text-sm text-purple-800 mt-1">Specifica: frasi brevi, concetti chiave evidenziati, supporti visivi, strumenti compensativi</p>
          </div>
        </div>
      )
    },
    {
      title: "Prompt per verifiche",
      icon: BookOpen,
      content: (
        <div className="bg-linear-to-brrom-yellow-50 to-amber-50 p-4 rounded-lg">
          <p className="font-semibold text-gray-800 mb-3">Template per valutazione:</p>
          <div className="bg-white p-4 rounded border-l-4 border-yellow-500 text-sm">
            <p className="font-mono text-gray-700">"Crea 5 domande su [argomento]:</p>
            <ul className="list-disc list-inside font-mono text-gray-600 ml-4 mt-2 space-y-1">
              <li>2 a risposta multipla (livello conoscenza)</li>
              <li>2 a risposta breve (livello comprensione)</li>
              <li>1 aperta (livello analisi/sintesi)</li>
            </ul>
            <p className="font-mono text-gray-700 mt-2">Include le risposte corrette e i criteri di valutazione"</p>
          </div>
        </div>
      )
    },
    {
      title: "Prompt per attività collaborative",
      icon: BookOpen,
      content: (
        <div className="bg-linear-to-br from-teal-50 to-cyan-50 p-4 rounded-lg">
          <p className="font-semibold text-gray-800 mb-3">Per lavoro di gruppo:</p>
          <div className="bg-white p-4 rounded border-l-4 border-teal-500 text-sm">
            <p className="font-mono text-gray-700">"Progetta un'attività di gruppo su [tema] per 4 studenti che richieda:</p>
            <ul className="list-disc list-inside font-mono text-gray-600 ml-4 mt-2 space-y-1">
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
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-sm text-gray-800 leading-relaxed">
              <span className="font-semibold">"Sono un insegnante di storia del biennio superiore.</span> Devo introdurre la Rivoluzione Industriale a una classe seconda con 2 studenti BES (con difficoltà di comprensione del testo), 3 studenti non italofoni (livello A2-B1), e livelli molto eterogenei. Ho a disposizione 2 ore consecutive e una LIM.
            </p>
            <p className="text-sm text-gray-800 mt-3 font-semibold">Crea:</p>
            <ul className="list-decimal list-inside text-sm text-gray-700 ml-4 mt-2 space-y-2">
              <li>Un'attività di aggancio iniziale (15 min) visuale che colleghi la rivoluzione industriale a oggetti/tecnologie di oggi</li>
              <li>Una spiegazione multilivello con: mappa concettuale semplificata, glossario essenziale, fonti primarie con linguaggio adattato</li>
              <li>Un'attività di gruppo (40 min) con ruoli chiari dove analizzare aspetti diversi tramite immagini, grafici e brevi testi</li>
              <li>Materiali differenziati per BES (schemi guidati) e non italofoni (glossario bilingue suggerito)</li>
              <li>Griglia di valutazione che valorizzi competenze diverse (verbale, visuale, collaborativa)"</li>
            </ul>
          </div>
          <div className="mt-4 bg-blue-100 p-3 rounded">
            <p className="text-sm text-blue-900 font-semibold">Questo prompt include: livello scolastico, BES e non italofoni, tempi reali, supporti visivi, differenziazione inclusiva, valutazione equa</p>
          </div>
        </div>
      )
    },
    {
      title: "Conclusione",
      icon: Target,
      content: (
        <div className="space-y-4">
          <div className="bg-linear-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
            <p className="text-xl font-bold text-gray-800 text-center mb-4">Il prompt efficace è dove si esprime la vostra maestria professionale</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded">
              <p className="font-semibold text-yellow-900">L'IA è uno strumento:</p>
              <ul className="list-disc list-inside text-yellow-800 text-sm space-y-1 mt-2">
                <li>Potente ma grezzo</li>
                <li>Ha bisogno di guida</li>
                <li>Non sostituisce il docente</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="font-semibold text-green-900">Il docente è essenziale per:</p>
              <ul className="list-disc list-inside text-green-800 text-sm space-y-1 mt-2">
                <li>Giudizio pedagogico</li>
                <li>Contestualizzazione</li>
                <li>Verifica e qualità</li>
                <li>Dimensione umana</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
            <p className="font-bold text-lg">Trucco finale: chiedi all'IA come migliorare i tuoi prompt!</p>
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
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Slide principale */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 min-h-[500px] flex flex-col">
          {/* Header slide */}
          <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-200">
            {CurrentIcon && <CurrentIcon className="w-10 h-10 text-indigo-600" />}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800">{slides[currentSlide].title}</h1>
              {slides[currentSlide].subtitle && (
                <p className="text-lg text-gray-600 mt-1">{slides[currentSlide].subtitle}</p>
              )}
            </div>
            <div className="text-sm text-gray-500 font-semibold">
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
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5" />
            Precedente
          </button>

          {/* Indicatori slide */}
          <div className="flex gap-2 overflow-x-auto max-w-md">
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
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === slides.length - 1}
          >
            Successiva
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Info footer */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Usa le frecce o clicca sui pallini per navigare • Premi ESC per uscire dalla modalità presentazione
        </div>
      </div>
    </div>
  );
};

export default Presentation;