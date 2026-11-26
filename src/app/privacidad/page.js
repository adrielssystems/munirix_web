import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Política de Privacidad — Munirix',
  description:
    'Política de Privacidad y tratamiento de datos personales y APIs de Google en Munirix.',
};

export default function PrivacidadPage() {
  return (
    <LegalPageLayout
      badge="Privacidad y Datos"
      title="Política de Privacidad de Munirix"
      updatedAt="26 de noviembre de 2026"
    >
      <section>
        <h2>1. Responsable del Tratamiento</h2>
        <p>
          <strong>Munirix</strong> (disponible en <strong>https://munirix.net</strong> y{' '}
          <strong>https://client.munirix.net</strong>) es una plataforma operada por{' '}
          <strong>Adriel&apos;s Systems</strong>. Para cualquier consulta sobre privacidad,
          protección de datos o ejercicio de derechos, puedes escribir a{' '}
          <a href="mailto:adriels.systems@gmail.com">adriels.systems@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>2. Información que Recopilamos</h2>
        <ul>
          <li>
            <strong>Datos de cuenta y espacio de trabajo:</strong> nombre, correo electrónico,
            zona horaria, nombre del negocio u organización e identificadores de autenticación.
          </li>
          <li>
            <strong>Configuración del Agente IA:</strong> instrucciones del asistente, catálogo de
            servicios, reglas de horario y base de conocimiento ingresada por el cliente.
          </li>
          <li>
            <strong>Mensajería y CRM:</strong> historial de conversaciones, contactos y citas
            gestionadas mediante las integraciones conectadas por el cliente (WhatsApp /
            Instagram).
          </li>
          <li>
            <strong>Comprobantes de pago:</strong> referencia de transacción, método de pago y
            datos de verificación enviados en la pasarela de facturación.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Uso de los Datos de Google (Google API Services User Data Policy)</h2>
        <p>
          Cuando el usuario decide conectar opcionalmente su cuenta de Google (por ejemplo,{' '}
          <strong>Google Calendar</strong>, Gmail, Drive, Sheets o Contacts), Munirix solicita
          únicamente los permisos autorizados explícitamente por el usuario:
        </p>
        <ul>
          <li>
            <strong>Finalidad exclusiva:</strong> consultar disponibilidad en tiempo real, crear o
            actualizar citas con enlaces de Google Meet y ejecutar las automatizaciones
            configuradas por el propio usuario.
          </li>
          <li>
            <strong>Uso Limitado (Limited Use):</strong> el uso y la transferencia de información
            recibida de las APIs de Google por parte de Munirix cumplen estrictamente con la{' '}
            <em>Google API Services User Data Policy</em>, incluidos los requisitos de Uso
            Limitado.
          </li>
          <li>
            <strong>Cero comercialización ni entrenamiento público:</strong> Munirix{' '}
            <strong>no vende</strong> datos de Google a terceros, no los utiliza para publicidad ni
            los usa para entrenar modelos públicos de Inteligencia Artificial.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Aislamiento Multitenant y Proveedores de IA</h2>
        <p>
          Cada organización opera en un espacio aislado identificado por su propio{' '}
          <code>tenant_id</code>. Los mensajes procesados por los motores de Inteligencia
          Artificial configurados (Google Gemini, DeepSeek, OpenAI o Anthropic) se transmiten
          únicamente para generar la respuesta solicitada en tiempo real.
        </p>
      </section>

      <section>
        <h2>5. Conservación, Revocación y Eliminación de Datos</h2>
        <p>
          El usuario puede desconectar su cuenta de Google o desvincular su instancia de WhatsApp
          en cualquier momento desde <strong>Configuración</strong>. Asimismo, al solicitar la baja
          definitiva de su espacio al soporte de Adriel&apos;s Systems, se eliminan en cascada su
          cuenta, historial de mensajes, citas, contactos, tokens y su instancia de WhatsApp.
        </p>
      </section>
    </LegalPageLayout>
  );
}
