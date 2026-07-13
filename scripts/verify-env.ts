const required = ['NEXT_PUBLIC_SITE_URL'];

const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`Faltan variables de entorno obligatorias: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Variables de entorno mínimas presentes.');
