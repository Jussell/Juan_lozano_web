/**
 * Google Apps Script: guarda los mensajes del formulario de contacto en una hoja.
 *
 * Instalación:
 * 1. En la hoja: Extensiones > Apps Script. Pega este archivo.
 * 2. Engranaje (Configuración del proyecto) > Propiedades de la secuencia de comandos
 *    > Agregar propiedad:  SECRET = una cadena larga y aleatoria.
 *    (La clave no se escribe en el código para que no quede en el repositorio.)
 * 3. Ejecuta la función `test` una vez y acepta los permisos. Debe aparecer una fila de prueba.
 * 4. Implementar > Nueva implementación > Tipo: Aplicación web.
 *    - Ejecutar como: Yo
 *    - Quién tiene acceso: Cualquier persona
 * 5. Copia la URL que termina en /exec.
 * 6. En Vercel agrega las variables de entorno y haz redeploy:
 *    GOOGLE_SHEETS_WEBHOOK_URL = la URL /exec
 *    GOOGLE_SHEETS_SECRET      = el mismo valor de SECRET
 * 7. Si cambias este código, crea una nueva versión de la implementación.
 */
const SPREADSHEET_ID = '1WtwFJmdov_GdYyiPUroylwll9Dv3x55joHOu659FPeo';
const HEADERS = ['Fecha', 'Nombre', 'Email', 'Mensaje', 'Idioma'];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty('SECRET');

    if (!secret || data.secret !== secret) {
      return json({ success: false, error: 'unauthorized' });
    }

    appendContact(data);
    return json({ success: true });
  } catch (err) {
    return json({ success: false, error: String(err) });
  }
}

function appendContact(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    // Primera pestaña de la hoja (gid=0).
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      safe(data.name),
      safe(data.email),
      safe(data.message),
      safe(data.locale),
    ]);
  } finally {
    lock.releaseLock();
  }
}

// Un apóstrofe inicial evita que Sheets ejecute textos que empiezan con = + - @ como fórmulas.
function safe(value) {
  const text = String(value || '').trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

// Ejecútala desde el editor para probar permisos y acceso a la hoja.
function test() {
  appendContact({
    name: 'Prueba',
    email: 'prueba@example.com',
    message: 'Mensaje de prueba desde el editor de Apps Script.',
    locale: 'es',
  });
}
