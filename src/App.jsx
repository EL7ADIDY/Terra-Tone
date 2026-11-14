import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { ScienceSection } from './components/ScienceSection';
import { ExploreDataSection } from './components/ExploreDataSection';
import { SonificationStudio } from './components/SonificationStudio';
import { DiscoverSection } from './components/DiscoverSection';
import { AboutSection } from './components/AboutSection';

import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';
import { AboutModal } from './components/AboutModal';
import { EICModal } from './components/eic/EICModal';
import { PollutionStagesView } from './components/PollutionStagesView';
import { MapPicker } from './components/MapPicker';
import { TimelineChart } from './components/TimelineChart';
import { TimelineControls } from './components/TimelineControls';
import { AudioControls } from './components/AudioControls';
import { InsightsPanel } from './components/InsightsPanel';
import { DataTable } from './components/DataTable';

import { useNasaPower } from './hooks/useNasaPower';
import { useSonification } from './hooks/useSonification';
import { usePollutionAnimation } from './hooks/usePollutionAnimation';
import { useSpeechSummary } from './hooks/useSpeechSummary';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';

import { PRESET_LOCATIONS, VARIABLES } from './services/nasaApi';
import { POLLUTION_STAGES } from './services/pollutionStages';
import { translations } from './utils/translations';
import { MapPin, Layers, ChevronDown, ChevronUp, AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  // 1. Accessibility, Globalization & Theme States
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('terra-tone-theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isEICModalOpen, setIsEICModalOpen] = useState(false);

  // Studio Active Dataset Selection
  const [selectedStudioDataset, setSelectedStudioDataset] = useState('night-lights-decade');

  // Advanced / Classic GIS Map View Toggle
  const [showClassicExplorer, setShowClassicExplorer] = useState(false);
  const [classicMode, setClassicMode] = useState('power'); // 'power' | 'pollution'

  // Toggle Theme with LocalStorage Persistence
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('terra-tone-theme', next);
      } catch {}
      return next;
    });
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  // Sync HTML lang and dir attributes for RTL/LTR
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Sync HTML / Body Theme & Meta Theme Color
  useEffect(() => {
    const activeTheme = isHighContrast ? 'high-contrast' : theme;
    document.documentElement.setAttribute('data-theme', activeTheme);
    document.body.setAttribute('data-theme', activeTheme);
    const metaColor = document.getElementById('meta-theme-color');
    if (metaColor) {
      metaColor.setAttribute(
        'content',
        activeTheme === 'light' ? '#F8FAFC' : '#050816'
      );
    }
  }, [theme, isHighContrast]);

  // NASA POWER & Legacy Map State Preservation
  const [primaryVariable, setPrimaryVariable] = useState('T2M');
  const [secondaryVariable, setSecondaryVariable] = useState('NONE');
  const [locationA, setLocationA] = useState(PRESET_LOCATIONS[0]);
  const [locationB, setLocationB] = useState(PRESET_LOCATIONS[1]);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [showTable, setShowTable] = useState(false);

  // Dedicated Location states for Pollution Stages
  const [pollutionLocA, setPollutionLocA] = useState(POLLUTION_STAGES[0].presets[0]);
  const [pollutionLocB, setPollutionLocB] = useState(POLLUTION_STAGES[0].presets[1]);
  const [pollutionCompare, setPollutionCompare] = useState(false);
  const [srAnnouncement, setSrAnnouncement] = useState('');

  const t = translations[lang] || translations.en;
  const varMeta = VARIABLES[primaryVariable] || VARIABLES.T2M;

  // NASA POWER hook
  const {
    loading,
    error,
    dataA,
    dataB,
    secondaryDataA,
    statsA,
    statsB,
    years,
    refetch
  } = useNasaPower({
    primaryVariable,
    secondaryVariable,
    locationA,
    locationB,
    isCompareMode
  });

  const handleYearChange = useCallback((newYear, isManual = false, isPause = false) => {
    const pointA = dataA.find(d => d.year === newYear);
    if (pointA) {
      const msg = lang === 'ar'
        ? `سنة ${newYear}، ${varMeta.nameAr}: ${pointA.value} ${varMeta.unitAr}`
        : `Year ${newYear}, ${varMeta.nameEn}: ${pointA.value} ${varMeta.unitEn}`;
      setSrAnnouncement(msg);
    }
  }, [dataA, varMeta, lang]);

  const {
    isPlaying,
    currentYear,
    playbackSpeed,
    volume,
    isMuted,
    instrument,
    quantizeScale,
    isLooping,
    togglePlay,
    setYear,
    stepForward,
    stepBackward,
    setVolume,
    toggleMute,
    setInstrument,
    setQuantizeScale,
    setIsLooping,
    changeSpeed,
    unlockAudio,
    playFramePixelTone,
    startFrameScan,
    isScanning,
    scanProgress,
    pitchMappingText
  } = useSonification({
    dataA,
    dataB,
    secondaryDataA,
    statsA,
    statsB,
    primaryVariable,
    secondaryVariable,
    isCompareMode,
    onYearChange: handleYearChange
  });

  const pollution = usePollutionAnimation({
    initialStageId: 'air',
    locationA: pollutionLocA,
    locationB: pollutionLocB,
    isCompareMode: pollutionCompare,
    volume,
    isMuted,
    instrument,
    quantizeScale,
    unlockAudio
  });

  const {
    isSpeaking,
    speechSupported,
    speakSummary,
    stopSpeaking,
    summaryText
  } = useSpeechSummary({
    language: lang,
    statsA,
    locationA,
    primaryVariable,
    isCompareMode,
    locationB,
    statsB
  });

  // Global Keyboard Shortcuts
  useKeyboardShortcuts({
    onTogglePlay: togglePlay,
    onStepBackward: stepBackward,
    onStepForward: stepForward,
    onIncreaseSpeed: () => changeSpeed(playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.5),
    onToggleMute: toggleMute,
    onOpenHelp: () => setIsShortcutsModalOpen(true)
  });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="terra-redesign-wrapper" data-theme={theme}>
      {/* Screen reader status announcer */}
      <div className="sr-only" role="status" aria-live="polite">
        {srAnnouncement}
      </div>

      {/* Sticky Navigation Bar with Hanging Lamp */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        lang={lang}
        onToggleLang={toggleLang}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onOpenAbout={() => setIsAboutModalOpen(true)}
        onOpenShortcuts={() => setIsShortcutsModalOpen(true)}
        onOpenEICModal={() => setIsEICModalOpen(true)}
      />

      <main id="main-content">
        {/* SECTION 1 — HOME */}
        <HomeSection
          lang={lang}
          isDark={theme === 'dark'}
          onExploreClick={() => scrollToSection('explore')}
          onHowItWorksClick={() => scrollToSection('science')}
        />

        {/* SECTION 2 — THE SCIENCE */}
        <ScienceSection lang={lang} />

        {/* SECTION 3 — EXPLORE EARTH DATA */}
        <ExploreDataSection
          lang={lang}
          onSelectDataset={(datasetId) => {
            setSelectedStudioDataset(datasetId);
          }}
        />

        {/* SECTION 4 — SONIFICATION STUDIO (Centerpiece) */}
        <SonificationStudio
          lang={lang}
          isDark={theme === 'dark'}
          selectedDatasetId={selectedStudioDataset}
          onDatasetChange={setSelectedStudioDataset}
        />

        {/* Optional Advanced NASA GIBS Map Explorer Accordion */}
        <div className="advanced-explorer-wrapper" style={{ maxWidth: '1380px', margin: '0 auto 4rem auto', padding: '0 1.5rem' }}>
          <button
            onClick={() => setShowClassicExplorer(!showClassicExplorer)}
            className="advanced-explorer-toggle-btn"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '14px',
              padding: '1.15rem 1.75rem',
              color: 'var(--color-text-primary)',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: 'var(--shadow-card-elevated)',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItem: 'center', gap: '0.75rem' }}>
              <Layers size={20} color="var(--color-accent-primary)" />
              <span>
                {lang === 'ar'
                  ? 'مستكشف خرائط ناسا المتقدم (NASA GIBS & Global Coordinates)'
                  : 'Advanced Geospatial Satellite Map & Coordinate Picker (NASA GIBS)'}
              </span>
            </div>
            {showClassicExplorer ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {showClassicExplorer && (
            <div style={{ marginTop: '1.5rem', background: 'var(--color-bg-card)', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--color-border)' }}>
              {/* Mode Switcher */}
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <button
                  onClick={() => setClassicMode('power')}
                  className={`cat-pill-btn ${classicMode === 'power' ? 'active' : ''}`}
                >
                  {lang === 'ar' ? 'سلاسل المناخ (NASA POWER)' : 'NASA POWER Climate Explorer'}
                </button>
                <button
                  onClick={() => setClassicMode('pollution')}
                  className={`cat-pill-btn ${classicMode === 'pollution' ? 'active' : ''}`}
                >
                  {lang === 'ar' ? 'مراحل التلوث العالمية' : 'Global Pollution Stages'}
                </button>
              </div>

              {classicMode === 'pollution' ? (
                <PollutionStagesView
                  pollutionState={pollution}
                  lang={lang}
                  theme={theme}
                  locationA={pollutionLocA}
                  onSelectLocationA={setPollutionLocA}
                  locationB={pollutionLocB}
                  onSelectLocationB={setPollutionLocB}
                  isCompareMode={pollutionCompare}
                  onToggleCompareMode={setPollutionCompare}
                  volume={volume}
                  onChangeVolume={setVolume}
                  isMuted={isMuted}
                  onToggleMute={toggleMute}
                  instrument={instrument}
                  onChangeInstrument={setInstrument}
                  quantizeScale={quantizeScale}
                  onToggleQuantizeScale={setQuantizeScale}
                  onAnnounce={setSrAnnouncement}
                />
              ) : (
                <>
                  {loading && (
                    <div className="loading-bar-wrap" role="status">
                      <RefreshCw className="icon-sm spin" />
                      <span>{lang === 'ar' ? 'جاري جلب بيانات المناخ...' : 'Fetching NASA climate series...'}</span>
                    </div>
                  )}
                  {error && (
                    <div className="error-banner" role="alert">
                      <AlertCircle className="icon" />
                      <span>{error}</span>
                      <button type="button" className="btn-retry" onClick={refetch}>Retry</button>
                    </div>
                  )}
                  <div className="grid-two-columns">
                    <MapPicker
                      lang={lang}
                      theme={theme}
                      locationA={locationA}
                      onSelectLocationA={setLocationA}
                      locationB={locationB}
                      onSelectLocationB={setLocationB}
                      isCompareMode={isCompareMode}
                      onToggleCompareMode={setIsCompareMode}
                      currentYear={currentYear}
                      dataA={dataA}
                      dataB={dataB}
                      primaryVariable={primaryVariable}
                      onPlayFramePixelTone={playFramePixelTone}
                      onStartFrameScan={startFrameScan}
                      isScanning={isScanning}
                      scanProgress={scanProgress}
                    />

                    {showTable ? (
                      <DataTable
                        lang={lang}
                        dataA={dataA}
                        dataB={dataB}
                        statsA={statsA}
                        statsB={statsB}
                        primaryVariable={primaryVariable}
                        locationA={locationA}
                        locationB={locationB}
                        isCompareMode={isCompareMode}
                        currentYear={currentYear}
                        showTable={showTable}
                        onToggleTable={setShowTable}
                      />
                    ) : (
                      <TimelineChart
                        lang={lang}
                        theme={theme}
                        dataA={dataA}
                        dataB={dataB}
                        statsA={statsA}
                        statsB={statsB}
                        currentYear={currentYear}
                        primaryVariable={primaryVariable}
                        locationA={locationA}
                        locationB={locationB}
                        isCompareMode={isCompareMode}
                        showTable={showTable}
                        onToggleTable={setShowTable}
                      />
                    )}
                  </div>
                  <div className="grid-two-columns" style={{ marginTop: '1rem' }}>
                    <TimelineControls
                      lang={lang}
                      currentYear={currentYear}
                      years={years}
                      isPlaying={isPlaying}
                      onTogglePlay={togglePlay}
                      onStepBackward={stepBackward}
                      onStepForward={stepForward}
                      onSelectYear={(yr) => setYear(yr, true)}
                      playbackSpeed={playbackSpeed}
                      onChangeSpeed={changeSpeed}
                      isLooping={isLooping}
                      onToggleLoop={() => setIsLooping(prev => !prev)}
                    />
                    <AudioControls
                      lang={lang}
                      volume={volume}
                      onChangeVolume={setVolume}
                      isMuted={isMuted}
                      onToggleMute={toggleMute}
                      instrument={instrument}
                      onChangeInstrument={setInstrument}
                      quantizeScale={quantizeScale}
                      onToggleQuantizeScale={setQuantizeScale}
                      primaryVariable={primaryVariable}
                      onChangePrimaryVariable={setPrimaryVariable}
                      secondaryVariable={secondaryVariable}
                      onChangeSecondaryVariable={setSecondaryVariable}
                      isCompareMode={isCompareMode}
                      pitchMappingText={pitchMappingText}
                    />
                  </div>
                  <InsightsPanel
                    lang={lang}
                    statsA={statsA}
                    statsB={statsB}
                    locationA={locationA}
                    locationB={locationB}
                    primaryVariable={primaryVariable}
                    isCompareMode={isCompareMode}
                    isSpeaking={isSpeaking}
                    speechSupported={speechSupported}
                    onSpeakSummary={speakSummary}
                    onStopSpeaking={stopSpeaking}
                    summaryText={summaryText}
                  />
                </>
              )}
            </div>
          )}
        </div>

        {/* SECTION 5 — DISCOVER WHAT YOU ARE HEARING */}
        <DiscoverSection lang={lang} />

        {/* SECTION 6 — ABOUT */}
        <AboutSection lang={lang} />
      </main>

      {/* Accessible Modals */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsModalOpen}
        onClose={() => setIsShortcutsModalOpen(false)}
        lang={lang}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        lang={lang}
      />

      <EICModal
        isOpen={isEICModalOpen}
        onClose={() => setIsEICModalOpen(false)}
        lang={lang}
        theme={theme}
      />
    </div>
  );
}
