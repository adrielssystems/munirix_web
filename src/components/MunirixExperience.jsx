'use client';

import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import SoftAurora from '@/components/ui/SoftAurora';
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  CheckCheck,
  ChevronDown,
  Cpu,
  FileSpreadsheet,
  FolderKanban,
  HardDrive,
  Mail,
  MessageCircle,
  Mic,
  PauseCircle,
  Play,
  QrCode,
  RotateCw,
  ShieldCheck,
  Smile,
  Store,
  User,
  Zap,
} from 'lucide-react';
import styles from '@/app/landing.module.css';

const EASE_OUT = [0.23, 1, 0.32, 1];
const SPRING_TAB = { type: 'spring', duration: 0.36, bounce: 0.12 };

const AGENT_SCENES = [
  {
    id: 'personal',
    label: 'Agente Personal',
    icon: User,
    waTitle: 'Munirix · Tu Asistente',
    waStatus: 'en línea',
    context: 'WhatsApp · Google Calendar · Gmail',
    promptTime: '10:41',
    replyTime: '10:41',
    prompt:
      'Munirix, revisa mi agenda del jueves, bloquea dos horas en la tarde para preparar la presentación y avísale por correo a Carlos que nos vemos el viernes a las 10:00.',
    reply:
      'Listo. Bloqueé el jueves de 2:00 PM a 4:00 PM en tu calendario y envié el correo a Carlos confirmando el viernes a las 10:00 AM. Te recordaré 30 minutos antes.',
    actions: [
      { icon: CalendarDays, text: 'Verificó disponibilidad real en Google Calendar' },
      { icon: Zap, text: 'Reservó el bloque "Preparar presentación" (14:00 – 16:00)' },
      { icon: Mail, text: 'Envió confirmación desde tu cuenta de Gmail a Carlos' },
    ],
  },
  {
    id: 'services',
    label: 'Citas & Negocios',
    icon: Store,
    waTitle: 'Studio & Reservas · IA',
    waStatus: 'en línea',
    context: 'WhatsApp · Catálogo · Agenda · Recordatorios',
    promptTime: '14:15',
    replyTime: '14:15',
    prompt:
      'Hola buenas tardes, quiero agendar una cita para mañana. ¿Qué servicios tienen disponibles y cuánto cuesta la sesión completa?',
    reply:
      '¡Hola! Con gusto te atiendo. Nuestra Sesión Completa (45 min) tiene un valor de $35. Tengo espacio disponible mañana a las 10:30 AM o a las 3:30 PM. ¿Cuál prefieres reservar?',
    actions: [
      { icon: Store, text: 'Consultó tu catálogo de servicios y precios reales' },
      { icon: CalendarDays, text: 'Verificó horarios libres en tu Google Calendar' },
      { icon: MessageCircle, text: 'Dejó listos los recordatorios automáticos 24h y 2h antes' },
    ],
  },
  {
    id: 'business',
    label: 'Empresa & Ventas',
    icon: Briefcase,
    waTitle: 'Munirix · Ventas CRM',
    waStatus: 'en línea',
    context: 'WhatsApp · CRM · Google Sheets · Meet',
    promptTime: '16:08',
    replyTime: '16:08',
    prompt:
      'Hola, somos un equipo de 12 personas y queremos automatizar la atención de clientes y cotizaciones por WhatsApp.',
    reply:
      'Con gusto te ayudo. Para un equipo de 12 personas puedes conectar varios agentes y activar la API oficial de Meta. Tengo un espacio hoy a las 4:30 PM para mostrarte el flujo en vivo. ¿Te envío el enlace de Meet?',
    actions: [
      { icon: FolderKanban, text: 'Creó contacto y registró el requerimiento en tu CRM' },
      { icon: FileSpreadsheet, text: 'Añadió la oportunidad en tu hoja de Google Sheets' },
      { icon: CalendarDays, text: 'Preparó disponibilidad para videollamada en Google Meet' },
    ],
  },
];

const TOOLS = [
  { name: 'WhatsApp por QR', detail: 'Evolution API para arrancar rápido', icon: QrCode },
  { name: 'Meta Cloud API', detail: 'Escalado oficial para alto volumen', icon: MessageCircle },
  { name: 'Google Calendar', detail: 'Disponibilidad real, reservas y Meet', icon: CalendarDays },
  { name: 'Gmail', detail: 'Correos y confirmaciones desde tu cuenta', icon: Mail },
  { name: 'Google Drive', detail: 'Carpetas y documentos organizados', icon: HardDrive },
  { name: 'Google Sheets', detail: 'Registro automático de leads y citas', icon: FileSpreadsheet },
  { name: 'Tu motor de IA', detail: 'Gemini, DeepSeek, OpenAI o Claude', icon: Cpu },
  { name: 'Control humano', detail: 'Pausa la IA y responde tú en un clic', icon: PauseCircle },
];

