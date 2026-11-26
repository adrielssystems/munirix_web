import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Política de Seguridad — Munirix',
  description:
    'Medidas técnicas de cifrado, aislamiento multitenant y protección de credenciales en Munirix.',
};

export default function SeguridadPage() {
  return (
    <LegalPageLayout
      badge="Arquitectura Segura"
      title="Política de Seguridad de la Información"
      updatedAt="26 de noviembre de 2026"
    >
      <section>
        <h2>1. Cifrado de Credenciales y Secretos (AES-256-GCM)</h2>
        <p>
          Todas las credenciales sensibles almacenadas por los clientes —incluidas claves propias
          de modelos de IA (Gemini, DeepSeek, OpenAI, Anthropic), tokens de acceso y refresco de{' '}
          <strong>Google OAuth 2.0</strong>, y llaves de WhatsApp— se cifran antes de guardarse en
          base de datos mediante el estándar <strong>AES-256-GCM</strong> con vector de
          inicialización único por registro.
        </p>
      </section>

      <section>
        <h2>2. Seguridad en Tránsito y Autenticación</h2>
        <ul>
          <li>
            <strong>Cifrado TLS/HTTPS:</strong> todo el tráfico entre el navegador, las APIs y los
            servicios de mensajería viaja cifrado bajo HTTPS.
          </li>
          <li>
            <strong>Sesiones y contraseñas:</strong> las contraseñas se protegen con hashing{' '}
            <code>bcrypt</code> y las sesiones utilizan cookies seguras <code>HttpOnly</code> con
            tokens firmados.
          </li>
          <li>
            <strong>Estados OAuth firmados:</strong> las solicitudes de vinculación con Google usan
            estados firmados criptográficamente con <strong>HMAC-SHA256</strong> y expiración
            temporal para prevenir ataques CSRF.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Aislamiento Estricto Multitenant</h2>
        <p>
          Cada cliente cuenta con un identificador único (<code>tenant_id</code>) que aísla sus
          contactos, conversaciones, citas, servicios y configuraciones de IA. Asimismo, cada
          conexión de WhatsApp por código QR opera en una instancia independiente dedicada
          exclusivamente a ese espacio.
        </p>
      </section>

      <section>
        <h2>4. Integridad de Webhooks y Agenda</h2>
        <ul>
          <li>
            Los webhooks oficiales de Meta validan la firma criptográfica{' '}
            <code>X-Hub-Signature-256</code> antes de procesar eventos.
          </li>
          <li>
            La base de datos PostgreSQL aplica restricciones de exclusión a nivel de motor (
            <code>EXCLUDE USING gist</code>) para impedir reservas superpuestas o duplicadas.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Control Humano y Reporte de Incidentes</h2>
        <p>
          Desde el Inbox puedes pausar la Inteligencia Artificial en cualquier conversación en un
          solo clic, así como revocar el acceso de Google o desconectar tu WhatsApp al instante. Si
          detectas alguna vulnerabilidad o actividad inusual, repórtala de inmediato a{' '}
          <a href="mailto:adriels.systems@gmail.com">adriels.systems@gmail.com</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
