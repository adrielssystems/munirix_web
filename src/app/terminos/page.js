import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Términos de Uso — Munirix',
  description:
    'Términos y condiciones de uso de la plataforma SaaS Munirix operada por Adriel’s Systems.',
};

export default function TerminosPage() {
  return (
    <LegalPageLayout
      badge="Términos y Condiciones"
      title="Términos de Uso de Munirix"
      updatedAt="26 de noviembre de 2026"
    >
      <section>
        <h2>1. Aceptación del Servicio</h2>
        <p>
          Al registrarse, reportar un pago o utilizar la plataforma <strong>Munirix</strong>{' '}
          (<code>munirix.net</code> y <code>client.munirix.net</code>), operada por{' '}
          <strong>Adriel&apos;s Systems</strong>, el usuario acepta estos Términos de Uso en su
          totalidad.
        </p>
      </section>

      <section>
        <h2>2. Descripción de la Plataforma</h2>
        <p>
          Munirix ofrece herramientas de software en la nube (SaaS) para la creación de Agentes de
          Inteligencia Artificial conectados a canales de mensajería (WhatsApp mediante Evolution
          API o Meta Cloud API Oficial), gestión de contactos (CRM), agenda de citas y
          sincronización opcional con Google Workspace.
        </p>
      </section>

      <section>
        <h2>3. Planes, Pagos y Activación</h2>
        <ul>
          <li>
            <strong>Planes vigentes:</strong> Profesional ($40 USD/mes), Negocio ($70 USD/mes) y
            Empresa ($150 USD/mes), según las capacidades descritas en la página principal.
          </li>
          <li>
            <strong>Certificación previa:</strong> todo espacio nuevo inicia en espera de pago. La
            activación del Agente IA, la pasarela de configuración y la instancia de WhatsApp se
            habilitan una vez verificado y certificado el pago por el equipo de Adriel&apos;s
            Systems (PayPal, Binance Pay, Zelle o Pago Móvil).
          </li>
          <li>
            <strong>Renovación y suspensión:</strong> la falta de renovación mensual puede conllevar
            la pausa temporal del espacio hasta regularizar el abono.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Uso Aceptable y Canales de Mensajería</h2>
        <ul>
          <li>
            El usuario es el único responsable de los números telefónicos vinculados y del
            cumplimiento de las políticas de WhatsApp / Meta.
          </li>
          <li>
            Está estrictamente prohibido utilizar Munirix para envío de spam masivo no solicitado,
            suplantación de identidad, fraude o actividades ilícitas.
          </li>
          <li>
            El uso de conexiones no oficiales mediante código QR conlleva riesgos propios de la
            plataforma de mensajería frente a envíos masivos; para alto volumen comercial se
            recomienda el Plan Empresa con <strong>Meta Cloud API Oficial</strong>.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Supervisión de Inteligencia Artificial y Responsabilidad</h2>
        <p>
          Las respuestas generadas por modelos de IA dependen de las instrucciones y base de
          conocimiento configuradas por el cliente. Munirix provee controles de pausa e
          intervención humana inmediata desde el Inbox y no se hace responsable por decisiones
          comerciales, médicas o legales derivadas de respuestas automatizadas sin supervisión del
          titular.
        </p>
      </section>

      <section>
        <h2>6. Contacto y Soporte</h2>
        <p>
          Para soporte técnico, facturación o cancelaciones, contáctanos en{' '}
          <a href="mailto:adriels.systems@gmail.com">adriels.systems@gmail.com</a> o vía WhatsApp
          oficial de Adriel&apos;s Systems (+58 422-2476127).
        </p>
      </section>
    </LegalPageLayout>
  );
}