const STEPS = [
  {
    title: 'Conecta WhatsApp y Google',
    body: 'Vincula tu número escaneando un código QR —o usa Meta Cloud API Oficial— y habilita Calendar, Gmail, Drive o Sheets con nuestra guía paso a paso.',
  },
  {
    title: 'Elige tu modelo y dale contexto',
    body: 'Selecciona Gemini, DeepSeek, OpenAI o Claude con tu propia clave cifrada o la de la plataforma. Escribe en español normal tus horarios, reglas y servicios.',
  },
  {
    title: 'Deja que Munirix opere por ti',
    body: 'Tu agente atiende, agenda sin solapamientos, envía recordatorios y actualiza tus herramientas las 24 horas. Cuando quieras intervenir, tomas el chat al instante.',
  },
];

const FAQS = [
  {
    q: '¿Necesito saber programar para configurar mi agente?',
    a: 'No. Todo se configura desde tu panel: escribes las instrucciones en español cotidiano, eliges el modelo de IA y conectas WhatsApp y Google paso a paso.',
  },
  {
    q: '¿Funciona tanto para uso personal como para una empresa o clínica?',
    a: 'Sí. Puedes usarlo como asistente personal en tu propio WhatsApp o activar módulos empresariales con CRM, agenda inteligente, recordatorios y verticales como salud y servicios.',
  },
  {
    q: '¿Puedo empezar con mi WhatsApp actual sin contratar API oficial?',
    a: 'Sí. Puedes comenzar escaneando QR mediante Evolution API para consumo ligero o personal, y migrar a la API Oficial de Meta cuando tu volumen crezca sin perder historial ni citas.',
  },
  {
    q: '¿Puedo usar mi propia API key de Gemini, DeepSeek, OpenAI o Claude?',
    a: 'Sí. Guardamos tus claves por proveedor cifradas con AES-256-GCM para que elijas libremente el modelo que mejor se adapte a tu presupuesto y estilo de respuesta.',
  },
];

