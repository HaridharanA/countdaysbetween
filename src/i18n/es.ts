/**
 * Spanish UI Dictionary & Localization Helpers
 */

export const esUI = {
  locale: "es-ES",
  siteTitle: "CountDays — Calculadora de Días Entre Dos Fechas y Días Hábiles",
  siteDescription: "Calcula la cantidad exacta de días naturales, días hábiles y semanas entre dos fechas con festivos oficiales. Rápido, preciso y gratuito.",
  
  nav: {
    home: "Inicio",
    calculator: "Calculadora de Días",
    businessDays: "Días Hábiles",
    countdowns: "Vacaciones & Festivos",
    customTimer: "Crear Contador",
    about: "Acerca de",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto"
  },

  calculator: {
    title: "Calculadora de Días Entre Dos Fechas",
    subtitle: "Calcula la duración exacta en días naturales, días hábiles y semanas entre cualquier intervalo de fechas.",
    quickPresetsTitle: "Accesos Rápidos:",
    preset30: "+30 Días",
    preset90: "+90 Días (Trimestre)",
    presetEndMonth: "Fin de Mes",
    presetNewYear: "Año Nuevo",
    startDate: "Fecha de Inicio",
    endDate: "Fecha Final",
    includeEndDate: "Incluir fecha final en el cálculo (sumar 1 día)",
    calculateBtn: "Calcular Días",
    
    // Results
    totalDays: "Días Naturales",
    totalDaysSub: "Tiempo Total",
    businessDays: "Días Hábiles",
    businessDaysSub: "Lunes a Viernes",
    weeks: "Semanas",
    weeksSub: "Semanas Completas",
    weekends: "Fines de Semana",
    weekendsSub: "Sábados y Domingos",
    breakdownLabel: "Desglose",
    yearShareLabel: "Porcentaje del Año",
    totalHoursLabel: "Total de Horas",
    copySummary: "Copiar Resumen",
    copied: "¡Copiado! ✅",

    // Explanations
    monthsAndWeeks: (months: number, weeks: number, days: number) => 
      `${months} meses, o ${weeks} semanas y ${days} días.`,
    yearPercentage: (pct: string) => `${pct}% de un año estándar de 365 días`,
    hoursFormatted: (hours: number) => `aprox. ${hours.toLocaleString('es-ES')} horas`
  }
};

/**
 * Format a Date to YYYY-MM-DD for date inputs
 */
export function formatDateForInputES(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Format a date string to Spanish format (DD/MM/YYYY)
 */
export function formatDateES(dateStr: string): string {
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}