export default function MunirixExperience({ clientUrl }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [replayKey, setReplayKey] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const activeScene = AGENT_SCENES[activeIndex];

  const handleSelectTab = (idx) => {
    if (idx === activeIndex) {
      setReplayKey((k) => k + 1);
      return;
    }
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
    setReplayKey((k) => k + 1);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.page}>
        {/* Rayo luminoso SoftAurora calibrado a la paleta oficial de Munirix (#7B6BF2 -> #38C6EC) */}
        <div className={styles.auroraWrap} aria-hidden="true">
          <SoftAurora
            color1="#7B6BF2"
            color2="#38C6EC"
            speed={0.44}
            scale={1.4}
            brightness={0.96}
            bandHeight={0.5}
            bandSpread={1.12}
            opacity={0.86}
          />
        </div>

        {/* Navegación limpia con logotipo real de Munirix */}
        <header className={styles.navWrap}>
          <div className={styles.nav}>
            <a href="#" className={styles.brand}>
              <img
                src="/brand/Logo_Munirix_sin_fondo.png"
                alt="Munirix"
                className={styles.brandIconImg}
                width={96}
                height={108}
              />
              <span className={styles.brandName}>Munirix</span>
            </a>

            <nav className={styles.navLinks} aria-label="Navegación principal">
              <a href="#demo">En acción</a>
              <a href="#herramientas">Integraciones</a>
              <a href="#alcance">Personal y Empresas</a>
              <a href="#como-funciona">Cómo funciona</a>
            </nav>

            <div className={styles.navActions}>
              <a href={`${clientUrl}/login`} className={styles.ghostLink}>
                Iniciar sesión
              </a>
              <a href={`${clientUrl}/register`} className={styles.primaryCta}>
                <span>Empezar</span>
                <ArrowRight size={15} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </header>

        <main className={styles.main}>
          {/* HERO */}
          <section className={styles.hero}>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
            >
              Tus agentes de IA personales y empresariales, listos en minutos.
            </motion.h1>

            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.44, delay: 0.08, ease: EASE_OUT }}
            >
              Munirix es la integración sencilla para conectar WhatsApp, Google Calendar, Gmail,
              Drive y el modelo de IA que prefieras en un agente multipropósito que responde,
              agenda y ejecuta tareas por ti.
            </motion.p>

            <motion.div
              className={styles.heroButtons}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14, ease: EASE_OUT }}
            >
              <a href={`${clientUrl}/register`} className={styles.primaryCtaLg}>
                <span>Crear mi primer agente</span>
                <ArrowRight size={17} strokeWidth={1.75} />
              </a>
              <a href="#demo" className={styles.secondaryCta}>
                <Play size={14} strokeWidth={1.75} />
                <span>Ver cómo responde</span>
              </a>
            </motion.div>
          </section>

          {/* CONSOLA INTERACTIVA DE DEMOSTRACIÓN — Una sola superficie arquitectónica, cero tarjetas anidadas ni KPIs falsos */}
          <section id="demo" className={styles.consoleSection}>
            <div className={styles.consoleFrame}>
              <div className={styles.consoleTopBar}>
                <div className={styles.tabBar} role="tablist" aria-label="Ejemplos de uso de Munirix">
                  {AGENT_SCENES.map((scene, idx) => {
                    const Icon = scene.icon;
                    const active = idx === activeIndex;
                    return (
                      <button
                        key={scene.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => handleSelectTab(idx)}
                        className={`${styles.tabBtn} ${active ? styles.tabBtnActive : ''}`}
                      >
                        {active && (
                          <motion.span
                            layoutId="munirix-scene-indicator"
                            className={styles.tabIndicator}
                            transition={SPRING_TAB}
                          />
                        )}
                        <span className={styles.tabInner}>
                          <Icon size={15} strokeWidth={1.6} />
                          <span>{scene.label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className={styles.consoleMeta}>
                  <span className={styles.consoleContext}>{activeScene.context}</span>
                  <button
                    type="button"
                    className={styles.replayBtn}
                    onClick={() => setReplayKey((k) => k + 1)}
                    aria-label="Repetir demostración"
                  >
                    <RotateCw size={13} strokeWidth={1.7} />
                    <span>Repetir</span>
                  </button>
                </div>
              </div>

              <div className={styles.consoleBody}>
                <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                  <motion.div
                    key={`${activeScene.id}-${replayKey}`}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -14 }}
                    transition={{ duration: 0.22, ease: EASE_OUT }}
                    className={styles.consoleSplit}
                  >
                    {/* Ventana estilo chat real de WhatsApp */}
                    <div className={styles.waPhoneFrame}>
                      <div className={styles.waHeader}>
                        <div className={styles.waAvatarWrap}>
                          <img
                            src="/brand/Logo_Munirix_sin_fondo.png"
                            alt="Munirix"
                            className={styles.waAvatarImg}
                          />
                          <span className={styles.waOnlineDot} />
                        </div>
                        <div className={styles.waHeaderInfo}>
                          <span className={styles.waHeaderName}>{activeScene.waTitle}</span>
                          <span className={styles.waHeaderStatus}>{activeScene.waStatus}</span>
                        </div>
                        <span className={styles.waBadge}>WhatsApp</span>
                      </div>

                      <div className={styles.waChatBody}>
                        <div className={styles.waDatePill}>HOY</div>

                        <motion.div
                          className={styles.waBubbleOut}
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.22, ease: EASE_OUT }}
                        >
                          <p className={styles.waText}>{activeScene.prompt}</p>
                          <span className={styles.waMeta}>
                            <span>{activeScene.promptTime}</span>
                            <CheckCheck size={14} className={styles.waChecks} />
                          </span>
                        </motion.div>

                        <motion.div
                          className={styles.waBubbleIn}
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.28, delay: 0.28, ease: EASE_OUT }}
                        >
                          <span className={styles.waSenderLabel}>Munirix IA</span>
                          <p className={styles.waText}>{activeScene.reply}</p>
                          <span className={styles.waMeta}>
                            <span>{activeScene.replyTime}</span>
                          </span>
                        </motion.div>
                      </div>

                      <div className={styles.waInputBar} aria-hidden="true">
                        <Smile size={17} className={styles.waInputIcon} />
                        <span className={styles.waInputPlaceholder}>Escribe un mensaje...</span>
                        <span className={styles.waMicBtn}>
                          <Mic size={15} />
                        </span>
                      </div>
                    </div>

                    {/* Acciones ejecutadas: lista limpia sin tarjetas anidadas */}
                    <div className={styles.ledgerColumn}>
                      <div className={styles.ledgerHeading}>Ejecutado en tus aplicaciones</div>
                      <ul className={styles.ledgerList}>
                        {activeScene.actions.map((act, i) => {
                          const ActIcon = act.icon;
                          const delays = [0.08, 0.17, 0.25];
                          return (
                            <motion.li
                              key={act.text}
                              className={styles.ledgerRow}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: delays[i] ?? 0.25, ease: EASE_OUT }}
                            >
                              <ActIcon size={16} strokeWidth={1.6} className={styles.ledgerIcon} />
                              <span>{act.text}</span>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* INTEGRACIONES — Cuadrícula arquitectónica monocroma en acero y cian Munirix (sin arcoíris) */}
          <section id="herramientas" className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <h2>Conecta tus herramientas del día a día</h2>
              <p>
                Sin cambiar de aplicaciones ni atarte a un solo proveedor de inteligencia artificial.
              </p>
            </div>

            <div className={styles.toolsMatrix}>
              {TOOLS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div key={tool.name} className={styles.toolCell}>
                    <Icon size={19} strokeWidth={1.5} className={styles.toolIcon} />
                    <h3>{tool.name}</h3>
                    <p>{tool.detail}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PERSONAL VS EMPRESARIAL — División limpia con línea central de acero */}
          <section id="alcance" className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <h2>Para tu rutina diaria o para toda tu operación</h2>
              <p>
                Empieza con un asistente personal en tu teléfono y activa módulos empresariales cuando tu negocio crezca.
              </p>
            </div>

            <div className={styles.splitColumns}>
              <div className={styles.splitCol}>
                <h3>Agentes personales</h3>
                <p className={styles.splitIntro}>
                  Organiza tu día desde el mismo chat de WhatsApp que ya utilizas, sin saltar entre cinco aplicaciones.
                </p>
                <ul className={styles.cleanList}>
                  <li>Consulta, bloquea y reorganiza tu Google Calendar por mensaje.</li>
                  <li>Redacta y envía correos desde tu propia cuenta de Gmail.</li>
                  <li>Guarda apuntes, registros o documentos en Sheets y Drive.</li>
                  <li>Usa Gemini, DeepSeek, OpenAI o Claude con tus propias claves.</li>
                </ul>
              </div>

              <div className={styles.splitCol}>
                <h3>Agentes empresariales</h3>
                <p className={styles.splitIntro}>
                  Convierte tu WhatsApp e Instagram en una atención constante que responde, agenda y da seguimiento real.
                </p>
                <ul className={styles.cleanList}>
                  <li>Triaje previo según servicio o motivo de consulta y reserva sin solapamientos.</li>
                  <li>Recordatorios automáticos 24h y 2h antes con confirmación directa.</li>
                  <li>Módulos activables por industria: consultorios, salud, estética y servicios.</li>
                  <li>Bandeja compartida para pausar la IA y responder personalmente en un clic.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CÓMO FUNCIONA EN 3 PASOS */}
          <section id="como-funciona" className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <h2>Operando en tres pasos simples</h2>
            </div>

            <div className={styles.stepsRow}>
              {STEPS.map((s, idx) => (
                <div key={s.title} className={styles.stepCol}>
                  <span className={styles.stepIndex}>0{idx + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEGURIDAD Y CONTROL */}
          <section className={styles.guaranteeBar}>
            <div className={styles.guaranteeItem}>
              <ShieldCheck size={17} strokeWidth={1.6} className={styles.guaranteeIcon} />
              <span>Entorno aislado por organización y claves cifradas AES-256-GCM</span>
            </div>
            <div className={styles.guaranteeItem}>
              <PauseCircle size={17} strokeWidth={1.6} className={styles.guaranteeIcon} />
              <span>Intervención humana inmediata en cualquier conversación</span>
            </div>
            <div className={styles.guaranteeItem}>
              <QrCode size={17} strokeWidth={1.6} className={styles.guaranteeIcon} />
              <span>Escala de WhatsApp QR a Meta Cloud API Oficial sin perder datos</span>
            </div>
          </section>

          {/* PREGUNTAS FRECUENTES */}
          <section id="faq" className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <h2>Preguntas frecuentes</h2>
            </div>

            <div className={styles.faqList}>
              {FAQS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q} className={styles.faqRow}>
                    <button
                      type="button"
                      className={styles.faqTrigger}
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        size={17}
                        strokeWidth={1.6}
                        className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: EASE_OUT }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className={styles.faqAnswer}>{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CIERRE CON LOGOTIPO OFICIAL DE MUNIRIX SIN FONDO */}
          <section className={styles.closingBlock}>
            <img
              src="/brand/Logo_Munirix_sin_fondo.png"
              alt="Munirix by Adriel's Systems"
              className={styles.closingLogo}
            />
            <span className={styles.closingSignature}>Munirix · by Adriel&apos;s Systems</span>
            <h2>Pon a trabajar a tu primer agente hoy mismo</h2>
            <p>
              Conecta WhatsApp y Google Workspace en minutos desde tu propio espacio en Munirix.
            </p>
            <a href={`${clientUrl}/register`} className={styles.primaryCtaLg}>
              <span>Ingresar a Munirix</span>
              <ArrowRight size={17} strokeWidth={1.75} />
            </a>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <img
                src="/brand/Logo_Munirix_sin_fondo.png"
                alt="Munirix"
                className={styles.footerIcon}
              />
              <span>Munirix · munirix.net</span>
            </div>
            <div className={styles.footerLinks}>
              <a href={`${clientUrl}/login`}>Iniciar sesión</a>
              <a href={`${clientUrl}/register`}>Crear cuenta</a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
